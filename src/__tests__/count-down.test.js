import countDown from '../count-down';

test('counts down from 3', () => {
  const logSpy = jest.spyOn(console, 'log');

  countDown(3);
  expect(logSpy).toHaveBeenCalledTimes(3)
  expect(logSpy).toHaveBeenCalledWith(3);
  expect(logSpy).toHaveBeenCalledWith(2);
  expect(logSpy).toHaveBeenCalledWith(1);
});
