import { AddRate } from '../types/AddRate';
import { addEmployee } from './addEmployee.js';

// Assigns the hourly pay rate and initializes worked time to 0
export const addRate: AddRate = (employeeTracker, name, rate) => {
  // add name to employeeTracker if doesn't exist
  addEmployee(employeeTracker, name);

  employeeTracker[name]['Pay'] = rate;
};
