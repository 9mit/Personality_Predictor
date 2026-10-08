/**
 * Main Application Controller
 * Orchestrates Audio, Canvas Particles, Bayesian Inference Engine, and UI State
 */

class CosmicApp {
  constructor() {
    this.currentLang = localStorage.getItem("akasha_lang") || "en";
    this.engine = new CosmicMindEngine(ARCHETYPES, QUESTIONS);
    this.currentQuestion = null;
    this.starfield = null;

    this.initElements();
    this.bindEvents();
    this.applyLanguage(this.currentLang);
  }

  initElements() {
    // Canvas
    this.starfield = new CosmicStarfield("cosmic-canvas");

    // Views
    this.introView = document.getElementById("intro-view");
    this.questionView = document.getElementById("question-view");
    this.resultsView = document.getElementById("results-view");

    // Oracle & Speech
    this.oracleAvatar = document.getElementById("oracle-avatar-wrapper");
    this.oracleSpeech = document.getElementById("oracle-speech-text");
    this.oracleStatus = document.getElementById("gauge-status-text");

    // Confidence Gauge
    this.gaugeFill = document.getElementById("gauge-fill-circle");
    this.gaugeValue = document.getElementById("gauge-value-num");

    // Question chamber elements
    this.queryProgress = document.getElementById("query-progress-text");
    this.questionText = document.getElementById("question-text");
    this.optionsContainer = document.getElementById("options-grid");
    this.btnPrev = document.getElementById("btn-prev-query");
    this.btnSkip = document.getElementById("btn-skip-query");

    // Audio toggle
    this.btnSound = document.getElementById("btn-sound-toggle");
    this.updateSoundButtonState();

    // Language modal
    this.langModal = document.getElementById("lang-modal");
    this.btnLangModal = document.getElementById("btn-lang-modal");
    this.btnCloseLangModal = document.getElementById("btn-close-lang-modal");
    this.langCurrentLabel = document.getElementById("current-lang-label");

    // Results elements
    this.resultTitle = document.getElementById("result-title");
    this.resultDesc = document.getElementById("result-desc");
    this.resultIcon = document.getElementById("result-icon-main");
    this.resultElement = document.getElementById("result-element-badge");
    this.resultMatch = document.getElementById("result-match-badge");
    this.resultTraits = document.getElementById("result-traits-container");
    this.resultSuperpower = document.getElementById("result-superpower-text");
    this.resultShadow = document.getElementById("result-shadow-text");
    this.resultSutra = document.getElementById("result-sutra-text");
    this.resultKindred = document.getElementById("result-kindred-chips");
    this.resultDimBars = document.getElementById("result-dim-bars");
    this.runnersUpList = document.getElementById("runners-up-list");

    // Toast
    this.toast = document.getElementById("toast-notification");
  }

  bindEvents() {
    // Start Quiz
    document.getElementById("btn-start-oracle").addEventListener("click", () => {
      cosmicAudio.playClick();
      this.startJourney();
    });

    // Sound toggle
    this.btnSound.addEventListener("click", () => {
      const active = cosmicAudio.toggleMute();
      this.updateSoundButtonState();
      if (active) cosmicAudio.playChime();
    });

    // Language modal triggers
    this.btnLangModal.addEventListener("click", () => {
      cosmicAudio.playClick();
      this.openLanguageModal();
    });

    this.btnCloseLangModal.addEventListener("click", () => {
      cosmicAudio.playClick();
      this.closeLanguageModal();
    });

    this.langModal.addEventListener("click", (e) => {
      if (e.target === this.langModal) {
        this.closeLanguageModal();
      }
    });

    // Navigation buttons
    this.btnPrev.addEventListener("click", () => {
      cosmicAudio.playClick();
      this.handleUndo();
    });

    this.btnSkip.addEventListener("click", () => {
      cosmicAudio.playClick();
      this.handleSkip();
    });

    // Result buttons
    document.getElementById("btn-celebrate").addEventListener("click", () => {
      cosmicAudio.playCelebrate();
      this.triggerConfetti();
      this.showToast(this.getT("ui", "copiedToast") ? "✨ Cosmic resonance confirmed!" : "Resonance confirmed!");
    });

    document.getElementById("btn-guess-again").addEventListener("click", () => {
      cosmicAudio.playClick();
      this.handleRefineGuess();
    });

    document.getElementById("btn-share-result").addEventListener("click", () => {
      cosmicAudio.playClick();
      this.handleShare();
    });

    document.getElementById("btn-download-card").addEventListener("click", () => {
      cosmicAudio.playClick();
      this.generateDownloadCard();
    });

    document.getElementById("btn-copy-summary").addEventListener("click", () => {
      cosmicAudio.playClick();
      this.copySummaryToClipboard();
    });

    document.getElementById("btn-restart-all").addEventListener("click", () => {
      cosmicAudio.playClick();
      this.restart();
    });

    // Render language chips in intro and modal
    this.renderLanguageSelectors();
  }

