import capitalize from './capitalize';

test('Capital 1', () => {
  expect(capitalize('birka')).toBe('Birka');
});
test('Capital 2', () => {
  expect(capitalize('Namas')).toBe('Namas');
});

test('Capital 3', () => {
  expect(capitalize('BATONAS')).toBe('BATONAS');
});
