import caesarCipher from './caesarCipher';

test('Ceaser1', () => {
  expect(caesarCipher('defend the east wall of the castle', 1)).toBe(
    'efgfoe uif fbtu xbmm pg uif dbtumf'
  );
});
test('Preserve case', () => {
  expect(caesarCipher('Naminis Batonas', 3)).toBe('Qdplqlv Edwrqdv');
});
test('Preserve punctuation', () => {
  expect(caesarCipher('Naminis, Batonas!', 3)).toBe('Qdplqlv, Edwrqdv!');
});
test('wrapping from z to a.', () => {
  expect(caesarCipher('Loreminis batonezo', 48)).toBe('Hknaiejeo xwpkjavk');
});
test('wrapping from z to a.', () => {
  expect(caesarCipher('Loreminis batonezo', 2300)).toBe('Xadqyuzue nmfazqla');
});
