// Logs the final output of hours worked and amount earned for each employee
const logOutput = (employeeTracker) => {
  const sortedArray = Object.entries(employeeTracker).sort(([a], [b]) =>
    a.localeCompare(b)
  );

  for (const [name, obj] of sortedArray) {
    const hours = obj.Time;
    const rate = obj.Pay;
    const earned = obj.Time * obj.Pay;
    console.log(`${name}: ${obj.Time} hours ${earned} earned`);
  }
};
//Expected output
// Jeff: 6.75 hours 135 earned
// Matt: 10.5 hours 105 earned
// Mike: 0 hours 0 earned

module.exports = logOutput;
