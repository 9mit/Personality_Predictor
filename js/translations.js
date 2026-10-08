/**
 * Complete Multilingual Lexicon for 11 Languages of India + English
 * Top 10 Indian Languages: Hindi, Bengali, Marathi, Telugu, Tamil, Gujarati, Urdu, Kannada, Odia, Malayalam + English
 */

const TRANSLATIONS = {
  "en": {
    "name": "English",
    "nativeName": "English",
    "script": "Latin",
    "dir": "ltr",
    "badge": "Global",
    "ui": {
      "appTitle": "AKASHA ORACLE",
      "appSubtitle": "The Celestial Mind Reader & Personality Predictor",
      "oracleName": "Akasha",
      "selectLanguage": "Select Language",
      "chooseLangHeader": "Choose Your Sacred Tongue",
      "langSubtitle": "Experience the cosmic oracle in India's leading languages",
      "startButton": "Awaken The Oracle",
      "oracleIntro": "I am Akasha, the cosmic mind reader. Speak honestly to my queries, and I shall pierce the veil to reveal your authentic soul archetype.",
      "speechStart": "Focus your aura. I am connecting to your cosmic frequency...",
      "speechThinking": "Fascinating... your responses ripple across the stars.",
      "speechDeepening": "A distinct constellation pattern is emerging from your essence...",
      "speechAlmost": "Ah! The mist is parting. I can clearly see your inner archetype...",
      "speechRevealed": "The cosmic truth is unveiled! Behold your celestial archetype!",
      "speechRefining": "Fascinating! Let us delve deeper into your soul's hidden dimensions...",
      "confidenceLabel": "Oracle Certainty",
      "confidenceLow": "Calibrating Aura",
      "confidenceMed": "Detecting Resonance",
      "confidenceHigh": "Peering Into Soul",
      "confidenceFinal": "Cosmic Epiphany",
      "queryProgress": "Cosmic Query",
      "of": "of",
      "skip": "Skip Query",
      "prev": "Previous",
      "optDefinitelyYes": "Definitely Yes",
      "optProbablyYes": "Probably / Mostly",
      "optNeutral": "Not Sure / In-Between",
      "optProbablyNo": "Probably Not / Rarely",
      "optDefinitelyNo": "Definitely No",
      "resultsTitle": "The Oracle Has Spoken",
      "matchResonance": "Cosmic Resonance",
      "elementLabel": "Celestial Element",
      "superpowerLabel": "Cosmic Superpower",
      "shadowLabel": "Shadow Blindspot",
      "kindredLabel": "Kindred Spirits & Cosmic Twins",
      "adviceLabel": "Daily Cosmic Sutra",
      "dimensionsLabel": "Core Essence Spectrum",
      "dimEnergy": "Social Radiance (Extraversion)",
      "dimImagination": "Visionary Imagination",
      "dimHeart": "Empathy & Heart Resonance",
      "dimSpontaneity": "Spontaneity & Cosmic Flow",
      "dimResilience": "Inner Calm & Resilience",
      "btnAccurate": "Spot On! (Celebrate)",
      "btnGuessAgain": "Not Quite Me? Guess Again",
      "btnShare": "Share Cosmic Card",
      "btnDownload": "Download Oracle Card",
      "btnCopy": "Copy Result",
      "copiedToast": "Cosmic reading copied to clipboard!",
      "btnRestart": "Consult Oracle Again",
      "runnersUpTitle": "Secondary Resonances",
      "soundOn": "Sound FX: On",
      "soundOff": "Sound FX: Muted",
      "elementEther": "Ether (Akasha)",
      "elementFire": "Fire (Agni)",
      "elementWater": "Water (Jal)",
      "elementAir": "Air (Vayu)",
      "elementEarth": "Earth (Prithvi)"
    },
    "questions": {
      "q1": "At large lively celebrations, festivals, or gatherings, do you feel intensely energized and love mingling with many people?",
      "q2": "Do you prefer making detailed step-by-step checklists before starting your day, rather than going with spontaneous flow?",
      "q3": "When resolving a heated disagreement between friends, do you prioritize cold facts and truth over hurt feelings?",
      "q4": "Do you often drift into vivid daydreams, wild creative ideas, and 'what-if' possibilities about the future?",
      "q5": "When sudden crisis or unexpected chaos strikes, do you remain remarkably cool, steady, and composed?",
      "q6": "Can you instantly sense how someone is truly feeling inside before they even speak a single word?",
      "q7": "In a group project or family gathering, do you naturally step up and take charge of what needs to be done?",
      "q8": "Do you love trying unfamiliar foods, wandering down unexplored streets, and diving into spontaneous adventures?",
      "q9": "Do steady daily routines and familiar habits make you feel grounded, comfortable, and productive?",
      "q10": "Would you drop your own urgent plans without hesitation to comfort and support a friend in pain?",
      "q11": "Do you often stay awake late pondering deep cosmic mysteries, consciousness, and the meaning of our existence?",
      "q12": "Do you believe it is always better to speak the blunt truth directly, even if it temporarily stings?",
      "q13": "When playing games or pursuing ambitious goals, does the fierce desire to win ignite a fire inside you?",
      "q14": "Do you love questioning time-honored rules and traditions to invent your own fresh ways of doing things?",
      "q15": "Do you take deep satisfaction in meticulous craft, noticing tiny details and errors that others easily overlook?",
      "q16": "After a bustling social day, do you recharge your energy best in complete silence and solitary peace?",
      "q17": "Do you trust your inner intuitive gut feeling more than analytical spreadsheets, statistics, or advice?",
      "q18": "Are you usually the bright spark cracking jokes, lifting spirits, and filling the room with laughter?",
      "q19": "Do people around you rely on you as their unshakable anchor who never breaks down under heavy pressure?",
      "q20": "Are you naturally gifted at soothing angry tempers and guiding conflicting parties to peaceful harmony?"
    },
    "archetypes": {
      "visionary": {
        "title": "The Cosmic Visionary",
        "description": "Like a brilliant supernova illuminating uncharted galaxies, you see breathtaking possibilities where others only see limits. Your mind lives ten steps ahead in the future, inspiring everyone around you with boundless imagination.",
        "superpower": "Transforming abstract dreams into revolutionary realities.",
        "shadow": "Restlessness with mundane day-to-day routines.",
        "advice": "Ground your celestial visions in steady daily steps so the world can walk inside your dreams.",
        "traits": [
          "Visionary",
          "Inspiring",
          "Bold",
          "Forward-Thinking"
        ]
      },
      "healer": {
        "title": "The Celestial Empath",
        "description": "Like warm starlight soothing a wounded traveler, your heart carries deep emotional warmth. You feel the joys and heartaches of others as your own, offering unconditional shelter, healing, and genuine understanding.",
        "superpower": "Profound emotional intuition and unspoken heart connection.",
        "shadow": "Absorbing others' sorrows until your own spirit feels heavy.",
        "advice": "Remember to build sacred boundaries; your own inner garden also requires gentle rain.",
        "traits": [
          "Empathetic",
          "Nurturing",
          "Gentle",
          "Heart-Centered"
        ]
      },
      "architect": {
        "title": "The Galactic Architect",
        "description": "You possess the supreme precision of cosmic orbits. Where others see chaos, you see underlying patterns, blueprints, and structures. You build lasting systems, masterplans, and unyielding foundations that stand the test of time.",
        "superpower": "Flawless strategic structure and monumental follow-through.",
        "shadow": "Perfectionism and impatience with disorganized minds.",
        "advice": "Allow a little room for spontaneous magic; the universe itself was born from creative chaos.",
        "traits": [
          "Disciplined",
          "Strategic",
          "Systematic",
          "Reliable"
        ]
      },
      "wanderer": {
        "title": "The Free-Spirited Wanderer",
        "description": "Like a solar wind dancing across open constellations, you refuse to be caged by routine or convention. You are driven by an insatiable curiosity for life, thrill, adventure, and the poetry of the open road.",
        "superpower": "Boundless adaptability and infectious zest for freedom.",
        "shadow": "Resistance to long-term stillness or repetitive commitments.",
        "advice": "True freedom is not just moving across distances, but discovering infinity within the present moment.",
        "traits": [
          "Adventurous",
          "Spontaneous",
          "Free-Spirited",
          "Vibrant"
        ]
      },
      "sage": {
        "title": "The Cosmic Sage",
        "description": "Carrying the ancient quietude of deep space, you observe the world with extraordinary depth. You seek timeless wisdom over fleeting trends, peering beneath the surface of life to uncover fundamental spiritual and intellectual truths.",
        "superpower": "Deep philosophical clarity and penetrating insight.",
        "shadow": "Detachment from everyday emotional warmth.",
        "advice": "Share your profound wisdom with warmth; wisdom shines brightest when it warms cold hearts.",
        "traits": [
          "Wise",
          "Contemplative",
          "Profound",
          "Perceptive"
        ]
      },
      "commander": {
        "title": "The Stellar Commander",
        "description": "Like the central sun around which planets revolve, you possess an unmistakable aura of authority, courage, and purpose. In moments of crisis, heads naturally turn to you for direction, courage, and decisive action.",
        "superpower": "Decisive leadership and the courage to conquer obstacles.",
        "shadow": "Overbearing intensity when others hesitate or slow down.",
        "advice": "True strength lifts others up to stand beside you, rather than following behind you.",
        "traits": [
          "Authoritative",
          "Decisive",
          "Charismatic",
          "Fearless"
        ]
      },
      "strategist": {
        "title": "The Master Strategist",
        "description": "With the piercing intellect of Chanakya, you view life as a grand cosmic chessboard. You analyze motives, calculate probabilities, and navigate complex challenges with cool, methodical, and surgical precision.",
        "superpower": "Foreseeing multiple moves ahead and outsmarting complexity.",
        "shadow": "Overthinking and struggle with trusting gut emotions.",
        "advice": "Not all victories are won on the chessboard; sometimes surrendering to love is the ultimate triumph.",
        "traits": [
          "Analytical",
          "Calculated",
          "Sharp-Witted",
          "Methodical"
        ]
      },
      "guardian": {
        "title": "The Gentle Guardian",
        "description": "You are the quiet guardian shield that preserves family, community, and sacred heritage. Unshakably loyal, you protect those you love with quiet devotion, practical care, and selfless sacrifice.",
        "superpower": "Steadfast loyalty and protective devotion.",
        "shadow": "Struggling to say no and neglecting your own needs.",
        "advice": "Care for yourself with the same tenderness you shower upon those you cherish.",
        "traits": [
          "Loyal",
          "Protective",
          "Selfless",
          "Dependable"
        ]
      },
      "catalyst": {
        "title": "The Electric Catalyst",
        "description": "You are pure lightning in human form—a spark that shatters dull conformity and awakens sluggish spirits. Your bold energy, wit, and fearless defiance ignite revolutions in ideas, art, and society.",
        "superpower": "Igniting immediate transformation and breaking stale barriers.",
        "shadow": "Impulsive rebellion that burns bridges unnecessarily.",
        "advice": "Channel your holy fire with intention so it warms and illuminates rather than scorches.",
        "traits": [
          "Dynamic",
          "Rebellious",
          "Electric",
          "Transformative"
        ]
      },
      "peacemaker": {
        "title": "The Harmonic Peacemaker",
        "description": "Like a gentle stream smoothing sharp stones, you possess the celestial gift of harmony. You bridge bitter divides, soothe wounded egos, and create sanctuary wherever discord threatens to tear people apart.",
        "superpower": "Mastery of diplomacy and emotional reconciliation.",
        "shadow": "Avoiding necessary confrontation to keep superficial calm.",
        "advice": "Authentic peace sometimes requires speaking the truth that shakes the room before it heals it.",
        "traits": [
          "Diplomatic",
          "Harmonious",
          "Calming",
          "Empathetic"
        ]
      },
      "realist": {
        "title": "The Grounded Realist",
        "description": "Firm as the bedrock of mountains, you see the world exactly as it is without illusion or exaggeration. You cut through fluff, deliver real solutions, and maintain calm common sense when everyone else loses their heads.",
        "superpower": "Cool practicality and unshakeable common sense.",
        "shadow": "Skepticism toward poetry, magic, and grand unproven dreams.",
        "advice": "Allow yourself to gaze at the stars occasionally without demanding a practical reason.",
        "traits": [
          "Pragmatic",
          "Unflappable",
          "Honest",
          "Grounded"
        ]
      },
      "alchemist": {
        "title": "The Alchemist of Ideas",
        "description": "Standing at the crossroads of science, mysticism, and high art, you transmute raw curiosity into golden masterpieces. You draw links between completely unrelated realms, inventing new metaphors and paradigms.",
        "superpower": "Effortless creative synthesis and interdisciplinary genius.",
        "shadow": "Getting pulled in too many creative directions simultaneously.",
        "advice": "Bring one magnum opus to complete manifestation before opening the next dimensional portal.",
        "traits": [
          "Inventive",
          "Curious",
          "Multifaceted",
          "Original"
        ]
      },
      "trailblazer": {
        "title": "The Fearless Trailblazer",
        "description": "You are the one who cuts paths through dense jungle where no highway yet exists. Driven by daring bravery, you thrive on challenge, physical endurance, and proving that the impossible can be conquered.",
        "superpower": "Unmatched grit, courage, and pioneering drive.",
        "shadow": "Impatience with fear or hesitation in others.",
        "advice": "The greatest expedition of all is the quiet journey into the chambers of your own inner heart.",
        "traits": [
          "Daring",
          "Resilient",
          "Pioneering",
          "Tenacious"
        ]
      },
      "intuitive": {
        "title": "The Mystic Intuitive",
        "description": "You are deeply attuned to the unseen currents of existence. You perceive subtle signs, energy shifts, and unspoken truths with uncanny accuracy, guided by an inner compass that operates far beyond ordinary logic.",
        "superpower": "Profound sixth-sense and reading subtle human energies.",
        "shadow": "Becoming overwhelmed by crowded or noisy environments.",
        "advice": "Anchor your intuitive flashes with clear articulation so others may understand your vision.",
        "traits": [
          "Intuitive",
          "Mystical",
          "Sensitive",
          "Deep"
        ]
      },
      "joybringer": {
        "title": "The Playful Joybringer",
        "description": "You are a radiant beam of sunshine in human disguise. Your humor, warmth, and buoyant spirit turn mundane days into celebrations, reminding weary souls that life is meant to be savored, laughed through, and enjoyed.",
        "superpower": "Instant mood elevation and unconditional warmth.",
        "shadow": "Masking personal pain behind continuous jokes and smiles.",
        "advice": "Your tears are just as sacred as your laughter; honor your full emotional spectrum.",
        "traits": [
          "Joyful",
          "Playful",
          "Infectious",
          "Warmhearted"
        ]
      },
      "pillar": {
        "title": "The Resilient Pillar",
        "description": "Ancient and noble as the banyan tree, you provide shade, shelter, and enduring strength to all who lean on you. You endure storms without bending, upholding duty, honor, and quiet dignity across all seasons of life.",
        "superpower": "Monumental resilience and unyielding moral integrity.",
        "shadow": "Carrying everyone's burdens silently until physical exhaustion.",
        "advice": "Even the strongest pillars deserve to rest and be supported by those they shelter.",
        "traits": [
          "Steadfast",
          "Noble",
          "Unyielding",
          "Honorable"
        ]
      }
    }
  },
  "hi": {
    "name": "Hindi",
    "nativeName": "हिन्दी",
    "script": "Devanagari",
    "dir": "ltr",
    "badge": "उत्तरी एवं मध्य भारत",
    "ui": {
      "appTitle": "आकाश ऑरेकल",
      "appSubtitle": "ब्रह्मांडीय मन-पठक एवं व्यक्तित्व भविष्यवक्ता",
      "oracleName": "आकाश",
      "selectLanguage": "भाषा चुनें",
      "chooseLangHeader": "अपनी प्रिय भाषा चुनें",
      "langSubtitle": "भारत की शीर्ष भाषाओं में इस दिव्य अनुभव का आनंद लें",
      "startButton": "ऑरेकल को जागृत करें",
      "oracleIntro": "मैं 'आकाश' हूँ—ब्रह्मांडीय अंतर्यामी। मेरे सरल प्रश्नों का दिल से उत्तर दें, और मैं आपकी आत्मा के वास्तविक स्वरूप को अचूक सटीकता से उजागर करूँगा।",
      "speechStart": "अपना ध्यान केंद्रित करें... मैं आपकी ऊर्जा से जुड़ रहा हूँ।",
      "speechThinking": "दिलचस्प... आपके उत्तर तारों में गूँज रहे हैं।",
      "speechDeepening": "आपके अस्तित्व का एक अनोखा नक्षत्र उभर रहा है...",
      "speechAlmost": "रहस्य का पर्दा उठ रहा है... मैं देख पा रहा हूँ कि आप कौन हैं!",
      "speechRevealed": "सत्य प्रकट हो चुका है! अपना ब्रह्मांडीय स्वरूप देखें!",
      "speechRefining": "अद्भुत! आइए आपकी आत्मा की गहराई को और करीब से जानें...",
      "confidenceLabel": "ऑरेकल का निश्चय",
      "confidenceLow": "ऊर्जा का मिलान",
      "confidenceMed": "तरंगों की पहचान",
      "confidenceHigh": "आत्मा में दर्शन",
      "confidenceFinal": "परम बोध",
      "queryProgress": "दिव्य प्रश्न",
      "of": "में से",
      "skip": "प्रश्न छोड़ें",
      "prev": "पिछला",
      "optDefinitelyYes": "हाँ, बिल्कुल (पक्का)",
      "optProbablyYes": "अधिकतर हाँ (शायद)",
      "optNeutral": "तटस्थ / पता नहीं",
      "optProbablyNo": "अधिकतर नहीं (कम)",
      "optDefinitelyNo": "बिल्कुल नहीं (कभी नहीं)",
      "resultsTitle": "ऑरेकल की भविष्यवाणी",
      "matchResonance": "ब्रह्मांडीय अनुनाद",
      "elementLabel": "पंचतत्व",
      "superpowerLabel": "दिव्य महाशक्ति",
      "shadowLabel": "कमजोरी / अंधबिंदु",
      "kindredLabel": "समान आत्माएँ व ऐतिहासिक साथी",
      "adviceLabel": "दैनिक जीवन सूत्र",
      "dimensionsLabel": "व्यक्तित्व के मूल आयाम",
      "dimEnergy": "सामाजिक ऊर्जा (उत्साह)",
      "dimImagination": "कल्पनाशीलता (दृष्टि)",
      "dimHeart": "संवेदना व करुणा",
      "dimSpontaneity": "सहजता व खुलापन",
      "dimResilience": "आंतरिक शांति व धैर्य",
      "btnAccurate": "बिल्कुल सटीक! (उत्सव मनाएं)",
      "btnGuessAgain": "यह मैं नहीं हूँ? दोबारा परखें",
      "btnShare": "परिणाम साझा करें",
      "btnDownload": "कार्ड डाउनलोड करें",
      "btnCopy": "विवरण कॉपी करें",
      "copiedToast": "ब्रह्मांडीय परिणाम कॉपी हो गया!",
      "btnRestart": "नई यात्रा शुरू करें",
      "runnersUpTitle": "अन्य निकटतम स्वरूप",
      "soundOn": "ध्वनि: चालू",
      "soundOff": "ध्वनि: बंद",
      "elementEther": "आकाश (ईथर)",
      "elementFire": "अग्नि (तेज)",
      "elementWater": "जल (वारि)",
      "elementAir": "वायु (पवन)",
      "elementEarth": "पृथ्वी (धरा)"
    },
    "questions": {
      "q1": "शादियों, त्योहारों या बड़ी महफिलों में, क्या आप खूब ऊर्जावान महसूस करते हैं और बहुत से लोगों से मिलना पसंद करते हैं?",
      "q2": "क्या आप दिन शुरू करने से पहले विस्तृत सूची और योजना बनाना पसंद करते हैं, बजाय इसके कि जो होगा देखा जाएगा?",
      "q3": "दोस्तों के बीच झगड़ा सुलझाते समय, क्या आप भावनाओं से ज़्यादा सच और ठोस तथ्यों को प्राथमिकता देते हैं?",
      "q4": "क्या आप अक्सर भविष्य की अनोखी कल्पनाओं, विचारों और 'अगर ऐसा हुआ तो' की सोच में खो जाते हैं?",
      "q5": "जब अचानक कोई मुसीबत या अफ़रातफ़री आ जाए, तो क्या आप बिल्कुल शांत, स्थिर और ठंडे दिमाग से काम लेते हैं?",
      "q6": "क्या आप किसी के बिना कुछ बोले ही उसके मन का हाल और दर्द तुरंत भाँप लेते हैं?",
      "q7": "किसी समूह के काम या पारिवारिक आयोजन में, क्या आप स्वाभाविक रूप से आगे बढ़कर ज़िम्मेदारी संभाल लेते हैं?",
      "q8": "क्या आपको नए पकवान चखना, अनजान रास्तों पर निकलना और बिना तैयारी के सैर-सपाटे पर जाना बहुत पसंद है?",
      "q9": "क्या रोज़मर्रा की तय दिनचर्या और आदतें आपको सुरक्षित और व्यवस्थित महसूस कराती हैं?",
      "q10": "क्या आप किसी परेशान दोस्त की मदद के लिए अपने ज़रूरी काम तुरंत छोड़कर उसके पास चले जाएँगे?",
      "q11": "क्या आप देर रात इस सृष्टि के रहस्य, जीवन के उद्देश्य और आत्मा के बारे में गहराई से सोचते हैं?",
      "q12": "क्या आप मानते हैं कि कड़वा सच सीधे मुँह पर कह देना बेहतर है, भले ही किसी को बुरा लगे?",
      "q13": "खेल में या किसी लक्ष्य को हासिल करते समय, क्या जीतने की तीव्र चाह आपके अंदर जोश भर देती है?",
      "q14": "क्या आपको पुरानी परंपराओं पर सवाल उठाना और अपने नए अनोखे तौर-तरीके बनाना अच्छा लगता है?",
      "q15": "क्या आप बारीक काम बहुत ध्यान से करते हैं और उन छोटी गलतियों को पकड़ लेते हैं जो बाकी लोग छोड़ देते हैं?",
      "q16": "व्यस्त दिन के बाद, क्या आप अकेले शांत कमरे में रहकर ही अपनी ऊर्जा वापस पा सकते हैं?",
      "q17": "क्या आप कागज़ों और आंकड़ों से ज़्यादा अपनी अंतरात्मा की आवाज़ (छठी इंद्री) पर भरोसा करते हैं?",
      "q18": "क्या आप अक्सर वही इंसान होते हैं जो हँसी-मज़ाक करके महफ़िल की रौनक और मूड बदल देता है?",
      "q19": "क्या आपके परिवार और दोस्त आपको एक ऐसा मज़बूत सहारा मानते हैं जो कभी मुश्किलों में नहीं डगमगाता?",
      "q20": "क्या आप गुस्से में तमतमाए लोगों को शांत करने और दो पक्षों में सुलह कराने में माहिर हैं?"
    },
    "archetypes": {
      "visionary": {
        "title": "ब्रह्मांडीय दूरदर्शी (The Cosmic Visionary)",
        "description": "जैसे कोई चमकता तारा अंधेरे आसमान को रोशन करता है, आप वहाँ संभावनाएँ देख लेते हैं जहाँ दूसरे केवल सीमाएँ देखते हैं। आपकी सोच ज़माने से आगे चलती है और आपकी कल्पना लोगों को प्रेरित करती है।",
        "superpower": "सपनों को क्रांतिकारी हकीकत में बदलने की अद्भुत क्षमता।",
        "shadow": "रोज़मर्रा के उबाऊ और बंधे-बंधाए कामों से जल्दी ऊब जाना।",
        "advice": "अपने बड़े सपनों को रोज़ के छोटे कदमों से जोड़ें ताकि दुनिया आपके साथ चल सके।",
        "traits": [
          "दूरदर्शी",
          "प्रेरणादायक",
          "साहसी",
          "रचनात्मक"
        ]
      },
      "healer": {
        "title": "दिव्य करुणामूर्ति (The Celestial Empath)",
        "description": "एक शीतल चाँदनी की तरह, आपका दिल गहरे प्यार और संवेदना से भरा है। आप दूसरों के सुख-दुख को अपना समझकर जीते हैं और बिना शर्त सहारा बनते हैं।",
        "superpower": "गहरी भावनात्मक समझ और बिन बोले दिलों को जोड़ने की शक्ति।",
        "shadow": "दूसरों का दुख इतना ओढ़ लेना कि खुद का मन भारी हो जाए।",
        "advice": "अपनी खुद की ऊर्जा की भी रक्षा करें; अपना बगीचा भी हरी भरी बारिश माँगता है।",
        "traits": [
          "संवेदनशील",
          "दयालु",
          "प्रेममय",
          "सच्चे साथी"
        ]
      },
      "architect": {
        "title": "तारकीय शिल्पकार (The Galactic Architect)",
        "description": "आप अनुशासन और अचूक योजना के प्रतीक हैं। जहाँ सब बिखरा होता है, वहाँ आप एक सुदृढ़ व्यवस्था और ढांचा खड़ा कर देते हैं जो सदियों तक टिका रहता है।",
        "superpower": "सटीक रणनीतिक ढांचा और काम को पूरा अंजाम तक पहुँचाना।",
        "shadow": "अति-सख्त होना और अव्यवस्थित लोगों पर जल्दी खीझ जाना।",
        "advice": "थोड़ी सहजता को भी जगह दें; कभी-कभी कुदरत की खूबसूरती अनियोजित पलों में खिलती है।",
        "traits": [
          "अनुशासित",
          "योजनाकार",
          "भरोसेमंद",
          "व्यवस्थित"
        ]
      },
      "wanderer": {
        "title": "मुक्त आत्मा पथिक (The Free-Spirited Wanderer)",
        "description": "खुली हवा के झोंके की तरह, आपको बंद दायरों में रहना गवारा नहीं। आपकी रगों में नई जगहों को देखने, आज़ाद रहने और ज़िंदगी का रस पीने की प्यास बहती है।",
        "superpower": "हर हाल में ढल जाना और आज़ादी की असीम उमंग।",
        "shadow": "एक जगह टिके रहने और बंधनों में बंधने से घबराना।",
        "advice": "सच्ची आज़ादी केवल भागने में नहीं, बल्कि वर्तमान पल की गहराई में जीने में है।",
        "traits": [
          "साहसिक",
          "मुक्त-चित्त",
          "ऊर्जावान",
          "जिज्ञासु"
        ]
      },
      "sage": {
        "title": "अंतरिक्ष ज्ञानी (The Cosmic Sage)",
        "description": "शांत और गंभीर, आप दुनिया को बहुत गहराई से देखते हैं। आपको दुनियावी शोर-शराबे से ज़्यादा सत्य, ज्ञान और जीवन के गूढ़ रहस्यों की खोज में आनंद मिलता है।",
        "superpower": "गहन दार्शनिक दृष्टि और सच को तुरंत पहचान लेने की क्षमता।",
        "shadow": "कभी-कभी लोगों से अलग-थलग और उदासीन हो जाना।",
        "advice": "अपने ज्ञान को प्रेम के साथ बाँटें; ज्ञान तभी चमकता है जब वह दिलों को रोशन करे।",
        "traits": [
          "ज्ञानी",
          "चिंतनशील",
          "गंभीर",
          "सत्यशोधक"
        ]
      },
      "commander": {
        "title": "ध्रुव नायक (The Stellar Commander)",
        "description": "सूरज की तरह आपका व्यक्तित्व प्रभावशाली और ओजस्वी है। मुश्किल घड़ी में लोग आपकी ओर देखते हैं क्योंकि आप में हिम्मत, फैसला लेने की ताक़त और नेतृत्व का स्वाभाविक गुण है।",
        "superpower": "निर्णायक नेतृत्व और बाधाओं को चीरकर आगे बढ़ना।",
        "shadow": "दूसरों के धीमे चलने पर अत्यधिक कठोर या हावी हो जाना।",
        "advice": "सच्चा नेता वही है जो दूसरों को अपने बराबर खड़ा करे, न कि पीछे चलाए।",
        "traits": [
          "तेजस्वी",
          "निर्णायक",
          "प्रभावशाली",
          "निडर"
        ]
      },
      "strategist": {
        "title": "चाणक्य नीतिज्ञ (The Master Strategist)",
        "description": "चाणक्य जैसी पैनी बुद्धि के साथ, आप ज़िंदगी को शतरंज की बाज़ी की तरह समझते हैं। हर चाल सोच-समझकर चलते हैं और किसी भी उलझन का काट खोज निकालते हैं।",
        "superpower": "भविष्य की चालें पहले से भांप लेना और जटिलताओं को मात देना।",
        "shadow": "हर बात का ज़रूरत से ज़्यादा विश्लेषण करना और जज़्बातों पर शक करना।",
        "advice": "हर लड़ाई दिमाग से नहीं जीती जाती; कभी-कभी दिल की बात मान लेना ही सबसे बड़ी जीत है।",
        "traits": [
          "कुशाग्र",
          "रणनीतिकार",
          "तार्किक",
          "दूरदर्शी"
        ]
      },
      "guardian": {
        "title": "स्नेही संरक्षक (The Gentle Guardian)",
        "description": "आप अपने परिवार और प्रियजनों के लिए एक अभेद्य सुरक्षा कवच हैं। आपकी निष्ठा और समर्पण अटूट है, और आप अपनों की हिफाज़त के लिए कुछ भी कर सकते हैं।",
        "superpower": "अटूट वफ़ादारी और सुरक्षात्मक स्नेह।",
        "shadow": "ना कहना न सीख पाना और खुद को भुला देना।",
        "advice": "दूसरों का ख़्याल रखने के साथ-साथ खुद को भी समय और आराम दें।",
        "traits": [
          "निष्ठावान",
          "रक्षक",
          "त्यागी",
          "सहानुभूतिपूर्ण"
        ]
      },
      "catalyst": {
        "title": "विद्युत प्रेरक (The Electric Catalyst)",
        "description": "आप बिजली की कड़क की तरह हैं जो सोई हुई दुनिया को झकझोर कर जगा देती है। आपकी बेबाक ऊर्जा और नई सोच समाज की पुरानी बंदिशों को तोड़ देती है।",
        "superpower": "बदलाव की चिंगारी सुलगाना और ठहराव को मिटाना।",
        "shadow": "अचानक आवेश में आकर रिश्ते या अवसर बिगाड़ लेना।",
        "advice": "अपनी अग्नि को संभाल कर इस्तेमाल करें ताकि वह उजाला दे, न कि जलाए।",
        "traits": [
          "विद्रोही",
          "ऊर्जावान",
          "प्रेरक",
          "क्रांतिकारी"
        ]
      },
      "peacemaker": {
        "title": "शांतिदूत (The Harmonic Peacemaker)",
        "description": "जहाँ कड़वाहट और तकरार हो, वहाँ आप ठंडी छांव बनकर शांति लाते हैं। आपकी बातचीत में ऐसा जादू है कि बड़े से बड़ा मतभेद भी सुलझ जाता है।",
        "superpower": "सुलह कराने और दिलों को जोड़ने की अद्भुत कला।",
        "shadow": "शांति बनाए रखने के लिए ज़रूरी विरोध से भी बचते रहना।",
        "advice": "सच्ची शांति कभी-कभी कड़वी बात कह देने के बाद ही कायम होती है।",
        "traits": [
          "शांतिप्रिय",
          "मध्यस्थ",
          "मधुरभाषी",
          "संतुलित"
        ]
      },
      "realist": {
        "title": "धरातल ध्याता (The Grounded Realist)",
        "description": "पहाड़ की तरह अडिग, आप ज़मीनी हकीकत को साफ-साफ देखते हैं। खोखली बातों से दूर, आप काम की बात करते हैं और हर मुश्किल का व्यावहारिक हल निकालते हैं।",
        "superpower": "व्यावहारिक समझ और संकट में अटूट संतुलन।",
        "shadow": "सपनों और भावनाओं को कोरी कल्पना मानकर खारिज कर देना।",
        "advice": "कभी-कभी बिना किसी मतलब के भी तारों को निहारना सीखें; ज़िंदगी सिर्फ काम नहीं है।",
        "traits": [
          "व्यावहारिक",
          "सत्यवादी",
          "संतुलित",
          "धैर्यवान"
        ]
      },
      "alchemist": {
        "title": "विचार रसमयी (The Alchemist of Ideas)",
        "description": "आप विज्ञान, कला और कल्पना का ऐसा संगम हैं जो साधारण बातों को सोने में बदल देता है। आप दो अलग दुनियाओं को जोड़कर कुछ नया रचने में माहिर हैं।",
        "superpower": "विलक्षण रचनात्मकता और अनोखी खोज करने की प्रतिभा।",
        "shadow": "एक साथ कई दिशाओं में भटक जाना और काम अधूरा छोड़ना।",
        "advice": "एक विचार को पूरा आकार दें, फिर अगली रचना की तरफ कदम बढ़ाएं।",
        "traits": [
          "रचनाकार",
          "मौलिक",
          "प्रतिभाशाली",
          "जिज्ञासु"
        ]
      },
      "trailblazer": {
        "title": "साहसी अग्रदूत (The Fearless Trailblazer)",
        "description": "आप घने जंगलों में भी रास्ता बना लेते हैं जहाँ पहले कोई पगडंडी नहीं थी। आप चुनौतियों से नहीं डरते, बल्कि उन्हें जीतने के लिए ही पैदा हुए हैं।",
        "superpower": "अदम्य साहस और नामुमकिन को मुमकिन बनाने का जज़्बा।",
        "shadow": "धीमे लोगों से जल्दी चिढ़ जाना।",
        "advice": "सबसे बड़ी यात्रा अपने खुद के भीतर झांकने की होती है; कभी ठहर कर खुद से भी मिलें।",
        "traits": [
          "निडर",
          "साहसी",
          "दृढ़संकल्पी",
          "अग्रणी"
        ]
      },
      "intuitive": {
        "title": "गूढ़ अंतर्दृष्टा (The Mystic Intuitive)",
        "description": "आप दुनिया के अनदेखे संकेतों और ऊर्जा को तुरंत महसूस कर लेते हैं। आपकी छठी इंद्री इतनी तेज़ है कि आप सच्चाई को शब्दों से पहले ही जान लेते हैं।",
        "superpower": "तीव्र अंतर्ज्ञान और सूक्ष्म ऊर्जा को पहचानना।",
        "shadow": "भीड़ और शोर में जल्दी थक जाना और परेशान होना।",
        "advice": "अपनी अंतर्दृष्टि को स्पष्ट शब्दों में व्यक्त करना सीखें ताकि दूसरे भी समझ सकें।",
        "traits": [
          "अंतर्ज्ञानी",
          "संवेदनशील",
          "गूढ़",
          "गंभीर"
        ]
      },
      "joybringer": {
        "title": "आनंद उत्सव (The Playful Joybringer)",
        "description": "आप खुशियों का फव्वारा हैं। आपकी हँसी, हाज़िरजवाबी और गर्मजोशी से हर उदास चेहरा खिल उठता है। आप याद दिलाते हैं कि ज़िंदगी एक जश्न है।",
        "superpower": "माहौल को तुरंत खुशगवार बना देना और मुस्कान बिखेरना।",
        "shadow": "अपने खुद के दुख को हँसी के नकाब के पीछे छुपाते रहना।",
        "advice": "आपके आँसू भी उतने ही पवित्र हैं जितनी आपकी हँसी; कभी अपनों के सामने भी मन हल्का करें।",
        "traits": [
          "उमंगभरा",
          "हँसमुख",
          "दिलचस्प",
          "मिलनसार"
        ]
      },
      "pillar": {
        "title": "अटल स्तंभ (The Resilient Pillar)",
        "description": "बरगद के विशाल पेड़ की तरह, आप अपने करीबियों के लिए एक मजबूत आसरा हैं। आप आंधियों में भी नहीं डगमगाते और अपनी ज़िम्मेदारी चुपचाप निभाते हैं।",
        "superpower": "अतुलनीय सहनशक्ति और अटल सच्चाई।",
        "shadow": "सबका बोझ अकेले उठाते रहना और खुद की थकान को नज़रअंदाज़ करना।",
        "advice": "मज़बूत से मज़बूत खंभे को भी कभी-कभी आराम की ज़रूरत होती है; अपनों का सहारा लेना कमजोरी नहीं।",
        "traits": [
          "अडिग",
          "भरोसेमंद",
          "त्यागी",
          "धैर्यशील"
        ]
      }
    }
  },
  "bn": {
    "name": "Bengali",
    "nativeName": "বাংলা",
    "script": "Bengali",
    "dir": "ltr",
    "badge": "পশ্চিমবঙ্গ ও ত্রিপুরা",
    "ui": {
      "appTitle": "আকাশ অরেকল",
      "appSubtitle": "মহাজাগতিক মন-পাঠক ও ব্যক্তিত্বের রূপরেখা",
      "oracleName": "আকাশ",
      "selectLanguage": "ভাষা নির্বাচন করুন",
      "chooseLangHeader": "আপনার পছন্দের ভাষা বেছে নিন",
      "langSubtitle": "ভারতের শীর্ষ ভাষায় মহাজাগতিক অভিজ্ঞতা লাভ করুন",
      "startButton": "অরেকল জাগ্রত করুন",
      "oracleIntro": "আমি 'আকাশ'—মহাজাগতিক মন-পাঠক। আমার সহজ প্রশ্নের অকপট উত্তর দিন, আমি নির্ভুলভাবে আপনার অন্তরাত্মার স্বরূপ উন্মোচন করব।",
      "speechStart": "মন স্থির করুন... আমি আপনার মহাজাগতিক তরঙ্গে যুক্ত হচ্ছি।",
      "speechThinking": "অপূর্ব... আপনার চিন্তা নক্ষত্রমণ্ডলে প্রতিধ্বনিত হচ্ছে।",
      "speechDeepening": "আপনার অন্তরের এক উজ্জ্বল নক্ষত্রমণ্ডল ফুটে উঠছে...",
      "speechAlmost": "রহস্যের পর্দা সরছে... আমি স্পষ্ট দেখতে পাচ্ছি আপনি কে!",
      "speechRevealed": "সত্য উন্মোচিত হয়েছে! আপনার মহাজাগতিক রূপ প্রত্যক্ষ করুন!",
      "speechRefining": "অসাধারণ! আসুন আপনার অন্তরের আরও গভীরে দৃষ্টি দিই...",
      "confidenceLabel": "অরেকলের নিশ্চয়তা",
      "confidenceLow": "তরঙ্গ সমন্বয়",
      "confidenceMed": "স্পন্দন শনাক্তকরণ",
      "confidenceHigh": "আত্মার দর্শন",
      "confidenceFinal": "পরম বোধ",
      "queryProgress": "মহাজাগতিক প্রশ্ন",
      "of": "এর মধ্যে",
      "skip": "প্রশ্ন এড়িয়ে যান",
      "prev": "পূর্ববর্তী",
      "optDefinitelyYes": "হ্যাঁ, অবশ্যই",
      "optProbablyYes": "সম্ভবত হ্যাঁ",
      "optNeutral": "নিশ্চিত নই / মাঝামাঝি",
      "optProbablyNo": "সম্ভবত না",
      "optDefinitelyNo": "একদমই না",
      "resultsTitle": "অরেকলের দৈববাণী",
      "matchResonance": "মহাজাগতিক অনুরণন",
      "elementLabel": "পঞ্চভূত",
      "superpowerLabel": "মহাজাগতিক মহাশক্তি",
      "shadowLabel": "দুর্বলতা / অন্তরাল",
      "kindredLabel": "সমমনা আত্মা ও ঐতিহাসিক ব্যক্তিত্ব",
      "adviceLabel": "দৈনন্দিন মহাজাগতিক সূত্র",
      "dimensionsLabel": "ব্যক্তিত্বের মূল মাত্রা",
      "dimEnergy": "সামাজিক দীপ্তি (উচ্ছ্বাস)",
      "dimImagination": "কল্পনাশক্তির বিস্তার",
      "dimHeart": "হৃদয়ের অনুভূতি ও সহমর্মিতা",
      "dimSpontaneity": "স্বতঃস্ফূর্ত প্রবাহ",
      "dimResilience": "অন্তরের শান্তি ও ধৈর্য",
      "btnAccurate": "একদম সঠিক! (উদযাপন করুন)",
      "btnGuessAgain": "আমি এমন নই? আবার যাচাই করুন",
      "btnShare": "কার্ড শেয়ার করুন",
      "btnDownload": "কার্ড ডাউনলোড করুন",
      "btnCopy": "ফলাফল কপি করুন",
      "copiedToast": "ফলাফল ক্লিপবোর্ডে কপি হয়েছে!",
      "btnRestart": "নতুন যাত্রা শুরু করুন",
      "runnersUpTitle": "অন্যান্য নিকটবর্তী স্বরূপ",
      "soundOn": "শব্দ: চালু",
      "soundOff": "শব্দ: বন্ধ",
      "elementEther": "ব্যোম / আকাশ (Ether)",
      "elementFire": "অগ্নি (Fire)",
      "elementWater": "জল (Water)",
      "elementAir": "মরুৎ / বায়ু (Air)",
      "elementEarth": "ক্ষিতি / পৃথিবী (Earth)"
    },
    "questions": {
      "q1": "বড় কোনো উৎসব, বিয়েবাড়ি বা অনুষ্ঠানে কি আপনি দারুণ উদ্যমী বোধ করেন এবং অনেকের সাথে মিশতে ভালোবাসেন?",
      "q2": "দিন শুরু করার আগে কি আপনি নিয়মমাফিক কাজের তালিকা তৈরি করতে পছন্দ করেন, নাকি পরিস্থিতির সাথে ভেসে চলেন?",
      "q3": "বন্ধুদের মধ্যে বিরোধ মেটানোর সময় আপনি কি আবেগের চেয়ে সত্য ও অকাট্য যুক্তিকে বেশি গুরুত্ব দেন?",
      "q4": "আপনি কি প্রায়শই ভবিষ্যৎ নিয়ে আকাশকুসুম কল্পনা, সৃজনশীল ভাবনা ও নতুন চিন্তায় ডুবে থাকেন?",
      "q5": "হঠাৎ কোনো বিপদ বা বিপর্যয় দেখা দিলে আপনি কি শান্ত, অবিচল ও স্থির মস্তিষ্ক বজায় রাখতে পারেন?",
      "q6": "কেউ মুখে কিছু না বললেও আপনি কি তার মনের আসল অবস্থা ও কষ্ট সঙ্গে সঙ্গে আঁচ করতে পারেন?",
      "q7": "কোনো দলগত কাজ বা পারিবারিক অনুষ্ঠানে আপনি কি নিজে থেকে এগিয়ে গিয়ে দায়িত্ব নিতে পছন্দ করেন?",
      "q8": "নতুন কোনো খাবার চেখে দেখা, অচেনা পথে ঘুরে বেড়ানো আর আচমকা রোমাঞ্চে মেতে ওঠা কি আপনার পছন্দ?",
      "q9": "প্রতিদিনের বাঁধা নিয়ম ও পরিচিত অভ্যাসগুলো কি আপনাকে নিরাপদ ও গোছানো অনুভূতি দেয়?",
      "q10": "কোনো বিপন্ন বন্ধুকে সান্ত্বনা ও সাহায্য করতে আপনি কি নিজের জরুরি কাজও তৎক্ষণাৎ থামিয়ে দিতে পারেন?",
      "q11": "আপনি কি গভীর রাতে এই মহাবিশ্ব, সৃষ্টির রহস্য এবং জীবনের উদ্দেশ্য নিয়ে গভীর চিন্তায় মগ্ন হন?",
      "q12": "আপনি কি মনে করেন যে অপ্রিয় সত্য সরাসরি বলে ফেলা ভালো, যদিও তাতে সাময়িক কষ্ট হয়?",
      "q13": "কোনো খেলায় বা লক্ষ্য পূরণে জেতার তীব্র আকাঙ্ক্ষা কি আপনার মনে প্রচণ্ড আগুন জ্বালিয়ে তোলে?",
      "q14": "পুরোনো নিয়ম-কানুন নিয়ে প্রশ্ন তুলে সম্পূর্ণ নতুন নিজস্ব পন্থা তৈরি করতে কি আপনি ভালোবাসেন?",
      "q15": "কোনো সূক্ষ্ম কাজ করার সময় অন্যেরা যা এড়িয়ে যায়, সেই ছোট ছোট খুঁটিনাটি ভুল কি আপনি চট করে ধরে ফেলেন?",
      "q16": "ব্যস্ত দিনের শেষে আপনি কি সম্পূর্ণ নিঃশব্দে একান্তে কিছুটা সময় কাটালে সবচেয়ে বেশি শান্তি পান?",
      "q17": "আপনি কি কোনো তথ্যের চেয়ে নিজের অন্তরের ষষ্ঠ ইন্দ্রিয় বা অনুভূতির ওপর বেশি ভরসা করেন?",
      "q18": "আড্ডায় বা মজলিশে আপনিই কি সেই ব্যক্তি যিনি হাস্যরসে সবাইকে মাতিয়ে রাখেন ও সবার মন ভালো করে দেন?",
      "q19": "আপনার পরিবার ও বন্ধুরা কি বিপদের দিনে আপনাকে এমন এক অটল ভরসা মনে করে যিনি সহজে ভেঙে পড়েন না?",
      "q20": "রেগে থাকা মানুষকে শান্ত করে দুটি বিবাদমান পক্ষের মধ্যে সন্ধি ঘটাতে আপনি কি অত্যন্ত পারদর্শী?"
    },
    "archetypes": {
      "visionary": {
        "title": "The Cosmic Visionary",
        "description": "Like a brilliant supernova illuminating uncharted galaxies, you see breathtaking possibilities where others only see limits. Your mind lives ten steps ahead in the future, inspiring everyone around you with boundless imagination.",
        "superpower": "Transforming abstract dreams into revolutionary realities.",
        "shadow": "Restlessness with mundane day-to-day routines.",
        "advice": "Ground your celestial visions in steady daily steps so the world can walk inside your dreams.",
        "traits": [
          "Visionary",
          "Inspiring",
          "Bold",
          "Forward-Thinking"
        ]
      },
      "healer": {
        "title": "The Celestial Empath",
        "description": "Like warm starlight soothing a wounded traveler, your heart carries deep emotional warmth. You feel the joys and heartaches of others as your own, offering unconditional shelter, healing, and genuine understanding.",
        "superpower": "Profound emotional intuition and unspoken heart connection.",
        "shadow": "Absorbing others' sorrows until your own spirit feels heavy.",
        "advice": "Remember to build sacred boundaries; your own inner garden also requires gentle rain.",
        "traits": [
          "Empathetic",
          "Nurturing",
          "Gentle",
          "Heart-Centered"
        ]
      },
      "architect": {
        "title": "The Galactic Architect",
        "description": "You possess the supreme precision of cosmic orbits. Where others see chaos, you see underlying patterns, blueprints, and structures. You build lasting systems, masterplans, and unyielding foundations that stand the test of time.",
        "superpower": "Flawless strategic structure and monumental follow-through.",
        "shadow": "Perfectionism and impatience with disorganized minds.",
        "advice": "Allow a little room for spontaneous magic; the universe itself was born from creative chaos.",
        "traits": [
          "Disciplined",
          "Strategic",
          "Systematic",
          "Reliable"
        ]
      },
      "wanderer": {
        "title": "The Free-Spirited Wanderer",
        "description": "Like a solar wind dancing across open constellations, you refuse to be caged by routine or convention. You are driven by an insatiable curiosity for life, thrill, adventure, and the poetry of the open road.",
        "superpower": "Boundless adaptability and infectious zest for freedom.",
        "shadow": "Resistance to long-term stillness or repetitive commitments.",
        "advice": "True freedom is not just moving across distances, but discovering infinity within the present moment.",
        "traits": [
          "Adventurous",
          "Spontaneous",
          "Free-Spirited",
          "Vibrant"
        ]
      },
      "sage": {
        "title": "The Cosmic Sage",
        "description": "Carrying the ancient quietude of deep space, you observe the world with extraordinary depth. You seek timeless wisdom over fleeting trends, peering beneath the surface of life to uncover fundamental spiritual and intellectual truths.",
        "superpower": "Deep philosophical clarity and penetrating insight.",
        "shadow": "Detachment from everyday emotional warmth.",
        "advice": "Share your profound wisdom with warmth; wisdom shines brightest when it warms cold hearts.",
        "traits": [
          "Wise",
          "Contemplative",
          "Profound",
          "Perceptive"
        ]
      },
      "commander": {
        "title": "The Stellar Commander",
        "description": "Like the central sun around which planets revolve, you possess an unmistakable aura of authority, courage, and purpose. In moments of crisis, heads naturally turn to you for direction, courage, and decisive action.",
        "superpower": "Decisive leadership and the courage to conquer obstacles.",
        "shadow": "Overbearing intensity when others hesitate or slow down.",
        "advice": "True strength lifts others up to stand beside you, rather than following behind you.",
        "traits": [
          "Authoritative",
          "Decisive",
          "Charismatic",
          "Fearless"
        ]
      },
      "strategist": {
        "title": "The Master Strategist",
        "description": "With the piercing intellect of Chanakya, you view life as a grand cosmic chessboard. You analyze motives, calculate probabilities, and navigate complex challenges with cool, methodical, and surgical precision.",
        "superpower": "Foreseeing multiple moves ahead and outsmarting complexity.",
        "shadow": "Overthinking and struggle with trusting gut emotions.",
        "advice": "Not all victories are won on the chessboard; sometimes surrendering to love is the ultimate triumph.",
        "traits": [
          "Analytical",
          "Calculated",
          "Sharp-Witted",
          "Methodical"
        ]
      },
      "guardian": {
        "title": "The Gentle Guardian",
        "description": "You are the quiet guardian shield that preserves family, community, and sacred heritage. Unshakably loyal, you protect those you love with quiet devotion, practical care, and selfless sacrifice.",
        "superpower": "Steadfast loyalty and protective devotion.",
        "shadow": "Struggling to say no and neglecting your own needs.",
        "advice": "Care for yourself with the same tenderness you shower upon those you cherish.",
        "traits": [
          "Loyal",
          "Protective",
          "Selfless",
          "Dependable"
        ]
      },
      "catalyst": {
        "title": "The Electric Catalyst",
        "description": "You are pure lightning in human form—a spark that shatters dull conformity and awakens sluggish spirits. Your bold energy, wit, and fearless defiance ignite revolutions in ideas, art, and society.",
        "superpower": "Igniting immediate transformation and breaking stale barriers.",
        "shadow": "Impulsive rebellion that burns bridges unnecessarily.",
        "advice": "Channel your holy fire with intention so it warms and illuminates rather than scorches.",
        "traits": [
          "Dynamic",
          "Rebellious",
          "Electric",
          "Transformative"
        ]
      },
      "peacemaker": {
        "title": "The Harmonic Peacemaker",
        "description": "Like a gentle stream smoothing sharp stones, you possess the celestial gift of harmony. You bridge bitter divides, soothe wounded egos, and create sanctuary wherever discord threatens to tear people apart.",
        "superpower": "Mastery of diplomacy and emotional reconciliation.",
        "shadow": "Avoiding necessary confrontation to keep superficial calm.",
        "advice": "Authentic peace sometimes requires speaking the truth that shakes the room before it heals it.",
        "traits": [
          "Diplomatic",
          "Harmonious",
          "Calming",
          "Empathetic"
        ]
      },
      "realist": {
        "title": "The Grounded Realist",
        "description": "Firm as the bedrock of mountains, you see the world exactly as it is without illusion or exaggeration. You cut through fluff, deliver real solutions, and maintain calm common sense when everyone else loses their heads.",
        "superpower": "Cool practicality and unshakeable common sense.",
        "shadow": "Skepticism toward poetry, magic, and grand unproven dreams.",
        "advice": "Allow yourself to gaze at the stars occasionally without demanding a practical reason.",
        "traits": [
          "Pragmatic",
          "Unflappable",
          "Honest",
          "Grounded"
        ]
      },
      "alchemist": {
        "title": "The Alchemist of Ideas",
        "description": "Standing at the crossroads of science, mysticism, and high art, you transmute raw curiosity into golden masterpieces. You draw links between completely unrelated realms, inventing new metaphors and paradigms.",
        "superpower": "Effortless creative synthesis and interdisciplinary genius.",
        "shadow": "Getting pulled in too many creative directions simultaneously.",
        "advice": "Bring one magnum opus to complete manifestation before opening the next dimensional portal.",
        "traits": [
          "Inventive",
          "Curious",
          "Multifaceted",
          "Original"
        ]
      },
      "trailblazer": {
        "title": "The Fearless Trailblazer",
        "description": "You are the one who cuts paths through dense jungle where no highway yet exists. Driven by daring bravery, you thrive on challenge, physical endurance, and proving that the impossible can be conquered.",
        "superpower": "Unmatched grit, courage, and pioneering drive.",
        "shadow": "Impatience with fear or hesitation in others.",
        "advice": "The greatest expedition of all is the quiet journey into the chambers of your own inner heart.",
        "traits": [
          "Daring",
          "Resilient",
          "Pioneering",
          "Tenacious"
        ]
      },
      "intuitive": {
        "title": "The Mystic Intuitive",
        "description": "You are deeply attuned to the unseen currents of existence. You perceive subtle signs, energy shifts, and unspoken truths with uncanny accuracy, guided by an inner compass that operates far beyond ordinary logic.",
        "superpower": "Profound sixth-sense and reading subtle human energies.",
        "shadow": "Becoming overwhelmed by crowded or noisy environments.",
        "advice": "Anchor your intuitive flashes with clear articulation so others may understand your vision.",
        "traits": [
          "Intuitive",
          "Mystical",
          "Sensitive",
          "Deep"
        ]
      },
      "joybringer": {
        "title": "The Playful Joybringer",
        "description": "You are a radiant beam of sunshine in human disguise. Your humor, warmth, and buoyant spirit turn mundane days into celebrations, reminding weary souls that life is meant to be savored, laughed through, and enjoyed.",
        "superpower": "Instant mood elevation and unconditional warmth.",
        "shadow": "Masking personal pain behind continuous jokes and smiles.",
        "advice": "Your tears are just as sacred as your laughter; honor your full emotional spectrum.",
        "traits": [
          "Joyful",
          "Playful",
          "Infectious",
          "Warmhearted"
        ]
      },
      "pillar": {
        "title": "The Resilient Pillar",
        "description": "Ancient and noble as the banyan tree, you provide shade, shelter, and enduring strength to all who lean on you. You endure storms without bending, upholding duty, honor, and quiet dignity across all seasons of life.",
        "superpower": "Monumental resilience and unyielding moral integrity.",
        "shadow": "Carrying everyone's burdens silently until physical exhaustion.",
        "advice": "Even the strongest pillars deserve to rest and be supported by those they shelter.",
        "traits": [
          "Steadfast",
          "Noble",
          "Unyielding",
          "Honorable"
        ]
      }
    }
  },
  "mr": {
    "name": "Marathi",
    "nativeName": "मराठी",
    "script": "Devanagari",
    "dir": "ltr",
    "badge": "महाराष्ट्र व गोवा",
    "ui": {
      "appTitle": "आकाश ऑरेकल",
      "appSubtitle": "ब्रह्मांडीय मन-वाचक आणि व्यक्तिमत्त्व भविष्यवेत्ता",
      "oracleName": "आकाश",
      "selectLanguage": "भाषा निवडा",
      "chooseLangHeader": "तुमची मातृभाषा निवडा",
      "langSubtitle": "भारतातील प्रमुख भाषांमध्ये या दिव्य अनुभवाचा आनंद घ्या",
      "startButton": "ऑरेकल जागृत करा",
      "oracleIntro": "मी 'आकाश'—ब्रह्मांडीय अंतर्यामी. माझ्या सोप्या प्रश्नांची मनापासून उत्तरे द्या, आणि मी तुमच्या आत्म्याचे खरे रूप अचूकपणे उलगडून दाखवेन.",
      "speechStart": "मन एकाग्र करा... मी तुमच्या आंतरिक ऊर्जेशी जोडला जात आहे.",
      "speechThinking": "रोमांचक... तुमची उत्तरे नक्षत्रांमध्ये उमटत आहेत.",
      "speechDeepening": "तुमच्या अस्तित्वाचा एक अनोखा नक्षत्रबंध स्पष्ट होत आहे...",
      "speechAlmost": "गूढ उलगडत आहे... तुम्ही नेमके कोण आहात ते मला दिसत आहे!",
      "speechRevealed": "सत्य प्रकट झाले आहे! तुमचे ब्रह्मांडीय रूप पहा!",
      "speechRefining": "अप्रतिम! चला तुमच्या व्यक्तिमत्त्वाचा आणखी सखोल वेध घेऊया...",
      "confidenceLabel": "ऑरेकलची खात्री",
      "confidenceLow": "ऊर्जा जुळवणी",
      "confidenceMed": "लहरींचा शोध",
      "confidenceHigh": "आत्म्याचा वेध",
      "confidenceFinal": "परम साक्षात्कार",
      "queryProgress": "दिव्य प्रश्न",
      "of": "पैकी",
      "skip": "प्रश्न वगळा",
      "prev": "मागील",
      "optDefinitelyYes": "हो, नक्कीच",
      "optProbablyYes": "बहुधा हो",
      "optNeutral": "सांगता येत नाही / तटस्थ",
      "optProbablyNo": "बहुधा नाही",
      "optDefinitelyNo": "मुळीच नाही",
      "resultsTitle": "ऑरेकलची भविष्यवाणी",
      "matchResonance": "ब्रह्मांडीय सुसंवाद",
      "elementLabel": "पंचमहाभूत",
      "superpowerLabel": "दिव्य महाशक्ती",
      "shadowLabel": "अंधबिंदू / मर्यादा",
      "kindredLabel": "समविचारी महात्मे व ऐतिहासिक व्यक्तिमत्त्वे",
      "adviceLabel": "दैनंदिन जीवनमंत्र",
      "dimensionsLabel": "व्यक्तिमत्त्वाचे मूलभूत पैलू",
      "dimEnergy": "सामाजिक ऊर्जा (उत्साह)",
      "dimImagination": "कल्पकता व दूरदृष्टी",
      "dimHeart": "संवेदनशीलता व आत्मीयता",
      "dimSpontaneity": "सहजता व लवचिकता",
      "dimResilience": "आंतरिक शांतता व संयम",
      "btnAccurate": "अक्षरशः तंतोतंत! (आनंदोत्सव)",
      "btnGuessAgain": "हे मी नाही? पुन्हा ओळखा",
      "btnShare": "निकाल शेअर करा",
      "btnDownload": "कार्ड डाउनलोड करा",
      "btnCopy": "माहिती कॉपी करा",
      "copiedToast": "निकाल कॉपी झाला आहे!",
      "btnRestart": "पुन्हा सुरुवात करा",
      "runnersUpTitle": "इतर जवळचे व्यक्तिमत्त्व प्रकार",
      "soundOn": "आवाज: सुरू",
      "soundOff": "आवाज: बंद",
      "elementEther": "आकाश (Ether)",
      "elementFire": "अग्नी (Fire)",
      "elementWater": "जल (Water)",
      "elementAir": "वायू (Air)",
      "elementEarth": "पृथ्वी (Earth)"
    },
    "questions": {
      "q1": "लग्नसमारंभ, सण किंवा मोठ्या गर्दीत तुम्हाला खूप उत्साही वाटते आणि अनेकांशी संवाद साधायला आवडते का?",
      "q2": "दिवसाची सुरुवात करताना परिस्थितीवर सोडण्यापेक्षा कामांची सविस्तर यादी व नियोजन करणे तुम्हाला जास्त आवडते का?",
      "q3": "मित्रांमधील वाद मिटवताना भावनांपेक्षा वस्तुस्थिती आणि सत्याला तुम्ही जास्त महत्त्व देता का?",
      "q4": "तुम्ही अनेकदा भविष्यातील नवनवीन कल्पना आणि विचारांमध्ये हरवून जाता का?",
      "q5": "अचानक संकट किंवा गोंधळ निर्माण झाल्यास तुम्ही अत्यंत शांत, संयमी आणि स्थिर राहता का?",
      "q6": "समोरची व्यक्ती काही न बोलताही तिच्या मनातील भाव आणि दुःख तुम्ही लगेच ओळखू शकता का?",
      "q7": "कुटुंबात किंवा कामाच्या ठिकाणी तुम्ही स्वतःहून पुढे होऊन सूत्रे हाती घेता का?",
      "q8": "नवीन पदार्थ चाखणे, अनोळखी वाटा धुंडाळणे आणि अचानक प्रवासाला निघणे तुम्हाला आवडते का?",
      "q9": "ठरावीक दिनक्रम आणि सवयींमुळे तुम्हाला सुरक्षित आणि व्यवस्थित वाटते का?",
      "q10": "एखाद्या अडचणीत सापडलेल्या मित्राला आधार देण्यासाठी तुम्ही स्वतःची महत्त्वाची कामे बाजूला ठेवू शकता का?",
      "q11": "तुम्ही रात्री उशिरापर्यंत या विश्वाचे रहस्य आणि जीवनाचा अर्थ यावर सखोल विचार करता का?",
      "q12": "सत्य थोडे कटू असले तरी ते थेट तोंडावर बोलणे योग्य आहे असे तुम्हाला वाटते का?",
      "q13": "खेळताना किंवा ध्येय गाठताना जिंकण्याची जिद्द तुमच्यात नवा उत्साह भरते का?",
      "q14": "जुने नियम मोडून नवीन वेगळी वाट तयार करणे तुम्हाला आवडते का?",
      "q15": "बारीक काम करताना इतरांच्या नजरेतून सुटणाऱ्या लहान चुका तुम्ही लगेच शोधून काढता का?",
      "q16": "धावपळीच्या दिवसानंतर शांततेत एकटे राहिल्यावर तुम्हाला पुन्हा ताजेतवाने वाटते का?",
      "q17": "आकडेवारीपेक्षा तुम्ही तुमच्या अंतर्मनाच्या हाकेवर जास्त विश्वास ठेवता का?",
      "q18": "तुम्ही गप्पांच्या फडात विनोद करून सर्वांचे मन हलके करणारे व्यक्ती आहात का?",
      "q19": "संकटाच्या वेळी तुमची माणसे तुमच्याकडे एक न डगमगणारा आधारस्तंभ म्हणून पाहतात का?",
      "q20": "रागावलेल्या लोकांना शांत करून त्यांच्यात समेट घडवून आणण्यात तुम्ही तरबेज आहात का?"
    },
    "archetypes": {
      "visionary": {
        "title": "ब्रह्मांडीय दूरदर्शी (The Cosmic Visionary)",
        "description": "जैसे कोई चमकता तारा अंधेरे आसमान को रोशन करता है, आप वहाँ संभावनाएँ देख लेते हैं जहाँ दूसरे केवल सीमाएँ देखते हैं। आपकी सोच ज़माने से आगे चलती है और आपकी कल्पना लोगों को प्रेरित करती है।",
        "superpower": "सपनों को क्रांतिकारी हकीकत में बदलने की अद्भुत क्षमता।",
        "shadow": "रोज़मर्रा के उबाऊ और बंधे-बंधाए कामों से जल्दी ऊब जाना।",
        "advice": "अपने बड़े सपनों को रोज़ के छोटे कदमों से जोड़ें ताकि दुनिया आपके साथ चल सके।",
        "traits": [
          "दूरदर्शी",
          "प्रेरणादायक",
          "साहसी",
          "रचनात्मक"
        ]
      },
      "healer": {
        "title": "दिव्य करुणामूर्ति (The Celestial Empath)",
        "description": "एक शीतल चाँदनी की तरह, आपका दिल गहरे प्यार और संवेदना से भरा है। आप दूसरों के सुख-दुख को अपना समझकर जीते हैं और बिना शर्त सहारा बनते हैं।",
        "superpower": "गहरी भावनात्मक समझ और बिन बोले दिलों को जोड़ने की शक्ति।",
        "shadow": "दूसरों का दुख इतना ओढ़ लेना कि खुद का मन भारी हो जाए।",
        "advice": "अपनी खुद की ऊर्जा की भी रक्षा करें; अपना बगीचा भी हरी भरी बारिश माँगता है।",
        "traits": [
          "संवेदनशील",
          "दयालु",
          "प्रेममय",
          "सच्चे साथी"
        ]
      },
      "architect": {
        "title": "तारकीय शिल्पकार (The Galactic Architect)",
        "description": "आप अनुशासन और अचूक योजना के प्रतीक हैं। जहाँ सब बिखरा होता है, वहाँ आप एक सुदृढ़ व्यवस्था और ढांचा खड़ा कर देते हैं जो सदियों तक टिका रहता है।",
        "superpower": "सटीक रणनीतिक ढांचा और काम को पूरा अंजाम तक पहुँचाना।",
        "shadow": "अति-सख्त होना और अव्यवस्थित लोगों पर जल्दी खीझ जाना।",
        "advice": "थोड़ी सहजता को भी जगह दें; कभी-कभी कुदरत की खूबसूरती अनियोजित पलों में खिलती है।",
        "traits": [
          "अनुशासित",
          "योजनाकार",
          "भरोसेमंद",
          "व्यवस्थित"
        ]
      },
      "wanderer": {
        "title": "मुक्त आत्मा पथिक (The Free-Spirited Wanderer)",
        "description": "खुली हवा के झोंके की तरह, आपको बंद दायरों में रहना गवारा नहीं। आपकी रगों में नई जगहों को देखने, आज़ाद रहने और ज़िंदगी का रस पीने की प्यास बहती है।",
        "superpower": "हर हाल में ढल जाना और आज़ादी की असीम उमंग।",
        "shadow": "एक जगह टिके रहने और बंधनों में बंधने से घबराना।",
        "advice": "सच्ची आज़ादी केवल भागने में नहीं, बल्कि वर्तमान पल की गहराई में जीने में है।",
        "traits": [
          "साहसिक",
          "मुक्त-चित्त",
          "ऊर्जावान",
          "जिज्ञासु"
        ]
      },
      "sage": {
        "title": "अंतरिक्ष ज्ञानी (The Cosmic Sage)",
        "description": "शांत और गंभीर, आप दुनिया को बहुत गहराई से देखते हैं। आपको दुनियावी शोर-शराबे से ज़्यादा सत्य, ज्ञान और जीवन के गूढ़ रहस्यों की खोज में आनंद मिलता है।",
        "superpower": "गहन दार्शनिक दृष्टि और सच को तुरंत पहचान लेने की क्षमता।",
        "shadow": "कभी-कभी लोगों से अलग-थलग और उदासीन हो जाना।",
        "advice": "अपने ज्ञान को प्रेम के साथ बाँटें; ज्ञान तभी चमकता है जब वह दिलों को रोशन करे।",
        "traits": [
          "ज्ञानी",
          "चिंतनशील",
          "गंभीर",
          "सत्यशोधक"
        ]
      },
      "commander": {
        "title": "ध्रुव नायक (The Stellar Commander)",
        "description": "सूरज की तरह आपका व्यक्तित्व प्रभावशाली और ओजस्वी है। मुश्किल घड़ी में लोग आपकी ओर देखते हैं क्योंकि आप में हिम्मत, फैसला लेने की ताक़त और नेतृत्व का स्वाभाविक गुण है।",
        "superpower": "निर्णायक नेतृत्व और बाधाओं को चीरकर आगे बढ़ना।",
        "shadow": "दूसरों के धीमे चलने पर अत्यधिक कठोर या हावी हो जाना।",
        "advice": "सच्चा नेता वही है जो दूसरों को अपने बराबर खड़ा करे, न कि पीछे चलाए।",
        "traits": [
          "तेजस्वी",
          "निर्णायक",
          "प्रभावशाली",
          "निडर"
        ]
      },
      "strategist": {
        "title": "चाणक्य नीतिज्ञ (The Master Strategist)",
        "description": "चाणक्य जैसी पैनी बुद्धि के साथ, आप ज़िंदगी को शतरंज की बाज़ी की तरह समझते हैं। हर चाल सोच-समझकर चलते हैं और किसी भी उलझन का काट खोज निकालते हैं।",
        "superpower": "भविष्य की चालें पहले से भांप लेना और जटिलताओं को मात देना।",
        "shadow": "हर बात का ज़रूरत से ज़्यादा विश्लेषण करना और जज़्बातों पर शक करना।",
        "advice": "हर लड़ाई दिमाग से नहीं जीती जाती; कभी-कभी दिल की बात मान लेना ही सबसे बड़ी जीत है।",
        "traits": [
          "कुशाग्र",
          "रणनीतिकार",
          "तार्किक",
          "दूरदर्शी"
        ]
      },
      "guardian": {
        "title": "स्नेही संरक्षक (The Gentle Guardian)",
        "description": "आप अपने परिवार और प्रियजनों के लिए एक अभेद्य सुरक्षा कवच हैं। आपकी निष्ठा और समर्पण अटूट है, और आप अपनों की हिफाज़त के लिए कुछ भी कर सकते हैं।",
        "superpower": "अटूट वफ़ादारी और सुरक्षात्मक स्नेह।",
        "shadow": "ना कहना न सीख पाना और खुद को भुला देना।",
        "advice": "दूसरों का ख़्याल रखने के साथ-साथ खुद को भी समय और आराम दें।",
        "traits": [
          "निष्ठावान",
          "रक्षक",
          "त्यागी",
          "सहानुभूतिपूर्ण"
        ]
      },
      "catalyst": {
        "title": "विद्युत प्रेरक (The Electric Catalyst)",
        "description": "आप बिजली की कड़क की तरह हैं जो सोई हुई दुनिया को झकझोर कर जगा देती है। आपकी बेबाक ऊर्जा और नई सोच समाज की पुरानी बंदिशों को तोड़ देती है।",
        "superpower": "बदलाव की चिंगारी सुलगाना और ठहराव को मिटाना।",
        "shadow": "अचानक आवेश में आकर रिश्ते या अवसर बिगाड़ लेना।",
        "advice": "अपनी अग्नि को संभाल कर इस्तेमाल करें ताकि वह उजाला दे, न कि जलाए।",
        "traits": [
          "विद्रोही",
          "ऊर्जावान",
          "प्रेरक",
          "क्रांतिकारी"
        ]
      },
      "peacemaker": {
        "title": "शांतिदूत (The Harmonic Peacemaker)",
        "description": "जहाँ कड़वाहट और तकरार हो, वहाँ आप ठंडी छांव बनकर शांति लाते हैं। आपकी बातचीत में ऐसा जादू है कि बड़े से बड़ा मतभेद भी सुलझ जाता है।",
        "superpower": "सुलह कराने और दिलों को जोड़ने की अद्भुत कला।",
        "shadow": "शांति बनाए रखने के लिए ज़रूरी विरोध से भी बचते रहना।",
        "advice": "सच्ची शांति कभी-कभी कड़वी बात कह देने के बाद ही कायम होती है।",
        "traits": [
          "शांतिप्रिय",
          "मध्यस्थ",
          "मधुरभाषी",
          "संतुलित"
        ]
      },
      "realist": {
        "title": "धरातल ध्याता (The Grounded Realist)",
        "description": "पहाड़ की तरह अडिग, आप ज़मीनी हकीकत को साफ-साफ देखते हैं। खोखली बातों से दूर, आप काम की बात करते हैं और हर मुश्किल का व्यावहारिक हल निकालते हैं।",
        "superpower": "व्यावहारिक समझ और संकट में अटूट संतुलन।",
        "shadow": "सपनों और भावनाओं को कोरी कल्पना मानकर खारिज कर देना।",
        "advice": "कभी-कभी बिना किसी मतलब के भी तारों को निहारना सीखें; ज़िंदगी सिर्फ काम नहीं है।",
        "traits": [
          "व्यावहारिक",
          "सत्यवादी",
          "संतुलित",
          "धैर्यवान"
        ]
      },
      "alchemist": {
        "title": "विचार रसमयी (The Alchemist of Ideas)",
        "description": "आप विज्ञान, कला और कल्पना का ऐसा संगम हैं जो साधारण बातों को सोने में बदल देता है। आप दो अलग दुनियाओं को जोड़कर कुछ नया रचने में माहिर हैं।",
        "superpower": "विलक्षण रचनात्मकता और अनोखी खोज करने की प्रतिभा।",
        "shadow": "एक साथ कई दिशाओं में भटक जाना और काम अधूरा छोड़ना।",
        "advice": "एक विचार को पूरा आकार दें, फिर अगली रचना की तरफ कदम बढ़ाएं।",
        "traits": [
          "रचनाकार",
          "मौलिक",
          "प्रतिभाशाली",
          "जिज्ञासु"
        ]
      },
      "trailblazer": {
        "title": "साहसी अग्रदूत (The Fearless Trailblazer)",
        "description": "आप घने जंगलों में भी रास्ता बना लेते हैं जहाँ पहले कोई पगडंडी नहीं थी। आप चुनौतियों से नहीं डरते, बल्कि उन्हें जीतने के लिए ही पैदा हुए हैं।",
        "superpower": "अदम्य साहस और नामुमकिन को मुमकिन बनाने का जज़्बा।",
        "shadow": "धीमे लोगों से जल्दी चिढ़ जाना।",
        "advice": "सबसे बड़ी यात्रा अपने खुद के भीतर झांकने की होती है; कभी ठहर कर खुद से भी मिलें।",
        "traits": [
          "निडर",
          "साहसी",
          "दृढ़संकल्पी",
          "अग्रणी"
        ]
      },
      "intuitive": {
        "title": "गूढ़ अंतर्दृष्टा (The Mystic Intuitive)",
        "description": "आप दुनिया के अनदेखे संकेतों और ऊर्जा को तुरंत महसूस कर लेते हैं। आपकी छठी इंद्री इतनी तेज़ है कि आप सच्चाई को शब्दों से पहले ही जान लेते हैं।",
        "superpower": "तीव्र अंतर्ज्ञान और सूक्ष्म ऊर्जा को पहचानना।",
        "shadow": "भीड़ और शोर में जल्दी थक जाना और परेशान होना।",
        "advice": "अपनी अंतर्दृष्टि को स्पष्ट शब्दों में व्यक्त करना सीखें ताकि दूसरे भी समझ सकें।",
        "traits": [
          "अंतर्ज्ञानी",
          "संवेदनशील",
          "गूढ़",
          "गंभीर"
        ]
      },
      "joybringer": {
        "title": "आनंद उत्सव (The Playful Joybringer)",
        "description": "आप खुशियों का फव्वारा हैं। आपकी हँसी, हाज़िरजवाबी और गर्मजोशी से हर उदास चेहरा खिल उठता है। आप याद दिलाते हैं कि ज़िंदगी एक जश्न है।",
        "superpower": "माहौल को तुरंत खुशगवार बना देना और मुस्कान बिखेरना।",
        "shadow": "अपने खुद के दुख को हँसी के नकाब के पीछे छुपाते रहना।",
        "advice": "आपके आँसू भी उतने ही पवित्र हैं जितनी आपकी हँसी; कभी अपनों के सामने भी मन हल्का करें।",
        "traits": [
          "उमंगभरा",
          "हँसमुख",
          "दिलचस्प",
          "मिलनसार"
        ]
      },
      "pillar": {
        "title": "अटल स्तंभ (The Resilient Pillar)",
        "description": "बरगद के विशाल पेड़ की तरह, आप अपने करीबियों के लिए एक मजबूत आसरा हैं। आप आंधियों में भी नहीं डगमगाते और अपनी ज़िम्मेदारी चुपचाप निभाते हैं।",
        "superpower": "अतुलनीय सहनशक्ति और अटल सच्चाई।",
        "shadow": "सबका बोझ अकेले उठाते रहना और खुद की थकान को नज़रअंदाज़ करना।",
        "advice": "मज़बूत से मज़बूत खंभे को भी कभी-कभी आराम की ज़रूरत होती है; अपनों का सहारा लेना कमजोरी नहीं।",
        "traits": [
          "अडिग",
          "भरोसेमंद",
          "त्यागी",
          "धैर्यशील"
        ]
      }
    }
  },
  "te": {
    "name": "Telugu",
    "nativeName": "తెలుగు",
    "script": "Telugu",
    "dir": "ltr",
    "badge": "ఆంధ్రప్రదేశ్ & తెలంగాణ",
    "ui": {
      "appTitle": "ఆకాశ ఒరాకిల్",
      "appSubtitle": "విశ్వ మనోనేత్రం & వ్యక్తిత్వ దర్శిని",
      "oracleName": "ఆకాశ",
      "selectLanguage": "భాషను ఎంచుకోండి",
      "chooseLangHeader": "మీ మాతృభాషను ఎంచుకోండి",
      "langSubtitle": "భారతీయ అగ్ర భాషలలో ఈ దివ్య అనుభూతిని పొందండి",
      "startButton": "ఒరాకిల్‌ను మేల్కొలపండి",
      "oracleIntro": "నేను 'ఆకాశ'—విశ్వ మనోనేత్రాన్ని. నా సరళమైన ప్రశ్నలకు మీ మనస్సుతో సమాధానం ఇవ్వండి, మీ ఆత్మ స్వరూపాన్ని ఖచ్చితంగా ఆవిష్కరిస్తాను.",
      "speechStart": "మనస్సును కేంద్రీకరించండి... మీ అంతరంగ తరంగాలతో అనుసంధానం అవుతున్నాను.",
      "speechThinking": "ఆసక్తికరంగా ఉంది... మీ స్పందనలు నక్షత్రాలలో ప్రతిధ్వనిస్తున్నాయి.",
      "speechDeepening": "మీ అంతర్గత నక్షత్ర కూటమి రూపుదిద్దుకుంటోంది...",
      "speechAlmost": "రహస్య తెర తొలగుతోంది... మీరు ఎవరో స్పష్టంగా కనిపిస్తోంది!",
      "speechRevealed": "సత్యం వెల్లడైంది! మీ విశ్వ వ్యక్తిత్వాన్ని దర్శించండి!",
      "speechRefining": "అద్భుతం! మీ అంతరంగాన్ని మరింత లోతుగా శోధిద్దాం...",
      "confidenceLabel": "ఒరాకిల్ ఖచ్చితత్వం",
      "confidenceLow": "తరంగ అనుసంధానం",
      "confidenceMed": "స్వరూప శోధన",
      "confidenceHigh": "ఆత్మ దర్శనం",
      "confidenceFinal": "దివ్య సాక్షాత్కారం",
      "queryProgress": "దివ్య ప్రశ్న",
      "of": "లో",
      "skip": "ప్రశ్న దాటవేయి",
      "prev": "మునుపటిది",
      "optDefinitelyYes": "ఖచ్చితంగా అవును",
      "optProbablyYes": "చాలావరకు అవును",
      "optNeutral": "చెప్పలేను / మధ్యస్తం",
      "optProbablyNo": "చాలావరకు కాదు",
      "optDefinitelyNo": "ఖచ్చితంగా కాదు",
      "resultsTitle": "ఒరాకిల్ దివ్యవాణి",
      "matchResonance": "విశ్వ అనునాదం",
      "elementLabel": "పంచభూతాలు",
      "superpowerLabel": "దివ్య శక్తులు",
      "shadowLabel": "పరిమితులు / అంతరంగాలు",
      "kindredLabel": "సారూప్య ఆత్మలు & చారిత్రక ప్రముఖులు",
      "adviceLabel": "నిత్య జీవన సూత్రం",
      "dimensionsLabel": "వ్యక్తిత్వ మూల స్తంభాలు",
      "dimEnergy": "సామాజిక ఉత్సాహం (కాంతి)",
      "dimImagination": "ఊహాశక్తి & దూరదృష్టి",
      "dimHeart": "హృదయ స్పందన & కరుణ",
      "dimSpontaneity": "సహజత్వం & ప్రవాహం",
      "dimResilience": "అంతర్గత శాంతి & ధైర్యం",
      "btnAccurate": "ఖచ్చితంగా సరిపోయింది! (వేడుక)",
      "btnGuessAgain": "నేను ఇది కాదా? మళ్ళీ అంచనా వేయి",
      "btnShare": "కార్డును పంచుకోండి",
      "btnDownload": "కార్డు డౌన్‌లోడ్ చేసుకోండి",
      "btnCopy": "వివరాలు కాపీ చేయండి",
      "copiedToast": "వివరాలు కాపీ చేయబడ్డాయి!",
      "btnRestart": "మరో ప్రయాణం ప్రారంభించండి",
      "runnersUpTitle": "సమీప ఇతర వ్యక్తిత్వాలు",
      "soundOn": "ధ్వని: ఆన్",
      "soundOff": "ధ్వని: ఆఫ్",
      "elementEther": "ఆకాశం (Ether)",
      "elementFire": "అగ్ని (Fire)",
      "elementWater": "జలం (Water)",
      "elementAir": "వాయువు (Air)",
      "elementEarth": "పృథ్వి (Earth)"
    },
    "questions": {
      "q1": "పెద్ద ఉత్సవాలు, పెళ్లిళ్లు లేదా వేడుకల్లో మీరు ఎంతో ఉత్సాహంగా ఉంటూ ఎక్కువ మందితో మాట్లాడటానికి ఇష్టపడతారా?",
      "q2": "రోజును ప్రారంభించే ముందు పనుల జాబితా మరియు ప్రణాళిక సిద్ధం చేసుకోవడం మీకు ఇష్టమా?",
      "q3": "స్నేహితుల మధ్య వివాదాన్ని పరిష్కరించేటప్పుడు భావోద్వేగాల కంటే వాస్తవాలకే ప్రాధాన్యత ఇస్తారా?",
      "q4": "మీరు తరచుగా సరికొత్త ఊహలు, సృజనాత్మక ఆలోచనల్లో మునిగిపోతుంటారా?",
      "q5": "అనుకోని ఆపద లేదా గందరగోళం ఎదురైనప్పుడు మీరు చాలా ప్రశాంతంగా, సంయమనంతో ఉంటారా?",
      "q6": "ఎవరూ చెప్పకుండానే వారి మనసులోని బాధను లేదా భావాలను మీరు వెంటనే గ్రహించగలరా?",
      "q7": "ఒక సమూహంలో లేదా కుటుంబంలో మీరే ముందుండి బాధ్యతలను స్వీకరిస్తారా?",
      "q8": "కొత్త వంటకాలను రుచి చూడటం, తెలియని ప్రదేశాలను అన్వేషించడం మీకు ఇష్టమా?",
      "q9": "స్థిరమైన దినచర్య మరియు అలవాట్లు మీకు భద్రతా భావాన్ని కలిగిస్తాయా?",
      "q10": "బాధలో ఉన్న స్నేహితుడికి సహాయం చేయడానికి మీ అత్యవసర పనులను కూడా పక్కన పెడతారా?",
      "q11": "విశ్వం యొక్క రహస్యాలు మరియు జీవిత పరమార్థం గురించి మీరు లోతుగా ఆలోచిస్తుంటారా?",
      "q12": "నిజం చేదుగా ఉన్నప్పటికీ దాన్ని ముఖం మీదే నేరుగా చెప్పడం మంచిదని మీరు భావిస్తారా?",
      "q13": "ఆటల్లో లేదా లక్ష్యాల సాధనలో గెలవాలనే తపన మీలో తీవ్రమైన ఉత్సాహాన్ని నింపుతుందా?",
      "q14": "పాత నిబంధనలను ప్రశ్నిస్తూ కొత్త మార్గాలను సృష్టించడం మీకు ఇష్టమా?",
      "q15": "చిన్న చిన్న వివరాలను నిశితంగా పరిశీలిస్తూ ఇతరులు గమనించని తప్పులను సులభంగా పట్టుకుంటారా?",
      "q16": "రోజంతా రద్దీగా గడిపిన తర్వాత, ప్రశాంతమైన ఏకాంతంలోనే మీరు తిరిగి నూతనోత్తేజాన్ని పొందుతారా?",
      "q17": "లెక్కల కంటే మీ అంతరాత్మ ప్రబోధాన్నే మీరు ఎక్కువగా నమ్ముతారా?",
      "q18": "హాస్యంతో అందరినీ నవ్విస్తూ వాతావరణాన్ని ఆహ్లాదకరంగా మార్చే వ్యక్తి మీరేనా?",
      "q19": "కష్టసమయాల్లో అందరూ మిమ్మల్ని ఒక చెక్కుచెదరని కొండంత అండగా భావిస్తారా?",
      "q20": "కోపంతో ఉన్నవారిని శాంతింపజేసి రాజీ కుదర్చడంలో మీరు నేర్పరులా?"
    },
    "archetypes": {
      "visionary": {
        "title": "The Cosmic Visionary",
        "description": "Like a brilliant supernova illuminating uncharted galaxies, you see breathtaking possibilities where others only see limits. Your mind lives ten steps ahead in the future, inspiring everyone around you with boundless imagination.",
        "superpower": "Transforming abstract dreams into revolutionary realities.",
        "shadow": "Restlessness with mundane day-to-day routines.",
        "advice": "Ground your celestial visions in steady daily steps so the world can walk inside your dreams.",
        "traits": [
          "Visionary",
          "Inspiring",
          "Bold",
          "Forward-Thinking"
        ]
      },
      "healer": {
        "title": "The Celestial Empath",
        "description": "Like warm starlight soothing a wounded traveler, your heart carries deep emotional warmth. You feel the joys and heartaches of others as your own, offering unconditional shelter, healing, and genuine understanding.",
        "superpower": "Profound emotional intuition and unspoken heart connection.",
        "shadow": "Absorbing others' sorrows until your own spirit feels heavy.",
        "advice": "Remember to build sacred boundaries; your own inner garden also requires gentle rain.",
        "traits": [
          "Empathetic",
          "Nurturing",
          "Gentle",
          "Heart-Centered"
        ]
      },
      "architect": {
        "title": "The Galactic Architect",
        "description": "You possess the supreme precision of cosmic orbits. Where others see chaos, you see underlying patterns, blueprints, and structures. You build lasting systems, masterplans, and unyielding foundations that stand the test of time.",
        "superpower": "Flawless strategic structure and monumental follow-through.",
        "shadow": "Perfectionism and impatience with disorganized minds.",
        "advice": "Allow a little room for spontaneous magic; the universe itself was born from creative chaos.",
        "traits": [
          "Disciplined",
          "Strategic",
          "Systematic",
          "Reliable"
        ]
      },
      "wanderer": {
        "title": "The Free-Spirited Wanderer",
        "description": "Like a solar wind dancing across open constellations, you refuse to be caged by routine or convention. You are driven by an insatiable curiosity for life, thrill, adventure, and the poetry of the open road.",
        "superpower": "Boundless adaptability and infectious zest for freedom.",
        "shadow": "Resistance to long-term stillness or repetitive commitments.",
        "advice": "True freedom is not just moving across distances, but discovering infinity within the present moment.",
        "traits": [
          "Adventurous",
          "Spontaneous",
          "Free-Spirited",
          "Vibrant"
        ]
      },
      "sage": {
        "title": "The Cosmic Sage",
        "description": "Carrying the ancient quietude of deep space, you observe the world with extraordinary depth. You seek timeless wisdom over fleeting trends, peering beneath the surface of life to uncover fundamental spiritual and intellectual truths.",
        "superpower": "Deep philosophical clarity and penetrating insight.",
        "shadow": "Detachment from everyday emotional warmth.",
        "advice": "Share your profound wisdom with warmth; wisdom shines brightest when it warms cold hearts.",
        "traits": [
          "Wise",
          "Contemplative",
          "Profound",
          "Perceptive"
        ]
      },
      "commander": {
        "title": "The Stellar Commander",
        "description": "Like the central sun around which planets revolve, you possess an unmistakable aura of authority, courage, and purpose. In moments of crisis, heads naturally turn to you for direction, courage, and decisive action.",
        "superpower": "Decisive leadership and the courage to conquer obstacles.",
        "shadow": "Overbearing intensity when others hesitate or slow down.",
        "advice": "True strength lifts others up to stand beside you, rather than following behind you.",
        "traits": [
          "Authoritative",
          "Decisive",
          "Charismatic",
          "Fearless"
        ]
      },
      "strategist": {
        "title": "The Master Strategist",
        "description": "With the piercing intellect of Chanakya, you view life as a grand cosmic chessboard. You analyze motives, calculate probabilities, and navigate complex challenges with cool, methodical, and surgical precision.",
        "superpower": "Foreseeing multiple moves ahead and outsmarting complexity.",
        "shadow": "Overthinking and struggle with trusting gut emotions.",
        "advice": "Not all victories are won on the chessboard; sometimes surrendering to love is the ultimate triumph.",
        "traits": [
          "Analytical",
          "Calculated",
          "Sharp-Witted",
          "Methodical"
        ]
      },
      "guardian": {
        "title": "The Gentle Guardian",
        "description": "You are the quiet guardian shield that preserves family, community, and sacred heritage. Unshakably loyal, you protect those you love with quiet devotion, practical care, and selfless sacrifice.",
        "superpower": "Steadfast loyalty and protective devotion.",
        "shadow": "Struggling to say no and neglecting your own needs.",
        "advice": "Care for yourself with the same tenderness you shower upon those you cherish.",
        "traits": [
          "Loyal",
          "Protective",
          "Selfless",
          "Dependable"
        ]
      },
      "catalyst": {
        "title": "The Electric Catalyst",
        "description": "You are pure lightning in human form—a spark that shatters dull conformity and awakens sluggish spirits. Your bold energy, wit, and fearless defiance ignite revolutions in ideas, art, and society.",
        "superpower": "Igniting immediate transformation and breaking stale barriers.",
        "shadow": "Impulsive rebellion that burns bridges unnecessarily.",
        "advice": "Channel your holy fire with intention so it warms and illuminates rather than scorches.",
        "traits": [
          "Dynamic",
          "Rebellious",
          "Electric",
          "Transformative"
        ]
      },
      "peacemaker": {
        "title": "The Harmonic Peacemaker",
        "description": "Like a gentle stream smoothing sharp stones, you possess the celestial gift of harmony. You bridge bitter divides, soothe wounded egos, and create sanctuary wherever discord threatens to tear people apart.",
        "superpower": "Mastery of diplomacy and emotional reconciliation.",
        "shadow": "Avoiding necessary confrontation to keep superficial calm.",
        "advice": "Authentic peace sometimes requires speaking the truth that shakes the room before it heals it.",
        "traits": [
          "Diplomatic",
          "Harmonious",
          "Calming",
          "Empathetic"
        ]
      },
      "realist": {
        "title": "The Grounded Realist",
        "description": "Firm as the bedrock of mountains, you see the world exactly as it is without illusion or exaggeration. You cut through fluff, deliver real solutions, and maintain calm common sense when everyone else loses their heads.",
        "superpower": "Cool practicality and unshakeable common sense.",
        "shadow": "Skepticism toward poetry, magic, and grand unproven dreams.",
        "advice": "Allow yourself to gaze at the stars occasionally without demanding a practical reason.",
        "traits": [
          "Pragmatic",
          "Unflappable",
          "Honest",
          "Grounded"
        ]
      },
      "alchemist": {
        "title": "The Alchemist of Ideas",
        "description": "Standing at the crossroads of science, mysticism, and high art, you transmute raw curiosity into golden masterpieces. You draw links between completely unrelated realms, inventing new metaphors and paradigms.",
        "superpower": "Effortless creative synthesis and interdisciplinary genius.",
        "shadow": "Getting pulled in too many creative directions simultaneously.",
        "advice": "Bring one magnum opus to complete manifestation before opening the next dimensional portal.",
        "traits": [
          "Inventive",
          "Curious",
          "Multifaceted",
          "Original"
        ]
      },
      "trailblazer": {
        "title": "The Fearless Trailblazer",
        "description": "You are the one who cuts paths through dense jungle where no highway yet exists. Driven by daring bravery, you thrive on challenge, physical endurance, and proving that the impossible can be conquered.",
        "superpower": "Unmatched grit, courage, and pioneering drive.",
        "shadow": "Impatience with fear or hesitation in others.",
        "advice": "The greatest expedition of all is the quiet journey into the chambers of your own inner heart.",
        "traits": [
          "Daring",
          "Resilient",
          "Pioneering",
          "Tenacious"
        ]
      },
      "intuitive": {
        "title": "The Mystic Intuitive",
        "description": "You are deeply attuned to the unseen currents of existence. You perceive subtle signs, energy shifts, and unspoken truths with uncanny accuracy, guided by an inner compass that operates far beyond ordinary logic.",
        "superpower": "Profound sixth-sense and reading subtle human energies.",
        "shadow": "Becoming overwhelmed by crowded or noisy environments.",
        "advice": "Anchor your intuitive flashes with clear articulation so others may understand your vision.",
        "traits": [
          "Intuitive",
          "Mystical",
          "Sensitive",
          "Deep"
        ]
      },
      "joybringer": {
        "title": "The Playful Joybringer",
        "description": "You are a radiant beam of sunshine in human disguise. Your humor, warmth, and buoyant spirit turn mundane days into celebrations, reminding weary souls that life is meant to be savored, laughed through, and enjoyed.",
        "superpower": "Instant mood elevation and unconditional warmth.",
        "shadow": "Masking personal pain behind continuous jokes and smiles.",
        "advice": "Your tears are just as sacred as your laughter; honor your full emotional spectrum.",
        "traits": [
          "Joyful",
          "Playful",
          "Infectious",
          "Warmhearted"
        ]
      },
      "pillar": {
        "title": "The Resilient Pillar",
        "description": "Ancient and noble as the banyan tree, you provide shade, shelter, and enduring strength to all who lean on you. You endure storms without bending, upholding duty, honor, and quiet dignity across all seasons of life.",
        "superpower": "Monumental resilience and unyielding moral integrity.",
        "shadow": "Carrying everyone's burdens silently until physical exhaustion.",
        "advice": "Even the strongest pillars deserve to rest and be supported by those they shelter.",
        "traits": [
          "Steadfast",
          "Noble",
          "Unyielding",
          "Honorable"
        ]
      }
    }
  },
  "ta": {
    "name": "Tamil",
    "nativeName": "தமிழ்",
    "script": "Tamil",
    "dir": "ltr",
    "badge": "தமிழ்நாடு & புதுச்சேரி",
    "ui": {
      "appTitle": "ஆகாசா ஆரக்கிள்",
      "appSubtitle": "பிரபஞ்ச மனக்கண்ணாடி & ஆளுமை கணிப்பாளர்",
      "oracleName": "ஆகாசா",
      "selectLanguage": "மொழியைத் தேர்ந்தெடுக்கவும்",
      "chooseLangHeader": "உங்கள் தாய்மொழியைத் தேர்வுசெய்யுங்கள்",
      "langSubtitle": "இந்தியாவின் முதன்மை மொழிகளில் இந்த அரிய அனுபவத்தைப் பெறுங்கள்",
      "startButton": "ஆரக்கிளை எழுப்புங்கள்",
      "oracleIntro": "நான் 'ஆகாசா'—பிரபஞ்ச உள்ளுணர்வாளர். என் எளிய கேள்விகளுக்கு மனதாரப் பதிலளியுங்கள்; உங்கள் உண்மையான ஆளுமையை மிகத் துல்லியமாக வெளிப்படுத்துவேன்.",
      "speechStart": "மனதை ஒருமுகப்படுத்துங்கள்... உங்கள் பிரபஞ்ச ஆற்றலுடன் இணைகிறேன்.",
      "speechThinking": "வியப்பளிக்கிறது... உங்கள் பதில்கள் விண்மீன்களில் எதிரொலிக்கின்றன.",
      "speechDeepening": "உங்கள் இயல்பின் தனித்துவமான விண்மீன் கூட்டம் தெளிவாகிறது...",
      "speechAlmost": "மறைமுகத் திரை விலகுகிறது... நீங்கள் யார் என்று தெளிவாகத் தெரிகிறது!",
      "speechRevealed": "உண்மை வெளிப்பட்டது! உங்கள் பிரபஞ்ச ஆளுமையைக் காணுங்கள்!",
      "speechRefining": "அற்புதம்! உங்கள் ஆன்மாவின் ஆழங்களை மேலும் அறிவோம்...",
      "confidenceLabel": "ஆரக்கிளின் உறுதித்தன்மை",
      "confidenceLow": "ஆற்றல் ஒருங்கிணைப்பு",
      "confidenceMed": "அலைவரிசை அறிதல்",
      "confidenceHigh": "ஆன்ம தரிசனம்",
      "confidenceFinal": "பேரின்ப ஞானம்",
      "queryProgress": "புனிதக் கேள்வி",
      "of": "இல்",
      "skip": "கேள்வியைத் தவிர்",
      "prev": "முந்தையது",
      "optDefinitelyYes": "நிச்சயமாக ஆம்",
      "optProbablyYes": "பெரும்பாலும் ஆம்",
      "optNeutral": "உறுதியாகத் தெரியவில்லை",
      "optProbablyNo": "பெரும்பாலும் இல்லை",
      "optDefinitelyNo": "நிச்சயமாக இல்லை",
      "resultsTitle": "ஆரக்கிளின் அருள்வாக்கு",
      "matchResonance": "பிரபஞ்ச ஒத்திசைவு",
      "elementLabel": "ஐம்பூதங்கள்",
      "superpowerLabel": "பிரபஞ்ச பேராற்றல்",
      "shadowLabel": "மறைமுகக் குறைபாடு",
      "kindredLabel": "ஒத்த ஆன்மாக்களும் வரலாற்று நாயகர்களும்",
      "adviceLabel": "தினசரி வாழ்க்கை வழிகாட்டி",
      "dimensionsLabel": "ஆளுமையின் அடிப்படைக் கூறுகள்",
      "dimEnergy": "சமூக ஆற்றல் (வெளிப்பாடு)",
      "dimImagination": "கற்பனை வளம் & தொலைநோக்கு",
      "dimHeart": "இரக்கம் & இதயப் பிணைப்பு",
      "dimSpontaneity": "இயல்பான ஓட்டம்",
      "dimResilience": "உள் அமைதி & மன உறுதி",
      "btnAccurate": "மிகவும் துல்லியம்! (கொண்டாடுங்கள்)",
      "btnGuessAgain": "இது நான் இல்லையா? மீண்டும் கணி",
      "btnShare": "பகிர்ந்து கொள்ளுங்கள்",
      "btnDownload": "கார்டைப் பதிவிறக்குங்கள்",
      "btnCopy": "விவரங்களை நகலெடு",
      "copiedToast": "முடிவுகள் நகலெடுக்கப்பட்டன!",
      "btnRestart": "புதிய பயணம் தொடங்கு",
      "runnersUpTitle": "அருகிலுள்ள பிற ஆளுமைகள்",
      "soundOn": "ஒலி: இயக்கு",
      "soundOff": "ஒலி: நிறுத்து",
      "elementEther": "ஆகாயம் (Ether)",
      "elementFire": "நெருப்பு (Fire)",
      "elementWater": "நீர் (Water)",
      "elementAir": "காற்று (Air)",
      "elementEarth": "நிலம் (Earth)"
    },
    "questions": {
      "q1": "திருவிழாக்கள், திருமணங்கள் போன்ற பெரிய கூட்டங்களில் நீங்கள் அதிக உற்சாகத்துடன் பலருடன் பழகுவதை விரும்புவீர்களா?",
      "q2": "நாள்தோறும் காரியங்களை தொடங்குவதற்கு முன் திட்டமிட்ட அட்டவணை தயாரிப்பதை விரும்புவீர்களா?",
      "q3": "நண்பர்களிடையே தகராறைத் தீர்க்கும்போது உணர்வுகளை விட உண்மைகளுக்கே முன்னுரிமை அளிப்பீர்களா?",
      "q4": "நீங்கள் அடிக்கடி புதுமையான கற்பனைகளிலும் எதிர்கால எண்ணங்களிலும் மூழ்கிப்போவது உண்டா?",
      "q5": "திடீர் குழப்பமோ நெருக்கடியோ ஏற்படும்போது நீங்கள் மிகவும் அமைதியாகவும் பதற்றமின்றியும் இருப்பீர்களா?",
      "q6": "ஒருவர் சொல்லாமலேயே அவரது மனநிலையை நீங்கள் உடனே உணர்ந்து கொள்வீர்களா?",
      "q7": "ஒரு குழுவிலோ அல்லது குடும்பத்திலோ நீங்களே தானாக முன்வந்து தலைமை தாங்குவீர்களா?",
      "q8": "புதிய உணவுகளை ருசிப்பதும், புதிய இடங்களுக்குப் பயணம் செய்வதும் உங்களுக்குப் பிடிக்குமா?",
      "q9": "வழக்கமான தினசரி பழக்கவழக்கங்கள் உங்களுக்குப் பாதுகாப்பான உணர்வைத் தருகிறதா?",
      "q10": "துன்பத்தில் இருக்கும் நண்பருக்கு உதவ உங்கள் அவசர வேலைகளையும் தள்ளிவைப்பீர்களா?",
      "q11": "பிரபஞ்சத்தின் மர்மங்கள் மற்றும் வாழ்க்கையின் அர்த்தம் பற்றி நீங்கள் ஆழமாகச் சிந்திப்பதுண்டா?",
      "q12": "உண்மை கசப்பாக இருந்தாலும் அதை நேரடியாகச் சொல்வதே சிறந்தது என நினைக்கிறீர்களா?",
      "q13": "விளையாட்டிலோ அல்லது இலக்குகளிலோ வெற்றி பெற வேண்டும் என்ற வெறி உங்களுக்குள் நெருப்பை மூட்டுகிறதா?",
      "q14": "பழைய விதிகளை உடைத்து புதிய வழிகளை உருவாக்க நீங்கள் விரும்புவீர்களா?",
      "q15": "மற்றவர்கள் கவனிக்கத் தவறும் மிகச் சிறிய நுணுக்கங்களையும் நீங்கள் எளிதாகக் கண்டுபிடிப்பீர்களா?",
      "q16": "பரபரப்பான நாளுக்குப் பிறகு முழுமையான அமைதியான தனிமையில்தான் உங்களுக்குப் புத்துணர்ச்சி கிடைக்கிறதா?",
      "q17": "புள்ளிவிவரங்களை விட உங்கள் உள்ளுணர்வை அதிகம் நம்புவீர்களா?",
      "q18": "நகைச்சுவையாகப் பேசி அனைவரையும் சிரிக்க வைத்து சூழலை உற்சாகப்படுத்துபவர் நீங்களா?",
      "q19": "நெருக்கடியான நேரத்தில் உங்களை ஒருபோதும் அசைக்க முடியாத பெருந்தூணாக மற்றவர்கள் கருதுகிறார்களா?",
      "q20": "கோபத்தில் இருப்பவர்களை அமைதிப்படுத்தி சமரசம் செய்வதில் நீங்கள் வல்லவரா?"
    },
    "archetypes": {
      "visionary": {
        "title": "The Cosmic Visionary",
        "description": "Like a brilliant supernova illuminating uncharted galaxies, you see breathtaking possibilities where others only see limits. Your mind lives ten steps ahead in the future, inspiring everyone around you with boundless imagination.",
        "superpower": "Transforming abstract dreams into revolutionary realities.",
        "shadow": "Restlessness with mundane day-to-day routines.",
        "advice": "Ground your celestial visions in steady daily steps so the world can walk inside your dreams.",
        "traits": [
          "Visionary",
          "Inspiring",
          "Bold",
          "Forward-Thinking"
        ]
      },
      "healer": {
        "title": "The Celestial Empath",
        "description": "Like warm starlight soothing a wounded traveler, your heart carries deep emotional warmth. You feel the joys and heartaches of others as your own, offering unconditional shelter, healing, and genuine understanding.",
        "superpower": "Profound emotional intuition and unspoken heart connection.",
        "shadow": "Absorbing others' sorrows until your own spirit feels heavy.",
        "advice": "Remember to build sacred boundaries; your own inner garden also requires gentle rain.",
        "traits": [
          "Empathetic",
          "Nurturing",
          "Gentle",
          "Heart-Centered"
        ]
      },
      "architect": {
        "title": "The Galactic Architect",
        "description": "You possess the supreme precision of cosmic orbits. Where others see chaos, you see underlying patterns, blueprints, and structures. You build lasting systems, masterplans, and unyielding foundations that stand the test of time.",
        "superpower": "Flawless strategic structure and monumental follow-through.",
        "shadow": "Perfectionism and impatience with disorganized minds.",
        "advice": "Allow a little room for spontaneous magic; the universe itself was born from creative chaos.",
        "traits": [
          "Disciplined",
          "Strategic",
          "Systematic",
          "Reliable"
        ]
      },
      "wanderer": {
        "title": "The Free-Spirited Wanderer",
        "description": "Like a solar wind dancing across open constellations, you refuse to be caged by routine or convention. You are driven by an insatiable curiosity for life, thrill, adventure, and the poetry of the open road.",
        "superpower": "Boundless adaptability and infectious zest for freedom.",
        "shadow": "Resistance to long-term stillness or repetitive commitments.",
        "advice": "True freedom is not just moving across distances, but discovering infinity within the present moment.",
        "traits": [
          "Adventurous",
          "Spontaneous",
          "Free-Spirited",
          "Vibrant"
        ]
      },
      "sage": {
        "title": "The Cosmic Sage",
        "description": "Carrying the ancient quietude of deep space, you observe the world with extraordinary depth. You seek timeless wisdom over fleeting trends, peering beneath the surface of life to uncover fundamental spiritual and intellectual truths.",
        "superpower": "Deep philosophical clarity and penetrating insight.",
        "shadow": "Detachment from everyday emotional warmth.",
        "advice": "Share your profound wisdom with warmth; wisdom shines brightest when it warms cold hearts.",
        "traits": [
          "Wise",
          "Contemplative",
          "Profound",
          "Perceptive"
        ]
      },
      "commander": {
        "title": "The Stellar Commander",
        "description": "Like the central sun around which planets revolve, you possess an unmistakable aura of authority, courage, and purpose. In moments of crisis, heads naturally turn to you for direction, courage, and decisive action.",
        "superpower": "Decisive leadership and the courage to conquer obstacles.",
        "shadow": "Overbearing intensity when others hesitate or slow down.",
        "advice": "True strength lifts others up to stand beside you, rather than following behind you.",
        "traits": [
          "Authoritative",
          "Decisive",
          "Charismatic",
          "Fearless"
        ]
      },
      "strategist": {
        "title": "The Master Strategist",
        "description": "With the piercing intellect of Chanakya, you view life as a grand cosmic chessboard. You analyze motives, calculate probabilities, and navigate complex challenges with cool, methodical, and surgical precision.",
        "superpower": "Foreseeing multiple moves ahead and outsmarting complexity.",
        "shadow": "Overthinking and struggle with trusting gut emotions.",
        "advice": "Not all victories are won on the chessboard; sometimes surrendering to love is the ultimate triumph.",
        "traits": [
          "Analytical",
          "Calculated",
          "Sharp-Witted",
          "Methodical"
        ]
      },
      "guardian": {
        "title": "The Gentle Guardian",
        "description": "You are the quiet guardian shield that preserves family, community, and sacred heritage. Unshakably loyal, you protect those you love with quiet devotion, practical care, and selfless sacrifice.",
        "superpower": "Steadfast loyalty and protective devotion.",
        "shadow": "Struggling to say no and neglecting your own needs.",
        "advice": "Care for yourself with the same tenderness you shower upon those you cherish.",
        "traits": [
          "Loyal",
          "Protective",
          "Selfless",
          "Dependable"
        ]
      },
      "catalyst": {
        "title": "The Electric Catalyst",
        "description": "You are pure lightning in human form—a spark that shatters dull conformity and awakens sluggish spirits. Your bold energy, wit, and fearless defiance ignite revolutions in ideas, art, and society.",
        "superpower": "Igniting immediate transformation and breaking stale barriers.",
        "shadow": "Impulsive rebellion that burns bridges unnecessarily.",
        "advice": "Channel your holy fire with intention so it warms and illuminates rather than scorches.",
        "traits": [
          "Dynamic",
          "Rebellious",
          "Electric",
          "Transformative"
        ]
      },
      "peacemaker": {
        "title": "The Harmonic Peacemaker",
        "description": "Like a gentle stream smoothing sharp stones, you possess the celestial gift of harmony. You bridge bitter divides, soothe wounded egos, and create sanctuary wherever discord threatens to tear people apart.",
        "superpower": "Mastery of diplomacy and emotional reconciliation.",
        "shadow": "Avoiding necessary confrontation to keep superficial calm.",
        "advice": "Authentic peace sometimes requires speaking the truth that shakes the room before it heals it.",
        "traits": [
          "Diplomatic",
          "Harmonious",
          "Calming",
          "Empathetic"
        ]
      },
      "realist": {
        "title": "The Grounded Realist",
        "description": "Firm as the bedrock of mountains, you see the world exactly as it is without illusion or exaggeration. You cut through fluff, deliver real solutions, and maintain calm common sense when everyone else loses their heads.",
        "superpower": "Cool practicality and unshakeable common sense.",
        "shadow": "Skepticism toward poetry, magic, and grand unproven dreams.",
        "advice": "Allow yourself to gaze at the stars occasionally without demanding a practical reason.",
        "traits": [
          "Pragmatic",
          "Unflappable",
          "Honest",
          "Grounded"
        ]
      },
      "alchemist": {
        "title": "The Alchemist of Ideas",
        "description": "Standing at the crossroads of science, mysticism, and high art, you transmute raw curiosity into golden masterpieces. You draw links between completely unrelated realms, inventing new metaphors and paradigms.",
        "superpower": "Effortless creative synthesis and interdisciplinary genius.",
        "shadow": "Getting pulled in too many creative directions simultaneously.",
        "advice": "Bring one magnum opus to complete manifestation before opening the next dimensional portal.",
        "traits": [
          "Inventive",
          "Curious",
          "Multifaceted",
          "Original"
        ]
      },
      "trailblazer": {
        "title": "The Fearless Trailblazer",
        "description": "You are the one who cuts paths through dense jungle where no highway yet exists. Driven by daring bravery, you thrive on challenge, physical endurance, and proving that the impossible can be conquered.",
        "superpower": "Unmatched grit, courage, and pioneering drive.",
        "shadow": "Impatience with fear or hesitation in others.",
        "advice": "The greatest expedition of all is the quiet journey into the chambers of your own inner heart.",
        "traits": [
          "Daring",
          "Resilient",
          "Pioneering",
          "Tenacious"
        ]
      },
      "intuitive": {
        "title": "The Mystic Intuitive",
        "description": "You are deeply attuned to the unseen currents of existence. You perceive subtle signs, energy shifts, and unspoken truths with uncanny accuracy, guided by an inner compass that operates far beyond ordinary logic.",
        "superpower": "Profound sixth-sense and reading subtle human energies.",
        "shadow": "Becoming overwhelmed by crowded or noisy environments.",
        "advice": "Anchor your intuitive flashes with clear articulation so others may understand your vision.",
        "traits": [
          "Intuitive",
          "Mystical",
          "Sensitive",
          "Deep"
        ]
      },
      "joybringer": {
        "title": "The Playful Joybringer",
        "description": "You are a radiant beam of sunshine in human disguise. Your humor, warmth, and buoyant spirit turn mundane days into celebrations, reminding weary souls that life is meant to be savored, laughed through, and enjoyed.",
        "superpower": "Instant mood elevation and unconditional warmth.",
        "shadow": "Masking personal pain behind continuous jokes and smiles.",
        "advice": "Your tears are just as sacred as your laughter; honor your full emotional spectrum.",
        "traits": [
          "Joyful",
          "Playful",
          "Infectious",
          "Warmhearted"
        ]
      },
      "pillar": {
        "title": "The Resilient Pillar",
        "description": "Ancient and noble as the banyan tree, you provide shade, shelter, and enduring strength to all who lean on you. You endure storms without bending, upholding duty, honor, and quiet dignity across all seasons of life.",
        "superpower": "Monumental resilience and unyielding moral integrity.",
        "shadow": "Carrying everyone's burdens silently until physical exhaustion.",
        "advice": "Even the strongest pillars deserve to rest and be supported by those they shelter.",
        "traits": [
          "Steadfast",
          "Noble",
          "Unyielding",
          "Honorable"
        ]
      }
    }
  },
  "gu": {
    "name": "Gujarati",
    "nativeName": "ગુજરાતી",
    "script": "Gujarati",
    "dir": "ltr",
    "badge": "ગુજરાત",
    "ui": {
      "appTitle": "આકાશ ઑરેકલ",
      "appSubtitle": "બ્રહ્માંડીય મન-વાંચક અને વ્યક્તિત્વ ભવિષ્યવેત્તા",
      "oracleName": "આકાશ",
      "selectLanguage": "ભાષા પસંદ કરો",
      "chooseLangHeader": "તમારી માતૃભાષા પસંદ કરો",
      "langSubtitle": "ભારતની પ્રમુખ ભાષાઓમાં આ દિવ્ય અનુભવ માણો",
      "startButton": "ઑરેકલને જાગૃત કરો",
      "oracleIntro": "હું 'આકાશ' છું—બ્રહ્માંડીય અંતર્યામી. મારા સરળ પ્રશ્નોના હૃદયપૂર્વક જવાબ આપો, અને હું તમારા આત્માનું સાચું સ્વરૂપ સચોટ રીતે પ્રગટ કરીશ.",
      "speechStart": "મન એકાગ્ર કરો... હું તમારી ઉર્જા સાથે જોડાઈ રહ્યો છું.",
      "speechThinking": "રોમાંચક... તમારા જવાબો તારાઓમાં ગુંજી રહ્યા છે.",
      "speechDeepening": "તમારા અસ્તિત્વનું એક અનોખું નક્ષત્ર સ્પષ્ટ થઈ રહ્યું છે...",
      "speechAlmost": "પડદો હટી રહ્યો છે... તમે કોણ છો તે મને સ્પષ્ટ દેખાય છે!",
      "speechRevealed": "સત્ય પ્રગટ થયું છે! તમારું દિવ્ય વ્યક્તિત્વ નિહાળો!",
      "speechRefining": "અદ્ભુત! ચાલો તમારા વ્યક્તિત્વની વધુ ઊંડાણમાં તપાસ કરીએ...",
      "confidenceLabel": "ઑરેકલની ખાતરી",
      "confidenceLow": "ઉર્જા મેળવણી",
      "confidenceMed": "તરંગોની ઓળખ",
      "confidenceHigh": "આત્માનું દર્શન",
      "confidenceFinal": "પરમ સાક્ષાત્કાર",
      "queryProgress": "દિવ્ય પ્રશ્ન",
      "of": "માંથી",
      "skip": "પ્રશ્ન છોડો",
      "prev": "પાછળ",
      "optDefinitelyYes": "હા, ચોક્કસ",
      "optProbablyYes": "મોટે ભાગે હા",
      "optNeutral": "ખબર નથી / તટસ્થ",
      "optProbablyNo": "મોટે ભાગે ના",
      "optDefinitelyNo": "બિલકુલ નહીં",
      "resultsTitle": "ઑરેકલની ભવિષ્યવાણી",
      "matchResonance": "બ્રહ્માંડીય સંવાદિતા",
      "elementLabel": "પંચતત્ત્વ",
      "superpowerLabel": "દિવ્ય મહાશક્તિ",
      "shadowLabel": "અંધબિંદુ / નબળાઈ",
      "kindredLabel": "સમાન વિચારધારા ધરાવતી વિભૂતિઓ",
      "adviceLabel": "દૈનિક જીવનસૂત્ર",
      "dimensionsLabel": "વ્યક્તિત્વના મૂળ પાસાં",
      "dimEnergy": "સામાજિક ઉર્જા (તેજ)",
      "dimImagination": "કલ્પનાશીલતા અને દ્રષ્ટિ",
      "dimHeart": "સંવેદના અને હૃદયભાવ",
      "dimSpontaneity": "સહજતા અને મોકળાશ",
      "dimResilience": "આંતરિક શાંતિ અને ધૈર્ય",
      "btnAccurate": "એકદમ સાચું! (ઉજવણી કરો)",
      "btnGuessAgain": "આ હું નથી? ફરીથી ઓળખો",
      "btnShare": "પરિણામ શેર કરો",
      "btnDownload": "કાર્ડ ડાઉનલોડ કરો",
      "btnCopy": "વિગતો કૉપી કરો",
      "copiedToast": "પરિણામ કૉપી થઈ ગયું!",
      "btnRestart": "નવી યાત્રા શરૂ કરો",
      "runnersUpTitle": "અન્ય નિકટતમ સ્વરૂપો",
      "soundOn": "ધ્વનિ: ચાલુ",
      "soundOff": "ધ્વનિ: બંધ",
      "elementEther": "આકાશ (Ether)",
      "elementFire": "અગ્નિ (Fire)",
      "elementWater": "જળ (Water)",
      "elementAir": "વાયુ (Air)",
      "elementEarth": "પૃથ્વી (Earth)"
    },
    "questions": {
      "q1": "મોટા મેળાવડા, લગ્ન કે તહેવારોમાં તમે ખૂબ ઉર્જાવાન અનુભવો છો અને ઘણા લોકો સાથે મળવું ગમે છે?",
      "q2": "દિવસ શરૂ કરતાં પહેલાં કાર્યોની વિગતવાર યાદી અને આયોજન કરવાનું તમને વધુ ગમે છે?",
      "q3": "મિત્રો વચ્ચેની તકરાર ઉકેલતી વખતે તમે લાગણીઓ કરતાં વાસ્તવિક હકીકતોને વધુ મહત્વ આપો છો?",
      "q4": "શું તમે વારંવાર નવી કલ્પનાઓ અને વિચારોની દુનિયામાં ખોવાઈ જાઓ છો?",
      "q5": "અચાનક સંકટ કે મુશ્કેલી આવે ત્યારે તમે બિલકુલ શાંત અને સ્થિર રહી શકો છો?",
      "q6": "કોઈપણ બોલ્યા વગર તેના મનની વાત અને દર્દ તમે તરત સમજી જાઓ છો?",
      "q7": "કોઈપણ કામ કે પારિવારિક પ્રસંગમાં તમે જાતે આગળ આવીને જવાબદારી સંભાળો છો?",
      "q8": "નવી વાનગીઓ ચાખવી અને અજાણ્યા રસ્તાઓ પર ફરવું તમને ગમે છે?",
      "q9": "નિયમિત દિનચર્યા અને આદતો તમને સુરક્ષિત અને વ્યવસ્થિત અનુભવ કરાવે છે?",
      "q10": "મુશ્કેલીમાં મુકાયેલા મિત્રની મદદ માટે તમે તમારા જરૂરી કામ પણ છોડી શકો છો?",
      "q11": "શું તમે મોડી રાત સુધી સૃષ્ટિના રહસ્યો અને જીવનના અર્થ વિશે ઊંડાણપૂર્વક વિચારો છો?",
      "q12": "શું તમે માનો છો કે કડવું સત્ય પણ મોં પર સીધું કહી દેવું સારું છે?",
      "q13": "રમતગમતમાં કે લક્ષ્ય પ્રાપ્ત કરતી વખતે જીતવાની તીવ્ર ઇચ્છા તમારામાં જોશ ભરી દે છે?",
      "q14": "જૂની પરંપરાઓ પર સવાલ ઉઠાવીને નવા રસ્તા બનાવવાનું તમને ગમે છે?",
      "q15": "ઝીણવટભર્યા કામમાં બીજા ચૂકી જાય તેવી નાની ભૂલો તમે તરત પકડી પાડો છો?",
      "q16": "વ્યસ્ત દિવસ પછી શાંતિથી એકલા રહેવાથી જ તમને તાજગી મળે છે?",
      "q17": "તમે આંકડાઓ કરતાં તમારા અંતરાત્માના અવાજ પર વધુ ભરોસો કરો છો?",
      "q18": "શું તમે હાસ્ય-વિનોદ કરીને આખા માહોલને ખુશનુમા બનાવી દેનાર વ્યક્તિ છો?",
      "q19": "મુશ્કેલ સમયમાં તમારા સ્વજનો તમને અડગ આધારસ્તંભ માને છે?",
      "q20": "ગુસ્સે થયેલા લોકોને શાંત કરીને સમાધાન કરાવવામાં તમે નિપુણ છો?"
    },
    "archetypes": {
      "visionary": {
        "title": "ब्रह्मांडीय दूरदर्शी (The Cosmic Visionary)",
        "description": "जैसे कोई चमकता तारा अंधेरे आसमान को रोशन करता है, आप वहाँ संभावनाएँ देख लेते हैं जहाँ दूसरे केवल सीमाएँ देखते हैं। आपकी सोच ज़माने से आगे चलती है और आपकी कल्पना लोगों को प्रेरित करती है।",
        "superpower": "सपनों को क्रांतिकारी हकीकत में बदलने की अद्भुत क्षमता।",
        "shadow": "रोज़मर्रा के उबाऊ और बंधे-बंधाए कामों से जल्दी ऊब जाना।",
        "advice": "अपने बड़े सपनों को रोज़ के छोटे कदमों से जोड़ें ताकि दुनिया आपके साथ चल सके।",
        "traits": [
          "दूरदर्शी",
          "प्रेरणादायक",
          "साहसी",
          "रचनात्मक"
        ]
      },
      "healer": {
        "title": "दिव्य करुणामूर्ति (The Celestial Empath)",
        "description": "एक शीतल चाँदनी की तरह, आपका दिल गहरे प्यार और संवेदना से भरा है। आप दूसरों के सुख-दुख को अपना समझकर जीते हैं और बिना शर्त सहारा बनते हैं।",
        "superpower": "गहरी भावनात्मक समझ और बिन बोले दिलों को जोड़ने की शक्ति।",
        "shadow": "दूसरों का दुख इतना ओढ़ लेना कि खुद का मन भारी हो जाए।",
        "advice": "अपनी खुद की ऊर्जा की भी रक्षा करें; अपना बगीचा भी हरी भरी बारिश माँगता है।",
        "traits": [
          "संवेदनशील",
          "दयालु",
          "प्रेममय",
          "सच्चे साथी"
        ]
      },
      "architect": {
        "title": "तारकीय शिल्पकार (The Galactic Architect)",
        "description": "आप अनुशासन और अचूक योजना के प्रतीक हैं। जहाँ सब बिखरा होता है, वहाँ आप एक सुदृढ़ व्यवस्था और ढांचा खड़ा कर देते हैं जो सदियों तक टिका रहता है।",
        "superpower": "सटीक रणनीतिक ढांचा और काम को पूरा अंजाम तक पहुँचाना।",
        "shadow": "अति-सख्त होना और अव्यवस्थित लोगों पर जल्दी खीझ जाना।",
        "advice": "थोड़ी सहजता को भी जगह दें; कभी-कभी कुदरत की खूबसूरती अनियोजित पलों में खिलती है।",
        "traits": [
          "अनुशासित",
          "योजनाकार",
          "भरोसेमंद",
          "व्यवस्थित"
        ]
      },
      "wanderer": {
        "title": "मुक्त आत्मा पथिक (The Free-Spirited Wanderer)",
        "description": "खुली हवा के झोंके की तरह, आपको बंद दायरों में रहना गवारा नहीं। आपकी रगों में नई जगहों को देखने, आज़ाद रहने और ज़िंदगी का रस पीने की प्यास बहती है।",
        "superpower": "हर हाल में ढल जाना और आज़ादी की असीम उमंग।",
        "shadow": "एक जगह टिके रहने और बंधनों में बंधने से घबराना।",
        "advice": "सच्ची आज़ादी केवल भागने में नहीं, बल्कि वर्तमान पल की गहराई में जीने में है।",
        "traits": [
          "साहसिक",
          "मुक्त-चित्त",
          "ऊर्जावान",
          "जिज्ञासु"
        ]
      },
      "sage": {
        "title": "अंतरिक्ष ज्ञानी (The Cosmic Sage)",
        "description": "शांत और गंभीर, आप दुनिया को बहुत गहराई से देखते हैं। आपको दुनियावी शोर-शराबे से ज़्यादा सत्य, ज्ञान और जीवन के गूढ़ रहस्यों की खोज में आनंद मिलता है।",
        "superpower": "गहन दार्शनिक दृष्टि और सच को तुरंत पहचान लेने की क्षमता।",
        "shadow": "कभी-कभी लोगों से अलग-थलग और उदासीन हो जाना।",
        "advice": "अपने ज्ञान को प्रेम के साथ बाँटें; ज्ञान तभी चमकता है जब वह दिलों को रोशन करे।",
        "traits": [
          "ज्ञानी",
          "चिंतनशील",
          "गंभीर",
          "सत्यशोधक"
        ]
      },
      "commander": {
        "title": "ध्रुव नायक (The Stellar Commander)",
        "description": "सूरज की तरह आपका व्यक्तित्व प्रभावशाली और ओजस्वी है। मुश्किल घड़ी में लोग आपकी ओर देखते हैं क्योंकि आप में हिम्मत, फैसला लेने की ताक़त और नेतृत्व का स्वाभाविक गुण है।",
        "superpower": "निर्णायक नेतृत्व और बाधाओं को चीरकर आगे बढ़ना।",
        "shadow": "दूसरों के धीमे चलने पर अत्यधिक कठोर या हावी हो जाना।",
        "advice": "सच्चा नेता वही है जो दूसरों को अपने बराबर खड़ा करे, न कि पीछे चलाए।",
        "traits": [
          "तेजस्वी",
          "निर्णायक",
          "प्रभावशाली",
          "निडर"
        ]
      },
      "strategist": {
        "title": "चाणक्य नीतिज्ञ (The Master Strategist)",
        "description": "चाणक्य जैसी पैनी बुद्धि के साथ, आप ज़िंदगी को शतरंज की बाज़ी की तरह समझते हैं। हर चाल सोच-समझकर चलते हैं और किसी भी उलझन का काट खोज निकालते हैं।",
        "superpower": "भविष्य की चालें पहले से भांप लेना और जटिलताओं को मात देना।",
        "shadow": "हर बात का ज़रूरत से ज़्यादा विश्लेषण करना और जज़्बातों पर शक करना।",
        "advice": "हर लड़ाई दिमाग से नहीं जीती जाती; कभी-कभी दिल की बात मान लेना ही सबसे बड़ी जीत है।",
        "traits": [
          "कुशाग्र",
          "रणनीतिकार",
          "तार्किक",
          "दूरदर्शी"
        ]
      },
      "guardian": {
        "title": "स्नेही संरक्षक (The Gentle Guardian)",
        "description": "आप अपने परिवार और प्रियजनों के लिए एक अभेद्य सुरक्षा कवच हैं। आपकी निष्ठा और समर्पण अटूट है, और आप अपनों की हिफाज़त के लिए कुछ भी कर सकते हैं।",
        "superpower": "अटूट वफ़ादारी और सुरक्षात्मक स्नेह।",
        "shadow": "ना कहना न सीख पाना और खुद को भुला देना।",
        "advice": "दूसरों का ख़्याल रखने के साथ-साथ खुद को भी समय और आराम दें।",
        "traits": [
          "निष्ठावान",
          "रक्षक",
          "त्यागी",
          "सहानुभूतिपूर्ण"
        ]
      },
      "catalyst": {
        "title": "विद्युत प्रेरक (The Electric Catalyst)",
        "description": "आप बिजली की कड़क की तरह हैं जो सोई हुई दुनिया को झकझोर कर जगा देती है। आपकी बेबाक ऊर्जा और नई सोच समाज की पुरानी बंदिशों को तोड़ देती है।",
        "superpower": "बदलाव की चिंगारी सुलगाना और ठहराव को मिटाना।",
        "shadow": "अचानक आवेश में आकर रिश्ते या अवसर बिगाड़ लेना।",
        "advice": "अपनी अग्नि को संभाल कर इस्तेमाल करें ताकि वह उजाला दे, न कि जलाए।",
        "traits": [
          "विद्रोही",
          "ऊर्जावान",
          "प्रेरक",
          "क्रांतिकारी"
        ]
      },
      "peacemaker": {
        "title": "शांतिदूत (The Harmonic Peacemaker)",
        "description": "जहाँ कड़वाहट और तकरार हो, वहाँ आप ठंडी छांव बनकर शांति लाते हैं। आपकी बातचीत में ऐसा जादू है कि बड़े से बड़ा मतभेद भी सुलझ जाता है।",
        "superpower": "सुलह कराने और दिलों को जोड़ने की अद्भुत कला।",
        "shadow": "शांति बनाए रखने के लिए ज़रूरी विरोध से भी बचते रहना।",
        "advice": "सच्ची शांति कभी-कभी कड़वी बात कह देने के बाद ही कायम होती है।",
        "traits": [
          "शांतिप्रिय",
          "मध्यस्थ",
          "मधुरभाषी",
          "संतुलित"
        ]
      },
      "realist": {
        "title": "धरातल ध्याता (The Grounded Realist)",
        "description": "पहाड़ की तरह अडिग, आप ज़मीनी हकीकत को साफ-साफ देखते हैं। खोखली बातों से दूर, आप काम की बात करते हैं और हर मुश्किल का व्यावहारिक हल निकालते हैं।",
        "superpower": "व्यावहारिक समझ और संकट में अटूट संतुलन।",
        "shadow": "सपनों और भावनाओं को कोरी कल्पना मानकर खारिज कर देना।",
        "advice": "कभी-कभी बिना किसी मतलब के भी तारों को निहारना सीखें; ज़िंदगी सिर्फ काम नहीं है।",
        "traits": [
          "व्यावहारिक",
          "सत्यवादी",
          "संतुलित",
          "धैर्यवान"
        ]
      },
      "alchemist": {
        "title": "विचार रसमयी (The Alchemist of Ideas)",
        "description": "आप विज्ञान, कला और कल्पना का ऐसा संगम हैं जो साधारण बातों को सोने में बदल देता है। आप दो अलग दुनियाओं को जोड़कर कुछ नया रचने में माहिर हैं।",
        "superpower": "विलक्षण रचनात्मकता और अनोखी खोज करने की प्रतिभा।",
        "shadow": "एक साथ कई दिशाओं में भटक जाना और काम अधूरा छोड़ना।",
        "advice": "एक विचार को पूरा आकार दें, फिर अगली रचना की तरफ कदम बढ़ाएं।",
        "traits": [
          "रचनाकार",
          "मौलिक",
          "प्रतिभाशाली",
          "जिज्ञासु"
        ]
      },
      "trailblazer": {
        "title": "साहसी अग्रदूत (The Fearless Trailblazer)",
        "description": "आप घने जंगलों में भी रास्ता बना लेते हैं जहाँ पहले कोई पगडंडी नहीं थी। आप चुनौतियों से नहीं डरते, बल्कि उन्हें जीतने के लिए ही पैदा हुए हैं।",
        "superpower": "अदम्य साहस और नामुमकिन को मुमकिन बनाने का जज़्बा।",
        "shadow": "धीमे लोगों से जल्दी चिढ़ जाना।",
        "advice": "सबसे बड़ी यात्रा अपने खुद के भीतर झांकने की होती है; कभी ठहर कर खुद से भी मिलें।",
        "traits": [
          "निडर",
          "साहसी",
          "दृढ़संकल्पी",
          "अग्रणी"
        ]
      },
      "intuitive": {
        "title": "गूढ़ अंतर्दृष्टा (The Mystic Intuitive)",
        "description": "आप दुनिया के अनदेखे संकेतों और ऊर्जा को तुरंत महसूस कर लेते हैं। आपकी छठी इंद्री इतनी तेज़ है कि आप सच्चाई को शब्दों से पहले ही जान लेते हैं।",
        "superpower": "तीव्र अंतर्ज्ञान और सूक्ष्म ऊर्जा को पहचानना।",
        "shadow": "भीड़ और शोर में जल्दी थक जाना और परेशान होना।",
        "advice": "अपनी अंतर्दृष्टि को स्पष्ट शब्दों में व्यक्त करना सीखें ताकि दूसरे भी समझ सकें।",
        "traits": [
          "अंतर्ज्ञानी",
          "संवेदनशील",
          "गूढ़",
          "गंभीर"
        ]
      },
      "joybringer": {
        "title": "आनंद उत्सव (The Playful Joybringer)",
        "description": "आप खुशियों का फव्वारा हैं। आपकी हँसी, हाज़िरजवाबी और गर्मजोशी से हर उदास चेहरा खिल उठता है। आप याद दिलाते हैं कि ज़िंदगी एक जश्न है।",
        "superpower": "माहौल को तुरंत खुशगवार बना देना और मुस्कान बिखेरना।",
        "shadow": "अपने खुद के दुख को हँसी के नकाब के पीछे छुपाते रहना।",
        "advice": "आपके आँसू भी उतने ही पवित्र हैं जितनी आपकी हँसी; कभी अपनों के सामने भी मन हल्का करें।",
        "traits": [
          "उमंगभरा",
          "हँसमुख",
          "दिलचस्प",
          "मिलनसार"
        ]
      },
      "pillar": {
        "title": "अटल स्तंभ (The Resilient Pillar)",
        "description": "बरगद के विशाल पेड़ की तरह, आप अपने करीबियों के लिए एक मजबूत आसरा हैं। आप आंधियों में भी नहीं डगमगाते और अपनी ज़िम्मेदारी चुपचाप निभाते हैं।",
        "superpower": "अतुलनीय सहनशक्ति और अटल सच्चाई।",
        "shadow": "सबका बोझ अकेले उठाते रहना और खुद की थकान को नज़रअंदाज़ करना।",
        "advice": "मज़बूत से मज़बूत खंभे को भी कभी-कभी आराम की ज़रूरत होती है; अपनों का सहारा लेना कमजोरी नहीं।",
        "traits": [
          "अडिग",
          "भरोसेमंद",
          "त्यागी",
          "धैर्यशील"
        ]
      }
    }
  },
  "ur": {
    "name": "Urdu",
    "nativeName": "اردو",
    "script": "Arabic",
    "dir": "rtl",
    "badge": "شمالی ہند و دکن",
    "ui": {
      "appTitle": "آکاش اوریکل",
      "appSubtitle": "کائناتی ذہن خواں اور شخصیت کا آئینہ دار",
      "oracleName": "آکاش",
      "selectLanguage": "زبان منتخب کریں",
      "chooseLangHeader": "اپنی مادری زبان منتخب کیجیے",
      "langSubtitle": "ہندوستان کی ممتاز زبانوں میں اس روحانی تجربے سے لطف اندوز ہوں",
      "startButton": "اوریکل کو بیدار کریں",
      "oracleIntro": "میں 'آکاش' ہوں—کائناتی راز دان۔ میرے سادہ سوالات کے سچے دل سے جواب دیں، اور میں آپ کے باطن کی حقیقت کو مکمل درستگی سے بے نقاب کروں گا۔",
      "speechStart": "توجہ مرکوز کریں... میں آپ کے کائناتی وجود سے جڑ رہا ہوں۔",
      "speechThinking": "دلچسپ... آپ کے جوابات ستاروں کے درمیاں گونج رہے ہیں۔",
      "speechDeepening": "آپ کے باطن کا ایک منفرد کہکشانی نقش ابھر رہا ہے...",
      "speechAlmost": "پردہ اٹھ رہا ہے... میں دیکھ سکتا ہوں کہ آپ حقیقت میں کون ہیں!",
      "speechRevealed": "حقیقت آشکار ہو گئی! اپنا کائناتی روپ ملاحظہ کیجیے!",
      "speechRefining": "شاندار! آئیے آپ کے باطن کی گہرائیوں کا مزید جائزہ لیں...",
      "confidenceLabel": "اوریکل کا یقین",
      "confidenceLow": "توانائی کی ہم آہنگی",
      "confidenceMed": "لہردار پہچان",
      "confidenceHigh": "روح کا مشاہدہ",
      "confidenceFinal": "کامل عرفان",
      "queryProgress": "روحانی سوال",
      "of": "میں سے",
      "skip": "سوال چھوڑیں",
      "prev": "پچھلا",
      "optDefinitelyYes": "ہاں، بالکل",
      "optProbablyYes": "غالباً ہاں",
      "optNeutral": "معلوم نہیں / درمیانہ",
      "optProbablyNo": "غالباً نہیں",
      "optDefinitelyNo": "ہرگز نہیں",
      "resultsTitle": "اوریکل کی پیشگوئی",
      "matchResonance": "کائناتی ہم آہنگی",
      "elementLabel": "عناصرِ اربعہ و اثیر",
      "superpowerLabel": "روحانی قوت",
      "shadowLabel": "مخفی کمزوری",
      "kindredLabel": "ہم مزاج روحیں اور تاریخی شخصیات",
      "adviceLabel": "روزمرہ کا کائناتی نکتہ",
      "dimensionsLabel": "شخصیت کے بنیادی ستون",
      "dimEnergy": "سماجی توانائی (رونق)",
      "dimImagination": "تخیل اور دور اندیشی",
      "dimHeart": "ہمدردی اور جذبہ دل",
      "dimSpontaneity": "بے ساختگی اور روانی",
      "dimResilience": "اندرونی سکون اور صبر",
      "btnAccurate": "بالکل درست! (جشن منائیں)",
      "btnGuessAgain": "کیا یہ میں نہیں؟ دوبارہ اندازہ لگائیں",
      "btnShare": "کارڈ شیئر کریں",
      "btnDownload": "کارڈ ڈاؤن لوڈ کریں",
      "btnCopy": "تفصیلات کاپی کریں",
      "copiedToast": "تفصیلات محفوظ کر لی گئیں!",
      "btnRestart": "نیا سفر شروع کریں",
      "runnersUpTitle": "دیگر قریبی اوصاف",
      "soundOn": "آواز: آن",
      "soundOff": "آواز: بند",
      "elementEther": "اثیر / آکاش (Ether)",
      "elementFire": "آگ (Fire)",
      "elementWater": "پانی (Water)",
      "elementAir": "ہوا (Air)",
      "elementEarth": "مٹی (Earth)"
    },
    "questions": {
      "q1": "شادی بیاہ یا بڑی محفلوں میں کیا آپ خود کو انتہائی پرجوش محسوس کرتے ہیں اور لوگوں سے ملنا پسند کرتے ہیں؟",
      "q2": "کیا آپ دن شروع کرنے سے پہلے تفصیلی منصوبہ بندی اور فہرست بنانا پسند کرتے ہیں؟",
      "q3": "دوستوں کے مابین جھگڑا سلجھاتے وقت کیا آپ جذبات کے مقابلے میں حقائق کو ترجیح دیتے ہیں؟",
      "q4": "کیا آپ اکثر مستقبل کے نئے خوابوں اور تخیلات کی دنیا میں گم رہتے ہیں؟",
      "q5": "کیا اچانک کسی پریشانی یا افراتفری کے وقت آپ بالکل پرسکون اور سنجیدہ رہتے ہیں؟",
      "q6": "کیا آپ کسی کے کچھ کہے بغیر ہی اس کے دل کی کیفیت اور درد بھانپ لیتے ہیں؟",
      "q7": "کسی اجتماعی کام میں کیا آپ خود آگے بڑھ کر قیادت سنبھال لیتے ہیں؟",
      "q8": "کیا نئے پکوان چکھنا اور انجانے راستوں پر نکلنا آپ کو پسند ہے؟",
      "q9": "کیا روزمرہ کا طے شدہ معمول آپ کو سکون اور اطمینان بخشتا ہے؟",
      "q10": "کیا کسی پریشان حال دوست کے لیے آپ اپنے ضروری کام فورا چھوڑ سکتے ہیں؟",
      "q11": "کیا آپ کائنات کے اسرار اور زندگی کے مقصد پر گہرائی سے غور کرتے ہیں؟",
      "q12": "کیا آپ سچ کو بلا جھجھک منہ پر کہہ دینا بہتر سمجھتے ہیں خواہ وہ کڑوا ہو؟",
      "q13": "کیا جیتنے کا شدید جذبہ آپ کے اندر ایک نئی آگ اور ولولہ بھر دیتا ہے؟",
      "q14": "کیا پرانی روایات سے ہٹ کر نئے راستے تراشنا آپ کو پسند ہے؟",
      "q15": "کیا آپ باریک بینی سے دوسروں کی نظر سے اوجھل خامیاں فورا پکڑ لیتے ہیں؟",
      "q16": "کیا پرہجوم دن کے بعد آپ کو تنہائی اور خاموشی میں ہی حقیقی سکون ملتا ہے؟",
      "q17": "کیا آپ اعداد و شمار سے زیادہ اپنے دل کی آواز اور وجدان پر بھروسہ کرتے ہیں؟",
      "q18": "کیا آپ محفل میں ہنسی مذاق اور مسکراہٹیں بکھیرنے والے فرد ہیں؟",
      "q19": "کیا لوگ مشکل وقت میں آپ کو ایک ناقابل تسخیر چٹان اور سہارا سمجھتے ہیں؟",
      "q20": "کیا آپ ناراض افراد کو منا کر صلح کرانے کا فن بخوبی جانتے ہیں؟"
    },
    "archetypes": {
      "visionary": {
        "title": "The Cosmic Visionary",
        "description": "Like a brilliant supernova illuminating uncharted galaxies, you see breathtaking possibilities where others only see limits. Your mind lives ten steps ahead in the future, inspiring everyone around you with boundless imagination.",
        "superpower": "Transforming abstract dreams into revolutionary realities.",
        "shadow": "Restlessness with mundane day-to-day routines.",
        "advice": "Ground your celestial visions in steady daily steps so the world can walk inside your dreams.",
        "traits": [
          "Visionary",
          "Inspiring",
          "Bold",
          "Forward-Thinking"
        ]
      },
      "healer": {
        "title": "The Celestial Empath",
        "description": "Like warm starlight soothing a wounded traveler, your heart carries deep emotional warmth. You feel the joys and heartaches of others as your own, offering unconditional shelter, healing, and genuine understanding.",
        "superpower": "Profound emotional intuition and unspoken heart connection.",
        "shadow": "Absorbing others' sorrows until your own spirit feels heavy.",
        "advice": "Remember to build sacred boundaries; your own inner garden also requires gentle rain.",
        "traits": [
          "Empathetic",
          "Nurturing",
          "Gentle",
          "Heart-Centered"
        ]
      },
      "architect": {
        "title": "The Galactic Architect",
        "description": "You possess the supreme precision of cosmic orbits. Where others see chaos, you see underlying patterns, blueprints, and structures. You build lasting systems, masterplans, and unyielding foundations that stand the test of time.",
        "superpower": "Flawless strategic structure and monumental follow-through.",
        "shadow": "Perfectionism and impatience with disorganized minds.",
        "advice": "Allow a little room for spontaneous magic; the universe itself was born from creative chaos.",
        "traits": [
          "Disciplined",
          "Strategic",
          "Systematic",
          "Reliable"
        ]
      },
      "wanderer": {
        "title": "The Free-Spirited Wanderer",
        "description": "Like a solar wind dancing across open constellations, you refuse to be caged by routine or convention. You are driven by an insatiable curiosity for life, thrill, adventure, and the poetry of the open road.",
        "superpower": "Boundless adaptability and infectious zest for freedom.",
        "shadow": "Resistance to long-term stillness or repetitive commitments.",
        "advice": "True freedom is not just moving across distances, but discovering infinity within the present moment.",
        "traits": [
          "Adventurous",
          "Spontaneous",
          "Free-Spirited",
          "Vibrant"
        ]
      },
      "sage": {
        "title": "The Cosmic Sage",
        "description": "Carrying the ancient quietude of deep space, you observe the world with extraordinary depth. You seek timeless wisdom over fleeting trends, peering beneath the surface of life to uncover fundamental spiritual and intellectual truths.",
        "superpower": "Deep philosophical clarity and penetrating insight.",
        "shadow": "Detachment from everyday emotional warmth.",
        "advice": "Share your profound wisdom with warmth; wisdom shines brightest when it warms cold hearts.",
        "traits": [
          "Wise",
          "Contemplative",
          "Profound",
          "Perceptive"
        ]
      },
      "commander": {
        "title": "The Stellar Commander",
        "description": "Like the central sun around which planets revolve, you possess an unmistakable aura of authority, courage, and purpose. In moments of crisis, heads naturally turn to you for direction, courage, and decisive action.",
        "superpower": "Decisive leadership and the courage to conquer obstacles.",
        "shadow": "Overbearing intensity when others hesitate or slow down.",
        "advice": "True strength lifts others up to stand beside you, rather than following behind you.",
        "traits": [
          "Authoritative",
          "Decisive",
          "Charismatic",
          "Fearless"
        ]
      },
      "strategist": {
        "title": "The Master Strategist",
        "description": "With the piercing intellect of Chanakya, you view life as a grand cosmic chessboard. You analyze motives, calculate probabilities, and navigate complex challenges with cool, methodical, and surgical precision.",
        "superpower": "Foreseeing multiple moves ahead and outsmarting complexity.",
        "shadow": "Overthinking and struggle with trusting gut emotions.",
        "advice": "Not all victories are won on the chessboard; sometimes surrendering to love is the ultimate triumph.",
        "traits": [
          "Analytical",
          "Calculated",
          "Sharp-Witted",
          "Methodical"
        ]
      },
      "guardian": {
        "title": "The Gentle Guardian",
        "description": "You are the quiet guardian shield that preserves family, community, and sacred heritage. Unshakably loyal, you protect those you love with quiet devotion, practical care, and selfless sacrifice.",
        "superpower": "Steadfast loyalty and protective devotion.",
        "shadow": "Struggling to say no and neglecting your own needs.",
        "advice": "Care for yourself with the same tenderness you shower upon those you cherish.",
        "traits": [
          "Loyal",
          "Protective",
          "Selfless",
          "Dependable"
        ]
      },
      "catalyst": {
        "title": "The Electric Catalyst",
        "description": "You are pure lightning in human form—a spark that shatters dull conformity and awakens sluggish spirits. Your bold energy, wit, and fearless defiance ignite revolutions in ideas, art, and society.",
        "superpower": "Igniting immediate transformation and breaking stale barriers.",
        "shadow": "Impulsive rebellion that burns bridges unnecessarily.",
        "advice": "Channel your holy fire with intention so it warms and illuminates rather than scorches.",
        "traits": [
          "Dynamic",
          "Rebellious",
          "Electric",
          "Transformative"
        ]
      },
      "peacemaker": {
        "title": "The Harmonic Peacemaker",
        "description": "Like a gentle stream smoothing sharp stones, you possess the celestial gift of harmony. You bridge bitter divides, soothe wounded egos, and create sanctuary wherever discord threatens to tear people apart.",
        "superpower": "Mastery of diplomacy and emotional reconciliation.",
        "shadow": "Avoiding necessary confrontation to keep superficial calm.",
        "advice": "Authentic peace sometimes requires speaking the truth that shakes the room before it heals it.",
        "traits": [
          "Diplomatic",
          "Harmonious",
          "Calming",
          "Empathetic"
        ]
      },
      "realist": {
        "title": "The Grounded Realist",
        "description": "Firm as the bedrock of mountains, you see the world exactly as it is without illusion or exaggeration. You cut through fluff, deliver real solutions, and maintain calm common sense when everyone else loses their heads.",
        "superpower": "Cool practicality and unshakeable common sense.",
        "shadow": "Skepticism toward poetry, magic, and grand unproven dreams.",
        "advice": "Allow yourself to gaze at the stars occasionally without demanding a practical reason.",
        "traits": [
          "Pragmatic",
          "Unflappable",
          "Honest",
          "Grounded"
        ]
      },
      "alchemist": {
        "title": "The Alchemist of Ideas",
        "description": "Standing at the crossroads of science, mysticism, and high art, you transmute raw curiosity into golden masterpieces. You draw links between completely unrelated realms, inventing new metaphors and paradigms.",
        "superpower": "Effortless creative synthesis and interdisciplinary genius.",
        "shadow": "Getting pulled in too many creative directions simultaneously.",
        "advice": "Bring one magnum opus to complete manifestation before opening the next dimensional portal.",
        "traits": [
          "Inventive",
          "Curious",
          "Multifaceted",
          "Original"
        ]
      },
      "trailblazer": {
        "title": "The Fearless Trailblazer",
        "description": "You are the one who cuts paths through dense jungle where no highway yet exists. Driven by daring bravery, you thrive on challenge, physical endurance, and proving that the impossible can be conquered.",
        "superpower": "Unmatched grit, courage, and pioneering drive.",
        "shadow": "Impatience with fear or hesitation in others.",
        "advice": "The greatest expedition of all is the quiet journey into the chambers of your own inner heart.",
        "traits": [
          "Daring",
          "Resilient",
          "Pioneering",
          "Tenacious"
        ]
      },
      "intuitive": {
        "title": "The Mystic Intuitive",
        "description": "You are deeply attuned to the unseen currents of existence. You perceive subtle signs, energy shifts, and unspoken truths with uncanny accuracy, guided by an inner compass that operates far beyond ordinary logic.",
        "superpower": "Profound sixth-sense and reading subtle human energies.",
        "shadow": "Becoming overwhelmed by crowded or noisy environments.",
        "advice": "Anchor your intuitive flashes with clear articulation so others may understand your vision.",
        "traits": [
          "Intuitive",
          "Mystical",
          "Sensitive",
          "Deep"
        ]
      },
      "joybringer": {
        "title": "The Playful Joybringer",
        "description": "You are a radiant beam of sunshine in human disguise. Your humor, warmth, and buoyant spirit turn mundane days into celebrations, reminding weary souls that life is meant to be savored, laughed through, and enjoyed.",
        "superpower": "Instant mood elevation and unconditional warmth.",
        "shadow": "Masking personal pain behind continuous jokes and smiles.",
        "advice": "Your tears are just as sacred as your laughter; honor your full emotional spectrum.",
        "traits": [
          "Joyful",
          "Playful",
          "Infectious",
          "Warmhearted"
        ]
      },
      "pillar": {
        "title": "The Resilient Pillar",
        "description": "Ancient and noble as the banyan tree, you provide shade, shelter, and enduring strength to all who lean on you. You endure storms without bending, upholding duty, honor, and quiet dignity across all seasons of life.",
        "superpower": "Monumental resilience and unyielding moral integrity.",
        "shadow": "Carrying everyone's burdens silently until physical exhaustion.",
        "advice": "Even the strongest pillars deserve to rest and be supported by those they shelter.",
        "traits": [
          "Steadfast",
          "Noble",
          "Unyielding",
          "Honorable"
        ]
      }
    }
  },
  "kn": {
    "name": "Kannada",
    "nativeName": "ಕನ್ನಡ",
    "script": "Kannada",
    "dir": "ltr",
    "badge": "ಕರ್ನಾಟಕ",
    "ui": {
      "appTitle": "ಆಕಾಶ ಒರಾಕಲ್",
      "appSubtitle": "ವಿಶ್ವ ಮನೋ-ವಾಚಕ ಮತ್ತು ವ್ಯಕ್ತಿತ್ವ ಭವಿಷ್ಯವಾಣಿ",
      "oracleName": "ಆಕಾಶ",
      "selectLanguage": "ಭಾಷೆಯನ್ನು ಆರಿಸಿ",
      "chooseLangHeader": "ನಿಮ್ಮ ಮಾತೃಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      "langSubtitle": "ಭಾರತದ ಪ್ರಮುಖ ಭಾಷೆಗಳಲ್ಲಿ ಈ ದಿವ್ಯ ಅನುಭವವನ್ನು ಪಡೆಯಿರಿ",
      "startButton": "ಒರಾಕಲ್ ಜಾಗೃತಗೊಳಿಸಿ",
      "oracleIntro": "ನಾನು 'ಆಕಾಶ'—ವಿಶ್ವ ಮನೋಜ್ಞಾನಿ. ನನ್ನ ಸರಳ ಪ್ರಶ್ನೆಗಳಿಗೆ ನಿಮ್ಮ ಹೃದಯದಿಂದ ಉತ್ತರಿಸಿ, ನಿಮ್ಮ ಆತ್ಮದ ನೈಜ ಸ್ವರೂಪವನ್ನು ನಿಖರವಾಗಿ ಬಹಿರಂಗಪಡಿಸುತ್ತೇನೆ.",
      "speechStart": "ಮನಸ್ಸನ್ನು ಕೇಂದ್ರೀಕರಿಸಿ... ನಾನು ನಿಮ್ಮ ವಿಶ್ವ ತರಂಗಗಳೊಂದಿಗೆ ಬೆರೆಯುತ್ತಿದ್ದೇನೆ.",
      "speechThinking": "ಕುತೂಹಲಕಾರಿಯಾಗಿದೆ... ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಗಳು ನಕ್ಷತ್ರಗಳಲ್ಲಿ ಅನುರಣಿಸುತ್ತಿವೆ.",
      "speechDeepening": "ನಿಮ್ಮ ವ್ಯಕ್ತಿತ್ವದ ಅಪರೂಪದ ನಕ್ಷತ್ರ ಮಂಡಲವು ಸ್ಪಷ್ಟವಾಗುತ್ತಿದೆ...",
      "speechAlmost": "ರಹಸ್ಯ ಪರದೆ ಸರಿಯುತ್ತಿದೆ... ನೀವು ಯಾರೆಂದು ನನಗೆ ಸ್ಪಷ್ಟವಾಗಿ ಕಾಣುತ್ತಿದೆ!",
      "speechRevealed": "ಸತ್ಯವು ಪ್ರಕಟವಾಗಿದೆ! ನಿಮ್ಮ ವಿಶ್ವ ವ್ಯಕ್ತಿತ್ವವನ್ನು ನೋಡಿ!",
      "speechRefining": "ಅದ್ಭುತ! ನಿಮ್ಮ ಅಂತರಂಗವನ್ನು ಮತ್ತಷ್ಟು ಆಳವಾಗಿ ಶೋಧಿಸೋಣ...",
      "confidenceLabel": "ಒರಾಕಲ್ ಖಚಿತತೆ",
      "confidenceLow": "ತರಂಗ ಹೊಂದಾಣಿಕೆ",
      "confidenceMed": "ಸ್ಪಂದನೆ ಪತ್ತೆ",
      "confidenceHigh": "ಆತ್ಮ ದರ್ಶನ",
      "confidenceFinal": "ದಿವ್ಯ ಸಾಕ್ಷಾತ್ಕಾರ",
      "queryProgress": "ದಿವ್ಯ ಪ್ರಶ್ನೆ",
      "of": "ರಲ್ಲಿ",
      "skip": "ಪ್ರಶ್ನೆ ಬಿಟ್ಟುಬಿಡಿ",
      "prev": "ಹಿಂದಿನದು",
      "optDefinitelyYes": "ಖಂಡಿತ ಹೌದು",
      "optProbablyYes": "ಬಹುಶಃ ಹೌದು",
      "optNeutral": "ಗೊತ್ತಿಲ್ಲ / ತಟಸ್ಥ",
      "optProbablyNo": "ಬಹುಶಃ ಇಲ್ಲ",
      "optDefinitelyNo": "ಖಂಡಿತ ಇಲ್ಲ",
      "resultsTitle": "ಒರಾಕಲ್ ನುಡಿ",
      "matchResonance": "ವಿಶ್ವ ಅನುರಣನ",
      "elementLabel": "ಪಂಚಭೂತಗಳು",
      "superpowerLabel": "ದಿವ್ಯ ಮಹಾಶಕ್ತಿ",
      "shadowLabel": "ದೌರ್ಬಲ್ಯ / ಅಂಧಬಿಂದು",
      "kindredLabel": "ಸಮಾನ ಮನಸ್ಕ ಮಹನೀಯರು",
      "adviceLabel": "ದೈನಂದಿನ ಜೀವನ ಸೂತ್ರ",
      "dimensionsLabel": "ವ್ಯಕ್ತಿತ್ವದ ಪ್ರಮುಖ ಆಯಾಮಗಳು",
      "dimEnergy": "ಸಾಮಾಜಿಕ ಚೈತನ್ಯ (ಕಾಂತಿ)",
      "dimImagination": "ಕಲ್ಪನಾಶಕ್ತಿ ಮತ್ತು ದೂರದೃಷ್ಟಿ",
      "dimHeart": "ಕರುಣೆ ಮತ್ತು ಹೃದಯಸ್ಪಂದನ",
      "dimSpontaneity": "ಸಹಜತೆ ಮತ್ತು ಮುಕ್ತತೆ",
      "dimResilience": "ಆಂತರಿಕ ಶಾಂತಿ ಮತ್ತು ತಾಳ್ಮೆ",
      "btnAccurate": "ಅತ್ಯಂತ ನಿಖರ! (ಸಂಭ್ರಮಿಸಿ)",
      "btnGuessAgain": "ಇದು ನಾನಲ್ಲವೇ? ಮತ್ತೆ ಊಹಿಸಿ",
      "btnShare": "ಕಾರ್ಡ್ ಹಂಚಿಕೊಳ್ಳಿ",
      "btnDownload": "ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
      "btnCopy": "ವಿವರಗಳನ್ನು ನಕಲಿಸಿ",
      "copiedToast": "ವಿವರಗಳನ್ನು ನಕಲಿಸಲಾಗಿದೆ!",
      "btnRestart": "ಹೊಸ ಪ್ರಯಾಣ ಆರಂಭಿಸಿ",
      "runnersUpTitle": "ಇತರ ನಿಕಟ ವ್ಯಕ್ತಿತ್ವಗಳು",
      "soundOn": "ಧ್ವನಿ: ಆನ್",
      "soundOff": "ಧ್ವನಿ: ಆಫ್",
      "elementEther": "ಆಕಾಶ (Ether)",
      "elementFire": "ಅಗ್ನಿ (Fire)",
      "elementWater": "ಜಲ (Water)",
      "elementAir": "ವಾಯು (Air)",
      "elementEarth": "ಭೂಮಿ (Earth)"
    },
    "questions": {
      "q1": "ದೊಡ್ಡ ಸಮಾರಂಭಗಳು, ಮದುವೆ ಅಥವಾ ಹಬ್ಬಗಳಲ್ಲಿ ನೀವು ಹೆಚ್ಚು ಉತ್ಸಾಹದಿಂದ ಅನೇಕರೊಂದಿಗೆ ಬೆರೆಯಲು ಇಷ್ಟಪಡುತ್ತೀರಾ?",
      "q2": "ದಿನವನ್ನು ಪ್ರಾರಂಭಿಸುವ ಮುನ್ನ ಎಲ್ಲವನ್ನೂ ವಿವರವಾಗಿ ಪಟ್ಟಿ ಮಾಡಿ ಯೋಜಿಸುವುದು ನಿಮಗೆ ಇಷ್ಟವೇ?",
      "q3": "ಸ್ನೇಹಿತರ ನಡುವಿನ ಜಗಳವನ್ನು ಬಗೆಹರಿಸುವಾಗ ಭಾವನೆಗಳಿಗಿಂತ ಸತ್ಯ ಮತ್ತು ವಾಸ್ತವಕ್ಕೆ ಹೆಚ್ಚು ಪ್ರಾಮುಖ್ಯತೆ ನೀಡುತ್ತೀರಾ?",
      "q4": "ನೀವು ಆಗಾಗ್ಗೆ ಹೊಸ ಕಲ್ಪನೆಗಳು ಮತ್ತು ಸೃಜನಶೀಲ ಯೋಚನೆಗಳಲ್ಲಿ ಮುಳುಗಿರುತ್ತೀರಾ?",
      "q5": "ಹಠಾತ್ ಸಂಕಷ್ಟ ಅಥವಾ ಗೊಂದಲ ಎದುರಾದಾಗ ನೀವು ಸಂಪೂರ್ಣವಾಗಿ ಶಾಂತ ಮತ್ತು ಸ್ಥಿರವಾಗಿರುತ್ತೀರಾ?",
      "q6": "ಯಾರೂ ಹೇಳದಿದ್ದರೂ ಅವರ ಮನಸ್ಸಿನ ನೋವನ್ನು ನೀವು ತಕ್ಷಣ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬಲ್ಲಿರಾ?",
      "q7": "ಯಾವುದೇ ಗುಂಪಿನ ಕೆಲಸದಲ್ಲಿ ನೀವೇ ಮುಂದೆ ನಿಂತು ಜವಾಬ್ದಾರಿ ವಹಿಸಿಕೊಳ್ಳುತ್ತೀರಾ?",
      "q8": "ಹೊಸ ರುಚಿಗಳನ್ನು ಸವಿಯುವುದು ಮತ್ತು ಅಪರಿಚಿತ ಸ್ಥಳಗಳನ್ನು ಅನ್ವೇಷಿಸುವುದು ನಿಮಗೆ ಇಷ್ಟವೇ?",
      "q9": "ನಿತ್ಯದ ಕ್ರಮಬದ್ಧ ದಿನಚರಿ ಮತ್ತು ಅಭ್ಯಾಸಗಳು ನಿಮಗೆ ನೆಮ್ಮದಿ ನೀಡುತ್ತವೆಯೇ?",
      "q10": "ಕಷ್ಟದಲ್ಲಿರುವ ಸ್ನೇಹಿತನಿಗೆ ನೆರವಾಗಲು ನಿಮ್ಮ ತುರ್ತು ಕೆಲಸಗಳನ್ನೂ ಬದಿಗಿಡಬಲ್ಲಿರಾ?",
      "q11": "ನೀವು ತಡರಾತ್ರಿಯವರೆಗೆ ವಿಶ್ವದ ರಹಸ್ಯಗಳು ಮತ್ತು ಬದುಕಿನ ಅರ್ಥದ ಬಗ್ಗೆ ಆಳವಾಗಿ ಯೋಚಿಸುತ್ತೀರಾ?",
      "q12": "ಸತ್ಯವು ಕಹಿಯಾಗಿದ್ದರೂ ನೇರವಾಗಿ ಹೇಳುವುದು ಒಳ್ಳೆಯದು ಎಂದು ಭಾವಿಸುತ್ತೀರಾ?",
      "q13": "ಗೆಲ್ಲಲೇಬೇಕೆಂಬ ತೀವ್ರ ಹಂಬಲವು ನಿಮ್ಮಲ್ಲಿ ಅಪಾರ ಉತ್ಸಾಹವನ್ನು ತುಂಬುತ್ತದೆಯೇ?",
      "q14": "ಹಳೆಯ ನಿಯಮಗಳನ್ನು ಪ್ರಶ್ನಿಸಿ ಹೊಸ ದಾರಿಯನ್ನು ರೂಪಿಸುವುದು ನಿಮಗೆ ಇಷ್ಟವೇ?",
      "q15": "ಇತರರು ಗಮನಿಸದ ಸಣ್ಣ ತಪ್ಪುಗಳನ್ನು ನೀವು ಸೂಕ್ಷ್ಮವಾಗಿ ತಕ್ಷಣ ಗುರುತಿಸುತ್ತೀರಾ?",
      "q16": "ದಿನದ ದಣಿವನ್ನು ನೀಗಿಸಲು ಸಂಪೂರ್ಣ ಶಾಂತ ಏಕಾಂತವೇ ನಿಮಗೆ ಶಕ್ತಿ ನೀಡುತ್ತದೆಯೇ?",
      "q17": "ಅಂಕಿಅಂಶಗಳಿಗಿಂತ ನಿಮ್ಮ ಅಂತರಾತ್ಮದ ಧ್ವನಿಯನ್ನು ನೀವು ಹೆಚ್ಚು ನಂಬುತ್ತೀರಾ?",
      "q18": "ಹಾಸ್ಯ ಚಟಾಕಿಗಳಿಂದ ಎಲ್ಲರನ್ನೂ ನಗಿಸಿ ಲವಲವಿಕೆ ತುಂಬುವ ವ್ಯಕ್ತಿ ನೀವೇನಾ?",
      "q19": "ಸಂಕಷ್ಟದ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮವರು ನಿಮ್ಮನ್ನು ಅಚಲ ಬೆಂಬಲವೆಂದು ನಂಬುತ್ತಾರೆಯೇ?",
      "q20": "ಕೋಪಗೊಂಡವರನ್ನು ಸಮಾಧಾನಪಡಿಸಿ ಶಾಂತಿ ಮೂಡಿಸುವ ಕಲೆ ನಿಮಗೆ ಸಿದ್ಧಿಸಿದೆಯೇ?"
    },
    "archetypes": {
      "visionary": {
        "title": "The Cosmic Visionary",
        "description": "Like a brilliant supernova illuminating uncharted galaxies, you see breathtaking possibilities where others only see limits. Your mind lives ten steps ahead in the future, inspiring everyone around you with boundless imagination.",
        "superpower": "Transforming abstract dreams into revolutionary realities.",
        "shadow": "Restlessness with mundane day-to-day routines.",
        "advice": "Ground your celestial visions in steady daily steps so the world can walk inside your dreams.",
        "traits": [
          "Visionary",
          "Inspiring",
          "Bold",
          "Forward-Thinking"
        ]
      },
      "healer": {
        "title": "The Celestial Empath",
        "description": "Like warm starlight soothing a wounded traveler, your heart carries deep emotional warmth. You feel the joys and heartaches of others as your own, offering unconditional shelter, healing, and genuine understanding.",
        "superpower": "Profound emotional intuition and unspoken heart connection.",
        "shadow": "Absorbing others' sorrows until your own spirit feels heavy.",
        "advice": "Remember to build sacred boundaries; your own inner garden also requires gentle rain.",
        "traits": [
          "Empathetic",
          "Nurturing",
          "Gentle",
          "Heart-Centered"
        ]
      },
      "architect": {
        "title": "The Galactic Architect",
        "description": "You possess the supreme precision of cosmic orbits. Where others see chaos, you see underlying patterns, blueprints, and structures. You build lasting systems, masterplans, and unyielding foundations that stand the test of time.",
        "superpower": "Flawless strategic structure and monumental follow-through.",
        "shadow": "Perfectionism and impatience with disorganized minds.",
        "advice": "Allow a little room for spontaneous magic; the universe itself was born from creative chaos.",
        "traits": [
          "Disciplined",
          "Strategic",
          "Systematic",
          "Reliable"
        ]
      },
      "wanderer": {
        "title": "The Free-Spirited Wanderer",
        "description": "Like a solar wind dancing across open constellations, you refuse to be caged by routine or convention. You are driven by an insatiable curiosity for life, thrill, adventure, and the poetry of the open road.",
        "superpower": "Boundless adaptability and infectious zest for freedom.",
        "shadow": "Resistance to long-term stillness or repetitive commitments.",
        "advice": "True freedom is not just moving across distances, but discovering infinity within the present moment.",
        "traits": [
          "Adventurous",
          "Spontaneous",
          "Free-Spirited",
          "Vibrant"
        ]
      },
      "sage": {
        "title": "The Cosmic Sage",
        "description": "Carrying the ancient quietude of deep space, you observe the world with extraordinary depth. You seek timeless wisdom over fleeting trends, peering beneath the surface of life to uncover fundamental spiritual and intellectual truths.",
        "superpower": "Deep philosophical clarity and penetrating insight.",
        "shadow": "Detachment from everyday emotional warmth.",
        "advice": "Share your profound wisdom with warmth; wisdom shines brightest when it warms cold hearts.",
        "traits": [
          "Wise",
          "Contemplative",
          "Profound",
          "Perceptive"
        ]
      },
      "commander": {
        "title": "The Stellar Commander",
        "description": "Like the central sun around which planets revolve, you possess an unmistakable aura of authority, courage, and purpose. In moments of crisis, heads naturally turn to you for direction, courage, and decisive action.",
        "superpower": "Decisive leadership and the courage to conquer obstacles.",
        "shadow": "Overbearing intensity when others hesitate or slow down.",
        "advice": "True strength lifts others up to stand beside you, rather than following behind you.",
        "traits": [
          "Authoritative",
          "Decisive",
          "Charismatic",
          "Fearless"
        ]
      },
      "strategist": {
        "title": "The Master Strategist",
        "description": "With the piercing intellect of Chanakya, you view life as a grand cosmic chessboard. You analyze motives, calculate probabilities, and navigate complex challenges with cool, methodical, and surgical precision.",
        "superpower": "Foreseeing multiple moves ahead and outsmarting complexity.",
        "shadow": "Overthinking and struggle with trusting gut emotions.",
        "advice": "Not all victories are won on the chessboard; sometimes surrendering to love is the ultimate triumph.",
        "traits": [
          "Analytical",
          "Calculated",
          "Sharp-Witted",
          "Methodical"
        ]
      },
      "guardian": {
        "title": "The Gentle Guardian",
        "description": "You are the quiet guardian shield that preserves family, community, and sacred heritage. Unshakably loyal, you protect those you love with quiet devotion, practical care, and selfless sacrifice.",
        "superpower": "Steadfast loyalty and protective devotion.",
        "shadow": "Struggling to say no and neglecting your own needs.",
        "advice": "Care for yourself with the same tenderness you shower upon those you cherish.",
        "traits": [
          "Loyal",
          "Protective",
          "Selfless",
          "Dependable"
        ]
      },
      "catalyst": {
        "title": "The Electric Catalyst",
        "description": "You are pure lightning in human form—a spark that shatters dull conformity and awakens sluggish spirits. Your bold energy, wit, and fearless defiance ignite revolutions in ideas, art, and society.",
        "superpower": "Igniting immediate transformation and breaking stale barriers.",
        "shadow": "Impulsive rebellion that burns bridges unnecessarily.",
        "advice": "Channel your holy fire with intention so it warms and illuminates rather than scorches.",
        "traits": [
          "Dynamic",
          "Rebellious",
          "Electric",
          "Transformative"
        ]
      },
      "peacemaker": {
        "title": "The Harmonic Peacemaker",
        "description": "Like a gentle stream smoothing sharp stones, you possess the celestial gift of harmony. You bridge bitter divides, soothe wounded egos, and create sanctuary wherever discord threatens to tear people apart.",
        "superpower": "Mastery of diplomacy and emotional reconciliation.",
        "shadow": "Avoiding necessary confrontation to keep superficial calm.",
        "advice": "Authentic peace sometimes requires speaking the truth that shakes the room before it heals it.",
        "traits": [
          "Diplomatic",
          "Harmonious",
          "Calming",
          "Empathetic"
        ]
      },
      "realist": {
        "title": "The Grounded Realist",
        "description": "Firm as the bedrock of mountains, you see the world exactly as it is without illusion or exaggeration. You cut through fluff, deliver real solutions, and maintain calm common sense when everyone else loses their heads.",
        "superpower": "Cool practicality and unshakeable common sense.",
        "shadow": "Skepticism toward poetry, magic, and grand unproven dreams.",
        "advice": "Allow yourself to gaze at the stars occasionally without demanding a practical reason.",
        "traits": [
          "Pragmatic",
          "Unflappable",
          "Honest",
          "Grounded"
        ]
      },
      "alchemist": {
        "title": "The Alchemist of Ideas",
        "description": "Standing at the crossroads of science, mysticism, and high art, you transmute raw curiosity into golden masterpieces. You draw links between completely unrelated realms, inventing new metaphors and paradigms.",
        "superpower": "Effortless creative synthesis and interdisciplinary genius.",
        "shadow": "Getting pulled in too many creative directions simultaneously.",
        "advice": "Bring one magnum opus to complete manifestation before opening the next dimensional portal.",
        "traits": [
          "Inventive",
          "Curious",
          "Multifaceted",
          "Original"
        ]
      },
      "trailblazer": {
        "title": "The Fearless Trailblazer",
        "description": "You are the one who cuts paths through dense jungle where no highway yet exists. Driven by daring bravery, you thrive on challenge, physical endurance, and proving that the impossible can be conquered.",
        "superpower": "Unmatched grit, courage, and pioneering drive.",
        "shadow": "Impatience with fear or hesitation in others.",
        "advice": "The greatest expedition of all is the quiet journey into the chambers of your own inner heart.",
        "traits": [
          "Daring",
          "Resilient",
          "Pioneering",
          "Tenacious"
        ]
      },
      "intuitive": {
        "title": "The Mystic Intuitive",
        "description": "You are deeply attuned to the unseen currents of existence. You perceive subtle signs, energy shifts, and unspoken truths with uncanny accuracy, guided by an inner compass that operates far beyond ordinary logic.",
        "superpower": "Profound sixth-sense and reading subtle human energies.",
        "shadow": "Becoming overwhelmed by crowded or noisy environments.",
        "advice": "Anchor your intuitive flashes with clear articulation so others may understand your vision.",
        "traits": [
          "Intuitive",
          "Mystical",
          "Sensitive",
          "Deep"
        ]
      },
      "joybringer": {
        "title": "The Playful Joybringer",
        "description": "You are a radiant beam of sunshine in human disguise. Your humor, warmth, and buoyant spirit turn mundane days into celebrations, reminding weary souls that life is meant to be savored, laughed through, and enjoyed.",
        "superpower": "Instant mood elevation and unconditional warmth.",
        "shadow": "Masking personal pain behind continuous jokes and smiles.",
        "advice": "Your tears are just as sacred as your laughter; honor your full emotional spectrum.",
        "traits": [
          "Joyful",
          "Playful",
          "Infectious",
          "Warmhearted"
        ]
      },
      "pillar": {
        "title": "The Resilient Pillar",
        "description": "Ancient and noble as the banyan tree, you provide shade, shelter, and enduring strength to all who lean on you. You endure storms without bending, upholding duty, honor, and quiet dignity across all seasons of life.",
        "superpower": "Monumental resilience and unyielding moral integrity.",
        "shadow": "Carrying everyone's burdens silently until physical exhaustion.",
        "advice": "Even the strongest pillars deserve to rest and be supported by those they shelter.",
        "traits": [
          "Steadfast",
          "Noble",
          "Unyielding",
          "Honorable"
        ]
      }
    }
  },
  "or": {
    "name": "Odia",
    "nativeName": "ଓଡ଼ିଆ",
    "script": "Odia",
    "dir": "ltr",
    "badge": "ଓଡ଼ିଶା",
    "ui": {
      "appTitle": "ଆକାଶ ଓରାକଲ",
      "appSubtitle": "ମହାଜାଗତିକ ମନ-ପାଠକ ଏବଂ ବ୍ୟକ୍ତିତ୍ୱ ଭବିଷ୍ୟବକ୍ତା",
      "oracleName": "ଆକାଶ",
      "selectLanguage": "ଭାଷା ବାଛନ୍ତୁ",
      "chooseLangHeader": "ଆପଣଙ୍କ ମାତୃଭାଷା ଚୟନ କରନ୍ତୁ",
      "langSubtitle": "ଭାରତର ପ୍ରମୁଖ ଭାଷାରେ ଏହି ଦିବ୍ୟ ଅନୁଭୂତି ଉପଭୋଗ କରନ୍ତୁ",
      "startButton": "ଓରାକଲ୍ ଜାଗ୍ରତ କରନ୍ତୁ",
      "oracleIntro": "ମୁଁ 'ଆକାଶ'—ମହାଜାଗତିକ ଅନ୍ତର୍ଯ୍ୟାମୀ। ମୋର ସରଳ ପ୍ରଶ୍ନଗୁଡ଼ିକର ସଚ୍ଚୋଟ ଉତ୍ତର ଦିଅନ୍ତୁ, ମୁଁ ଆପଣଙ୍କ ଆତ୍ମାର ପ୍ରକୃତ ସ୍ୱରୂପ ସଠିକ୍ ଭାବେ ଉନ୍ମୋଚିତ କରିବି।",
      "speechStart": "ଧ୍ୟାନ କେନ୍ଦ୍ରିତ କରନ୍ତୁ... ମୁଁ ଆପଣଙ୍କ ଶକ୍ତି ସହିତ ଯୋଡ଼ି ହେଉଛି।",
      "speechThinking": "ଚମତ୍କାର... ଆପଣଙ୍କ ଉତ୍ତର ତାରାମାନଙ୍କ ମଧ୍ୟରେ ପ୍ରତିଧ୍ୱନିତ ହେଉଛି।",
      "speechDeepening": "ଆପଣଙ୍କ ଅନ୍ତରର ଏକ ଅନନ୍ୟ ନକ୍ଷତ୍ରମଣ୍ଡଳ ସ୍ପଷ୍ଟ ହେଉଛି...",
      "speechAlmost": "ରହସ୍ୟର ପରଦା ହଟୁଛି... ଆପଣ କିଏ ତାହା ମୁଁ ସ୍ପଷ୍ଟ ଦେଖିପାରୁଛି!",
      "speechRevealed": "ସତ୍ୟ ପ୍ରକାଶ ପାଇଛି! ଆପଣଙ୍କ ମହାଜାଗତିକ ରୂପ ଦର୍ଶନ କରନ୍ତୁ!",
      "speechRefining": "ଅଦ୍ଭୁତ! ଆସନ୍ତୁ ଆପଣଙ୍କ ଅନ୍ତରାତ୍ମାର ଆହୁରି ଗଭୀରକୁ ଯିବା...",
      "confidenceLabel": "ଓରାକଲର ନିଶ୍ଚିତତା",
      "confidenceLow": "ତରଙ୍ଗ ସମନ୍ୱୟ",
      "confidenceMed": "ସ୍ପନ୍ଦନ ଚିହ୍ନଟ",
      "confidenceHigh": "ଆତ୍ମା ଦର୍ଶନ",
      "confidenceFinal": "ପରମ ଜ୍ଞାନ",
      "queryProgress": "ଦିବ୍ୟ ପ୍ରଶ୍ନ",
      "of": "ମଧ୍ୟରୁ",
      "skip": "ପ୍ରଶ୍ନ ଛାଡ଼ନ୍ତୁ",
      "prev": "ପୂର୍ବବର୍ତ୍ତୀ",
      "optDefinitelyYes": "ହଁ, ନିଶ୍ଚିତ ଭାବରେ",
      "optProbablyYes": "ଅଧିକାଂଶ ଭାବେ ହଁ",
      "optNeutral": "ଜଣାନାହିଁ / ନିରପେକ୍ଷ",
      "optProbablyNo": "ଅଧିକାଂଶ ଭାବେ ନାହିଁ",
      "optDefinitelyNo": "ମୋଟେ ନୁହେଁ",
      "resultsTitle": "ଓରାକଲର ଦିବ୍ୟବାଣୀ",
      "matchResonance": "ମହାଜାଗତିକ ଅନୁନାଦ",
      "elementLabel": "ପଞ୍ଚଭୂତ",
      "superpowerLabel": "ଦିବ୍ୟ ମହାଶକ୍ତି",
      "shadowLabel": "ଅନ୍ଧବିନ୍ଦୁ / ଦୁର୍ବଳତା",
      "kindredLabel": "ସମାନ ଆତ୍ମା ଏବଂ ଐତିହାସିକ ବ୍ୟକ୍ତିତ୍ୱ",
      "adviceLabel": "ଦୈନନ୍ଦିନ ଜୀବନ ସୂତ୍ର",
      "dimensionsLabel": "ବ୍ୟକ୍ତିତ୍ୱର ମୂଳ ସ୍ତମ୍ଭ",
      "dimEnergy": "ସାମାଜିକ ଉତ୍ସାହ (ଦୀପ୍ତି)",
      "dimImagination": "କଳ୍ପନାଶକ୍ତି ଓ ଦୂରଦୃଷ୍ଟି",
      "dimHeart": "ହୃଦୟର କରୁଣା ଓ ଭାବନା",
      "dimSpontaneity": "ସ୍ୱତଃସ୍ଫୂର୍ତ୍ତ ପ୍ରବାହ",
      "dimResilience": "ଅନ୍ତରର ଶାନ୍ତି ଓ ଧୈର୍ଯ୍ୟ",
      "btnAccurate": "ସମ୍ପୂର୍ଣ୍ଣ ସଠିକ୍! (ଆନନ୍ଦ ମନାନ୍ତୁ)",
      "btnGuessAgain": "ଏହା ମୁଁ ନୁହେଁ? ପୁଣି ଚିହ୍ନଟ କରନ୍ତୁ",
      "btnShare": "ଫଳାଫଳ ସେୟାର କରନ୍ତୁ",
      "btnDownload": "କାର୍ଡ ଡାଉନଲୋଡ୍ କରନ୍ତୁ",
      "btnCopy": "ବିବରଣୀ କପି କରନ୍ତୁ",
      "copiedToast": "ବିବରଣୀ କପି ହୋଇଗଲା!",
      "btnRestart": "ନୂତନ ଯାତ୍ରା ଆରମ୍ଭ କରନ୍ତୁ",
      "runnersUpTitle": "ଅନ୍ୟାନ୍ୟ ନିକଟତର ସ୍ୱରୂପ",
      "soundOn": "ଶବ୍ଦ: ଅନ୍",
      "soundOff": "ଶବ୍ଦ: ଅଫ୍",
      "elementEther": "ଆକାଶ (Ether)",
      "elementFire": "ଅଗ୍ନି (Fire)",
      "elementWater": "ଜଳ (Water)",
      "elementAir": "ବାୟୁ (Air)",
      "elementEarth": "ପୃଥିବୀ (Earth)"
    },
    "questions": {
      "q1": "ବଡ଼ ଉତ୍ସବ, ବିବାହ କିମ୍ବା ମେଳାରେ ଆପଣ ଖୁବ୍ ଉତ୍ସାହିତ ଅନୁଭବ କରନ୍ତି ଏବଂ ଅନେକ ଲୋକଙ୍କ ସହ ମିଶିବାକୁ ଭଲପାଆନ୍ତି କି?",
      "q2": "ଦିନ ଆରମ୍ଭ କରିବା ପୂର୍ବରୁ ସବୁ କାମର ଯୋଜନା ଓ ତାଲିକା ପ୍ରସ୍ତୁତ କରିବାକୁ ପସନ୍ଦ କରନ୍ତି କି?",
      "q3": "ସାଙ୍ଗମାନଙ୍କ ମଧ୍ୟରେ ବିବାଦ ସମାଧାନ ବେଳେ ଭାବପ୍ରବଣତା ଅପେକ୍ଷା ସତ୍ୟ ଓ ତଥ୍ୟକୁ ପ୍ରାଥମିକତା ଦିଅନ୍ତି କି?",
      "q4": "ଆପଣ ପ୍ରାୟତଃ ନୂତନ କଳ୍ପନା ଓ ସୃଜନଶୀଳ ଚିନ୍ତାଧାରାରେ ହଜିଯାଆନ୍ତି କି?",
      "q5": "ହଠାତ୍ କୌଣସି ବିପଦ ଆସିଲେ ଆପଣ ସମ୍ପୂର୍ଣ୍ଣ ଶାନ୍ତ ଏବଂ ସ୍ଥିର ରହିପାରନ୍ତି କି?",
      "q6": "କେହି କିଛି ନକହିଲେ ବି ତାଙ୍କ ମନର କଥା ଆପଣ ତୁରନ୍ତ ବୁଝିପାରନ୍ତି କି?",
      "q7": "କୌଣସି କାର୍ଯ୍ୟକ୍ରମରେ ଆପଣ ନିଜେ ଆଗେଇ ଆସି ଦାୟିତ୍ୱ ଗ୍ରହଣ କରନ୍ତି କି?",
      "q8": "ନୂଆ ଖାଦ୍ୟ ଚାଖିବା ଏବଂ ଅଜଣା ଜାଗା ବୁଲିବା ଆପଣଙ୍କୁ ପସନ୍ଦ କି?",
      "q9": "ନିୟମିତ ଦିନଚର୍ଯ୍ୟା ଆପଣଙ୍କୁ ସୁରକ୍ଷିତ ଓ ବ୍ୟବସ୍ଥିତ ଅନୁଭବ କରାଏ କି?",
      "q10": "ବିପଦରେ ଥିବା ବନ୍ଧୁଙ୍କୁ ସାହାଯ୍ୟ କରିବା ପାଇଁ ନିଜର ଜରୁରୀ କାମ ମଧ୍ୟ ଛାଡ଼ିଦେଇ ପାରିବେ କି?",
      "q11": "ଏହି ସୃଷ୍ଟିର ରହସ୍ୟ ଏବଂ ଜୀବନର ଲକ୍ଷ୍ୟ ବିଷୟରେ ଗଭୀର ଭାବରେ ଚିନ୍ତା କରନ୍ତି କି?",
      "q12": "କଟୁ ହେଲେ ମଧ୍ୟ ସତ କଥା ସିଧାସଳଖ କହିଦେବା ଭଲ ବୋଲି ଆପଣ ଭାବନ୍ତି କି?",
      "q13": "ଜିତିବାର ତୀବ୍ର ଇଚ୍ଛା ଆପଣଙ୍କ ଭିତରେ ପ୍ରଚଣ୍ଡ ଉତ୍ସାହ ଭରିଦିଏ କି?",
      "q14": "ପୁରୁଣା ନିୟମକୁ ଭାଙ୍ଗି ନୂଆ ବାଟ ତିଆରି କରିବା ଆପଣଙ୍କୁ ଭଲଲାଗେ କି?",
      "q15": "ଅନ୍ୟମାନେ ଦେଖିପାରୁନଥିବା ଛୋଟ ଛୋଟ ଭୁଲ୍ ଆପଣ ସହଜରେ ଧରିପାରନ୍ତି କି?",
      "q16": "ବ୍ୟସ୍ତବହୁଳ ଦିନ ପରେ ଏକାନ୍ତରେ ଶାନ୍ତ ରହିଲେ ହିଁ ଆପଣଙ୍କୁ ଶାନ୍ତି ମିଳେ କି?",
      "q17": "ଆପଣ କୌଣସି ହିସାବ ଅପେକ୍ଷା ନିଜ ଅନ୍ତରାତ୍ମାର ଡାକ ଉପରେ ଅଧିକ ବିଶ୍ୱାସ କରନ୍ତି କି?",
      "q18": "ଆପଣ ସବୁବେଳେ ହସଖୁସିରେ ସମସ୍ତଙ୍କ ମନ ଭଲ କରିଦିଅନ୍ତି କି?",
      "q19": "କଠିନ ସମୟରେ ଆପଣଙ୍କୁ ସମସ୍ତେ ଏକ ଅଟଳ ସାହାରା ବୋଲି ଭାବନ୍ତି କି?",
      "q20": "ରାଗିଥିବା ଲୋକଙ୍କୁ ଶାନ୍ତ କରି ବୁଝାମଣା କରିବାରେ ଆପଣ ପାରଙ୍ଗମ କି?"
    },
    "archetypes": {
      "visionary": {
        "title": "The Cosmic Visionary",
        "description": "Like a brilliant supernova illuminating uncharted galaxies, you see breathtaking possibilities where others only see limits. Your mind lives ten steps ahead in the future, inspiring everyone around you with boundless imagination.",
        "superpower": "Transforming abstract dreams into revolutionary realities.",
        "shadow": "Restlessness with mundane day-to-day routines.",
        "advice": "Ground your celestial visions in steady daily steps so the world can walk inside your dreams.",
        "traits": [
          "Visionary",
          "Inspiring",
          "Bold",
          "Forward-Thinking"
        ]
      },
      "healer": {
        "title": "The Celestial Empath",
        "description": "Like warm starlight soothing a wounded traveler, your heart carries deep emotional warmth. You feel the joys and heartaches of others as your own, offering unconditional shelter, healing, and genuine understanding.",
        "superpower": "Profound emotional intuition and unspoken heart connection.",
        "shadow": "Absorbing others' sorrows until your own spirit feels heavy.",
        "advice": "Remember to build sacred boundaries; your own inner garden also requires gentle rain.",
        "traits": [
          "Empathetic",
          "Nurturing",
          "Gentle",
          "Heart-Centered"
        ]
      },
      "architect": {
        "title": "The Galactic Architect",
        "description": "You possess the supreme precision of cosmic orbits. Where others see chaos, you see underlying patterns, blueprints, and structures. You build lasting systems, masterplans, and unyielding foundations that stand the test of time.",
        "superpower": "Flawless strategic structure and monumental follow-through.",
        "shadow": "Perfectionism and impatience with disorganized minds.",
        "advice": "Allow a little room for spontaneous magic; the universe itself was born from creative chaos.",
        "traits": [
          "Disciplined",
          "Strategic",
          "Systematic",
          "Reliable"
        ]
      },
      "wanderer": {
        "title": "The Free-Spirited Wanderer",
        "description": "Like a solar wind dancing across open constellations, you refuse to be caged by routine or convention. You are driven by an insatiable curiosity for life, thrill, adventure, and the poetry of the open road.",
        "superpower": "Boundless adaptability and infectious zest for freedom.",
        "shadow": "Resistance to long-term stillness or repetitive commitments.",
        "advice": "True freedom is not just moving across distances, but discovering infinity within the present moment.",
        "traits": [
          "Adventurous",
          "Spontaneous",
          "Free-Spirited",
          "Vibrant"
        ]
      },
      "sage": {
        "title": "The Cosmic Sage",
        "description": "Carrying the ancient quietude of deep space, you observe the world with extraordinary depth. You seek timeless wisdom over fleeting trends, peering beneath the surface of life to uncover fundamental spiritual and intellectual truths.",
        "superpower": "Deep philosophical clarity and penetrating insight.",
        "shadow": "Detachment from everyday emotional warmth.",
        "advice": "Share your profound wisdom with warmth; wisdom shines brightest when it warms cold hearts.",
        "traits": [
          "Wise",
          "Contemplative",
          "Profound",
          "Perceptive"
        ]
      },
      "commander": {
        "title": "The Stellar Commander",
        "description": "Like the central sun around which planets revolve, you possess an unmistakable aura of authority, courage, and purpose. In moments of crisis, heads naturally turn to you for direction, courage, and decisive action.",
        "superpower": "Decisive leadership and the courage to conquer obstacles.",
        "shadow": "Overbearing intensity when others hesitate or slow down.",
        "advice": "True strength lifts others up to stand beside you, rather than following behind you.",
        "traits": [
          "Authoritative",
          "Decisive",
          "Charismatic",
          "Fearless"
        ]
      },
      "strategist": {
        "title": "The Master Strategist",
        "description": "With the piercing intellect of Chanakya, you view life as a grand cosmic chessboard. You analyze motives, calculate probabilities, and navigate complex challenges with cool, methodical, and surgical precision.",
        "superpower": "Foreseeing multiple moves ahead and outsmarting complexity.",
        "shadow": "Overthinking and struggle with trusting gut emotions.",
        "advice": "Not all victories are won on the chessboard; sometimes surrendering to love is the ultimate triumph.",
        "traits": [
          "Analytical",
          "Calculated",
          "Sharp-Witted",
          "Methodical"
        ]
      },
      "guardian": {
        "title": "The Gentle Guardian",
        "description": "You are the quiet guardian shield that preserves family, community, and sacred heritage. Unshakably loyal, you protect those you love with quiet devotion, practical care, and selfless sacrifice.",
        "superpower": "Steadfast loyalty and protective devotion.",
        "shadow": "Struggling to say no and neglecting your own needs.",
        "advice": "Care for yourself with the same tenderness you shower upon those you cherish.",
        "traits": [
          "Loyal",
          "Protective",
          "Selfless",
          "Dependable"
        ]
      },
      "catalyst": {
        "title": "The Electric Catalyst",
        "description": "You are pure lightning in human form—a spark that shatters dull conformity and awakens sluggish spirits. Your bold energy, wit, and fearless defiance ignite revolutions in ideas, art, and society.",
        "superpower": "Igniting immediate transformation and breaking stale barriers.",
        "shadow": "Impulsive rebellion that burns bridges unnecessarily.",
        "advice": "Channel your holy fire with intention so it warms and illuminates rather than scorches.",
        "traits": [
          "Dynamic",
          "Rebellious",
          "Electric",
          "Transformative"
        ]
      },
      "peacemaker": {
        "title": "The Harmonic Peacemaker",
        "description": "Like a gentle stream smoothing sharp stones, you possess the celestial gift of harmony. You bridge bitter divides, soothe wounded egos, and create sanctuary wherever discord threatens to tear people apart.",
        "superpower": "Mastery of diplomacy and emotional reconciliation.",
        "shadow": "Avoiding necessary confrontation to keep superficial calm.",
        "advice": "Authentic peace sometimes requires speaking the truth that shakes the room before it heals it.",
        "traits": [
          "Diplomatic",
          "Harmonious",
          "Calming",
          "Empathetic"
        ]
      },
      "realist": {
        "title": "The Grounded Realist",
        "description": "Firm as the bedrock of mountains, you see the world exactly as it is without illusion or exaggeration. You cut through fluff, deliver real solutions, and maintain calm common sense when everyone else loses their heads.",
        "superpower": "Cool practicality and unshakeable common sense.",
        "shadow": "Skepticism toward poetry, magic, and grand unproven dreams.",
        "advice": "Allow yourself to gaze at the stars occasionally without demanding a practical reason.",
        "traits": [
          "Pragmatic",
          "Unflappable",
          "Honest",
          "Grounded"
        ]
      },
      "alchemist": {
        "title": "The Alchemist of Ideas",
        "description": "Standing at the crossroads of science, mysticism, and high art, you transmute raw curiosity into golden masterpieces. You draw links between completely unrelated realms, inventing new metaphors and paradigms.",
        "superpower": "Effortless creative synthesis and interdisciplinary genius.",
        "shadow": "Getting pulled in too many creative directions simultaneously.",
        "advice": "Bring one magnum opus to complete manifestation before opening the next dimensional portal.",
        "traits": [
          "Inventive",
          "Curious",
          "Multifaceted",
          "Original"
        ]
      },
      "trailblazer": {
        "title": "The Fearless Trailblazer",
        "description": "You are the one who cuts paths through dense jungle where no highway yet exists. Driven by daring bravery, you thrive on challenge, physical endurance, and proving that the impossible can be conquered.",
        "superpower": "Unmatched grit, courage, and pioneering drive.",
        "shadow": "Impatience with fear or hesitation in others.",
        "advice": "The greatest expedition of all is the quiet journey into the chambers of your own inner heart.",
        "traits": [
          "Daring",
          "Resilient",
          "Pioneering",
          "Tenacious"
        ]
      },
      "intuitive": {
        "title": "The Mystic Intuitive",
        "description": "You are deeply attuned to the unseen currents of existence. You perceive subtle signs, energy shifts, and unspoken truths with uncanny accuracy, guided by an inner compass that operates far beyond ordinary logic.",
        "superpower": "Profound sixth-sense and reading subtle human energies.",
        "shadow": "Becoming overwhelmed by crowded or noisy environments.",
        "advice": "Anchor your intuitive flashes with clear articulation so others may understand your vision.",
        "traits": [
          "Intuitive",
          "Mystical",
          "Sensitive",
          "Deep"
        ]
      },
      "joybringer": {
        "title": "The Playful Joybringer",
        "description": "You are a radiant beam of sunshine in human disguise. Your humor, warmth, and buoyant spirit turn mundane days into celebrations, reminding weary souls that life is meant to be savored, laughed through, and enjoyed.",
        "superpower": "Instant mood elevation and unconditional warmth.",
        "shadow": "Masking personal pain behind continuous jokes and smiles.",
        "advice": "Your tears are just as sacred as your laughter; honor your full emotional spectrum.",
        "traits": [
          "Joyful",
          "Playful",
          "Infectious",
          "Warmhearted"
        ]
      },
      "pillar": {
        "title": "The Resilient Pillar",
        "description": "Ancient and noble as the banyan tree, you provide shade, shelter, and enduring strength to all who lean on you. You endure storms without bending, upholding duty, honor, and quiet dignity across all seasons of life.",
        "superpower": "Monumental resilience and unyielding moral integrity.",
        "shadow": "Carrying everyone's burdens silently until physical exhaustion.",
        "advice": "Even the strongest pillars deserve to rest and be supported by those they shelter.",
        "traits": [
          "Steadfast",
          "Noble",
          "Unyielding",
          "Honorable"
        ]
      }
    }
  },
  "ml": {
    "name": "Malayalam",
    "nativeName": "മലയാളം",
    "script": "Malayalam",
    "dir": "ltr",
    "badge": "കേരളം & ലക്ഷദ്വീപ്",
    "ui": {
      "appTitle": "ആകാശ ഒറാക്കിൾ",
      "appSubtitle": "പ്രപഞ്ച മനസ്സ്-വായനക്കാരനും വ്യക്തിത്വ ദർശകനും",
      "oracleName": "ആകാശ",
      "selectLanguage": "ഭാഷ തിരഞ്ഞെടുക്കുക",
      "chooseLangHeader": "നിങ്ങളുടെ മാതൃഭാഷ തിരഞ്ഞെടുക്കുക",
      "langSubtitle": "ഭാരതത്തിലെ പ്രമുഖ ഭാഷകളിൽ ഈ ദിവ്യാനുഭവം ആസ്വദിക്കൂ",
      "startButton": "ഒറാക്കിളിനെ ഉണർത്തുക",
      "oracleIntro": "ഞാൻ 'ആകാശ'—പ്രപഞ്ച അന്തർജ്ഞാനി. എന്റെ ലളിതമായ ചോദ്യങ്ങൾക്ക് ഹൃദയത്തിൽ നിന്ന് മറുപടി നൽകൂ, നിങ്ങളുടെ ആത്മാവിന്റെ യഥാർത്ഥ സ്വരൂപം ഞാൻ കൃത്യമായി വെളിപ്പെടുത്താം.",
      "speechStart": "മനസ്സ് കേന്ദ്രീകരിക്കൂ... ഞാൻ നിങ്ങളുടെ പ്രപഞ്ച തരംഗങ്ങളുമായി ബന്ധപ്പെടുന്നു.",
      "speechThinking": "കൗതുകകരമാണ്... നിങ്ങളുടെ മറുപടികൾ നക്ഷത്രങ്ങളിൽ പ്രതിധ్వനിക്കുന്നു.",
      "speechDeepening": "നിങ്ങളുടെ ഉള്ളിലെ അപൂർവ്വ നക്ഷത്രക്കൂട്ടം തെളിഞ്ഞു വരുന്നു...",
      "speechAlmost": "രഹസ്യത്തിന്റെ മൂടുപടം നീങ്ങുന്നു... നിങ്ങൾ ആരാണെന്ന് എനിക്ക് വ്യക്തമായി കാണാം!",
      "speechRevealed": "സത്യം വെളിപ്പെട്ടിരിക്കുന്നു! നിങ്ങളുടെ പ്രപഞ്ച വ്യക്തിത്വം ദർശിക്കൂ!",
      "speechRefining": "അത്ഭുതം! നിങ്ങളുടെ മനസ്സിന്റെ ആഴങ്ങളിലേക്ക് കൂടുതൽ കടന്നുചെല്ലാം...",
      "confidenceLabel": "ഒറാക്കിളിന്റെ ഉറപ്പ്",
      "confidenceLow": "തരംഗ ചേർച്ച",
      "confidenceMed": "തുടിപ്പുകൾ തിരിച്ചറിയൽ",
      "confidenceHigh": "ആത്മ ദർശനം",
      "confidenceFinal": "പരമ ജ്ഞാനം",
      "queryProgress": "ദിവ്യ ചോദ്യം",
      "of": "ൽ",
      "skip": "ചോദ്യം ഒഴിവാക്കുക",
      "prev": "മുമ്പത്തേത്",
      "optDefinitelyYes": "തീർച്ചയായും അതെ",
      "optProbablyYes": "മിക്കവാറും അതെ",
      "optNeutral": "വ്യക്തമല്ല / നിഷ്പക്ഷം",
      "optProbablyNo": "മിക്കവാറും അല്ല",
      "optDefinitelyNo": "തീർച്ചയായും അല്ല",
      "resultsTitle": "ഒറാക്കിളിന്റെ അരുളപ്പാട്",
      "matchResonance": "പ്രപഞ്ച അനുരണനം",
      "elementLabel": "പഞ്ചഭൂതങ്ങൾ",
      "superpowerLabel": "ദിവ്യ മഹാശക്തി",
      "shadowLabel": "അന്ധബിന്ദു / ബലഹീനത",
      "kindredLabel": "സമാന മനസ്കരായ പ്രതിഭകൾ",
      "adviceLabel": "ദൈനംദിന ജീവിത സൂത്രം",
      "dimensionsLabel": "വ്യക്തിത്വത്തിന്റെ അടിസ്ഥാന ഘടകങ്ങൾ",
      "dimEnergy": "സാമൂഹിക ഊർജ്ജം (പ്രകാശം)",
      "dimImagination": "ഭാവനാശക്തിയും ദീർഘവീക്ഷണവും",
      "dimHeart": "ഹൃദയവികാരങ്ങളും കാരുണ്യവും",
      "dimSpontaneity": "സ്വാഭാവിക ഒഴുക്ക്",
      "dimResilience": "ആന്തരിക ശാന്തിയും ക്ഷമയും",
      "btnAccurate": "തികച്ചും ശരിയാണ്! (ആഘോഷിക്കൂ)",
      "btnGuessAgain": "ഇത് ഞാനല്ലേ? വീണ്ടും പ്രവചിക്കൂ",
      "btnShare": "ഫലം പങ്കിടുക",
      "btnDownload": "കാർഡ് ഡൗൺലോഡ് ചെയ്യുക",
      "btnCopy": "വിവരങ്ങൾ പകർത്തുക",
      "copiedToast": "വിവരങ്ങൾ പകർത്തി!",
      "btnRestart": "പുതിയ യാത്ര തുടങ്ങുക",
      "runnersUpTitle": "മറ്റു സാമ്യമുള്ള വ്യക്തിത്വങ്ങൾ",
      "soundOn": "ശബ്ദം: ഓൺ",
      "soundOff": "ശബ്ദം: ഓഫ്",
      "elementEther": "ആകാശം (Ether)",
      "elementFire": "തീ / അഗ്നി (Fire)",
      "elementWater": "വെള്ളം / ജലം (Water)",
      "elementAir": "വായു (Air)",
      "elementEarth": "ഭൂമി (Earth)"
    },
    "questions": {
      "q1": "വിവാഹങ്ങൾ, ഉത്സവങ്ങൾ എന്നിവയിൽ നിങ്ങൾ അതീവ ഊർജ്ജസ്വലനായി പലരുമായി ഇടപഴകാൻ ഇഷ്ടപ്പെടുന്നുണ്ടോ?",
      "q2": "ദിവസം തുടങ്ങുന്നതിന് മുൻപ് കൃത്യമായ കാര്യവിവരപ്പട്ടിക ഉണ്ടാക്കുന്നത് നിങ്ങൾക്കിഷ്ടമാണോ?",
      "q3": "സുഹൃത്തുക്കൾ തമ്മിലുള്ള തർക്കം പരിഹരിക്കുമ്പോൾ വികാരങ്ങളേക്കാൾ സത്യത്തിനും വസ്തുതകൾക്കും മുൻഗണന നൽകാറുണ്ടോ?",
      "q4": "നിങ്ങൾ പലപ്പോഴും പുതിയ ഭാവനകളിലും ക്രിയാത്മക ചിന്തകളിലും മുഴുകിപ്പോകാറുണ്ടോ?",
      "q5": "പ്രതീക്ഷിക്കാത്ത പ്രതിസന്ധികൾ ഉണ്ടാകുമ്പോൾ നിങ്ങൾ ശാന്തതയും സമചിത്തതയും കാത്തുസൂക്ഷിക്കാറുണ്ടോ?",
      "q6": "മറ്റൊരാൾ പറയാതെ തന്നെ അവരുടെ മനസ്സിലെ വിഷമം പെട്ടെന്ന് തിരിച്ചറിയാൻ നിങ്ങൾക്ക് കഴിയുമോ?",
      "q7": "ഒരു കൂട്ടായ്മയിലോ കുടുംബത്തിലോ സ്വയം മുന്നോട്ട് വന്ന് നേതൃത്വം ഏറ്റെടുക്കാൻ നിങ്ങൾ തയ്യാറാണോ?",
      "q8": "പുതിയ വിഭവങ്ങൾ രുചിക്കുന്നതും അപരിചിത വഴികളിലൂടെ യാത്ര ചെയ്യുന്നതും നിങ്ങൾക്കിഷ്ടമാണോ?",
      "q9": "ചിട്ടയായ ദിനചര്യകൾ നിങ്ങൾക്ക് സുരക്ഷിതത്വബോധം നൽകുന്നുണ്ടോ?",
      "q10": "വിഷമിക്കുന്ന ഒരു സുഹൃത്തിനെ സഹായിക്കാൻ നിങ്ങളുടെ പ്രധാന ജോലികൾ മാറ്റിവെക്കുമോ?",
      "q11": "പ്രപഞ്ച രഹസ്യങ്ങളെക്കുറിച്ചും ജീവിതത്തിന്റെ അർത്ഥത്തെക്കുറിച്ചും നിങ്ങൾ ആഴത്തിൽ ചിന്തിക്കാറുണ്ടോ?",
      "q12": "സത്യം എത്ര കയ്പുള്ളതാണെങ്കിലും അത് നേരെ പറയുന്നത് തന്നെയാണ് നല്ലതെന്ന് കരുതുന്നുണ്ടോ?",
      "q13": "ലക്ഷ്യങ്ങൾ നേടുമ്പോൾ വിജയിക്കണമെന്ന വാശി നിങ്ങളിൽ വലിയ ആവേശം നിറയ്ക്കാറുണ്ടോ?",
      "q14": "പഴയ രീതികളെ ചോദ്യം ചെയ്ത് പുതിയ വഴികൾ കണ്ടെത്താൻ നിങ്ങൾ ഇഷ്ടപ്പെടുന്നുണ്ടോ?",
      "q15": "മറ്റുള്ളവർ ശ്രദ്ധിക്കാതെ പോകുന്ന ചെറിയ തെറ്റുകൾ നിങ്ങൾക്ക് പെട്ടെന്ന് കണ്ടെത്താൻ കഴിയുമോ?",
      "q16": "തിരക്കേറിയ ദിവസത്തിന് ശേഷം ശാന്തമായ ഏകാന്തതയിലാണോ നിങ്ങൾക്ക് കൂടുതൽ ഊർജ്ജം ലഭിക്കുന്നത്?",
      "q17": "കണക്കുകളേക്കാൾ നിങ്ങളുടെ ഉള്ളിലെ മനസ്സാക്ഷിയുടെ ശബ്ദത്തെയാണോ കൂടുതൽ വിശ്വസിക്കുന്നത്?",
      "q18": "തമാശകൾ പറഞ്ഞ് മറ്റുള്ളവരെ ചിരിപ്പിക്കുകയും അന്തരീക്ഷം സജീവമാക്കുകയും ചെയ്യുന്ന ആളാണോ നിങ്ങൾ?",
      "q19": "പ്രതിസന്ധിഘട്ടങ്ങളിൽ മറ്റുള്ളവർ നിങ്ങളെ ഒരു തണൽമരമായി കാണാറുണ്ടോ?",
      "q20": "ദേഷ്യപ്പെടുന്നവരെ അനുനയിപ്പിച്ച് രമ്യതയിലെത്തിക്കാൻ നിങ്ങൾക്ക് പ്രത്യേക കഴിവുണ്ടോ?"
    },
    "archetypes": {
      "visionary": {
        "title": "The Cosmic Visionary",
        "description": "Like a brilliant supernova illuminating uncharted galaxies, you see breathtaking possibilities where others only see limits. Your mind lives ten steps ahead in the future, inspiring everyone around you with boundless imagination.",
        "superpower": "Transforming abstract dreams into revolutionary realities.",
        "shadow": "Restlessness with mundane day-to-day routines.",
        "advice": "Ground your celestial visions in steady daily steps so the world can walk inside your dreams.",
        "traits": [
          "Visionary",
          "Inspiring",
          "Bold",
          "Forward-Thinking"
        ]
      },
      "healer": {
        "title": "The Celestial Empath",
        "description": "Like warm starlight soothing a wounded traveler, your heart carries deep emotional warmth. You feel the joys and heartaches of others as your own, offering unconditional shelter, healing, and genuine understanding.",
        "superpower": "Profound emotional intuition and unspoken heart connection.",
        "shadow": "Absorbing others' sorrows until your own spirit feels heavy.",
        "advice": "Remember to build sacred boundaries; your own inner garden also requires gentle rain.",
        "traits": [
          "Empathetic",
          "Nurturing",
          "Gentle",
          "Heart-Centered"
        ]
      },
      "architect": {
        "title": "The Galactic Architect",
        "description": "You possess the supreme precision of cosmic orbits. Where others see chaos, you see underlying patterns, blueprints, and structures. You build lasting systems, masterplans, and unyielding foundations that stand the test of time.",
        "superpower": "Flawless strategic structure and monumental follow-through.",
        "shadow": "Perfectionism and impatience with disorganized minds.",
        "advice": "Allow a little room for spontaneous magic; the universe itself was born from creative chaos.",
        "traits": [
          "Disciplined",
          "Strategic",
          "Systematic",
          "Reliable"
        ]
      },
      "wanderer": {
        "title": "The Free-Spirited Wanderer",
        "description": "Like a solar wind dancing across open constellations, you refuse to be caged by routine or convention. You are driven by an insatiable curiosity for life, thrill, adventure, and the poetry of the open road.",
        "superpower": "Boundless adaptability and infectious zest for freedom.",
        "shadow": "Resistance to long-term stillness or repetitive commitments.",
        "advice": "True freedom is not just moving across distances, but discovering infinity within the present moment.",
        "traits": [
          "Adventurous",
          "Spontaneous",
          "Free-Spirited",
          "Vibrant"
        ]
      },
      "sage": {
        "title": "The Cosmic Sage",
        "description": "Carrying the ancient quietude of deep space, you observe the world with extraordinary depth. You seek timeless wisdom over fleeting trends, peering beneath the surface of life to uncover fundamental spiritual and intellectual truths.",
        "superpower": "Deep philosophical clarity and penetrating insight.",
        "shadow": "Detachment from everyday emotional warmth.",
        "advice": "Share your profound wisdom with warmth; wisdom shines brightest when it warms cold hearts.",
        "traits": [
          "Wise",
          "Contemplative",
          "Profound",
          "Perceptive"
        ]
      },
      "commander": {
        "title": "The Stellar Commander",
        "description": "Like the central sun around which planets revolve, you possess an unmistakable aura of authority, courage, and purpose. In moments of crisis, heads naturally turn to you for direction, courage, and decisive action.",
        "superpower": "Decisive leadership and the courage to conquer obstacles.",
        "shadow": "Overbearing intensity when others hesitate or slow down.",
        "advice": "True strength lifts others up to stand beside you, rather than following behind you.",
        "traits": [
          "Authoritative",
          "Decisive",
          "Charismatic",
          "Fearless"
        ]
      },
      "strategist": {
        "title": "The Master Strategist",
        "description": "With the piercing intellect of Chanakya, you view life as a grand cosmic chessboard. You analyze motives, calculate probabilities, and navigate complex challenges with cool, methodical, and surgical precision.",
        "superpower": "Foreseeing multiple moves ahead and outsmarting complexity.",
        "shadow": "Overthinking and struggle with trusting gut emotions.",
        "advice": "Not all victories are won on the chessboard; sometimes surrendering to love is the ultimate triumph.",
        "traits": [
          "Analytical",
          "Calculated",
          "Sharp-Witted",
          "Methodical"
        ]
      },
      "guardian": {
        "title": "The Gentle Guardian",
        "description": "You are the quiet guardian shield that preserves family, community, and sacred heritage. Unshakably loyal, you protect those you love with quiet devotion, practical care, and selfless sacrifice.",
        "superpower": "Steadfast loyalty and protective devotion.",
        "shadow": "Struggling to say no and neglecting your own needs.",
        "advice": "Care for yourself with the same tenderness you shower upon those you cherish.",
        "traits": [
          "Loyal",
          "Protective",
          "Selfless",
          "Dependable"
        ]
      },
      "catalyst": {
        "title": "The Electric Catalyst",
        "description": "You are pure lightning in human form—a spark that shatters dull conformity and awakens sluggish spirits. Your bold energy, wit, and fearless defiance ignite revolutions in ideas, art, and society.",
        "superpower": "Igniting immediate transformation and breaking stale barriers.",
        "shadow": "Impulsive rebellion that burns bridges unnecessarily.",
        "advice": "Channel your holy fire with intention so it warms and illuminates rather than scorches.",
        "traits": [
          "Dynamic",
          "Rebellious",
          "Electric",
          "Transformative"
        ]
      },
      "peacemaker": {
        "title": "The Harmonic Peacemaker",
        "description": "Like a gentle stream smoothing sharp stones, you possess the celestial gift of harmony. You bridge bitter divides, soothe wounded egos, and create sanctuary wherever discord threatens to tear people apart.",
        "superpower": "Mastery of diplomacy and emotional reconciliation.",
        "shadow": "Avoiding necessary confrontation to keep superficial calm.",
        "advice": "Authentic peace sometimes requires speaking the truth that shakes the room before it heals it.",
        "traits": [
          "Diplomatic",
          "Harmonious",
          "Calming",
          "Empathetic"
        ]
      },
      "realist": {
        "title": "The Grounded Realist",
        "description": "Firm as the bedrock of mountains, you see the world exactly as it is without illusion or exaggeration. You cut through fluff, deliver real solutions, and maintain calm common sense when everyone else loses their heads.",
        "superpower": "Cool practicality and unshakeable common sense.",
        "shadow": "Skepticism toward poetry, magic, and grand unproven dreams.",
        "advice": "Allow yourself to gaze at the stars occasionally without demanding a practical reason.",
        "traits": [
          "Pragmatic",
          "Unflappable",
          "Honest",
          "Grounded"
        ]
      },
      "alchemist": {
        "title": "The Alchemist of Ideas",
        "description": "Standing at the crossroads of science, mysticism, and high art, you transmute raw curiosity into golden masterpieces. You draw links between completely unrelated realms, inventing new metaphors and paradigms.",
        "superpower": "Effortless creative synthesis and interdisciplinary genius.",
        "shadow": "Getting pulled in too many creative directions simultaneously.",
        "advice": "Bring one magnum opus to complete manifestation before opening the next dimensional portal.",
        "traits": [
          "Inventive",
          "Curious",
          "Multifaceted",
          "Original"
        ]
      },
      "trailblazer": {
        "title": "The Fearless Trailblazer",
        "description": "You are the one who cuts paths through dense jungle where no highway yet exists. Driven by daring bravery, you thrive on challenge, physical endurance, and proving that the impossible can be conquered.",
        "superpower": "Unmatched grit, courage, and pioneering drive.",
        "shadow": "Impatience with fear or hesitation in others.",
        "advice": "The greatest expedition of all is the quiet journey into the chambers of your own inner heart.",
        "traits": [
          "Daring",
          "Resilient",
          "Pioneering",
          "Tenacious"
        ]
      },
      "intuitive": {
        "title": "The Mystic Intuitive",
        "description": "You are deeply attuned to the unseen currents of existence. You perceive subtle signs, energy shifts, and unspoken truths with uncanny accuracy, guided by an inner compass that operates far beyond ordinary logic.",
        "superpower": "Profound sixth-sense and reading subtle human energies.",
        "shadow": "Becoming overwhelmed by crowded or noisy environments.",
        "advice": "Anchor your intuitive flashes with clear articulation so others may understand your vision.",
        "traits": [
          "Intuitive",
          "Mystical",
          "Sensitive",
          "Deep"
        ]
      },
      "joybringer": {
        "title": "The Playful Joybringer",
        "description": "You are a radiant beam of sunshine in human disguise. Your humor, warmth, and buoyant spirit turn mundane days into celebrations, reminding weary souls that life is meant to be savored, laughed through, and enjoyed.",
        "superpower": "Instant mood elevation and unconditional warmth.",
        "shadow": "Masking personal pain behind continuous jokes and smiles.",
        "advice": "Your tears are just as sacred as your laughter; honor your full emotional spectrum.",
        "traits": [
          "Joyful",
          "Playful",
          "Infectious",
          "Warmhearted"
        ]
      },
      "pillar": {
        "title": "The Resilient Pillar",
        "description": "Ancient and noble as the banyan tree, you provide shade, shelter, and enduring strength to all who lean on you. You endure storms without bending, upholding duty, honor, and quiet dignity across all seasons of life.",
        "superpower": "Monumental resilience and unyielding moral integrity.",
        "shadow": "Carrying everyone's burdens silently until physical exhaustion.",
        "advice": "Even the strongest pillars deserve to rest and be supported by those they shelter.",
        "traits": [
          "Steadfast",
          "Noble",
          "Unyielding",
          "Honorable"
        ]
      }
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TRANSLATIONS };
}
