// Test math generator algorithms for all 40 stages
// Verifies:
// 1. Addition (10 stages)
// 2. Subtraction (10 stages, always A >= B)
// 3. Multiplication (10 stages)
// 4. Division (10 stages, exact integer division C / A = B, C = A * B)
// 5. 10 questions generated per stage without crashes or infinite loops

class MathGenerator {
  static randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static generateAddition(stage) {
    let a, b, c;
    switch (stage) {
      case 1: {
        const sum = MathGenerator.randomInt(2, 10);
        a = MathGenerator.randomInt(1, sum - 1);
        b = sum - a;
        return { formula: `${a} + ${b} =`, answer: a + b, key: `${a}+${b}`, num1: a, num2: b, sign: '+' };
      }
      case 2: {
        const ones = MathGenerator.randomInt(0, 8);
        a = 10 + ones;
        b = MathGenerator.randomInt(1, 9 - ones);
        return { formula: `${a} + ${b} =`, answer: a + b, key: `${a}+${b}`, num1: a, num2: b, sign: '+' };
      }
      case 3: {
        do {
          a = MathGenerator.randomInt(3, 9);
          b = MathGenerator.randomInt(3, 9);
        } while (a + b <= 10 || a + b > 18);
        return { formula: `${a} + ${b} =`, answer: a + b, key: `${a}+${b}`, num1: a, num2: b, sign: '+' };
      }
      case 4: {
        const tensA = MathGenerator.randomInt(1, 8);
        const tensB = MathGenerator.randomInt(1, 10 - tensA);
        a = tensA * 10;
        b = tensB * 10;
        return { formula: `${a} + ${b} =`, answer: a + b, key: `${a}+${b}`, num1: a, num2: b, sign: '+' };
      }
      case 5: {
        const tens = MathGenerator.randomInt(2, 9);
        const ones = MathGenerator.randomInt(0, 8);
        a = tens * 10 + ones;
        b = MathGenerator.randomInt(1, 9 - ones);
        return { formula: `${a} + ${b} =`, answer: a + b, key: `${a}+${b}`, num1: a, num2: b, sign: '+' };
      }
      case 6: {
        const tens = MathGenerator.randomInt(1, 8);
        const ones = MathGenerator.randomInt(2, 9);
        a = tens * 10 + ones;
        b = MathGenerator.randomInt(10 - ones, 9);
        return { formula: `${a} + ${b} =`, answer: a + b, key: `${a}+${b}`, num1: a, num2: b, sign: '+' };
      }
      case 7: {
        const tensA = MathGenerator.randomInt(1, 7);
        const onesA = MathGenerator.randomInt(1, 9);
        a = tensA * 10 + onesA;
        const maxTensB = 9 - tensA;
        const tensB = MathGenerator.randomInt(1, maxTensB);
        b = tensB * 10;
        return { formula: `${a} + ${b} =`, answer: a + b, key: `${a}+${b}`, num1: a, num2: b, sign: '+' };
      }
      case 8: {
        const tensA = MathGenerator.randomInt(1, 7);
        const tensB = MathGenerator.randomInt(1, 8 - tensA);
        const onesA = MathGenerator.randomInt(1, 8);
        const onesB = MathGenerator.randomInt(1, 9 - onesA);
        a = tensA * 10 + onesA;
        b = tensB * 10 + onesB;
        return { formula: `${a} + ${b} =`, answer: a + b, key: `${a}+${b}`, num1: a, num2: b, sign: '+' };
      }
      case 9: {
        let attempts = 0;
        do {
          a = MathGenerator.randomInt(12, 69);
          b = MathGenerator.randomInt(12, 69);
          attempts++;
        } while (((a % 10) + (b % 10) < 10 || a + b > 100) && attempts < 100);
        return { formula: `${a} + ${b} =`, answer: a + b, key: `${a}+${b}`, num1: a, num2: b, sign: '+' };
      }
      case 10: {
        a = MathGenerator.randomInt(5, 35);
        b = MathGenerator.randomInt(5, 35);
        const maxC = 100 - a - b;
        c = MathGenerator.randomInt(5, Math.min(35, maxC));
        return { formula: `${a} + ${b} + ${c} =`, answer: a + b + c, key: `${a}+${b}+${c}`, num1: `${a} + ${b}`, num2: c, sign: '+' };
      }
      default:
        return { formula: `5 + 5 =`, answer: 10, key: `5+5`, num1: 5, num2: 5, sign: '+' };
    }
  }

