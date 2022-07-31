import type { Question } from 'inquirer';
import HandlebarsUtils from './utils/HandlebarsUtils';

export default class InquiredQuestions {
  public static readonly WHETHER_OVERWRITE_DIST_FOLDER_QUESTION_NAME = 'whetherOverwriteFolder';
  private static readonly WHETHER_OVERWRITE_DIST_FOLDER_QUESTION = '目标文件夹 {{path}} 已存在且不为空。是否覆盖？';

  public static whetherOverwriteDistFolder(path: string): Question[] {
    return [
      {
        type: 'confirm',
        message: HandlebarsUtils.formatString(this.WHETHER_OVERWRITE_DIST_FOLDER_QUESTION, { path }),
        name: this.WHETHER_OVERWRITE_DIST_FOLDER_QUESTION_NAME,
        default: false, // 默认值
      },
    ];
  }
}
