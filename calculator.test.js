const Calculator = require('./calculator.js');
const calculator = new Calculator();

describe('My calculator addition function tests', () => {
  test('expect 5 + 11 to equal 16', () => {
    expect(calculator.add(5, 11)).toBe(16);
  });
  test('expect 500 + 11 to equal 511', () => {
    expect(calculator.add(500, 11)).toBe(511);
  });
  test('expect 12 + 124 to equal 136', () => {
    expect(calculator.add(12, 124)).toBe(136);
  });
});

describe('My calculator subtraction function tests', () => {
  test('expect 5 - 11 to equal -6', () => {
    expect(calculator.subtract(5, 11)).toBe(-6);
  });
  test('expect 400 - 11 to equal 389', () => {
    expect(calculator.subtract(400, 11)).toBe(389);
  });
  test('expect 1200 - 120 to equal 1080', () => {
    expect(calculator.subtract(1200, 120)).toBe(1080);
  });
});

describe('My calculator multiplication function tests', () => {
  test('expect 5 * 11 to equal 55', () => {
    expect(calculator.multiply(5, 11)).toBe(55);
  });
  test('expect 43 * 11 to equal 473', () => {
    expect(calculator.multiply(43, 11)).toBe(473);
  });
  test('expect 3.5 * 2 to equal 7', () => {
    expect(calculator.multiply(3.5, 2)).toBe(7);
  });
});

describe('My calculator division function tests', () => {
  test('expect 50 / 4 to equal 12.5', () => {
    expect(calculator.divide(50, 4)).toBe(12.5);
  });
  test('expect 224 / 4 to equal 56', () => {
    expect(calculator.divide(224, 4)).toBe(56);
  });
  test('expect 82 / 2 to equal 41', () => {
    expect(calculator.divide(82, 2)).toBe(41);
  });
});