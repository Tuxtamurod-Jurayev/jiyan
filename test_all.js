const { ENGLISH_DATA } = require('./english_data_structure.js');

console.log("==========================================");
console.log("   SAVARBEK EDU v2.0 FULL TEST SUITE      ");
console.log("==========================================");

// 1. Test Math
const { spawnSync } = require('child_process');
const mathTest = spawnSync('node', ['test_math.js'], { encoding: 'utf-8' });
if (mathTest.status !== 0) {
  console.error("Math test failed:\n", mathTest.stderr);
  process.exit(1);
}
console.log("✅ MATH: 40 stages tested and passed!");

// 2. Test English
const engCats = ['vocabulary', 'listening', 'spelling', 'grammar'];
let engCount = 0;
engCats.forEach(cat => {
  const stages = ENGLISH_DATA[cat];
  if (!stages || stages.length !== 10) {
    console.error(`English category ${cat} must have 10 stages!`);
    process.exit(1);
  }
  stages.forEach(st => {
    if (!st.stage || !st.title || !st.icon || !st.items || st.items.length < 10) {
      console.error(`Invalid English stage ${cat} stage ${st.stage}`);
      process.exit(1);
    }
    engCount++;
  });
});
console.log(`✅ ENGLISH: 40 stages verified! (${engCount} / 40 stages)`);
console.log("\n🎉 ALL 80 STAGES (40 Math + 40 English) TESTED SUCCESSFULLY!");
