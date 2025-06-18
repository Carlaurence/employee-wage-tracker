// Initializes a new employee entry in the tracker
const addEmployee = (employeeTracker, name) => {
  if (!employeeTracker.hasOwnProperty(name)) {
    employeeTracker[name] = {
      rate: 0,
      time: 0
    };
  }
};
module.exports = addEmployee;
