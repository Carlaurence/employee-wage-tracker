// import {AddEmployee} from '../types'

// Initializes a new employee entry in the tracker
// const addEmployee: AddEmployee = (employeeTracker, name) => {
const addEmployee = (employeeTracker, name) => {
  if (!employeeTracker.hasOwnProperty(name)) {
    employeeTracker[name] = {
      Pay: 0,
      Time: 0,
    };
  }
};
module.exports = addEmployee;
