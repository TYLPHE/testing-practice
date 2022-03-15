const reverseString = require('./reverseString');

it('Reverses string', () => {
  expect(reverseString('test'))
    .toBe('tset');
});