  static generateSubtraction(stage) {
    let a, b, c;
    switch (stage) {
      case 1: {
        a = MathGenerator.randomInt(2, 10);
        b = MathGenerator.randomInt(1, a - 1);
        return { formula: `${a} - ${b} =`, answer: a - b, key: `${a}-${b}`, num1: a, num2: b, sign: '-' };
      }
      case 2: {
        const ones = MathGenerator.randomInt(1, 9);
        a = 10 + ones;
        b = MathGenerator.randomInt(1, ones);
        return { formula: `${a} - ${b} =`, answer: a - b, key: `${a}-${b}`, num1: a, num2: b, sign: '-' };
      }
      case 3: {
        const ones = MathGenerator.randomInt(1, 8);
        a = 10 + ones;
        b = MathGenerator.randomInt(ones + 1, 9);
        return { formula: `${a} - ${b} =`, answer: a - b, key: `${a}-${b}`, num1: a, num2: b, sign: '-' };
      }
      case 4: {
        const tensA = MathGenerator.randomInt(2, 10);
        const tensB = MathGenerator.randomInt(1, tensA - 1);
        a = tensA * 10;
        b = tensB * 10;
        return { formula: `${a} - ${b} =`, answer: a - b, key: `${a}-${b}`, num1: a, num2: b, sign: '-' };
      }
      case 5: {
        const tens = MathGenerator.randomInt(2, 9);
        const ones = MathGenerator.randomInt(1, 9);
        a = tens * 10 + ones;
        b = MathGenerator.randomInt(1, ones);
        return { formula: `${a} - ${b} =`, answer: a - b, key: `${a}-${b}`, num1: a, num2: b, sign: '-' };
      }
      case 6: {
        const tens = MathGenerator.randomInt(2, 9);
        const ones = MathGenerator.randomInt(0, 8);
        a = tens * 10 + ones;
        b = MathGenerator.randomInt(ones + 1, 9);
        return { formula: `${a} - ${b} =`, answer: a - b, key: `${a}-${b}`, num1: a, num2: b, sign: '-' };
      }
      case 7: {
        const tensA = MathGenerator.randomInt(2, 9);
        const onesA = MathGenerator.randomInt(1, 9);
        a = tensA * 10 + onesA;
        const tensB = MathGenerator.randomInt(1, tensA - 1);
        b = tensB * 10;
        return { formula: `${a} - ${b} =`, answer: a - b, key: `${a}-${b}`, num1: a, num2: b, sign: '-' };
      }
      case 8: {
        const tensA = MathGenerator.randomInt(2, 9);
        const tensB = MathGenerator.randomInt(1, tensA - 1);
        const onesA = MathGenerator.randomInt(1, 9);
        const onesB = MathGenerator.randomInt(0, onesA);
        a = tensA * 10 + onesA;
        b = tensB * 10 + onesB;
        return { formula: `${a} - ${b} =`, answer: a - b, key: `${a}-${b}`, num1: a, num2: b, sign: '-' };
      }
      case 9: {
        let attempts = 0;
        do {
          a = MathGenerator.randomInt(31, 98);
          b = MathGenerator.randomInt(12, a - 1);
          attempts++;
        } while (((a % 10) >= (b % 10) || a <= b) && attempts < 100);
        return { formula: `${a} - ${b} =`, answer: a - b, key: `${a}-${b}`, num1: a, num2: b, sign: '-' };
      }
      case 10: {
        if (Math.random() > 0.4) {
          a = 100;
          b = MathGenerator.randomInt(11, 89);
          return { formula: `100 - ${b} =`, answer: 100 - b, key: `100-${b}`, num1: 100, num2: b, sign: '-' };
        } else {
          a = MathGenerator.randomInt(60, 100);
          b = MathGenerator.randomInt(10, Math.floor(a / 2));
          c = MathGenerator.randomInt(5, a - b - 5);
          return { formula: `${a} - ${b} - ${c} =`, answer: a - b - c, key: `${a}-${b}-${c}`, num1: `${a} - ${b}`, num2: c, sign: '-' };
        }
      }
      default:
        return { formula: `10 - 4 =`, answer: 6, key: `10-4`, num1: 10, num2: 4, sign: '-' };
    }
  }

