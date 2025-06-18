// External library to calculates the time difference in hours between two timestamps
import dayjs from 'dayjs';
import { TimeRange } from '../types/FindTime';

export const timeRange: TimeRange = (start, end) => {
  const formatToday = dayjs().format('YYYY-MM-DD'); // Assume both times are from the same day
  const startHour = dayjs(`${formatToday}T${start}`);
  const endHour = dayjs(`${formatToday}T${end}`);
  if (endHour.isBefore(startHour)) {
    return 0;
  }
  const result = endHour.diff(startHour, 'minute'); // Calculate diff
  return result / 60;
};
