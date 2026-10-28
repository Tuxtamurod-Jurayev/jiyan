// src/client_js.js - Client Side Application Logic
function getClientJS(I18N, ENGLISH_DATA, ICONS, MathGeneratorCode) {
  return `
    const I18N = ${JSON.stringify(I18N, null, 2)};
    const ENGLISH_DATA = ${JSON.stringify(ENGLISH_DATA, null, 2)};
    const ICONS_JS = ${JSON.stringify(ICONS, null, 2)};
    const DB_KEY = 'savarbek_edu_v1';

    class DatabaseManager {
      constructor() {
        this.data = this.load();
      }

      load() {
        try {
          const raw = localStorage.getItem(DB_KEY);
          if (raw) return JSON.parse(raw);
        } catch (e) {
          console.error('Error loading DB:', e);
        }
        return {
          math: {
            addition: Array(10).fill(null).map(() => ({ attempts: 0, maxPercentage: 0, maxStars: 0 })),
            subtraction: Array(10).fill(null).map(() => ({ attempts: 0, maxPercentage: 0, maxStars: 0 })),
            multiplication: Array(10).fill(null).map(() => ({ attempts: 0, maxPercentage: 0, maxStars: 0 })),
            division: Array(10).fill(null).map(() => ({ attempts: 0, maxPercentage: 0, maxStars: 0 }))
          },
          english: {
            vocabulary: Array(10).fill(null).map(() => ({ attempts: 0, maxPercentage: 0, maxStars: 0 })),
            listening: Array(10).fill(null).map(() => ({ attempts: 0, maxPercentage: 0, maxStars: 0 })),
            spelling: Array(10).fill(null).map(() => ({ attempts: 0, maxPercentage: 0, maxStars: 0 })),
            grammar: Array(10).fill(null).map(() => ({ attempts: 0, maxPercentage: 0, maxStars: 0 }))
          }
        };
      }

      save() {
        try {
          localStorage.setItem(DB_KEY, JSON.stringify(this.data));
        } catch (e) {
          console.error('Error saving DB:', e);
        }
      }

      resetAll() {
        localStorage.removeItem(DB_KEY);
        this.data = this.load();
      }

      getMathStage(op, stageIndex) {
        if (!this.data.math[op]) return { attempts: 0, maxPercentage: 0, maxStars: 0 };
        return this.data.math[op][stageIndex] || { attempts: 0, maxPercentage: 0, maxStars: 0 };
      }

      saveMathResult(op, stageIndex, percentage, stars) {
        if (!this.data.math[op]) return;
        const current = this.data.math[op][stageIndex] || { attempts: 0, maxPercentage: 0, maxStars: 0 };
        current.attempts += 1;
        if (percentage > current.maxPercentage) current.maxPercentage = percentage;
        if (stars > current.maxStars) current.maxStars = stars;
        this.data.math[op][stageIndex] = current;
        this.save();
      }

      getEngStage(cat, stageIndex) {
        if (!this.data.english[cat]) return { attempts: 0, maxPercentage: 0, maxStars: 0 };
        return this.data.english[cat][stageIndex] || { attempts: 0, maxPercentage: 0, maxStars: 0 };
      }

      saveEngResult(cat, stageIndex, percentage, stars) {
        if (!this.data.english[cat]) return;
        const current = this.data.english[cat][stageIndex] || { attempts: 0, maxPercentage: 0, maxStars: 0 };
        current.attempts += 1;
        if (percentage > current.maxPercentage) current.maxPercentage = percentage;
        if (stars > current.maxStars) current.maxStars = stars;
        this.data.english[cat][stageIndex] = current;
        this.save();
      }

      getMathOverallPercentage() {
        let total = 0;
        const ops = ['addition', 'subtraction', 'multiplication', 'division'];
        ops.forEach(op => {
          const list = this.data.math[op] || [];
          list.forEach(st => total += (st.maxPercentage || 0));
        });
        return Math.round(total / 40);
      }

      getEngOverallPercentage() {
        let total = 0;
        const cats = ['vocabulary', 'listening', 'spelling', 'grammar'];
        cats.forEach(cat => {
          const list = this.data.english[cat] || [];
          list.forEach(st => total += (st.maxPercentage || 0));
        });
        return Math.round(total / 40);
      }

      getTotalStars() {
        let stars = 0;
        const ops = ['addition', 'subtraction', 'multiplication', 'division'];
        ops.forEach(op => {
          (this.data.math[op] || []).forEach(st => stars += (st.maxStars || 0));
        });
        const cats = ['vocabulary', 'listening', 'spelling', 'grammar'];
        cats.forEach(cat => {
          (this.data.english[cat] || []).forEach(st => stars += (st.maxStars || 0));
        });
        return stars;
      }
    }

    const db = new DatabaseManager();

    class SoundEngine {
      constructor() {
        this.ctx = null;
        this.enabled = true;
      }

      init() {
        if (!this.ctx) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) this.ctx = new AudioContext();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
      }

      vibrate(pattern) {
        if ('vibrate' in navigator) {
          try { navigator.vibrate(pattern); } catch (e) {}
        }
      }

      playTap() {
        if (!this.enabled) return;
        this.vibrate(15);
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(450, now);
        osc.frequency.exponentialRampToValueAtTime(150, now + 0.04);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
      }

      playCorrect() {
        if (!this.enabled) return;
        this.vibrate([35, 45, 45]);
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const notes = [659.25, 880.00];
        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.1);
          gain.gain.setValueAtTime(0.2, now + idx * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.25);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + idx * 0.1);
          osc.stop(now + idx * 0.1 + 0.28);
        });
      }

      playWrong() {
        if (!this.enabled) return;
        this.vibrate([70, 40, 70]);
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(130, now + 0.25);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.3);
      }

      playFanfare() {
        if (!this.enabled) return;
        this.vibrate([50, 35, 50, 35, 90]);
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const melody = [523.25, 659.25, 783.99, 1046.50];
        melody.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.12);
          gain.gain.setValueAtTime(0.25, now + idx * 0.12);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.35);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + idx * 0.12);
          osc.stop(now + idx * 0.12 + 0.38);
        });
      }

      playLock() {
        if (!this.enabled) return;
        this.vibrate(35);
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.setValueAtTime(140, now + 0.06);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.14);
      }

      speakEnglish(text, slow = false) {
        if (!this.enabled) return;
        if (!('speechSynthesis' in window)) return;
        try {
          window.speechSynthesis.cancel();
          const cleanText = text.replace(/[\\[\\]\\_\\-\\(\\)]/g, ' ').trim();
          const utterance = new SpeechSynthesisUtterance(cleanText);
          utterance.lang = 'en-US';
          utterance.rate = slow ? 0.62 : 0.88;
          utterance.pitch = 1.05;
          window.__activeUtterance = utterance;
          window.speechSynthesis.speak(utterance);
        } catch (e) {
          console.warn('Speech error:', e);
        }
      }
    }

    const sound = new SoundEngine();

    // Auto unlock audio context on first user interaction
    ['touchstart', 'touchend', 'mousedown', 'keydown'].forEach(evt => {
      window.addEventListener(evt, () => sound.init(), { once: true, passive: true });
    });

    class ConfettiEngine {
      constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.animationId = null;
        this.resize();
        window.addEventListener('resize', () => this.resize());
      }

      resize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
      }

      fire(count = 80) {
        this.resize();
        const colors = ['#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#8B5CF6', '#EF4444', '#FBBF24'];
        for (let i = 0; i < count; i++) {
          this.particles.push({
            x: this.canvas.width / 2 + (Math.random() - 0.5) * 120,
            y: this.canvas.height * 0.35,
            vx: (Math.random() - 0.5) * 14,
            vy: (Math.random() - 0.8) * 15 - 4,
            size: Math.random() * 8 + 6,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 12,
            gravity: 0.38,
            opacity: 1
          });
        }
        if (!this.animationId) this.loop();
      }

      loop() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = this.particles.length - 1; i >= 0; i--) {
          const p = this.particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vy += p.gravity;
          p.rotation += p.rotationSpeed;
          p.opacity -= 0.012;

          if (p.opacity <= 0 || p.y > this.canvas.height) {
            this.particles.splice(i, 1);
          } else {
            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate((p.rotation * Math.PI) / 180);
            this.ctx.globalAlpha = p.opacity;
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            this.ctx.restore();
          }
        }

        if (this.particles.length > 0) {
          this.animationId = requestAnimationFrame(() => this.loop());
        } else {
          this.animationId = null;
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
      }
    }

    // ============================================================================
    // MATH QUESTION GENERATOR (Identical with test_math.js)
    // ============================================================================
    ${MathGeneratorCode}

    // ============================================================================
    // ENGLISH QUESTION GENERATOR (Bilingual UZ & RU)
    // ============================================================================
    class EnglishGenerator {
      static shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }

      static generateStageQuestions(category, stageNum) {
        const stageData = ENGLISH_DATA[category][stageNum - 1];
        const allItems = stageData.items;
        const shuffledPool = EnglishGenerator.shuffle(allItems);
        const selected = shuffledPool.slice(0, 10);

        return selected.map(item => {
          if (category === 'vocabulary') {
            const wrongUz = stageData.items.filter(x => x.en !== item.en).map(x => x.uz);
            const chosenDistractorsUz = EnglishGenerator.shuffle(wrongUz).slice(0, 3);
            const optionsUz = EnglishGenerator.shuffle([item.uz, ...chosenDistractorsUz]);

            const wrongRu = stageData.items.filter(x => x.en !== item.en).map(x => x.ru || x.uz);
            const chosenDistractorsRu = EnglishGenerator.shuffle(wrongRu).slice(0, 3);
            const optionsRu = EnglishGenerator.shuffle([item.ru || item.uz, ...chosenDistractorsRu]);

            return {
              type: 'vocabulary',
              word: item.en,
              uz: item.uz,
              ru: item.ru || item.uz,
              emoji: item.emoji,
              correctUz: item.uz,
              correctRu: item.ru || item.uz,
              optionsUz: optionsUz,
              optionsRu: optionsRu,
              speakText: item.en
            };
          } else if (category === 'listening') {
            const wrongUz = stageData.items.filter(x => x.audio !== item.audio).map(x => \`\${x.emoji} \${x.uz}\`);
            const chosenDistractorsUz = EnglishGenerator.shuffle(wrongUz).slice(0, 3);
            const correctTextUz = \`\${item.emoji} \${item.uz}\`;
            const optionsUz = EnglishGenerator.shuffle([correctTextUz, ...chosenDistractorsUz]);

            const wrongRu = stageData.items.filter(x => x.audio !== item.audio).map(x => \`\${x.emoji} \${x.ru || x.uz}\`);
            const chosenDistractorsRu = EnglishGenerator.shuffle(wrongRu).slice(0, 3);
            const correctTextRu = \`\${item.emoji} \${item.ru || item.uz}\`;
            const optionsRu = EnglishGenerator.shuffle([correctTextRu, ...chosenDistractorsRu]);

            return {
              type: 'listening',
              audioText: item.audio,
              uz: item.uz,
              ru: item.ru || item.uz,
              emoji: item.emoji,
              correctUz: correctTextUz,
              correctRu: correctTextRu,
              optionsUz: optionsUz,
              optionsRu: optionsRu,
              speakText: item.audio
            };
          } else if (category === 'spelling') {
            const wordUpper = item.word.toUpperCase();
            const correctLetters = wordUpper.split('');
            const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const extraCount = Math.max(2, 8 - correctLetters.length);
            const distractors = [];
            while (distractors.length < extraCount) {
              const rChar = alphabet[Math.floor(Math.random() * alphabet.length)];
              distractors.push(rChar);
            }
            const allBankLetters = EnglishGenerator.shuffle([...correctLetters, ...distractors]);

            return {
              type: 'spelling',
              targetWord: wordUpper,
              uz: item.uz,
              ru: item.ru || item.uz,
              emoji: item.emoji,
              bankLetters: allBankLetters,
              speakText: item.word
            };
          } else if (category === 'grammar') {
            const completed = item.sentence.replace('[ ___ ]', item.correct);
            return {
              type: 'grammar',
              sentence: item.sentence,
              uz: item.uz,
              ru: item.ru || item.uz,
              correct: item.correct,
              options: item.options,
              ruleUz: item.ruleUz || item.rule,
              ruleRu: item.ruleRu || item.rule,
              speakText: completed
            };
          }
        });
      }
    }

    // ============================================================================
    // APP CONTROLLER & STATE MACHINE
    // ============================================================================
    class AppController {
      constructor() {
        this.currentScreen = 'screen-splash';
        this.currentLang = localStorage.getItem('savarbek_lang') || 'uz';
        this.confetti = new ConfettiEngine('confetti-canvas');

        // Math state
        this.selectedMathOp = null;
        this.selectedMathStage = null;
        this.mathQuestions = [];
        this.mathIndex = 0;
        this.mathCurrentInput = '';
        this.mathCorrectCount = 0;
        this.mathMistakes = [];
        this.mathQuestionLocked = false;

        // English state
        this.selectedEngCat = null;
        this.selectedEngStage = null;
        this.engQuestions = [];
        this.engIndex = 0;
        this.engCorrectCount = 0;
        this.engMistakes = [];
        this.engQuestionLocked = false;
        this.currentSpellingSlots = [];

        this.initDOM();
        this.applyLanguage();
        this.initEvents();
        this.startSplashTimer();
      }

      t(key) {
        const langObj = I18N[this.currentLang] || I18N.uz;
        return langObj[key] || (I18N.uz[key] || '');
      }

      setLanguage(lang) {
        if (lang !== 'uz' && lang !== 'ru') return;
        this.currentLang = lang;
        localStorage.setItem('savarbek_lang', lang);
        this.applyLanguage();
        const toastMsg = lang === 'uz' ? "Til: O'zbekcha 🇺🇿" : "Язык: Русский 🇷🇺";
        this.showToast(toastMsg, "🌐");
      }

      applyLanguage() {
        const isUz = this.currentLang === 'uz';
        // Header
        document.getElementById('lang-btn-flag').textContent = isUz ? '🇺🇿' : '🇷🇺';
        document.getElementById('lang-btn-code').textContent = isUz ? 'UZ' : 'RU';
        document.getElementById('header-user-greeting').textContent = this.t('greeting');
        document.getElementById('header-user-rank').textContent = this.t('rank');

        // Home
        document.getElementById('home-banner-title').textContent = this.t('bannerTitle');
        document.getElementById('home-banner-subtitle').textContent = this.t('bannerSubtitle');
        document.getElementById('home-section-label').textContent = this.t('subjectsLabel');
        document.getElementById('home-math-title').textContent = this.t('mathTitle');
        document.getElementById('home-math-desc').textContent = this.t('mathBadge');
        document.getElementById('home-math-overall-lbl').textContent = this.t('mathOverall');
        document.getElementById('home-eng-title').textContent = this.t('engTitle');
        document.getElementById('home-eng-desc').textContent = this.t('engBadge');
        document.getElementById('home-eng-active-tag').textContent = this.t('engActive');
        document.getElementById('home-eng-overall-lbl').textContent = this.t('engOverall');

        // Nav bars
        document.querySelectorAll('.nav-back-lbl').forEach(el => el.textContent = this.t('btnBack'));
        document.getElementById('math-ops-title').textContent = this.t('mathOpsTitle');
        document.getElementById('eng-cats-title').textContent = this.t('engCatsTitle');

        // Math ops
        document.getElementById('op-add-title').textContent = this.t('opAddTitle');
        document.getElementById('op-add-desc').textContent = this.t('opAddDesc');
        document.getElementById('op-sub-title').textContent = this.t('opSubTitle');
        document.getElementById('op-sub-desc').textContent = this.t('opSubDesc');
        document.getElementById('op-mul-title').textContent = this.t('opMulTitle');
        document.getElementById('op-mul-desc').textContent = this.t('opMulDesc');
        document.getElementById('op-div-title').textContent = this.t('opDivTitle');
        document.getElementById('op-div-desc').textContent = this.t('opDivDesc');

        // English cats
        document.getElementById('cat-vocab-title').textContent = this.t('catVocabTitle');
        document.getElementById('cat-vocab-desc').textContent = this.t('catVocabDesc');
        document.getElementById('cat-listen-title').textContent = this.t('catListenTitle');
        document.getElementById('cat-listen-desc').textContent = this.t('catListenDesc');
        document.getElementById('cat-spell-title').textContent = this.t('catSpellTitle');
        document.getElementById('cat-spell-desc').textContent = this.t('catSpellDesc');
        document.getElementById('cat-grammar-title').textContent = this.t('catGrammarTitle');
        document.getElementById('cat-grammar-desc').textContent = this.t('catGrammarDesc');

        // Quizzes
        document.querySelectorAll('.quiz-exit-lbl').forEach(el => el.textContent = this.t('btnExit'));
        document.querySelectorAll('.quiz-continue-lbl').forEach(el => el.textContent = this.t('btnContinue'));

        // Modals
        document.getElementById('modal-exit-title').textContent = this.t('exitTitle');
        document.getElementById('modal-exit-desc').textContent = this.t('exitDesc');
        document.getElementById('btn-cancel-exit').textContent = this.t('btnStay');
        document.getElementById('btn-confirm-exit').textContent = this.t('btnExitConfirm');

        // Settings modal
        document.getElementById('settings-modal-title').textContent = this.t('settingsTitle') + ' ⚙️';
        document.getElementById('settings-lang-title').textContent = this.t('langSelectTitle');
        document.getElementById('settings-danger-title').textContent = this.t('dangerZoneTitle');
        document.getElementById('settings-danger-desc').textContent = this.t('dangerZoneDesc');
        document.getElementById('btn-close-settings').textContent = this.t('btnClose');
        document.getElementById('btn-confirm-reset-db').textContent = this.t('btnResetAll');

        // Language modal buttons active highlight
        document.getElementById('btn-lang-uz').classList.toggle('active', isUz);
        document.getElementById('btn-lang-ru').classList.toggle('active', !isUz);

        // Re-render current active screen content
        if (this.currentScreen === 'screen-home') this.renderHomeScreen();
        else if (this.currentScreen === 'screen-math-ops') this.renderMathOperations();
        else if (this.currentScreen === 'screen-stages') this.renderMathStages();
        else if (this.currentScreen === 'screen-eng-cats') this.renderEngCategories();
        else if (this.currentScreen === 'screen-eng-stages') this.renderEngStages();
        else if (this.currentScreen === 'screen-eng-quiz' && this.engQuestions.length > 0) this.renderCurrentEngQuestion();
      }

      initDOM() {
        this.screens = {};
        document.querySelectorAll('.screen').forEach(scr => {
          this.screens[scr.id] = scr;
        });
      }

      navigateTo(screenId) {
        sound.playTap();
        document.querySelectorAll('.screen').forEach(scr => scr.classList.remove('active'));
        if (this.screens[screenId]) {
          this.screens[screenId].classList.add('active');
          this.screens[screenId].scrollTop = 0;
          this.currentScreen = screenId;
        }
      }

      showToast(text, icon = '🚀') {
        const toast = document.getElementById('toast-container');
        document.getElementById('toast-icon').textContent = icon;
        document.getElementById('toast-text').textContent = text;
        toast.classList.add('active');
        clearTimeout(this.toastTimeout);
        this.toastTimeout = setTimeout(() => toast.classList.remove('active'), 2800);
      }

      startSplashTimer() {
        const quotes = this.currentLang === 'ru' ? I18N.ru.splashQuotes : I18N.uz.splashQuotes;
        const lastIdx = parseInt(localStorage.getItem('savarbek_last_quote') || '-1', 10);
        let chosenIdx = Math.floor(Math.random() * quotes.length);
        if (chosenIdx === lastIdx) chosenIdx = (chosenIdx + 1) % quotes.length;
        localStorage.setItem('savarbek_last_quote', chosenIdx);

        document.getElementById('splash-quote-text').textContent = quotes[chosenIdx];

        let secondsRemaining = 5;
        const timerText = document.getElementById('splash-timer-text');
        const progressBar = document.getElementById('splash-progress-fill');

        const updateTimer = () => {
          timerText.textContent = this.currentLang === 'ru' ? \`\${secondsRemaining} сек...\` : \`\${secondsRemaining} soniya...\`;
          const pct = ((5 - secondsRemaining) / 5) * 100;
          progressBar.style.width = \`\${pct}%\`;
        };
        updateTimer();

        this.splashInterval = setInterval(() => {
          secondsRemaining--;
          if (secondsRemaining <= 0) {
            clearInterval(this.splashInterval);
            progressBar.style.width = '100%';
            timerText.textContent = this.currentLang === 'ru' ? 'Вперёд! 🚀' : 'Ketdik! 🚀';
            setTimeout(() => {
              this.navigateTo('screen-home');
              this.renderHomeScreen();
            }, 300);
          } else {
            updateTimer();
          }
        }, 1000);
      }

      renderHomeScreen() {
        const mathPct = db.getMathOverallPercentage();
        document.getElementById('home-math-percentage').textContent = \`\${mathPct}%\`;
        document.getElementById('home-math-progress-fill').style.width = \`\${mathPct}%\`;

        const engPct = db.getEngOverallPercentage();
        document.getElementById('home-eng-percentage').textContent = \`\${engPct}%\`;
        document.getElementById('home-eng-progress-fill').style.width = \`\${engPct}%\`;

        const stars = db.getTotalStars();
        document.getElementById('home-total-stars').textContent = \`\${stars} / 240\`;
      }

      renderMathOperations() {
        const ops = ['addition', 'subtraction', 'multiplication', 'division'];
        ops.forEach(op => {
          const list = db.data.math[op] || [];
          let completed = 0;
          list.forEach(st => { if (st.maxPercentage > 0) completed++; });
          const badgeEl = document.getElementById(\`op-\${op === 'addition' ? 'add' : op === 'subtraction' ? 'sub' : op === 'multiplication' ? 'mul' : 'div'}-badge\`);
          if (badgeEl) badgeEl.textContent = \`\${completed} / 10\`;
        });
      }

      renderMathStages() {
        const op = this.selectedMathOp;
        const opTitles = {
          addition: this.t('opAddTitle'),
          subtraction: this.t('opSubTitle'),
          multiplication: this.t('opMulTitle'),
          division: this.t('opDivTitle')
        };
        document.getElementById('stages-nav-title').textContent = opTitles[op] || this.t('mathOpsTitle');

        const list = db.data.math[op] || [];
        let completed = 0;
        let sumPct = 0;
        list.forEach(st => {
          if (st.maxPercentage > 0) completed++;
          sumPct += (st.maxPercentage || 0);
        });
        const avg = Math.round(sumPct / 10);
        document.getElementById('stages-summary-count').textContent = \`\${this.t('stagesCount')} \${completed} / 10\`;
        document.getElementById('stages-summary-avg').textContent = \`\${this.t('avgScore')} \${avg}%\`;

        const container = document.getElementById('math-stages-container');
        container.innerHTML = '';

        for (let i = 0; i < 10; i++) {
          const st = list[i] || { attempts: 0, maxPercentage: 0, maxStars: 0 };
          const stageNum = i + 1;
          const isLocked = i > 0 && (list[i - 1].maxPercentage < 70);

          let statusText = this.t('statusNew');
          let statusColor = '#64748B';
          if (st.attempts > 0) {
            if (st.maxPercentage === 100) { statusText = this.t('statusPerfect'); statusColor = '#F59E0B'; }
            else if (st.maxPercentage >= 80) { statusText = this.t('statusGreat'); statusColor = '#10B981'; }
            else if (st.maxPercentage >= 50) { statusText = this.t('statusGood'); statusColor = '#0EA5E9'; }
            else { statusText = this.t('statusRepeat'); statusColor = '#EF4444'; }
          }

          const card = document.createElement('div');
          card.className = \`stage-card \${isLocked ? 'locked' : ''}\`;
          card.innerHTML = \`
            <div class="stage-card-top">
              <span class="stage-num-badge">\${this.t('stageLabel')} \${stageNum}</span>
              \${isLocked ? ICONS_JS.lock : \`<span style="font-size: 11px; font-weight: 800; color: \${statusColor};">\${statusText}</span>\`}
            </div>
            <div class="stage-topic-title" style="min-height: 24px; font-size: 13px;">
              \${opTitles[op]} • \${this.t('stageLabel')} \${stageNum}
            </div>
            <div class="stage-meta-row">
              <span style="color: var(--text-muted); font-size: 11px;">\${this.t('record')} \${st.maxPercentage}%</span>
              <div class="stage-stars-row">
                \${ICONS_JS.flaticonStar.repeat(st.maxStars)}\${ICONS_JS.flaticonStarGray.repeat(3 - st.maxStars)}
              </div>
            </div>
          \`;

          card.addEventListener('click', () => {
            if (isLocked) {
              sound.playLock();
              this.showToast(this.t('stageLockedToast'), "🔒");
            } else {
              sound.playTap();
              this.startMathQuiz(stageNum);
            }
          });

          container.appendChild(card);
        }
      }

      startMathQuiz(stageNumber) {
        this.selectedMathStage = stageNumber;
        this.mathQuestions = MathGenerator.generateStageQuestions(this.selectedMathOp, stageNumber);
        this.mathIndex = 0;
        this.mathCorrectCount = 0;
        this.mathMistakes = [];
        this.mathCurrentInput = '';
        this.mathQuestionLocked = false;

        const dotsContainer = document.getElementById('quiz-progress-dots');
        dotsContainer.innerHTML = '';
        for (let i = 0; i < 10; i++) {
          const dot = document.createElement('div');
          dot.className = 'progress-dot';
          dot.id = \`quiz-dot-\${i}\`;
          dotsContainer.appendChild(dot);
        }

        this.navigateTo('screen-quiz');
        this.renderCurrentMathQuestion();
      }

      renderCurrentMathQuestion() {
        const q = this.mathQuestions[this.mathIndex];
        this.mathCurrentInput = '';
        this.mathQuestionLocked = false;

        document.getElementById('quiz-question-counter').textContent = 
          \`\${this.selectedMathStage}-\${this.t('stageLabel')} | \${this.t('questionNum')}: \${this.mathIndex + 1} / 10\`;

        for (let i = 0; i < 10; i++) {
          const dot = document.getElementById(\`quiz-dot-\${i}\`);
          dot.classList.remove('current');
          if (i === this.mathIndex) dot.classList.add('current');
        }

        document.getElementById('math-num1').textContent = q.num1;
        document.getElementById('math-num2').textContent = q.num2;
        document.getElementById('math-op-sign').textContent = q.sign;

        const displayBox = document.getElementById('math-answer-display');
        displayBox.textContent = '?';
        displayBox.className = 'input-box-display';

        const card = document.getElementById('quiz-question-card');
        card.classList.remove('correct-anim', 'wrong-anim');

        const feedback = document.getElementById('quiz-feedback-box');
        feedback.textContent = '';
        feedback.className = 'feedback-box';
        document.getElementById('btn-skip-wrong').style.display = 'none';

        this.updateMathSubmitButton();
      }

      handleMathNumpadInput(key) {
        if (this.mathQuestionLocked) return;
        sound.playTap();

        if (key === 'del') {
          this.mathCurrentInput = this.mathCurrentInput.slice(0, -1);
        } else if (key === 'submit') {
          if (this.mathCurrentInput.length > 0) this.submitMathAnswer();
          return;
        } else {
          if (this.mathCurrentInput.length < 5) {
            this.mathCurrentInput += key;
          }
        }

        const displayBox = document.getElementById('math-answer-display');
        if (this.mathCurrentInput.length > 0) {
          displayBox.textContent = this.mathCurrentInput;
          displayBox.classList.add('filled');
        } else {
          displayBox.textContent = '?';
          displayBox.classList.remove('filled');
        }
        this.updateMathSubmitButton();
      }

      updateMathSubmitButton() {
        const btn = document.getElementById('btn-math-submit');
        if (this.mathCurrentInput.length > 0) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      }

      submitMathAnswer() {
        if (this.mathQuestionLocked || this.mathCurrentInput.length === 0) return;
        this.mathQuestionLocked = true;

        const q = this.mathQuestions[this.mathIndex];
        const userVal = parseInt(this.mathCurrentInput, 10);
        const isCorrect = userVal === q.answer;

        const card = document.getElementById('quiz-question-card');
        const displayBox = document.getElementById('math-answer-display');
        const feedback = document.getElementById('quiz-feedback-box');
        const dot = document.getElementById(\`quiz-dot-\${this.mathIndex}\`);

        if (isCorrect) {
          sound.playCorrect();
          this.mathCorrectCount++;
          card.classList.add('correct-anim');
          displayBox.classList.add('correct');
          dot.classList.add('correct');
          feedback.textContent = this.t('correctAlert');
          feedback.classList.add('correct');

          setTimeout(() => this.advanceMathQuestion(), 900);
        } else {
          sound.playWrong();
          this.mathMistakes.push({ ...q, userVal });
          card.classList.add('wrong-anim');
          displayBox.classList.add('wrong');
          dot.classList.add('wrong');
          feedback.textContent = \`\${this.t('wrongAlert')} \${q.answer}\`;
          feedback.classList.add('wrong');

          document.getElementById('btn-skip-wrong').style.display = 'inline-flex';
          this.wrongTimer = setTimeout(() => this.advanceMathQuestion(), 2200);
        }
      }

      advanceMathQuestion() {
        clearTimeout(this.wrongTimer);
        this.mathIndex++;
        if (this.mathIndex < 10) {
          this.renderCurrentMathQuestion();
        } else {
          this.finishMathQuiz();
        }
      }

      finishMathQuiz() {
        const percentage = Math.round((this.mathCorrectCount / 10) * 100);
        let stars = 0;
        if (percentage >= 100) stars = 3;
        else if (percentage >= 80) stars = 2;
        else if (percentage >= 50) stars = 1;

        const prev = db.getMathStage(this.selectedMathOp, this.selectedMathStage - 1);
        const isNewRecord = percentage > prev.maxPercentage;

        db.saveMathResult(this.selectedMathOp, this.selectedMathStage - 1, percentage, stars);

        if (percentage >= 80) {
          sound.playFanfare();
          this.confetti.fire(90);
        }

        // Render result screen
        let title = this.t('resultTryAgain');
        if (percentage === 100) title = this.t('resultChampion');
        else if (percentage >= 80) title = this.t('resultGreat');
        else if (percentage >= 50) title = this.t('resultGood');

        document.getElementById('result-title-text').textContent = title;
        document.getElementById('result-record-banner').style.display = isNewRecord ? 'inline-block' : 'none';
        document.getElementById('result-score-val').textContent = \`\${this.mathCorrectCount} / 10\`;
        document.getElementById('result-percentage-val').textContent = \`\${percentage}%\`;
        document.getElementById('result-stars-count').textContent = \`+\${stars}\`;

        document.getElementById('result-stat-correct-lbl').textContent = this.t('statCorrect');
        document.getElementById('result-stat-acc-lbl').textContent = this.t('statAccuracy');
        document.getElementById('result-stat-stars-lbl').textContent = this.t('statStars');

        document.getElementById('result-btn-next-lbl').textContent = this.t('btnNextStage');
        document.getElementById('result-btn-retry-lbl').textContent = this.t('btnRetry');
        document.getElementById('result-btn-stages-lbl').textContent = this.t('btnBackToStages');

        const starsContainer = document.getElementById('result-stars-display');
        starsContainer.innerHTML = ICONS_JS.flaticonStar.repeat(stars) + ICONS_JS.flaticonStarGray.repeat(3 - stars);

        const btnNext = document.getElementById('btn-next-stage');
        if (this.selectedMathStage < 10 && percentage >= 70) {
          btnNext.style.display = 'flex';
        } else {
          btnNext.style.display = 'none';
        }

        this.navigateTo('screen-result');
      }

      renderEngCategories() {
        const cats = ['vocabulary', 'listening', 'spelling', 'grammar'];
        cats.forEach(cat => {
          const list = db.data.english[cat] || [];
          let completed = 0;
          list.forEach(st => { if (st.maxPercentage > 0) completed++; });
          const badgeEl = document.getElementById(\`cat-\${cat === 'vocabulary' ? 'vocab' : cat === 'listening' ? 'listen' : cat === 'spelling' ? 'spell' : 'grammar'}-badge\`);
          if (badgeEl) badgeEl.textContent = \`\${completed} / 10\`;
        });
      }

      renderEngStages() {
        const cat = this.selectedEngCat;
        const catTitles = {
          vocabulary: this.t('catVocabTitle'),
          listening: this.t('catListenTitle'),
          spelling: this.t('catSpellTitle'),
          grammar: this.t('catGrammarTitle')
        };
        document.getElementById('eng-stages-nav-title').textContent = catTitles[cat] || this.t('engCatsTitle');

        const list = db.data.english[cat] || [];
        let completed = 0;
        let sumPct = 0;
        list.forEach(st => {
          if (st.maxPercentage > 0) completed++;
          sumPct += (st.maxPercentage || 0);
        });
        const avg = Math.round(sumPct / 10);
        document.getElementById('eng-stages-summary-count').textContent = \`\${this.t('stagesCount')} \${completed} / 10\`;
        document.getElementById('eng-stages-summary-avg').textContent = \`\${this.t('avgScore')} \${avg}%\`;

        const container = document.getElementById('eng-stages-container');
        container.innerHTML = '';

        const rawStages = ENGLISH_DATA[cat] || [];
        for (let i = 0; i < 10; i++) {
          const st = list[i] || { attempts: 0, maxPercentage: 0, maxStars: 0 };
          const rawStage = rawStages[i] || { title: \`Etap \${i+1}\`, icon: '📖' };
          const stageNum = i + 1;
          const isLocked = i > 0 && (list[i - 1].maxPercentage < 70);

          let statusText = this.t('statusNew');
          let statusColor = '#64748B';
          if (st.attempts > 0) {
            if (st.maxPercentage === 100) { statusText = this.t('statusPerfect'); statusColor = '#F59E0B'; }
            else if (st.maxPercentage >= 80) { statusText = this.t('statusGreat'); statusColor = '#10B981'; }
            else if (st.maxPercentage >= 50) { statusText = this.t('statusGood'); statusColor = '#0EA5E9'; }
            else { statusText = this.t('statusRepeat'); statusColor = '#EF4444'; }
          }

          const stageTopic = this.currentLang === 'ru' ? (rawStage.titleRu || rawStage.title) : (rawStage.titleUz || rawStage.title);

          const card = document.createElement('div');
          card.className = \`stage-card \${isLocked ? 'locked' : ''}\`;
          card.innerHTML = \`
            <div class="stage-card-top">
              <span class="stage-num-badge">\${this.t('stageLabel')} \${stageNum}</span>
              \${isLocked ? ICONS_JS.lock : \`<span style="font-size: 11px; font-weight: 800; color: \${statusColor};">\${statusText}</span>\`}
            </div>
            <div class="stage-topic-title">
              <span style="margin-right: 6px;">\${rawStage.icon}</span> \${stageTopic}
            </div>
            <div class="stage-meta-row">
              <span style="color: var(--text-muted); font-size: 11px;">\${this.t('record')} \${st.maxPercentage}%</span>
              <div class="stage-stars-row">
                \${ICONS_JS.flaticonStar.repeat(st.maxStars)}\${ICONS_JS.flaticonStarGray.repeat(3 - st.maxStars)}
              </div>
            </div>
          \`;

          card.addEventListener('click', () => {
            if (isLocked) {
              sound.playLock();
              this.showToast(this.t('stageLockedToast'), "🔒");
            } else {
              sound.playTap();
              this.startEngQuiz(stageNum);
            }
          });

          container.appendChild(card);
        }
      }

      startEngQuiz(stageNumber) {
        this.selectedEngStage = stageNumber;
        this.engQuestions = EnglishGenerator.generateStageQuestions(this.selectedEngCat, stageNumber);
        this.engIndex = 0;
        this.engCorrectCount = 0;
        this.engMistakes = [];
        this.engQuestionLocked = false;

        const dotsContainer = document.getElementById('eng-quiz-progress-dots');
        dotsContainer.innerHTML = '';
        for (let i = 0; i < 10; i++) {
          const dot = document.createElement('div');
          dot.className = 'progress-dot';
          dot.id = \`eng-quiz-dot-\${i}\`;
          dotsContainer.appendChild(dot);
        }

        this.navigateTo('screen-eng-quiz');
        this.renderCurrentEngQuestion();
      }

      renderCurrentEngQuestion() {
        const q = this.engQuestions[this.engIndex];
        this.engQuestionLocked = false;

        document.getElementById('eng-quiz-question-counter').textContent = 
          \`\${this.selectedEngStage}-\${this.t('stageLabel')} | \${this.t('questionNum')}: \${this.engIndex + 1} / 10\`;

        for (let i = 0; i < 10; i++) {
          const dot = document.getElementById(\`eng-quiz-dot-\${i}\`);
          dot.classList.remove('current');
          if (i === this.engIndex) dot.classList.add('current');
        }

        const card = document.getElementById('eng-quiz-question-card');
        card.classList.remove('correct-anim', 'wrong-anim');

        const feedback = document.getElementById('eng-quiz-feedback-box');
        feedback.textContent = '';
        feedback.className = 'feedback-box';
        document.getElementById('btn-eng-skip-wrong').style.display = 'none';

        const cardContent = document.getElementById('eng-quiz-card-content');
        const bottomPanel = document.getElementById('eng-quiz-bottom-panel');

        const isRu = this.currentLang === 'ru';

        if (q.type === 'vocabulary') {
          cardContent.innerHTML = \`
            <div class="eng-prompt-box">
              <div class="eng-prompt-emoji">\${q.emoji}</div>
              <div class="eng-prompt-word">
                <span>\${q.word}</span>
                <button class="btn-speak-inline" id="btn-speak-word" title="Talaffuzni eshitish">\${ICONS_JS.speaker}</button>
              </div>
              <div class="eng-prompt-subtext">\${this.t('vocabPrompt')}</div>
            </div>
          \`;

          document.getElementById('btn-speak-word').addEventListener('click', (e) => {
            e.stopPropagation();
            sound.speakEnglish(q.speakText);
          });

          setTimeout(() => sound.speakEnglish(q.speakText), 180);

          const optionsList = isRu ? q.optionsRu : q.optionsUz;
          const correctVal = isRu ? q.correctRu : q.correctUz;

          bottomPanel.innerHTML = \`
            <div class="eng-options-container" id="eng-choice-options">
              \${optionsList.map(opt => \`<button class="eng-opt-btn">\${opt}</button>\`).join('')}
            </div>
          \`;

          bottomPanel.querySelectorAll('.eng-opt-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              this.handleChoiceAnswer(btn, btn.textContent.trim(), correctVal, q.word, q.speakText);
            });
          });

        } else if (q.type === 'listening') {
          cardContent.innerHTML = \`
            <div class="audio-listening-box">
              <button class="btn-audio-pulse" id="btn-eng-audio-main" title="Ovozni eshitish">
                \${ICONS_JS.speakerBig}
              </button>
              <button class="btn-audio-slow" id="btn-eng-audio-slow">
                <span>🐢</span> <span>\${this.t('slowListen')}</span>
              </button>
              <div class="eng-prompt-subtext">\${this.t('listenPrompt')}</div>
            </div>
          \`;

          document.getElementById('btn-eng-audio-main').addEventListener('click', () => {
            sound.speakEnglish(q.speakText, false);
          });
          document.getElementById('btn-eng-audio-slow').addEventListener('click', () => {
            sound.speakEnglish(q.speakText, true);
          });

          setTimeout(() => sound.speakEnglish(q.speakText, false), 180);

          const optionsList = isRu ? q.optionsRu : q.optionsUz;
          const correctVal = isRu ? q.correctRu : q.correctUz;

          bottomPanel.innerHTML = \`
            <div class="eng-options-container" id="eng-choice-options">
              \${optionsList.map(opt => \`<button class="eng-opt-btn">\${opt}</button>\`).join('')}
            </div>
          \`;

          bottomPanel.querySelectorAll('.eng-opt-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              this.handleChoiceAnswer(btn, btn.textContent.trim(), correctVal, q.audioText, q.speakText);
            });
          });

        } else if (q.type === 'spelling') {
          const hintWord = isRu ? q.ru : q.uz;
          this.currentSpellingSlots = [];

          cardContent.innerHTML = \`
            <div class="spelling-slots-wrapper">
              <div style="font-size: clamp(34px, 8vw, 44px);">\${q.emoji}</div>
              <div style="font-size: 16px; font-weight: 800; color: var(--text-main);">\${hintWord}</div>
              <div class="spelling-slots-row" id="spelling-slots-row">
                \${Array(q.targetWord.length).fill(null).map((_, idx) => \`
                  <div class="spelling-slot" data-index="\${idx}">_</div>
                \`).join('')}
              </div>
            </div>
          \`;

          bottomPanel.innerHTML = \`
            <div class="spelling-bank-container">
              <div class="spelling-tiles-row" id="spelling-tiles-row">
                \${q.bankLetters.map((char, idx) => \`
                  <button class="letter-tile" data-tile-id="\${idx}">\${char}</button>
                \`).join('')}
              </div>
              <button class="btn-clear-spelling" id="btn-clear-spelling">
                \${ICONS_JS.delete} <span>\${this.t('spellingClear')}</span>
              </button>
            </div>
          \`;

          this.bindSpellingEvents(q);

        } else if (q.type === 'grammar') {
          const transSentence = isRu ? q.ru : q.uz;

          cardContent.innerHTML = \`
            <div class="eng-prompt-box">
              <div style="font-family: var(--font-heading); font-size: clamp(19px, 5vw, 24px); font-weight: 900; color: var(--text-main); line-height: 1.4;">
                \${q.sentence}
              </div>
              <div class="eng-prompt-subtext" style="font-style: italic;">
                \${transSentence}
              </div>
            </div>
          \`;

          const ruleText = isRu ? q.ruleRu : q.ruleUz;

          bottomPanel.innerHTML = \`
            <div class="eng-options-container" id="eng-grammar-options" style="grid-template-columns: \${q.options.length <= 2 ? 'repeat(2, 1fr)' : '1fr'};">
              \${q.options.map(opt => \`<button class="eng-opt-btn">\${opt}</button>\`).join('')}
            </div>
          \`;

          bottomPanel.querySelectorAll('.eng-opt-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              this.handleGrammarAnswer(btn, btn.textContent.trim(), q.correct, ruleText, q.speakText);
            });
          });
        }
      }

      handleChoiceAnswer(btn, selectedVal, correctVal, displayWord, speakText) {
        if (this.engQuestionLocked) return;
        this.engQuestionLocked = true;

        const isCorrect = selectedVal === correctVal;
        const card = document.getElementById('eng-quiz-question-card');
        const feedback = document.getElementById('eng-quiz-feedback-box');
        const dot = document.getElementById(\`eng-quiz-dot-\${this.engIndex}\`);

        if (isCorrect) {
          sound.playCorrect();
          sound.speakEnglish(speakText);
          this.engCorrectCount++;
          btn.classList.add('correct');
          card.classList.add('correct-anim');
          dot.classList.add('correct');
          feedback.textContent = this.t('correctAlert');
          feedback.classList.add('correct');

          setTimeout(() => this.advanceEngQuestion(), 1000);
        } else {
          sound.playWrong();
          this.engMistakes.push({ displayWord, selectedVal, correctVal });
          btn.classList.add('wrong');
          card.classList.add('wrong-anim');
          dot.classList.add('wrong');
          feedback.textContent = \`\${this.t('wrongAlert')} \${correctVal}\`;
          feedback.classList.add('wrong');

          // Highlight correct one
          document.querySelectorAll('#eng-choice-options .eng-opt-btn').forEach(b => {
            if (b.textContent.trim() === correctVal) b.classList.add('correct');
          });

          document.getElementById('btn-eng-skip-wrong').style.display = 'inline-flex';
          this.wrongEngTimer = setTimeout(() => this.advanceEngQuestion(), 2400);
        }
      }

      handleGrammarAnswer(btn, selectedVal, correctVal, rule, speakText) {
        if (this.engQuestionLocked) return;
        this.engQuestionLocked = true;

        const isCorrect = selectedVal === correctVal;
        const card = document.getElementById('eng-quiz-question-card');
        const feedback = document.getElementById('eng-quiz-feedback-box');
        const dot = document.getElementById(\`eng-quiz-dot-\${this.engIndex}\`);

        if (isCorrect) {
          sound.playCorrect();
          sound.speakEnglish(speakText);
          this.engCorrectCount++;
          btn.classList.add('correct');
          card.classList.add('correct-anim');
          dot.classList.add('correct');
          feedback.textContent = this.t('correctAlert');
          feedback.classList.add('correct');

          setTimeout(() => this.advanceEngQuestion(), 1100);
        } else {
          sound.playWrong();
          this.engMistakes.push({ selectedVal, correctVal, rule });
          btn.classList.add('wrong');
          card.classList.add('wrong-anim');
          dot.classList.add('wrong');
          feedback.innerHTML = \`<div>\${this.t('wrongAlert')} <b style="color: #10B981;">\${correctVal}</b></div><div style="font-size: 12px; margin-top: 4px; color: #475569;">\${rule}</div>\`;
          feedback.classList.add('wrong');

          document.querySelectorAll('#eng-grammar-options .eng-opt-btn').forEach(b => {
            if (b.textContent.trim() === correctVal) b.classList.add('correct');
          });

          document.getElementById('btn-eng-skip-wrong').style.display = 'inline-flex';
          this.wrongEngTimer = setTimeout(() => this.advanceEngQuestion(), 3000);
        }
      }

      bindSpellingEvents(q) {
        const tilesRow = document.getElementById('spelling-tiles-row');
        tilesRow.querySelectorAll('.letter-tile').forEach(tile => {
          tile.addEventListener('click', () => {
            if (this.engQuestionLocked) return;
            if (this.currentSpellingSlots.length < q.targetWord.length) {
              sound.playTap();
              const char = tile.textContent.trim();
              const tileId = tile.dataset.tileId;
              tile.classList.add('used');
              this.currentSpellingSlots.push({ char, tileId });
              this.updateSpellingSlotsView(q);

              if (this.currentSpellingSlots.length === q.targetWord.length) {
                this.validateSpellingWord(q);
              }
            }
          });
        });

        document.getElementById('btn-clear-spelling').addEventListener('click', () => {
          if (this.engQuestionLocked) return;
          sound.playTap();
          this.currentSpellingSlots = [];
          document.querySelectorAll('.letter-tile').forEach(t => t.classList.remove('used'));
          this.updateSpellingSlotsView(q);
        });

        document.querySelectorAll('.spelling-slot').forEach(slot => {
          slot.addEventListener('click', () => {
            if (this.engQuestionLocked) return;
            const idx = parseInt(slot.dataset.index, 10);
            if (this.currentSpellingSlots[idx]) {
              sound.playTap();
              const removed = this.currentSpellingSlots.splice(idx, 1)[0];
              const tileEl = document.querySelector(\`.letter-tile[data-tile-id="\${removed.tileId}"]\`);
              if (tileEl) tileEl.classList.remove('used');
              this.updateSpellingSlotsView(q);
            }
          });
        });
      }

      updateSpellingSlotsView(q) {
        const slots = document.querySelectorAll('.spelling-slot');
        slots.forEach((slot, idx) => {
          if (this.currentSpellingSlots[idx]) {
            slot.textContent = this.currentSpellingSlots[idx].char;
            slot.classList.add('filled');
          } else {
            slot.textContent = '_';
            slot.classList.remove('filled');
          }
        });
      }

      validateSpellingWord(q) {
        this.engQuestionLocked = true;
        const formedWord = this.currentSpellingSlots.map(s => s.char).join('');
        const isCorrect = formedWord === q.targetWord;

        const card = document.getElementById('eng-quiz-question-card');
        const feedback = document.getElementById('eng-quiz-feedback-box');
        const dot = document.getElementById(\`eng-quiz-dot-\${this.engIndex}\`);
        const slots = document.querySelectorAll('.spelling-slot');

        if (isCorrect) {
          sound.playCorrect();
          sound.speakEnglish(q.speakText);
          this.engCorrectCount++;
          card.classList.add('correct-anim');
          dot.classList.add('correct');
          slots.forEach(s => s.classList.add('correct'));
          feedback.textContent = this.t('correctAlert');
          feedback.classList.add('correct');

          setTimeout(() => this.advanceEngQuestion(), 1100);
        } else {
          sound.playWrong();
          this.engMistakes.push({ targetWord: q.targetWord, formedWord });
          card.classList.add('wrong-anim');
          dot.classList.add('wrong');
          slots.forEach(s => s.classList.add('wrong'));
          feedback.textContent = \`\${this.t('wrongAlert')} \${q.targetWord}\`;
          feedback.classList.add('wrong');

          document.getElementById('btn-eng-skip-wrong').style.display = 'inline-flex';
          this.wrongEngTimer = setTimeout(() => this.advanceEngQuestion(), 2400);
        }
      }

      advanceEngQuestion() {
        clearTimeout(this.wrongEngTimer);
        this.engIndex++;
        if (this.engIndex < 10) {
          this.renderCurrentEngQuestion();
        } else {
          this.finishEngQuiz();
        }
      }

      finishEngQuiz() {
        const percentage = Math.round((this.engCorrectCount / 10) * 100);
        let stars = 0;
        if (percentage >= 100) stars = 3;
        else if (percentage >= 80) stars = 2;
        else if (percentage >= 50) stars = 1;

        const prev = db.getEngStage(this.selectedEngCat, this.selectedEngStage - 1);
        const isNewRecord = percentage > prev.maxPercentage;

        db.saveEngResult(this.selectedEngCat, this.selectedEngStage - 1, percentage, stars);

        if (percentage >= 80) {
          sound.playFanfare();
          this.confetti.fire(90);
        }

        let title = this.t('resultTryAgain');
        if (percentage === 100) title = this.t('resultChampion');
        else if (percentage >= 80) title = this.t('resultGreat');
        else if (percentage >= 50) title = this.t('resultGood');

        document.getElementById('eng-result-title-text').textContent = title;
        document.getElementById('eng-result-record-banner').style.display = isNewRecord ? 'inline-block' : 'none';
        document.getElementById('eng-result-score-val').textContent = \`\${this.engCorrectCount} / 10\`;
        document.getElementById('eng-result-percentage-val').textContent = \`\${percentage}%\`;
        document.getElementById('eng-result-stars-count').textContent = \`+\${stars}\`;

        document.getElementById('eng-result-stat-correct-lbl').textContent = this.t('statCorrect');
        document.getElementById('eng-result-stat-acc-lbl').textContent = this.t('statAccuracy');
        document.getElementById('eng-result-stat-stars-lbl').textContent = this.t('statStars');

        document.getElementById('eng-result-btn-next-lbl').textContent = this.t('btnNextStage');
        document.getElementById('eng-result-btn-retry-lbl').textContent = this.t('btnRetry');
        document.getElementById('eng-result-btn-stages-lbl').textContent = this.t('btnBackToStages');

        const starsContainer = document.getElementById('eng-result-stars-display');
        starsContainer.innerHTML = ICONS_JS.flaticonStar.repeat(stars) + ICONS_JS.flaticonStarGray.repeat(3 - stars);

        const btnNext = document.getElementById('btn-eng-next-stage');
        if (this.selectedEngStage < 10 && percentage >= 70) {
          btnNext.style.display = 'flex';
        } else {
          btnNext.style.display = 'none';
        }

        this.navigateTo('screen-eng-result');
      }

      initEvents() {
        // Language Toggle button in Header
        document.getElementById('btn-toggle-lang').addEventListener('click', () => {
          sound.playTap();
          this.setLanguage(this.currentLang === 'uz' ? 'ru' : 'uz');
        });

        // Language Chooser buttons in Settings Modal
        document.getElementById('btn-lang-uz').addEventListener('click', () => {
          sound.playTap();
          this.setLanguage('uz');
        });
        document.getElementById('btn-lang-ru').addEventListener('click', () => {
          sound.playTap();
          this.setLanguage('ru');
        });

        // Sound Toggle
        document.getElementById('btn-toggle-sound').addEventListener('click', () => {
          sound.enabled = !sound.enabled;
          document.getElementById('sound-icon').innerHTML = sound.enabled ? ICONS_JS.soundOn : ICONS_JS.soundOff;
          this.showToast(sound.enabled ? (this.currentLang === 'ru' ? "Звук включен 🔊" : "Ovoz yoqildi 🔊") : (this.currentLang === 'ru' ? "Звук выключен 🔇" : "Ovoz o'chirildi 🔇"));
        });

        // Home card clicks
        document.getElementById('card-open-math').addEventListener('click', () => {
          this.renderMathOperations();
          this.navigateTo('screen-math-ops');
        });

        document.getElementById('card-open-english').addEventListener('click', () => {
          this.renderEngCategories();
          this.navigateTo('screen-eng-cats');
        });

        // Math Ops back
        document.getElementById('btn-back-from-math-ops').addEventListener('click', () => {
          this.renderHomeScreen();
          this.navigateTo('screen-home');
        });

        // Math operation card clicks
        ['addition', 'subtraction', 'multiplication', 'division'].forEach(op => {
          const el = document.getElementById(\`op-card-\${op}\`);
          if (el) {
            el.addEventListener('click', () => {
              this.selectedMathOp = op;
              this.renderMathStages();
              this.navigateTo('screen-stages');
            });
          }
        });

        // Stages back
        document.getElementById('btn-back-from-stages').addEventListener('click', () => {
          this.renderMathOperations();
          this.navigateTo('screen-math-ops');
        });

        // English Cats back
        document.getElementById('btn-back-from-eng-cats').addEventListener('click', () => {
          this.renderHomeScreen();
          this.navigateTo('screen-home');
        });

        // English category card clicks
        ['vocabulary', 'listening', 'spelling', 'grammar'].forEach(cat => {
          const el = document.getElementById(\`cat-card-\${cat}\`);
          if (el) {
            el.addEventListener('click', () => {
              this.selectedEngCat = cat;
              this.renderEngStages();
              this.navigateTo('screen-eng-stages');
            });
          }
        });

        // Eng stages back
        document.getElementById('btn-back-from-eng-stages').addEventListener('click', () => {
          this.renderEngCategories();
          this.navigateTo('screen-eng-cats');
        });

        // Math Result actions
        document.getElementById('btn-retry-stage').addEventListener('click', () => {
          this.startMathQuiz(this.selectedMathStage);
        });
        document.getElementById('btn-next-stage').addEventListener('click', () => {
          this.startMathQuiz(this.selectedMathStage + 1);
        });
        document.getElementById('btn-back-to-stages').addEventListener('click', () => {
          this.renderMathStages();
          this.navigateTo('screen-stages');
        });

        // English Result actions
        document.getElementById('btn-eng-retry-stage').addEventListener('click', () => {
          this.startEngQuiz(this.selectedEngStage);
        });
        document.getElementById('btn-eng-next-stage').addEventListener('click', () => {
          this.startEngQuiz(this.selectedEngStage + 1);
        });
        document.getElementById('btn-eng-back-to-stages').addEventListener('click', () => {
          this.renderEngStages();
          this.navigateTo('screen-eng-stages');
        });

        // Math Numpad click
        document.querySelectorAll('.num-key').forEach(btn => {
          btn.addEventListener('click', () => {
            this.handleMathNumpadInput(btn.dataset.key);
          });
        });

        // Physical Keyboard Support
        window.addEventListener('keydown', (e) => {
          if (this.currentScreen === 'screen-quiz') {
            if (e.key >= '0' && e.key <= '9') this.handleMathNumpadInput(e.key);
            else if (e.key === 'Backspace') this.handleMathNumpadInput('del');
            else if (e.key === 'Enter') this.handleMathNumpadInput('submit');
          } else if (this.currentScreen === 'screen-eng-quiz') {
            if (['1', '2', '3', '4'].includes(e.key)) {
              const opts = document.querySelectorAll('#eng-choice-options .eng-opt-btn, #eng-grammar-options .eng-opt-btn');
              const idx = parseInt(e.key, 10) - 1;
              if (opts && opts[idx]) opts[idx].click();
            } else if (e.key === ' ' || e.key === 'r' || e.key === 'R') {
              const playBtn = document.getElementById('btn-eng-audio-main') || document.getElementById('btn-speak-word');
              if (playBtn) playBtn.click();
            }
          }
        });

        document.getElementById('btn-skip-wrong').addEventListener('click', () => this.advanceMathQuestion());
        document.getElementById('btn-eng-skip-wrong').addEventListener('click', () => this.advanceEngQuestion());

        // Exit Quizzes
        document.getElementById('btn-exit-quiz').addEventListener('click', () => {
          sound.playTap();
          this.exitTargetScreen = 'screen-stages';
          document.getElementById('modal-exit-confirm').classList.add('active');
        });
        document.getElementById('btn-exit-eng-quiz').addEventListener('click', () => {
          sound.playTap();
          this.exitTargetScreen = 'screen-eng-stages';
          document.getElementById('modal-exit-confirm').classList.add('active');
        });

        document.getElementById('btn-cancel-exit').addEventListener('click', () => {
          sound.playTap();
          document.getElementById('modal-exit-confirm').classList.remove('active');
        });

        document.getElementById('btn-confirm-exit').addEventListener('click', () => {
          sound.playTap();
          document.getElementById('modal-exit-confirm').classList.remove('active');
          if (this.exitTargetScreen === 'screen-stages') {
            this.renderMathStages();
            this.navigateTo('screen-stages');
          } else {
            this.renderEngStages();
            this.navigateTo('screen-eng-stages');
          }
        });

        // Settings Modal
        document.getElementById('btn-open-settings').addEventListener('click', () => {
          sound.playTap();
          const challenges = [
            { q: "120 × 2 = ?", a: 240 },
            { q: "45 + 55 = ?", a: 100 },
            { q: "90 ÷ 3 = ?", a: 30 },
            { q: "150 × 3 = ?", a: 450 }
          ];
          const chosen = challenges[Math.floor(Math.random() * challenges.length)];
          this.parentChallengeAnswer = chosen.a;
          document.getElementById('parent-math-question').textContent = chosen.q;
          document.getElementById('parent-math-answer').value = '';
          document.getElementById('modal-settings').classList.add('active');
        });

        document.getElementById('btn-close-settings').addEventListener('click', () => {
          sound.playTap();
          document.getElementById('modal-settings').classList.remove('active');
        });

        document.getElementById('btn-confirm-reset-db').addEventListener('click', () => {
          const inputVal = parseInt(document.getElementById('parent-math-answer').value, 10);
          if (inputVal === this.parentChallengeAnswer) {
            db.resetAll();
            document.getElementById('modal-settings').classList.remove('active');
            this.showToast(this.t('resetSuccess'), "✅");
            this.renderHomeScreen();
          } else {
            sound.playWrong();
            this.showToast(this.t('resetFailed'), "❌");
          }
        });
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      window.app = new AppController();
    });
  `;
}

module.exports = { getClientJS };
