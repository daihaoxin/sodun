import ChalkUtils from '../../src/common/utils/ChalkUtils';
import handlebarsUtils from '../../src/common/utils/HandlebarsUtils';
import MsgConstants from '../../src/common/MsgConstants';
import path from 'path';
import create from '../../src/subCommand/create';
import FsUtils from '../../src/common/utils/FsUtils';
import { vol } from 'memfs';
import fsExtra from 'fs-extra';

describe('+ create 子命令的测试', () => {
  test('> 当项目名称不符合规则的时候，输出错误提示', () => {
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
  describe('> 当存在和项目同名的目录且不为空时，提示交互信息，n放弃，y覆盖目录并继续', () => {
    it('>', () => {});
  });
  describe('> 项目成功创建', () => {
    const projectName = 'test_create_project';
    it('> test', () => {
      jest.spyOn(console, 'log').mockImplementation(() => {});
      const emptyDirSyncSpy = jest.spyOn(fsExtra, 'emptyDirSync').mockImplementation(() => {});
      const copySync = jest.spyOn(fsExtra, 'copySync').mockImplementation(() => {});
      create(projectName);
      expect(emptyDirSyncSpy).toBeCalledTimes(1);
      expect(copySync).toBeCalledTimes(1);
    });
  });
});
