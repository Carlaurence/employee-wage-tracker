const addRate = require('../utils/addRate');

describe('addRate', () => {
  test('should set Pay and Time=0 for an existing employee', () => {
    const employeeTracker = {
      Mike: {},
      Jeff: {},
      Matt: {},
    };
    const name = 'Matt';
    const rate = 10;

    addRate(employeeTracker, name, rate);

    //expected employeeTracker { Matt: {Rate: 10, Time=0}}
    expect(employeeTracker[name]).toEqual({ Pay: 10, Time: 0 });
    //expected employeeTracker['Jeff'] have not been modified { Jeff: {}}
    expect(employeeTracker['Jeff']).toEqual({});
    //expected employeeTracker['Mike'] have not been modified { Mike: {}}
    expect(employeeTracker['Mike']).toEqual({});
  });

  test("should create employee if it doesn't exist and set Pay and Time=0", () => {
    const employeeTracker = {
      Mike: {},
      Jeff: {},
      Matt: {},
    };
    const name = 'Ana';
    const rate = 12;

    addRate(employeeTracker, name, rate);

    //Ana is expected to be added to employeeTracker object and then should be added the payment-value and set property Time=0
    expect(employeeTracker).toEqual({
      Mike: {},
      Jeff: {},
      Matt: {},
      Ana: { Pay: 12, Time: 0 },
    });
  });
});
