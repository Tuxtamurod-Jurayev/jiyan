// Comprehensive test for all 4 categories and 40 stages of English module
const { ENGLISH_DATA } = require('./english_data_structure.js');

console.log("=== TESTING ALL 40 ENGLISH STAGES ===");
const cats = ['vocabulary', 'listening', 'spelling', 'grammar'];
let totalPassed = 0;

cats.forEach(cat => {
  console.log(`\nTesting Category: ${cat.toUpperCase()}`);
  const stages = ENGLISH_DATA[cat];
  if (!stages || stages.length !== 10) {
    console.error(`FAILED: ${cat} does not have 10 stages! Found:`, stages ? stages.length : 0);
    process.exit(1);
  }

  stages.forEach(st => {
    if (!st.stage || !st.title || !st.icon || !st.items || st.items.length < 10) {
      console.error(`FAILED: ${cat} stage ${st.stage} (${st.title}) has fewer than 10 items (${st.items ? st.items.length : 0})!`);
      process.exit(1);
    }
    console.log(`  ✓ Stage ${st.stage}: ${st.icon} ${st.title} (${st.items.length} items)`);
    totalPassed++;
  });
});

console.log(`\n🎉 ALL 40 ENGLISH STAGES VERIFIED! (${totalPassed} / 40 stages passed)`);
