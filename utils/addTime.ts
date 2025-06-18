import { AddTime } from '../types/AddTime';
import { addEmployee } from './addEmployee.js';
import { timeRange } from './findTime.js';

// Adds hours worked for an employee by calculating time difference
export const addTime: AddTime = (employeeTracker, name, start, end) => {
  // add name to employeeTracker if doesn't exist
  addEmployee(employeeTracker, name);

  const hoursWorked = timeRange(start, end); // External function to find diff between startTime and endTime
  employeeTracker[name]['Time'] += hoursWorked; // If property 'Time' is != 0, add more time
};
