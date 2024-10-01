const { calculateMean, calculateMedian, calculateMode } = require('./calculate');

describe('calculate mean', function () {
  test('finds the mean value of an empty array', function () {
    expect(calculateMean([])).toEqual(0);
  });

  test('finds the mean value of an array of numbers', function () {
    expect(calculateMean([4, 8, 5, 6, 2])).toEqual(5);
  });
});

describe('calculate median', function () {
  test('finds the median value of an even set', function () {
    expect(calculateMedian([3, 5, 4, 4, 1, 1, 2, 3])).toEqual(3);
  });

  test('finds the median value of an odd set', function () {
    expect(calculateMedian([1, -1, 4])).toEqual(1);
  });
});

describe('calculate mode', function () {
  test('finds the mode of a set with 2 modes', function () {
    expect(calculateMode([1, 1, 1, 2, 3, 3, 3])).toEqual([1, 3]);
  });

  test('finds the mode of a set', function () {
    expect(calculateMode([1, 1, 1, 3, 3])).toEqual([1]);
  });
});