  updateSoundButtonState() {
    const isMuted = cosmicAudio.isMuted();
    const soundIcon = document.getElementById("sound-icon");
    const soundText = document.getElementById("sound-text");

    if (isMuted) {
      soundIcon.className = "fa-solid fa-volume-xmark";
      soundText.textContent = this.getT("ui", "soundOff") || "Muted";
    } else {
      soundIcon.className = "fa-solid fa-volume-high";
      soundText.textContent = this.getT("ui", "soundOn") || "Sound FX";
    }
  }

  getT(section, key) {
    const langData = TRANSLATIONS[this.currentLang] || TRANSLATIONS["en"];
    if (langData[section] && langData[section][key]) {
      return langData[section][key];
    }
    // Fallback to English
    return TRANSLATIONS["en"][section]?.[key] || "";
  }

  applyLanguage(langKey) {
    if (!TRANSLATIONS[langKey]) langKey = "en";
    this.currentLang = langKey;
    localStorage.setItem("akasha_lang", langKey);

    const langInfo = TRANSLATIONS[langKey];
    document.documentElement.lang = langKey;
    document.documentElement.dir = langInfo.dir || "ltr";

    // Update Language Pill Label
    this.langCurrentLabel.textContent = `${langInfo.nativeName} (${langInfo.name})`;

    // Update Static UI strings
    document.querySelectorAll("[data-i18n]").forEach(elem => {
      const key = elem.getAttribute("data-i18n");
      const text = this.getT("ui", key);
      if (text) elem.textContent = text;
    });

    this.updateSoundButtonState();

    // If currently displaying a question, refresh text
    if (this.currentQuestion && this.questionView.style.display !== "none") {
      this.renderQuestion(this.currentQuestion);
    }

    // If currently on results, refresh results
    if (this.resultsView.style.display !== "none") {
      const prediction = this.engine.getTopPrediction();
      this.displayResults(prediction);
    }
  }

  renderLanguageSelectors() {
    const introGrid = document.getElementById("intro-lang-chips");
    const modalGrid = document.getElementById("modal-lang-grid");

    introGrid.innerHTML = "";
    modalGrid.innerHTML = "";

    Object.entries(TRANSLATIONS).forEach(([code, lang]) => {
      // Intro Chip
      const chip = document.createElement("button");
      chip.className = `lang-chip ${code === this.currentLang ? "active" : ""}`;
      chip.textContent = lang.nativeName;
      chip.addEventListener("click", () => {
        cosmicAudio.playClick();
        this.applyLanguage(code);
        this.renderLanguageSelectors();
      });
      introGrid.appendChild(chip);

      // Modal Card
      const card = document.createElement("div");
      card.className = `lang-card-item ${code === this.currentLang ? "active" : ""}`;
      card.innerHTML = `
        <div class="lang-card-names">
          <span class="lang-native">${lang.nativeName}</span>
          <span class="lang-roman">${lang.name}</span>
        </div>
        <span class="lang-region-badge">${lang.badge || "India"}</span>
      `;
      card.addEventListener("click", () => {
        cosmicAudio.playClick();
        this.applyLanguage(code);
        this.closeLanguageModal();
        this.renderLanguageSelectors();
      });
      modalGrid.appendChild(card);
    });
  }

  openLanguageModal() {
    this.langModal.style.display = "flex";
  }

  closeLanguageModal() {
    this.langModal.style.display = "none";
  }

  startJourney() {
    this.engine.reset();
    this.introView.style.display = "none";
    this.resultsView.style.display = "none";
    this.questionView.style.display = "block";

    this.setOracleSpeech(this.getT("ui", "speechStart"));
    this.updateConfidenceUI(12);

    this.loadNextAdaptiveQuestion();
  }

  loadNextAdaptiveQuestion() {
    this.currentQuestion = this.engine.selectNextQuestion();
    if (!this.currentQuestion) {
      this.triggerReveal();
      return;
    }

    this.renderQuestion(this.currentQuestion);
  }

