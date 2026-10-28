// src/html.js - HTML Screens & Modals Markup
function getHTML(ICONS) {
  return `
    <canvas id="confetti-canvas"></canvas>

    <!-- 1. SPLASH SCREEN -->
    <div id="screen-splash" class="screen active">
      <div class="splash-top">
        <div class="splash-hero-badge">🦁</div>
      </div>
      <div class="splash-center">
        <h1 class="splash-title">Salom, Savarbek!</h1>
        <p class="splash-quote" id="splash-quote-text">Bugun sen albatta chempion bo'lasan! 🚀</p>
      </div>
      <div class="splash-bottom">
        <div class="splash-progress-track">
          <div class="splash-progress-fill" id="splash-progress-fill"></div>
        </div>
        <div class="splash-timer-text" id="splash-timer-text">5 soniya...</div>
      </div>
    </div>

    <!-- 2. HOME SCREEN -->
    <div id="screen-home" class="screen">
      <header class="app-header">
        <div class="header-user-info">
          <div class="header-greeting" id="header-user-greeting">👋 Salom, Savarbek!</div>
          <div class="header-subtext" id="header-user-rank">2-sinf a'lochisi 🎓</div>
        </div>
        <div class="header-actions">
          <!-- Language Toggle Button -->
          <button class="lang-toggle-btn" id="btn-toggle-lang" title="Tilni almashtirish / Сменить язык">
            <span class="lang-flag" id="lang-btn-flag">🇺🇿</span>
            <span class="lang-code" id="lang-btn-code">UZ</span>
          </button>
          <div class="stars-badge">
            ${ICONS.flaticonStar}
            <span id="home-total-stars">0 / 240</span>
          </div>
          <button class="icon-btn" id="btn-toggle-sound" title="Ovozni o'chirish/yoqish">
            <span id="sound-icon">${ICONS.soundOn}</span>
          </button>
          <button class="icon-btn" id="btn-open-settings" title="Sozlamalar">
            ${ICONS.settings}
          </button>
        </div>
      </header>

      <div class="home-content">
        <div class="banner-card">
          <div class="banner-text">
            <h3 id="home-banner-title">Katta G'alabalar Sari! 🚀</h3>
            <p id="home-banner-subtitle">Matematika va Ingliz tilidan chempion bo'l!</p>
          </div>
          <div class="banner-icon">🦁</div>
        </div>

        <div class="section-label" id="home-section-label">O'quv Fanlari</div>

        <div class="subjects-grid">
          <!-- 1. Matematika -->
          <div class="subject-card math" id="card-open-math">
            <div class="subject-card-header">
              <div class="subject-icon-box">${ICONS.flaticonMath}</div>
              <div class="subject-details">
                <div class="subject-title">
                  <span id="home-math-title">Matematika</span>
                  <span style="font-size: 14px;">⚡</span>
                </div>
                <div class="subject-desc" id="home-math-desc">40 ta bosqich • 4 ta amal</div>
              </div>
            </div>
            <div class="subject-meta">
              <div class="subject-stat-row">
                <span id="home-math-overall-lbl" style="color: var(--text-muted);">Umumiy o'zlashtirish:</span>
                <span id="home-math-percentage" style="color: #4F46E5;">0%</span>
              </div>
              <div class="subject-progress-track">
                <div class="subject-progress-fill" id="home-math-progress-fill" style="width: 0%;"></div>
              </div>
            </div>
          </div>

          <!-- 2. Ingliz Tili -->
          <div class="subject-card english" id="card-open-english">
            <div class="subject-card-header">
              <div class="subject-icon-box">${ICONS.flaticonEnglish}</div>
              <div class="subject-details">
                <div class="subject-title">
                  <span id="home-eng-title">Ingliz tili</span>
                  <span id="home-eng-active-tag" style="font-size: 11px; background: #DCFCE7; color: #15803D; padding: 2px 8px; border-radius: 99px; font-weight: 800;">Faol 🚀</span>
                </div>
                <div class="subject-desc" id="home-eng-desc">40 ta bosqich • 4 ta yo'nalish</div>
              </div>
            </div>
            <div class="subject-meta">
              <div class="subject-stat-row">
                <span id="home-eng-overall-lbl" style="color: var(--text-muted);">Umumiy o'zlashtirish:</span>
                <span id="home-eng-percentage" style="color: #0284C7;">0%</span>
              </div>
              <div class="subject-progress-track">
                <div class="subject-progress-fill" id="home-eng-progress-fill" style="width: 0%; background: linear-gradient(90deg, #0EA5E9, #10B981);"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. MATH OPERATIONS SCREEN -->
    <div id="screen-math-ops" class="screen">
      <div class="screen-nav-bar">
        <button class="btn-back-nav" id="btn-back-from-math-ops">
          ${ICONS.back} <span class="nav-back-lbl">Orqaga</span>
        </button>
        <div class="screen-title" id="math-ops-title">Amalni tanla</div>
        <div style="width: 70px;"></div>
      </div>

      <div class="operations-content">
        <!-- Addition -->
        <div class="op-card addition" id="op-card-addition">
          <div class="op-icon">${ICONS.flaticonAdd}</div>
          <div class="op-info">
            <div class="op-header-row">
              <div class="op-title" id="op-add-title">Qo'shish</div>
              <div class="op-badge" id="op-add-badge">0 / 10</div>
            </div>
            <div class="op-subtext" id="op-add-desc">1-xona, 2-xona va o'tishli misollar</div>
          </div>
        </div>

        <!-- Subtraction -->
        <div class="op-card subtraction" id="op-card-subtraction">
          <div class="op-icon">${ICONS.flaticonSub}</div>
          <div class="op-info">
            <div class="op-header-row">
              <div class="op-title" id="op-sub-title">Ayirish</div>
              <div class="op-badge" id="op-sub-badge">0 / 10</div>
            </div>
            <div class="op-subtext" id="op-sub-desc">Qarzsiz va qarz olib ayirish</div>
          </div>
        </div>

        <!-- Multiplication -->
        <div class="op-card multiplication" id="op-card-multiplication">
          <div class="op-icon">${ICONS.flaticonMul}</div>
          <div class="op-info">
            <div class="op-header-row">
              <div class="op-title" id="op-mul-title">Ko'paytirish</div>
              <div class="op-badge" id="op-mul-badge">0 / 10</div>
            </div>
            <div class="op-subtext" id="op-mul-desc">Jadval va 1-xonali songa ko'paytirish</div>
          </div>
        </div>

        <!-- Division -->
        <div class="op-card division" id="op-card-division">
          <div class="op-icon">${ICONS.flaticonDiv}</div>
          <div class="op-info">
            <div class="op-header-row">
              <div class="op-title" id="op-div-title">Bo'lish</div>
              <div class="op-badge" id="op-div-badge">0 / 10</div>
            </div>
            <div class="op-subtext" id="op-div-desc">Qoldiqsiz karra jadvali bo'yicha bo'lish</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 4. MATH STAGES SCREEN (10 Stages) -->
    <div id="screen-stages" class="screen">
      <div class="screen-nav-bar">
        <button class="btn-back-nav" id="btn-back-from-stages">
          ${ICONS.back} <span class="nav-back-lbl">Orqaga</span>
        </button>
        <div class="screen-title" id="stages-nav-title">Bosqichlar</div>
        <div style="width: 70px;"></div>
      </div>

      <div class="stages-content">
        <div class="stages-summary-bar">
          <span id="stages-summary-count">Etaplar: 0 / 10</span>
          <span id="stages-summary-avg" style="color: var(--primary);">O'rtacha: 0%</span>
        </div>
        <div class="stages-grid" id="math-stages-container">
          <!-- Dynamically injected -->
        </div>
      </div>
    </div>

    <!-- 5. MATH QUIZ GAME SCREEN -->
    <div id="screen-quiz" class="screen">
      <div class="quiz-top-bar">
        <div class="quiz-meta-row">
          <button class="btn-exit-quiz" id="btn-exit-quiz">
            ${ICONS.exit} <span class="quiz-exit-lbl">Chiqish</span>
          </button>
          <div class="quiz-counter-tag" id="quiz-question-counter">1-Etap | Savol: 1 / 10</div>
        </div>
        <div class="progress-dots-row" id="quiz-progress-dots">
          <!-- 10 dots injected -->
        </div>
      </div>

      <div class="quiz-center-area">
        <div class="question-card" id="quiz-question-card">
          <div class="math-formula">
            <span id="math-num1">12</span>
            <span id="math-op-sign" style="color: var(--primary);">+</span>
            <span id="math-num2">5</span>
            <span>=</span>
            <div class="input-box-display" id="math-answer-display">?</div>
          </div>
          <div class="feedback-box" id="quiz-feedback-box"></div>
          <button class="btn-skip-wrong" id="btn-skip-wrong" style="display: none;">
            ${ICONS.next} <span class="quiz-continue-lbl">Davom etish</span>
          </button>
        </div>
      </div>

      <div class="numpad-container">
        <button class="numpad-btn num-key" data-key="1">1</button>
        <button class="numpad-btn num-key" data-key="2">2</button>
        <button class="numpad-btn num-key" data-key="3">3</button>
        <button class="numpad-btn num-key" data-key="4">4</button>
        <button class="numpad-btn num-key" data-key="5">5</button>
        <button class="numpad-btn num-key" data-key="6">6</button>
        <button class="numpad-btn num-key" data-key="7">7</button>
        <button class="numpad-btn num-key" data-key="8">8</button>
        <button class="numpad-btn num-key" data-key="9">9</button>
        <button class="numpad-btn num-key btn-delete" data-key="del">${ICONS.delete}</button>
        <button class="numpad-btn num-key" data-key="0">0</button>
        <button class="numpad-btn num-key btn-submit" data-key="submit" id="btn-math-submit">${ICONS.check}</button>
      </div>
    </div>

    <!-- 6. MATH RESULT SCREEN -->
    <div id="screen-result" class="screen">
      <div class="result-content">
        <div class="result-trophy-box">${ICONS.flaticonTrophy}</div>
        <div class="result-title" id="result-title-text">Ajoyib natija! 🌟</div>
        <div class="new-record-tag" id="result-record-banner" style="display: none;">YANGI REKORD! 🏆</div>
        <div class="result-stars-row" id="result-stars-display"></div>

        <div class="result-stats-card">
          <div class="stat-item">
            <div class="stat-val" id="result-score-val">10/10</div>
            <div class="stat-lbl" id="result-stat-correct-lbl">To'g'ri</div>
          </div>
          <div class="stat-item">
            <div class="stat-val" id="result-percentage-val">100%</div>
            <div class="stat-lbl" id="result-stat-acc-lbl">Natija</div>
          </div>
          <div class="stat-item">
            <div class="stat-val" id="result-stars-count">+3</div>
            <div class="stat-lbl" id="result-stat-stars-lbl">Yulduz</div>
          </div>
        </div>

        <div class="result-actions">
          <button class="btn-result-action primary" id="btn-next-stage">
            ${ICONS.next} <span id="result-btn-next-lbl">Keyingi etap</span>
          </button>
          <button class="btn-result-action secondary" id="btn-retry-stage">
            ${ICONS.retry} <span id="result-btn-retry-lbl">Qayta ishlash</span>
          </button>
          <button class="btn-result-action secondary" id="btn-back-to-stages">
            ${ICONS.list} <span id="result-btn-stages-lbl">Etaplarga qaytish</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 7. ENGLISH CATEGORIES SCREEN -->
    <div id="screen-eng-cats" class="screen">
      <div class="screen-nav-bar">
        <button class="btn-back-nav" id="btn-back-from-eng-cats">
          ${ICONS.back} <span class="nav-back-lbl">Orqaga</span>
        </button>
        <div class="screen-title" id="eng-cats-title">Ingliz tili</div>
        <div style="width: 70px;"></div>
      </div>

      <div class="operations-content">
        <!-- 1. Vocabulary -->
        <div class="op-card vocabulary" id="cat-card-vocabulary">
          <div class="op-icon">${ICONS.flaticonVocabulary}</div>
          <div class="op-info">
            <div class="op-header-row">
              <div class="op-title" id="cat-vocab-title">So'z boyligi</div>
              <div class="op-badge" id="cat-vocab-badge">0 / 10</div>
            </div>
            <div class="op-subtext" id="cat-vocab-desc">100+ rasmli va tarjimali so'zlar</div>
          </div>
        </div>

        <!-- 2. Listening -->
        <div class="op-card listening" id="cat-card-listening">
          <div class="op-icon">${ICONS.flaticonListening}</div>
          <div class="op-info">
            <div class="op-header-row">
              <div class="op-title" id="cat-listen-title">Eshitib topish</div>
              <div class="op-badge" id="cat-listen-badge">0 / 10</div>
            </div>
            <div class="op-subtext" id="cat-listen-desc">Audio talaffuz orqali to'g'ri so'zni top</div>
          </div>
        </div>

        <!-- 3. Spelling -->
        <div class="op-card spelling" id="cat-card-spelling">
          <div class="op-icon">${ICONS.flaticonSpelling}</div>
          <div class="op-info">
            <div class="op-header-row">
              <div class="op-title" id="cat-spell-title">So'z terish</div>
              <div class="op-badge" id="cat-spell-badge">0 / 10</div>
            </div>
            <div class="op-subtext" id="cat-spell-desc">Aralash harflardan to'g'ri so'z yasa</div>
          </div>
        </div>

        <!-- 4. Grammar -->
        <div class="op-card grammar" id="cat-card-grammar">
          <div class="op-icon">${ICONS.flaticonGrammar}</div>
          <div class="op-info">
            <div class="op-header-row">
              <div class="op-title" id="cat-grammar-title">Grammatika</div>
              <div class="op-badge" id="cat-grammar-badge">0 / 10</div>
            </div>
            <div class="op-subtext" id="cat-grammar-desc">a/an, am/is/are, have/has va qoidalar</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 8. ENGLISH STAGES SCREEN -->
    <div id="screen-eng-stages" class="screen">
      <div class="screen-nav-bar">
        <button class="btn-back-nav" id="btn-back-from-eng-stages">
          ${ICONS.back} <span class="nav-back-lbl">Orqaga</span>
        </button>
        <div class="screen-title" id="eng-stages-nav-title">Bosqichlar</div>
        <div style="width: 70px;"></div>
      </div>

      <div class="stages-content">
        <div class="stages-summary-bar">
          <span id="eng-stages-summary-count">Etaplar: 0 / 10</span>
          <span id="eng-stages-summary-avg" style="color: #0284C7;">O'rtacha: 0%</span>
        </div>
        <div class="stages-grid" id="eng-stages-container">
          <!-- Dynamically injected -->
        </div>
      </div>
    </div>

    <!-- 9. ENGLISH QUIZ GAME SCREEN -->
    <div id="screen-eng-quiz" class="screen">
      <div class="quiz-top-bar">
        <div class="quiz-meta-row">
          <button class="btn-exit-quiz" id="btn-exit-eng-quiz">
            ${ICONS.exit} <span class="quiz-exit-lbl">Chiqish</span>
          </button>
          <div class="quiz-counter-tag" id="eng-quiz-question-counter">1-Etap | Savol: 1 / 10</div>
        </div>
        <div class="progress-dots-row" id="eng-quiz-progress-dots">
          <!-- 10 dots injected -->
        </div>
      </div>

      <div class="quiz-center-area">
        <div class="question-card" id="eng-quiz-question-card">
          <div id="eng-quiz-card-content"></div>
          <div class="feedback-box" id="eng-quiz-feedback-box"></div>
          <button class="btn-skip-wrong" id="btn-eng-skip-wrong" style="display: none;">
            ${ICONS.next} <span class="quiz-continue-lbl">Davom etish</span>
          </button>
        </div>
      </div>

      <div id="eng-quiz-bottom-panel"></div>
    </div>

    <!-- 10. ENGLISH RESULT SCREEN -->
    <div id="screen-eng-result" class="screen">
      <div class="result-content">
        <div class="result-trophy-box">${ICONS.flaticonTrophy}</div>
        <div class="result-title" id="eng-result-title-text">Ajoyib natija! 🌟</div>
        <div class="new-record-tag" id="eng-result-record-banner" style="display: none;">YANGI REKORD! 🏆</div>
        <div class="result-stars-row" id="eng-result-stars-display"></div>

        <div class="result-stats-card">
          <div class="stat-item">
            <div class="stat-val" id="eng-result-score-val">10/10</div>
            <div class="stat-lbl" id="eng-result-stat-correct-lbl">To'g'ri</div>
          </div>
          <div class="stat-item">
            <div class="stat-val" id="eng-result-percentage-val">100%</div>
            <div class="stat-lbl" id="eng-result-stat-acc-lbl">Natija</div>
          </div>
          <div class="stat-item">
            <div class="stat-val" id="eng-result-stars-count">+3</div>
            <div class="stat-lbl" id="eng-result-stat-stars-lbl">Yulduz</div>
          </div>
        </div>

        <div class="result-actions">
          <button class="btn-result-action primary" id="btn-eng-next-stage">
            ${ICONS.next} <span id="eng-result-btn-next-lbl">Keyingi etap</span>
          </button>
          <button class="btn-result-action secondary" id="btn-eng-retry-stage">
            ${ICONS.retry} <span id="eng-result-btn-retry-lbl">Qayta ishlash</span>
          </button>
          <button class="btn-result-action secondary" id="btn-eng-back-to-stages">
            ${ICONS.list} <span id="eng-result-btn-stages-lbl">Etaplarga qaytish</span>
          </button>
        </div>
      </div>
    </div>

    <!-- MODAL: EXIT CONFIRM -->
    <div class="modal-overlay" id="modal-exit-confirm">
      <div class="modal-box">
        <div class="modal-title" id="modal-exit-title">O'yindan chiqmoqchimisiz?</div>
        <div class="modal-desc" id="modal-exit-desc">Hozirgi natijangiz saqlanmaydi va etap boshidan boshlanadi.</div>
        <div class="modal-actions">
          <button class="btn-result-action secondary" id="btn-cancel-exit">Davom etish</button>
          <button class="btn-result-action primary" id="btn-confirm-exit" style="background: #EF4444;">Chiqish</button>
        </div>
      </div>
    </div>

    <!-- MODAL: SETTINGS & LANGUAGE -->
    <div class="modal-overlay" id="modal-settings">
      <div class="modal-box">
        <div class="modal-title" id="settings-modal-title">Sozlamalar ⚙️</div>
        
        <!-- Language Selector -->
        <div>
          <div style="font-size: 14px; font-weight: 800; color: var(--text-main); margin-bottom: 8px;" id="settings-lang-title">Tilni tanlang / Язык:</div>
          <div class="lang-chooser-row">
            <button class="lang-choice-btn" id="btn-lang-uz">🇺🇿 O'zbekcha</button>
            <button class="lang-choice-btn" id="btn-lang-ru">🇷🇺 Русский</button>
          </div>
        </div>

        <!-- Danger Zone: Reset Data -->
        <div style="border-top: 1.5px solid var(--border-color); padding-top: 14px;">
          <div style="font-size: 14px; font-weight: 800; color: #DC2626; margin-bottom: 4px;" id="settings-danger-title">Natijalarni tozalash</div>
          <div class="modal-desc" id="settings-danger-desc" style="font-size: 13px;">Ota-onalar nazorati ostida barcha yulduz va rekordlarni 0 ga tushirish.</div>
          <div style="margin-top: 10px; display: flex; align-items: center; gap: 8px;">
            <span style="font-weight: 800; font-size: 14px;" id="parent-math-question">120 × 2 = ?</span>
            <input type="number" id="parent-math-answer" placeholder="Javob" style="width: 80px; padding: 6px 10px; border-radius: 8px; border: 1.5px solid #CBD5E1; font-weight: 800; font-size: 14px; text-align: center;">
          </div>
        </div>

        <div class="modal-actions" style="margin-top: 8px;">
          <button class="btn-result-action secondary" id="btn-close-settings">Yopish</button>
          <button class="btn-result-action primary" id="btn-confirm-reset-db" style="background: #EF4444; font-size: 14px;">Tozalash</button>
        </div>
      </div>
    </div>

    <!-- TOAST NOTIFICATION -->
    <div class="toast-container" id="toast-container">
      <span id="toast-icon">🚀</span>
      <span id="toast-text">Savarbek Edu</span>
    </div>
  `;
}

module.exports = { getHTML };
