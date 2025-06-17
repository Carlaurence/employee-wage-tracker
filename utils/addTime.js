// Adds hours worked for an employee by calculating time difference
const findTime = require('./findTime');
const addTime = (employeeTracker, name, start, end) => {
  const hoursWorked = findTime(start, end); // External function to find diff between startTime and endTime
  if (employeeTracker[name]['Time'] === 0) {
    employeeTracker[name]['Time'] = hoursWorked; // If property 'Time' is = 0, set time = hoursWorked
  } else {
    employeeTracker[name]['Time'] += hoursWorked; // If property 'Time' is != 0, add more time
  }
};
module.exports = addTime;
