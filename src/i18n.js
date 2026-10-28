// src/i18n.js - Bilingual Dictionary (Uzbek & Russian)
const I18N = {
  uz: {
    splashQuotes: [
      "Bugun sen albatta chempion bo'lasan! 🚀",
      "Matematika va Ingliz tili — sen kabi aql egalari uchun! 🧠",
      "Har bir to'g'ri javob seni yangi cho'qqilarga olib chiqadi! ⛰️",
      "Savarbek, bugun yangi rekordlar o'rnatish vaqti keldi! ⭐",
      "Qiyinchiliklardan qo'rqma, sen barchasini uddalaysan! 🦁",
      "Aqlli bolalar har kuni shug'ullanadilar! 📚",
      "Bilim — bu eng katta kuch, faqat oldinga! ⚡",
      "Katta orzular sari kichik qadamlar bilan! 🌟",
      "O'rganishdan to'xtama, sen eng zo'risan! 🏆",
      "Har bir xato — bu yangi tajriba, taslim bo'lma! 💡",
      "Bugun yangi oltin yulduzlarni yig'amiz! ✨",
      "G'alabalar seni kutmoqda, dovyurak bo'l! 🎯",
      "Aql va intilish bilan hamma narsaga erishsa bo'ladi! 🚀",
      "O'zingga ishon, sen hamma misollarni yecha olasan! 💯",
      "Koinotni zabt etishga tayyormisan? Qani ketdik! 🌌"
    ],
    greeting: "👋 Salom, Savarbek!",
    rank: "2-sinf a'lochisi 🎓",
    bannerTitle: "Katta G'alabalar Sari! 🚀",
    bannerSubtitle: "Matematika va Ingliz tilidan chempion bo'l!",
    subjectsLabel: "O'quv Fanlari",
    
    // Subjects
    mathTitle: "Matematika",
    mathBadge: "40 ta bosqich • 4 ta amal",
    mathOverall: "Umumiy o'zlashtirish:",
    engTitle: "Ingliz tili",
    engBadge: "40 ta bosqich • 4 ta yo'nalish",
    engActive: "Faol 🚀",
    engOverall: "Umumiy o'zlashtirish:",
    
    // Math operations screen
    mathOpsTitle: "Amalni tanla",
    btnBack: "Orqaga",
    opAddTitle: "Qo'shish",
    opAddDesc: "1-xona, 2-xona va o'tishli misollar",
    opSubTitle: "Ayirish",
    opSubDesc: "Qarzsiz va qarz olib ayirish",
    opMulTitle: "Ko'paytirish",
    opMulDesc: "Jadval va 1-xonali songa ko'paytirish",
    opDivTitle: "Bo'lish",
    opDivDesc: "Qoldiqsiz karra jadvali bo'yicha bo'lish",
    stagesCount: "Etaplar:",
    avgScore: "O'rtacha:",
    
    // English categories screen
    engCatsTitle: "Ingliz tili",
    catVocabTitle: "So'z boyligi",
    catVocabDesc: "100+ rasmli va tarjimali so'zlar",
    catListenTitle: "Eshitib topish",
    catListenDesc: "Audio talaffuz orqali to'g'ri so'zni top",
    catSpellTitle: "So'z terish",
    catSpellDesc: "Aralash harflardan to'g'ri so'z yasa",
    catGrammarTitle: "Grammatika",
    catGrammarDesc: "a/an, am/is/are, have/has va qoidalar",
    
    // Stages screen common
    stageLabel: "Etap",
    wordsCount: "ta so'z",
    record: "Rekord:",
    statusNew: "Yangi",
    statusRepeat: "Takrorlash",
    statusGood: "Yaxshi",
    statusGreat: "A'lo",
    statusPerfect: "Mukammal 🏆",
    stageLockedToast: "Avvalgi etapni kamida 70% bajaring! 🔒",
    
    // Quiz screen common
    questionNum: "Savol",
    btnExit: "Chiqish",
    btnCheck: "Tekshirish",
    correctAlert: "To'g'ri! Barakalla! 🎉",
    wrongAlert: "Xato! To'g'ri javob:",
    btnContinue: "Davom etish",
    btnSkip: "O'tkazib yuborish",
    vocabPrompt: "O'zbekcha ma'nosi qaysi?",
    listenPrompt: "So'zni eshiting va tarjimasini toping:",
    listenAgain: "Yana eshitish",
    slowListen: "Sekin",
    spellingPrompt: "Harflarni bosib so'zni yozing:",
    spellingClear: "Tozalash",
    
    // Exit modal
    exitTitle: "O'yindan chiqmoqchimisiz?",
    exitDesc: "Hozirgi natijangiz saqlanmaydi va etap boshidan boshlanadi.",
    btnStay: "Davom etish",
    btnExitConfirm: "Chiqish",
    
    // Result screen
    resultChampion: "Chempionsan, Savarbek! 🏆",
    resultGreat: "Ajoyib natija! 🌟",
    resultGood: "Yaxshi natija! 👍",
    resultTryAgain: "Yana bir bor harakat qil! 💪",
    statCorrect: "To'g'ri javoblar",
    statAccuracy: "O'zlashtirish",
    statStars: "Yig'ilgan yulduzlar",
    newRecordBadge: "YANGI REKORD! 🏆",
    btnRetry: "Qayta ishlash",
    btnNextStage: "Keyingi etap",
    btnBackToStages: "Etaplarga qaytish",
    
    // Settings modal
    settingsTitle: "Sozlamalar",
    langSelectTitle: "Tilni tanlang / Выберите язык:",
    dangerZoneTitle: "Natijalarni tozalash",
    dangerZoneDesc: "Ota-onalar nazorati ostida barcha yulduz va rekordlarni 0 ga tushirish.",
    parentChallenge: "Misolni yeching:",
    btnResetAll: "Barchasini tozalash",
    btnClose: "Yopish",
    resetSuccess: "Barcha natijalar tozalandi! 🧹",
    resetFailed: "Noto'g'ri javob! Natijalar xavfsiz saqlandi 🛡️"
  },

  ru: {
    splashQuotes: [
      "Сегодня ты обязательно станешь чемпионом! 🚀",
      "Математика и английский — для таких умников, как ты! 🧠",
      "Каждый правильный ответ ведёт тебя к новым вершинам! ⛰️",
      "Саварбек, время ставить новые рекорды! ⭐",
      "Не бойся трудностей, у тебя всё получится! 🦁",
      "Умные ребята тренируются каждый день! 📚",
      "Знания — это суперсила, только вперёд! ⚡",
      "Маленькие шаги ведут к большим победам! 🌟",
      "Не переставай учиться, ты лучший! 🏆",
      "Каждая ошибка — это опыт, никогда не сдавайся! 💡",
      "Сегодня мы соберём все золотые звёзды! ✨",
      "Победы ждут тебя, будь смелым! 🎯",
      "С умом и упорством можно достичь всего! 🚀",
      "Верь в себя, ты решишь любые примеры! 💯",
      "Готов покорять космос? Поехали! 🌌"
    ],
    greeting: "👋 Привет, Саварбек!",
    rank: "Отличник 2-го класса 🎓",
    bannerTitle: "К Большим Победам! 🚀",
    bannerSubtitle: "Стань чемпионом по математике и английскому!",
    subjectsLabel: "Учебные Предметы",
    
    // Subjects
    mathTitle: "Математика",
    mathBadge: "40 этапов • 4 действия",
    mathOverall: "Общий результат:",
    engTitle: "Английский язык",
    engBadge: "40 этапов • 4 направления",
    engActive: "Активно 🚀",
    engOverall: "Общий результат:",
    
    // Math operations screen
    mathOpsTitle: "Выбери действие",
    btnBack: "Назад",
    opAddTitle: "Сложение",
    opAddDesc: "Однозначные, двузначные и примеры с переходом",
    opSubTitle: "Вычитание",
    opSubDesc: "Вычитание без перехода и с переходом через десяток",
    opMulTitle: "Умножение",
    opMulDesc: "Таблица умножения и умножение на однозначное",
    opDivTitle: "Деление",
    opDivDesc: "Деление нацело по таблице умножения",
    stagesCount: "Этапы:",
    avgScore: "Средний:",
    
    // English categories screen
    engCatsTitle: "Английский язык",
    catVocabTitle: "Словарный запас",
    catVocabDesc: "100+ слов с картинками и переводом",
    catListenTitle: "Аудирование",
    catListenDesc: "Узнай слово по правильному произношению",
    catSpellTitle: "Собери слово",
    catSpellDesc: "Составь английское слово из букв",
    catGrammarTitle: "Грамматика",
    catGrammarDesc: "a/an, am/is/are, have/has и правила",
    
    // Stages screen common
    stageLabel: "Этап",
    wordsCount: "слов",
    record: "Рекорд:",
    statusNew: "Новый",
    statusRepeat: "Повторить",
    statusGood: "Хорошо",
    statusGreat: "Отлично",
    statusPerfect: "Превосходно 🏆",
    stageLockedToast: "Пройди предыдущий этап хотя бы на 70%! 🔒",
    
    // Quiz screen common
    questionNum: "Вопрос",
    btnExit: "Выход",
    btnCheck: "Проверить",
    correctAlert: "Правильно! Молодец! 🎉",
    wrongAlert: "Ошибка! Правильный ответ:",
    btnContinue: "Продолжить",
    btnSkip: "Пропустить",
    vocabPrompt: "Как переводится на русский?",
    listenPrompt: "Послушай слово и выбери перевод:",
    listenAgain: "Повторить",
    slowListen: "Медленно",
    spellingPrompt: "Нажимай на буквы и собери слово:",
    spellingClear: "Очистить",
    
    // Exit modal
    exitTitle: "Хотите выйти из игры?",
    exitDesc: "Текущий прогресс не сохранится, этап начнется сначала.",
    btnStay: "Продолжить",
    btnExitConfirm: "Выйти",
    
    // Result screen
    resultChampion: "Ты чемпион, Саварбек! 🏆",
    resultGreat: "Отличный результат! 🌟",
    resultGood: "Хороший результат! 👍",
    resultTryAgain: "Попробуй ещё раз! 💪",
    statCorrect: "Правильных ответов",
    statAccuracy: "Освоение",
    statStars: "Собрано звёзд",
    newRecordBadge: "НОВЫЙ РЕКОРД! 🏆",
    btnRetry: "Заново",
    btnNextStage: "Следующий этап",
    btnBackToStages: "К этапам",
    
    // Settings modal
    settingsTitle: "Настройки",
    langSelectTitle: "Выберите язык / Til:",
    dangerZoneTitle: "Сброс результатов",
    dangerZoneDesc: "Родительский контроль: обнуление всех рекордов и звёзд.",
    parentChallenge: "Решите пример:",
    btnResetAll: "Сбросить всё",
    btnClose: "Закрыть",
    resetSuccess: "Все результаты сброшены! 🧹",
    resetFailed: "Неверный ответ! Результаты сохранены 🛡️"
  }
};

module.exports = { I18N };
