const addEmployee = require('./addEmployee.js')

// Assigns the hourly pay rate and initializes worked time to 0
const addRate = (employeeTracker, name, rate) => {
  // add name to employeeTracker if doesn't exist
  addEmployee(employeeTracker, name)
  
  employeeTracker[name]['Pay'] = rate;
};
module.exports = addRate;
