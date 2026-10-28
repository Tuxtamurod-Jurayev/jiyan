// Test script to verify all English 40 stages data
const ENGLISH_STAGES_DATA = {
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
  ]
};

console.log("Vocabulary stages defined:", ENGLISH_STAGES_DATA.vocabulary.length);
ENGLISH_STAGES_DATA.vocabulary.forEach(v => {
  console.log(`  ✓ Stage ${v.stage}: ${v.title} (${v.items.length} words)`);
});
