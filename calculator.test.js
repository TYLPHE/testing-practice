const calculator = require('./calculator')

it('Calculator - Add', () => {
  expect(calculator(1, '+', 2))
    .toBe(3);
});
it('Calculator - Subtract', () => {
  expect(calculator(5, '-', 2))
    .toBe(3);
});
it('Calculator - Multiplication', () => {
  expect(calculator(3, '*', 5))
    .toBe(15);
});
it('Calculator - Division', () => {
  expect(calculator(25, '/', 5))
    .toBe(5);
});