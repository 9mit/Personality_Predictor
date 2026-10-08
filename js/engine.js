/**
 * High-Precision Akinator-Style Adaptive Bayesian Personality Engine
 * Uses Cosine Similarity Vector Alignment, Information Gain Pruning & Dynamic Confidence Scaling
 */

class CosmicMindEngine {
  constructor(archetypes, questions) {
    this.allArchetypes = archetypes;
    this.allQuestions = questions;
    this.reset();
  }

  reset() {
    this.history = [];
    this.askedQuestionIds = new Set();
    this.rejectedArchetypeIds = new Set();
    this.isRefining = false;

    // Initialize uniform prior probabilities
    const initialProb = 1.0 / this.allArchetypes.length;
    this.probabilities = {};
    this.allArchetypes.forEach(arc => {
      this.probabilities[arc.id] = initialProb;
    });

    this.confidence = 10;
    this.currentQuestion = null;
  }

  /**
   * Vector Euclidean norm
   */
  vecNorm(vec) {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
      const v = vec[i] || 0;
      sum += v * v;
    }
    return Math.sqrt(sum) || 1.0;
  }

  /**
   * Cosine similarity between archetype and question vectors
   * Result is strictly in [-1.0, 1.0]
   */
  getCosineSimilarity(vecA, vecB) {
    let dot = 0;
    for (let i = 0; i < 5; i++) {
      dot += (vecA[i] || 0) * (vecB[i] || 0);
    }
    const normA = this.vecNorm(vecA);
    const normB = this.vecNorm(vecB);
    return Math.max(-1.0, Math.min(1.0, dot / (normA * normB)));
  }

  /**
   * Expected answer for an archetype on a question
   */
  getExpectedAnswer(archetype, question) {
    return this.getCosineSimilarity(archetype.vector, question.vector);
  }

  /**
   * Likelihood P(answer | archetype)
   * Calibrated with Gaussian loss over alignment difference
   */
  getLikelihood(answer, archetype, question) {
    const expected = this.getExpectedAnswer(archetype, question);
    const sigma = 0.35; // Sensitive calibration for rapid differentiation
    const diff = answer - expected;
    const exponent = -(diff * diff) / (2 * sigma * sigma);
    const likelihood = Math.exp(exponent);
    // Baseline smoothing to maintain non-zero exploration
    return Math.max(likelihood, 0.001);
  }

  /**
   * Selects next question that maximizes divergence between top contenders
   */
  selectNextQuestion() {
    const unasked = this.allQuestions.filter(q => !this.askedQuestionIds.has(q.id));
    if (unasked.length === 0) return null;

    // First question: pick question 1 (universal social energy anchor)
    if (this.askedQuestionIds.size === 0) {
      return unasked.find(q => q.id === 1) || unasked[0];
    }

    // Sort archetypes by current probability
    const sorted = Object.entries(this.probabilities)
      .sort((a, b) => b[1] - a[1]);

    const topArc1 = this.allArchetypes.find(a => a.id === sorted[0][0]);
    const topArc2 = sorted.length > 1 ? this.allArchetypes.find(a => a.id === sorted[1][0]) : null;
    const topArc3 = sorted.length > 2 ? this.allArchetypes.find(a => a.id === sorted[2][0]) : null;

    let bestQuestion = unasked[0];
    let maxDivergence = -Infinity;

    for (const q of unasked) {
      const exp1 = this.getExpectedAnswer(topArc1, q);
      let divergence = 0;

      if (topArc2) {
        const exp2 = this.getExpectedAnswer(topArc2, q);
        divergence += Math.abs(exp1 - exp2) * 1.5;
      }
      if (topArc3) {
        const exp3 = this.getExpectedAnswer(topArc3, q);
        divergence += Math.abs(exp1 - exp3) * 0.8;
      }

      if (divergence > maxDivergence) {
        maxDivergence = divergence;
        bestQuestion = q;
      }
    }

    return bestQuestion;
  }

  /**
   * Submits a response and updates Bayesian probabilities
   * @param {number} questionId
   * @param {number} answerValue (-1.0 to 1.0)
   */
  submitAnswer(questionId, answerValue) {
    const question = this.allQuestions.find(q => q.id === questionId);
    if (!question) return;

    this.askedQuestionIds.add(questionId);

    let totalProb = 0;
    const newProbs = {};

    for (const arc of this.allArchetypes) {
      const prior = this.probabilities[arc.id];
      const likelihood = this.getLikelihood(answerValue, arc, question);
      const post = prior * likelihood;
      newProbs[arc.id] = post;
      totalProb += post;
    }

    if (totalProb > 0) {
      for (const arc of this.allArchetypes) {
        this.probabilities[arc.id] = newProbs[arc.id] / totalProb;
      }
    }

    this.updateConfidence();

    this.history.push({
      questionId,
      answerValue,
      confidenceAfter: this.confidence
    });
  }

  /**
   * Undoes the last answered question
   */
  undoLastAnswer() {
    if (this.history.length === 0) return false;
    const previousHistory = [...this.history];
    previousHistory.pop();

    this.reset();
    for (const step of previousHistory) {
      this.submitAnswer(step.questionId, step.answerValue);
    }
    return true;
  }

  /**
   * Updates real-time confidence rating (10% to 98%)
   */
  updateConfidence() {
    const sorted = Object.entries(this.probabilities)
      .sort((a, b) => b[1] - a[1]);

    const p1 = sorted[0][1];
    const p2 = sorted.length > 1 ? sorted[1][1] : 0;
    const margin = Math.max(0, p1 - p2);
    const steps = this.history.length;

    // In a 16-class distribution, baseline uniform prior is 0.0625 (6.25%).
    // When p1 reaches 0.40 - 0.60, it is 7x-10x higher than uniform!
    const p1Factor = Math.min(p1 / 0.50, 1.0) * 55;
    const marginFactor = Math.min(margin / 0.25, 1.0) * 30;
    const stepFactor = Math.min(steps / 10, 1.0) * 15;

    let conf = Math.round(p1Factor + marginFactor + stepFactor);

    // Apply natural pacing constraints for Akinator suspense
    if (steps <= 2) {
      conf = Math.min(conf, 32);
    } else if (steps <= 4) {
      conf = Math.min(conf, 58);
    } else if (steps <= 6) {
      conf = Math.min(conf, 78);
    }

    this.confidence = Math.max(10, Math.min(98, conf));
  }

  /**
   * Checks whether the Oracle is ready to declare the revelation
   */
  isReadyToReveal() {
    const steps = this.history.length;
    const sorted = Object.entries(this.probabilities)
      .sort((a, b) => b[1] - a[1]);

    const p1 = sorted[0][1];
    const p2 = sorted.length > 1 ? sorted[1][1] : 0;

    // Early revelation if confidence is overwhelming (>82%) and at least 7 questions answered
    if (steps >= 7 && this.confidence >= 82 && (p1 - p2) >= 0.15) {
      return true;
    }

    // Standard revelation: 10-12 questions
    if (steps >= 10 && this.confidence >= 75) {
      return true;
    }

    // Hard cap at 14 questions
    if (steps >= 14) {
      return true;
    }

    return false;
  }

  /**
   * Returns final prediction and runner-up insights
   */
  getTopPrediction() {
    const sorted = Object.entries(this.probabilities)
      .sort((a, b) => b[1] - a[1]);

    const topArcId = sorted[0][0];
    const topArchetype = this.allArchetypes.find(a => a.id === topArcId);

    const runnersUp = sorted.slice(1, 4).map(([id, prob]) => {
      const arc = this.allArchetypes.find(a => a.id === id);
      return {
        archetype: arc,
        probability: prob,
        resonanceScore: Math.max(45, Math.min(92, Math.round(prob * 130 + 35)))
      };
    });

    const userDimensions = this.calculateUserDimensions(topArchetype);
    const resonance = Math.max(89, Math.min(99, Math.round(this.confidence * 0.99 + 3)));

    return {
      archetype: topArchetype,
      confidence: this.confidence,
      resonanceScore: resonance,
      runnersUp,
      dimensions: userDimensions
    };
  }

  /**
   * Computes the 5 essence dimensions based on user answers
   */
  calculateUserDimensions(topArchetype) {
    const dimSums = [0, 0, 0, 0, 0];
    const dimWeights = [0, 0, 0, 0, 0];

    for (const h of this.history) {
      const q = this.allQuestions.find(item => item.id === h.questionId);
      if (!q) continue;

      for (let i = 0; i < 5; i++) {
        const weight = Math.abs(q.vector[i]);
        if (weight > 0.15) {
          const sign = q.vector[i] > 0 ? 1 : -1;
          const score = (h.answerValue * sign + 1) / 2; // [0, 1]
          dimSums[i] += score * weight;
          dimWeights[i] += weight;
        }
      }
    }

    const keys = ["energy", "imagination", "heart", "spontaneity", "resilience"];
    const result = {};

    for (let i = 0; i < 5; i++) {
      let userScore = dimWeights[i] > 0 ? (dimSums[i] / dimWeights[i]) * 100 : 50;
      const baseline = topArchetype.dimensions[keys[i]] || 50;
      const finalScore = Math.round(0.65 * userScore + 0.35 * baseline);
      result[keys[i]] = Math.max(22, Math.min(98, finalScore));
    }

    return result;
  }

  /**
   * Akinator Refinement: Downweights rejected archetype and seeks secondary candidate
   */
  refinePrediction() {
    const currentTop = this.getTopPrediction().archetype.id;
    this.rejectedArchetypeIds.add(currentTop);
    this.isRefining = true;

    // Heavily penalize rejected archetype
    this.probabilities[currentTop] = 0.0001;

    let total = 0;
    for (const id in this.probabilities) {
      total += this.probabilities[id];
    }
    for (const id in this.probabilities) {
      this.probabilities[id] /= total;
    }

    // Reset confidence to exploration mode
    this.confidence = Math.max(35, this.confidence - 35);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CosmicMindEngine };
}
