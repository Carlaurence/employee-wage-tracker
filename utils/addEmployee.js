// Initializes a new employee entry in the tracker
const addEmployee = (employeeTracker, name) => {
  if (!employeeTracker.hasOwnProperty(name)) {
    employeeTracker[name] = {};
  }
};
module.exports = addEmployee;
