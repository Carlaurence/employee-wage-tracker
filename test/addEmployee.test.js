const addEmployee = require('../utils/addEmployee');

describe('addEmployee', () => {
  test('should add a key and set it with a empty object value', () => {
    const employeeTracker = {};
    const name = 'Carlos';

    addEmployee(employeeTracker, name);
    // The employee 'Carlos' should be added with an empty object as its value
    expect(employeeTracker[name]).toEqual({});
  });

  test('should not overwrite existing employee if already present', () => {
    const employeeTracker = {
      Ana: { Pay: 15, Time: 3 },
    };

    addEmployee(employeeTracker, 'Ana');
    //Ana is not expected to be overwritten
    expect(employeeTracker['Ana']).toEqual({ Pay: 15, Time: 3 });
  });
});
