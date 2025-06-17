const findTime = require('../utils/findTime');

describe('findTime', () => {
  test('should return 5.5 in decimal formmat for time between 07:15 and 12:45', () => {
    const start = '07:15';
    const end = '12:45';
    expect(findTime(start, end)).toBeCloseTo(5.5);
  });
  test('should return 0 when startTime > endTime', () => {
    const start = '12:45';
    const end = '07:15';
    expect(findTime(start, end)).toBeCloseTo(0);
  });
});
