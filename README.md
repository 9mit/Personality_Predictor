# 🌌 Akasha Oracle: The Celestial Mind Reader & Personality Predictor

[![Status](https://img.shields.io/badge/Status-Complete-brightgreen.svg)]()
[![Languages](https://img.shields.io/badge/Languages-11%20Supported-purple.svg)]()
[![Engine](https://img.shields.io/badge/Inference-Adaptive%20Bayesian-blue.svg)]()
[![Audio](https://img.shields.io/badge/Audio-Procedural%20WebAudio-gold.svg)]()

> *"I am Akasha, the cosmic mind reader. Speak honestly to my queries, and I shall pierce the veil to reveal your authentic soul archetype."*

---

## 🔮 Overview

**Akasha Oracle** is a state-of-the-art celestial mind reader and personality predictor inspired by Akinator. It combines an **Adaptive Bayesian Inference Engine** with handcrafted digital art aesthetics, smooth 60 FPS animations, procedural sound synthesis, and comprehensive multilingual support across the **top 10 most spoken languages of India + English**.

---

## ✨ Key Capabilities & Highlights

### 🧠 1. Akinator-Style Adaptive Bayesian Inference
- **Entropy-Based Question Selection**: Rather than a static quiz, the engine evaluates expected information gain to dynamically pick the query that best separates the leading archetype contenders.
- **Dynamic Oracle Certainty Gauge**: Real-time confidence ring that reacts to your answers (from *Calibrating Aura* at 12% to *Cosmic Epiphany* at 98%).
- **5-Point Universal Response Scale**:
  1. 👍 **Definitely Yes**
  2. ✨ **Probably / Mostly**
  3. 🤔 **Not Sure / In-Between**
  4. 🌙 **Probably Not / Rarely**
  5. ❌ **Definitely No**
- **Tie-Breaker Refinement ("Not Quite Me? Guess Again")**: If the predicted archetype doesn't fully resonate, the Oracle gracefully downweights it and asks 3–5 targeted tie-breakers to uncover your secondary archetype.

---

### 🇮🇳 2. Multilingual Support (Top 10 Indian Languages + English)
Experience the Oracle in your native language with zero progress loss on switching:

| Language | Script | Region |
| :--- | :--- | :--- |
| **English** | Latin | Global / Lingua Franca |
| **हिन्दी (Hindi)** | Devanagari | Northern & Central India |
| **বাংলা (Bengali)** | Bengali | West Bengal & Tripura |
| **मराठी (Marathi)** | Devanagari | Maharashtra & Goa |
| **తెలుగు (Telugu)** | Telugu | Andhra Pradesh & Telangana |
| **தமிழ் (Tamil)** | Tamil | Tamil Nadu & Puducherry |
| **ગુજરાતી (Gujarati)** | Gujarati | Gujarat |
| **اردو (Urdu)** | Arabic / Nastaliq (RTL) | Pan-India |
| **ಕನ್ನಡ (Kannada)** | Kannada | Karnataka |
| **ଓଡ଼ିଆ (Odia)** | Odia | Odisha |
| **മലയാളം (Malayalam)** | Malayalam | Kerala & Lakshadweep |

---

### 🎨 3. Handcrafted Cosmic Aesthetics (No AI Slop)
- **Interactive Starlight Canvas**: Multi-layered particle nebula with realistic twinkling, parallax depth, and mouse-reactive constellation filaments.
- **Astrolabe Avatar**: Animated concentric gyroscope rings that rotate at celestial intervals, featuring reactive eye glows and an expressive speech bubble.
- **Glassmorphism 2.0**: Silky smooth backdrop filters, subtle specular gradients, and responsive typography (Syne, Cinzel, Outfit, Plus Jakarta Sans, and native Indic fonts).
- **Procedural Web Audio API**: Self-contained sound synthesizer with crystal bell chimes, celestial frequency sweeps, and harmonious revelation chords. No external audio files required!

---

### 🌟 4. The 16 Cosmic Personality Archetypes
Grounded in Jungian typology, Big 5 psychology, and ancient *Pancha Bhoota* (Five Elements):

1. **The Cosmic Visionary** (*Ether / Akasha*) — Transformational dreamers and bold innovators.
2. **The Celestial Empath** (*Water / Jal*) — Deep emotional intuition and unconditional healing.
3. **The Galactic Architect** (*Earth / Prithvi*) — Master planners and creators of enduring systems.
4. **The Free-Spirited Wanderer** (*Air / Vayu*) — Seekers of adventure, boundless freedom, and novelty.
5. **The Cosmic Sage** (*Ether / Akasha*) — Ancient philosophical wisdom and contemplation.
6. **The Stellar Commander** (*Fire / Agni*) — Decisive, charismatic, and courageous leaders.
7. **The Master Strategist** (*Earth / Prithvi*) — Razor-sharp Chanakya-style intellect and tactics.
8. **The Gentle Guardian** (*Water / Jal*) — Steadfast protectors and devoted anchors.
9. **The Electric Catalyst** (*Fire / Agni*) — Sparks of revolution and bold transformation.
10. **The Harmonic Peacemaker** (*Air / Vayu*) — Diplomats who unite divided souls.
11. **The Grounded Realist** (*Earth / Prithvi*) — Common sense, pragmatic, and unshakable.
12. **The Alchemist of Ideas** (*Ether / Akasha*) — Synthesis of science, art, and mysticism.
13. **The Fearless Trailblazer** (*Fire / Agni*) — Pioneers who carve paths through uncharted realms.
14. **The Mystic Intuitive** (*Water / Jal*) — Attuned to unseen energies and unspoken truths.
15. **The Playful Joybringer** (*Air / Vayu*) — Infectious humor, warmth, and celebration of life.
16. **The Resilient Pillar** (*Earth / Prithvi*) — Noble endurance and unyielding integrity.

---

## 🚀 Running the Project

No build step or dependencies required. Everything runs in any modern browser!

### Option 1: Direct File Open
Simply double-click [`index.html`](file:///n:/MYPROJECTS/personality-predictor/index.html) or open it with Google Chrome, Microsoft Edge, Firefox, or Safari.

### Option 2: Local HTTP Server
```powershell
# Using Python
python -m http.server 8080

# Or using Node.js
npx serve .
```
Then navigate to: `http://localhost:8080/`

---

## 📂 Project Architecture

```
personality-predictor/
├── index.html            # Semantic HTML5 markup & application layout
├── css/
│   └── style.css         # Glassmorphism design system, astrolabe rings & animations
├── js/
│   ├── archetypes.js     # 16 archetype vectors, dimensions & kindred spirits
│   ├── questions.js      # Calibrated 20-question vector pool in universal everyday terms
│   ├── translations.js   # Complete 11-language lexicon (Top 10 Indian + English)
│   ├── engine.js         # Adaptive Bayesian inference engine & confidence scaling
│   ├── audio.js          # Procedural Web Audio API sound synthesizer
│   ├── particles.js      # Interactive HTML5 canvas starfield & constellation filaments
│   └── app.js            # Main application controller & state transitions
└── .gitignore            # Standard repository ignore configuration
```

---

## 📜 License
MIT License. Built with passion for digital craftsmanship and celestial psychology.
