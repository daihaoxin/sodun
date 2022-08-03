jest.mock('fs');
import { vol } from 'memfs';
import fs from 'fs';
import FsUtils from '../../../src/common/utils/FsUtils';

describe('+ 测试模板创建的工具集合', () => {
  afterEach(() => {
    vol.reset();
  });
  describe('+ isSafeProjectName() ', () => {
    test('> 判断项目名称是否符合规则', () => {
      expect(FsUtils.isSafeProjectName('abc123')).toBe(true);
      expect(FsUtils.isSafeProjectName('123abc')).toBe(true);
      expect(FsUtils.isSafeProjectName('1_b-c_afb')).toBe(true);
      expect(FsUtils.isSafeProjectName('a-b')).toBe(true);
      expect(FsUtils.isSafeProjectName('a_1-b')).toBe(true);
      expect(FsUtils.isSafeProjectName('.')).toBe(false);
      expect(FsUtils.isSafeProjectName('..')).toBe(false);
      expect(FsUtils.isSafeProjectName('_abc')).toBe(false);
      expect(FsUtils.isSafeProjectName('-abc')).toBe(false);
      expect(FsUtils.isSafeProjectName('a/b/c')).toBe(false);
      expect(FsUtils.isSafeProjectName('./bbc/cba')).toBe(false);
      expect(FsUtils.isSafeProjectName('项目名称')).toBe(false);
      expect(FsUtils.isSafeProjectName('b——c')).toBe(false);
    });
  });
  describe('+ isEmptyFolder() ', () => {
    const notExitFolderPath = `/a/b/c/d/e/f`;

    beforeEach(() => {
      const json = {
        './hasFileFolder': {
          'test.txt': 'test',
        },
      };
      vol.fromNestedJSON(json, '/app');
      vol.mkdirSync('/app/emptyFolder', { recursive: true });
    });

    test('> 判断给定的文件夹是否为空', () => {
      expect(FsUtils.isEmptyFolder('/app/emptyFolder')).toBe(true);
      expect(FsUtils.isEmptyFolder('/app/hasFileFolder')).toBe(false);
      expect(FsUtils.isEmptyFolder('/app/hasFileFolder/test.txt')).toBe(false);
      expect(FsUtils.isEmptyFolder(notExitFolderPath)).toBe(false);
    });
  });
  describe('+ isFolderExist()', () => {
    const exitFolderPath = '/test/exitFolderPath';
    const notExitFolderPath = '/a/b/c/d/e/f';
    beforeEach(() => {
      fs.mkdirSync(exitFolderPath, { recursive: true });
    });

    test('> 判断给定的文件夹是否存在', () => {
      expect(FsUtils.folderExists(exitFolderPath)).toBe(true);
      expect(FsUtils.folderExists(notExitFolderPath)).toBe(false);
      expect(FsUtils.folderExists(__filename)).toBe(false);
    });
  });
  describe('+ exists() ', () => {
    const exitFolderPath = '/test/exitFolderPath';
    const exitFilePath = '/test/exitFolderPath/abc.txt';
    const notExitFolderPath = '/a/b/c/d/e/f';
    const notExitFilePath = '/a/b/c/d/e/f/abc.txt';

    beforeEach(() => {
      vol.fromJSON(
        {
          [exitFilePath]: 'test.txt',
        },
        '/',
      );
      fs.mkdirSync(exitFolderPath, { recursive: true });
    });

    test('> 判断给定的文件夹/文件是否存在', () => {
      expect(FsUtils.exists(exitFolderPath)).toBe(true);
      expect(FsUtils.exists(exitFilePath)).toBe(true);
      expect(FsUtils.exists(notExitFolderPath)).toBe(false);
      expect(FsUtils.exists(notExitFilePath)).toBe(false);
    });
  });
});
