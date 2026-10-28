// src/icons.js - Flaticon-style SVG Icons Library
const ICONS = {
  // Brand New Flaticon English Subject Icon
  flaticonEnglish: `<svg viewBox="0 0 64 64" width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="engBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
    <linearGradient id="bubbleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBBF24"/>
      <stop offset="100%" stop-color="#F59E0B"/>
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#engBg)"/>
  <!-- UK Flag Roundel -->
  <circle cx="23" cy="23" r="13" fill="#1E3A8A"/>
  <path d="M12 12L34 34M34 12L12 34" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M12 23H34M23 12V34" stroke="#FFFFFF" stroke-width="4.2"/>
  <path d="M12 12L34 34M34 12L12 34" stroke="#EF4444" stroke-width="1.3" stroke-linecap="round"/>
  <path d="M12 23H34M23 12V34" stroke="#EF4444" stroke-width="2.4"/>
  <!-- Open Book in Front -->
  <path d="M13 49C17 46 27 46 31 49C35 46 45 46 49 49V35C45 32 35 32 31 35C27 32 17 32 13 35V49Z" fill="#FFFFFF"/>
  <path d="M13 49C17 46 27 46 31 49V35C27 32 17 32 13 35V49Z" fill="#F8FAFC"/>
  <path d="M31 35V49" stroke="#CBD5E1" stroke-width="1.5"/>
  <path d="M31 34V43L34 40.5L37 43V34" fill="#EF4444"/>
  <!-- Floating Speech Bubble with ABC -->
  <rect x="34" y="7" width="26" height="19" rx="8" fill="url(#bubbleGrad)"/>
  <polygon points="38 26 43 26 36 30" fill="#F59E0B"/>
  <text x="47" y="20.5" font-family="'Outfit', sans-serif" font-size="11" font-weight="900" fill="#78350F" text-anchor="middle">ABC</text>
</svg>`,

  // Brand New Flaticon Math Subject Icon
  flaticonMath: `<svg viewBox="0 0 64 64" width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mathBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818CF8"/>
      <stop offset="100%" stop-color="#4F46E5"/>
    </linearGradient>
    <linearGradient id="calcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F1F5F9"/>
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#mathBg)"/>
  <rect x="14" y="9" width="36" height="46" rx="8" fill="url(#calcGrad)"/>
  <rect x="18" y="14" width="28" height="12" rx="4" fill="#10B981"/>
  <text x="42" y="23.5" font-family="'Outfit', sans-serif" font-size="9.5" font-weight="900" fill="#FFFFFF" text-anchor="end">123</text>
  <rect x="18" y="30" width="7" height="6" rx="2" fill="#E2E8F0"/>
  <rect x="28" y="30" width="7" height="6" rx="2" fill="#E2E8F0"/>
  <rect x="39" y="30" width="7" height="6" rx="2" fill="#F59E0B"/>
  <text x="42.5" y="35" font-family="sans-serif" font-size="7" font-weight="bold" fill="#FFFFFF" text-anchor="middle">+</text>
  <rect x="18" y="39" width="7" height="6" rx="2" fill="#E2E8F0"/>
  <rect x="28" y="39" width="7" height="6" rx="2" fill="#E2E8F0"/>
  <rect x="39" y="39" width="7" height="6" rx="2" fill="#3B82F6"/>
  <text x="42.5" y="44" font-family="sans-serif" font-size="7" font-weight="bold" fill="#FFFFFF" text-anchor="middle">-</text>
  <circle cx="51" cy="12" r="8" fill="#EC4899"/>
  <text x="51" y="16.5" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">×</text>
</svg>`,

  // Flaticon Math Operations
  flaticonAdd: `<svg viewBox="0 0 52 52" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="addGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34D399"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>
  <rect width="52" height="52" rx="15" fill="url(#addGrad)"/>
  <path d="M26 14V38M14 26H38" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"/>
</svg>`,

  flaticonSub: `<svg viewBox="0 0 52 52" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="subGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
  </defs>
  <rect width="52" height="52" rx="15" fill="url(#subGrad)"/>
  <path d="M14 26H38" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"/>
</svg>`,

  flaticonMul: `<svg viewBox="0 0 52 52" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mulGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBBF24"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
  </defs>
  <rect width="52" height="52" rx="15" fill="url(#mulGrad)"/>
  <path d="M17 17L35 35M35 17L17 35" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round"/>
</svg>`,

  flaticonDiv: `<svg viewBox="0 0 52 52" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="divGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A78BFA"/>
      <stop offset="100%" stop-color="#7C3AED"/>
    </linearGradient>
  </defs>
  <rect width="52" height="52" rx="15" fill="url(#divGrad)"/>
  <path d="M14 26H38" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round"/>
  <circle cx="26" cy="16" r="3.5" fill="#FFFFFF"/>
  <circle cx="26" cy="36" r="3.5" fill="#FFFFFF"/>
</svg>`,

  // Flaticon English Categories
  flaticonVocabulary: `<svg viewBox="0 0 52 52" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="vocGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60A5FA"/>
      <stop offset="100%" stop-color="#2563EB"/>
    </linearGradient>
  </defs>
  <rect width="52" height="52" rx="15" fill="url(#vocGrad)"/>
  <path d="M10 39C15 36 22 36 26 38.5C30 36 37 36 42 39V19C37 16 30 16 26 18.5C22 16 15 16 10 19V39Z" fill="#FFFFFF"/>
  <path d="M26 18.5V38.5" stroke="#93C5FD" stroke-width="2"/>
  <path d="M26 18.5V28L28.5 25.5L31 28V18.5" fill="#EF4444"/>
</svg>`,

  flaticonListening: `<svg viewBox="0 0 52 52" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="lisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F472B6"/>
      <stop offset="100%" stop-color="#DB2777"/>
    </linearGradient>
  </defs>
  <rect width="52" height="52" rx="15" fill="url(#lisGrad)"/>
  <path d="M14 27C14 20.37 19.37 15 26 15C32.63 15 38 20.37 38 27" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
  <rect x="11" y="26" width="6" height="12" rx="3" fill="#FFFFFF"/>
  <rect x="35" y="26" width="6" height="12" rx="3" fill="#FFFFFF"/>
</svg>`,

  flaticonSpelling: `<svg viewBox="0 0 52 52" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="splGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34D399"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>
  <rect width="52" height="52" rx="15" fill="url(#splGrad)"/>
  <path d="M33 21C34.66 21 36 19.66 36 18C36 16.34 34.66 15 33 15C31.34 15 30 16.34 30 18H20C18.9 18 18 18.9 18 20V25C19.66 25 21 26.34 21 28C21 29.66 19.66 31 18 31V36C18 37.1 18.9 38 20 38H27C27 36.34 28.34 35 30 35C31.66 35 33 36.34 33 38H36C37.1 38 38 37.1 38 36V28C36.34 28 35 26.66 35 25C35 23.34 36.34 22 38 22V20C38 18.9 37.1 18 36 18H33" fill="#FFFFFF"/>
</svg>`,

  flaticonGrammar: `<svg viewBox="0 0 52 52" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBBF24"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
  </defs>
  <rect width="52" height="52" rx="15" fill="url(#grmGrad)"/>
  <rect x="15" y="14" width="22" height="28" rx="4" fill="#FFFFFF"/>
  <rect x="21" y="11" width="10" height="5" rx="2" fill="#78350F"/>
  <line x1="20" y1="23" x2="32" y2="23" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="20" y1="29" x2="32" y2="29" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
  <polyline points="21 35 24 37 31 32" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  // Flaticon Utility Icons
  flaticonTrophy: `<svg viewBox="0 0 64 64" width="58" height="58" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="trpGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047"/>
      <stop offset="50%" stop-color="#FBBF24"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
  </defs>
  <path d="M16 22H11C8.2 22 6 19.8 6 17V15C6 12.2 8.2 10 11 10H16" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
  <path d="M48 22H53C55.8 22 58 19.8 58 17V15C58 12.2 55.8 10 53 10H48" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
  <path d="M16 8H48V25C48 33.8 40.8 41 32 41C23.2 41 16 33.8 16 25V8Z" fill="url(#trpGold)"/>
  <polygon points="32 16 34.2 21 39.5 21.5 35.5 25 36.7 30 32 27.2 27.3 30 28.5 25 24.5 21.5 29.8 21" fill="#FFFFFF"/>
  <path d="M28 41H36V48H28V41Z" fill="#F59E0B"/>
  <path d="M20 48H44V55C44 56.1 43.1 57 42 57H22C20.9 57 20 56.1 20 55V48Z" fill="#1E293B"/>
  <rect x="24" y="50" width="16" height="4" rx="1" fill="#FCD34D"/>
</svg>`,

  flaticonStar: `<svg viewBox="0 0 32 32" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047"/>
      <stop offset="100%" stop-color="#F59E0B"/>
    </linearGradient>
  </defs>
  <polygon points="16 2 20.3 11.2 30 12.5 22.8 19.2 24.7 29 16 24.2 7.3 29 9.2 19.2 2 12.5 11.7 11.2" fill="url(#starGrad)" stroke="#D97706" stroke-width="1.2" stroke-linejoin="round"/>
  <polygon points="16 2 20.3 11.2 30 12.5 22.8 19.2 16 16" fill="#FEF08A" opacity="0.6"/>
</svg>`,

  flaticonStarGray: `<svg viewBox="0 0 32 32" width="18" height="18" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.2" stroke-linejoin="round">
  <polygon points="16 2 20.3 11.2 30 12.5 22.8 19.2 24.7 29 16 24.2 7.3 29 9.2 19.2 2 12.5 11.7 11.2"/>
</svg>`,

  flaticonGlobe: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="10" fill="#3B82F6"/>
  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="#60A5FA"/>
  <path d="M2 12h20M4 7h16M4 17h16" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round"/>
</svg>`,

  soundOn: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  soundOff: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  back: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  exit: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  check: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  delete: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/></svg>`,
  speaker: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  speakerBig: `<svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  retry: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>`,
  next: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  list: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  target: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#6366F1" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`
};

module.exports = { ICONS };
