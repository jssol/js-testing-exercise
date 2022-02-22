const { stringLength, reverseString, capitalizeString } = require('./stringFunctions.js');

describe('my string functions are working', () => {
  test('"messi" should be of length 5', () => {
    expect(stringLength('messi')).toBe(5);
  });

  test('The string is too short', () => {
    expect(() => {stringLength('');}).toThrowError(new Error('the string does not meet the reqs'));
  });

  test('The string is too long', () => {
    expect(() => {stringLength('ronaldinho goal!!!');}).toThrow(new Error('the string does not meet the reqs'));
  });

  test('"messi" reversed should be "issem"', () => {
    expect(reverseString('messi')).toMatch('issem');
  });

	test('"messi" capitalized should be "Messi"', () => {
    expect(capitalizeString('messi')).toMatch('Messi');
  });
});