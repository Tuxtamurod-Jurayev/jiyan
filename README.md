# 🦁 Savarbek Edu (v1.0 — Matematika)

2-sinf a'lochisi **Savarbek** uchun maxsus ishlab chiqilgan qiziqarli, interaktiv va rag'batlantiruvchi mobil veb-ilova.

---

## 🚀 Qanday ishga tushiriladi?

Ushbu ilova **100% mustaqil (zero external dependencies)** qilib yaratilgan. U ishlashi uchun internet yoki murakkab serverlar o'rnatish shart emas!

### 1-usul: To'g'ridan-to'g'ri ochish (Eng osoni)
* `index.html` faylini istalgan brauzerda (Chrome, Safari, Edge, Firefox, Samsung Internet) ikki marta bosib oching.
* Mobil telefoningizda ham brauzer orqali to'g'ridan-to'g'ri ishlaydi!

### 2-usul: Mahalliy server orqali ochish
Terminalda (PowerShell yoki CMD) ushbu papkaga kiring va:
```bash
npm start
```
yoki
```bash
npx serve .
```

### Matematik algoritmlarni sinovdan o'tkazish (Test):
Barcha 40 ta bosqich generatorlarini tekshirish uchun:
```bash
npm test
```

---

## 📱 Ekranlar va Imkoniyatlar

### 1. `SPLASH_SCREEN` (Kirish va Motivatsiya)
* 🦁 **Shercha maskoti va animatsiyali toj**: Savarbekni kutib oluvchi quvnoq belgi.
* 💬 **16 ta anti-takror motivatsion gaplar**: Har safar kirganda `localStorage` orqali tekshirilib, ketma-ket bir xil gap chiqishi oldi olingan.
* ⏱️ **5 soniyalik progress-bar va hisoblagich**: Silliq animatsiya. Telefon ekrani o'chib qolsa yoki brauzer yashirilsa (`Tab Visibility API`), taymer pauza bo'ladi va qaytib kirganda davom etadi.

### 2. `HOME_SCREEN` (Asosiy Menyu)
* **Header**: `"👋 Salom, Savarbek!"`, `"2-sinf a'lochisi"`, yig'ilgan jami yulduzlar (masalan: `⭐ 85 / 120`) va Ovozni yoqish/o'chirish (`🔊 / 🔇`).
* 🧮 **Matematika kartochkasi**: 40 ta etapning eng yuqori natijalari o'rtachasini hisoblab, umumiy foizni ko'rsatadi:
  $$\text{Umumiy Natija} = \frac{\sum_{i=1}^{40} \text{EtapMaxFoiz}_i}{40}$$
* 🇬🇧 **Ingliz tili kartochkasi**: Bosilganda motivatsion oyna chiqadi: *"Savarbek, avval Matematikadan 1-etaplarni zabt etamiz! Ingliz tili tez kunda ochiladi 🚀"*.
* 🎯 **Pastki statistika**: Jami yechilgan misollar hisoblagichi.
* ⚙️ **Ota-ona sozlamalari (Parental Gatekeeper)**: Natijalarni tasodifan tozalab yubormaslik uchun kattalarga mo'ljallangan tekshiruv savoli (masalan, `125 × 4 = ?`).

