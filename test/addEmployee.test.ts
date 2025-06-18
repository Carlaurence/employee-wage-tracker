import { addEmployee } from '../utils/addEmployee';
import { EmployeeTracker } from '../types/EmployeeTracker';

describe('addEmployee', () => {
  test('should add a key and set it with a empty object value', () => {
    const employeeTracker: EmployeeTracker = {};
    const name: string = 'Carlos';

    addEmployee(employeeTracker, name);
    // The employee 'Carlos' should be added with an empty object as its value
    expect(employeeTracker[name]).toEqual({ Pay: 0, Time: 0 });
  });

  test('should not overwrite existing employee if already present', () => {
    const employeeTracker: EmployeeTracker = {
      Ana: { Pay: 15, Time: 3 },
    };

    addEmployee(employeeTracker, 'Ana');
    //Ana is not expected to be overwritten
    expect(employeeTracker['Ana']).toEqual({ Pay: 15, Time: 3 });
  });
});
