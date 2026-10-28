// build_app.js - Main Application Assembler
const fs = require('fs');
const { ICONS } = require('./src/icons.js');
const { I18N } = require('./src/i18n.js');
const { STYLES } = require('./src/styles.js');
const { getHTML } = require('./src/html.js');
const { getClientJS } = require('./src/client_js.js');
const { ENGLISH_DATA } = require('./english_data_structure.js');

// 1. Read MathGenerator code from test_math.js
const testMathCode = fs.readFileSync('test_math.js', 'utf8');
const mathGenStart = testMathCode.indexOf('class MathGenerator');
const mathGenEnd = testMathCode.indexOf('if (typeof module');
const MathGeneratorCode = testMathCode.slice(mathGenStart, mathGenEnd !== -1 ? mathGenEnd : undefined).trim();

// 2. Assemble Full HTML
const htmlContent = `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <title>Savarbek Edu — 2-sinf Matematika va Ingliz tili</title>
  <meta name="description" content="Savarbek Edu v2.0 — 2-sinf o'quvchisi Savarbek uchun interaktiv matematika va ingliz tili o'yini">
  <meta name="theme-color" content="#4F46E5">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="Savarbek Edu">
  <link rel="manifest" href="/manifest.json">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%236366F1'/%3E%3Cstop offset='100%25' stop-color='%234F46E5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='8' fill='url(%23g)'/%3E%3Cpath d='M16 6l2.5 5.5 6 .9-4.3 4.2 1 6-5.2-2.8-5.2 2.8 1-6-4.3-4.2 6-.9z' fill='%23FCD34D'/%3E%3C/svg%3E">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet">
  
  <style>
${STYLES}
  </style>
</head>
<body>
  <div id="app-container">
${getHTML(ICONS)}
  </div>

  <script>
${getClientJS(I18N, ENGLISH_DATA, ICONS, MathGeneratorCode)}
  </script>
</body>
</html>
`;

// 3. Ensure public/ directory exists
if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

// 4. Write Root index.html
fs.writeFileSync('index.html', htmlContent, 'utf8');

// 5. Write public/index.html
fs.writeFileSync('public/index.html', htmlContent, 'utf8');

// 6. Write PWA Web App Manifest
const manifest = {
  name: "Savarbek Edu",
  short_name: "Savarbek Edu",
  description: "2-sinf o'quvchisi Savarbek uchun interaktiv matematika va ingliz tili mobil veb-ilovasi",
  start_url: "/",
  display: "standalone",
  orientation: "portrait",
  background_color: "#F8FAFC",
  theme_color: "#4F46E5",
  icons: [
    {
      src: "/icon.svg",
      sizes: "any",
      type: "image/svg+xml",
      purpose: "any maskable"
    }
  ]
};
fs.writeFileSync('public/manifest.json', JSON.stringify(manifest, null, 2), 'utf8');

// 7. Write robots.txt
fs.writeFileSync('public/robots.txt', "User-agent: *\nAllow: /\n", 'utf8');

// 8. Write icon.svg
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366F1"/>
      <stop offset="100%" stop-color="#4338CA"/>
    </linearGradient>
  </defs>
  <rect width="192" height="192" rx="42" fill="url(#bgGrad)"/>
  <polygon points="96 28 116 75 168 81 129 116 140 168 96 141 52 168 63 116 24 81 76 75" fill="#FBBF24" stroke="#F59E0B" stroke-width="4" stroke-linejoin="round"/>
</svg>`;
fs.writeFileSync('public/icon.svg', iconSvg, 'utf8');

console.log('Successfully generated index.html & public/ with Flaticon icons, bilingual support & responsive fixes! Size:', htmlContent.length);