### 3. `MATH_OPERATIONS_SCREEN` (4 ta Amal Menyusi)
* ➕ **Qo'shish** (Yashil mavzu)
* ➖ **Ayirish** (Ko'k mavzu)
* ✖️ **Ko'paytirish** (To'q sariq mavzu)
* ➗ **Bo'lish** (Binafsha mavzu)
* Har bir amal ichida: Yopilgan etaplar soni (kamida `1%` natija ko'rsatilgan), amalning umumiy maksimal foizi va mini progress-bar.

### 4. `STAGES_SCREEN` (10 ta Etap — 5 xil mikro-holat)
Har bir bosqich kartochkasi o'zining `maxPercentage` va `attempts` soniga qarab 5 xil holatda bo'ladi:
1. **Yangi (0%)**: Moviy hoshiya, `⚪⚪⚪` (0 yulduz).
2. **Qiyin (<= 40%)**: Och qizil fon, `🔴 Yana harakat qil!`.
3. **O'rtacha (50% - 70%)**: Sariq fon, `⭐⚪⚪` (1 yulduz).
4. **Yaxshi (80% - 90%)**: Yashil fon, `⭐⭐⚪` (2 yulduz).
5. **Rekord (100%)**: Oltin/yashil gradient hoshiya, `⭐⭐⭐` (3 yulduz, kubok 🏆).
* 🔒 **Qulflash tizimi**: 1-etap doim ochiq. Keyingi etap ochilishi uchun oldingi etapda kamida **50%** to'plash shart. Qulflangan etap bosilsa, kartochka titraydi va ogohlantirish beradi.

### 5. `QUIZ_GAME_SCREEN` (Misollar Yechish Maydoni)
* **Yuqori qism**: `"✖️ Chiqish"` tugmasi, `Misol: X / 10`, hamda 10 ta dumaloq indikator (ishlanmagan: kulrang, hozirgi: ko'k pulsatsiya, to'g'ri: yashil ✅, xato: qizil ❌).
* **Markaziy qism**: Katta va o'qilishi oson formula (masalan, `27 + 15 = [ ? ]`).
* **Mobil klaviatura (Custom Numpad)**:
  * `1` dan `9` gacha raqamlar, `0`, `⌫ O'chirish` va `✅ TEKSHIRISH`.
  * Brauzerning o'z klaviaturasi ochilib ekranni qisib qo'ymaydi.
  * Maksimal 3 ta raqam kiritiladi (2-sinfda natija 100 dan oshmaydi).
  * `05` kiritilsa avtomatik `5` ga aylanadi.
* **To'g'ri javob**: Yashil animatsiya, quvnoq ohang, 0.9s dan so'ng keyingi misolga o'tadi.
* **Xato javob**: Qizil rang, `shake` animatsiyasi, `"❌ Xato! Sen [X] yozding. To'g'ri javob: [Y]"`, xohlasa darhol o'tish uchun `"Tushundim, keyingisi ➡️"` tugmasi.
* ⚠️ **Chiqishni tasdiqlash modali**: O'yin o'rtasida bilmasdan chiqib ketmaslik uchun ogohlantiruvchi oyna.

### 6. `RESULT_SCREEN` (Natija va Rekord Taqqoslash)
* **Yangi Rekord (`Current% > OldMax%`)**: Mushakbozlik (Confetti), bayramona fanfare ohangi, kubok va oldingi rekord bilan taqqoslash.
* **Oldingi rekorddan past yoki teng**: Rekord himoya xabari (`🛡️ Sening eng yuqori rekording: X% (Saqlanib qoldi!)`).
* **100% Mukammal**: 3 ta oltin yulduz ⭐⭐⭐ va super tabrik!
* 🔍 **Xatolar ustida ishlash bloki**: Agar bola xato qilgan bo'lsa, xato ketgan misollar ro'yxati (misol, to'g'ri javob va Savarbek yozgan javob) ko'rsatiladi.
* **Boshqaruv tugmalari**:
  * `[ 🔄 Yana urinib ko'rish ]` (yangi 10 ta misol bilan qayta boshlash)
  * `[ ➡️ Keyingi etapga o'tish ]` (agar natija >= 50% bo'lsa)
  * `[ 📋 Bosqichlarga qaytish ]`

---

## 🧮 40 ta Etapning Matematik Dasturi (2-sinf Standarti)

1. **➕ Qo'shish**:
   * 1: 10 ichida ($A+B \le 10$)
   * 2: 20 ichida xonasiz ($13+5=18$)
   * 3: 20 ichida xonadan o'tib ($8+7=15$)
   * 4: Yaxlit o'nliklar ($30+50=80$)
   * 5: 2 xonali + 1 xonali xonasiz ($42+6=48$)
   * 6: 2 xonali + 1 xonali xonadan o'tib ($37+8=45$)
   * 7: 2 xonali + yaxlit o'nlik ($46+30=76$)
   * 8: 2 xonali + 2 xonali xonasiz ($24+53=77$)
   * 9: 2 xonali + 2 xonali xonadan o'tib ($48+36=84$)
   * 10: 3 ta sonni qo'shish ($25+18+12=55$)

2. **➖ Ayirish** ($A \ge B$ doimo):
   * 1: 10 ichida ($9-4=5$)
   * 2: 20 ichida xonasiz ($18-6=12$)
   * 3: 20 ichida xonadan o'tib ($14-7=7$)
   * 4: Yaxlit o'nliklar ($80-30=50$)
   * 5: 2 xonali - 1 xonali xonasiz ($57-4=53$)
   * 6: 2 xonali - 1 xonali xonadan o'tib ($43-8=35$)
   * 7: 2 xonali - yaxlit o'nlik ($75-40=35$)
   * 8: 2 xonali - 2 xonali xonasiz ($86-34=52$)
   * 9: 2 xonali - 2 xonali xonadan o'tib ($62-27=35$)
   * 10: 100 dan va 3 ta sonli ayirish ($100-38=62$)

3. **✖️ Ko'paytirish** (1..10 tartibda aralash, o'rin almashish xossasi bilan):
   * 1: 2 karra jadvali
   * 2: 3 karra jadvali
   * 3: 4 karra jadvali
   * 4: 5 karra jadvali
   * 5: Oraliq nazorat: 2, 3, 4, 5 karra aralash
   * 6: 6 karra jadvali
   * 7: 7 karra jadvali
   * 8: 8 karra jadvali
   * 9: 9 karra jadvali
   * 10: Super Final: 2..9 barcha karra jadvallari, 0 va 10 bilan birga

4. **➗ Bo'lish** (Doimo qoldiqsiz, $C \div A = B$):
   * 1: 2 ga bo'lish
   * 2: 3 ga bo'lish
   * 3: 4 ga bo'lish
   * 4: 5 ga bo'lish
   * 5: Oraliq nazorat: 2, 3, 4, 5 ga bo'lish aralash
   * 6: 6 ga bo'lish
   * 7: 7 ga bo'lish
   * 8: 8 ga bo'lish
   * 9: 9 ga bo'lish
   * 10: Super Final: 2 dan 10 gacha barcha sonlarga qoldiqsiz bo'lish

---

## 💾 Ma'lumotlar Saqlanishi (LocalStorage)
* Barcha natijalar `savarbek_edu_v1` kaliti ostida brauzer xotirasida avtomatik saqlanib boradi.
* Internet yo'q bo'lsa ham barcha natijalar, yulduzlar va rekordlar xavfsiz saqlanadi.
