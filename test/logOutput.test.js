const logOutput = require('../utils/logOutput');

describe('logOutput', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test('should log employee summary in alphabetical order', () => {
    const input = {
      Mike: { Time: 0, Pay: 10 },
      Jeff: { Time: 6.75, Pay: 20 },
      Matt: { Time: 10.5, Pay: 10 },
    };

    logOutput(input);

    // Check that the calls are in alphabetical order
    expect(console.log).toHaveBeenNthCalledWith(1, 'Jeff: 6.75 hours 135 earned');
    expect(console.log).toHaveBeenNthCalledWith(2, 'Matt: 10.5 hours 105 earned');
    expect(console.log).toHaveBeenNthCalledWith(3, 'Mike: 0 hours 0 earned');
  });

  test('should calculate correct earnings', () => {
    const input = {
      Ana: { Time: 3, Pay: 15 }, // 45
      Zoe: { Time: 8, Pay: 12.5 }, // 100
    };

    logOutput(input);

    expect(console.log).toHaveBeenCalledWith('Ana: 3 hours 45 earned');
    expect(console.log).toHaveBeenCalledWith('Zoe: 8 hours 100 earned');
  });
});
