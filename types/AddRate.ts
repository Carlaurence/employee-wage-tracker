import { EmployeeTracker } from './EmployeeTracker';
export type AddRate = (
  employeeTracker: EmployeeTracker,
  name: string,
  rate: number
) => void;