  renderQuestion(question) {
    const qCount = this.engine.history.length + 1;
    this.queryProgress.textContent = `${this.getT("ui", "queryProgress")} ${qCount}`;

    // Get question text in current language
    const qText = this.getT("questions", question.key);
    this.questionText.textContent = qText;

    // Undo button state
    this.btnPrev.disabled = this.engine.history.length === 0;

    // Render the 5 Akinator options
    this.optionsContainer.innerHTML = "";
    const optionsData = [
      { val: 1.0, key: "optDefinitelyYes", class: "opt-def-yes", icon: "fa-solid fa-thumbs-up" },
      { val: 0.5, key: "optProbablyYes", class: "opt-prob-yes", icon: "fa-solid fa-sparkles" },
      { val: 0.0, key: "optNeutral", class: "opt-neutral", icon: "fa-solid fa-circle-question" },
      { val: -0.5, key: "optProbablyNo", class: "opt-prob-no", icon: "fa-solid fa-moon" },
      { val: -1.0, key: "optDefinitelyNo", class: "opt-def-no", icon: "fa-solid fa-ban" }
    ];

    optionsData.forEach(opt => {
      const card = document.createElement("div");
      card.className = `option-card ${opt.class}`;
      card.innerHTML = `
        <div class="option-left">
          <div class="option-icon-orb"><i class="${opt.icon}"></i></div>
          <span class="option-title">${this.getT("ui", opt.key)}</span>
        </div>
        <i class="fa-solid fa-chevron-right" style="color: var(--text-dim); font-size: 0.85rem;"></i>
      `;
      card.addEventListener("click", () => this.handleAnswer(question.id, opt.val));
      this.optionsContainer.appendChild(card);
    });
  }

  handleAnswer(questionId, answerValue) {
    cosmicAudio.playChime();
    this.engine.submitAnswer(questionId, answerValue);

    const confidence = this.engine.confidence;
    this.updateConfidenceUI(confidence);

    // Update Oracle reaction speech based on confidence milestone
    if (confidence < 35) {
      this.setOracleSpeech(this.getT("ui", "speechThinking"));
    } else if (confidence < 65) {
      this.setOracleSpeech(this.getT("ui", "speechDeepening"));
    } else if (confidence < 82) {
      this.setOracleSpeech(this.getT("ui", "speechAlmost"));
    }

    // Check if ready to reveal
    if (this.engine.isReadyToReveal()) {
      this.triggerReveal();
    } else {
      cosmicAudio.playSweep();
      this.loadNextAdaptiveQuestion();
    }
  }

  handleUndo() {
    const success = this.engine.undoLastAnswer();
    if (success) {
      this.updateConfidenceUI(this.engine.confidence);
      this.loadNextAdaptiveQuestion();
    }
  }

  handleSkip() {
    this.engine.askedQuestionIds.add(this.currentQuestion.id);
    this.loadNextAdaptiveQuestion();
  }

  updateConfidenceUI(conf) {
    // Circumference = 2 * PI * r = 2 * 3.14159 * 26 ≈ 163.36
    const totalLength = 163.36;
    const offset = totalLength - (conf / 100) * totalLength;
    this.gaugeFill.style.strokeDashoffset = offset;
    this.gaugeValue.textContent = `${conf}%`;

    // Status readout
    if (conf < 30) {
      this.oracleStatus.textContent = this.getT("ui", "confidenceLow");
      this.oracleAvatar.classList.remove("high-confidence");
    } else if (conf < 60) {
      this.oracleStatus.textContent = this.getT("ui", "confidenceMed");
      this.oracleAvatar.classList.remove("high-confidence");
    } else if (conf < 82) {
      this.oracleStatus.textContent = this.getT("ui", "confidenceHigh");
      this.oracleAvatar.classList.add("high-confidence");
    } else {
      this.oracleStatus.textContent = this.getT("ui", "confidenceFinal");
      this.oracleAvatar.classList.add("high-confidence");
    }
  }

  setOracleSpeech(text) {
    this.oracleSpeech.style.opacity = "0";
    setTimeout(() => {
      this.oracleSpeech.textContent = text;
      this.oracleSpeech.style.opacity = "1";
    }, 150);
  }

