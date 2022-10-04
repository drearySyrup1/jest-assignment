export default function analyzeArray(array) {
  const average =
    array.reduce((prev, current) => prev + current, 0) / array.length;
  const min = array.reduce((prev, current) => {
    if (current < prev) return current;
    else return prev;
  });

  const max = array.reduce((prev, current) => {
    if (current > prev) return current;
    else return prev;
  });

  return {
    average: average,
    min: min,
    max: max,
    length: array.length,
  };
}
