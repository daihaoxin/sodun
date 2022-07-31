import FsUtils from '../../src/common/utils/FsUtils';
import path from 'path';
import fs from 'fs';
describe('+ 测试模板创建的工具集合', () => {
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
    const EMPTY_DIR_NAME = 'emptyFolder';
    const HAS_FILE_DIR_NAME = 'hasFileFolder';
    const emptyFolderPath = path.resolve(__dirname, `../resources/${EMPTY_DIR_NAME}`);
    const hasFileFolderPath = path.resolve(__dirname, `../resources/${HAS_FILE_DIR_NAME}`);
    const fileInFolder = path.resolve(hasFileFolderPath, 'test.txt');
    const notExitFolderPath = path.resolve(__dirname, `a/b/c/d/e/f`);
    beforeEach(() => {
      fs.mkdirSync(emptyFolderPath);
      fs.mkdirSync(hasFileFolderPath);
      fs.writeFileSync(fileInFolder, 'test');
    });
    afterEach(() => {
      fs.rmdirSync(emptyFolderPath);
      fs.rmSync(fileInFolder);
      fs.rmdirSync(hasFileFolderPath);
    });
    test('> 判断给定的文件夹是否为空', () => {
      expect(FsUtils.isEmptyFolder(emptyFolderPath)).toBe(true);
      expect(FsUtils.isEmptyFolder(hasFileFolderPath)).toBe(false);
      expect(FsUtils.isEmptyFolder(notExitFolderPath)).toBe(false);
    });
  });
  describe('+ isFolderExist()', () => {
    const exitFolderPath = path.resolve(__dirname, `../resources/exitFolderPath`);
    const notExitFolderPath = path.resolve(__dirname, `a/b/c/d/e/f`);
    beforeEach(() => {
      fs.mkdirSync(exitFolderPath);
    });
    afterEach(() => {
      fs.rmdirSync(exitFolderPath);
    });
    test('> 判断给定的文件夹是否存在', () => {
      expect(FsUtils.folderExists(exitFolderPath)).toBe(true);
      expect(FsUtils.folderExists(notExitFolderPath)).toBe(false);
      expect(FsUtils.folderExists(__filename)).toBe(false);
    });
  });
  describe('+ isExist() ', () => {
    const exitPath = path.resolve(__dirname, `../resources/exitFolder`);
    const notExitPath = path.resolve(__dirname, `a/b/c/d/e/f`);
    const notExitFile = path.resolve(__dirname, 'a/b/c/d/e/f.txt');
    beforeEach(() => {
      fs.mkdirSync(exitPath);
    });
    afterEach(() => {
      fs.rmdirSync(exitPath);
    });
    test('> 判断给定的文件夹/文件是否存在', () => {
      expect(FsUtils.exists(exitPath)).toBe(true);
      expect(FsUtils.exists(notExitPath)).toBe(false);
      expect(FsUtils.exists(notExitFile)).toBe(false);
      expect(FsUtils.exists(__filename)).toBe(true);
    });
  });
});
