import { EmployeeTracker } from './EmployeeTracker';
export type AddEmployee = (
  employeeTracker: EmployeeTracker,
  name: string
) => void;
