import reverseString from './reverseString';

test('Reverse 1', () => {
  expect(reverseString('birka')).toBe('akrib');
});
test('Reverse 2', () => {
  expect(reverseString('Namas')).toBe('samaN');
});

test('Reverse 3', () => {
  expect(reverseString('BATONAS')).toBe('SANOTAB');
});
