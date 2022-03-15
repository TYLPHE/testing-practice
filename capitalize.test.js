const capitalize = require('./capitalize');

it.only('Capitalizes first letter', () => {
  expect(capitalize('test'))
    .toBe('Test');
});