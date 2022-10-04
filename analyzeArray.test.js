import analyzeArray from './analyzeArray';

test('Properties', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('average');
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('min');
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('max');
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('length');
});

test('Values', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
