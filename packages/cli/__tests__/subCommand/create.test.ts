import ChalkUtils from '../../src/common/utils/ChalkUtils';
import shell from 'shelljs';
import handlebarsUtils from '../../src/common/utils/HandlebarsUtils';
import MsgConstants from '../../src/common/MsgConstants';
import path from 'path';
import create from '../../src/subCommand/create';
import chalk from 'chalk';
import FsUtils from '../../src/common/utils/FsUtils';
import describe from 'node:test';
import { vol } from 'memfs';

describe('+ create 子命令的测试', () => {
  test('> 项目名称不合规', () => {
    const spy = jest.spyOn(ChalkUtils, 'error');
    const projectName = '_sss';
    let message = '';
    spy.mockImplementation((msg) => {
      message = msg;
    });
    create(projectName);
    const msg = handlebarsUtils.formatString(MsgConstants.NOT_SAFE_PROJECT_NAME, { name: projectName });
    expect(message).toEqual(msg);
  });
  describe('> 目标文件夹已存在切不为空', () => {
    beforeEach(() => {
      vol.fromJSON(
        {
          'test/abc.txt': 'abc',
        },
        '/',
      );
    });
  });
  describe('> 项目成功创建', () => {
    const projectName = 'test_create_project';
    const cwd = path.resolve(__dirname, '../resources');
    const projectPath = path.resolve(cwd, projectName);
    afterEach(() => {
      shell.rm('-rf', projectPath);
    });
    it('> test', () => {
      process.chdir(cwd);
      create(projectName);
      expect(true).toBe(FsUtils.exists(path.resolve(__dirname, `../resources/${projectName}`)));
      expect(true).toBe(FsUtils.exists(path.resolve(__dirname, `../resources/${projectName}/index.js`)));
    });
  });
});
