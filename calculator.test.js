import calculator from './calculator';

test('Test 1', () => {
  expect(calculator).toMatchObject({
    add: expect.any(Function),
    subtract: expect.any(Function),
    divide: expect.any(Function),
    multiply: expect.any(Function),
  });
});

test('calculator add', () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test('calculator subtract', () => {
  expect(calculator.subtract(10, 2)).toBe(8);
});
test('calculator multiply', () => {
  expect(calculator.multiply(4, 6)).toBe(24);
});
test('calculator divide', () => {
  expect(calculator.divide(30, 2)).toBe(15);
});
