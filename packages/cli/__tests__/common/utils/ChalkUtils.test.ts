import ChalkUtils from '../../../src/common/utils/ChalkUtils';
import chalk from 'chalk';

describe('+ ChalkUtils 输出的测试', () => {
  let message = '';
  const content = 'ChalkUtils 输出的测试';

  beforeEach(() => {
    const spy = jest.spyOn(console, 'log');
    spy.mockImplementation((msg) => {
      message = msg;
    });
  });

  afterEach(() => {
    message = '';
  });
  test('> success', () => {
    ChalkUtils.success(content);
    expect(message).toBe(chalk.green(content));
  });
  test('> info', () => {
    ChalkUtils.info(content);
    expect(message).toBe(chalk.blue(content));
  });
  test('> error', () => {
    ChalkUtils.error(content);
    expect(message).toBe(chalk.red(content));
  });
  test('> warning', () => {
    ChalkUtils.warning(content);
    expect(message).toBe(chalk.yellowBright(content));
  });
});
