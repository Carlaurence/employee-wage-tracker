import { EmployeeTracker } from './EmployeeTracker';
export type AddTime = (
  employeeTracker: EmployeeTracker,
  name: string,
  start: string,
  end: string
) => void;
