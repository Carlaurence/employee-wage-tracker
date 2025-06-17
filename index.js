const fs = require('node:fs'); // Core module to read / write files
const path = require('node:path'); // Core module to resolve files paths
//Import utility functions
const addEmployee = require('./utils/addEmployee');
const addRate = require('./utils/addRate');
const addTime = require('./utils/addTime');
const logOutput = require('./utils/logOutput');

// To get the file path from command line: "node index.js EmpTestFile.txt"
const filePath = process.argv[2] || 'EmpTestFile.txt';

if (!filePath) {
  console.error('You have to provide a filePath in the CLI to be processed');
  process.exit(1);
}

// Resolve full Path to the file
const fullPath = path.resolve(filePath);

// Read the input file asynchronously
fs.readFile(fullPath, 'utf-8', (error, data) => {
  if (error) {
    console.error(`Error reading a file ${error.message}`);
    process.exit(1);
  }

  const txtToArray = data.split('\n'); // Convert file content into array of rows
  const employeeTracker = {}; // Object to store employee data
  let count = 0;

  // Iterate Array every row
  while (txtToArray[count]) {
    const rowColumns = txtToArray[count].split(' '); // Split every row into table (row-columns)
    const command = rowColumns[0]; // Comand is the first column of every row
    const name = rowColumns[1];

    switch (command) {
      case 'Employee': {
        addEmployee(employeeTracker, name);
        break;
      }
      case 'Pay': {
        // rowColumns[2] = row 'Pay' in Column 'rate-value'
        addRate(employeeTracker, name, rowColumns[2]);
        break;
      }
      case 'Time': {
        // rowColumns[2] = row 'Time' in columns 'StartTime'
        // rowColumns[3] = row 'Time' in columns 'endTime'
        addTime(employeeTracker, name, rowColumns[2], rowColumns[3]);
        break;
      }
      default: {
        console.error(`Sorry. The command '${command} is not supported.`);
      }
    }
    count++;
  }
  // Print the final summary
  logOutput(employeeTracker);
});

// Table (rows-columns) after rowColumns = txtToArray[count].split(' ');
/******************************************************/
// command Employee [ 'Employee', 'Matt' ]
// command Employee [ 'Employee', 'Jeff' ]
// command Employee [ 'Employee', 'Mike' ]
// command Pay      [ 'Pay', 'Matt', '10' ]
// command Pay      [ 'Pay', 'Jeff', '20' ]
// command Pay      [ 'Pay', 'Mike', '15' ]
// command Time     [ 'Time', 'Matt', '07:15', '12:45' ]
// command Time     [ 'Time', 'Jeff', '10:00', '16:45' ]
// command Time     [ 'Time', 'Matt', '13:00', '18:00' ]

// Core Logic
/******************************************************/
// const txtToArray = data.split('\n'); //convert into an array
// const employeeTracker = {};
// let count = 0;
// while (txtToArray[count]) {
//   const rowColumns = txtToArray[count].split(' '); //split every element into a command rows
//   if (rowColumns[0] === 'Employee') { //rowColumns[0] = command
//     employeeTracker[rowColumns[1]] = {};//rowColumns[1] = name
//   } else if (rowColumns[0] === 'Pay') {
//     employeeTracker[rowColumns[1]][rowColumns[0]] = rowColumns[2]; //rowColumns[1] = name, rowColumns[0] = 'Pay', rowColumns[2] = rate
//     employeeTracker[rowColumns[1]].Time = 0;
//   } else if (rowColumns[0] === 'Time') {
//     //To use timeRange(rowColumns[2], rowColumns[3]) we need to import the module from utils/findTime
//     const hoursWorked = timeRange(rowColumns[2], rowColumns[3]); //rowColumns[1] = name, rowColumns[2] = start, //rowColumns[3] = end
//     if (employeeTracker[rowColumns[1]][rowColumns[0]] === 0) {
//       employeeTracker[rowColumns[1]][rowColumns[0]] = hoursWorked;
//     } else {
//       employeeTracker[rowColumns[1]][rowColumns[0]] += hoursWorked;
//     }
//   }
//   count++;
// }
// console.log(employeeTracker);

// //Output
// });
