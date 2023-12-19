//Questions and Options array
const quizArray = [
    {
        id: "0",
        question:
            "What does Krishna advise Arjuna to do in the face of challenges and dilemmas?",
        options: [
            "Renounce the world",
            "Fight with determination and without attachment",
            "Seek revenge",
            "Surrender to the enemy",
        ],
        correct: "Fight with determination and without attachment",
    },
    {
        id: "1",
        question:
            "Which class of men is explained in Bhagavad Gita for the self realization?",
        options: [
            "Empirical/ philosophical speculation",
            "Devotional service",
            "None of the above",
            "Both A and B",
        ],
        correct: "Both A and B",
    },
    {
        id: "2",
        question: "Religion without philosophy is _______",
        options: ["Sentiment", "Fanaticism", "Superstition", "Both A and B"],
        correct: "Both A and B",
    },
    {
        id: "3",
        question: "What does the sannyasi means according to Bhagavad Gita",
        options: [
            "One who retire from fruitive activities",
            "One who adopt devotional service without discharging his prescribed duties",
            "One who leaves everything and goes to Himalaya",
            "Both A and B",
        ],
        correct:
            "One who adopt devotional service without discharging his prescribed duties",
    },
    {
        id: "4",
        question: "Why the whole institutions of varna & ashram is designed?",
        options: [
            "To live life happily",
            "To blaspheme the other religions ",
            "To have sensual pleasure",
            "To reach this goal of life",
        ],
        correct: "To reach this goal of life",
    },
    {
        id: "5",
        question: "Why the whole institutions of varna & ashram is designed?",
        options: [
            "To live life happily",
            "To blaspheme the other religions ",
            "To have sensual pleasure",
            "To reach this goal of life",
        ],
        correct: "To reach this goal of life",
    },
    {
        id: "6",
        question:
            " Which is the ultimate path of yoga leading to the realization of God?",
        options: ["Gyan Yoga", "Ashtanga Yoga ", "Karma Yoga", "Bhakti Yoga"],
        correct: "Bhakti Yoga",
    },
    {
        id: "7",
        question: ' What is the meaning of the term " Yajña "? ',
        options: [
            "Ritual sacrifice or offering",
            " Meditation technique ",
            "Vishnu",
            "a & c both",
        ],
        correct: "a & c both",
    },
    {
        id: "8",
        question:
            "According to Vedic scriptures which Yajña is recommended in the age of Kali?",
        options: [
            "Sankirtan Yajña",
            " Gyana Yajña ",
            " Prana Yajña ",
            " Ashwamedha Yajña ",
        ],
        correct: "Sankirtan Yajña",
    },
    {
        id: "9",
        question:
            "Which shloka resembles the correct meaning of “Kṛṣṇa Himself is the beneficiary of all kinds of yajñas”?",
        options: [
            "bhoktāraṁ yajña-tapasām",
            "parasparaṁ bhāvayantaḥ",
            "śreyaḥ param avāpsyatha",
            "te devā bhāvayantu vaḥ",
        ],
        correct: "bhoktāraṁ yajña-tapasām",
    },
    {
        id: "10",
        question: "Who can perform Sankirtan-Yajña?",
        options: ["only saints", "anyone ", "Servent of Lord", "no-one"],
        correct: "anyone ",
    },
    {
        id: "11",
        question:
            " According to the Vedānta There are five causes for the accomplishment of all action. which one of the following action?",
        options: [
            "The place of action [the body]",
            " the performer ",
            " ultimately the Supersoul",
            " all of these",
        ],
        correct: " all of these",
    },
    {
        id: "12",
        question: " The factor which motivate the action is ?",
        options: ["work", "senses ", "knowledge", "doer"],
        correct: "knowledge",
    },
    {
        id: "13",
        question: " one constituents of action is ?",
        options: ["love", "fear ", "passion", "senses"],
        correct: "senses",
    },
    {
        id: "14",
        question:
            " One has to undergo the psychological processes of thinking, feeling and willing, and that is called impetus?",
        options: ["Impetus", "work ", "sense gratification", "anxiety"],
        correct: "Impetus",
    },
    {
        id: "15",
        question:
            " That knowledge by which one undivided spiritual nature is seen in all living entities, though they are divided into innumerable forms, you should understand to be in __________?",
        options: [
            "Mode of Goodness",
            "Mode of Passion ",
            "Mode of Ignorance",
            "Mode of Happiness",
        ],
        correct: "Mode of Goodness",
    },
    {
        id: "16",
        question:
            " That knowledge by which one sees that in every different body there is a different type of living entity you should understand to be in the ________?",
        options: [
            "Mode of Goodness",
            "Mode of Passion ",
            "Mode of Ignorance",
            "Mode of Happiness",
        ],
        correct: "Mode of Passion ",
    },
    {
        id: "17",
        question:
            " Performing actions in terms of the directions of the scriptures is called________?",
        options: ["pravrtti", "paap", "punya", "sneh"],
        correct: "pravrtti",
    },

    {
        id: "18",
        question:
            "What is the significance of remembering the Divine at the time of death?",
        options: [
            "Attaining material wealth",
            "Liberation from the cycle of birth and death",
            "Achieving worldly success",
            "Enhancing one's social status",
        ],
        correct: "Liberation from the cycle of birth and death",
    },
    {
        id: "19",
        question:
            "Arjuna asks Krishna about the ultimate reality. What does Krishna reveal about this ultimate reality?",
        options: [
            "Impermanence of the material world",
            "The eternal nature of the soul",
            "The importance of rituals",
            "The supremacy of a particular deity",
        ],
        correct: "The eternal nature of the soul",
    },
    {
        id: "20",
        question:
            "What are the different paths that lead to liberation, and how do they differ from one another?",
        options: [
            "Jnana Yoga, Bhakti Yoga, Karma Yoga",
            "Renunciation, Asceticism, Meditation",
            "Devotion, Knowledge, Selfless Action",
            "Yoga of Knowledge, Yoga of Devotion, Yoga of Renunciation",
        ],
        correct: "Yoga of Knowledge, Yoga of Devotion, Yoga of Renunciation",
    },
    {
        id: "21",
        question:
            "According to the Bhagavad Gita, what is the role of meditation in attaining spiritual goals?",
        options: [
            "It is unnecessary for spiritual progress",
            "It is the only path to liberation",
            "It complements other paths like knowledge and devotion",
            "It leads to material success",
        ],
        correct: "It complements other paths like knowledge and devotion",
    },
    {
        id: "22",
        question:
            "Krishna talks about the concept of 'Akshara Brahman'. What does it signify, and how does it relate to the eternal soul?",
        options: [
            "Temporary reality; relates to the physical body",
            "Eternal reality; relates to the indestructible soul",
            "Illusionary concept; relates to material possessions",
            "Symbolic representation; relates to social status",
        ],
        correct: "Eternal reality; relates to the indestructible soul",
    },
    {
        id: "23",
        question:
            "Krishna describes the process of departing from the mortal world. What guidance does he provide regarding the state of mind during the final moments of life?",
        options: [
            "Attachment to worldly possessions",
            "Attachment to loved ones",
            "Remembrance of the Divine with devotion",
            "Worry about future incarnations",
        ],
        correct: "Remembrance of the Divine with devotion",
    },
    {
        id: "24",
        question: "What is the nature of the knowledge Krishna imparts to Arjuna?",
        options: [
            "Secret rituals",
            "Mundane wisdom",
            "Transcendental knowledge",
            "Scientific discoveries",
        ],
        correct: "Transcendental knowledge",
    },
    {
        id: "25",
        question:
            "Krishna describes a specific type of devotee. What qualities characterize this devotee?",
        options: [
            "One who performs rituals mechanically",
            "One who worships with sincerity and love",
            "One who renounces the world completely",
            "One who seeks material wealth",
        ],
        correct: "One who worships with sincerity and love",
    },
    {
        id: "26",
        question: "What is the ultimate purpose of all sacrifices and penances?",
        options: [
            "Attainment of material success",
            "Pleasing the gods for personal gain",
            "Liberation and devotion to the Supreme",
            "Accumulating good karma for future lives",
        ],
        correct: "Liberation and devotion to the Supreme",
    },
    {
        id: "27",
        question:
            "Krishna discusses the concept of 'Paramatma'. What does Paramatma refer to?",
        options: [
            "The individual soul",
            "The Supreme Soul",
            "Ritualistic actions",
            "The physical body",
        ],
        correct: "The Supreme Soul",
    },
    {
        id: "28",
        question:
            "Krishna mentions a specific quality that is dear to Him. What is this quality?",
        options: ["Anger", "Humility", "Attachment", "Ignorance"],
        correct: "Humility",
    },
    {
        id: "29",
        question:
            "What is the significance of offering even a leaf, a flower, or water to the Divine?",
        options: [
            "It is a meaningless gesture",
            "It pleases the Divine when offered with love",
            "Only elaborate rituals matter",
            "It attracts material wealth",
        ],
        correct: "It pleases the Divine when offered with love",
    },
    {
        id: "30",
        question:
            "Krishna speaks about the equality of all beings in Chapter 9. What does He emphasize regarding this equality?",
        options: [
            "Equality in material possessions",
            "Equality in social status",
            "Spiritual equality beyond external differences",
            "Equality in physical strength",
        ],
        correct: "Spiritual equality beyond external differences",
    },
    {
        id: "31",
        question:
            "Krishna mentions a particular quality that leads to bondage. What is this quality?",
        options: [
            "Detachment",
            "Renunciation",
            "Selfless service",
            "Desire for personal gain",
        ],
        correct: "Desire for personal gain",
    },
    {
        id: "32",
        question:
            "What is the term used to describe the divine energy that sustains and nourishes all living beings?",
        options: ["Shakti", "Maya", "Prakriti", "Kundalini"],
        correct: "Prakriti",
    },

    {
        id: "33",
        question:
            "What does Arjuna witness when Lord Krishna reveals his universal form (Vishwaroopa)?",
        options: [
            "A dazzling light",
            "A serene landscape",
            "A cosmic, awe-inspiring vision",
            "Nothing, it's an illusion",
        ],
        correct: "A cosmic, awe-inspiring vision",
    },
    {
        id: "34",
        question:
            "Which deity's presence is explicitly mentioned in the universal form of Krishna?",
        options: [
            "Lord Shiva",
            "Lord Brahma",
            "Goddess Lakshmi",
            "All of the above",
        ],
        correct: "All of the above",
    },
    {
        id: "35",
        question:
            "How does Arjuna feel upon witnessing the cosmic form of Krishna?",
        options: [
            "Fearful and bewildered",
            "Excited and joyful",
            "Indifferent and calm",
            "Amused and entertained",
        ],
        correct: "Fearful and bewildered",
    },
    {
        id: "36",
        question:
            "What is Arjuna's response to Krishna's universal form, and what does he request?",
        options: [
            "Surrender; he requests Krishna to destroy his enemies",
            "Anger; he requests Krishna to leave the battlefield",
            "Joy; he requests Krishna to grant him wealth and power",
            "Fear; he requests Krishna to protect him",
        ],
        correct: "Surrender; he requests Krishna to destroy his enemies",
    },
    {
        id: "37",
        question:
            "What important teachings does Krishna convey through the vision of the universal form?",
        options: [
            "The impermanence of life",
            "The importance of duty and righteousness",
            "The power of devotion and surrender",
            "All of the above",
        ],
        correct: "All of the above",
    },
    {
        id: "38",
        question:
            "In Chapter 12, what does Krishna describe as the highest form of devotion?",
        options: [
            "Ritualistic worship",
            "Meditation and self-discipline",
            "Unconditional love and surrender",
            "Charity and philanthropy",
        ],
        correct: "Unconditional love and surrender",
    },
    {
        id: "39",
        question:
            "What qualities does Krishna mention as characteristic of a true devotee?",
        options: [
            "Anger and pride",
            "Humility and compassion",
            "Greed and envy",
            "Arrogance and selfishness",
        ],
        correct: "Humility and compassion",
    },
    {
        id: "40",
        question:
            "Krishna describes the ideal devotee as one who treats friends and enemies with:",
        options: ["Favoritism", "Hostility", "Equanimity", "Indifference"],
        correct: "Equanimity",
    },
    {
        id: "41",
        question:
            "According to Chapter 12, what does Krishna say about those who are devoted to the formless, unmanifested aspect of the divine?",
        options: [
            "They attain liberation easily",
            "Their path is difficult",
            "They are not true devotees",
            "They achieve material success",
        ],
        correct: "Their path is difficult",
    },
    {
        id: "42",
        question:
            "What advice does Krishna give regarding the mind in the context of devotion?",
        options: [
            "Control the mind through severe ascetic practices",
            "Ignore the mind and focus on external rituals",
            "Engage the mind in continuous contemplation on the divine",
            "Let the mind wander freely",
        ],
        correct: "Engage the mind in continuous contemplation on the divine",
    },
    {
        id: "43",
        question: "Yoga is a means:",
        options: [
            "Ashtang yoga",
            "meditation",
            "To understand the world",
            "To understand the super soul",
        ],
        correct: "To understand the super soul",
    },
    {
        id: "44",
        question:
            " ________derived from a combination of the senses and the sense objects is always a cause of distress and should be avoided by all means.",
        options: ["Happiness", "Sadness", "Meditation", "Depression"],
        correct: "Happiness",
    },
    {
        id: "45",
        question:
            " ________derived from a combination of the senses and the sense objects is always a cause of distress and should be avoided by all means.",
        options: ["Happiness", "Sadness", "Meditation", "Depression"],
        correct: "Happiness",
    },

    {
        id: "46",
        question: `According to bhagavad gita, men worshipping demigods are in 
        <br>A) Mode of passion
        <br>B) Mode of goodness
        <br>C) Mode of ignorance
        <br>Choose the most appropriate option below`,
        options: ["A only", "B only", "C only", "B & C"],
        correct: "B only",
    },

    {
        id: "47",
        question: `According to bhagavad gita, the demoniac person thinks- so much wealth do I have today, and 
        <br>A) I will gain more according to my schemes
        <br>B) It will increase in future, more and more
        <br>C) I shall give some charity, and thus I shall rejoice
        <br>D) I am the richest man, surrounded by aristocratic relatives
        <br>Choose the most appropriate option below`,
        options: ["A only", "A & B", "A & C", "A, B, C, & D"],
        correct: "A, B, C, & D",
    },

    {
        id: "48",
        question: `Give the English meaning of mäm apräpyaiva kaunteya.
        <br>A) O son of Kuntī, such persons can approach me
        <br>B) O son of Kuntī, such persons can never approach me
        <br>C) Choose the most appropriate option below`,
        options: ["A only", "B only", "A & B both depending upon the following text", "none of these"],
        correct: "B only",
    },

    {
        id: "49",
        question: `According to bhagavad gita, the sacrifice performed for some material benefit, or for the sake of pride gets counted in
        <br>A) Mode of passion
        <br>B) Mode of goodness
        <br>C) Mode of ignorance
        <br>Choose the most appropriate option below`,
        options: ["A only", "B only", "C only", "B & C"],
        correct: "A only",
    },

    {
        id: "50",
        question: `Three gates leading to hell-
        <br>A) fame
        <br>B) lust
        <br>C) anger
        <br>D) greed
        <br>Choose the most appropriate option below`,
        options: ["B only", "A, C & D", "A, B & C", "B, C & D"],
        correct: "B, C & D",
    },

    {
        id: "51",
        question: "What type of charity is considered Sattvic?",
        options: ["Charity given with expectation of return", "Charity given reluctantly", "Charity given at the right place, time, and to a worthy recipient without expectation of return", "Hoarding wealth without sharing"],
        correct: "Charity given at the right place, time, and to a worthy recipient without expectation of return",
    },

    {
        id: "52",
        question: `What is the fate of those who are constantly driven by desires?
        <br>A) endless sufferings
        <br>B) rebirth as divine beings
        <br>C) achieving material success 
        <br>Choose the most appropriate option below`,
        options: ["A only", "B only", "C only", "A & C"],
        correct: "A only",
    },

    {
        id: "53",
        question: `Demoniac peoples say that the world is
        <br>A) unreal
        <br>B) with no foundation
        <br>C) no God in control
        <br>D) produced of sex desire and has no cause other than lust
        <br>Choose the most appropriate option below`,
        options: ["A & D", "A only", "D only", "A, B, C & D"],
        correct: "A, B, C & D",
    },

    {
        id: "54",
        question: `The transcendental qualities are favourable to ______, whereas the demoniac qualities make for ______ 
        <br>A) bondage
        <br>B) way to hell
        <br>C) liberation
        <br>D) way to heaven
        <br>Fill in the blanks with the most appropriate options below`,
        options: ["D & C respectively", "C & A respectively", "D & A respectively", "D & B respectively"],
        correct: "C & A respectively",
    },

    {
        id: "55",
        question: `According to bhagavad gita, the sacrifice performed without regard for the directions of scripture gets counted in
        <br>A) Mode of passion
        <br>B) Mode of goodness
        <br>C) Mode of ignorance
        <br>Choose the most appropriate option below`,
        options: ["A only", "B only", "C only", "B & C"],
        correct: "C only",
    },

    {
        id: "56",
        question: `According to bhagavad gita, charity given out of duty, without expectation of return, at the proper time and place, and to a worthy person is considered to be in
        <br>A) Mode of passion
        <br>B) Mode of goodness
        <br>C) Mode of ignorance
        <br>Choose the most appropriate option below`,
        options: ["A only", "B only", "C only", "B & C"],
        correct: "B only",
    },

    {
        id: "57",
        question: `According to bhagavad gita, contributions for indugence in intoxication and gambling is counted in
        <br>A) Mode of passion
        <br>B) Mode of goodness
        <br>C) Mode of darkness
        <br>Choose the most appropriate option below`,
        options: ["A only", "B only", "C only", "B & C"],
        correct: "C only",
    },

    {
        id: "58",
        question: `Anything done as sacrifice, charity or penance without ______ is impermanent
        <br>A) being in mode of goodness
        <br>B) faith in the supreme
        <br>C) questioning for the cause
        <br>Choose the most appropriate option below`,
        options: ["A only", "B only", "C only", "B & C"],
        correct: "B only",
    },

    {
        id: "59",
        question: `According to bhagavad gita, charity performed at an impure place, at am improper time, to unworthy persons, or without proper attention and respect is in
        <br>A) Mode of passion 
        <br>B) Mode of goodness 
        <br>C) Mode of ignorance 
        <br>Choose the most appropriate option below`,
        options: ["A only", "B only", "C only", "B & C"],
        correct: "C only",
    },

    {
        id: "60",
        question:
            "Taking shelter of insatiable lust, the demoniac are always attracted by the",
        options: ["wealth", "fame", "impermanent", "permanent"],
        correct: "impermanent",
    },
    {
        id: "61",
        question:
            "What is the significance of the word 'dharma-kṣetra' in the context of the Bhagavad-gītā?",
        options: [
            "A place for political negotiations",
            "A place where religious rituals are performed",
            "A battlefield for personal duels",
            "A center for agricultural activities",
        ],
        correct: "A place where religious rituals are performed",
    },
    {
        id: "62",
        question:
            "Why was Dhṛtarāṣṭra doubtful about his sons' victory on the Battlefield of Kurukṣetra?",
        options: [
            "He doubted their military strength",
            "He questioned the influence of the holy place on the battle",
            "He feared interference from denizens of heaven",
            "He was unsure about their determination to fight",
        ],
        correct: "He questioned the influence of the holy place on the battle",
    },
    {
        id: "63",
        question:
            "How did Sañjaya gain the ability to envision the Battlefield of Kurukṣetra?",
        options: [
            "Through meditation and ascetic practices",
            "By the mercy of Vyāsa, his teacher",
            "Through a divine vision granted by Lord Kṛṣṇa",
            "By studying ancient scriptures",
        ],
        correct: "By the mercy of Vyāsa, his teacher",
    },
    {
        id: "64",
        question: "What distinguishes a person with genuine devotion to the Lord?",
        options: [
            "Material qualifications and education",
            "Godly qualities and compassion",
            "Culture and advanced thinking",
            "Physical strength and fighting spirit",
        ],
        correct: "Godly qualities and compassion",
    },
    {
        id: "65",
        question: "Why was Arjuna overwhelmed with compassion on the battlefield?",
        options: [
            "Due to weakness and fear",
            "Seeing the fighting spirit of his own soldiers",
            "Anticipating the imminent death of soldiers from both parties",
            "Witnessing the advanced material qualifications of the opponents",
        ],
        correct: "Anticipating the imminent death of soldiers from both parties",
    },
    {
        id: "66",
        question: "What distinguishes the symptoms in Arjuna?",
        options: [
            "Weakness and fear",
            "Soft-heartedness and compassion",
            "Physical strength and determination",
            "Superior material qualifications",
        ],
        correct: "Soft-heartedness and compassion",
    },
    {
        id: "67",
        question:
            "What does Krishna consider false magnanimity or nonviolence in Arjuna's attitude?",
        options: [
            "Arjuna's respect for Bhishma and his relatives",
            "Arjuna's hesitation due to compassion",
            "Arjuna's adherence to Kshatriya principles",
            "Arjuna's willingness to negotiate with the enemy",
        ],
        correct: "Arjuna's hesitation due to compassion",
    },
    {
        id: "68",
        question:
            "Why does Krishna emphasize that Arjuna should not become an unworthy son of a Kshatriya?",
        options: [
            "To preserve Arjuna's reputation as a warrior",
            "To maintain the honor of the Kshatriya lineage",
            "To please Bhishma and his relatives",
            "To avoid conflicts within the family",
        ],
        correct: "To maintain the honor of the Kshatriya lineage",
    },
    {
        id: "69",
        question:
            "What is emphasized as a key aspect of the proper discharge of duty?",
        options: [
            "Achieving permanent happiness",
            "Tolerating temporary happiness and distress",
            "Avoiding climatic inconveniences",
            "Ignoring prescribed rules and regulations",
        ],
        correct: "Tolerating temporary happiness and distress",
    },
    {
        id: "70",
        question:
            "What is a key quality that makes a person eligible for liberation?",
        options: [
            "Accumulating material wealth",
            "Tolerating the onslaughts of distress and happiness",
            "Avoiding all difficulties in life",
            "Pursuing worldly desires without restraint",
        ],
        correct: "Tolerating the onslaughts of distress and happiness",
    },
    {
        id: "71",
        question:
            "In the varṇāśrama institution, what is mentioned as the fourth stage of life that requires adopting a painstaking situation?",
        options: ["Brahmacharya", "Grihastha", "Vānaprastha", "Sannyāsa"],
        correct: "Sannyāsa",
    },
    {
        id: "72",
        question:
            "What is the fundamental difference between the body and the spirit soul?",
        options: [
            "The body is eternal, and the spirit soul undergoes changes.",
            "The body undergoes constant changes, while the spirit soul remains permanent.",
            "Both the body and the spirit soul are eternal.",
            "The spirit soul is subject to growth and old age, unlike the body.",
        ],
        correct:
            "The body undergoes constant changes, while the spirit soul remains permanent.",
    },
    {
        id: "73",
        question: "What does the Viṣṇu Purāṇa state about Viṣṇu and His abodes?",
        options: [
            "They are non-existent.",
            "They have material existence.",
            "They have self-illuminated spiritual existence.",
            "They are part of the changing material world.",
        ],
        correct: "They have self-illuminated spiritual existence.",
    },
    {
        id: "74",
        question:
            "What is the main purpose of the Lord's instruction to living entities who are bewildered by ignorance?",
        options: [
            "To establish the eternal relationship between the worshiper and the worshipable.",
            "To promote self-study and self-realization.",
            "To emphasize the similarities between the energy and the energetic.",
            "To explain the nature of the Supreme Personality of Godhead.",
        ],
        correct:
            "To establish the eternal relationship between the worshiper and the worshipable.",
    },
    {
        id: "75",
        question: "What is the main topic of Chapter 14 in the Bhagavad Gita?",
        options: [
            "Karma Yoga",
            "The Yoga of Devotion",
            "The Yoga of Knowledge",
            "The Three Gunas",
        ],
        correct: "The Three Gunas",
    },
    {
        id: "76",
        question: "Who is the speaker of Chapter 14?",
        options: ["Arjuna", "Yudhishthira", "Bhishma", "Lord Krishna"],
        correct: "Lord Krishna",
    },
    {
        id: "77",
        question:
            "What does one attain by knowing the knowledge discussed in Chapter 14?",
        options: [
            "Material wealth",
            "Liberation from sins",
            "Worldly success",
            "Power and fame",
        ],
        correct: "Liberation from sins",
    },
    {
        id: "78",
        question:
            "What is the source of birth in the material world, according to Verse 3?",
        options: ["Atman", "Brahman", "Prakriti", "Karma"],
        correct: "Prakriti",
    },
    {
        id: "79",
        question: "What is the nature of the knowledge described in Chapter 14?",
        options: [
            "Ordinary knowledge",
            "Inferior knowledge",
            "Supreme knowledge",
            "Historical knowledge",
        ],
        correct: "Supreme knowledge",
    },
    {
        id: "80",
        question: "Who is referred to as the seed-giving father in Verse 3?",
        options: ["Lord Shiva", "Lord Brahma", "Lord Vishnu", "Lord Krishna"],
        correct: "Lord Vishnu",
    },
    {
        id: "81",
        question:
            "What is the significance of knowing the Supreme Lord as unborn and beginningless?",
        options: [
            "Accumulation of wealth",
            "Liberation from sins",
            "Material success",
            "Intellectual knowledge",
        ],
        correct: "Liberation from sins",
    },
    {
        id: "82",
        question: "According to Chapter 14, what is the material substance called?",
        options: ["Atman", "Brahman", "Prakriti", "Karma"],
        correct: "Prakriti",
    },
    {
        id: "83",
        question:
            "Who are born from the mind of the Supreme Lord, according to Verse 4?",
        options: [
            "Seven great sages",
            "Four other great sages",
            "Manus",
            "All of the above",
        ],
        correct: "All of the above",
    },
    {
        id: "84",
        question:
            "What is the ultimate goal of becoming fixed in the knowledge mentioned in Chapter 14?",
        options: [
            "Wealth and prosperity",
            "Liberation from all sins",
            "Worldly achievements",
            "Fame and recognition",
        ],
        correct: "Liberation from all sins",
    },
    {
        id: "85",
        question:
            "In Chapter 14, what happens to those established in the knowledge of the Supreme Lord?",
        options: [
            "They are born at the time of creation",
            "They are disturbed at the time of dissolution",
            "They are not born at the time of creation",
            "They are disturbed at the time of creation",
        ],
        correct: "They are not born at the time of creation",
    },
    {
        id: "86",
        question:
            "What term is used to describe the total material substance in Chapter 14?",
        options: ["Atman", "Brahman", "Prakriti", "Karma"],
        correct: "Prakriti",
    },
    {
        id: "87",
        question:
            "According to Chapter 14, who are the progenitors of all living beings?",
        options: [
            "Seven great sages",
            "Four other great sages",
            "Manus",
            "Lord Krishna",
        ],
        correct: "Lord Krishna",
    },
    {
        id: "88",
        question:
            "What does one attain by knowing the Supreme Lord's transcendental nature?",
        options: [
            "Material success",
            "Liberation from all sins",
            "Intellectual prowess",
            "Worldly recognition",
        ],
        correct: "Liberation from all sins",
    },
    {
        id: "89",
        question: "How is the knowledge in Chapter 14 described?",
        options: [
            "Inferior knowledge",
            "Ordinary knowledge",
            "Transcendental knowledge",
            "Scientific knowledge",
        ],
        correct: "Transcendental knowledge",
    },
    {
        id: "90",
        question: "Which of the following is the Modes of Material Nature?",
        options: ["Goodness", "Ignorance", "Passion", "All of These"],
        correct: "All of These",
    },

    {
        id: "91",
        question:
            "What is the significance of remembering the Divine at the time of death?",
        options: [
            "Attaining material wealth",
            "Liberation from the cycle of birth and death",
            "Achieving worldly success",
            "Enhancing one's social status",
        ],
        correct: "Liberation from the cycle of birth and death",
    },
    {
        id: "92",
        question:
            "Arjuna asks Krishna about the ultimate reality. What does Krishna reveal about this ultimate reality?",
        options: [
            "Impermanence of the material world",
            "The eternal nature of the soul",
            "The importance of rituals",
            "The supremacy of a particular deity",
        ],
        correct: "The eternal nature of the soul",
    },
    {
        id: "93",
        question:
            "What are the different paths that lead to liberation, and how do they differ from one another?",
        options: [
            "Jnana Yoga, Bhakti Yoga, Karma Yoga",
            "Renunciation, Asceticism, Meditation",
            "Devotion, Knowledge, Selfless Action",
            "Yoga of Knowledge, Yoga of Devotion, Yoga of Renunciation",
        ],
        correct: "Yoga of Knowledge, Yoga of Devotion, Yoga of Renunciation",
    },
    {
        id: "94",
        question:
            "According to the Bhagavad Gita, what is the role of meditation in attaining spiritual goals?",
        options: [
            "It is unnecessary for spiritual progress",
            "It is the only path to liberation",
            "It complements other paths like knowledge and devotion",
            "It leads to material success",
        ],
        correct: "It complements other paths like knowledge and devotion",
    },
    {
        id: "95",
        question:
            "Krishna talks about the concept of 'Akshara Brahman'. What does it signify, and how does it relate to the eternal soul?",
        options: [
            "Temporary reality; relates to the physical body",
            "Eternal reality; relates to the indestructible soul",
            "Illusionary concept; relates to material possessions",
            "Symbolic representation; relates to social status",
        ],
        correct: "Eternal reality; relates to the indestructible soul",
    },
    {
        id: "96",
        question:
            "Krishna describes the process of departing from the mortal world. What guidance does he provide regarding the state of mind during the final moments of life?",
        options: [
            "Attachment to worldly possessions",
            "Attachment to loved ones",
            "Remembrance of the Divine with devotion",
            "Worry about future incarnations",
        ],
        correct: "Remembrance of the Divine with devotion",
    },
    {
        id: "97",
        question: "What is the nature of the knowledge Krishna imparts to Arjuna?",
        options: [
            "Secret rituals",
            "Mundane wisdom",
            "Transcendental knowledge",
            "Scientific discoveries",
        ],
        correct: "Transcendental knowledge",
    },
    {
        id: "98",
        question:
            "Krishna describes a specific type of devotee. What qualities characterize this devotee?",
        options: [
            "One who performs rituals mechanically",
            "One who worships with sincerity and love",
            "One who renounces the world completely",
            "One who seeks material wealth",
        ],
        correct: "One who worships with sincerity and love",
    },
    {
        id: "99",
        question: "What is the ultimate purpose of all sacrifices and penances?",
        options: [
            "Attainment of material success",
            "Pleasing the gods for personal gain",
            "Liberation and devotion to the Supreme",
            "Accumulating good karma for future lives",
        ],
        correct: "Liberation and devotion to the Supreme",
    },
    {
        id: "100",
        question:
            "Krishna discusses the concept of 'Paramatma'. What does Paramatma refer to?",
        options: [
            "The individual soul",
            "The Supreme Soul",
            "Ritualistic actions",
            "The physical body",
        ],
        correct: "The Supreme Soul",
    },
    {
        id: "101",
        question:
            "Krishna mentions a specific quality that is dear to Him. What is this quality?",
        options: ["Anger", "Humility", "Attachment", "Ignorance"],
        correct: "Humility",
    },
    {
        id: "102",
        question:
            "What is the significance of offering even a leaf, a flower, or water to the Divine?",
        options: [
            "It is a meaningless gesture",
            "It pleases the Divine when offered with love",
            "Only elaborate rituals matter",
            "It attracts material wealth",
        ],
        correct: "It pleases the Divine when offered with love",
    },
    {
        id: "103",
        question:
            "Krishna speaks about the equality of all beings in Chapter 9. What does He emphasize regarding this equality?",
        options: [
            "Equality in material possessions",
            "Equality in social status",
            "Spiritual equality beyond external differences",
            "Equality in physical strength",
        ],
        correct: "Spiritual equality beyond external differences",
    },
    {
        id: "104",
        question:
            "Krishna mentions a particular quality that leads to bondage. What is this quality?",
        options: [
            "Detachment",
            "Renunciation",
            "Selfless service",
            "Desire for personal gain",
        ],
        correct: "Desire for personal gain",
    },
    {
        id: "105",
        question:
            "What is the term used to describe the divine energy that sustains and nourishes all living beings?",
        options: ["Shakti", "Maya", "Prakriti", "Kundalini"],
        correct: "Prakriti",
    },
    {
        id: "106",
        question: "What is the central theme of chapter 7?",
        options: ["Devotion", "Knowledge", "Renunciation", "Meditation"],
        correct: "Knowledge",
    },
    {
        id: "107",
        question: "According to Lord Krishna, what is the highest form of worship?",
        options: [
            "Rituals and ceremonies",
            "Meditation",
            "Chanting the holy names",
            "Offering sacrifices",
        ],
        correct: "Chanting the holy names",
    },
    {
        id: "108",
        question: "According to chapter 7, what is ultimate goal of knowledge?",
        options: ["Liberation", "Material success", "Devotion", "Renunciation"],
        correct: "Devotion",
    },
    {
        id: "109",
        question:
            "what does Lord Krishna reveal about His divine manifestations in chapter 7?",
        options: [
            "They are eternal",
            "They are temporary",
            "They are illusory",
            "They are material",
        ],
        correct: "They are eternal",
    },
    {
        id: "110",
        question:
            "In chapter 7, Lord Krishna talks about how many types of energy?",
        options: ["One", "Two", "Five", "Seven"],
        correct: "Two",
    },
    {
        id: "111",
        question:
            "Lord Krishna describes which two types of energies in chapter 7?",
        options: [
            "Material and Spiritual",
            "Divine and Demonic",
            "Active and Passive",
            "Positive and Negative",
        ],
        correct: "Material and Spiritual",
    },
    {
        id: "112",
        question: "How one can understand Lord Krishna?",
        options: [
            "From Krishna only",
            "From pure devotees",
            "Both A and B",
            "Neither A nor B",
        ],
        correct: "Both A and B",
    },
    {
        id: "113",
        question: "Which mode is most favorable for Krishna Consciousness?",
        options: [
            "Mode of goodness",
            "Mode of passion",
            "Mode of ignorance",
            "Mode of laziness",
        ],
        correct: "Mode of goodness",
    },
    {
        id: "114",
        question:
            "In which verse of chapter 7 , Lord Krishna says I am the taste of water?",
        options: ["Verse 7.6", "verse 7.7", "verse 7.8", "Verse 7.9"],
        correct: "verse 7.8",
    },
    {
        id: "115",
        question: "Which is not the state of material existence ?",
        options: [
            "Mode of goodness",
            "Mode of passion",
            "Mode of ignorance",
            "Mode of laziness",
        ],
        correct: "Mode of laziness",
    },
    {
        id: "116",
        question: "what is recommended for understanding the Supreme Lord ?",
        options: [
            "Meditation",
            "Studying scriptures",
            "devotional service and surrender",
            "Speculations",
        ],
        correct: "devotional service and surrender",
    },
    {
        id: "117",
        question: "What is the ultimate goal of human life?",
        options: [
            "wealth and power",
            "sensory pleasures",
            "fame and recognition",
            "realizing the Supreme Lord",
        ],
        correct: "realizing the Supreme Lord",
    },
    {
        id: "118",
        question: "What is purpose of yoga according to chapter 7?",
        options: [
            "Achieving physical and mental health",
            "Attaining success",
            "Knowing the Supreme Lord",
            "Both A and C",
        ],
        correct: "Knowing the Supreme Lord",
    },
    {
        id: "119",
        question: "What is purpose of yoga according to chapter 7?",
        options: [
            "Achieving physical and mental health",
            "Attaining success",
            "Knowing the Supreme Lord",
            "Both A and C",
        ],
        correct: "Knowing the Supreme Lord",
    },
    {
        id: "120",
        question: "Which is the divine energy that sustains all living beings?",
        options: ["Prakriti", "Shakti", "Maya", "Avidhya"],
        correct: "Shakti",
    },
    {
        id: "121",
        question:
            "How many among thousands of people endeavor for spiritual perfection?",
        options: ["Only a few", "Many", "Most", "None"],
        correct: "Only a few",
    },
    {
        id: "122",
        question:
            "According to Krishna's explanation in Chapter 5, what does he consider to be better: renunciation of work or work in devotion?",
        options: [
            "Renunciation of work",
            "Work in devotion",
            "Both are equally beneficial",
            "Neither is beneficial",
        ],
        correct: "Work in devotion",
    },
    {
        id: "123",
        question:
            "How does Krishna describe a person who works in devotion with his mind and senses controlled?",
        options: [
            "Engaged in sense gratification",
            "Entangled in material desires",
            "In divine consciousness, aloof and situated in peace and happiness",
            "Detached from all activities",
        ],
        correct:
            "In divine consciousness, aloof and situated in peace and happiness",
    },
    {
        id: "124",
        question:
            "What is the term used to describe the process that helps one escape the result of fruitive action and entanglement in rebirth",
        options: ["Bhakti Yoga", "Karma Yoga", "Janna Yoga", "Dhyana Yoga "],
        correct: "Karma Yoga",
    },
    {
        id: "125",
        question:
            "In Krishna consciousness, what does it mean for a person to be renounced",
        options: [
            " Living in isolation from society",
            "Renouncing all material possessions",
            "Using everything in Krishna’s service",
            "Abandoning all responsibilities",
        ],
        correct: "Using everything in Krishna’s service",
    },
    {
        id: "126",
        question: "Who is not the speaker of the Bhagavad Gita?",
        options: ["Arjuna", "Krishna", "Sanjay", "Bhishma"],
        correct: "Bhishma",
    },
    {
        id: "127",
        question: "In which scripture is the Bhagavad Gita a part?",
        options: ["Mahabharata", "Ramayana", "Upanishads", "Vedas"],
        correct: "Mahabharata",
    },
    {
        id: "128",
        question:
            "Where does the conversation between Arjuna and Krishna take place?",
        options: ["Kurukshetra", "Dwaraka", "Ayodhya", "Varanasi"],
        correct: "Kurukshetra",
    },
    {
        id: "129",
        question: "What is the primary theme of the Bhagavad Gita?",
        options: [
            "Love and Romance",
            "Duty and righteousness",
            "Wealth and Prosperity",
            "Political Power",
        ],
        correct: "Duty and righteousness",
    },
    {
        id: "130",
        question: "Which yoga is not emphasized in the Bhagavad Gita?",
        options: ["Hatha Yoga", "Karma Yoga", "Bhakti Yoga", "Gyaan Yoga"],
        correct: "Hatha Yoga",
    },
    {
        id: "131",
        question: "What is Arjuna’s initial reluctance to fight based on?",
        options: [
            "Fear of losing",
            "Attachment to family and friends",
            "Desire for power",
            "Lack of skill",
        ],
        correct: "Attachment to family and friends",
    },
    {
        id: "132",
        question:
            "According to the Bhagavad Gita, what is the eternal essence of all living beings?",
        options: ["Atman", "Mana", "Prana", "Brahman"],
        correct: "Atman",
    },
    {
        id: "133",
        question:
            "Which chapter of the Bhagavad Gita is known as the 'Yoga of Devotion'?",
        options: ["Chapter 2", "Chapter 6", "Chapter 9", "Chapter 12"],
        correct: "Chapter 12",
    },
    {
        id: "134",
        question:
            "What is the term for selfless action without attachment to the results, as advocated in the Bhagavad Gita?",
        options: ["Nishkama Karma", "Bhakti Yoga", "Jnana Yoga", "Dhyana Yoga"],
        correct: "Nishkama Karma",
    },
    {
        id: "135",
        question:
            "According to Krishna, what is the cause of suffering in the material world?",
        options: [
            "Lack of knowledge",
            "Attachment and desire",
            "Physical pain",
            "Bad karma",
        ],
        correct: "Attachment and desire",
    },
    {
        id: "136",
        question:
            "Which divine quality does Krishna describe in Chapter 16 of the Bhagavad Gita?",
        options: ["Humility", "Devotion", "Fearlessness", "Detachment"],
        correct: "Fearlessness",
    },
    {
        id: "137",
        question: "In the Bhagavad Gita, what does Krishna compare the soul to?",
        options: ["Fire", "Water", "Wind", "Space"],
        correct: "Fire",
    },
    {
        id: "138",
        question: "According to Krishna, what is the purpose of life?",
        options: [
            "Accumulation of wealth",
            "Pursuit of pleasure",
            "Self-realization and spiritual growth",
            "Social status",
        ],
        correct: "Self-realization and spiritual growth",
    },
    {
        id: "139",
        question:
            "How many shlokas were spoken by Lord Krishna in the Bhagavad Gita?",
        options: ["474", "700", "18", "574"],
        correct: "574",
    },
    {
        id: "140",
        question: "In which parva of Mahabharata was the Bhagavad Gita spoken?",
        options: ["Adi Parva", "Shanti Parva", "Bhishma Parva", "Drona Parva"],
        correct: "Bhishma Parva",
    },
    {
        id: "141",
        question: "According to Krishna, what is the ultimate goal of life?",
        options: [
            "Wealth and prosperity",
            "Liberation (Moksha)",
            "Pleasure and enjoyment",
            "Fame and recognition",
        ],
        correct: "Liberation (Moksha)",
    },
    {
        id: "142",
        question: "What is the significance of the term 'Bhagavad Gita'?",
        options: [
            "Song of the Lord",
            "Song of Devotion",
            "Song of Wisdom",
            "Song of Victory",
        ],
        correct: "Song of the Lord",
    },
    {
        id: "143",
        question: "Who serves as Arjuna's charioteer in the Bhagavad Gita?",
        options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
        correct: "Krishna",
    },
    {
        id: "144",
        question: "What is the name of Arjuna's bow in the Mahabharata?",
        options: ["Gandiva", "Sharanga", "Pinaka", "Vijaya"],
        correct: "Gandiva",
    },
    {
        id: "145",
        question: "In which war does the Bhagavad Gita take place?",
        options: [
            "Ramayana War",
            "Kurukshetra War",
            "Mahabharata War",
            "Battle of Lanka",
        ],
        correct: "Kurukshetra War",
    },
    {
        id: "146",
        question: "According to Krishna, what is the nature of the self (Atman)?",
        options: [
            "Immortal and eternal",
            "Subject to birth and death",
            "Temporary and changing",
            "Illusory and non-existent",
        ],
        correct: "Immortal and eternal",
    },
    {
        id: "147",
        question: "What is the concept of 'Dharma' in the Bhagavad Gita?",
        options: [
            "Duty and righteousness",
            "Wealth and prosperity",
            "Pleasure and enjoyment",
            "Liberation",
        ],
        correct: "Duty and righteousness",
    },
    {
        id: "148",
        question:
            "Which chapter of the Bhagavad Gita is known as the 'Yoga of Knowledge'?",
        options: ["Chapter 3", "Chapter 7", "Chapter 13", "Chapter 18"],
        correct: "Chapter 13",
    },
    {
        id: "149",
        question:
            "According to the Bhagavad Gita, what is the purpose of performing one's duties?",
        options: [
            "Accumulation of wealth",
            "Social recognition",
            "Personal satisfaction",
            "Spiritual growth and self-realization",
        ],
        correct: "Spiritual growth and self-realization",
    },
];
