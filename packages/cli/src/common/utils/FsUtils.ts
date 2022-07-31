import fs from 'fs';

/**
 * 模板创建的工具集合
 */
export default class FsUtils {
  /**
   * 判断项目名称是否符合规则
   *
   * @description 只允许字母、数字、下划线和短横线，并只能以字母或者数字开头
   * @param {string} projectName 项目名称
   * @return {boolean} true 安全 false 不安全
   */
  public static isSafeProjectName(projectName: string): boolean {
    const reg = /^[a-z0-9][\w|-]*$/giu;
    return reg.test(projectName);
  }

  /**
   * 判断给定的文件夹是否为空
   *
   * @param {string} absolutePath 文件夹的绝对路径
   * @return {boolean} true 表示为空，false 不为空
   */
  public static isEmptyFolder(absolutePath: string): boolean {
    let flag;
    try {
      if (fs.statSync(absolutePath).isDirectory()) {
        flag = fs.readdirSync(absolutePath).length === 0;
      } else {
        flag = false;
      }
    } catch (e) {
      flag = false;
    }
    return flag;
  }

  /**
   * 判断给定的文件夹是否存在
   * 只判断文件夹，如果是文件，返回false
   *
   * @param {string} absolutePath 文件夹的绝对路径
   * @return {boolean} true 表示存在，false 不存在
   */
  public static folderExists(absolutePath: string): boolean {
    let flag;
    try {
      flag = fs.statSync(absolutePath).isDirectory();
    } catch (e) {
      flag = false;
    }
    return flag;
  }

  /**
   * 判断给定的文件或者文件夹是否存在
   *
   * @param {string} absolutePath 文件或文件夹的绝对路径
   * @return {boolean} true 表示存在，false 不存在
   */
  public static exists(absolutePath: string): boolean {
    let flag = true;
    try {
      fs.statSync(absolutePath);
    } catch (e) {
      flag = false;
    }
    return flag;
  }
}
