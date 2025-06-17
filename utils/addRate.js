// Assigns the hourly pay rate and initializes worked time to 0
const addRate = (employeeTracker, name, rate) => {
  if (!employeeTracker.hasOwnProperty(name)) {
    employeeTracker[name] = {};
  }

  employeeTracker[name]['Pay'] = rate;
  employeeTracker[name]['Time'] = 0;
};
module.exports = addRate;
