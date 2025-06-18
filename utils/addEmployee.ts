import { AddEmployee } from '../types/AddEmployee';
// Initializes a new employee entry in the tracker
export const addEmployee: AddEmployee = (employeeTracker, name) => {
  if (!employeeTracker.hasOwnProperty(name)) {
    employeeTracker[name] = {
      Pay: 0,
      Time: 0,
    };
  }
};
