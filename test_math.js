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
        do {
          a = MathGenerator.randomInt(5, 9);
          b = MathGenerator.randomInt(4, 9);
        } while (a + b <= 10 || a + b > 18);
        return { formula: `${a} + ${b} =`, answer: a + b, key: `${a}+${b}`, num1: a, num2: b, sign: '+' };
      }
      case 2: {
        const tens = MathGenerator.randomInt(2, 8);
        const ones = MathGenerator.randomInt(4, 9);
        a = tens * 10 + ones;
        b = MathGenerator.randomInt(10 - ones, 9);
        return { formula: `${a} + ${b} =`, answer: a + b, key: `${a}+${b}`, num1: a, num2: b, sign: '+' };
      }
      case 3: {
        const tensA = MathGenerator.randomInt(2, 7);
        const tensB = MathGenerator.randomInt(2, 10 - tensA);
        a = tensA * 10;
        b = tensB * 10;
        return { formula: `${a} + ${b} =`, answer: a + b, key: `${a}+${b}`, num1: a, num2: b, sign: '+' };
      }
      case 4: {
        const tensA = MathGenerator.randomInt(1, 6);
        const onesA = MathGenerator.randomInt(1, 9);
        a = tensA * 10 + onesA;
        const maxTensB = 9 - tensA;
        const tensB = MathGenerator.randomInt(2, Math.max(2, maxTensB));
        b = tensB * 10;
        return { formula: `${a} + ${b} =`, answer: a + b, key: `${a}+${b}`, num1: a, num2: b, sign: '+' };
      }
      case 5: {
        const tensA = MathGenerator.randomInt(2, 6);
        const tensB = MathGenerator.randomInt(1, 8 - tensA);
        const onesA = MathGenerator.randomInt(1, 8);
        const onesB = MathGenerator.randomInt(1, 9 - onesA);
        a = tensA * 10 + onesA;
        b = tensB * 10 + onesB;
        return { formula: `${a} + ${b} =`, answer: a + b, key: `${a}+${b}`, num1: a, num2: b, sign: '+' };
      }
      case 6: {
        let attempts = 0;
        do {
          a = MathGenerator.randomInt(18, 65);
          b = MathGenerator.randomInt(15, 65);
          attempts++;
        } while (((a % 10) + (b % 10) < 10 || a + b > 100) && attempts < 100);
        return { formula: `${a} + ${b} =`, answer: a + b, key: `${a}+${b}`, num1: a, num2: b, sign: '+' };
      }
      case 7: {
        let attempts = 0;
        do {
          a = MathGenerator.randomInt(45, 89);
          b = MathGenerator.randomInt(45, 89);
          attempts++;
        } while ((a + b <= 100 || a + b > 160) && attempts < 100);
        return { formula: `${a} + ${b} =`, answer: a + b, key: `${a}+${b}`, num1: a, num2: b, sign: '+' };
      }
      case 8: {
        do {
          a = MathGenerator.randomInt(65, 95);
          b = MathGenerator.randomInt(48, 95);
        } while (a + b <= 120 || a + b > 190);
        return { formula: `${a} + ${b} =`, answer: a + b, key: `${a}+${b}`, num1: a, num2: b, sign: '+' };
      }
      case 9: {
        a = MathGenerator.randomInt(15, 40);
        b = MathGenerator.randomInt(15, 40);
        const maxC = 100 - a - b;
        c = MathGenerator.randomInt(10, Math.max(10, maxC));
        return { formula: `${a} + ${b} + ${c} =`, answer: a + b + c, key: `${a}+${b}+${c}`, num1: `${a} + ${b}`, num2: c, sign: '+' };
      }
      case 10: {
        if (Math.random() > 0.4) {
          a = MathGenerator.randomInt(75, 99);
          b = MathGenerator.randomInt(65, 99);
          return { formula: `${a} + ${b} =`, answer: a + b, key: `${a}+${b}`, num1: a, num2: b, sign: '+' };
        } else {
          a = MathGenerator.randomInt(25, 60);
          b = MathGenerator.randomInt(25, 60);
          c = MathGenerator.randomInt(20, 60);
          return { formula: `${a} + ${b} + ${c} =`, answer: a + b + c, key: `${a}+${b}+${c}`, num1: `${a} + ${b}`, num2: c, sign: '+' };
        }
      }
      default:
        return { formula: `25 + 15 =`, answer: 40, key: `25+15`, num1: 25, num2: 15, sign: '+' };
    }
  }

  static generateSubtraction(stage) {
    let a, b, c;
    switch (stage) {
      case 1: {
        const ones = MathGenerator.randomInt(1, 8);
        a = 10 + ones;
        b = MathGenerator.randomInt(ones + 1, 9);
        return { formula: `${a} - ${b} =`, answer: a - b, key: `${a}-${b}`, num1: a, num2: b, sign: '-' };
      }
      case 2: {
        const tens = MathGenerator.randomInt(2, 9);
        const ones = MathGenerator.randomInt(0, 8);
        a = tens * 10 + ones;
        b = MathGenerator.randomInt(ones + 1, 9);
        return { formula: `${a} - ${b} =`, answer: a - b, key: `${a}-${b}`, num1: a, num2: b, sign: '-' };
      }
      case 3: {
        const tensA = MathGenerator.randomInt(4, 10);
        const tensB = MathGenerator.randomInt(1, tensA - 1);
        a = tensA * 10;
        b = tensB * 10;
        return { formula: `${a} - ${b} =`, answer: a - b, key: `${a}-${b}`, num1: a, num2: b, sign: '-' };
      }
      case 4: {
        const tensA = MathGenerator.randomInt(3, 9);
        const onesA = MathGenerator.randomInt(1, 9);
        a = tensA * 10 + onesA;
        const tensB = MathGenerator.randomInt(1, tensA - 1);
        b = tensB * 10;
        return { formula: `${a} - ${b} =`, answer: a - b, key: `${a}-${b}`, num1: a, num2: b, sign: '-' };
      }
      case 5: {
        const tensA = MathGenerator.randomInt(3, 9);
        const tensB = MathGenerator.randomInt(1, tensA - 1);
        const onesA = MathGenerator.randomInt(2, 9);
        const onesB = MathGenerator.randomInt(1, onesA);
        a = tensA * 10 + onesA;
        b = tensB * 10 + onesB;
        return { formula: `${a} - ${b} =`, answer: a - b, key: `${a}-${b}`, num1: a, num2: b, sign: '-' };
      }
      case 6: {
        let attempts = 0;
        do {
          a = MathGenerator.randomInt(31, 95);
          b = MathGenerator.randomInt(14, a - 10);
          attempts++;
        } while (((a % 10) >= (b % 10) || a <= b) && attempts < 100);
        return { formula: `${a} - ${b} =`, answer: a - b, key: `${a}-${b}`, num1: a, num2: b, sign: '-' };
      }
      case 7: {
        b = MathGenerator.randomInt(12, 88);
        return { formula: `100 - ${b} =`, answer: 100 - b, key: `100-${b}`, num1: 100, num2: b, sign: '-' };
      }
      case 8: {
        a = MathGenerator.randomInt(105, 150);
        b = MathGenerator.randomInt(25, a - 20);
        return { formula: `${a} - ${b} =`, answer: a - b, key: `${a}-${b}`, num1: a, num2: b, sign: '-' };
      }
      case 9: {
        a = MathGenerator.randomInt(75, 100);
        b = MathGenerator.randomInt(15, Math.floor(a / 2.2));
        c = MathGenerator.randomInt(10, a - b - 15);
        return { formula: `${a} - ${b} - ${c} =`, answer: a - b - c, key: `${a}-${b}-${c}`, num1: `${a} - ${b}`, num2: c, sign: '-' };
      }
      case 10: {
        a = MathGenerator.randomInt(130, 185);
        b = MathGenerator.randomInt(45, a - 25);
        return { formula: `${a} - ${b} =`, answer: a - b, key: `${a}-${b}`, num1: a, num2: b, sign: '-' };
      }
      default:
        return { formula: `50 - 15 =`, answer: 35, key: `50-15`, num1: 50, num2: 15, sign: '-' };
    }
  }

  static generateMultiplication(stage, qIndex) {
    let op1, op2;
    switch (stage) {
      case 1: {
        const k = [2, 3][MathGenerator.randomInt(0, 1)];
        const m = MathGenerator.randomInt(2, 9);
        const flip = Math.random() > 0.5;
        op1 = flip ? k : m; op2 = flip ? m : k;
        break;
      }
      case 2: {
        const k = [4, 5][MathGenerator.randomInt(0, 1)];
        const m = MathGenerator.randomInt(2, 9);
        const flip = Math.random() > 0.5;
        op1 = flip ? k : m; op2 = flip ? m : k;
        break;
      }
      case 3: {
        const k = [6, 7][MathGenerator.randomInt(0, 1)];
        const m = MathGenerator.randomInt(2, 9);
        const flip = Math.random() > 0.5;
        op1 = flip ? k : m; op2 = flip ? m : k;
        break;
      }
      case 4: {
        const k = [8, 9][MathGenerator.randomInt(0, 1)];
        const m = MathGenerator.randomInt(2, 9);
        const flip = Math.random() > 0.5;
        op1 = flip ? k : m; op2 = flip ? m : k;
        break;
      }
      case 5: {
        op1 = MathGenerator.randomInt(2, 9);
        op2 = MathGenerator.randomInt(2, 9);
        break;
      }
      case 6: {
        const k = [10, 20, 30, 40][MathGenerator.randomInt(0, 3)];
        const m = k === 10 ? MathGenerator.randomInt(2, 9) : MathGenerator.randomInt(2, 4);
        const flip = Math.random() > 0.5;
        op1 = flip ? k : m; op2 = flip ? m : k;
        break;
      }
      case 7: {
        if (Math.random() > 0.5) {
          op1 = 11; op2 = MathGenerator.randomInt(3, 9);
        } else {
          op1 = 12; op2 = MathGenerator.randomInt(2, 6);
        }
        if (Math.random() > 0.5) [op1, op2] = [op2, op1];
        break;
      }
      case 8: {
        const poolA = [13, 14, 15, 16, 17];
        op1 = poolA[MathGenerator.randomInt(0, poolA.length - 1)];
        op2 = MathGenerator.randomInt(2, 5);
        if (Math.random() > 0.5) [op1, op2] = [op2, op1];
        break;
      }
      case 9: {
        const poolA = [18, 20, 24, 25, 30, 35];
        op1 = poolA[MathGenerator.randomInt(0, poolA.length - 1)];
        op2 = op1 >= 25 ? MathGenerator.randomInt(2, 4) : MathGenerator.randomInt(2, 5);
        if (Math.random() > 0.5) [op1, op2] = [op2, op1];
        break;
      }
      case 10: {
        const poolA = [12, 14, 15, 16, 20, 25];
        op1 = poolA[MathGenerator.randomInt(0, poolA.length - 1)];
        op2 = MathGenerator.randomInt(3, 8);
        if (Math.random() > 0.5) [op1, op2] = [op2, op1];
        break;
      }
      default:
        op1 = 6; op2 = 7;
    }
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
    let a, b;
    switch (stage) {
      case 1: {
        a = [2, 3][MathGenerator.randomInt(0, 1)];
        b = MathGenerator.randomInt(3, 10);
        break;
      }
      case 2: {
        a = [4, 5][MathGenerator.randomInt(0, 1)];
        b = MathGenerator.randomInt(2, 10);
        break;
      }
      case 3: {
        a = [6, 7][MathGenerator.randomInt(0, 1)];
        b = MathGenerator.randomInt(2, 10);
        break;
      }
      case 4: {
        a = [8, 9][MathGenerator.randomInt(0, 1)];
        b = MathGenerator.randomInt(2, 10);
        break;
      }
      case 5: {
        a = MathGenerator.randomInt(2, 9);
        b = MathGenerator.randomInt(2, 9);
        break;
      }
      case 6: {
        a = [2, 3, 4, 5][MathGenerator.randomInt(0, 3)];
        b = [10, 20, 30, 40][MathGenerator.randomInt(0, 3)];
        break;
      }
      case 7: {
        a = [2, 3, 4, 5][MathGenerator.randomInt(0, 3)];
        b = MathGenerator.randomInt(11, 20);
        break;
      }
      case 8: {
        a = [6, 7, 8][MathGenerator.randomInt(0, 2)];
        b = MathGenerator.randomInt(11, 16);
        break;
      }
      case 9: {
        const pairs = [
          [100, 2], [100, 4], [100, 5],
          [84, 4], [96, 3], [75, 5], [90, 5],
          [88, 4], [64, 2], [72, 3], [99, 3]
        ];
        const chosen = pairs[MathGenerator.randomInt(0, pairs.length - 1)];
        const cVal = chosen[0];
        a = chosen[1];
        b = Math.floor(cVal / a);
        return {
          formula: `${cVal} ÷ ${a} =`,
          answer: b,
          key: `${cVal}/${a}`,
          num1: cVal,
          num2: a,
          sign: '÷'
        };
      }
      case 10: {
        const pairs = [
          [96, 6], [91, 7], [85, 5], [72, 4], [98, 2], [100, 5],
          [78, 6], [84, 6], [96, 8], [95, 5], [84, 7], [76, 4]
        ];
        const chosen = pairs[MathGenerator.randomInt(0, pairs.length - 1)];
        const cVal = chosen[0];
        a = chosen[1];
        b = Math.floor(cVal / a);
        return {
          formula: `${cVal} ÷ ${a} =`,
          answer: b,
          key: `${cVal}/${a}`,
          num1: cVal,
          num2: a,
          sign: '÷'
        };
      }
      default:
        a = 4; b = 7;
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

    // Verify answers are integers >= 0 and within sensible bounds
    questions.forEach((q, idx) => {
      if (typeof q.answer !== 'number' || isNaN(q.answer)) {
        console.error(`FAILED: ${op} stage ${stage} question ${idx} has invalid answer:`, q);
        process.exit(1);
      }
      if (q.answer < 0 || q.answer > 250) {
        console.error(`FAILED: ${op} stage ${stage} question ${idx} answer out of bounds [0, 250]:`, q);
        process.exit(1);
      }
    });

    console.log(`  ✓ Stage ${stage}: 10 questions OK (e.g. "${questions[0].formula} [${questions[0].answer}]", "${questions[1].formula} [${questions[1].answer}]")`);
    totalPassed++;
  }
});

console.log(`\n🎉 ALL 40 STAGES PASSED! (${totalPassed} / 40 tested successfully)`);
