## Employee Wage Tracker CLI

- A command-line Node.js application that reads structured employee data from a text file and calculates the total hours worked and total earnings per employee. Results are sorted alphabetically and printed to the console.

## Example Input and Output

**Input (`.txt` file):**
Employee Matt
Employee Jeff
Employee Mike
Pay Matt 10
Pay Jeff 20
Pay Mike 15
Time Matt 07:15 12:45
Time Jeff 10:00 16:45
Time Matt 13:00 18:00

**Expected Output:**
Jeff: 6.75 hours 135 earned
Matt: 10.5 hours 105 earned
Mike: 0 hours 0 earned

## Requirements

- Node.js **v23.3.0** or higher

## Tech Stack

- Node.js (v23.3.0)
- TypeScript
- Day.js (date manipulation)
- ES Modules (`type: "module"`)
- Jest (testing)

## Features

- Add employees to a tracker (without overwriting if already exists)
- Assign hourly rates and worked time intervals
- Calculate hours using a library called `dayjs` and display results in decimal format
- Automatically creates an employee if a `Pay` command is issued for a non-existent name
- Outputs sorted results alphabetically
- Includes `.gitignore` to prevent uploading unnecessary files such as `node_modules/`, `coverage/`, `.DS_Store`, etc.

## Included test files.txt

- `EmpTestFile.txt`: Default input file used by `npm start`
- `SecondCaseFile.txt`: Contains repeated employees to test non-overwriting
- `ThirdCaseFile.txt`: Contains a `Pay` command for a non-existent employee to test auto-creation

## Project Structure

```
├── dist/                 # Transpiled JS output (auto-generated)
├── tests/                # Unit tests
│ ├── addEmployee.test.ts
│ ├── addRate.test.ts
│ ├── addTime.test.ts
│ ├── findTime.test.ts
│ └── logOutput.test.ts
├── types/                # Type definitions
│ ├── AddEmployee.ts
│ ├── AddRate.ts
│ ├── AddTime.ts
│ ├── EmployeeTracker.ts
│ ├── FindTime.ts
│ └── LogOutput.ts
├── utils/                 # Business logic
│ ├── addEmployee.ts       # Adds a new employee if not exists
│ ├── addRate.ts           # Sets Pay and Time=0 (creates if missing)
│ ├── addTime.ts           # Adds worked time to employee
│ ├── findTime.ts          # Calculates hour difference using Day.js
│ └── logOutput.ts         # Outputs final report sorted by name
├── .gitignore
├── EmpTestFile.txt        # Default test file (used by default).
├── SecondCaseFile.txt     # Contains repeated Employee command (ignored).
├── ThirdCaseFile.txt      # Pay command for non-existent name (creates new employee).
├── index.ts               # Entry point
├── package.json           # Project metadata, scripts, dependencies
├── tsconfig.json          # TypeScript compiler options
├── jest.config.ts         # Jest test configuration
└── README.md
```

## Running Typescript App

- This project is written in TypeScript. To run it, you must first transpile the code by running:
- 'npm run build' This command will generate a /dist folder containing JavaScript code ready to be executed by Node.js.
- Once the code is built in /dist, you can run the compiled JavaScript version using:
- 'npm run start' This command will run EmpTestFile.txt file as default value
- 'npm run start SecondCaseFile.txt' This command will run SecondCaseFile.txt file
- 'npm run start ThirdCaseFile.txt' This command will run ThirdCaseFile.txt file
- 'npm run start [CustomFile.txt]' If the user want to create and runs his custom file

## Running Tests

- 'npm test' to run all test files
- 'npx jest test/addRate.test.js' to run a specific test file
- 'npx jest --coverage' to view test coverage

## Run In Production

- "npm run prod' This command will generate a /dist folder that contains JavaScript code ready to be executed and runs the app execution.

## Logic Summary

- addEmployee(name): Only adds if the employee doesn’t already exist.
- addRate(name, rate): Adds Pay and initializes Time=0. If the employee doesn't exist, it's created automatically.
- addTime(name, start, end): Calculates time with dayjs() and accumulates it if already present.
- logOutput(): Outputs all employee summaries in alphabetical order.

## Author

- Carlos L. Salcedo
  💻 [GitHub](https://github.com/Carlaurence)
  💼 [LinkedIn](www.linkedin.com/in/carlos-salcedo-203493215)
