/**
 * Calibrated Question Pool (20 Simple, Universally Understood Everyday Queries)
 * Vectors: [E/I (Extraversion), N/S (Intuition), F/T (Feeling), P/J (Spontaneity), A/R (Assertive/Resilient)]
 * Values between -1.0 and +1.0
 */

const QUESTIONS = [
  {
    id: 1,
    key: "q1",
    scenario: "socialCrowds",
    // "At a big lively party, wedding, or festival, do you feel energized and talk to many people?"
    // E+, S, F, P, A
    vector: [0.9, 0.0, 0.2, 0.3, 0.4]
  },
  {
    id: 2,
    key: "q2",
    scenario: "plansVsFlow",
    // "Do you prefer making detailed checklists before starting your day, rather than going with the flow?"
    // I, S, T, J++, A
    vector: [-0.2, -0.4, -0.2, -0.9, 0.2]
  },
  {
    id: 3,
    key: "q3",
    scenario: "logicVsHeart",
    // "When resolving an argument between friends, do you prioritize pure facts over hurt feelings?"
    // E/I, S, T++, J, A
    vector: [0.0, -0.2, -0.9, -0.3, 0.3]
  },
  {
    id: 4,
    key: "q4",
    scenario: "daydreamsAndIdeas",
    // "Do you frequently get lost in wild imagination, creative daydreams, or future 'what if' possibilities?"
    // I, N++, F, P, R
    vector: [-0.3, 0.9, 0.3, 0.6, -0.2]
  },
  {
    id: 5,
    key: "q5",
    scenario: "calmInChaos",
    // "When unexpected trouble or sudden chaos strikes, do you stay remarkably cool, calm, and unshaken?"
    // E/I, S, T, J, A++
    vector: [0.1, -0.1, -0.3, -0.2, 0.9]
  },
  {
    id: 6,
    key: "q6",
    scenario: "emotionalRadar",
    // "Can you instantly sense how someone is truly feeling inside before they even say a single word?"
    // I, N+, F++, P, R
    vector: [-0.3, 0.7, 0.9, 0.2, -0.1]
  },
  {
    id: 7,
    key: "q7",
    scenario: "takingLead",
    // "In a group project or family event, do you naturally take charge and tell people what needs to be done?"
    // E++, N, T, J+, A++
    vector: [0.9, 0.2, -0.4, -0.6, 0.8]
  },
  {
    id: 8,
    key: "q8",
    scenario: "unexploredAdventures",
    // "Do you love trying unfamiliar foods, wandering down unknown streets, and diving into adventures?"
    // E+, N+, F, P++, A+
    vector: [0.6, 0.7, 0.1, 0.9, 0.5]
  },
  {
    id: 9,
    key: "q9",
    scenario: "dailyRoutines",
    // "Do steady daily routines and familiar habits make you feel safe and productive?"
    // I, S++, T, J++, A
    vector: [-0.2, -0.8, 0.1, -0.9, 0.3]
  },
  {
    id: 10,
    key: "q10",
    scenario: "helpingHeart",
    // "Would you pause your own urgent tasks to console or help someone who is struggling?"
    // E/I, N, F++, P, R
    vector: [0.2, 0.3, 0.9, 0.4, -0.1]
  },
  {
    id: 11,
    key: "q11",
    scenario: "deepPondering",
    // "Do you spend quiet hours thinking about the mystery of existence, consciousness, and why we are here?"
    // I++, N++, T/F, P, R++
    vector: [-0.8, 0.9, 0.2, 0.3, -0.7]
  },
  {
    id: 12,
    key: "q12",
    scenario: "bluntTruth",
    // "Do you believe it is better to speak the direct truth openly, even if it might sting someone?"
    // E, S, T++, J, A+
    vector: [0.3, -0.3, -0.9, -0.2, 0.6]
  },
  {
    id: 13,
    key: "q13",
    scenario: "thrillOfWinning",
    // "When playing games or pursuing goals, does the thrill of winning drive you with intense fire?"
    // E++, N, T+, J, A++
    vector: [0.8, 0.2, -0.5, -0.3, 0.8]
  },
  {
    id: 14,
    key: "q14",
    scenario: "breakTheRules",
    // "Do you love questioning established traditions and breaking rules to invent something radically fresh?"
    // E+, N++, T/F, P++, A
    vector: [0.5, 0.9, 0.1, 0.9, 0.4]
  },
  {
    id: 15,
    key: "q15",
    scenario: "masterOfDetails",
    // "Do you enjoy fine meticulous craft, catching tiny errors that others easily overlook?"
    // I+, S++, T++, J++, A
    vector: [-0.6, -0.7, -0.5, -0.8, 0.3]
  },
  {
    id: 16,
    key: "q16",
    scenario: "rechargeSolitude",
    // "After a long busy day, do you recharge your soul best in quiet solitary peace without talking?"
    // I++, S/N, F, P/J, R
    vector: [-0.9, 0.2, 0.1, 0.1, -0.3]
  },
  {
    id: 17,
    key: "q17",
    scenario: "gutFeeling",
    // "Do you trust your inner sixth-sense gut feeling more than spreadsheets, numbers, or books?"
    // I/E, N++, F++, P, A
    vector: [0.0, 0.8, 0.7, 0.5, 0.1]
  },
  {
    id: 18,
    key: "q18",
    scenario: "laughterAndEnergy",
    // "Are you usually the one cracking jokes, lifting moods, and bringing spark to the room?"
    // E++, N, F+, P++, A+
    vector: [0.95, 0.3, 0.6, 0.7, 0.7]
  },
  {
    id: 19,
    key: "q19",
    scenario: "unshakablePillar",
    // "Do friends and family rely on you as their steady rock who never crumbles under heavy burdens?"
    // I, S+, F+, J++, A++
    vector: [-0.4, -0.5, 0.5, -0.8, 0.9]
  },
  {
    id: 20,
    key: "q20",
    scenario: "bridgingDivides",
    // "Are you naturally gifted at soothing fiery tempers and bringing opposing sides to peaceful agreement?"
    // E/I, N+, F++, P, A
    vector: [0.1, 0.5, 0.9, 0.1, 0.4]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS };
}
