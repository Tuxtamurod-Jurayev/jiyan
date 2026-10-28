const ENGLISH_DATA = {
  // 3.1 📚 SO'Z BOYLIGI (Vocabulary) — 10 ta Etap
  vocabulary: [
    {
      stage: 1,
      title: "Ranglar",
      icon: "🎨",
      items: [
        { en: "red", uz: "qizil", emoji: "🔴" },
        { en: "blue", uz: "ko'k", emoji: "🔵" },
        { en: "green", uz: "yashil", emoji: "🟢" },
        { en: "yellow", uz: "sariq", emoji: "🟡" },
        { en: "black", uz: "qora", emoji: "⚫" },
        { en: "white", uz: "oq", emoji: "⚪" },
        { en: "pink", uz: "pushti", emoji: "🌸" },
        { en: "orange", uz: "olovrang", emoji: "🟠" },
        { en: "brown", uz: "jigarrang", emoji: "🟤" },
        { en: "purple", uz: "binafsha", emoji: "🟣" },
        { en: "gray", uz: "kulrang", emoji: "🔘" }
      ]
    },
    {
      stage: 2,
      title: "Sonlar 1–20",
      icon: "🔢",
      items: [
        { en: "one", uz: "bir (1)", emoji: "1️⃣" },
        { en: "two", uz: "ikki (2)", emoji: "2️⃣" },
        { en: "three", uz: "uch (3)", emoji: "3️⃣" },
        { en: "four", uz: "to'rt (4)", emoji: "4️⃣" },
        { en: "five", uz: "besh (5)", emoji: "5️⃣" },
        { en: "six", uz: "olti (6)", emoji: "6️⃣" },
        { en: "seven", uz: "yetti (7)", emoji: "7️⃣" },
        { en: "eight", uz: "sakkiz (8)", emoji: "8️⃣" },
        { en: "nine", uz: "to'qqiz (9)", emoji: "9️⃣" },
        { en: "ten", uz: "o'n (10)", emoji: "🔟" },
        { en: "eleven", uz: "o'n bir (11)", emoji: "🔢" },
        { en: "twelve", uz: "o'n ikki (12)", emoji: "🔢" },
        { en: "fifteen", uz: "o'n besh (15)", emoji: "🔢" },
        { en: "twenty", uz: "yigirma (20)", emoji: "🔢" }
      ]
    },
    {
      stage: 3,
      title: "Oila",
      icon: "👨‍👩‍👧‍👦",
      items: [
        { en: "mother", uz: "ona", emoji: "👩" },
        { en: "father", uz: "ota", emoji: "👨" },
        { en: "sister", uz: "opa / singil", emoji: "👧" },
        { en: "brother", uz: "aka / uka", emoji: "👦" },
        { en: "grandma", uz: "buvi", emoji: "👵" },
        { en: "grandpa", uz: "bobo", emoji: "👴" },
        { en: "baby", uz: "chaqaloq", emoji: "👶" },
        { en: "family", uz: "oila", emoji: "👨‍👩‍👦" },
        { en: "friend", uz: "do'st", emoji: "🤝" },
        { en: "boy", uz: "o'g'il bola", emoji: "🧒" },
        { en: "girl", uz: "qiz bola", emoji: "👧" }
      ]
    },
    {
      stage: 4,
      title: "Uy hayvonlari",
      icon: "🐾",
      items: [
        { en: "cat", uz: "mushuk", emoji: "🐱" },
        { en: "dog", uz: "kuchuk", emoji: "🐶" },
        { en: "cow", uz: "sigir", emoji: "🐮" },
        { en: "horse", uz: "ot", emoji: "🐴" },
        { en: "sheep", uz: "qo'y", emoji: "🐑" },
        { en: "duck", uz: "o'rdak", emoji: "🦆" },
        { en: "bird", uz: "qush", emoji: "🐦" },
        { en: "fish", uz: "baliq", emoji: "🐟" },
        { en: "rabbit", uz: "quyon", emoji: "🐰" },
        { en: "hen", uz: "tovuq", emoji: "🐔" },
        { en: "pig", uz: "cho'chqa", emoji: "🐷" },
        { en: "goat", uz: "echki", emoji: "🐐" }
      ]
    },
    {
      stage: 5,
      title: "Yovvoyi hayvonlar",
      icon: "🦁",
      items: [
        { en: "lion", uz: "sher", emoji: "🦁" },
        { en: "tiger", uz: "yo'lbars", emoji: "🐯" },
        { en: "elephant", uz: "fil", emoji: "🐘" },
        { en: "monkey", uz: "maymun", emoji: "🐒" },
        { en: "bear", uz: "ayiq", emoji: "🐻" },
        { en: "giraffe", uz: "jirafa", emoji: "🦒" },
        { en: "zebra", uz: "zebra", emoji: "🦓" },
        { en: "snake", uz: "ilon", emoji: "🐍" },
        { en: "crocodile", uz: "timsoh", emoji: "🐊" },
        { en: "fox", uz: "tulki", emoji: "🦊" },
        { en: "wolf", uz: "bo'ri", emoji: "🐺" }
      ]
    },
    {
      stage: 6,
      title: "Maktab jihozlari",
      icon: "🎒",
      items: [
        { en: "book", uz: "kitob", emoji: "📖" },
        { en: "pen", uz: "ruchka", emoji: "🖊️" },
        { en: "pencil", uz: "qalam", emoji: "✏️" },
        { en: "bag", uz: "sumka", emoji: "🎒" },
        { en: "desk", uz: "parta", emoji: "🪑" },
        { en: "chair", uz: "stul", emoji: "🪑" },
        { en: "ruler", uz: "chizg'ich", emoji: "📏" },
        { en: "rubber", uz: "o'chirg'ich", emoji: "🧽" },
        { en: "teacher", uz: "o'qituvchi", emoji: "👩‍🏫" },
        { en: "pupil", uz: "o'quvchi", emoji: "🧑‍🎓" },
        { en: "classroom", uz: "sinfxona", emoji: "🏫" }
      ]
    },
    {
      stage: 7,
      title: "Tana a'zolari",
      icon: "👀",
      items: [
        { en: "head", uz: "bosh", emoji: "🗣️" },
        { en: "eye", uz: "ko'z", emoji: "👁️" },
        { en: "ear", uz: "quloq", emoji: "👂" },
        { en: "nose", uz: "burun", emoji: "👃" },
        { en: "mouth", uz: "og'iz", emoji: "👄" },
        { en: "hand", uz: "qo'l (kaft)", emoji: "✋" },
        { en: "leg", uz: "oyoq", emoji: "🦵" },
        { en: "hair", uz: "soch", emoji: "💇" },
        { en: "face", uz: "yuz", emoji: "😀" },
        { en: "finger", uz: "barmoq", emoji: "☝️" },
        { en: "arm", uz: "qo'l (bilak)", emoji: "💪" }
      ]
    },
    {
      stage: 8,
      title: "Meva va Oziq-ovqat",
      icon: "🍎",
      items: [
        { en: "apple", uz: "olma", emoji: "🍎" },
        { en: "banana", uz: "banan", emoji: "🍌" },
        { en: "orange", uz: "apelsin", emoji: "🍊" },
        { en: "milk", uz: "sut", emoji: "🥛" },
        { en: "bread", uz: "non", emoji: "🍞" },
        { en: "water", uz: "suv", emoji: "💧" },
        { en: "egg", uz: "tuxum", emoji: "🥚" },
        { en: "cake", uz: "tort", emoji: "🎂" },
        { en: "cheese", uz: "pishloq", emoji: "🧀" },
        { en: "ice cream", uz: "muzqaymoq", emoji: "🍦" },
        { en: "juice", uz: "sharbat", emoji: "🧃" }
      ]
    },
    {
      stage: 9,
      title: "Uy va Xonalar",
      icon: "🏠",
      items: [
        { en: "house", uz: "uy", emoji: "🏡" },
        { en: "room", uz: "xona", emoji: "🚪" },
        { en: "door", uz: "eshik", emoji: "🚪" },
        { en: "window", uz: "deraza", emoji: "🪟" },
        { en: "bed", uz: "karavot", emoji: "🛏️" },
        { en: "table", uz: "stol", emoji: "🪵" },
        { en: "sofa", uz: "divan", emoji: "🛋️" },
        { en: "TV", uz: "televizor", emoji: "📺" },
        { en: "kitchen", uz: "oshxona", emoji: "🍳" },
        { en: "garden", uz: "bog'", emoji: "🌳" }
      ]
    },
    {
      stage: 10,
      title: "Harakat fe'llari",
      icon: "🏃",
      items: [
        { en: "run", uz: "yugurmoq", emoji: "🏃" },
        { en: "jump", uz: "sakramoq", emoji: "🦘" },
        { en: "swim", uz: "suzmoq", emoji: "🏊" },
        { en: "fly", uz: "uchmoq", emoji: "🦅" },
        { en: "read", uz: "o'qimoq", emoji: "📖" },
        { en: "write", uz: "yozmoq", emoji: "✍️" },
        { en: "sleep", uz: "uxlamoq", emoji: "😴" },
        { en: "eat", uz: "yemoq", emoji: "🍽️" },
        { en: "drink", uz: "ichmoq", emoji: "🥤" },
        { en: "play", uz: "o'ynamoq", emoji: "⚽" }
      ]
    }
  ],

  // 3.2 🎧 TINGLAB TOPISH (Listening) — 10 ta Etap
  listening: [
    {
      stage: 1,
      title: "Salomlashish va Odatlar",
      icon: "👋",
      items: [
        { audio: "Hello", uz: "Salom", emoji: "👋" },
        { audio: "Goodbye", uz: "Xayr", emoji: "🙋‍♂️" },
        { audio: "Thank you", uz: "Rahmat", emoji: "🙏" },
        { audio: "Yes", uz: "Ha", emoji: "👍" },
        { audio: "No", uz: "Yo'q", emoji: "👎" },
        { audio: "Please", uz: "Iltimos", emoji: "🥺" },
        { audio: "Good morning", uz: "Xayrli tong", emoji: "🌅" },
        { audio: "Good night", uz: "Xayrli tun", emoji: "🌙" },
        { audio: "Welcome", uz: "Xush kelibsiz", emoji: "🤝" },
        { audio: "Friend", uz: "Do'st", emoji: "🧑‍🤝‍🧑" }
      ]
    },
    {
      stage: 2,
      title: "Ranglar va Sonlar",
      icon: "🔢",
      items: [
        { audio: "Seven", uz: "Yetti (7)", emoji: "7️⃣" },
        { audio: "Twelve", uz: "O'n ikki (12)", emoji: "🔢" },
        { audio: "Yellow", uz: "Sariq rang", emoji: "🟡" },
        { audio: "Green", uz: "Yashil rang", emoji: "🟢" },
        { audio: "Five", uz: "Besh (5)", emoji: "5️⃣" },
        { audio: "Nine", uz: "To'qqiz (9)", emoji: "9️⃣" },
        { audio: "Red", uz: "Qizil rang", emoji: "🔴" },
        { audio: "Blue", uz: "Ko'k rang", emoji: "🔵" },
        { audio: "Twenty", uz: "Yigirma (20)", emoji: "🔢" },
        { audio: "Ten", uz: "O'n (10)", emoji: "🔟" }
      ]
    },
    {
      stage: 3,
      title: "Hayvonlar va Oila",
      icon: "🐾",
      items: [
        { audio: "Cat", uz: "Mushuk", emoji: "🐱" },
        { audio: "Dog", uz: "Kuchuk", emoji: "🐶" },
        { audio: "Mother", uz: "Ona", emoji: "👩" },
        { audio: "Father", uz: "Ota", emoji: "👨" },
        { audio: "Brother", uz: "Aka / Uka", emoji: "👦" },
        { audio: "Sister", uz: "Opa / Singil", emoji: "👧" },
        { audio: "Lion", uz: "Sher", emoji: "🦁" },
        { audio: "Elephant", uz: "Fil", emoji: "🐘" },
        { audio: "Grandma", uz: "Buvi", emoji: "👵" },
        { audio: "Grandpa", uz: "Bobo", emoji: "👴" }
      ]
    },
    {
      stage: 4,
      title: "Maktab va Tana",
      icon: "🎒",
      items: [
        { audio: "Book", uz: "Kitob", emoji: "📖" },
        { audio: "Pen", uz: "Ruchka", emoji: "🖊️" },
        { audio: "Pencil", uz: "Qalam", emoji: "✏️" },
        { audio: "Eye", uz: "Ko'z", emoji: "👁️" },
        { audio: "Nose", uz: "Burun", emoji: "👃" },
        { audio: "Hand", uz: "Qo'l", emoji: "✋" },
        { audio: "Head", uz: "Bosh", emoji: "🗣️" },
        { audio: "Bag", uz: "Sumka", emoji: "🎒" },
        { audio: "Desk", uz: "Parta", emoji: "🪑" },
        { audio: "Ruler", uz: "Chizg'ich", emoji: "📏" }
      ]
    },
    {
      stage: 5,
      title: "Meva va Uy",
      icon: "🍎",
      items: [
        { audio: "Apple", uz: "Olma", emoji: "🍎" },
        { audio: "Milk", uz: "Sut", emoji: "🥛" },
        { audio: "Bread", uz: "Non", emoji: "🍞" },
        { audio: "House", uz: "Uy", emoji: "🏡" },
        { audio: "Door", uz: "Eshik", emoji: "🚪" },
        { audio: "Window", uz: "Deraza", emoji: "🪟" },
        { audio: "Water", uz: "Suv", emoji: "💧" },
        { audio: "Cheese", uz: "Pishloq", emoji: "🧀" },
        { audio: "Cake", uz: "Tort", emoji: "🎂" },
        { audio: "Table", uz: "Stol", emoji: "🪵" }
      ]
    },
    {
      stage: 6,
      title: "Rang + Buyum birikmalari",
      icon: "🎨",
      items: [
        { audio: "A red apple", uz: "Qizil olma", emoji: "🍎" },
        { audio: "A blue car", uz: "Ko'k mashina", emoji: "🚗" },
        { audio: "A green book", uz: "Yashil kitob", emoji: "📗" },
        { audio: "A yellow sun", uz: "Sariq quyosh", emoji: "☀️" },
        { audio: "A black cat", uz: "Qora mushuk", emoji: "🐈‍⬛" },
        { audio: "A white dog", uz: "Oq kuchuk", emoji: "🐶" },
        { audio: "A brown bear", uz: "Jigarrang ayiq", emoji: "🐻" },
        { audio: "A pink bag", uz: "Pushti sumka", emoji: "🎒" },
        { audio: "A red ball", uz: "Qizil to'p", emoji: "⚽" },
        { audio: "A green tree", uz: "Yashil daraxt", emoji: "🌳" }
      ]
    },
    {
      stage: 7,
      title: "Son + Hayvon birikmalari",
      icon: "🔢",
      items: [
        { audio: "Three cats", uz: "Uchta mushuk", emoji: "🐱" },
        { audio: "Five dogs", uz: "Beshta kuchuk", emoji: "🐶" },
        { audio: "Two birds", uz: "Ikkita qush", emoji: "🐦" },
        { audio: "Four fish", uz: "To'rtta baliq", emoji: "🐟" },
        { audio: "Six horses", uz: "Oltita ot", emoji: "🐴" },
        { audio: "Two lions", uz: "Ikkita sher", emoji: "🦁" },
        { audio: "Three ducks", uz: "Uchta o'rdak", emoji: "🦆" },
        { audio: "Five cows", uz: "Beshta sigir", emoji: "🐮" },
        { audio: "Seven sheep", uz: "Yettita qo'y", emoji: "🐑" },
        { audio: "Two rabbits", uz: "Ikkita quyon", emoji: "🐰" }
      ]
    },
    {
      stage: 8,
      title: "Sifatlar va Tasvirlar",
      icon: "✨",
      items: [
        { audio: "A big elephant", uz: "Katta fil", emoji: "🐘" },
        { audio: "A small mouse", uz: "Kichik sichqon", emoji: "🐁" },
        { audio: "A happy boy", uz: "Xursand bola", emoji: "👦" },
        { audio: "A sad girl", uz: "Xafa qiz", emoji: "👧" },
        { audio: "A fast car", uz: "Tez mashina", emoji: "🏎️" },
        { audio: "A sweet cake", uz: "Shirin tort", emoji: "🍰" },
        { audio: "A tall giraffe", uz: "Baland jirafa", emoji: "🦒" },
        { audio: "A cold ice cream", uz: "Sovuq muzqaymoq", emoji: "🍦" },
        { audio: "A clean room", uz: "Toza xona", emoji: "🧹" },
        { audio: "A cute cat", uz: "Yoqimtoy mushuk", emoji: "🐱" }
      ]
    },
    {
      stage: 9,
      title: "Qisqa gaplar",
      icon: "💬",
      items: [
        { audio: "I like milk", uz: "Men sutni yaxshi ko'raman", emoji: "🥛" },
        { audio: "I have a dog", uz: "Menda kuchuk bor", emoji: "🐶" },
        { audio: "She is my mum", uz: "U mening onam", emoji: "👩" },
        { audio: "This is my bag", uz: "Bu mening sumkam", emoji: "🎒" },
        { audio: "I can run", uz: "Men yugura olaman", emoji: "🏃" },
        { audio: "It is a cat", uz: "Bu mushuk", emoji: "🐱" },
        { audio: "He is my brother", uz: "U mening akam", emoji: "👦" },
        { audio: "I love my family", uz: "Men oilamni yaxshi ko'raman", emoji: "❤️" },
        { audio: "I can swim", uz: "Men suza olaman", emoji: "🏊" },
        { audio: "This is a book", uz: "Bu kitob", emoji: "📖" }
      ]
    },
    {
      stage: 10,
      title: "Super Audio Final",
      icon: "🏆",
      items: [
        { audio: "A green tree", uz: "Yashil daraxt", emoji: "🌳" },
        { audio: "I have a red car", uz: "Menda qizil mashina bor", emoji: "🚗" },
        { audio: "She is a teacher", uz: "U o'qituvchi", emoji: "👩‍🏫" },
        { audio: "Three yellow bananas", uz: "Uchta sariq banan", emoji: "🍌" },
        { audio: "A happy family", uz: "Baxtli oila", emoji: "👨‍👩‍👧‍👦" },
        { audio: "The cat is in the box", uz: "Mushuk quti ichida", emoji: "📦" },
        { audio: "I can jump high", uz: "Men baland sakray olaman", emoji: "🦘" },
        { audio: "A big brown bear", uz: "Katta jigarrang ayiq", emoji: "🐻" },
        { audio: "This is my school", uz: "Bu mening maktabim", emoji: "🏫" },
        { audio: "Good morning, friend", uz: "Xayrli tong, do'stim", emoji: "🌅" }
      ]
    }
  ],

  // 3.3 🧩 SO'Z TERISH (Spelling — Harflardan yasash) — 10 ta Etap
  spelling: [
    {
      stage: 1,
      title: "3 harfli hayvonlar",
      icon: "🐱",
      items: [
        { word: "CAT", uz: "Mushuk", emoji: "🐱" },
        { word: "DOG", uz: "Kuchuk", emoji: "🐶" },
        { word: "COW", uz: "Sigir", emoji: "🐮" },
        { word: "PIG", uz: "Cho'chqa", emoji: "🐷" },
        { word: "HEN", uz: "Tovuq", emoji: "🐔" },
        { word: "FOX", uz: "Tulki", emoji: "🦊" },
        { word: "BEE", uz: "Ari", emoji: "🐝" },
        { word: "ANT", uz: "Chumoli", emoji: "🐜" },
        { word: "BAT", uz: "Ko'rshapalak", emoji: "🦇" },
        { word: "RAT", uz: "Kalamush", emoji: "🐀" }
      ]
    },
    {
      stage: 2,
      title: "3 harfli buyum va sonlar",
      icon: "📦",
      items: [
        { word: "ONE", uz: "Bir (1)", emoji: "1️⃣" },
        { word: "TWO", uz: "Ikki (2)", emoji: "2️⃣" },
        { word: "SIX", uz: "Olti (6)", emoji: "6️⃣" },
        { word: "TEN", uz: "O'n (10)", emoji: "🔟" },
        { word: "PEN", uz: "Ruchka", emoji: "🖊️" },
        { word: "BAG", uz: "Sumka", emoji: "🎒" },
        { word: "BED", uz: "Karavot", emoji: "🛏️" },
        { word: "CAR", uz: "Mashina", emoji: "🚗" },
        { word: "BUS", uz: "Avtobus", emoji: "🚌" },
        { word: "SUN", uz: "Quyosh", emoji: "☀️" }
      ]
    },
    {
      stage: 3,
      title: "3–4 harfli tana va oila",
      icon: "👀",
      items: [
        { word: "EYE", uz: "Ko'z", emoji: "👁️" },
        { word: "EAR", uz: "Quloq", emoji: "👂" },
        { word: "LEG", uz: "Oyoq", emoji: "🦵" },
        { word: "ARM", uz: "Qo'l (bilak)", emoji: "💪" },
        { word: "NOSE", uz: "Burun", emoji: "👃" },
        { word: "HAND", uz: "Qo'l (kaft)", emoji: "✋" },
        { word: "HEAD", uz: "Bosh", emoji: "🗣️" },
        { word: "FACE", uz: "Yuz", emoji: "😀" },
        { word: "MUM", uz: "Ona", emoji: "👩" },
        { word: "DAD", uz: "Ota", emoji: "👨" }
      ]
    },
    {
      stage: 4,
      title: "4 harfli so'zlar - 1",
      icon: "📖",
      items: [
        { word: "BOOK", uz: "Kitob", emoji: "📖" },
        { word: "DESK", uz: "Parta", emoji: "🪑" },
        { word: "DOOR", uz: "Eshik", emoji: "🚪" },
        { word: "MILK", uz: "Sut", emoji: "🥛" },
        { word: "CAKE", uz: "Tort", emoji: "🎂" },
        { word: "FISH", uz: "Baliq", emoji: "🐟" },
        { word: "DUCK", uz: "O'rdak", emoji: "🦆" },
        { word: "BIRD", uz: "Qush", emoji: "🐦" },
        { word: "LION", uz: "Sher", emoji: "🦁" },
        { word: "BEAR", uz: "Ayiq", emoji: "🐻" }
      ]
    },
    {
      stage: 5,
      title: "4 harfli rang va fe'llar",
      icon: "🎨",
      items: [
        { word: "BLUE", uz: "Ko'k", emoji: "🔵" },
        { word: "PINK", uz: "Pushti", emoji: "🌸" },
        { word: "GRAY", uz: "Kulrang", emoji: "🔘" },
        { word: "FIVE", uz: "Besh (5)", emoji: "5️⃣" },
        { word: "FOUR", uz: "To'rt (4)", emoji: "4️⃣" },
        { word: "NINE", uz: "To'qqiz (9)", emoji: "9️⃣" },
        { word: "JUMP", uz: "Sakramoq", emoji: "🦘" },
        { word: "SWIM", uz: "Suzmoq", emoji: "🏊" },
        { word: "PLAY", uz: "O'ynamoq", emoji: "⚽" },
        { word: "READ", uz: "O'qimoq", emoji: "📖" }
      ]
    },
    {
      stage: 6,
      title: "5 harfli meva va ovqatlar",
      icon: "🍎",
      items: [
        { word: "APPLE", uz: "Olma", emoji: "🍎" },
        { word: "BREAD", uz: "Non", emoji: "🍞" },
        { word: "WATER", uz: "Suv", emoji: "💧" },
        { word: "LEMON", uz: "Limon", emoji: "🍋" },
        { word: "MELON", uz: "Qovun", emoji: "🍈" },
        { word: "PIZZA", uz: "Pitsa", emoji: "🍕" },
        { word: "JUICE", uz: "Sharbat", emoji: "🧃" },
        { word: "SWEET", uz: "Shirinlik", emoji: "🍬" },
        { word: "LUNCH", uz: "Tushlik", emoji: "🍱" },
        { word: "SUGAR", uz: "Shakar", emoji: "🧂" }
      ]
    },
    {
      stage: 7,
      title: "5 harfli rang va sonlar",
      icon: "🟢",
      items: [
        { word: "GREEN", uz: "Yashil", emoji: "🟢" },
        { word: "WHITE", uz: "Oq", emoji: "⚪" },
        { word: "BLACK", uz: "Qora", emoji: "⚫" },
        { word: "BROWN", uz: "Jigarrang", emoji: "🟤" },
        { word: "THREE", uz: "Uch (3)", emoji: "3️⃣" },
        { word: "SEVEN", uz: "Yetti (7)", emoji: "7️⃣" },
        { word: "EIGHT", uz: "Sakkiz (8)", emoji: "8️⃣" },
        { word: "TIGER", uz: "Yo'lbars", emoji: "🐯" },
        { word: "HORSE", uz: "Ot", emoji: "🐴" },
        { word: "SHEEP", uz: "Qo'y", emoji: "🐑" }
      ]
    },
    {
      stage: 8,
      title: "5–6 harfli maktab va uy",
      icon: "✏️",
      items: [
        { word: "PENCIL", uz: "Qalam", emoji: "✏️" },
        { word: "RULER", uz: "Chizg'ich", emoji: "📏" },
        { word: "RUBBER", uz: "O'chirg'ich", emoji: "🧽" },
        { word: "SCHOOL", uz: "Maktab", emoji: "🏫" },
        { word: "WINDOW", uz: "Deraza", emoji: "🪟" },
        { word: "TABLE", uz: "Stol", emoji: "🪵" },
        { word: "CHAIR", uz: "Stul", emoji: "🪑" },
        { word: "HOUSE", uz: "Uy", emoji: "🏡" },
        { word: "GARDEN", uz: "Bog'", emoji: "🌳" },
        { word: "SOFA", uz: "Divan", emoji: "🛋️" }
      ]
    },
    {
      stage: 9,
      title: "6 harfli oila va hayvonlar",
      icon: "👨‍👩‍👧‍👦",
      items: [
        { word: "MOTHER", uz: "Ona", emoji: "👩" },
        { word: "FATHER", uz: "Ota", emoji: "👨" },
        { word: "SISTER", uz: "Opa / Singil", emoji: "👧" },
        { word: "MONKEY", uz: "Maymun", emoji: "🐒" },
        { word: "RABBIT", uz: "Quyon", emoji: "🐰" },
        { word: "YELLOW", uz: "Sariq", emoji: "🟡" },
        { word: "ORANGE", uz: "Apelsin / Olovrang", emoji: "🍊" },
        { word: "PURPLE", uz: "Binafsha", emoji: "🟣" },
        { word: "TWELVE", uz: "O'n ikki (12)", emoji: "🔢" },
        { word: "TWENTY", uz: "Yigirma (20)", emoji: "🔢" }
      ]
    },
    {
      stage: 10,
      title: "Chempion so'zlar",
      icon: "🏆",
      items: [
        { word: "BROTHER", uz: "Aka / Uka", emoji: "👦" },
        { word: "GRANDMA", uz: "Buvi", emoji: "👵" },
        { word: "GRANDPA", uz: "Bobo", emoji: "👴" },
        { word: "TEACHER", uz: "O'qituvchi", emoji: "👩‍🏫" },
        { word: "ELEPHANT", uz: "Fil", emoji: "🐘" },
        { word: "GIRAFFE", uz: "Jirafa", emoji: "🦒" },
        { word: "MORNING", uz: "Tong", emoji: "🌅" },
        { word: "BEDROOM", uz: "Yotoqxona", emoji: "🛏️" },
        { word: "KITCHEN", uz: "Oshxona", emoji: "🍳" },
        { word: "CHICKEN", uz: "Jo'ja / Tovuq go'shti", emoji: "🍗" }
      ]
    }
  ],

  // 3.4 📝 GRAMMATIKA (2-sinf qoidalari) — 10 ta Etap
  grammar: [
    {
      stage: 1,
      title: "a yoki an artikli",
      icon: "🅰️",
      items: [
        { sentence: "This is [ ___ ] apple.", uz: "Bu olma.", correct: "an", options: ["a", "an"], rule: "Unli harf (a, e, i, o, u) bilan boshlangan so'zlar oldidan 'an' ishlatiladi!" },
        { sentence: "I have [ ___ ] book.", uz: "Menda kitob bor.", correct: "a", options: ["a", "an"], rule: "Undosh harf bilan boshlangan so'zlar oldidan 'a' ishlatiladi!" },
        { sentence: "It is [ ___ ] orange.", uz: "Bu apelsin.", correct: "an", options: ["a", "an"], rule: "Unli harf (o) oldidan 'an' ishlatiladi!" },
        { sentence: "She has [ ___ ] cat.", uz: "Unda mushuk bor.", correct: "a", options: ["a", "an"], rule: "Undosh harf (c) oldidan 'a' ishlatiladi!" },
        { sentence: "Look at [ ___ ] elephant.", uz: "Filga qara.", correct: "an", options: ["a", "an"], rule: "Unli harf (e) oldidan 'an' ishlatiladi!" },
        { sentence: "I see [ ___ ] dog.", uz: "Men kuchukni ko'ryapman.", correct: "a", options: ["a", "an"], rule: "Undosh harf (d) oldidan 'a' ishlatiladi!" },
        { sentence: "Give me [ ___ ] egg.", uz: "Menga tuxum ber.", correct: "an", options: ["a", "an"], rule: "Unli harf (e) oldidan 'an' ishlatiladi!" },
        { sentence: "He is [ ___ ] boy.", uz: "U o'g'il bola.", correct: "a", options: ["a", "an"], rule: "Undosh harf (b) oldidan 'a' ishlatiladi!" },
        { sentence: "I want [ ___ ] ice cream.", uz: "Men muzqaymoq xohlayman.", correct: "an", options: ["a", "an"], rule: "Unli harf (i) oldidan 'an' ishlatiladi!" },
        { sentence: "This is [ ___ ] pen.", uz: "Bu ruchka.", correct: "a", options: ["a", "an"], rule: "Undosh harf (p) oldidan 'a' ishlatiladi!" }
      ]
    },
    {
      stage: 2,
      title: "am / is / are (1-qism)",
      icon: "👤",
      items: [
        { sentence: "I [ ___ ] a pupil.", uz: "Men o'quvchiman.", correct: "am", options: ["am", "is", "are"], rule: "I (Men) bilan doim 'am' ishlatiladi!" },
        { sentence: "He [ ___ ] a boy.", uz: "U o'g'il bola.", correct: "is", options: ["am", "is", "are"], rule: "He (U o'g'il bola) bilan 'is' ishlatiladi!" },
        { sentence: "She [ ___ ] my sister.", uz: "U mening singlim.", correct: "is", options: ["am", "is", "are"], rule: "She (U qiz bola) bilan 'is' ishlatiladi!" },
        { sentence: "I [ ___ ] 8 years old.", uz: "Men 8 yoshdaman.", correct: "am", options: ["am", "is", "are"], rule: "I bilan doim 'am' ishlatiladi!" },
        { sentence: "He [ ___ ] my brother.", uz: "U mening akam.", correct: "is", options: ["am", "is", "are"], rule: "He bilan 'is' ishlatiladi!" },
        { sentence: "She [ ___ ] a doctor.", uz: "U shifokor.", correct: "is", options: ["am", "is", "are"], rule: "She bilan 'is' ishlatiladi!" },
        { sentence: "I [ ___ ] happy today.", uz: "Men bugun xursandman.", correct: "am", options: ["am", "is", "are"], rule: "I bilan doim 'am' ishlatiladi!" },
        { sentence: "He [ ___ ] strong.", uz: "U kuchli.", correct: "is", options: ["am", "is", "are"], rule: "He bilan 'is' ishlatiladi!" },
        { sentence: "She [ ___ ] my friend.", uz: "U mening do'stim.", correct: "is", options: ["am", "is", "are"], rule: "She bilan 'is' ishlatiladi!" },
        { sentence: "I [ ___ ] at home.", uz: "Men uydaman.", correct: "am", options: ["am", "is", "are"], rule: "I bilan doim 'am' ishlatiladi!" }
      ]
    },
    {
      stage: 3,
      title: "am / is / are (2-qism: Ko'plik)",
      icon: "👥",
      items: [
        { sentence: "We [ ___ ] good friends.", uz: "Biz yaxshi do'stlarmiz.", correct: "are", options: ["am", "is", "are"], rule: "We (Biz) bilan 'are' ishlatiladi!" },
        { sentence: "They [ ___ ] cats.", uz: "Ular mushuklar.", correct: "are", options: ["am", "is", "are"], rule: "They (Ular) bilan 'are' ishlatiladi!" },
        { sentence: "It [ ___ ] a dog.", uz: "Bu kuchuk.", correct: "is", options: ["am", "is", "are"], rule: "It (U hayvon/buyum) bilan 'is' ishlatiladi!" },
        { sentence: "You [ ___ ] a smart boy.", uz: "Sen aqlli bolasan.", correct: "are", options: ["am", "is", "are"], rule: "You (Sen/Siz) bilan 'are' ishlatiladi!" },
        { sentence: "We [ ___ ] pupils.", uz: "Biz o'quvchilarmiz.", correct: "are", options: ["am", "is", "are"], rule: "We bilan 'are' ishlatiladi!" },
        { sentence: "It [ ___ ] a red ball.", uz: "Bu qizil to'p.", correct: "is", options: ["am", "is", "are"], rule: "It bilan 'is' ishlatiladi!" },
        { sentence: "They [ ___ ] in the garden.", uz: "Ular bog'dalar.", correct: "are", options: ["am", "is", "are"], rule: "They bilan 'are' ishlatiladi!" },
        { sentence: "It [ ___ ] a pencil.", uz: "Bu qalam.", correct: "is", options: ["am", "is", "are"], rule: "It bilan 'is' ishlatiladi!" },
        { sentence: "You [ ___ ] welcome.", uz: "Arzimaydi.", correct: "are", options: ["am", "is", "are"], rule: "You bilan 'are' ishlatiladi!" },
        { sentence: "They [ ___ ] brothers.", uz: "Ular aka-ukalar.", correct: "are", options: ["am", "is", "are"], rule: "They bilan 'are' ishlatiladi!" }
      ]
    },
    {
      stage: 4,
      title: "Ko'plik qo'shimchasi: -s / -es",
      icon: "➕",
      items: [
        { sentence: "One cat -> Three [ ___ ].", uz: "Bitta mushuk -> Uchta mushuklar.", correct: "cats", options: ["cats", "cat"], rule: "Ko'plikda so'z oxiriga '-s' qo'shiladi!" },
        { sentence: "One box -> Two [ ___ ].", uz: "Bitta quti -> Ikkita qutilar.", correct: "boxes", options: ["boxes", "boxs"], rule: "-x bilan tugasa '-es' qo'shiladi!" },
        { sentence: "One dog -> Five [ ___ ].", uz: "Bitta kuchuk -> Beshta kuchuklar.", correct: "dogs", options: ["dogs", "dog"], rule: "Ko'plikda '-s' qo'shiladi!" },
        { sentence: "One bus -> Four [ ___ ].", uz: "Bitta avtobus -> To'rtta avtobuslar.", correct: "buses", options: ["buses", "bus"], rule: "-s bilan tugasa '-es' qo'shiladi!" },
        { sentence: "One apple -> Six [ ___ ].", uz: "Bitta olma -> Oltita olmalar.", correct: "apples", options: ["apples", "apple"], rule: "Ko'plikda '-s' qo'shiladi!" },
        { sentence: "One fox -> Two [ ___ ].", uz: "Bitta tulki -> Ikkita tulkilar.", correct: "foxes", options: ["foxes", "fox"], rule: "-x bilan tugasa '-es' qo'shiladi!" },
        { sentence: "One book -> Ten [ ___ ].", uz: "Bitta kitob -> O'nta kitoblar.", correct: "books", options: ["books", "book"], rule: "Ko'plikda '-s' qo'shiladi!" },
        { sentence: "One dish -> Three [ ___ ].", uz: "Bitta idish -> Uchta idishlar.", correct: "dishes", options: ["dishes", "dishs"], rule: "-sh bilan tugasa '-es' qo'shiladi!" },
        { sentence: "One boy -> Two [ ___ ].", uz: "Bitta o'g'il bola -> Ikkita o'g'il bolalar.", correct: "boys", options: ["boys", "boy"], rule: "Ko'plikda '-s' qo'shiladi!" },
        { sentence: "One pen -> Seven [ ___ ].", uz: "Bitta ruchka -> Yettita ruchkalar.", correct: "pens", options: ["pens", "pen"], rule: "Ko'plikda '-s' qo'shiladi!" }
      ]
    },
    {
      stage: 5,
      title: "have yoki has (Bor bo'lmoq)",
      icon: "🤝",
      items: [
        { sentence: "I [ ___ ] a red ball.", uz: "Menda qizil to'p bor.", correct: "have", options: ["have", "has"], rule: "I / You / We / They bilan 'have' ishlatiladi!" },
        { sentence: "She [ ___ ] a nice doll.", uz: "Unda chiroyli qo'g'irchoq bor.", correct: "has", options: ["have", "has"], rule: "He / She / It bilan 'has' ishlatiladi!" },
        { sentence: "He [ ___ ] a new bike.", uz: "Unda yangi velosiped bor.", correct: "has", options: ["have", "has"], rule: "He bilan 'has' ishlatiladi!" },
        { sentence: "We [ ___ ] a big house.", uz: "Bizda katta uy bor.", correct: "have", options: ["have", "has"], rule: "We bilan 'have' ishlatiladi!" },
        { sentence: "They [ ___ ] two dogs.", uz: "Ularda ikkita kuchuk bor.", correct: "have", options: ["have", "has"], rule: "They bilan 'have' ishlatiladi!" },
        { sentence: "A cat [ ___ ] four legs.", uz: "Mushukda to'rtta oyoq bor.", correct: "has", options: ["have", "has"], rule: "It (bitta hayvon) bilan 'has' ishlatiladi!" },
        { sentence: "You [ ___ ] a green pen.", uz: "Senda yashil ruchka bor.", correct: "have", options: ["have", "has"], rule: "You bilan 'have' ishlatiladi!" },
        { sentence: "She [ ___ ] an apple.", uz: "Unda olma bor.", correct: "has", options: ["have", "has"], rule: "She bilan 'has' ishlatiladi!" },
        { sentence: "I [ ___ ] a brother.", uz: "Mening akam bor.", correct: "have", options: ["have", "has"], rule: "I bilan 'have' ishlatiladi!" },
        { sentence: "We [ ___ ] many books.", uz: "Bizda ko'p kitoblar bor.", correct: "have", options: ["have", "has"], rule: "We bilan 'have' ishlatiladi!" }
      ]
    },
    {
      stage: 6,
      title: "can yoki can't (Qila olmoq)",
      icon: "⚡",
      items: [
        { sentence: "A bird [ ___ ] fly.", uz: "Qush ucha oladi.", correct: "can", options: ["can", "can't"], rule: "Qush ucha oladi (can)!" },
        { sentence: "A fish [ ___ ] run.", uz: "Baliq yugura olmaydi.", correct: "can't", options: ["can", "can't"], rule: "Baliq yugura olmaydi (can't)!" },
        { sentence: "A monkey [ ___ ] climb a tree.", uz: "Maymun daraxtga chiqa oladi.", correct: "can", options: ["can", "can't"], rule: "Maymun chiqa oladi (can)!" },
        { sentence: "A cat [ ___ ] fly in the sky.", uz: "Mushuk osmonda ucha olmaydi.", correct: "can't", options: ["can", "can't"], rule: "Mushuk ucha olmaydi (can't)!" },
        { sentence: "A dog [ ___ ] swim in water.", uz: "Kuchuk suvda suza oladi.", correct: "can", options: ["can", "can't"], rule: "Kuchuk suza oladi (can)!" },
        { sentence: "A frog [ ___ ] jump high.", uz: "Qurbaqa baland sakray oladi.", correct: "can", options: ["can", "can't"], rule: "Qurbaqa sakray oladi (can)!" },
        { sentence: "A baby [ ___ ] drive a car.", uz: "Chaqaloq mashina hayday olmaydi.", correct: "can't", options: ["can", "can't"], rule: "Chaqaloq mashina hayday olmaydi (can't)!" },
        { sentence: "A pupil [ ___ ] read books.", uz: "O'quvchi kitob o'qiy oladi.", correct: "can", options: ["can", "can't"], rule: "O'quvchi o'qiy oladi (can)!" },
        { sentence: "A snake [ ___ ] walk.", uz: "Ilon yura olmaydi.", correct: "can't", options: ["can", "can't"], rule: "Ilonning oyog'i yo'q, yura olmaydi (can't)!" },
        { sentence: "An elephant [ ___ ] fly.", uz: "Fil ucha olmaydi.", correct: "can't", options: ["can", "can't"], rule: "Fil ucha olmaydi (can't)!" }
      ]
    },
    {
      stage: 7,
      title: "This is yoki These are",
      icon: "👉",
      items: [
        { sentence: "[ ___ ] is my pen.", uz: "Bu mening ruchkam.", correct: "This", options: ["This", "These"], rule: "Bitta buyum (birlik) uchun 'This is' ishlatiladi!" },
        { sentence: "[ ___ ] are my books.", uz: "Bular mening kitoblarim.", correct: "These", options: ["This", "These"], rule: "Bir nechta buyum (ko'plik) uchun 'These are' ishlatiladi!" },
        { sentence: "[ ___ ] is an apple.", uz: "Bu olma.", correct: "This", options: ["This", "These"], rule: "Bitta olma uchun 'This is' ishlatiladi!" },
        { sentence: "[ ___ ] are two cats.", uz: "Bular ikkita mushuk.", correct: "These", options: ["This", "These"], rule: "Ko'plik uchun 'These are' ishlatiladi!" },
        { sentence: "[ ___ ] is my bag.", uz: "Bu mening sumkam.", correct: "This", options: ["This", "These"], rule: "Birlik uchun 'This is' ishlatiladi!" },
        { sentence: "[ ___ ] are five pencils.", uz: "Bular beshta qalam.", correct: "These", options: ["This", "These"], rule: "Ko'plik uchun 'These are' ishlatiladi!" },
        { sentence: "[ ___ ] is my teacher.", uz: "Bu mening o'qituvchim.", correct: "This", options: ["This", "These"], rule: "Birlik uchun 'This is' ishlatiladi!" },
        { sentence: "[ ___ ] are my friends.", uz: "Bular mening do'stlarim.", correct: "These", options: ["This", "These"], rule: "Ko'plik uchun 'These are' ishlatiladi!" },
        { sentence: "[ ___ ] is a green chair.", uz: "Bu yashil stul.", correct: "This", options: ["This", "These"], rule: "Birlik uchun 'This is' ishlatiladi!" },
        { sentence: "[ ___ ] are ten stars.", uz: "Bular o'nta yulduz.", correct: "These", options: ["This", "These"], rule: "Ko'plik uchun 'These are' ishlatiladi!" }
      ]
    },
    {
      stage: 8,
      title: "in / on / under (Predloglar)",
      icon: "📦",
      items: [
        { sentence: "The cat is [ ___ ] the box. (ichida)", uz: "Mushuk quti ichida.", correct: "in", options: ["in", "on", "under"], rule: "'in' — ichida degani!" },
        { sentence: "The book is [ ___ ] the table. (ustida)", uz: "Kitob stol ustida.", correct: "on", options: ["in", "on", "under"], rule: "'on' — ustida degani!" },
        { sentence: "The dog is [ ___ ] the bed. (tagida)", uz: "Kuchuk karavot tagida.", correct: "under", options: ["in", "on", "under"], rule: "'under' — tagida degani!" },
        { sentence: "The pencil is [ ___ ] the bag. (ichida)", uz: "Qalam sumka ichida.", correct: "in", options: ["in", "on", "under"], rule: "'in' — ichida degani!" },
        { sentence: "The apple is [ ___ ] the plate. (ustida)", uz: "Olma tarelka ustida.", correct: "on", options: ["in", "on", "under"], rule: "'on' — ustida degani!" },
        { sentence: "The ball is [ ___ ] the chair. (tagida)", uz: "To'p stul tagida.", correct: "under", options: ["in", "on", "under"], rule: "'under' — tagida degani!" },
        { sentence: "The fish is [ ___ ] the water. (ichida)", uz: "Baliq suv ichida.", correct: "in", options: ["in", "on", "under"], rule: "'in' — ichida degani!" },
        { sentence: "The cup is [ ___ ] the desk. (ustida)", uz: "Finjon parta ustida.", correct: "on", options: ["in", "on", "under"], rule: "'on' — ustida degani!" },
        { sentence: "The shoes are [ ___ ] the table. (tagida)", uz: "Poyabzal stol tagida.", correct: "under", options: ["in", "on", "under"], rule: "'under' — tagida degani!" },
        { sentence: "The toy is [ ___ ] the box. (ichida)", uz: "O'yinchoq quti ichida.", correct: "in", options: ["in", "on", "under"], rule: "'in' — ichida degani!" }
      ]
    },
    {
      stage: 9,
      title: "He / She / It / They (Olmoshlar)",
      icon: "👥",
      items: [
        { sentence: "Aziz is a boy. [ ___ ] is 8 years old.", uz: "Aziz o'g'il bola. U 8 yoshda.", correct: "He", options: ["He", "She", "It"], rule: "O'g'il bola (erkak) uchun 'He' ishlatiladi!" },
        { sentence: "Madina is a girl. [ ___ ] is my sister.", uz: "Madina qiz bola. U mening singlim.", correct: "She", options: ["He", "She", "It"], rule: "Qiz bola (ayol) uchun 'She' ishlatiladi!" },
        { sentence: "The dog is small. [ ___ ] is white.", uz: "Kuchuk kichkina. U oq rangda.", correct: "It", options: ["He", "She", "It"], rule: "Hayvon va jonsiz buyumlar uchun 'It' ishlatiladi!" },
        { sentence: "Ali and Vali are pupils. [ ___ ] are friends.", uz: "Ali va Vali o'quvchilar. Ular do'stlar.", correct: "They", options: ["He", "They", "We"], rule: "Ko'plik (Ular) uchun 'They' ishlatiladi!" },
        { sentence: "My father is kind. [ ___ ] is a doctor.", uz: "Mening dadam mehribon. U shifokor.", correct: "He", options: ["He", "She", "It"], rule: "Ota (erkak) uchun 'He' ishlatiladi!" },
        { sentence: "My mother is sweet. [ ___ ] is a teacher.", uz: "Mening onam yoqimtoy. U o'qituvchi.", correct: "She", options: ["He", "She", "It"], rule: "Ona (ayol) uchun 'She' ishlatiladi!" },
        { sentence: "The cat is black. [ ___ ] can jump.", uz: "Mushuk qora. U sakray oladi.", correct: "It", options: ["He", "She", "It"], rule: "Hayvon uchun 'It' ishlatiladi!" },
        { sentence: "The boys are happy. [ ___ ] play football.", uz: "Bolalar xursand. Ular futbol o'ynashyapti.", correct: "They", options: ["He", "They", "It"], rule: "Ko'plik uchun 'They' ishlatiladi!" },
        { sentence: "My sister is cute. [ ___ ] has a doll.", uz: "Mening singlim yoqimtoy. Unda qo'g'irchoq bor.", correct: "She", options: ["He", "She", "It"], rule: "Singil uchun 'She' ishlatiladi!" },
        { sentence: "The book is green. [ ___ ] is on the desk.", uz: "Kitob yashil. U parta ustida.", correct: "It", options: ["He", "She", "It"], rule: "Buyum uchun 'It' ishlatiladi!" }
      ]
    },
    {
      stage: 10,
      title: "Umumiy Grammatika Super Test",
      icon: "🏆",
      items: [
        { sentence: "I [ ___ ] an apple.", uz: "Menda olma bor.", correct: "have", options: ["have", "has", "am"], rule: "I bilan 'have' ishlatiladi!" },
        { sentence: "She [ ___ ] a pupil.", uz: "U o'quvchi.", correct: "is", options: ["am", "is", "are"], rule: "She bilan 'is' ishlatiladi!" },
        { sentence: "Look at [ ___ ] orange.", uz: "Apelsinga qara.", correct: "an", options: ["a", "an"], rule: "Unli 'o' oldidan 'an' ishlatiladi!" },
        { sentence: "We [ ___ ] happy friends.", uz: "Biz baxtli do'stlarmiz.", correct: "are", options: ["am", "is", "are"], rule: "We bilan 'are' ishlatiladi!" },
        { sentence: "A bird [ ___ ] fly.", uz: "Qush ucha oladi.", correct: "can", options: ["can", "can't"], rule: "Qush ucha oladi (can)!" },
        { sentence: "The pen is [ ___ ] the desk. (ustida)", uz: "Ruchka parta ustida.", correct: "on", options: ["in", "on", "under"], rule: "'on' — ustida degani!" },
        { sentence: "One cat -> Two [ ___ ].", uz: "Bitta mushuk -> Ikkita mushuklar.", correct: "cats", options: ["cats", "cat"], rule: "Ko'plikda '-s' qo'shiladi!" },
        { sentence: "He is a boy. [ ___ ] is strong.", uz: "U o'g'il bola. U kuchli.", correct: "He", options: ["He", "She", "It"], rule: "O'g'il bola uchun 'He' ishlatiladi!" },
        { sentence: "[ ___ ] are my books.", uz: "Bular mening kitoblarim.", correct: "These", options: ["This", "These"], rule: "Ko'plik uchun 'These are' ishlatiladi!" },
        { sentence: "He [ ___ ] a red car.", uz: "Unda qizil mashina bor.", correct: "has", options: ["have", "has"], rule: "He bilan 'has' ishlatiladi!" }
      ]
    }
  ]
};

module.exports = { ENGLISH_DATA };
