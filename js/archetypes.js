/**
 * The 16 Cosmic Personality Archetypes
 * Grounded in Jungian, Big 5, and Ancient Elemental Typology
 * Vectors: [Extraversion/Introversion, Intuition/Sensing, Feeling/Thinking, Perceiving/Judging, Assertive/Reflective]
 * Scale: -1.0 to +1.0
 */

const ARCHETYPES = [
  {
    id: "visionary",
    element: "Ether",
    elementKey: "elementEther",
    icon: "fa-solid fa-lightbulb",
    badgeColor: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    vector: [0.6, 0.9, 0.3, 0.7, 0.8], // E+, N+, F+, P+, A+
    dimensions: {
      energy: 78,      // High extraverted radiance
      imagination: 96, // Boundless vision
      heart: 65,       // Warm empathy
      spontaneity: 84, // Creative agility
      resilience: 88   // Cosmic courage
    },
    kindredSpirits: ["Dr. APJ Abdul Kalam", "Kalpana Chawla", "Nikola Tesla", "Rabindranath Tagore"]
  },
  {
    id: "healer",
    element: "Water",
    elementKey: "elementWater",
    icon: "fa-solid fa-hand-holding-heart",
    badgeColor: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    vector: [-0.4, 0.7, 0.9, 0.2, -0.3], // I+, N+, F++, P, R+
    dimensions: {
      energy: 42,
      imagination: 85,
      heart: 98,
      spontaneity: 60,
      resilience: 68
    },
    kindredSpirits: ["Mother Teresa", "Amrita Pritam", "Rumi", "Mahatma Gandhi"]
  },
  {
    id: "architect",
    element: "Earth",
    elementKey: "elementEarth",
    icon: "fa-solid fa-compass-drafting",
    badgeColor: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    vector: [-0.7, -0.4, -0.9, -0.9, 0.9], // I+, S, T++, J++, A+
    dimensions: {
      energy: 35,
      imagination: 62,
      heart: 30,
      spontaneity: 18,
      resilience: 94
    },
    kindredSpirits: ["Sir M. Visvesvaraya", "E. Sreedharan", "Marie Curie", "Ada Lovelace"]
  },
  {
    id: "wanderer",
    element: "Air",
    elementKey: "elementAir",
    icon: "fa-solid fa-wind",
    badgeColor: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    vector: [0.5, 0.6, 0.2, 0.9, 0.6], // E, N, F, P++, A
    dimensions: {
      energy: 82,
      imagination: 88,
      heart: 62,
      spontaneity: 96,
      resilience: 80
    },
    kindredSpirits: ["Ibn Battuta", "Swami Vivekananda", "Frida Kahlo", "Steve Jobs"]
  },
  {
    id: "sage",
    element: "Ether",
    elementKey: "elementEther",
    icon: "fa-solid fa-book-sparkles",
    badgeColor: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #6366f1)",
    vector: [-0.8, 0.9, -0.2, -0.4, -0.5], // I++, N++, T, J, R++
    dimensions: {
      energy: 28,
      imagination: 95,
      heart: 54,
      spontaneity: 45,
      resilience: 82
    },
    kindredSpirits: ["Adi Shankara", "Jiddu Krishnamurti", "Albert Einstein", "Aryabhata"]
  },
  {
    id: "commander",
    element: "Fire",
    elementKey: "elementFire",
    icon: "fa-solid fa-crown",
    badgeColor: "#ef4444",
    gradient: "linear-gradient(135deg, #ef4444, #f97316)",
    vector: [0.9, 0.5, -0.7, -0.8, 0.9], // E++, N, T++, J++, A++
    dimensions: {
      energy: 94,
      imagination: 75,
      heart: 38,
      spontaneity: 32,
      resilience: 98
    },
    kindredSpirits: ["Chhatrapati Shivaji Maharaj", "Netaji Subhash Chandra Bose", "Rani Lakshmibai", "Alexander the Great"]
  },
  {
    id: "strategist",
    element: "Earth",
    elementKey: "elementEarth",
    icon: "fa-solid fa-chess-knight",
    badgeColor: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1, #3b82f6)",
    vector: [-0.6, 0.8, -0.9, -0.7, 0.7], // I+, N++, T++, J+, A+
    dimensions: {
      energy: 38,
      imagination: 90,
      heart: 32,
      spontaneity: 28,
      resilience: 90
    },
    kindredSpirits: ["Chanakya (Kautilya)", "Viswanathan Anand", "Sun Tzu", "John von Neumann"]
  },
  {
    id: "guardian",
    element: "Water",
    elementKey: "elementWater",
    icon: "fa-solid fa-shield-heart",
    badgeColor: "#14b8a6",
    gradient: "linear-gradient(135deg, #14b8a6, #06b6d4)",
    vector: [-0.3, -0.6, 0.8, -0.9, 0.5], // I, S+, F++, J++, A
    dimensions: {
      energy: 48,
      imagination: 42,
      heart: 92,
      spontaneity: 22,
      resilience: 86
    },
    kindredSpirits: ["Sardar Vallabhbhai Patel", "Florence Nightingale", "Hanuman", "Harriet Tubman"]
  },
  {
    id: "catalyst",
    element: "Fire",
    elementKey: "elementFire",
    icon: "fa-solid fa-bolt",
    badgeColor: "#e11d48",
    gradient: "linear-gradient(135deg, #e11d48, #f43f5e)",
    vector: [0.9, 0.7, 0.3, 0.8, 0.8], // E++, N+, F, P++, A+
    dimensions: {
      energy: 96,
      imagination: 88,
      heart: 66,
      spontaneity: 92,
      resilience: 84
    },
    kindredSpirits: ["Bhagat Singh", "Joan of Arc", "Freddie Mercury", "Bruce Lee"]
  },
  {
    id: "peacemaker",
    element: "Air",
    elementKey: "elementAir",
    icon: "fa-solid fa-dove",
    badgeColor: "#38bdf8",
    gradient: "linear-gradient(135deg, #38bdf8, #818cf8)",
    vector: [-0.2, 0.4, 0.9, 0.1, 0.3], // I, N, F++, P, A
    dimensions: {
      energy: 52,
      imagination: 70,
      heart: 94,
      spontaneity: 58,
      resilience: 76
    },
    kindredSpirits: ["Gautama Buddha", "Nelson Mandela", "Dalai Lama", "Desmond Tutu"]
  },
  {
    id: "realist",
    element: "Earth",
    elementKey: "elementEarth",
    icon: "fa-solid fa-mountain",
    badgeColor: "#84cc16",
    gradient: "linear-gradient(135deg, #84cc16, #10b981)",
    vector: [0.1, -0.8, -0.6, -0.6, 0.8], // Ambivert, S++, T+, J+, A+
    dimensions: {
      energy: 56,
      imagination: 35,
      heart: 45,
      spontaneity: 34,
      resilience: 92
    },
    kindredSpirits: ["MS Dhoni", "Warren Buffett", "Kamarajar", "Marcus Aurelius"]
  },
  {
    id: "alchemist",
    element: "Ether",
    elementKey: "elementEther",
    icon: "fa-solid fa-flask-vial",
    badgeColor: "#d946ef",
    gradient: "linear-gradient(135deg, #d946ef, #8b5cf6)",
    vector: [0.2, 0.9, 0.5, 0.7, 0.6], // Ambivert, N++, F+, P+, A
    dimensions: {
      energy: 64,
      imagination: 99,
      heart: 74,
      spontaneity: 82,
      resilience: 78
    },
    kindredSpirits: ["Srinivasa Ramanujan", "Leonardo da Vinci", "Satyajit Ray", "Carl Jung"]
  },
  {
    id: "trailblazer",
    element: "Fire",
    elementKey: "elementFire",
    icon: "fa-solid fa-meteor",
    badgeColor: "#f97316",
    gradient: "linear-gradient(135deg, #f97316, #e11d48)",
    vector: [0.8, 0.4, -0.3, 0.8, 0.9], // E+, N, T, P++, A++
    dimensions: {
      energy: 92,
      imagination: 72,
      heart: 50,
      spontaneity: 90,
      resilience: 95
    },
    kindredSpirits: ["Bachendri Pal", "Amelia Earhart", "Milkha Singh", "Ernest Shackleton"]
  },
  {
    id: "intuitive",
    element: "Water",
    elementKey: "elementWater",
    icon: "fa-solid fa-eye",
    badgeColor: "#a855f7",
    gradient: "linear-gradient(135deg, #a855f7, #3b82f6)",
    vector: [-0.7, 0.9, 0.8, 0.3, -0.4], // I++, N++, F++, P, R+
    dimensions: {
      energy: 32,
      imagination: 94,
      heart: 90,
      spontaneity: 64,
      resilience: 72
    },
    kindredSpirits: ["Mirabai", "Kahlil Gibran", "Lata Mangeshkar", "Vincent van Gogh"]
  },
  {
    id: "joybringer",
    element: "Air",
    elementKey: "elementAir",
    icon: "fa-solid fa-sun",
    badgeColor: "#eab308",
    gradient: "linear-gradient(135deg, #eab308, #f97316)",
    vector: [0.9, 0.4, 0.7, 0.8, 0.7], // E++, N, F+, P++, A
    dimensions: {
      energy: 98,
      imagination: 76,
      heart: 88,
      spontaneity: 94,
      resilience: 82
    },
    kindredSpirits: ["Kishore Kumar", "Charlie Chaplin", "Robin Williams", "Ranveer Singh"]
  },
  {
    id: "pillar",
    element: "Earth",
    elementKey: "elementEarth",
    icon: "fa-solid fa-gem",
    badgeColor: "#059669",
    gradient: "linear-gradient(135deg, #059669, #0d9488)",
    vector: [-0.5, -0.7, 0.4, -0.8, 0.9], // I+, S++, F, J++, A++
    dimensions: {
      energy: 40,
      imagination: 45,
      heart: 72,
      spontaneity: 20,
      resilience: 99
    },
    kindredSpirits: ["Ratan Tata", "Lal Bahadur Shastri", "Jane Goodall", "Abraham Lincoln"]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ARCHETYPES };
}
