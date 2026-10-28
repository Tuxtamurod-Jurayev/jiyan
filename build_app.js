const fs = require('fs');
const { ENGLISH_DATA } = require('./english_data_structure.js');

// Helper for inline SVGs
const ICONS = {
  star: `<svg viewBox="0 0 24 24" width="18" height="18" fill="#F59E0B" stroke="#D97706" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  starWhite: `<svg viewBox="0 0 24 24" width="16" height="16" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  soundOn: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  soundOff: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  back: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  exit: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  check: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  delete: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/></svg>`,
  speaker: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  speakerBig: `<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  minus: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  multiply: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  divide: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><circle cx="12" cy="6" r="2.2" fill="currentColor"/><circle cx="12" cy="18" r="2.2" fill="currentColor"/></svg>`,
  book: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  headphones: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
  puzzle: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M19.439 7.85c0-1.571-.84-2.85-1.875-2.85s-1.875 1.279-1.875 2.85v.15H11.5v-2.35c1.571 0 2.85-.84 2.85-1.875S13.071 1.9 11.5 1.9s-2.85 1.279-2.85 2.85V8H4.461C3.102 8 2 9.102 2 10.461v4.189h.15c1.571 0 2.85.84 2.85 1.875s-1.279 1.875-2.85 1.875H2v4.139C2 23.898 3.102 25 4.461 25h4.189v-.15c0-1.571.84-2.85 1.875-2.85s1.875 1.279 1.875 2.85V25h4.189c1.359 0 2.461-1.102 2.461-2.461v-4.139h-.15c-1.571 0-2.85-.84-2.85-1.875s1.279-1.875 2.85-1.875h.15V8.339c0-.27-.219-.489-.489-.489z"/></svg>`,
  grammar: `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24" width="68" height="68" fill="none" stroke="#F59E0B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H8v4h8v-4h-1c-.55 0-1-.45-1-1v-2.34"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z" fill="#FEF3C7"/></svg>`,
  retry: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>`,
  next: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  list: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  target: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#6366F1" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`
};

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

    button, .btn, .num-key, .option-btn, .eng-choice-btn, .letter-btn, .action-card, .stage-card, .category-card {
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
      font-weight: 800;
    }

    /* ========== 1. SPLASH SCREEN ========== */
    #screen-splash {
      background: linear-gradient(145deg, #312E81 0%, #4338CA 50%, #6366F1 100%);
      color: #FFFFFF;
      justify-content: space-between;
      align-items: center;
      padding: 48px 24px;
      text-align: center;
      position: relative;
    }

    .splash-top {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .splash-mascot-wrapper {
      position: relative;
      width: 140px;
      height: 140px;
      margin-bottom: 24px;
      animation: floatMascot 3.2s ease-in-out infinite;
    }

    .splash-mascot-bg {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle, rgba(253, 224, 71, 0.4) 0%, rgba(255, 255, 255, 0) 70%);
      border-radius: 50%;
      animation: pulseGlow 2.2s ease-in-out infinite alternate;
    }

    .splash-mascot {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 84px;
      filter: drop-shadow(0 12px 18px rgba(0,0,0,0.35));
    }

    .splash-title {
      font-size: 34px;
      font-weight: 900;
      letter-spacing: -0.5px;
      margin-bottom: 12px;
      background: linear-gradient(to right, #FFFFFF, #FEF08A);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    .splash-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(8px);
      padding: 6px 16px;
      border-radius: var(--radius-full);
      font-size: 14px;
      font-weight: 700;
      color: #FEF08A;
      margin-bottom: 20px;
      border: 1px solid rgba(255, 255, 255, 0.25);
    }

    .splash-quote-box {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(10px);
      border: 1.5px solid rgba(255, 255, 255, 0.25);
      border-radius: var(--radius-lg);
      padding: 16px 20px;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.45;
      color: #F8FAFC;
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
      max-width: 380px;
    }

    .splash-bottom {
      width: 100%;
      max-width: 360px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .splash-progress-track {
      width: 100%;
      height: 12px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: var(--radius-full);
      overflow: hidden;
      padding: 2px;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .splash-progress-fill {
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, #F59E0B, #10B981);
      border-radius: var(--radius-full);
      transition: width 0.1s linear;
      box-shadow: 0 0 12px rgba(16, 185, 129, 0.6);
    }

    .splash-info-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
      font-weight: 800;
      color: rgba(255, 255, 255, 0.85);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    @keyframes floatMascot {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-12px) rotate(3deg); }
    }

    @keyframes pulseGlow {
      0% { transform: scale(0.9); opacity: 0.4; }
      100% { transform: scale(1.18); opacity: 0.85; }
    }

    /* ========== 2. APP HEADER ========== */
    .app-header {
      padding: 14px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(255, 255, 255, 0.94);
      backdrop-filter: blur(12px);
      border-bottom: 2px solid var(--border-color);
      flex-shrink: 0;
      position: sticky;
      top: 0;
      z-index: 20;
    }

    .header-user-info {
      display: flex;
      flex-direction: column;
    }

    .header-greeting {
      font-size: 18px;
      font-weight: 800;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .header-subtext {
      font-size: 13px;
      font-weight: 700;
      color: var(--primary);
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .stars-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #FFFBEB;
      border: 1.5px solid #FCD34D;
      color: #B45309;
      font-weight: 800;
      font-size: 14px;
      padding: 6px 14px;
      border-radius: var(--radius-full);
      box-shadow: var(--shadow-sm);
      transition: transform 0.2s var(--transition-spring);
    }

    .stars-badge svg {
      animation: starGleam 2.5s ease-in-out infinite;
    }

    @keyframes starGleam {
      0%, 100% { transform: scale(1) rotate(0deg); filter: drop-shadow(0 0 1px #FBBF24); }
      50% { transform: scale(1.15) rotate(6deg); filter: drop-shadow(0 0 4px #F59E0B); }
    }

    .icon-btn {
      width: 42px;
      height: 42px;
      border-radius: var(--radius-md);
      background: #FFFFFF;
      border: 2px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s var(--transition-spring);
      color: var(--text-main);
      box-shadow: var(--shadow-sm);
    }

    .icon-btn:hover {
      transform: translateY(-2px) scale(1.05);
      border-color: #CBD5E1;
      background: #F8FAFC;
    }

    .icon-btn:active {
      transform: translateY(2px) scale(0.95);
      background: #E2E8F0;
    }

    #btn-open-settings:hover svg {
      animation: gearSpin 0.7s var(--transition-spring);
    }

    @keyframes gearSpin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(180deg); }
    }

    .btn-back {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #FFFFFF;
      border: 2px solid var(--border-color);
      padding: 8px 14px;
      border-radius: var(--radius-md);
      font-size: 14px;
      font-weight: 800;
      color: var(--text-main);
      cursor: pointer;
      transition: all 0.2s var(--transition-spring);
      box-shadow: var(--shadow-sm);
    }

    .btn-back:hover {
      transform: translateX(-3px);
      border-color: #CBD5E1;
      background: #F8FAFC;
    }

    .btn-back:active {
      transform: scale(0.94);
      background: #E2E8F0;
    }

    .screen-title {
      font-size: 20px;
      font-weight: 800;
      color: var(--text-main);
    }

    /* ========== 3. HOME SCREEN ========== */
    .home-content {
      padding: 24px 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      flex: 1;
    }

    .banner-card {
      background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
      color: #FFFFFF;
      padding: 22px;
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
      position: relative;
      overflow: hidden;
      transition: transform 0.3s ease;
    }

    .banner-card:hover {
      transform: translateY(-2px);
    }

    .banner-card::before {
      content: '';
      position: absolute;
      top: -30px;
      right: -30px;
      width: 130px;
      height: 130px;
      background: rgba(255, 255, 255, 0.12);
      border-radius: 50%;
    }

    .banner-text h3 {
      font-size: 20px;
      margin-bottom: 4px;
    }

    .banner-text p {
      font-size: 13px;
      opacity: 0.92;
      font-weight: 600;
    }

    .banner-icon {
      font-size: 52px;
      filter: drop-shadow(0 6px 10px rgba(0,0,0,0.25));
      animation: floatMascot 3.5s ease-in-out infinite;
    }

    .section-label {
      font-size: 14px;
      font-weight: 800;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }

    .subjects-grid {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .subject-card {
      background: #FFFFFF;
      border-radius: var(--radius-lg);
      padding: 20px;
      border: 2.5px solid var(--border-color);
      border-bottom: 5px solid var(--border-color);
      cursor: pointer;
      transition: all 0.22s var(--transition-spring);
      display: flex;
      flex-direction: column;
      gap: 14px;
      box-shadow: var(--shadow-sm);
      position: relative;
    }

    .subject-card:hover {
      transform: translateY(-4px) scale(1.012);
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
    .subject-card.math:hover {
      border-color: #6366F1;
      box-shadow: 0 14px 28px rgba(79, 70, 229, 0.16);
    }

    .subject-card.english {
      border-color: #38BDF8;
      border-bottom-color: #0284C7;
      background: linear-gradient(to bottom, #FFFFFF, #F0F9FF);
    }
    .subject-card.english:hover {
      border-color: #0284C7;
      box-shadow: 0 14px 28px rgba(2, 132, 199, 0.16);
    }

    .subject-card-header {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .subject-icon-box {
      width: 60px;
      height: 60px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      flex-shrink: 0;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      transition: transform 0.25s var(--transition-spring);
    }

    .subject-card:hover .subject-icon-box {
      transform: scale(1.1) rotate(4deg);
    }

    .math .subject-icon-box {
      background: linear-gradient(135deg, #EEF2FF, #E0E7FF);
      border: 2px solid #C7D2FE;
    }

    .english .subject-icon-box {
      background: linear-gradient(135deg, #E0F2FE, #BAE6FD);
      border: 2px solid #7DD3FC;
    }

    .subject-details {
      flex: 1;
    }

    .subject-title {
      font-size: 20px;
      font-weight: 800;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .subject-desc {
      font-size: 13px;
      font-weight: 700;
      color: var(--text-muted);
      margin-top: 2px;
    }

    .subject-meta {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding-top: 8px;
      border-top: 1px dashed var(--border-color);
    }

    .subject-stat-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
      font-weight: 800;
    }

    .subject-progress-track {
      width: 100%;
      height: 10px;
      background: #E2E8F0;
      border-radius: var(--radius-full);
      overflow: hidden;
      position: relative;
    }

    .subject-progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #6366F1, #10B981, #6366F1);
      background-size: 200% 100%;
      animation: shimmerEffect 2.8s linear infinite;
      border-radius: var(--radius-full);
      transition: width 0.4s ease;
    }

    .english .subject-progress-fill {
      background: linear-gradient(90deg, #0284C7, #38BDF8, #0284C7);
      background-size: 200% 100%;
      animation: shimmerEffect 2.8s linear infinite;
    }

    @keyframes shimmerEffect {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    .home-footer-stats {
      margin-top: auto;
      padding: 16px 20px;
      background: #FFFFFF;
      border: 2px solid var(--border-color);
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: var(--shadow-sm);
    }

    .stat-pill {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      font-weight: 700;
      color: var(--text-muted);
    }

    .stat-pill b {
      color: var(--text-main);
    }

    /* ========== 4. MATH & ENGLISH CATEGORIES SCREENS ========== */
    .operations-content {
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      flex: 1;
    }

    .op-card {
      background: #FFFFFF;
      border-radius: var(--radius-lg);
      padding: 18px 20px;
      border: 2.5px solid var(--border-color);
      border-bottom: 5px solid var(--border-color);
      cursor: pointer;
      transition: all 0.22s var(--transition-spring);
      display: flex;
      align-items: center;
      gap: 18px;
      box-shadow: var(--shadow-sm);
    }

    .op-card:hover {
      transform: translateY(-4px) scale(1.01);
      box-shadow: 0 12px 24px rgba(0,0,0,0.08);
    }

    .op-card:active {
      transform: translateY(2px) scale(0.99);
      border-bottom-width: 2.5px;
    }

    .op-icon {
      width: 62px;
      height: 62px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: #FFFFFF;
      box-shadow: 0 6px 14px rgba(0,0,0,0.14);
      transition: transform 0.22s var(--transition-spring);
    }

    .op-card:hover .op-icon {
      transform: scale(1.12) rotate(5deg);
    }

    /* Math Theme Colors */
    .op-card.addition .op-icon {
      background: linear-gradient(135deg, #10B981, #059669);
      box-shadow: 0 6px 14px rgba(16, 185, 129, 0.35);
    }
    .op-card.addition { border-color: #A7F3D0; border-bottom-color: #059669; }
    .op-card.addition:hover { border-color: #10B981; }

    .op-card.subtraction .op-icon {
      background: linear-gradient(135deg, #0EA5E9, #0284C7);
      box-shadow: 0 6px 14px rgba(14, 165, 233, 0.35);
    }
    .op-card.subtraction { border-color: #BAE6FD; border-bottom-color: #0284C7; }
    .op-card.subtraction:hover { border-color: #0EA5E9; }

    .op-card.multiplication .op-icon {
      background: linear-gradient(135deg, #F59E0B, #D97706);
      box-shadow: 0 6px 14px rgba(245, 158, 11, 0.35);
    }
    .op-card.multiplication { border-color: #FDE68A; border-bottom-color: #D97706; }
    .op-card.multiplication:hover { border-color: #F59E0B; }

    .op-card.division .op-icon {
      background: linear-gradient(135deg, #8B5CF6, #7C3AED);
      box-shadow: 0 6px 14px rgba(139, 92, 246, 0.35);
    }
    .op-card.division { border-color: #DDD6FE; border-bottom-color: #7C3AED; }
    .op-card.division:hover { border-color: #8B5CF6; }

    /* English Category Colors */
    .op-card.vocabulary .op-icon {
      background: linear-gradient(135deg, #EC4899, #DB2777);
      box-shadow: 0 6px 14px rgba(236, 72, 153, 0.35);
    }
    .op-card.vocabulary { border-color: #FBCFE8; border-bottom-color: #DB2777; }
    .op-card.vocabulary:hover { border-color: #EC4899; }

    .op-card.listening .op-icon {
      background: linear-gradient(135deg, #3B82F6, #2563EB);
      box-shadow: 0 6px 14px rgba(59, 130, 246, 0.35);
    }
    .op-card.listening { border-color: #BFDBFE; border-bottom-color: #2563EB; }
    .op-card.listening:hover { border-color: #3B82F6; }

    .op-card.spelling .op-icon {
      background: linear-gradient(135deg, #10B981, #059669);
      box-shadow: 0 6px 14px rgba(16, 185, 129, 0.35);
    }
    .op-card.spelling { border-color: #A7F3D0; border-bottom-color: #059669; }
    .op-card.spelling:hover { border-color: #10B981; }

    .op-card.grammar .op-icon {
      background: linear-gradient(135deg, #F59E0B, #D97706);
      box-shadow: 0 6px 14px rgba(245, 158, 11, 0.35);
    }
    .op-card.grammar { border-color: #FDE68A; border-bottom-color: #D97706; }
    .op-card.grammar:hover { border-color: #F59E0B; }

    .op-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .op-header-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .op-title {
      font-size: 18px;
      font-weight: 800;
      color: var(--text-main);
    }

    .op-badge {
      font-size: 12px;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: var(--radius-full);
      background: #F1F5F9;
      color: var(--text-muted);
    }

    .op-progress-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      font-weight: 800;
      color: var(--text-muted);
    }

    .op-progress-track {
      width: 100%;
      height: 8px;
      background: #E2E8F0;
      border-radius: var(--radius-full);
      overflow: hidden;
      margin-top: 2px;
    }

    .op-progress-fill {
      height: 100%;
      border-radius: var(--radius-full);
      transition: width 0.35s ease;
    }

    .addition .op-progress-fill { background: #10B981; }
    .subtraction .op-progress-fill { background: #0EA5E9; }
    .multiplication .op-progress-fill { background: #F59E0B; }
    .division .op-progress-fill { background: #8B5CF6; }
    .vocabulary .op-progress-fill { background: #EC4899; }
    .listening .op-progress-fill { background: #3B82F6; }
    .spelling .op-progress-fill { background: #10B981; }
    .grammar .op-progress-fill { background: #F59E0B; }

    /* ========== 5. STAGES SCREENS ========== */
    .stages-content {
      padding: 16px 20px 24px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      flex: 1;
    }

    .stages-header-banner {
      background: #FFFFFF;
      border-radius: var(--radius-md);
      padding: 14px 18px;
      border: 2px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: var(--shadow-sm);
    }

    .stages-grid {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .stage-card {
      background: #FFFFFF;
      border-radius: var(--radius-lg);
      padding: 16px 18px;
      border: 2.5px solid var(--border-color);
      border-bottom: 5px solid var(--border-color);
      cursor: pointer;
      transition: all 0.22s var(--transition-spring);
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: var(--shadow-sm);
      position: relative;
    }

    .stage-card:not(.locked):hover {
      transform: translateY(-3px) scale(1.01);
      box-shadow: 0 10px 20px rgba(0,0,0,0.06);
    }

    .stage-card:active {
      transform: translateY(2px) scale(0.99);
      border-bottom-width: 2.5px;
    }

    /* 5 Micro-States */
    .stage-card.state-new {
      background: #FFFFFF;
      border-color: #93C5FD;
      border-bottom-color: #3B82F6;
    }
    .stage-card.state-new .stage-badge { background: #EFF6FF; color: #1D4ED8; }

    .stage-card.state-hard {
      background: #FEF2F2;
      border-color: #FCA5A5;
      border-bottom-color: #EF4444;
    }
    .stage-card.state-hard .stage-badge { background: #FEE2E2; color: #B91C1C; }

    .stage-card.state-medium {
      background: #FFFBEB;
      border-color: #FCD34D;
      border-bottom-color: #F59E0B;
    }
    .stage-card.state-medium .stage-badge { background: #FEF3C7; color: #B45309; }

    .stage-card.state-good {
      background: #F0FDF4;
      border-color: #86EFAC;
      border-bottom-color: #10B981;
    }
    .stage-card.state-good .stage-badge { background: #DCFCE7; color: #15803D; }

    .stage-card.state-perfect {
      background: linear-gradient(135deg, #FEFCE8 0%, #F0FDF4 100%);
      border-color: #FBBF24;
      border-bottom-color: #10B981;
      box-shadow: 0 4px 16px rgba(245, 158, 11, 0.22);
    }
    .stage-card.state-perfect .stage-badge { background: #FEF3C7; color: #B45309; font-weight: 900; }

    .stage-card.locked {
      background: #F8FAFC;
      border-color: #CBD5E1;
      border-bottom-color: #94A3B8;
      opacity: 0.65;
      cursor: not-allowed;
    }

    .stage-left {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .stage-number-box {
      width: 44px;
      height: 44px;
      border-radius: var(--radius-md);
      background: var(--bg-main);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: 900;
      color: var(--text-main);
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.06);
    }

    .stage-info-text {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .stage-title {
      font-size: 17px;
      font-weight: 800;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .stage-subtitle {
      font-size: 12px;
      font-weight: 700;
      color: var(--text-muted);
    }

    .stage-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 4px;
    }

    .stage-stars {
      display: flex;
      align-items: center;
      gap: 2px;
    }

    .stage-badge {
      font-size: 12px;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: var(--radius-full);
    }

    @keyframes shakeAnimation {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-8px); }
      40%, 80% { transform: translateX(8px); }
    }

    .shake {
      animation: shakeAnimation 0.45s ease-in-out;
    }

    /* ========== 6. QUIZ COMMON STYLES ========== */
    #screen-quiz, #screen-eng-quiz {
      background: #F8FAFC;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .quiz-top-bar {
      padding: 12px 18px;
      background: #FFFFFF;
      border-bottom: 2px solid var(--border-color);
      display: flex;
      flex-direction: column;
      gap: 10px;
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
      padding: 6px 12px;
      border-radius: var(--radius-md);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s var(--transition-spring);
    }

    .btn-exit-quiz:hover {
      transform: scale(1.04);
      background: #FEE2E2;
    }

    .btn-exit-quiz:active {
      transform: scale(0.94);
    }

    .quiz-counter-tag {
      font-size: 14px;
      font-weight: 800;
      color: var(--primary);
      background: var(--primary-light);
      padding: 6px 14px;
      border-radius: var(--radius-full);
      border: 1.5px solid #C7D2FE;
    }

    .progress-dots-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 4px;
      padding: 2px 4px;
    }

    .progress-dot {
      flex: 1;
      height: 12px;
      border-radius: var(--radius-full);
      background: #E2E8F0;
      transition: all 0.25s var(--transition-spring);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 9px;
      color: #FFFFFF;
      font-weight: 900;
    }

    .progress-dot.current {
      background: #3B82F6;
      transform: scaleY(1.4);
      box-shadow: 0 0 10px rgba(59, 130, 246, 0.7);
      animation: pulseDot 1s infinite alternate;
    }

    .progress-dot.correct { background: #10B981; }
    .progress-dot.wrong { background: #EF4444; }

    @keyframes pulseDot {
      0% { opacity: 0.75; transform: scaleY(1.2); }
      100% { opacity: 1; transform: scaleY(1.45); }
    }

    .quiz-center-area {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 16px 20px;
    }

    .question-card {
      width: 100%;
      background: #FFFFFF;
      border-radius: var(--radius-lg);
      padding: 26px 20px;
      border: 3px solid var(--border-color);
      box-shadow: 0 8px 24px rgba(0,0,0,0.06);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      transition: all 0.25s var(--transition-spring);
      min-height: 190px;
      animation: cardPopIn 0.35s var(--transition-spring);
    }

    @keyframes cardPopIn {
      0% { opacity: 0; transform: scale(0.94) translateY(10px); }
      100% { opacity: 1; transform: scale(1) translateY(0); }
    }

    .question-card.correct-anim {
      border-color: #10B981;
      background: #F0FDF4;
      transform: scale(1.025);
      box-shadow: 0 10px 28px rgba(16, 185, 129, 0.25);
    }

    .question-card.wrong-anim {
      border-color: #EF4444;
      background: #FEF2F2;
      box-shadow: 0 10px 28px rgba(239, 68, 68, 0.25);
    }

    .math-formula {
      font-family: var(--font-heading);
      font-size: 38px;
      font-weight: 900;
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 12px;
    }

    .input-box-display {
      min-width: 84px;
      height: 66px;
      padding: 0 18px;
      border-radius: var(--radius-md);
      background: #F8FAFC;
      border: 3px dashed var(--primary);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 38px;
      font-weight: 900;
      color: var(--primary);
      transition: all 0.18s var(--transition-spring);
    }

    .input-box-display.filled {
      border-style: solid;
      background: #EEF2FF;
      color: var(--primary-dark);
      border-color: var(--primary);
      transform: scale(1.04);
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
      margin-top: 14px;
      font-size: 16px;
      font-weight: 800;
      min-height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .feedback-box.correct { color: #15803D; animation: popIn 0.3s var(--transition-spring); }
    .feedback-box.wrong { color: #B91C1C; animation: popIn 0.3s var(--transition-spring); }

    .btn-skip-wrong {
      margin-top: 12px;
      background: linear-gradient(135deg, #EF4444, #DC2626);
      color: #FFFFFF;
      font-size: 13px;
      font-weight: 800;
      padding: 8px 16px;
      border-radius: var(--radius-full);
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);
      transition: all 0.2s var(--transition-spring);
    }

    .btn-skip-wrong:hover {
      transform: scale(1.05);
    }

    .btn-skip-wrong:active {
      transform: scale(0.95);
    }

    @keyframes popIn {
      0% { transform: scale(0.8); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }

    /* Math Numpad */
    .numpad-container {
      background: #FFFFFF;
      border-top: 2px solid var(--border-color);
      padding: 12px 16px 20px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .numpad-btn {
      height: 60px;
      background: #F8FAFC;
      border: 2px solid #CBD5E1;
      border-bottom: 4px solid #94A3B8;
      border-radius: var(--radius-md);
      font-family: var(--font-heading);
      font-size: 26px;
      font-weight: 800;
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.12s ease;
    }

    .numpad-btn:hover {
      background: #F1F5F9;
      border-color: #94A3B8;
      transform: translateY(-2px);
    }

    .numpad-btn:active {
      transform: translateY(2px);
      border-bottom-width: 2px;
      background: #E2E8F0;
    }

    .numpad-btn.btn-delete {
      font-size: 16px;
      background: #FFF1F2;
      border-color: #FECDD3;
      border-bottom-color: #F43F5E;
      color: #E11D48;
      gap: 6px;
    }
    .numpad-btn.btn-delete:hover {
      background: #FFE4E6;
      border-color: #F43F5E;
    }

    .numpad-btn.btn-submit {
      font-size: 15px;
      background: #E2E8F0;
      border-color: #CBD5E1;
      border-bottom-color: #94A3B8;
      color: #94A3B8;
      cursor: not-allowed;
      gap: 6px;
    }

    .numpad-btn.btn-submit.active {
      background: linear-gradient(135deg, #10B981, #059669);
      border-color: #34D399;
      border-bottom-color: #047857;
      color: #FFFFFF;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);
      animation: pulseButton 1.5s infinite alternate;
    }

    @keyframes pulseButton {
      0% { transform: scale(1); }
      100% { transform: scale(1.02); }
    }

    .numpad-btn.btn-submit.active:active {
      transform: translateY(2px);
      border-bottom-width: 2px;
    }

    .numpad-container.locked {
      pointer-events: none;
      opacity: 0.6;
    }

    /* ========== 7. ENGLISH QUIZ SPECIAL MECHANICS ========== */
    .eng-prompt-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      width: 100%;
    }

    .eng-prompt-emoji {
      font-size: 58px;
      filter: drop-shadow(0 6px 12px rgba(0,0,0,0.12));
      animation: floatMascot 3.2s ease-in-out infinite;
    }

    .eng-prompt-word {
      font-size: 32px;
      font-weight: 900;
      color: var(--primary);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .eng-prompt-subtext {
      font-size: 15px;
      font-weight: 700;
      color: var(--text-muted);
    }

    .btn-speak-inline {
      width: 40px;
      height: 40px;
      border-radius: var(--radius-full);
      background: #EEF2FF;
      border: 2px solid #C7D2FE;
      color: #4F46E5;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s var(--transition-spring);
      box-shadow: var(--shadow-sm);
    }

    .btn-speak-inline:hover {
      transform: scale(1.12);
      background: #E0E7FF;
      border-color: #818CF8;
    }

    .btn-speak-inline:active {
      transform: scale(0.92);
      background: #C7D2FE;
    }

    /* Mechanic B: Listening Audio Button with Ripple Pulse */
    .listening-center-controls {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      padding: 10px 0;
    }

    .btn-audio-main {
      width: 90px;
      height: 90px;
      border-radius: var(--radius-full);
      background: linear-gradient(135deg, #3B82F6, #1D4ED8);
      border: none;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 10px 28px rgba(37, 99, 235, 0.45);
      transition: all 0.2s var(--transition-spring);
      animation: audioPulseWave 2s infinite;
    }

    .btn-audio-main:hover {
      transform: scale(1.08);
      box-shadow: 0 14px 32px rgba(37, 99, 235, 0.55);
    }

    .btn-audio-main:active {
      transform: scale(0.92);
    }

    @keyframes audioPulseWave {
      0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
      70% { box-shadow: 0 0 0 18px rgba(59, 130, 246, 0); }
      100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
    }

    .btn-audio-slow {
      background: #EFF6FF;
      border: 2px solid #BFDBFE;
      color: #1D4ED8;
      font-size: 13px;
      font-weight: 800;
      padding: 8px 16px;
      border-radius: var(--radius-full);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s var(--transition-spring);
      box-shadow: var(--shadow-sm);
    }

    .btn-audio-slow:hover {
      transform: scale(1.05);
      background: #DBEAFE;
      border-color: #60A5FA;
    }

    .btn-audio-slow:active {
      transform: scale(0.94);
    }

    /* Option Buttons (Mechanic A, B, D) */
    .eng-options-container {
      background: #FFFFFF;
      border-top: 2px solid var(--border-color);
      padding: 16px 20px 24px;
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .eng-opt-btn {
      min-height: 56px;
      background: #F8FAFC;
      border: 2px solid #CBD5E1;
      border-bottom: 4px solid #94A3B8;
      border-radius: var(--radius-md);
      font-family: var(--font-heading);
      font-size: 17px;
      font-weight: 800;
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 16px;
      cursor: pointer;
      transition: all 0.15s var(--transition-spring);
      text-align: center;
      gap: 8px;
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
      gap: 16px;
      width: 100%;
    }

    .spelling-slots-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .spelling-slot {
      width: 46px;
      height: 54px;
      border-radius: var(--radius-sm);
      background: #F1F5F9;
      border: 2.5px dashed #94A3B8;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-heading);
      font-size: 24px;
      font-weight: 900;
      color: var(--primary);
      cursor: pointer;
      transition: all 0.2s var(--transition-spring);
    }

    .spelling-slot:hover {
      transform: translateY(-2px);
      border-color: var(--primary);
    }

    .spelling-slot.filled {
      background: #EEF2FF;
      border-style: solid;
      border-color: var(--primary);
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.18);
      animation: slotPop 0.25s var(--transition-spring);
    }

    @keyframes slotPop {
      0% { transform: scale(0.85); }
      100% { transform: scale(1); }
    }

    .spelling-slot.correct {
      background: #DCFCE7;
      border-color: #10B981;
      color: #15803D;
    }

    .spelling-slot.wrong {
      background: #FEE2E2;
      border-color: #EF4444;
      color: #B91C1C;
    }

    .spelling-bank-container {
      background: #FFFFFF;
      border-top: 2px solid var(--border-color);
      padding: 16px 16px 24px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: center;
    }

    .spelling-tiles-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
      max-width: 400px;
    }

    .letter-tile {
      width: 52px;
      height: 58px;
      border-radius: var(--radius-md);
      background: #FFFFFF;
      border: 2px solid #CBD5E1;
      border-bottom: 4px solid #94A3B8;
      font-family: var(--font-heading);
      font-size: 22px;
      font-weight: 900;
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.15s var(--transition-spring);
      box-shadow: var(--shadow-sm);
    }

    .letter-tile:hover:not(.used) {
      transform: translateY(-4px) scale(1.06);
      border-color: var(--primary);
      box-shadow: 0 8px 16px rgba(79, 70, 229, 0.18);
    }

    .letter-tile:active:not(.used) {
      transform: translateY(2px);
      border-bottom-width: 2px;
      background: #F1F5F9;
    }

    .letter-tile.used {
      opacity: 0.22;
      pointer-events: none;
      border-bottom-width: 2px;
      background: #E2E8F0;
    }

    .spelling-action-row {
      display: flex;
      justify-content: center;
      gap: 10px;
      width: 100%;
    }

    .btn-spelling-del {
      background: #FFF1F2;
      border: 2px solid #FECDD3;
      border-bottom: 3.5px solid #F43F5E;
      color: #E11D48;
      font-size: 14px;
      font-weight: 800;
      padding: 8px 18px;
      border-radius: var(--radius-md);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s ease;
    }

    .btn-spelling-del:hover {
      background: #FFE4E6;
      transform: translateY(-2px);
    }

    .btn-spelling-del:active {
      transform: translateY(2px);
      border-bottom-width: 2px;
    }

    /* Mechanic D: Grammar Sentence Card */
    .grammar-sentence-text {
      font-family: var(--font-heading);
      font-size: 24px;
      font-weight: 800;
      color: var(--text-main);
      line-height: 1.45;
      margin-bottom: 8px;
    }

    .grammar-blank-tag {
      display: inline-block;
      padding: 2px 14px;
      background: #EEF2FF;
      border: 2px dashed var(--primary);
      border-radius: var(--radius-sm);
      color: var(--primary);
      min-width: 70px;
      transition: all 0.2s ease;
    }

    .grammar-rule-box {
      margin-top: 12px;
      padding: 12px 16px;
      background: #FEF3C7;
      border: 1.5px solid #FCD34D;
      border-radius: var(--radius-md);
      font-size: 13px;
      font-weight: 700;
      color: #92400E;
      text-align: left;
      line-height: 1.45;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      animation: popIn 0.3s var(--transition-spring);
    }

    /* ========== 8. RESULT SCREENS ========== */
    #screen-result, #screen-eng-result {
      padding: 24px 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .result-card-main {
      background: #FFFFFF;
      border-radius: var(--radius-lg);
      padding: 26px 20px;
      border: 3px solid var(--border-color);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-shadow: var(--shadow-md);
      position: relative;
    }

    .result-icon-badge {
      font-size: 64px;
      margin-bottom: 12px;
      animation: popIn 0.5s var(--transition-spring);
    }

    .result-headline {
      font-size: 26px;
      font-weight: 900;
      color: var(--text-main);
      margin-bottom: 6px;
    }

    .result-score-tag {
      font-size: 42px;
      font-weight: 900;
      color: var(--primary);
      margin-bottom: 8px;
    }

    .result-comparison-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      border-radius: var(--radius-full);
      font-size: 14px;
      font-weight: 800;
      margin-bottom: 12px;
    }

    .result-comparison-pill.new-record {
      background: #FEF3C7;
      color: #B45309;
      border: 1.5px solid #FCD34D;
    }

    .result-comparison-pill.kept-record {
      background: #EFF6FF;
      color: #1D4ED8;
      border: 1.5px solid #BFDBFE;
    }

    .result-stars-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }

    .mistakes-card {
      background: #FFF1F2;
      border: 2px solid #FECDD3;
      border-radius: var(--radius-lg);
      padding: 18px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .mistakes-title {
      font-size: 16px;
      font-weight: 800;
      color: #BE123C;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .mistakes-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .mistake-item {
      background: #FFFFFF;
      border: 1.5px solid #FFE4E6;
      border-radius: var(--radius-md);
      padding: 10px 14px;
      font-size: 14px;
      font-weight: 700;
      color: var(--text-main);
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }

    .mistake-item span.wrong-ans {
      color: #E11D48;
      font-weight: 800;
    }

    .result-actions {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: auto;
    }

    .btn-action-primary {
      height: 54px;
      background: linear-gradient(135deg, #10B981, #059669);
      border: none;
      border-bottom: 4px solid #047857;
      border-radius: var(--radius-md);
      font-family: var(--font-heading);
      font-size: 17px;
      font-weight: 800;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      transition: all 0.15s var(--transition-spring);
      box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
    }

    .btn-action-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 18px rgba(16, 185, 129, 0.45);
    }

    .btn-action-primary:active {
      transform: translateY(2px);
      border-bottom-width: 2px;
    }

    .btn-action-secondary {
      height: 52px;
      background: #FFFFFF;
      border: 2px solid #CBD5E1;
      border-bottom: 4px solid #94A3B8;
      border-radius: var(--radius-md);
      font-family: var(--font-heading);
      font-size: 16px;
      font-weight: 800;
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      transition: all 0.15s var(--transition-spring);
    }

    .btn-action-secondary:hover {
      transform: translateY(-2px);
      background: #F8FAFC;
      border-color: #94A3B8;
    }

    .btn-action-secondary:active {
      transform: translateY(2px);
      border-bottom-width: 2px;
    }

    /* ========== 9. MODALS & TOAST ========== */
    .modal-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(15, 23, 42, 0.72);
      backdrop-filter: blur(6px);
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s ease;
    }

    .modal-backdrop.active {
      opacity: 1;
      pointer-events: auto;
    }

    .modal-card {
      background: #FFFFFF;
      border-radius: var(--radius-lg);
      padding: 24px;
      width: 100%;
      max-width: 380px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.25);
      border: 3px solid var(--border-color);
      transform: scale(0.92);
      transition: transform 0.25s var(--transition-spring);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 16px;
    }

    .modal-backdrop.active .modal-card {
      transform: scale(1);
    }

    .modal-icon { font-size: 52px; }
    .modal-title { font-size: 20px; font-weight: 800; color: var(--text-main); }
    .modal-body { font-size: 15px; font-weight: 700; color: var(--text-muted); line-height: 1.45; }

    .modal-actions {
      display: flex;
      gap: 10px;
      width: 100%;
      margin-top: 8px;
    }

    .btn-modal {
      flex: 1;
      height: 48px;
      border-radius: var(--radius-md);
      font-family: var(--font-heading);
      font-size: 15px;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: none;
      transition: all 0.15s ease;
    }

    .btn-modal:active { transform: translateY(2px); }
    .btn-modal-green { background: #10B981; border-bottom: 3px solid #059669; color: #FFFFFF; }
    .btn-modal-red { background: #EF4444; border-bottom: 3px solid #DC2626; color: #FFFFFF; }
    .btn-modal-gray { background: #F1F5F9; border: 1.5px solid #CBD5E1; color: var(--text-main); }

    #toast-notification {
      position: absolute;
      top: 24px;
      left: 50%;
      transform: translateX(-50%) translateY(-100px);
      background: #1E293B;
      color: #FFFFFF;
      padding: 12px 20px;
      border-radius: var(--radius-full);
      font-size: 14px;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      z-index: 200;
      transition: transform 0.3s var(--transition-spring);
      pointer-events: none;
      text-align: center;
      width: max-content;
      max-width: 90%;
    }

    #toast-notification.show { transform: translateX(-50%) translateY(0); }

    #confetti-canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 90;
    }

    .parent-challenge-input {
      width: 100%;
      height: 50px;
      border: 2.5px solid #CBD5E1;
      border-radius: var(--radius-md);
      font-size: 20px;
      font-weight: 800;
      text-align: center;
      font-family: var(--font-heading);
      color: var(--text-main);
      margin-top: 8px;
      outline: none;
    }
    .parent-challenge-input:focus { border-color: var(--primary); }
  </style>
</head>
<body>

  <div id="app-container">
    <canvas id="confetti-canvas"></canvas>

    <div id="toast-notification">
      <span id="toast-icon">🚀</span>
      <span id="toast-text">Xabar</span>
    </div>

    <!-- =====================================================================
         SCREEN 1: SPLASH SCREEN
         ===================================================================== -->
    <div id="screen-splash" class="screen active">
      <div class="splash-top">
        <div class="splash-mascot-wrapper">
          <div class="splash-mascot-bg"></div>
          <div class="splash-mascot">🦁</div>
        </div>
        <div class="splash-badge">👑 2-Sinf A'lochisi</div>
        <h1 class="splash-title">Salom, Savarbek!</h1>
        <div class="splash-quote-box" id="splash-quote-text">
          "Bugun yangi marralarni zabt etamiz, Savarbek! 🚀"
        </div>
      </div>
      <div class="splash-bottom">
        <div class="splash-info-row">
          <span>Tayyorgarlik...</span>
          <span id="splash-countdown">5 soniya</span>
        </div>
        <div class="splash-progress-track">
          <div class="splash-progress-fill" id="splash-progress-bar"></div>
        </div>
      </div>
    </div>

    <!-- =====================================================================
         SCREEN 2: HOME SCREEN
         ===================================================================== -->
    <div id="screen-home" class="screen">
      <header class="app-header">
        <div class="header-user-info">
          <div class="header-greeting">👋 Salom, Savarbek!</div>
          <div class="header-subtext">2-sinf a'lochisi 🎓</div>
        </div>
        <div class="header-actions">
          <div class="stars-badge">
            ${ICONS.star}
            <span id="home-total-stars">0 / 240</span>
          </div>
          <button class="icon-btn" id="btn-toggle-sound" title="Ovozni o'chirish/yoqish">
            <span id="sound-icon">${ICONS.soundOn}</span>
          </button>
        </div>
      </header>

      <div class="home-content">
        <div class="banner-card">
          <div class="banner-text">
            <h3>Katta G'alabalar Sari! 🚀</h3>
            <p>Matematika va Ingliz tilidan chempion bo'l!</p>
          </div>
          <div class="banner-icon">🦁</div>
        </div>

        <div class="section-label">O'quv Fanlari</div>

        <div class="subjects-grid">
          <!-- 1. Matematika -->
          <div class="subject-card math" id="card-open-math">
            <div class="subject-card-header">
              <div class="subject-icon-box">🧮</div>
              <div class="subject-details">
                <div class="subject-title">
                  Matematika
                  <span style="font-size: 14px;">⚡</span>
                </div>
                <div class="subject-desc">40 ta bosqich • 4 ta amal</div>
              </div>
            </div>
            <div class="subject-meta">
              <div class="subject-stat-row">
                <span style="color: var(--text-muted);">Umumiy o'zlashtirish:</span>
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
              <div class="subject-icon-box">🇬🇧</div>
              <div class="subject-details">
                <div class="subject-title">
                  Ingliz tili
                  <span style="font-size: 12px; background: #DCFCE7; color: #15803D; padding: 2px 8px; border-radius: 99px; font-weight: 800;">Faol 🚀</span>
                </div>
                <div class="subject-desc">40 ta bosqich • Lug'at & Audio & Grammatika</div>
              </div>
            </div>
            <div class="subject-meta">
              <div class="subject-stat-row">
                <span style="color: var(--text-muted);">Umumiy o'zlashtirish:</span>
                <span id="home-english-percentage" style="color: #0284C7;">0%</span>
              </div>
              <div class="subject-progress-track">
                <div class="subject-progress-fill" id="home-english-progress-fill" style="width: 0%;"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="home-footer-stats">
          <div class="stat-pill">
            ${ICONS.target}
            <span>Jami misollar & so'zlar: <b id="home-total-solved">0 ta</b></span>
          </div>
          <button class="icon-btn" id="btn-open-settings" title="Ota-ona sozlamalari">
            ${ICONS.settings}
          </button>
        </div>
      </div>
    </div>

    <!-- =====================================================================
         SCREEN 3: MATH OPERATIONS SCREEN
         ===================================================================== -->
    <div id="screen-operations" class="screen">
      <header class="app-header">
        <button class="btn-back" id="btn-back-to-home">
          ${ICONS.back}
          <span>Orqaga</span>
        </button>
        <div class="screen-title">Matematika</div>
        <div style="width: 70px;"></div>
      </header>

      <div class="operations-content">
        <div class="op-card addition" data-op="addition">
          <div class="op-icon">${ICONS.plus}</div>
          <div class="op-info">
            <div class="op-header-row">
              <div class="op-title">Qo'shish</div>
              <div class="op-badge" id="op-stages-addition">0 / 10 etap</div>
            </div>
            <div class="op-progress-row">
              <span>Maksimal natija:</span>
              <span id="op-percent-addition">0%</span>
            </div>
            <div class="op-progress-track">
              <div class="op-progress-fill" id="op-fill-addition" style="width: 0%;"></div>
            </div>
          </div>
        </div>

        <div class="op-card subtraction" data-op="subtraction">
          <div class="op-icon">${ICONS.minus}</div>
          <div class="op-info">
            <div class="op-header-row">
              <div class="op-title">Ayirish</div>
              <div class="op-badge" id="op-stages-subtraction">0 / 10 etap</div>
            </div>
            <div class="op-progress-row">
              <span>Maksimal natija:</span>
              <span id="op-percent-subtraction">0%</span>
            </div>
            <div class="op-progress-track">
              <div class="op-progress-fill" id="op-fill-subtraction" style="width: 0%;"></div>
            </div>
          </div>
        </div>

        <div class="op-card multiplication" data-op="multiplication">
          <div class="op-icon">${ICONS.multiply}</div>
          <div class="op-info">
            <div class="op-header-row">
              <div class="op-title">Ko'paytirish</div>
              <div class="op-badge" id="op-stages-multiplication">0 / 10 etap</div>
            </div>
            <div class="op-progress-row">
              <span>Maksimal natija:</span>
              <span id="op-percent-multiplication">0%</span>
            </div>
            <div class="op-progress-track">
              <div class="op-progress-fill" id="op-fill-multiplication" style="width: 0%;"></div>
            </div>
          </div>
        </div>

        <div class="op-card division" data-op="division">
          <div class="op-icon">${ICONS.divide}</div>
          <div class="op-info">
            <div class="op-header-row">
              <div class="op-title">Bo'lish</div>
              <div class="op-badge" id="op-stages-division">0 / 10 etap</div>
            </div>
            <div class="op-progress-row">
              <span>Maksimal natija:</span>
              <span id="op-percent-division">0%</span>
            </div>
            <div class="op-progress-track">
              <div class="op-progress-fill" id="op-fill-division" style="width: 0%;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- =====================================================================
         SCREEN 4: MATH STAGES SCREEN
         ===================================================================== -->
    <div id="screen-stages" class="screen">
      <header class="app-header">
        <button class="btn-back" id="btn-back-to-ops">
          ${ICONS.back}
          <span>Amallar</span>
        </button>
        <div class="screen-title" id="stages-screen-title">Qo'shish</div>
        <div style="width: 70px;"></div>
      </header>

      <div class="stages-content">
        <div class="stages-header-banner">
          <span style="font-weight: 800; font-size: 14px; color: var(--text-muted);">
            Bosqichni tanla va misollarni yech:
          </span>
          <span id="stages-summary-stars" style="font-weight: 900; color: #D97706; display: flex; align-items: center; gap: 4px;">
            ${ICONS.star}
            <span id="stages-summary-stars-val">0 / 30</span>
          </span>
        </div>
        <div class="stages-grid" id="stages-list-container"></div>
      </div>
    </div>

    <!-- =====================================================================
         SCREEN 5: MATH QUIZ GAME SCREEN
         ===================================================================== -->
    <div id="screen-quiz" class="screen">
      <div class="quiz-top-bar">
        <div class="quiz-meta-row">
          <button class="btn-exit-quiz" id="btn-exit-quiz">
            ${ICONS.exit}
            <span>Chiqish</span>
          </button>
          <div class="quiz-counter-tag" id="quiz-question-counter">1-Etap | Misol: 1 / 10</div>
        </div>
        <div class="progress-dots-row" id="quiz-progress-dots"></div>
      </div>

      <div class="quiz-center-area">
        <div class="question-card" id="quiz-question-card">
          <div class="math-formula">
            <span id="quiz-operand-text">27 + 15 =</span>
            <div class="input-box-display" id="quiz-input-box">?</div>
          </div>
          <div class="feedback-box" id="quiz-feedback-box"></div>
          <button class="btn-skip-wrong" id="btn-skip-wrong" style="display: none;">
            <span>Tushundim, keyingisi</span>
            ${ICONS.next}
          </button>
        </div>
      </div>

      <div class="numpad-container" id="quiz-numpad">
        <button class="numpad-btn" data-key="1">1</button>
        <button class="numpad-btn" data-key="2">2</button>
        <button class="numpad-btn" data-key="3">3</button>
        <button class="numpad-btn" data-key="4">4</button>
        <button class="numpad-btn" data-key="5">5</button>
        <button class="numpad-btn" data-key="6">6</button>
        <button class="numpad-btn" data-key="7">7</button>
        <button class="numpad-btn" data-key="8">8</button>
        <button class="numpad-btn" data-key="9">9</button>
        <button class="numpad-btn btn-delete" data-key="del">
          ${ICONS.delete}
          <span>O'chirish</span>
        </button>
        <button class="numpad-btn" data-key="0">0</button>
        <button class="numpad-btn btn-submit" id="btn-quiz-submit" data-key="submit">
          ${ICONS.check}
          <span>TEKSHIRISH</span>
        </button>
      </div>
    </div>

    <!-- =====================================================================
         SCREEN 6: MATH RESULT SCREEN
         ===================================================================== -->
    <div id="screen-result" class="screen">
      <div class="result-card-main" id="result-card-main">
        <div class="result-icon-badge" id="result-badge-icon">${ICONS.trophy}</div>
        <div class="result-headline" id="result-headline">YANGI REKORD!</div>
        <div class="result-score-tag" id="result-score-percent">90%</div>
        <div class="result-comparison-pill new-record" id="result-comparison-text">
          Oldingi eng yuqori natijang: 70% edi
        </div>
        <div class="result-stars-row" id="result-stars-display"></div>
        <div style="font-size: 14px; font-weight: 700; color: var(--text-muted);" id="result-summary-line">
          10 ta misoldan 9 tasini to'g'ri yechding!
        </div>
      </div>

      <div class="mistakes-card" id="result-mistakes-block" style="display: none;">
        <div class="mistakes-title">
          <span>🔍</span>
          <span>Xato ketgan misollar:</span>
        </div>
        <div class="mistakes-list" id="result-mistakes-list"></div>
      </div>

      <div class="result-actions">
        <button class="btn-action-primary" id="btn-next-stage">
          ${ICONS.next}
          <span>Keyingi etapga o'tish</span>
        </button>
        <button class="btn-action-secondary" id="btn-retry-stage">
          ${ICONS.retry}
          <span>Yana urinib ko'rish</span>
        </button>
        <button class="btn-action-secondary" id="btn-back-stages-from-result">
          ${ICONS.list}
          <span>Bosqichlarga qaytish</span>
        </button>
      </div>
    </div>

    <!-- =====================================================================
         SCREEN 7: ENGLISH CATEGORIES SCREEN
         ===================================================================== -->
    <div id="screen-eng-categories" class="screen">
      <header class="app-header">
        <button class="btn-back" id="btn-back-eng-to-home">
          ${ICONS.back}
          <span>Orqaga</span>
        </button>
        <div class="screen-title">🇬🇧 Ingliz tili</div>
        <div style="width: 70px;"></div>
      </header>

      <div class="operations-content">
        <div class="op-card vocabulary" data-cat="vocabulary">
          <div class="op-icon">${ICONS.book}</div>
          <div class="op-info">
            <div class="op-header-row">
              <div class="op-title">So'z boyligi</div>
              <div class="op-badge" id="eng-cat-stages-vocabulary">0 / 10 etap</div>
            </div>
            <div class="op-progress-row">
              <span>Maksimal natija:</span>
              <span id="eng-cat-percent-vocabulary">0%</span>
            </div>
            <div class="op-progress-track">
              <div class="op-progress-fill" id="eng-cat-fill-vocabulary" style="width: 0%;"></div>
            </div>
          </div>
        </div>

        <div class="op-card listening" data-cat="listening">
          <div class="op-icon">${ICONS.headphones}</div>
          <div class="op-info">
            <div class="op-header-row">
              <div class="op-title">Eshitib topish</div>
              <div class="op-badge" id="eng-cat-stages-listening">0 / 10 etap</div>
            </div>
            <div class="op-progress-row">
              <span>Maksimal natija:</span>
              <span id="eng-cat-percent-listening">0%</span>
            </div>
            <div class="op-progress-track">
              <div class="op-progress-fill" id="eng-cat-fill-listening" style="width: 0%;"></div>
            </div>
          </div>
        </div>

        <div class="op-card spelling" data-cat="spelling">
          <div class="op-icon">${ICONS.puzzle}</div>
          <div class="op-info">
            <div class="op-header-row">
              <div class="op-title">Harflardan so'z yasash</div>
              <div class="op-badge" id="eng-cat-stages-spelling">0 / 10 etap</div>
            </div>
            <div class="op-progress-row">
              <span>Maksimal natija:</span>
              <span id="eng-cat-percent-spelling">0%</span>
            </div>
            <div class="op-progress-track">
              <div class="op-progress-fill" id="eng-cat-fill-spelling" style="width: 0%;"></div>
            </div>
          </div>
        </div>

        <div class="op-card grammar" data-cat="grammar">
          <div class="op-icon">${ICONS.grammar}</div>
          <div class="op-info">
            <div class="op-header-row">
              <div class="op-title">Qoidalar va Gaplar</div>
              <div class="op-badge" id="eng-cat-stages-grammar">0 / 10 etap</div>
            </div>
            <div class="op-progress-row">
              <span>Maksimal natija:</span>
              <span id="eng-cat-percent-grammar">0%</span>
            </div>
            <div class="op-progress-track">
              <div class="op-progress-fill" id="eng-cat-fill-grammar" style="width: 0%;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- =====================================================================
         SCREEN 8: ENGLISH STAGES SCREEN
         ===================================================================== -->
    <div id="screen-eng-stages" class="screen">
      <header class="app-header">
        <button class="btn-back" id="btn-back-to-eng-cats">
          ${ICONS.back}
          <span>Bo'limlar</span>
        </button>
        <div class="screen-title" id="eng-stages-screen-title">So'z boyligi</div>
        <div style="width: 70px;"></div>
      </header>

      <div class="stages-content">
        <div class="stages-header-banner">
          <span style="font-weight: 800; font-size: 14px; color: var(--text-muted);">
            Etapni tanla va yulduzlarni yig':
          </span>
          <span id="eng-stages-summary-stars" style="font-weight: 900; color: #D97706; display: flex; align-items: center; gap: 4px;">
            ${ICONS.star}
            <span id="eng-stages-summary-stars-val">0 / 30</span>
          </span>
        </div>
        <div class="stages-grid" id="eng-stages-list-container"></div>
      </div>
    </div>

    <!-- =====================================================================
         SCREEN 9: ENGLISH QUIZ GAME SCREEN
         ===================================================================== -->
    <div id="screen-eng-quiz" class="screen">
      <div class="quiz-top-bar">
        <div class="quiz-meta-row">
          <button class="btn-exit-quiz" id="btn-exit-eng-quiz">
            ${ICONS.exit}
            <span>Chiqish</span>
          </button>
          <div class="quiz-counter-tag" id="eng-quiz-question-counter">1-Etap | Savol: 1 / 10</div>
        </div>
        <div class="progress-dots-row" id="eng-quiz-progress-dots"></div>
      </div>

      <div class="quiz-center-area">
        <div class="question-card" id="eng-quiz-question-card">
          <div id="eng-quiz-card-content"></div>
          <div class="feedback-box" id="eng-quiz-feedback-box"></div>
          <button class="btn-skip-wrong" id="btn-eng-skip-wrong" style="display: none;">
            <span>Tushundim, keyingisi</span>
            ${ICONS.next}
          </button>
        </div>
      </div>

      <div id="eng-quiz-bottom-panel"></div>
    </div>

    <!-- =====================================================================
         SCREEN 10: ENGLISH RESULT SCREEN
         ===================================================================== -->
    <div id="screen-eng-result" class="screen">
      <div class="result-card-main" id="eng-result-card-main">
        <div class="result-icon-badge" id="eng-result-badge-icon">${ICONS.trophy}</div>
        <div class="result-headline" id="eng-result-headline">YANGI REKORD!</div>
        <div class="result-score-tag" id="eng-result-score-percent">90%</div>
        <div class="result-comparison-pill new-record" id="eng-result-comparison-text">
          Oldingi eng yuqori natijang: 70% edi
        </div>
        <div class="result-stars-row" id="eng-result-stars-display"></div>
        <div style="font-size: 14px; font-weight: 700; color: var(--text-muted);" id="eng-result-summary-line">
          10 ta savoldan 9 tasini to'g'ri topding!
        </div>
      </div>

      <div class="mistakes-card" id="eng-result-mistakes-block" style="display: none;">
        <div class="mistakes-title">
          <span>📌</span>
          <span>Xato ketgan so'zlarni eshitib ol:</span>
        </div>
        <div class="mistakes-list" id="eng-result-mistakes-list"></div>
      </div>

      <div class="result-actions">
        <button class="btn-action-primary" id="btn-eng-next-stage">
          ${ICONS.next}
          <span>Keyingi etapga o'tish</span>
        </button>
        <button class="btn-action-secondary" id="btn-eng-retry-stage">
          ${ICONS.retry}
          <span>Yana urinib ko'rish</span>
        </button>
        <button class="btn-action-secondary" id="btn-eng-back-stages">
          ${ICONS.list}
          <span>Bosqichlarga qaytish</span>
        </button>
      </div>
    </div>

    <!-- =====================================================================
         MODALS
         ===================================================================== -->
    <div class="modal-backdrop" id="modal-exit-confirm">
      <div class="modal-card">
        <div class="modal-icon">⚠️</div>
        <div class="modal-title">O'yindan chiqish</div>
        <div class="modal-body">
          Savarbek, haqiqatan ham chiqmoqchimisan? Hozirgi yechgan misollaring saqlanmaydi!
        </div>
        <div class="modal-actions">
          <button class="btn-modal btn-modal-green" id="btn-exit-cancel">Yo'q, davom etaman</button>
          <button class="btn-modal btn-modal-red" id="btn-exit-confirm">Ha, chiqish</button>
        </div>
      </div>
    </div>

    <div class="modal-backdrop" id="modal-settings">
      <div class="modal-card">
        <div class="modal-icon">⚙️</div>
        <div class="modal-title">Ota-ona sozlamalari</div>
        <div class="modal-body" style="text-align: left; font-size: 13px;">
          <p>Ushbu bo'lim faqat kattalar uchun mo'ljallangan.</p>
          <hr style="margin: 10px 0; border: none; border-top: 1px solid #E2E8F0;">
          <div id="settings-parent-challenge-box">
            <p style="font-weight: 800; color: var(--danger-dark); margin-bottom: 6px;">
              🔒 Natijalarni tozalash uchun tekshiruv:
            </p>
            <p id="parent-math-question" style="font-size: 16px; font-weight: 900; color: var(--text-main);">
              125 × 4 = ?
            </p>
            <input type="number" id="parent-math-answer" class="parent-challenge-input" placeholder="Javobni yozing">
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn-modal btn-modal-gray" id="btn-close-settings">Yopish</button>
          <button class="btn-modal btn-modal-red" id="btn-confirm-reset-db">Natijalarni tozalash</button>
        </div>
      </div>
    </div>

  </div>

  <script>
    const ICONS_JS = {
      star: \`${ICONS.star}\`,
      starWhite: \`${ICONS.starWhite}\`,
      soundOn: \`${ICONS.soundOn}\`,
      soundOff: \`${ICONS.soundOff}\`,
      speaker: \`${ICONS.speaker}\`,
      speakerBig: \`${ICONS.speakerBig}\`,
      lock: \`${ICONS.lock}\`
    };

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
          p.opacity -= 0.009;

          if (p.opacity <= 0 || p.y > this.canvas.height) {
            this.particles.splice(i, 1);
            continue;
          }

          this.ctx.save();
          this.ctx.translate(p.x, p.y);
          this.ctx.rotate((p.rotation * Math.PI) / 180);
          this.ctx.fillStyle = p.color;
          this.ctx.globalAlpha = Math.max(0, p.opacity);
          this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
          this.ctx.restore();
        }

        if (this.particles.length > 0) {
          this.animationId = requestAnimationFrame(() => this.loop());
        } else {
          this.animationId = null;
        }
      }
    }

    const ENGLISH_DATA = ${JSON.stringify(ENGLISH_DATA, null, 2)};
    const DB_KEY = 'savarbek_edu_v1';

    class DatabaseManager {
      constructor() {
        this.data = this.load();
      }

      getDefaultData() {
        const createEmptyStages = () => {
          const list = [];
          for (let i = 1; i <= 10; i++) {
            list.push({
              stageNumber: i,
              maxPercentage: 0,
              lastPercentage: 0,
              attempts: 0,
              updatedAt: null
            });
          }
          return list;
        };

        return {
          userName: "Savarbek",
          soundEnabled: true,
          lastQuoteIndex: -1,
          totalQuestionsSolved: 0,
          math: {
            addition: createEmptyStages(),
            subtraction: createEmptyStages(),
            multiplication: createEmptyStages(),
            division: createEmptyStages()
          },
          english: {
            vocabulary: createEmptyStages(),
            listening: createEmptyStages(),
            spelling: createEmptyStages(),
            grammar: createEmptyStages()
          }
        };
      }

      load() {
        try {
          const saved = localStorage.getItem(DB_KEY);
          if (saved) {
            const parsed = JSON.parse(saved);
            const defaults = this.getDefaultData();
            if (parsed && parsed.math && parsed.math.addition) {
              if (!parsed.english || !parsed.english.vocabulary) {
                parsed.english = defaults.english;
              }
              return parsed;
            }
          }
        } catch (e) {
          console.error('LocalStorage load error:', e);
        }
        const defaultData = this.getDefaultData();
        this.save(defaultData);
        return defaultData;
      }

      save(newData = this.data) {
        try {
          localStorage.setItem(DB_KEY, JSON.stringify(newData));
          this.data = newData;
        } catch (e) {
          console.error('LocalStorage save error:', e);
        }
      }

      resetAll() {
        const fresh = this.getDefaultData();
        fresh.soundEnabled = this.data.soundEnabled;
        this.save(fresh);
        return fresh;
      }

      getMathStage(op, num) { return this.data.math[op][num - 1]; }
      getEngStage(cat, num) { return this.data.english[cat][num - 1]; }

      saveMathResult(op, num, percent) {
        const stage = this.getMathStage(op, num);
        const oldMax = stage.maxPercentage;
        stage.attempts += 1;
        stage.lastPercentage = percent;
        this.data.totalQuestionsSolved += 10;
        let isNewRecord = false;
        if (percent > oldMax) {
          stage.maxPercentage = percent;
          stage.updatedAt = new Date().toISOString();
          isNewRecord = true;
        }
        this.save();
        return { oldMax, currentPercentage: percent, isNewRecord, isPerfect: percent === 100, attempts: stage.attempts };
      }

      saveEngResult(cat, num, percent) {
        const stage = this.getEngStage(cat, num);
        const oldMax = stage.maxPercentage;
        stage.attempts += 1;
        stage.lastPercentage = percent;
        this.data.totalQuestionsSolved += 10;
        let isNewRecord = false;
        if (percent > oldMax) {
          stage.maxPercentage = percent;
          stage.updatedAt = new Date().toISOString();
          isNewRecord = true;
        }
        this.save();
        return { oldMax, currentPercentage: percent, isNewRecord, isPerfect: percent === 100, attempts: stage.attempts };
      }

      getOverallMathPercentage() {
        let sum = 0;
        ['addition', 'subtraction', 'multiplication', 'division'].forEach(op => {
          this.data.math[op].forEach(s => sum += s.maxPercentage);
        });
        return Math.round(sum / 40);
      }

      getOverallEnglishPercentage() {
        let sum = 0;
        ['vocabulary', 'listening', 'spelling', 'grammar'].forEach(cat => {
          this.data.english[cat].forEach(s => sum += s.maxPercentage);
        });
        return Math.round(sum / 40);
      }

      getMathOperationAverage(op) {
        let sum = 0;
        this.data.math[op].forEach(s => sum += s.maxPercentage);
        return Math.round(sum / 10);
      }

      getEngCategoryAverage(cat) {
        let sum = 0;
        this.data.english[cat].forEach(s => sum += s.maxPercentage);
        return Math.round(sum / 10);
      }

      getMathCompletedStages(op) {
        return this.data.math[op].filter(s => s.maxPercentage >= 1).length;
      }

      getEngCompletedStages(cat) {
        return this.data.english[cat].filter(s => s.maxPercentage >= 1).length;
      }

      getTotalStars() {
        let stars = 0;
        ['addition', 'subtraction', 'multiplication', 'division'].forEach(op => {
          this.data.math[op].forEach(s => {
            if (s.maxPercentage === 100) stars += 3;
            else if (s.maxPercentage >= 80) stars += 2;
            else if (s.maxPercentage >= 50) stars += 1;
          });
        });
        ['vocabulary', 'listening', 'spelling', 'grammar'].forEach(cat => {
          this.data.english[cat].forEach(s => {
            if (s.maxPercentage === 100) stars += 3;
            else if (s.maxPercentage >= 80) stars += 2;
            else if (s.maxPercentage >= 50) stars += 1;
          });
        });
        return stars;
      }

      isMathStageUnlocked(op, num) {
        if (num === 1) return true;
        return this.getMathStage(op, num - 1).maxPercentage >= 50;
      }

      isEngStageUnlocked(cat, num) {
        if (num === 1) return true;
        return this.getEngStage(cat, num - 1).maxPercentage >= 50;
      }
    }

    const db = new DatabaseManager();

    class MathGenerator {
      static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      static generateStageQuestions(op, stageNum) {
        const questions = [];
        const seenKeys = new Set();
        let attemptsCount = 0;
        while (questions.length < 10 && attemptsCount < 500) {
          attemptsCount++;
          let q = null;
          switch (op) {
            case 'addition': q = MathGenerator.generateAddition(stageNum); break;
            case 'subtraction': q = MathGenerator.generateSubtraction(stageNum); break;
            case 'multiplication': q = MathGenerator.generateMultiplication(stageNum); break;
            case 'division': q = MathGenerator.generateDivision(stageNum); break;
          }
          if (q && !seenKeys.has(q.key)) {
            seenKeys.add(q.key);
            questions.push(q);
          }
        }
        return questions;
      }

      static generateAddition(stage) {
        let a, b, c;
        switch (stage) {
          case 1: {
            const sum = MathGenerator.randomInt(2, 10);
            a = MathGenerator.randomInt(1, sum - 1);
            b = sum - a;
            return { formula: \`\${a} + \${b} =\`, answer: a + b, key: \`\${a}+\${b}\` };
          }
          case 2: {
            const ones = MathGenerator.randomInt(0, 8);
            a = 10 + ones;
            b = MathGenerator.randomInt(1, 9 - ones);
            return { formula: \`\${a} + \${b} =\`, answer: a + b, key: \`\${a}+\${b}\` };
          }
          case 3: {
            do {
              a = MathGenerator.randomInt(3, 9);
              b = MathGenerator.randomInt(3, 9);
            } while (a + b <= 10 || a + b > 18);
            return { formula: \`\${a} + \${b} =\`, answer: a + b, key: \`\${a}+\${b}\` };
          }
          case 4: {
            const tensA = MathGenerator.randomInt(1, 8);
            const tensB = MathGenerator.randomInt(1, 10 - tensA);
            a = tensA * 10;
            b = tensB * 10;
            return { formula: \`\${a} + \${b} =\`, answer: a + b, key: \`\${a}+\${b}\` };
          }
          case 5: {
            const tens = MathGenerator.randomInt(2, 9);
            const ones = MathGenerator.randomInt(0, 8);
            a = tens * 10 + ones;
            b = MathGenerator.randomInt(1, 9 - ones);
            return { formula: \`\${a} + \${b} =\`, answer: a + b, key: \`\${a}+\${b}\` };
          }
          case 6: {
            const tens = MathGenerator.randomInt(1, 8);
            const ones = MathGenerator.randomInt(2, 9);
            a = tens * 10 + ones;
            b = MathGenerator.randomInt(10 - ones, 9);
            return { formula: \`\${a} + \${b} =\`, answer: a + b, key: \`\${a}+\${b}\` };
          }
          case 7: {
            const tensA = MathGenerator.randomInt(1, 7);
            const onesA = MathGenerator.randomInt(1, 9);
            a = tensA * 10 + onesA;
            const maxTensB = 9 - tensA;
            const tensB = MathGenerator.randomInt(1, maxTensB);
            b = tensB * 10;
            return { formula: \`\${a} + \${b} =\`, answer: a + b, key: \`\${a}+\${b}\` };
          }
          case 8: {
            const tensA = MathGenerator.randomInt(1, 7);
            const tensB = MathGenerator.randomInt(1, 8 - tensA);
            const onesA = MathGenerator.randomInt(1, 8);
            const onesB = MathGenerator.randomInt(1, 9 - onesA);
            a = tensA * 10 + onesA;
            b = tensB * 10 + onesB;
            return { formula: \`\${a} + \${b} =\`, answer: a + b, key: \`\${a}+\${b}\` };
          }
          case 9: {
            let attempts = 0;
            do {
              a = MathGenerator.randomInt(12, 69);
              b = MathGenerator.randomInt(12, 69);
              attempts++;
            } while (((a % 10) + (b % 10) < 10 || a + b > 100) && attempts < 100);
            return { formula: \`\${a} + \${b} =\`, answer: a + b, key: \`\${a}+\${b}\` };
          }
          case 10: {
            a = MathGenerator.randomInt(5, 35);
            b = MathGenerator.randomInt(5, 35);
            const maxC = 100 - a - b;
            c = MathGenerator.randomInt(5, Math.min(35, maxC));
            return { formula: \`\${a} + \${b} + \${c} =\`, answer: a + b + c, key: \`\${a}+\${b}+\${c}\` };
          }
          default:
            return { formula: \`5 + 5 =\`, answer: 10, key: \`5+5\` };
        }
      }

      static generateSubtraction(stage) {
        let a, b, c;
        switch (stage) {
          case 1: {
            a = MathGenerator.randomInt(2, 10);
            b = MathGenerator.randomInt(1, a - 1);
            return { formula: \`\${a} - \${b} =\`, answer: a - b, key: \`\${a}-\${b}\` };
          }
          case 2: {
            const ones = MathGenerator.randomInt(1, 9);
            a = 10 + ones;
            b = MathGenerator.randomInt(1, ones);
            return { formula: \`\${a} - \${b} =\`, answer: a - b, key: \`\${a}-\${b}\` };
          }
          case 3: {
            const ones = MathGenerator.randomInt(1, 8);
            a = 10 + ones;
            b = MathGenerator.randomInt(ones + 1, 9);
            return { formula: \`\${a} - \${b} =\`, answer: a - b, key: \`\${a}-\${b}\` };
          }
          case 4: {
            const tensA = MathGenerator.randomInt(2, 10);
            const tensB = MathGenerator.randomInt(1, tensA - 1);
            a = tensA * 10;
            b = tensB * 10;
            return { formula: \`\${a} - \${b} =\`, answer: a - b, key: \`\${a}-\${b}\` };
          }
          case 5: {
            const tens = MathGenerator.randomInt(2, 9);
            const ones = MathGenerator.randomInt(1, 9);
            a = tens * 10 + ones;
            b = MathGenerator.randomInt(1, ones);
            return { formula: \`\${a} - \${b} =\`, answer: a - b, key: \`\${a}-\${b}\` };
          }
          case 6: {
            const tens = MathGenerator.randomInt(2, 9);
            const ones = MathGenerator.randomInt(0, 8);
            a = tens * 10 + ones;
            b = MathGenerator.randomInt(ones + 1, 9);
            return { formula: \`\${a} - \${b} =\`, answer: a - b, key: \`\${a}-\${b}\` };
          }
          case 7: {
            const tensA = MathGenerator.randomInt(2, 9);
            const onesA = MathGenerator.randomInt(1, 9);
            a = tensA * 10 + onesA;
            const tensB = MathGenerator.randomInt(1, tensA - 1);
            b = tensB * 10;
            return { formula: \`\${a} - \${b} =\`, answer: a - b, key: \`\${a}-\${b}\` };
          }
          case 8: {
            const tensA = MathGenerator.randomInt(2, 9);
            const tensB = MathGenerator.randomInt(1, tensA - 1);
            const onesA = MathGenerator.randomInt(1, 9);
            const onesB = MathGenerator.randomInt(0, onesA);
            a = tensA * 10 + onesA;
            b = tensB * 10 + onesB;
            return { formula: \`\${a} - \${b} =\`, answer: a - b, key: \`\${a}-\${b}\` };
          }
          case 9: {
            let attempts = 0;
            do {
              a = MathGenerator.randomInt(31, 98);
              b = MathGenerator.randomInt(12, a - 1);
              attempts++;
            } while (((a % 10) >= (b % 10) || a <= b) && attempts < 100);
            return { formula: \`\${a} - \${b} =\`, answer: a - b, key: \`\${a}-\${b}\` };
          }
          case 10: {
            if (Math.random() > 0.4) {
              a = 100;
              b = MathGenerator.randomInt(11, 89);
              return { formula: \`100 - \${b} =\`, answer: 100 - b, key: \`100-\${b}\` };
            } else {
              a = MathGenerator.randomInt(60, 100);
              b = MathGenerator.randomInt(10, Math.floor(a / 2));
              c = MathGenerator.randomInt(5, a - b - 5);
              return { formula: \`\${a} - \${b} - \${c} =\`, answer: a - b - c, key: \`\${a}-\${b}-\${c}\` };
            }
          }
          default:
            return { formula: \`10 - 4 =\`, answer: 6, key: \`10-4\` };
        }
      }

      static generateMultiplication(stage) {
        let k, m;
        if (stage === 1) k = 2;
        else if (stage === 2) k = 3;
        else if (stage === 3) k = 4;
        else if (stage === 4) k = 5;
        else if (stage === 6) k = 6;
        else if (stage === 7) k = 7;
        else if (stage === 8) k = 8;
        else if (stage === 9) k = 9;

        if (stage === 5) {
          k = [2, 3, 4, 5][MathGenerator.randomInt(0, 3)];
          m = MathGenerator.randomInt(1, 10);
        } else if (stage === 10) {
          k = MathGenerator.randomInt(2, 9);
          const pool = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          m = pool[MathGenerator.randomInt(0, pool.length - 1)];
        } else {
          m = MathGenerator.randomInt(1, 10);
        }

        const flip = Math.random() > 0.5;
        const op1 = flip ? k : m;
        const op2 = flip ? m : k;
        return { formula: \`\${op1} × \${op2} =\`, answer: op1 * op2, key: \`\${op1}*\${op2}\` };
      }

      static generateDivision(stage) {
        let a, b;
        if (stage === 1) a = 2;
        else if (stage === 2) a = 3;
        else if (stage === 3) a = 4;
        else if (stage === 4) a = 5;
        else if (stage === 6) a = 6;
        else if (stage === 7) a = 7;
        else if (stage === 8) a = 8;
        else if (stage === 9) a = 9;

        if (stage === 5) {
          a = [2, 3, 4, 5][MathGenerator.randomInt(0, 3)];
          b = MathGenerator.randomInt(1, 10);
        } else if (stage === 10) {
          a = MathGenerator.randomInt(2, 10);
          b = MathGenerator.randomInt(1, 10);
        } else {
          b = MathGenerator.randomInt(1, 10);
        }

        const c = a * b;
        return { formula: \`\${c} ÷ \${a} =\`, answer: b, key: \`\${c}/\${a}\` };
      }
    }

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
            const wrongOptions = stageData.items
              .filter(x => x.en !== item.en)
              .map(x => x.uz);
            const chosenDistractors = EnglishGenerator.shuffle(wrongOptions).slice(0, 3);
            const options = EnglishGenerator.shuffle([item.uz, ...chosenDistractors]);

            return {
              type: 'vocabulary',
              word: item.en,
              uz: item.uz,
              emoji: item.emoji,
              correct: item.uz,
              options: options,
              speakText: item.en
            };
          } else if (category === 'listening') {
            const wrongOptions = stageData.items
              .filter(x => x.audio !== item.audio)
              .map(x => \`\${x.emoji} \${x.uz}\`);
            const chosenDistractors = EnglishGenerator.shuffle(wrongOptions).slice(0, 3);
            const correctText = \`\${item.emoji} \${item.uz}\`;
            const options = EnglishGenerator.shuffle([correctText, ...chosenDistractors]);

            return {
              type: 'listening',
              audioText: item.audio,
              uz: item.uz,
              emoji: item.emoji,
              correct: correctText,
              options: options,
              speakText: item.audio
            };
          } else if (category === 'spelling') {
            const cleanWord = item.word.toUpperCase();
            const correctLetters = cleanWord.split('');
            const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const distractors = [];
            for (let i = 0; i < 2; i++) {
              const randChar = alphabet[Math.floor(Math.random() * alphabet.length)];
              distractors.push(randChar);
            }
            const allTiles = EnglishGenerator.shuffle([...correctLetters, ...distractors]);

            return {
              type: 'spelling',
              word: cleanWord,
              uz: item.uz,
              emoji: item.emoji,
              slotsCount: cleanWord.length,
              tiles: allTiles,
              speakText: cleanWord
            };
          } else if (category === 'grammar') {
            return {
              type: 'grammar',
              sentence: item.sentence,
              uz: item.uz,
              correct: item.correct,
              options: EnglishGenerator.shuffle(item.options),
              rule: item.rule,
              speakText: item.sentence.replace('[ ___ ]', item.correct)
            };
          }
        });
      }
    }

    const MOTIVATIONAL_QUOTES = [
      "Bugun yangi marralarni zabt etamiz, Savarbek! 🚀",
      "Har bir yechilgan misol seni yanada kuchli qiladi! 💪",
      "Matematika va Ingliz tili — aqlli bolalarning do'sti! 🧠",
      "Savarbek, bugun 100% natija ko'rsatishga tayyormisan? 🏆",
      "Xatolar — bu yangi narsalarni o'rganish imkoniyati! 🌟",
      "Katta g'alabalar kichik qadamlardan boshlanadi! 🦁",
      "Sen har qanday qiyin vazifani oson yechasan! ✨",
      "Qani, bugun yana bir rekord o'rnatamiz! 🎯",
      "Bilim — eng katta qudrat, olg'a Savarbek! 📚",
      "Miyangni charxla va inglizcha so'zlarni eslab qol! ⚡",
      "2-sinf a'lochisi har doim birinchi bo'ladi! 🥇",
      "Bugungi mashq seni haqiqiy chempionga aylantiradi! ⚽",
      "Sabr va mehnat bilan barcha cho'qqilar zabt etiladi! 🏔️",
      "Har bir to'g'ri javob — bu yangi yulduzcha! ⭐",
      "Olg'a, Savarbek! Sen albatta uddalaysan! 🎈",
      "Zukko va epchil Savarbek bilan o'qish juda qiziq! 🧩"
    ];

    class AppController {
      constructor() {
        this.confetti = new ConfettiEngine('confetti-canvas');
        this.currentScreen = 'screen-splash';
        
        this.selectedMathOp = 'addition';
        this.selectedMathStage = 1;
        this.mathQuestions = [];
        this.mathIndex = 0;
        this.mathCorrectCount = 0;
        this.mathMistakes = [];
        this.mathCurrentInput = '';
        this.mathQuestionLocked = false;

        this.selectedEngCat = 'vocabulary';
        this.selectedEngStage = 1;
        this.engQuestions = [];
        this.engIndex = 0;
        this.engCorrectCount = 0;
        this.engMistakes = [];
        this.engQuestionLocked = false;
        this.spellingFilledSlots = [];
        this.spellingUsedTileIndices = new Set();

        this.parentChallengeAnswer = 500;
        this.splashRemainingMs = 5000;
        this.splashInterval = null;
        this.splashLastTimestamp = null;

        this.initDOM();
        this.initEvents();
        this.startSplashTimer();
      }

      initDOM() {
        this.screens = {
          splash: document.getElementById('screen-splash'),
          home: document.getElementById('screen-home'),
          operations: document.getElementById('screen-operations'),
          stages: document.getElementById('screen-stages'),
          quiz: document.getElementById('screen-quiz'),
          result: document.getElementById('screen-result'),
          engCategories: document.getElementById('screen-eng-categories'),
          engStages: document.getElementById('screen-eng-stages'),
          engQuiz: document.getElementById('screen-eng-quiz'),
          engResult: document.getElementById('screen-eng-result')
        };
      }

      navigateTo(screenId) {
        sound.playTap();
        Object.keys(this.screens).forEach(key => {
          if (this.screens[key]) this.screens[key].classList.remove('active');
        });
        const target = document.getElementById(screenId);
        if (target) {
          target.classList.add('active');
          target.scrollTop = 0;
          this.currentScreen = screenId;
        }

        if (screenId === 'screen-home') this.renderHomeScreen();
        else if (screenId === 'screen-operations') this.renderMathOperations();
        else if (screenId === 'screen-stages') this.renderMathStages();
        else if (screenId === 'screen-eng-categories') this.renderEngCategories();
        else if (screenId === 'screen-eng-stages') this.renderEngStages();
      }

      showToast(text, icon = '🚀') {
        const toast = document.getElementById('toast-notification');
        document.getElementById('toast-icon').textContent = icon;
        document.getElementById('toast-text').textContent = text;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2600);
      }

      startSplashTimer() {
        const lastIdx = db.data.lastQuoteIndex;
        let newIdx;
        do {
          newIdx = Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length);
        } while (newIdx === lastIdx && MOTIVATIONAL_QUOTES.length > 1);

        db.data.lastQuoteIndex = newIdx;
        db.save();
        document.getElementById('splash-quote-text').textContent = \`"\${MOTIVATIONAL_QUOTES[newIdx]}"\`;

        this.splashRemainingMs = 5000;
        const progressBar = document.getElementById('splash-progress-bar');
        const countdownLabel = document.getElementById('splash-countdown');

        const step = () => {
          if (document.visibilityState === 'hidden') {
            this.splashLastTimestamp = null;
            return;
          }
          const now = Date.now();
          if (!this.splashLastTimestamp) this.splashLastTimestamp = now;
          const delta = now - this.splashLastTimestamp;
          this.splashLastTimestamp = now;

          this.splashRemainingMs -= delta;
          if (this.splashRemainingMs < 0) this.splashRemainingMs = 0;

          const progressPercent = ((5000 - this.splashRemainingMs) / 5000) * 100;
          progressBar.style.width = \`\${progressPercent}%\`;

          const secondsLeft = Math.ceil(this.splashRemainingMs / 1000);
          countdownLabel.textContent = \`\${secondsLeft} soniya\`;

          if (this.splashRemainingMs <= 0) {
            clearInterval(this.splashInterval);
            this.navigateTo('screen-home');
          }
        };

        this.splashInterval = setInterval(step, 40);
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') this.splashLastTimestamp = Date.now();
        });
      }

      renderHomeScreen() {
        document.getElementById('sound-icon').innerHTML = db.data.soundEnabled ? ICONS_JS.soundOn : ICONS_JS.soundOff;
        const totalStars = db.getTotalStars();
        document.getElementById('home-total-stars').textContent = \`\${totalStars} / 240\`;

        const overallMath = db.getOverallMathPercentage();
        document.getElementById('home-math-percentage').textContent = \`\${overallMath}%\`;
        document.getElementById('home-math-progress-fill').style.width = \`\${overallMath}%\`;

        const overallEng = db.getOverallEnglishPercentage();
        document.getElementById('home-english-percentage').textContent = \`\${overallEng}%\`;
        document.getElementById('home-english-progress-fill').style.width = \`\${overallEng}%\`;

        document.getElementById('home-total-solved').textContent = \`\${db.data.totalQuestionsSolved} ta\`;
      }

      renderMathOperations() {
        const ops = ['addition', 'subtraction', 'multiplication', 'division'];
        ops.forEach(op => {
          const completed = db.getMathCompletedStages(op);
          const avgPercent = db.getMathOperationAverage(op);
          document.getElementById(\`op-stages-\${op}\`).textContent = \`\${completed} / 10 etap\`;
          document.getElementById(\`op-percent-\${op}\`).textContent = \`\${avgPercent}%\`;
          document.getElementById(\`op-fill-\${op}\`).style.width = \`\${avgPercent}%\`;
        });
      }

      renderMathStages() {
        const opTitles = {
          addition: "➕ Qo'shish",
          subtraction: "➖ Ayirish",
          multiplication: "✖️ Ko'paytirish",
          division: "➗ Bo'lish"
        };
        document.getElementById('stages-screen-title').textContent = opTitles[this.selectedMathOp];

        let opStars = 0;
        const stagesList = db.data.math[this.selectedMathOp];
        stagesList.forEach(s => {
          if (s.maxPercentage === 100) opStars += 3;
          else if (s.maxPercentage >= 80) opStars += 2;
          else if (s.maxPercentage >= 50) opStars += 1;
        });
        document.getElementById('stages-summary-stars-val').textContent = \`\${opStars} / 30\`;

        const container = document.getElementById('stages-list-container');
        container.innerHTML = '';

        stagesList.forEach(stage => {
          const isUnlocked = db.isMathStageUnlocked(this.selectedMathOp, stage.stageNumber);
          const card = document.createElement('div');
          card.className = 'stage-card';

          let stateClass = 'state-new';
          let starsHtml = \`\${ICONS_JS.starWhite}\${ICONS_JS.starWhite}\${ICONS_JS.starWhite}\`;
          let subtitleText = 'Rekord: 0% (Yangi)';
          let badgeText = 'Boshlash';

          if (!isUnlocked) {
            card.classList.add('locked');
            starsHtml = \`\${ICONS_JS.lock} <span style="font-size: 12px; font-weight:800;">Qulf</span>\`;
            subtitleText = "Oldingi etapda kamida 50% to'pla";
            badgeText = 'Qulf';
          } else if (stage.attempts === 0) {
            stateClass = 'state-new';
            starsHtml = \`\${ICONS_JS.starWhite}\${ICONS_JS.starWhite}\${ICONS_JS.starWhite}\`;
            subtitleText = 'Rekord: 0% (Yangi)';
            badgeText = 'Boshlash';
          } else if (stage.maxPercentage <= 40) {
            stateClass = 'state-hard';
            starsHtml = \`<span style="color: #EF4444; font-size: 13px; font-weight: 800;">🔴 Yana harakat qil!</span>\`;
            subtitleText = \`Rekord: \${stage.maxPercentage}% | Urinish: \${stage.attempts} ta\`;
            badgeText = 'Qiyin';
          } else if (stage.maxPercentage <= 70) {
            stateClass = 'state-medium';
            starsHtml = \`\${ICONS_JS.star}\${ICONS_JS.starWhite}\${ICONS_JS.starWhite}\`;
            subtitleText = \`Rekord: \${stage.maxPercentage}% | Urinish: \${stage.attempts} ta\`;
            badgeText = "O'rtacha";
          } else if (stage.maxPercentage <= 90) {
            stateClass = 'state-good';
            starsHtml = \`\${ICONS_JS.star}\${ICONS_JS.star}\${ICONS_JS.starWhite}\`;
            subtitleText = \`Rekord: \${stage.maxPercentage}% | Urinish: \${stage.attempts} ta\`;
            badgeText = 'Yaxshi';
          } else if (stage.maxPercentage === 100) {
            stateClass = 'state-perfect';
            starsHtml = \`\${ICONS_JS.star}\${ICONS_JS.star}\${ICONS_JS.star}\`;
            subtitleText = 'Rekord: 100% (Mukammal!)';
            badgeText = '100% 🏆';
          }

          if (isUnlocked) card.classList.add(stateClass);

          card.innerHTML = \`
            <div class="stage-left">
              <div class="stage-number-box">\${stage.stageNumber}</div>
              <div class="stage-info-text">
                <div class="stage-title">
                  \${stage.stageNumber}-Etap \${stage.maxPercentage === 100 ? '🏆' : ''}
                </div>
                <div class="stage-subtitle">\${subtitleText}</div>
              </div>
            </div>
            <div class="stage-right">
              <div class="stage-stars">\${starsHtml}</div>
              <div class="stage-badge">\${badgeText}</div>
            </div>
          \`;

          card.addEventListener('click', () => {
            if (!isUnlocked) {
              sound.playLock();
              card.classList.add('shake');
              setTimeout(() => card.classList.remove('shake'), 450);
              this.showToast("Avval oldingi etapda kamida 50% to'pla! 🔒", "⚠️");
            } else {
              this.startMathQuiz(stage.stageNumber);
            }
          });

          container.appendChild(card);
        });
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
          \`\${this.selectedMathStage}-Etap | Misol: \${this.mathIndex + 1} / 10\`;

        for (let i = 0; i < 10; i++) {
          const dot = document.getElementById(\`quiz-dot-\${i}\`);
          dot.classList.remove('current');
          if (i === this.mathIndex) dot.classList.add('current');
        }

        const card = document.getElementById('quiz-question-card');
        card.classList.remove('correct-anim', 'wrong-anim');
        document.getElementById('quiz-operand-text').textContent = q.formula;
        const inputBox = document.getElementById('quiz-input-box');
        inputBox.textContent = '?';
        inputBox.className = 'input-box-display';

        const feedback = document.getElementById('quiz-feedback-box');
        feedback.textContent = '';
        feedback.className = 'feedback-box';
        document.getElementById('btn-skip-wrong').style.display = 'none';

        document.getElementById('quiz-numpad').classList.remove('locked');
        this.updateMathSubmitButton();
      }

      handleMathNumpadInput(key) {
        if (this.mathQuestionLocked) return;
        sound.playTap();

        if (key === 'del') {
          if (this.mathCurrentInput.length > 0) {
            this.mathCurrentInput = this.mathCurrentInput.slice(0, -1);
          }
        } else if (key === 'submit') {
          if (this.mathCurrentInput.length > 0) this.submitMathAnswer();
        } else {
          if (this.mathCurrentInput.length >= 3) return;
          if (this.mathCurrentInput === '0') this.mathCurrentInput = key;
          else this.mathCurrentInput += key;
        }

        const box = document.getElementById('quiz-input-box');
        if (this.mathCurrentInput.length > 0) {
          box.textContent = this.mathCurrentInput;
          box.classList.add('filled');
        } else {
          box.textContent = '?';
          box.classList.remove('filled');
        }
        this.updateMathSubmitButton();
      }

      updateMathSubmitButton() {
        const btn = document.getElementById('btn-quiz-submit');
        if (this.mathCurrentInput.length > 0 && !this.mathQuestionLocked) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      }

      submitMathAnswer() {
        if (this.mathQuestionLocked || this.mathCurrentInput.length === 0) return;
        this.mathQuestionLocked = true;
        document.getElementById('quiz-numpad').classList.add('locked');

        const q = this.mathQuestions[this.mathIndex];
        const userAns = parseInt(this.mathCurrentInput, 10);
        const isCorrect = userAns === q.answer;

        const card = document.getElementById('quiz-question-card');
        const box = document.getElementById('quiz-input-box');
        const feedback = document.getElementById('quiz-feedback-box');
        const dot = document.getElementById(\`quiz-dot-\${this.mathIndex}\`);

        if (isCorrect) {
          sound.playCorrect();
          this.mathCorrectCount++;
          card.classList.add('correct-anim');
          box.className = 'input-box-display correct';
          feedback.className = 'feedback-box correct';
          feedback.textContent = "🎉 Barakalla, to'g'ri!";
          dot.className = 'progress-dot correct';
          dot.textContent = '✓';

          setTimeout(() => this.advanceMathQuestion(), 900);
        } else {
          sound.playWrong();
          this.mathMistakes.push({ formula: q.formula, userAns: userAns, correctAns: q.answer });
          card.classList.add('wrong-anim', 'shake');
          setTimeout(() => card.classList.remove('shake'), 450);

          box.className = 'input-box-display wrong';
          feedback.className = 'feedback-box wrong';
          feedback.textContent = \`❌ Xato! Sen \${userAns} yozding. To'g'ri javob: \${q.answer}\`;
          dot.className = 'progress-dot wrong';
          dot.textContent = '✕';

          document.getElementById('btn-skip-wrong').style.display = 'inline-flex';
          this.mathWrongTimer = setTimeout(() => this.advanceMathQuestion(), 2000);
        }
      }

      advanceMathQuestion() {
        if (this.mathWrongTimer) {
          clearTimeout(this.mathWrongTimer);
          this.mathWrongTimer = null;
        }
        this.mathIndex++;
        if (this.mathIndex < 10) this.renderCurrentMathQuestion();
        else this.finishMathQuiz();
      }

      finishMathQuiz() {
        const currentPercentage = this.mathCorrectCount * 10;
        const res = db.saveMathResult(this.selectedMathOp, this.selectedMathStage, currentPercentage);

        const headline = document.getElementById('result-headline');
        const scorePercent = document.getElementById('result-score-percent');
        const comparisonPill = document.getElementById('result-comparison-text');
        const starsDisplay = document.getElementById('result-stars-display');
        const summaryLine = document.getElementById('result-summary-line');

        scorePercent.textContent = \`\${currentPercentage}%\`;
        summaryLine.textContent = \`10 ta misoldan \${this.mathCorrectCount} tasini to'g'ri yechding!\`;

        let starsHtml = \`\${ICONS_JS.starWhite}\${ICONS_JS.starWhite}\${ICONS_JS.starWhite}\`;
        if (currentPercentage === 100) starsHtml = \`\${ICONS_JS.star}\${ICONS_JS.star}\${ICONS_JS.star}\`;
        else if (currentPercentage >= 80) starsHtml = \`\${ICONS_JS.star}\${ICONS_JS.star}\${ICONS_JS.starWhite}\`;
        else if (currentPercentage >= 50) starsHtml = \`\${ICONS_JS.star}\${ICONS_JS.starWhite}\${ICONS_JS.starWhite}\`;
        starsDisplay.innerHTML = starsHtml;

        if (res.isPerfect) {
          headline.textContent = "BARAKALLA, SAVARBEK!";
          comparisonPill.className = 'result-comparison-pill new-record';
          comparisonPill.textContent = "🌟 100% Mukammal zabt etding!";
          sound.playFanfare();
          this.confetti.fire(120);
        } else if (res.isNewRecord) {
          headline.textContent = "YANGI REKORD!";
          comparisonPill.className = 'result-comparison-pill new-record';
          comparisonPill.textContent = \`Oldingi eng yuqori natijang: \${res.oldMax}% edi\`;
          sound.playFanfare();
          this.confetti.fire(90);
        } else {
          headline.textContent = currentPercentage >= 50 ? "Yaxshi Natija!" : "Yana Harakat Qil!";
          comparisonPill.className = 'result-comparison-pill kept-record';
          comparisonPill.textContent = \`🛡️ Eng yuqori rekording: \${res.oldMax}% (Saqlandi)\`;
        }

        const mistakesBlock = document.getElementById('result-mistakes-block');
        const mistakesList = document.getElementById('result-mistakes-list');
        mistakesList.innerHTML = '';

        if (this.mathMistakes.length > 0) {
          mistakesBlock.style.display = 'flex';
          this.mathMistakes.forEach((m, idx) => {
            const item = document.createElement('div');
            item.className = 'mistake-item';
            item.innerHTML = \`
              <span>\${idx + 1}) <b>\${m.formula} \${m.correctAns}</b></span>
              <span class="wrong-ans">Sening javobing: \${m.userAns} ❌</span>
            \`;
            mistakesList.appendChild(item);
          });
        } else {
          mistakesBlock.style.display = 'none';
        }

        const nextBtn = document.getElementById('btn-next-stage');
        if (this.selectedMathStage < 10 && currentPercentage >= 50) {
          nextBtn.style.display = 'flex';
        } else {
          nextBtn.style.display = 'none';
        }

        this.navigateTo('screen-result');
      }

      /* ---------- ENGLISH SCREENS ---------- */
      renderEngCategories() {
        const cats = ['vocabulary', 'listening', 'spelling', 'grammar'];
        cats.forEach(cat => {
          const completed = db.getEngCompletedStages(cat);
          const avgPercent = db.getEngCategoryAverage(cat);
          document.getElementById(\`eng-cat-stages-\${cat}\`).textContent = \`\${completed} / 10 etap\`;
          document.getElementById(\`eng-cat-percent-\${cat}\`).textContent = \`\${avgPercent}%\`;
          document.getElementById(\`eng-cat-fill-\${cat}\`).style.width = \`\${avgPercent}%\`;
        });
      }

      renderEngStages() {
        const catTitles = {
          vocabulary: "📚 So'z boyligi",
          listening: "🎧 Eshitib topish",
          spelling: "🧩 Harflardan so'z yasash",
          grammar: "📝 Qoidalar va Gaplar"
        };
        document.getElementById('eng-stages-screen-title').textContent = catTitles[this.selectedEngCat];

        let catStars = 0;
        const stagesList = db.data.english[this.selectedEngCat];
        stagesList.forEach(s => {
          if (s.maxPercentage === 100) catStars += 3;
          else if (s.maxPercentage >= 80) catStars += 2;
          else if (s.maxPercentage >= 50) catStars += 1;
        });
        document.getElementById('eng-stages-summary-stars-val').textContent = \`\${catStars} / 30\`;

        const container = document.getElementById('eng-stages-list-container');
        container.innerHTML = '';

        const metaStages = ENGLISH_DATA[this.selectedEngCat];

        stagesList.forEach(stage => {
          const meta = metaStages[stage.stageNumber - 1];
          const isUnlocked = db.isEngStageUnlocked(this.selectedEngCat, stage.stageNumber);
          const card = document.createElement('div');
          card.className = 'stage-card';

          let stateClass = 'state-new';
          let starsHtml = \`\${ICONS_JS.starWhite}\${ICONS_JS.starWhite}\${ICONS_JS.starWhite}\`;
          let subtitleText = \`\${meta.icon} \${meta.title} • 10 ta savol\`;
          let badgeText = 'Boshlash';

          if (!isUnlocked) {
            card.classList.add('locked');
            starsHtml = \`\${ICONS_JS.lock} <span style="font-size: 12px; font-weight:800;">Qulf</span>\`;
            subtitleText = "Oldingi etapda kamida 50% to'pla";
            badgeText = 'Qulf';
          } else if (stage.attempts === 0) {
            stateClass = 'state-new';
            starsHtml = \`\${ICONS_JS.starWhite}\${ICONS_JS.starWhite}\${ICONS_JS.starWhite}\`;
            badgeText = 'Yangi';
          } else if (stage.maxPercentage <= 40) {
            stateClass = 'state-hard';
            starsHtml = \`<span style="color: #EF4444; font-size: 13px; font-weight: 800;">🔴 Yana harakat qil!</span>\`;
            badgeText = \`\${stage.maxPercentage}%\`;
          } else if (stage.maxPercentage <= 70) {
            stateClass = 'state-medium';
            starsHtml = \`\${ICONS_JS.star}\${ICONS_JS.starWhite}\${ICONS_JS.starWhite}\`;
            badgeText = \`\${stage.maxPercentage}%\`;
          } else if (stage.maxPercentage <= 90) {
            stateClass = 'state-good';
            starsHtml = \`\${ICONS_JS.star}\${ICONS_JS.star}\${ICONS_JS.starWhite}\`;
            badgeText = \`\${stage.maxPercentage}%\`;
          } else if (stage.maxPercentage === 100) {
            stateClass = 'state-perfect';
            starsHtml = \`\${ICONS_JS.star}\${ICONS_JS.star}\${ICONS_JS.star}\`;
            badgeText = '100% 🏆';
          }

          if (isUnlocked) card.classList.add(stateClass);

          card.innerHTML = \`
            <div class="stage-left">
              <div class="stage-number-box">\${stage.stageNumber}</div>
              <div class="stage-info-text">
                <div class="stage-title">
                  \${stage.stageNumber}-Etap \${stage.maxPercentage === 100 ? '🏆' : ''}
                </div>
                <div class="stage-subtitle">\${subtitleText}</div>
              </div>
            </div>
            <div class="stage-right">
              <div class="stage-stars">\${starsHtml}</div>
              <div class="stage-badge">\${badgeText}</div>
            </div>
          \`;

          card.addEventListener('click', () => {
            if (!isUnlocked) {
              sound.playLock();
              card.classList.add('shake');
              setTimeout(() => card.classList.remove('shake'), 450);
              this.showToast("Avval oldingi etapda kamida 50% to'pla! 🔒", "⚠️");
            } else {
              this.startEngQuiz(stage.stageNumber);
            }
          });

          container.appendChild(card);
        });
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
          \`\${this.selectedEngStage}-Etap | Savol: \${this.engIndex + 1} / 10\`;

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

        if (q.type === 'vocabulary') {
          cardContent.innerHTML = \`
            <div class="eng-prompt-box">
              <div class="eng-prompt-emoji">\${q.emoji}</div>
              <div class="eng-prompt-word">
                <span>\${q.word}</span>
                <button class="btn-speak-inline" id="btn-speak-word" title="Talaffuzni eshitish">\${ICONS_JS.speaker}</button>
              </div>
              <div class="eng-prompt-subtext">O'zbekcha ma'nosi qaysi?</div>
            </div>
          \`;

          document.getElementById('btn-speak-word').addEventListener('click', (e) => {
            e.stopPropagation();
            sound.speakEnglish(q.speakText);
          });

          setTimeout(() => sound.speakEnglish(q.speakText), 250);

          bottomPanel.innerHTML = \`
            <div class="eng-options-container">
              \${q.options.map(opt => \`<button class="eng-opt-btn" data-val="\${opt}">\${opt}</button>\`).join('')}
            </div>
          \`;

          bottomPanel.querySelectorAll('.eng-opt-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              if (this.engQuestionLocked) return;
              this.handleChoiceAnswer(btn, btn.dataset.val, q.correct, q.word, q.speakText);
            });
          });

        } else if (q.type === 'listening') {
          cardContent.innerHTML = \`
            <div class="eng-prompt-box">
              <div class="listening-center-controls">
                <button class="btn-audio-main" id="btn-audio-play" title="Eshitish">\${ICONS_JS.speakerBig}</button>
                <button class="btn-audio-slow" id="btn-audio-slow">🐢 Sekin eshitish</button>
              </div>
              <div class="eng-prompt-subtext">Ovozni tingla va to'g'ri ma'noni top:</div>
            </div>
          \`;

          document.getElementById('btn-audio-play').addEventListener('click', () => {
            sound.speakEnglish(q.speakText, false);
          });

          document.getElementById('btn-audio-slow').addEventListener('click', () => {
            sound.speakEnglish(q.speakText, true);
          });

          setTimeout(() => sound.speakEnglish(q.speakText), 250);

          bottomPanel.innerHTML = \`
            <div class="eng-options-container">
              \${q.options.map(opt => \`<button class="eng-opt-btn" data-val="\${opt}">\${opt}</button>\`).join('')}
            </div>
          \`;

          bottomPanel.querySelectorAll('.eng-opt-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              if (this.engQuestionLocked) return;
              this.handleChoiceAnswer(btn, btn.dataset.val, q.correct, q.audioText, q.speakText);
            });
          });

        } else if (q.type === 'spelling') {
          this.spellingFilledSlots = new Array(q.slotsCount).fill('');
          this.spellingUsedTileIndices.clear();

          cardContent.innerHTML = \`
            <div class="spelling-slots-wrapper">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 34px;">\${q.emoji}</span>
                <span style="font-size: 20px; font-weight: 800; color: var(--text-main);">\${q.uz}</span>
                <button class="btn-speak-inline" id="btn-spelling-speak">\${ICONS_JS.speaker}</button>
              </div>
              <div class="spelling-slots-row" id="spelling-slots-row">
                \${Array.from({ length: q.slotsCount }).map((_, i) => \`
                  <div class="spelling-slot" data-index="\${i}"></div>
                \`).join('')}
              </div>
            </div>
          \`;

          document.getElementById('btn-spelling-speak').addEventListener('click', () => {
            sound.speakEnglish(q.speakText);
          });
          setTimeout(() => sound.speakEnglish(q.speakText), 250);

          bottomPanel.innerHTML = \`
            <div class="spelling-bank-container">
              <div class="spelling-tiles-row" id="spelling-tiles-row">
                \${q.tiles.map((letter, idx) => \`
                  <button class="letter-tile" data-letter="\${letter}" data-tile-index="\${idx}">\${letter}</button>
                \`).join('')}
              </div>
              <div class="spelling-action-row">
                <button class="btn-spelling-del" id="btn-spelling-backspace">
                  \${ICONS.delete}
                  <span>O'chirish</span>
                </button>
              </div>
            </div>
          \`;

          this.bindSpellingEvents(q);

        } else if (q.type === 'grammar') {
          cardContent.innerHTML = \`
            <div class="eng-prompt-box">
              <div style="font-size: 14px; font-weight: 700; color: var(--text-muted); margin-bottom: 2px;">
                Tarjimasi: \${q.uz}
              </div>
              <div class="grammar-sentence-text">
                \${q.sentence.replace('[ ___ ]', '<span class="grammar-blank-tag">?</span>')}
              </div>
              <div id="grammar-rule-container"></div>
            </div>
          \`;

          bottomPanel.innerHTML = \`
            <div class="eng-options-container" style="grid-template-columns: repeat(\${q.options.length <= 2 ? 2 : 1}, 1fr);">
              \${q.options.map(opt => \`<button class="eng-opt-btn" data-val="\${opt}">\${opt}</button>\`).join('')}
            </div>
          \`;

          bottomPanel.querySelectorAll('.eng-opt-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              if (this.engQuestionLocked) return;
              this.handleGrammarAnswer(btn, btn.dataset.val, q.correct, q.rule, q.speakText);
            });
          });
        }
      }

      handleChoiceAnswer(btn, selectedVal, correctVal, displayWord, speakText) {
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
          feedback.className = 'feedback-box correct';
          feedback.textContent = "🎉 Barakalla, to'g'ri!";
          dot.className = 'progress-dot correct';
          dot.textContent = '✓';

          setTimeout(() => this.advanceEngQuestion(), 1000);
        } else {
          sound.playWrong();
          this.engMistakes.push({
            prompt: displayWord,
            userAns: selectedVal,
            correctAns: correctVal,
            speakText: speakText
          });

          btn.classList.add('wrong');
          card.classList.add('wrong-anim', 'shake');
          setTimeout(() => card.classList.remove('shake'), 450);

          feedback.className = 'feedback-box wrong';
          feedback.textContent = \`❌ To'g'ri javob: \${correctVal}\`;
          dot.className = 'progress-dot wrong';
          dot.textContent = '✕';

          document.getElementById('btn-eng-skip-wrong').style.display = 'inline-flex';
          this.engWrongTimer = setTimeout(() => this.advanceEngQuestion(), 2200);
        }
      }

      handleGrammarAnswer(btn, selectedVal, correctVal, rule, speakText) {
        this.engQuestionLocked = true;
        const isCorrect = selectedVal === correctVal;
        const card = document.getElementById('eng-quiz-question-card');
        const feedback = document.getElementById('eng-quiz-feedback-box');
        const dot = document.getElementById(\`eng-quiz-dot-\${this.engIndex}\`);
        const blank = card.querySelector('.grammar-blank-tag');

        if (blank) {
          blank.textContent = selectedVal;
          blank.style.borderColor = isCorrect ? '#10B981' : '#EF4444';
        }

        if (isCorrect) {
          sound.playCorrect();
          sound.speakEnglish(speakText);
          this.engCorrectCount++;
          btn.classList.add('correct');
          card.classList.add('correct-anim');
          feedback.className = 'feedback-box correct';
          feedback.textContent = "🎉 Barakalla, to'g'ri!";
          dot.className = 'progress-dot correct';
          dot.textContent = '✓';

          setTimeout(() => this.advanceEngQuestion(), 1100);
        } else {
          sound.playWrong();
          const q = this.engQuestions[this.engIndex];
          this.engMistakes.push({
            prompt: q.sentence,
            userAns: selectedVal,
            correctAns: correctVal,
            speakText: speakText
          });

          btn.classList.add('wrong');
          card.classList.add('wrong-anim', 'shake');
          setTimeout(() => card.classList.remove('shake'), 450);

          const ruleContainer = document.getElementById('grammar-rule-container');
          if (ruleContainer) {
            ruleContainer.innerHTML = \`<div class="grammar-rule-box"><span>💡</span><span>\${rule}</span></div>\`;
          }

          feedback.className = 'feedback-box wrong';
          feedback.textContent = \`❌ To'g'ri javob: \${correctVal}\`;
          dot.className = 'progress-dot wrong';
          dot.textContent = '✕';

          document.getElementById('btn-eng-skip-wrong').style.display = 'inline-flex';
          this.engWrongTimer = setTimeout(() => this.advanceEngQuestion(), 2800);
        }
      }

      bindSpellingEvents(q) {
        const slotEls = document.querySelectorAll('.spelling-slot');
        const tileBtns = document.querySelectorAll('.letter-tile');

        tileBtns.forEach(tile => {
          tile.addEventListener('click', () => {
            if (this.engQuestionLocked) return;
            const tileIdx = parseInt(tile.dataset.tileIndex, 10);
            const letter = tile.dataset.letter;

            const emptyIdx = this.spellingFilledSlots.findIndex(s => s === '');
            if (emptyIdx === -1) return;

            sound.playTap();
            this.spellingFilledSlots[emptyIdx] = { letter, tileIdx };
            this.spellingUsedTileIndices.add(tileIdx);
            tile.classList.add('used');

            this.updateSpellingSlotsView(q);
          });
        });

        slotEls.forEach(slot => {
          slot.addEventListener('click', () => {
            if (this.engQuestionLocked) return;
            const idx = parseInt(slot.dataset.index, 10);
            const item = this.spellingFilledSlots[idx];
            if (!item) return;

            sound.playTap();
            this.spellingUsedTileIndices.delete(item.tileIdx);
            const matchingTile = document.querySelector(\`.letter-tile[data-tile-index="\${item.tileIdx}"]\`);
            if (matchingTile) matchingTile.classList.remove('used');

            this.spellingFilledSlots[idx] = '';
            this.updateSpellingSlotsView(q);
          });
        });

        document.getElementById('btn-spelling-backspace').addEventListener('click', () => {
          if (this.engQuestionLocked) return;
          for (let i = this.spellingFilledSlots.length - 1; i >= 0; i--) {
            if (this.spellingFilledSlots[i] !== '') {
              sound.playTap();
              const item = this.spellingFilledSlots[i];
              this.spellingUsedTileIndices.delete(item.tileIdx);
              const matchingTile = document.querySelector(\`.letter-tile[data-tile-index="\${item.tileIdx}"]\`);
              if (matchingTile) matchingTile.classList.remove('used');
              this.spellingFilledSlots[i] = '';
              this.updateSpellingSlotsView(q);
              break;
            }
          }
        });
      }

      updateSpellingSlotsView(q) {
        const slotEls = document.querySelectorAll('.spelling-slot');
        slotEls.forEach((slot, i) => {
          const item = this.spellingFilledSlots[i];
          if (item && item.letter) {
            slot.textContent = item.letter;
            slot.classList.add('filled');
          } else {
            slot.textContent = '';
            slot.classList.remove('filled');
          }
        });

        const allFilled = this.spellingFilledSlots.every(s => s && s.letter);
        if (allFilled) {
          this.validateSpellingWord(q);
        }
      }

      validateSpellingWord(q) {
        this.engQuestionLocked = true;
        const formedWord = this.spellingFilledSlots.map(s => s.letter).join('');
        const isCorrect = formedWord === q.word;

        const card = document.getElementById('eng-quiz-question-card');
        const feedback = document.getElementById('eng-quiz-feedback-box');
        const dot = document.getElementById(\`eng-quiz-dot-\${this.engIndex}\`);
        const slotEls = document.querySelectorAll('.spelling-slot');

        if (isCorrect) {
          sound.playCorrect();
          sound.speakEnglish(q.speakText);
          this.engCorrectCount++;
          slotEls.forEach(s => s.classList.add('correct'));
          card.classList.add('correct-anim');
          feedback.className = 'feedback-box correct';
          feedback.textContent = \`🎉 Barakalla! "\${q.word}" to'g'ri yozildi!\`;
          dot.className = 'progress-dot correct';
          dot.textContent = '✓';

          setTimeout(() => this.advanceEngQuestion(), 1100);
        } else {
          sound.playWrong();
          this.engMistakes.push({
            prompt: \`\${q.emoji} \${q.uz}\`,
            userAns: formedWord,
            correctAns: q.word,
            speakText: q.speakText
          });

          slotEls.forEach(s => s.classList.add('wrong'));
          card.classList.add('wrong-anim', 'shake');
          setTimeout(() => card.classList.remove('shake'), 450);

          feedback.className = 'feedback-box wrong';
          feedback.textContent = \`❌ To'g'ri yozilishi: \${q.word}\`;
          dot.className = 'progress-dot wrong';
          dot.textContent = '✕';

          document.getElementById('btn-eng-skip-wrong').style.display = 'inline-flex';
          this.engWrongTimer = setTimeout(() => this.advanceEngQuestion(), 2400);
        }
      }

      advanceEngQuestion() {
        if (this.engWrongTimer) {
          clearTimeout(this.engWrongTimer);
          this.engWrongTimer = null;
        }
        this.engIndex++;
        if (this.engIndex < 10) this.renderCurrentEngQuestion();
        else this.finishEngQuiz();
      }

      finishEngQuiz() {
        const currentPercentage = this.engCorrectCount * 10;
        const res = db.saveEngResult(this.selectedEngCat, this.selectedEngStage, currentPercentage);

        const headline = document.getElementById('eng-result-headline');
        const scorePercent = document.getElementById('eng-result-score-percent');
        const comparisonPill = document.getElementById('eng-result-comparison-text');
        const starsDisplay = document.getElementById('eng-result-stars-display');
        const summaryLine = document.getElementById('eng-result-summary-line');

        scorePercent.textContent = \`\${currentPercentage}%\`;
        summaryLine.textContent = \`10 ta savoldan \${this.engCorrectCount} tasini to'g'ri topding!\`;

        let starsHtml = \`\${ICONS_JS.starWhite}\${ICONS_JS.starWhite}\${ICONS_JS.starWhite}\`;
        if (currentPercentage === 100) starsHtml = \`\${ICONS_JS.star}\${ICONS_JS.star}\${ICONS_JS.star}\`;
        else if (currentPercentage >= 80) starsHtml = \`\${ICONS_JS.star}\${ICONS_JS.star}\${ICONS_JS.starWhite}\`;
        else if (currentPercentage >= 50) starsHtml = \`\${ICONS_JS.star}\${ICONS_JS.starWhite}\${ICONS_JS.starWhite}\`;
        starsDisplay.innerHTML = starsHtml;

        if (res.isPerfect) {
          headline.textContent = "BARAKALLA, SAVARBEK!";
          comparisonPill.className = 'result-comparison-pill new-record';
          comparisonPill.textContent = "🌟 100% Mukammal zabt etding!";
          sound.playFanfare();
          this.confetti.fire(120);
        } else if (res.isNewRecord) {
          headline.textContent = "YANGI REKORD!";
          comparisonPill.className = 'result-comparison-pill new-record';
          comparisonPill.textContent = \`Oldingi eng yuqori natijang: \${res.oldMax}% edi\`;
          sound.playFanfare();
          this.confetti.fire(90);
        } else {
          headline.textContent = currentPercentage >= 50 ? "Yaxshi Natija!" : "Yana Harakat Qil!";
          comparisonPill.className = 'result-comparison-pill kept-record';
          comparisonPill.textContent = \`🛡️ Eng yuqori rekording: \${res.oldMax}% (Saqlandi)\`;
        }

        const mistakesBlock = document.getElementById('eng-result-mistakes-block');
        const mistakesList = document.getElementById('eng-result-mistakes-list');
        mistakesList.innerHTML = '';

        if (this.engMistakes.length > 0) {
          mistakesBlock.style.display = 'flex';
          this.engMistakes.forEach((m, idx) => {
            const item = document.createElement('div');
            item.className = 'mistake-item';
            item.innerHTML = \`
              <div style="display: flex; align-items: center; gap: 8px;">
                <button class="btn-speak-inline mistake-audio-btn" data-audio="\${m.speakText}">\${ICONS_JS.speaker}</button>
                <span>\${idx + 1}) <b>\${m.correctAns}</b></span>
              </div>
              <span class="wrong-ans">Sening javobing: \${m.userAns} ❌</span>
            \`;
            mistakesList.appendChild(item);
          });

          mistakesList.querySelectorAll('.mistake-audio-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              sound.speakEnglish(btn.dataset.audio);
            });
          });
        } else {
          mistakesBlock.style.display = 'none';
        }

        const nextBtn = document.getElementById('btn-eng-next-stage');
        if (this.selectedEngStage < 10 && currentPercentage >= 50) {
          nextBtn.style.display = 'flex';
        } else {
          nextBtn.style.display = 'none';
        }

        this.navigateTo('screen-eng-result');
      }

      initEvents() {
        document.getElementById('btn-toggle-sound').addEventListener('click', () => {
          db.data.soundEnabled = !db.data.soundEnabled;
          sound.enabled = db.data.soundEnabled;
          db.save();
          document.getElementById('sound-icon').innerHTML = sound.enabled ? ICONS_JS.soundOn : ICONS_JS.soundOff;
          if (sound.enabled) sound.playTap();
        });

        document.getElementById('card-open-math').addEventListener('click', () => {
          this.navigateTo('screen-operations');
        });

        document.getElementById('card-open-english').addEventListener('click', () => {
          this.navigateTo('screen-eng-categories');
        });

        document.getElementById('btn-back-to-home').addEventListener('click', () => this.navigateTo('screen-home'));
        document.getElementById('btn-back-to-ops').addEventListener('click', () => this.navigateTo('screen-operations'));

        document.getElementById('btn-back-eng-to-home').addEventListener('click', () => this.navigateTo('screen-home'));
        document.getElementById('btn-back-to-eng-cats').addEventListener('click', () => this.navigateTo('screen-eng-categories'));

        document.querySelectorAll('.op-card[data-op]').forEach(card => {
          card.addEventListener('click', () => {
            this.selectedMathOp = card.dataset.op;
            this.navigateTo('screen-stages');
          });
        });

        document.querySelectorAll('.op-card[data-cat]').forEach(card => {
          card.addEventListener('click', () => {
            this.selectedEngCat = card.dataset.cat;
            this.navigateTo('screen-eng-stages');
          });
        });

        document.getElementById('quiz-numpad').addEventListener('click', (e) => {
          const btn = e.target.closest('.numpad-btn');
          if (btn) this.handleMathNumpadInput(btn.dataset.key);
        });

        window.addEventListener('keydown', (e) => {
          if (this.currentScreen === 'screen-quiz') {
            if (e.key >= '0' && e.key <= '9') this.handleMathNumpadInput(e.key);
            else if (e.key === 'Backspace') this.handleMathNumpadInput('del');
            else if (e.key === 'Enter') this.handleMathNumpadInput('submit');
          } else if (this.currentScreen === 'screen-eng-quiz') {
            if (['1', '2', '3', '4'].includes(e.key)) {
              const opts = document.querySelectorAll('#eng-choice-options .eng-choice-btn, #eng-grammar-options .eng-choice-btn');
              const idx = parseInt(e.key, 10) - 1;
              if (opts && opts[idx]) opts[idx].click();
            } else if (e.key === ' ' || e.key === 'r' || e.key === 'R') {
              const playBtn = document.getElementById('btn-eng-audio-main') || document.querySelector('.btn-listen-again');
              if (playBtn) playBtn.click();
            }
          }
        });

        document.getElementById('btn-skip-wrong').addEventListener('click', () => this.advanceMathQuestion());
        document.getElementById('btn-eng-skip-wrong').addEventListener('click', () => this.advanceEngQuestion());

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

        document.getElementById('btn-exit-cancel').addEventListener('click', () => {
          sound.playTap();
          document.getElementById('modal-exit-confirm').classList.remove('active');
        });

        document.getElementById('btn-exit-confirm').addEventListener('click', () => {
          sound.playTap();
          document.getElementById('modal-exit-confirm').classList.remove('active');
          this.navigateTo(this.exitTargetScreen || 'screen-home');
        });

        document.getElementById('btn-retry-stage').addEventListener('click', () => {
          this.startMathQuiz(this.selectedMathStage);
        });
        document.getElementById('btn-next-stage').addEventListener('click', () => {
          if (this.selectedMathStage < 10) this.startMathQuiz(this.selectedMathStage + 1);
        });
        document.getElementById('btn-back-stages-from-result').addEventListener('click', () => {
          this.navigateTo('screen-stages');
        });

        document.getElementById('btn-eng-retry-stage').addEventListener('click', () => {
          this.startEngQuiz(this.selectedEngStage);
        });
        document.getElementById('btn-eng-next-stage').addEventListener('click', () => {
          if (this.selectedEngStage < 10) this.startEngQuiz(this.selectedEngStage + 1);
        });
        document.getElementById('btn-eng-back-stages').addEventListener('click', () => {
          this.navigateTo('screen-eng-stages');
        });

        document.getElementById('btn-open-settings').addEventListener('click', () => {
          sound.playTap();
          const challenges = [
            { q: "125 × 4 = ?", a: 500 },
            { q: "250 + 350 = ?", a: 600 },
            { q: "720 ÷ 8 = ?", a: 90 },
            { q: "450 - 180 = ?", a: 270 },
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
            this.showToast("Barcha natijalar tozalandi! 🧹", "✅");
            this.renderHomeScreen();
          } else {
            sound.playWrong();
            this.showToast("Noto'g'ri javob! Natijalar xavfsiz saqlandi 🛡️", "❌");
          }
        });
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      window.app = new AppController();
    });
  </script>
</body>
</html>
`;

// Ensure public directory exists for Vercel and static hosting
if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

// Write to root
fs.writeFileSync('index.html', htmlContent, 'utf8');

// Write to public/
fs.writeFileSync('public/index.html', htmlContent, 'utf8');

// Generate manifest.json for PWA support
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

// Generate robots.txt
fs.writeFileSync('public/robots.txt', "User-agent: *\nAllow: /\n", 'utf8');

// Generate icon.svg
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

console.log('Successfully generated index.html and public/ directory with PWA assets! Size:', htmlContent.length);
