import { timeRange } from '../utils/findTime';

describe('findTime', () => {
  test('should return 5.5 in decimal formmat for time between 07:15 and 12:45', () => {
    const start: string = '07:15';
    const end: string = '12:45';
    expect(timeRange(start, end)).toBeCloseTo(5.5);
  });
  test('should return 0 when startTime > endTime', () => {
    const start: string = '12:45';
    const end: string = '07:15';
    expect(timeRange(start, end)).toBeCloseTo(0);
  });
});
