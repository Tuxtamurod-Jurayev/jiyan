// src/styles.js - Responsive CSS & Micro-interactions
const STYLES = `
    /* ========== CSS RESET & BASE VARIABLES ========== */
    :root {
      --primary: #4F46E5;
      --primary-dark: #4338CA;
      --primary-light: #EEF2FF;
      --success: #10B981;
      --success-dark: #059669;
      --danger: #EF4444;
      --danger-dark: #DC2626;
      --warning: #F59E0B;
      --warning-dark: #D97706;
      --purple: #8B5CF6;
      --purple-dark: #7C3AED;
      --blue: #0EA5E9;
      --blue-dark: #0284C7;
      --bg-main: #F1F5F9;
      --card-bg: #FFFFFF;
      --text-main: #1E293B;
      --text-muted: #64748B;
      --border-color: #E2E8F0;
      --radius-sm: 12px;
      --radius-md: 18px;
      --radius-lg: 24px;
      --radius-full: 9999px;
      --font-heading: 'Outfit', sans-serif;
      --font-body: 'Nunito', sans-serif;
      --shadow-sm: 0 2px 4px rgba(0,0,0,0.04);
      --shadow-md: 0 6px 16px rgba(0,0,0,0.06);
      --shadow-lg: 0 12px 28px rgba(0,0,0,0.1);
      --transition-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      -webkit-user-select: none;
    }

    body {
      font-family: var(--font-body);
      background-color: #0F172A;
      color: var(--text-main);
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      min-height: 100dvh;
      overflow-x: hidden;
      margin: 0;
    }

    #app-container {
      width: 100%;
      max-width: 480px;
      height: 100vh;
      height: 100dvh;
      background: var(--bg-main);
      position: relative;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
      padding-top: env(safe-area-inset-top, 0px);
      padding-bottom: env(safe-area-inset-bottom, 0px);
    }

    button, .btn, .num-key, .option-btn, .eng-opt-btn, .letter-tile, .action-card, .stage-card, .subject-card, .lang-toggle-btn {
      touch-action: manipulation;
      cursor: pointer;
    }

    @media (min-width: 481px) {
      #app-container {
        height: 94vh;
        height: 94dvh;
        max-height: 920px;
        border-radius: 36px;
        border: 4px solid #334155;
      }
    }

    .screen {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.28s ease, transform 0.28s var(--transition-spring);
      transform: scale(0.97) translateY(8px);
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      background: var(--bg-main);
    }

    .screen.active {
      opacity: 1;
      pointer-events: auto;
      transform: scale(1) translateY(0);
      z-index: 10;
    }

    .screen::-webkit-scrollbar {
      width: 5px;
    }
    .screen::-webkit-scrollbar-track {
      background: transparent;
    }
    .screen::-webkit-scrollbar-thumb {
      background: #CBD5E1;
      border-radius: 10px;
    }

    h1, h2, h3, h4, .font-heading {
      font-family: var(--font-heading);
    }

    /* ========== 1. SPLASH SCREEN ========== */
    #screen-splash {
      background: linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%);
      color: #FFFFFF;
      justify-content: space-between;
      align-items: center;
      padding: 48px 24px 36px;
      text-align: center;
      z-index: 50;
    }

    .splash-top {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .splash-hero-badge {
      width: 120px;
      height: 120px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.04) 100%);
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-radius: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 64px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
      animation: floatBadge 3s ease-in-out infinite;
      backdrop-filter: blur(8px);
    }

    @keyframes floatBadge {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-12px) rotate(3deg); }
    }

    .splash-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      max-width: 320px;
    }

    .splash-title {
      font-size: 32px;
      font-weight: 900;
      letter-spacing: -0.5px;
      text-shadow: 0 4px 12px rgba(0,0,0,0.3);
      background: linear-gradient(to right, #FFFFFF, #E0E7FF);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .splash-quote {
      font-size: 16px;
      line-height: 1.5;
      color: #C7D2FE;
      font-weight: 600;
      min-height: 48px;
    }

    .splash-bottom {
      width: 100%;
      max-width: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .splash-progress-track {
      width: 100%;
      height: 10px;
      background: rgba(255, 255, 255, 0.15);
      border-radius: var(--radius-full);
      overflow: hidden;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.25);
    }

    .splash-progress-fill {
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, #F59E0B, #10B981);
      border-radius: var(--radius-full);
      transition: width 0.1s linear;
    }

    .splash-timer-text {
      font-size: 14px;
      font-weight: 800;
      color: #A5B4FC;
      letter-spacing: 1px;
    }

    /* ========== 2. APP HEADER ========== */
    .app-header {
      padding: clamp(8px, 1.4vh, 12px) clamp(10px, 2.8vw, 16px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(12px);
      border-bottom: 2px solid var(--border-color);
      flex-shrink: 0;
      position: sticky;
      top: 0;
      z-index: 20;
      gap: 6px;
    }

    .header-user-info {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      min-width: 0;
    }

    .header-greeting {
      font-size: clamp(15px, 4vw, 18px);
      font-weight: 800;
      color: var(--text-main);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .header-subtext {
      font-size: clamp(11px, 2.8vw, 13px);
      font-weight: 700;
      color: var(--primary);
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: clamp(4px, 1.4vw, 8px);
      flex: 0 0 auto;
    }

    .lang-toggle-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: #EEF2FF;
      border: 1.5px solid #C7D2FE;
      color: var(--primary);
      font-weight: 800;
      font-size: clamp(11px, 3vw, 13px);
      padding: 4px 8px;
      border-radius: var(--radius-full);
      transition: all 0.2s var(--transition-spring);
    }
    .lang-toggle-btn:hover {
      background: #E0E7FF;
      transform: scale(1.05);
    }
    .lang-toggle-btn:active {
      transform: scale(0.95);
    }

    .stars-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: #FFFBEB;
      border: 1.5px solid #FCD34D;
      color: #B45309;
      font-weight: 800;
      font-size: clamp(11px, 3vw, 13px);
      padding: 4px 8px;
      border-radius: var(--radius-full);
      box-shadow: var(--shadow-sm);
    }

    .icon-btn {
      width: clamp(32px, 8vw, 36px);
      height: clamp(32px, 8vw, 36px);
      border-radius: var(--radius-sm);
      background: #F1F5F9;
      border: 1.5px solid #CBD5E1;
      color: #475569;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s var(--transition-spring);
    }
    .icon-btn:hover {
      background: #E2E8F0;
      color: var(--text-main);
      transform: scale(1.06);
    }
    .icon-btn:active {
      transform: scale(0.94);
    }

    /* Screen Top Navigation Bar */
    .screen-nav-bar {
      padding: 12px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #FFFFFF;
      border-bottom: 2px solid var(--border-color);
      flex-shrink: 0;
      position: sticky;
      top: 0;
      z-index: 15;
    }

    .screen-title {
      font-size: 19px;
      font-weight: 800;
      color: var(--text-main);
    }

    .btn-back-nav {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 14px;
      font-weight: 800;
      color: #475569;
      background: #F1F5F9;
      border: 1.5px solid #CBD5E1;
      border-radius: var(--radius-md);
      padding: 7px 14px;
      cursor: pointer;
      transition: all 0.2s var(--transition-spring);
    }
    .btn-back-nav:hover {
      background: #E2E8F0;
      color: var(--primary);
      transform: translateX(-2px);
    }
    .btn-back-nav:active {
      transform: scale(0.95);
    }

    /* ========== 3. HOME SCREEN ========== */
    .home-content {
      padding: 16px 18px 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .banner-card {
      background: linear-gradient(135deg, #4338CA 0%, #6366F1 100%);
      border-radius: var(--radius-lg);
      padding: 16px 18px;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 10px 24px rgba(79, 70, 229, 0.28);
      position: relative;
      overflow: hidden;
    }

    .banner-text h3 {
      font-size: 18px;
      font-weight: 800;
      margin-bottom: 4px;
    }

    .banner-text p {
      font-size: 13px;
      color: #E0E7FF;
      font-weight: 600;
    }

    .banner-icon {
      font-size: 42px;
      animation: floatBadge 3s ease-in-out infinite;
    }

    .section-label {
      font-size: 15px;
      font-weight: 800;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.8px;
      margin-top: 4px;
    }

    .subjects-grid {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .subject-card {
      background: #FFFFFF;
      border-radius: var(--radius-lg);
      padding: 18px;
      border: 2.5px solid var(--border-color);
      border-bottom: 5px solid var(--border-color);
      cursor: pointer;
      transition: all 0.22s var(--transition-spring);
      display: flex;
      flex-direction: column;
      gap: 12px;
      box-shadow: var(--shadow-sm);
      position: relative;
    }
    .subject-card:hover {
      transform: translateY(-4px) scale(1.01);
      box-shadow: 0 14px 28px rgba(0,0,0,0.08);
    }
    .subject-card:active {
      transform: translateY(2px) scale(0.99);
      border-bottom-width: 2.5px;
    }

    .subject-card.math {
      border-color: #818CF8;
      border-bottom-color: #4F46E5;
      background: linear-gradient(to bottom, #FFFFFF, #F8FAFC);
    }
    .subject-card.english {
      border-color: #38BDF8;
      border-bottom-color: #0284C7;
      background: linear-gradient(to bottom, #FFFFFF, #F0F9FF);
    }

    .subject-card-header {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .subject-icon-box {
      width: 58px;
      height: 58px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      box-shadow: var(--shadow-md);
    }

    .subject-details {
      display: flex;
      flex-direction: column;
      gap: 3px;
      flex: 1;
    }

    .subject-title {
      font-size: 20px;
      font-weight: 900;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .subject-desc {
      font-size: 13px;
      font-weight: 700;
      color: var(--text-muted);
    }

    .subject-meta {
      display: flex;
      flex-direction: column;
      gap: 6px;
      background: #F8FAFC;
      border-radius: var(--radius-md);
      padding: 10px 12px;
      border: 1px solid #E2E8F0;
    }

    .subject-stat-row {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      font-weight: 800;
    }

    .subject-progress-track {
      width: 100%;
      height: 8px;
      background: #E2E8F0;
      border-radius: var(--radius-full);
      overflow: hidden;
    }

    .subject-progress-fill {
      height: 100%;
      width: 0%;
      border-radius: var(--radius-full);
      transition: width 0.4s ease;
      background: linear-gradient(90deg, #4F46E5, #06B6D4);
    }

    /* ========== 4. MATH OPERATIONS & ENG CATEGORIES ========== */
    .operations-content {
      padding: 14px 18px 24px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .op-card {
      background: #FFFFFF;
      border-radius: var(--radius-lg);
      padding: 14px 16px;
      border: 2px solid var(--border-color);
      border-bottom: 4px solid var(--border-color);
      display: flex;
      align-items: center;
      gap: 14px;
      cursor: pointer;
      transition: all 0.2s var(--transition-spring);
    }
    .op-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.06);
    }
    .op-card:active {
      transform: translateY(2px);
      border-bottom-width: 2px;
    }

    .op-card.addition { border-color: #A7F3D0; border-bottom-color: #059669; }
    .op-card.subtraction { border-color: #BAE6FD; border-bottom-color: #0284C7; }
    .op-card.multiplication { border-color: #FDE68A; border-bottom-color: #D97706; }
    .op-card.division { border-color: #DDD6FE; border-bottom-color: #7C3AED; }

    .op-card.vocabulary { border-color: #BFDBFE; border-bottom-color: #2563EB; }
    .op-card.listening { border-color: #FBCFE8; border-bottom-color: #DB2777; }
    .op-card.spelling { border-color: #A7F3D0; border-bottom-color: #059669; }
    .op-card.grammar { border-color: #FDE68A; border-bottom-color: #D97706; }

    .op-icon {
      width: 52px;
      height: 52px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .op-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
    }

    .op-header-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .op-title {
      font-size: 17px;
      font-weight: 800;
      color: var(--text-main);
    }

    .op-badge {
      font-size: 12px;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: var(--radius-full);
      background: #F1F5F9;
      color: var(--text-muted);
    }

    .op-subtext {
      font-size: 12px;
      font-weight: 600;
      color: var(--text-muted);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* ========== 5. STAGES SCREEN (10 STAGES) ========== */
    .stages-content {
      padding: 14px 16px 28px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .stages-summary-bar {
      background: #FFFFFF;
      border-radius: var(--radius-md);
      padding: 12px 16px;
      border: 1.5px solid var(--border-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 800;
      font-size: 14px;
    }

    .stages-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: clamp(8px, 2.5vw, 12px);
    }

    .stage-card {
      background: #FFFFFF;
      border-radius: var(--radius-md);
      padding: 12px 14px;
      border: 2px solid var(--border-color);
      border-bottom: 4px solid var(--border-color);
      display: flex;
      flex-direction: column;
      gap: 8px;
      cursor: pointer;
      transition: all 0.2s var(--transition-spring);
      position: relative;
    }
    .stage-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 18px rgba(0,0,0,0.06);
    }
    .stage-card:active {
      transform: translateY(2px);
      border-bottom-width: 2px;
    }

    .stage-card.locked {
      opacity: 0.65;
      background: #F8FAFC;
      border-color: #E2E8F0;
      cursor: not-allowed;
    }

    .stage-card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .stage-num-badge {
      font-size: 13px;
      font-weight: 800;
      color: var(--primary);
      background: var(--primary-light);
      padding: 3px 8px;
      border-radius: var(--radius-sm);
    }

    .stage-topic-title {
      font-size: 14px;
      font-weight: 800;
      color: var(--text-main);
      line-height: 1.3;
      min-height: 36px;
      display: flex;
      align-items: center;
    }

    .stage-meta-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      font-weight: 800;
    }

    .stage-stars-row {
      display: flex;
      gap: 2px;
    }

    /* ========== 6. QUIZ GAME SCREEN (MATH & ENG) ========== */
    #screen-quiz, #screen-eng-quiz {
      background: #F8FAFC;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .quiz-top-bar {
      padding: clamp(8px, 1.4vh, 12px) 16px;
      background: #FFFFFF;
      border-bottom: 2px solid var(--border-color);
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex-shrink: 0;
    }

    .quiz-meta-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .btn-exit-quiz {
      border: 1.5px solid #FCA5A5;
      background: #FEF2F2;
      color: #DC2626;
      font-size: 13px;
      font-weight: 800;
      padding: 5px 12px;
      border-radius: var(--radius-md);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s var(--transition-spring);
    }
    .btn-exit-quiz:hover {
      background: #FEE2E2;
      transform: scale(1.04);
    }
    .btn-exit-quiz:active {
      transform: scale(0.95);
    }

    .quiz-counter-tag {
      font-size: 13px;
      font-weight: 800;
      color: var(--primary);
      background: var(--primary-light);
      padding: 5px 12px;
      border-radius: var(--radius-full);
      border: 1.5px solid #C7D2FE;
    }

    .progress-dots-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 4px;
    }

    .progress-dot {
      flex: 1;
      height: 10px;
      border-radius: var(--radius-full);
      background: #E2E8F0;
      transition: all 0.25s var(--transition-spring);
    }
    .progress-dot.current {
      background: #3B82F6;
      transform: scaleY(1.3);
      box-shadow: 0 0 8px rgba(59, 130, 246, 0.7);
    }
    .progress-dot.correct { background: #10B981; }
    .progress-dot.wrong { background: #EF4444; }

    .quiz-center-area {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: clamp(10px, 2vh, 16px) clamp(12px, 3vw, 18px);
      min-height: 0;
    }

    .question-card {
      width: 100%;
      background: #FFFFFF;
      border-radius: var(--radius-lg);
      padding: clamp(14px, 2.5vh, 22px) clamp(12px, 3vw, 20px);
      border: 3px solid var(--border-color);
      box-shadow: 0 8px 24px rgba(0,0,0,0.06);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      transition: all 0.22s var(--transition-spring);
      min-height: clamp(130px, 20vh, 180px);
    }

    .question-card.correct-anim {
      border-color: #10B981;
      background: #F0FDF4;
      transform: scale(1.02);
      box-shadow: 0 10px 28px rgba(16, 185, 129, 0.25);
    }

    .question-card.wrong-anim {
      border-color: #EF4444;
      background: #FEF2F2;
      box-shadow: 0 10px 28px rgba(239, 68, 68, 0.25);
    }

    .math-formula {
      font-family: var(--font-heading);
      font-size: clamp(28px, 7vw, 40px);
      font-weight: 900;
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: clamp(6px, 2vw, 12px);
    }

    .input-box-display {
      min-width: clamp(68px, 16vw, 84px);
      height: clamp(52px, 7.5vh, 66px);
      padding: 0 14px;
      border-radius: var(--radius-md);
      background: #F8FAFC;
      border: 3px dashed var(--primary);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: clamp(28px, 7vw, 38px);
      font-weight: 900;
      color: var(--primary);
      transition: all 0.18s var(--transition-spring);
    }
    .input-box-display.filled {
      border-style: solid;
      background: #EEF2FF;
      color: var(--primary-dark);
      transform: scale(1.03);
    }
    .input-box-display.correct {
      border-color: #10B981;
      background: #DCFCE7;
      color: #15803D;
      border-style: solid;
    }
    .input-box-display.wrong {
      border-color: #EF4444;
      background: #FEE2E2;
      color: #B91C1C;
      border-style: solid;
    }

    .feedback-box {
      margin-top: 10px;
      font-size: 15px;
      font-weight: 800;
      min-height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .feedback-box.correct { color: #15803D; }
    .feedback-box.wrong { color: #B91C1C; }

    .btn-skip-wrong {
      margin-top: 8px;
      background: linear-gradient(135deg, #EF4444, #DC2626);
      color: #FFFFFF;
      font-size: 13px;
      font-weight: 800;
      padding: 7px 16px;
      border-radius: var(--radius-full);
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);
      transition: all 0.2s var(--transition-spring);
    }
    .btn-skip-wrong:hover { transform: scale(1.04); }
    .btn-skip-wrong:active { transform: scale(0.96); }

    /* Math Numpad */
    .numpad-container {
      background: #FFFFFF;
      border-top: 2px solid var(--border-color);
      padding: clamp(8px, 1.5vh, 12px) clamp(10px, 3vw, 16px) clamp(10px, 2vh, 18px);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: clamp(6px, 1.4vw, 10px);
      flex-shrink: 0;
    }

    .numpad-btn {
      height: clamp(44px, 6.2vh, 58px);
      background: #F8FAFC;
      border: 2px solid #CBD5E1;
      border-bottom: 4px solid #94A3B8;
      border-radius: var(--radius-md);
      font-family: var(--font-heading);
      font-size: clamp(20px, 5.5vw, 26px);
      font-weight: 900;
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.12s var(--transition-spring);
    }
    .numpad-btn:hover {
      background: #F1F5F9;
      transform: translateY(-2px);
    }
    .numpad-btn:active {
      transform: translateY(2px);
      border-bottom-width: 2px;
      background: #E2E8F0;
    }

    .numpad-btn.btn-delete {
      color: #DC2626;
      background: #FEF2F2;
      border-color: #FCA5A5;
      border-bottom-color: #EF4444;
    }
    .numpad-btn.btn-submit {
      color: #FFFFFF;
      background: linear-gradient(135deg, #10B981, #059669);
      border-color: #34D399;
      border-bottom-color: #047857;
      opacity: 0.5;
      pointer-events: none;
    }
    .numpad-btn.btn-submit.active {
      opacity: 1;
      pointer-events: auto;
      box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);
    }

    /* English Quiz Specifics */
    .eng-prompt-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
    .eng-prompt-emoji {
      font-size: clamp(38px, 9vw, 52px);
    }
    .eng-prompt-word {
      font-family: var(--font-heading);
      font-size: clamp(24px, 6vw, 32px);
      font-weight: 900;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .eng-prompt-subtext {
      font-size: clamp(13px, 3.5vw, 15px);
      font-weight: 700;
      color: var(--text-muted);
    }

    .btn-speak-inline {
      width: 36px;
      height: 36px;
      border-radius: var(--radius-full);
      background: var(--primary-light);
      border: 1.5px solid #C7D2FE;
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s var(--transition-spring);
    }
    .btn-speak-inline:hover {
      background: #E0E7FF;
      transform: scale(1.08);
    }
    .btn-speak-inline:active {
      transform: scale(0.92);
    }

    .audio-listening-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
    }

    .btn-audio-pulse {
      width: 80px;
      height: 80px;
      border-radius: var(--radius-full);
      background: linear-gradient(135deg, #3B82F6, #2563EB);
      border: 4px solid #93C5FD;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 8px 24px rgba(37, 99, 235, 0.35);
      transition: all 0.2s var(--transition-spring);
      position: relative;
    }
    .btn-audio-pulse:hover {
      transform: scale(1.06);
    }
    .btn-audio-pulse:active {
      transform: scale(0.94);
    }

    .btn-audio-slow {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      background: #F1F5F9;
      border: 1.5px solid #CBD5E1;
      border-radius: var(--radius-full);
      font-size: 13px;
      font-weight: 800;
      color: #475569;
      cursor: pointer;
      transition: all 0.2s var(--transition-spring);
    }
    .btn-audio-slow:hover {
      background: #E2E8F0;
      color: var(--primary);
    }
    .btn-audio-slow:active {
      transform: scale(0.95);
    }

    /* Option Buttons (Mechanic A, B, D) */
    .eng-options-container {
      background: #FFFFFF;
      border-top: 2px solid var(--border-color);
      padding: clamp(10px, 1.8vh, 16px) clamp(12px, 3vw, 18px) clamp(12px, 2.2vh, 22px);
      display: grid;
      grid-template-columns: 1fr;
      gap: clamp(8px, 1.4vh, 12px);
      flex-shrink: 0;
    }

    .eng-opt-btn {
      min-height: clamp(46px, 6.4vh, 56px);
      background: #F8FAFC;
      border: 2px solid #CBD5E1;
      border-bottom: 4px solid #94A3B8;
      border-radius: var(--radius-md);
      font-family: var(--font-heading);
      font-size: clamp(14px, 3.8vw, 16px);
      font-weight: 800;
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px 14px;
      cursor: pointer;
      transition: all 0.15s var(--transition-spring);
      text-align: center;
      gap: 8px;
      word-break: break-word;
    }
    .eng-opt-btn:hover {
      transform: translateY(-2px);
      border-color: #93C5FD;
      background: #F0F9FF;
    }
    .eng-opt-btn:active {
      transform: translateY(2px);
      border-bottom-width: 2px;
      background: #E2E8F0;
    }
    .eng-opt-btn.correct {
      background: #DCFCE7 !important;
      border-color: #86EFAC !important;
      border-bottom-color: #10B981 !important;
      color: #15803D !important;
      transform: scale(1.02);
    }
    .eng-opt-btn.wrong {
      background: #FEE2E2 !important;
      border-color: #FCA5A5 !important;
      border-bottom-color: #EF4444 !important;
      color: #B91C1C !important;
    }

    /* Mechanic C: Spelling Slot Boxes & Letter Tiles */
    .spelling-slots-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      width: 100%;
    }

    .spelling-slots-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: clamp(4px, 1.5vw, 8px);
      flex-wrap: wrap;
    }

    .spelling-slot {
      width: clamp(34px, 7.8vw, 44px);
      height: clamp(40px, 9.2vw, 52px);
      border-radius: var(--radius-sm);
      background: #F1F5F9;
      border: 2.5px dashed #94A3B8;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-size: clamp(18px, 4.8vw, 24px);
      font-weight: 900;
      color: var(--primary);
      cursor: pointer;
      transition: all 0.2s var(--transition-spring);
    }
    .spelling-slot.filled {
      background: #EEF2FF;
      border-style: solid;
      border-color: var(--primary);
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.18);
    }
    .spelling-slot.correct {
      background: #DCFCE7;
      border-color: #10B981;
      color: #15803D;
      border-style: solid;
    }
    .spelling-slot.wrong {
      background: #FEE2E2;
      border-color: #EF4444;
      color: #B91C1C;
      border-style: solid;
    }

    .spelling-bank-container {
      background: #FFFFFF;
      border-top: 2px solid var(--border-color);
      padding: clamp(10px, 1.8vh, 16px) clamp(10px, 3vw, 16px) clamp(12px, 2.2vh, 22px);
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
      flex-shrink: 0;
    }

    .spelling-tiles-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: clamp(4px, 1.5vw, 8px);
      max-width: 400px;
    }

    .letter-tile {
      width: clamp(36px, 8.4vw, 48px);
      height: clamp(40px, 8.8vw, 52px);
      background: #FFFFFF;
      border: 2px solid #CBD5E1;
      border-bottom: 4px solid #94A3B8;
      border-radius: var(--radius-md);
      font-family: var(--font-heading);
      font-size: clamp(18px, 4.5vw, 22px);
      font-weight: 900;
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.15s var(--transition-spring);
    }
    .letter-tile:hover {
      background: #F8FAFC;
      transform: translateY(-2px);
      border-color: var(--primary);
    }
    .letter-tile:active {
      transform: translateY(2px);
      border-bottom-width: 2px;
    }
    .letter-tile.used {
      opacity: 0.25;
      pointer-events: none;
      transform: scale(0.9);
      border-color: #E2E8F0;
    }

    .btn-clear-spelling {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      background: #F1F5F9;
      border: 1.5px solid #CBD5E1;
      border-radius: var(--radius-full);
      font-size: 13px;
      font-weight: 800;
      color: #475569;
      cursor: pointer;
      transition: all 0.2s var(--transition-spring);
    }
    .btn-clear-spelling:hover {
      background: #FEE2E2;
      color: #DC2626;
    }

    /* ========== 7. RESULT SCREEN ========== */
    .result-content {
      padding: 24px 20px 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      text-align: center;
    }

    .result-trophy-box {
      margin-top: 10px;
      position: relative;
    }

    .result-title {
      font-size: 24px;
      font-weight: 900;
      color: var(--text-main);
    }

    .result-stars-row {
      display: flex;
      justify-content: center;
      gap: 8px;
    }

    .result-stats-card {
      width: 100%;
      background: #FFFFFF;
      border-radius: var(--radius-lg);
      padding: 16px 20px;
      border: 2px solid var(--border-color);
      box-shadow: var(--shadow-sm);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .stat-val {
      font-size: 22px;
      font-weight: 900;
      color: var(--primary);
    }
    .stat-lbl {
      font-size: 11px;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
    }

    .new-record-tag {
      background: linear-gradient(135deg, #F59E0B, #D97706);
      color: #FFFFFF;
      font-weight: 900;
      font-size: 13px;
      padding: 6px 16px;
      border-radius: var(--radius-full);
      box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
      animation: pulseDot 1s infinite alternate;
    }

    .result-actions {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 6px;
    }

    .btn-result-action {
      width: 100%;
      height: 52px;
      border-radius: var(--radius-md);
      font-family: var(--font-heading);
      font-size: 16px;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      border: none;
      cursor: pointer;
      transition: all 0.2s var(--transition-spring);
    }

    .btn-result-action.primary {
      background: linear-gradient(135deg, #4F46E5, #4338CA);
      color: #FFFFFF;
      box-shadow: 0 6px 18px rgba(79, 70, 229, 0.35);
    }
    .btn-result-action.primary:hover { transform: translateY(-2px); }
    .btn-result-action.primary:active { transform: translateY(2px); }

    .btn-result-action.secondary {
      background: #FFFFFF;
      color: var(--text-main);
      border: 2px solid var(--border-color);
      border-bottom: 4px solid var(--border-color);
    }
    .btn-result-action.secondary:hover { background: #F8FAFC; }
    .btn-result-action.secondary:active { transform: translateY(2px); border-bottom-width: 2px; }

    /* ========== 8. MODALS & TOASTS ========== */
    .modal-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(15, 23, 42, 0.65);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      z-index: 100;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.22s ease;
    }
    .modal-overlay.active {
      opacity: 1;
      pointer-events: auto;
    }

    .modal-box {
      width: 100%;
      max-width: 360px;
      max-height: 90vh;
      overflow-y: auto;
      background: #FFFFFF;
      border-radius: var(--radius-lg);
      padding: 22px 20px;
      box-shadow: var(--shadow-lg);
      display: flex;
      flex-direction: column;
      gap: 14px;
      transform: scale(0.92);
      transition: transform 0.25s var(--transition-spring);
    }
    .modal-overlay.active .modal-box {
      transform: scale(1);
    }

    .modal-title {
      font-size: 19px;
      font-weight: 900;
      color: var(--text-main);
    }
    .modal-desc {
      font-size: 14px;
      color: var(--text-muted);
      line-height: 1.4;
    }
    .modal-actions {
      display: flex;
      gap: 10px;
      margin-top: 6px;
    }

    .toast-container {
      position: absolute;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%) translateY(30px);
      background: rgba(30, 41, 59, 0.95);
      backdrop-filter: blur(8px);
      color: #FFFFFF;
      padding: 10px 18px;
      border-radius: var(--radius-full);
      font-size: 14px;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 10px 24px rgba(0,0,0,0.25);
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s var(--transition-spring);
      z-index: 200;
      white-space: nowrap;
    }
    .toast-container.active {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }

    #confetti-canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 90;
    }

    /* Language Switcher Buttons in Settings Modal */
    .lang-chooser-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .lang-choice-btn {
      padding: 10px;
      border-radius: var(--radius-md);
      border: 2px solid var(--border-color);
      background: #F8FAFC;
      font-size: 14px;
      font-weight: 800;
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      cursor: pointer;
      transition: all 0.2s var(--transition-spring);
    }
    .lang-choice-btn.active {
      border-color: var(--primary);
      background: var(--primary-light);
      color: var(--primary);
      box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
    }

    /* Small Screen Responsive Fixes */
    @media (max-width: 340px) {
      .header-actions { gap: 3px; }
      .stars-badge { padding: 3px 6px; font-size: 11px; }
      .lang-toggle-btn { padding: 3px 6px; font-size: 11px; }
      .stages-grid { gap: 6px; }
      .stage-card { padding: 10px 8px; }
      .numpad-container { gap: 4px; padding: 6px; }
    }

    @media (max-height: 640px) {
      .quiz-center-area { padding: 4px 10px; }
      .question-card { min-height: 110px; padding: 10px; }
      .banner-card { padding: 10px 14px; margin-bottom: 6px; }
      .subject-card { padding: 12px 14px; gap: 8px; }
      .numpad-btn { height: 42px; font-size: 20px; }
      .eng-opt-btn { min-height: 42px; padding: 6px 10px; }
    }
`;

module.exports = { STYLES };