  triggerReveal() {
    this.setOracleSpeech(this.getT("ui", "speechRevealed"));
    this.updateConfidenceUI(98);
    cosmicAudio.playRevelation();

    // Cinematic delay
    setTimeout(() => {
      this.questionView.style.display = "none";
      this.resultsView.style.display = "block";
      const prediction = this.engine.getTopPrediction();
      this.displayResults(prediction);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 700);
  }

  displayResults(prediction) {
    const arc = prediction.archetype;
    const arcData = this.getT("archetypes", arc.id);

    this.resultTitle.textContent = arcData.title || arc.id;
    this.resultDesc.textContent = arcData.description;
    this.resultIcon.innerHTML = `<i class="${arc.icon}"></i>`;
    this.resultIcon.style.background = arc.gradient;

    // Badges
    const elementLabel = this.getT("ui", arc.elementKey) || arc.element;
    this.resultElement.innerHTML = `<i class="fa-solid fa-fire-flame-curved"></i> ${elementLabel}`;
    this.resultMatch.innerHTML = `<i class="fa-solid fa-dna"></i> ${prediction.resonanceScore}% ${this.getT("ui", "matchResonance")}`;

    // Traits
    this.resultTraits.innerHTML = "";
    (arcData.traits || []).forEach(trait => {
      const pill = document.createElement("span");
      pill.className = "trait-pill";
      pill.textContent = trait;
      this.resultTraits.appendChild(pill);
    });

    // Superpower & Shadow
    this.resultSuperpower.textContent = arcData.superpower;
    this.resultShadow.textContent = arcData.shadow;

    // Sutra Quote
    this.resultSutra.textContent = arcData.advice;

    // Kindred Spirits
    this.resultKindred.innerHTML = "";
    (arc.kindredSpirits || []).forEach(name => {
      const chip = document.createElement("span");
      chip.className = "kindred-chip";
      chip.innerHTML = `<i class="fa-solid fa-star"></i> ${name}`;
      this.resultKindred.appendChild(chip);
    });

    // Dimension Bars
    this.renderDimensionBars(prediction.dimensions);

    // Runners up
    this.renderRunnersUp(prediction.runnersUp);
  }

  renderDimensionBars(dims) {
    this.resultDimBars.innerHTML = "";
    const dimMeta = [
      { key: "energy", labelKey: "dimEnergy", val: dims.energy },
      { key: "imagination", labelKey: "dimImagination", val: dims.imagination },
      { key: "heart", labelKey: "dimHeart", val: dims.heart },
      { key: "spontaneity", labelKey: "dimSpontaneity", val: dims.spontaneity },
      { key: "resilience", labelKey: "dimResilience", val: dims.resilience }
    ];

    dimMeta.forEach(d => {
      const item = document.createElement("div");
      item.className = "dim-bar-item";
      item.innerHTML = `
        <div class="dim-meta">
          <span>${this.getT("ui", d.labelKey)}</span>
          <span style="font-weight: 700; color: #fff;">${d.val}%</span>
        </div>
        <div class="dim-track">
          <div class="dim-fill" style="width: 0%"></div>
        </div>
      `;
      this.resultDimBars.appendChild(item);

      // Trigger width animation
      setTimeout(() => {
        item.querySelector(".dim-fill").style.width = `${d.val}%`;
      }, 100);
    });
  }

  renderRunnersUp(runnersUp) {
    this.runnersUpList.innerHTML = "";
    runnersUp.forEach(r => {
      const rData = this.getT("archetypes", r.archetype.id);
      const card = document.createElement("div");
      card.className = "option-card";
      card.style.cursor = "default";
      card.innerHTML = `
        <div class="option-left">
          <div class="option-icon-orb" style="background: ${r.archetype.gradient}; color: #fff;">
            <i class="${r.archetype.icon}"></i>
          </div>
          <div>
            <div style="font-weight: 600; color: #fff;">${rData.title}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${r.archetype.element}</div>
          </div>
        </div>
        <div style="font-weight: 700; color: var(--accent-gold); font-size: 0.95rem;">
          ${r.resonanceScore}%
        </div>
      `;
      this.runnersUpList.appendChild(card);
    });
  }

  handleRefineGuess() {
    this.engine.refinePrediction();
    this.resultsView.style.display = "none";
    this.questionView.style.display = "block";
    this.setOracleSpeech(this.getT("ui", "speechRefining"));
    this.updateConfidenceUI(this.engine.confidence);
    this.loadNextAdaptiveQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  triggerConfetti() {
    const count = 40;
    const body = document.body;
    for (let i = 0; i < count; i++) {
      const conf = document.createElement("div");
      conf.style.position = "fixed";
      conf.style.width = `${Math.random() * 8 + 4}px`;
      conf.style.height = `${Math.random() * 8 + 4}px`;
      conf.style.backgroundColor = ["#8b5cf6", "#06b6d4", "#f43f5e", "#f59e0b", "#10b981"][Math.floor(Math.random() * 5)];
      conf.style.left = `${Math.random() * 100}vw`;
      conf.style.top = "-20px";
      conf.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
      conf.style.zIndex = "999";
      conf.style.pointerEvents = "none";
      conf.style.transition = `all ${Math.random() * 2 + 1.5}s cubic-bezier(0.25, 1, 0.5, 1)`;

      body.appendChild(conf);

      setTimeout(() => {
        conf.style.transform = `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 720}deg)`;
        conf.style.opacity = "0";
      }, 50);

      setTimeout(() => {
        conf.remove();
      }, 3600);
    }
  }

  handleShare() {
    const title = this.resultTitle.textContent;
    const text = `The Akasha Cosmic Oracle peered into my soul and revealed I am "${title}"! Discover your true celestial archetype:`;
    const url = window.location.href;

    if (navigator.share) {
      navigator.share({ title: "My Cosmic Archetype", text, url }).catch(() => {});
    } else {
      const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + url)}`;
      window.open(shareUrl, "_blank");
    }
  }

  copySummaryToClipboard() {
    const title = this.resultTitle.textContent;
    const desc = this.resultDesc.textContent;
    const text = `🌌 Cosmic Personality Reading: ${title}\n\n"${desc}"\n\nDiscover yours at: ${window.location.href}`;

    navigator.clipboard.writeText(text).then(() => {
      this.showToast(this.getT("ui", "copiedToast") || "Copied to clipboard!");
    });
  }

  generateDownloadCard() {
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext("2d");

    // Background Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 1200, 630);
    bgGrad.addColorStop(0, "#05060f");
    bgGrad.addColorStop(0.5, "#0b0f29");
    bgGrad.addColorStop(1, "#180e36");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1200, 630);

    // Subtle stars
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    for (let i = 0; i < 90; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * 1200, Math.random() * 630, Math.random() * 2 + 0.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Outer decorative border
    ctx.strokeStyle = "rgba(139, 92, 246, 0.4)";
    ctx.lineWidth = 3;
    ctx.strokeRect(40, 40, 1120, 550);

    // Inner glow border
    ctx.strokeStyle = "rgba(6, 182, 212, 0.25)";
    ctx.lineWidth = 1;
    ctx.strokeRect(55, 55, 1090, 520);

    // Header Tag
    ctx.fillStyle = "#8b5cf6";
    ctx.font = "bold 22px 'Outfit', sans-serif";
    ctx.fillText("AKASHA COSMIC ORACLE", 90, 110);

    // Archetype Title
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 52px 'Cinzel', serif";
    ctx.fillText(this.resultTitle.textContent, 90, 185);

    // Description text wrapping
    ctx.fillStyle = "#cbd5e1";
    ctx.font = "26px 'Plus Jakarta Sans', sans-serif";
    const descText = this.resultDesc.textContent;
    this.wrapText(ctx, descText, 90, 250, 1020, 38);

    // Superpower Box
    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    ctx.fillRect(90, 430, 480, 110);
    ctx.fillStyle = "#10b981";
    ctx.font = "bold 20px 'Outfit', sans-serif";
    ctx.fillText("COSMIC SUPERPOWER", 110, 465);
    ctx.fillStyle = "#ffffff";
    ctx.font = "20px 'Plus Jakarta Sans', sans-serif";
    this.wrapText(ctx, this.resultSuperpower.textContent, 110, 495, 440, 26);

    // Daily Sutra Box
    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    ctx.fillRect(630, 430, 480, 110);
    ctx.fillStyle = "#06b6d4";
    ctx.font = "bold 20px 'Outfit', sans-serif";
    ctx.fillText("COSMIC SUTRA", 650, 465);
    ctx.fillStyle = "#ffffff";
    ctx.font = "italic 20px 'Plus Jakarta Sans', sans-serif";
    this.wrapText(ctx, this.resultSutra.textContent, 650, 495, 440, 26);

    // Trigger download
    const link = document.createElement("a");
    link.download = "cosmic-personality-oracle.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    this.showToast("Cosmic card image generated!");
  }

  wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(" ");
    let line = "";
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line, x, y);
        line = words[n] + " ";
        y += lineHeight;
        if (y > 400 && maxWidth > 500) break; // Avoid overflowing header area
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);
  }

  showToast(message) {
    this.toast.textContent = message;
    this.toast.classList.add("show");
    setTimeout(() => {
      this.toast.classList.remove("show");
    }, 2800);
  }

  restart() {
    this.engine.reset();
    this.resultsView.style.display = "none";
    this.questionView.style.display = "none";
    this.introView.style.display = "flex";
    this.setOracleSpeech(this.getT("ui", "oracleIntro"));
    this.updateConfidenceUI(10);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.app = new CosmicApp();
});
