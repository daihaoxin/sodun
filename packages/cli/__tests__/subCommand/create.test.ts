import create from '../../src/subCommand/create';
import ChalkUtils from '../../src/common/utils/ChalkUtils';
import chalk from 'chalk';
import handlebarsUtils from '../../src/common/utils/HandlebarsUtils';
import MsgConstants from '../../src/common/MsgConstants';

describe('+ create 子命令的测试', () => {
  test('> 项目名称不合规', () => {
    const spy = jest.spyOn(ChalkUtils, 'error');
    const projectName = '_sss';
    let message = '';
    spy.mockImplementation((msg) => {
      message = msg;
    });
    create(projectName);
    expect(message).toBe(handlebarsUtils.formatString(MsgConstants.NOT_SAFE_PROJECT_NAME, { name: projectName }));
  });
  test('> 项目文件夹已存在且不为空', () => {});
});