  static generateMultiplication(stage, qIndex) {
    let k;
    let m;
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
    return {
      formula: `${op1} × ${op2} =`,
      answer: op1 * op2,
      key: `${op1}*${op2}`,
      num1: op1,
      num2: op2,
      sign: '×'
    };
  }

  static generateDivision(stage, qIndex) {
    let a;
    if (stage === 1) a = 2;
    else if (stage === 2) a = 3;
    else if (stage === 3) a = 4;
    else if (stage === 4) a = 5;
    else if (stage === 6) a = 6;
    else if (stage === 7) a = 7;
    else if (stage === 8) a = 8;
    else if (stage === 9) a = 9;

    let b;
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
    return {
      formula: `${c} ÷ ${a} =`,
      answer: b,
      key: `${c}/${a}`,
      num1: c,
      num2: a,
      sign: '÷'
    };
  }

  static generateStageQuestions(operation, stageNum) {
    const questions = [];
    const seenKeys = new Set();
    let attemptsCount = 0;

    while (questions.length < 10 && attemptsCount < 500) {
      attemptsCount++;
      let q = null;
      switch (operation) {
        case 'addition':
          q = MathGenerator.generateAddition(stageNum);
          break;
        case 'subtraction':
          q = MathGenerator.generateSubtraction(stageNum);
          break;
        case 'multiplication':
          q = MathGenerator.generateMultiplication(stageNum, questions.length);
          break;
        case 'division':
          q = MathGenerator.generateDivision(stageNum, questions.length);
          break;
      }

      if (q && !seenKeys.has(q.key)) {
        seenKeys.add(q.key);
        questions.push(q);
      }
    }

    // Safety fallback: if 10 unique questions weren't reached, fill remaining
    while (questions.length < 10) {
      let q = null;
      switch (operation) {
        case 'addition':
          q = MathGenerator.generateAddition(stageNum);
          break;
        case 'subtraction':
          q = MathGenerator.generateSubtraction(stageNum);
          break;
        case 'multiplication':
          q = MathGenerator.generateMultiplication(stageNum, questions.length);
          break;
        case 'division':
          q = MathGenerator.generateDivision(stageNum, questions.length);
          break;
      }
      if (q) questions.push(q);
    }

    return questions;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MathGenerator };
}

// RUN TESTS
console.log("=== TESTING ALL 40 STAGES ===");
const ops = ['addition', 'subtraction', 'multiplication', 'division'];
let totalPassed = 0;

ops.forEach(op => {
  console.log(`\nTesting Operation: ${op.toUpperCase()}`);
  for (let stage = 1; stage <= 10; stage++) {
    const questions = MathGenerator.generateStageQuestions(op, stage);
    if (questions.length !== 10) {
      console.error(`FAILED: ${op} stage ${stage} produced ${questions.length} questions, expected 10!`);
      process.exit(1);
    }

    // Verify answers are integers >= 0 and <= 100
    questions.forEach((q, idx) => {
      if (typeof q.answer !== 'number' || isNaN(q.answer)) {
        console.error(`FAILED: ${op} stage ${stage} question ${idx} has invalid answer:`, q);
        process.exit(1);
      }
      if (q.answer < 0 || q.answer > 100) {
        console.error(`FAILED: ${op} stage ${stage} question ${idx} answer out of bounds [0, 100]:`, q);
        process.exit(1);
      }
    });

    console.log(`  ✓ Stage ${stage}: 10 questions OK (e.g. "${questions[0].formula} [${questions[0].answer}]", "${questions[1].formula} [${questions[1].answer}]")`);
    totalPassed++;
  }
});

console.log(`\n🎉 ALL 40 STAGES PASSED! (${totalPassed} / 40 tested successfully)`);
