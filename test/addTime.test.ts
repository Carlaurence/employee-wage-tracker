import { addTime } from '../utils/addTime';

describe('addTime', () => {
  test('should assign a value to the time property if time=0 and other employees cannot be affected', () => {
    const employeeTracker = {
      Matt: { Pay: 10, Time: 5 },
      Jeff: { Pay: 20, Time: 8 },
      Mike: { Pay: 15, Time: 0 },
    };
    const start = '07:15';
    const end = '12:45';
    addTime(employeeTracker, 'Mike', start, end);
    // expected employeeTracker['Mike'] { Mike: { Pay: 15, Time: 5.5 }}
    expect(employeeTracker['Mike']).toEqual({ Pay: 15, Time: 5.5 });
    //expected employeeTracker['Matt'] and [Jeff] have not been modified
    expect(employeeTracker['Matt']).toEqual({ Pay: 10, Time: 5 });
    expect(employeeTracker['Jeff']).toEqual({ Pay: 20, Time: 8 });
  });

  test('should add more time if time != 0 and other employees cannot be affected', () => {
    const employeeTracker = {
      Matt: { Pay: 10, Time: 5 },
      Jeff: { Pay: 20, Time: 8 },
      Mike: { Pay: 15, Time: 0 },
    };
    const start = '07:15';
    const end = '12:45';
    addTime(employeeTracker, 'Matt', start, end); //10:30
    // expected employeeTracker['Matt'] { Matt: {Pay: 10, Time=10:30}}
    expect(employeeTracker['Matt']).toEqual({ Pay: 10, Time: 10.5 });
    //expected employeeTracker['Jeff'] and [Mike] have not been modified
    expect(employeeTracker['Jeff']).toEqual({ Pay: 20, Time: 8 });
    expect(employeeTracker['Mike']).toEqual({ Pay: 15, Time: 0 });
  });
});
