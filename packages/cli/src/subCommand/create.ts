import fsExtra from 'fs-extra';
import path from 'path';
import * as inquirer from 'inquirer';
import FsUtils from '../common/utils/FsUtils';
import ChalkUtils from '../common/utils/ChalkUtils';
import handlebarsUtils from '../common/utils/HandlebarsUtils';
import MsgConstants from '../common/MsgConstants';
import InquiredQuestions from '../common/InquiredQuestions';
import type { Answers } from 'inquirer';

export default async (name: string) => {
  if (!FsUtils.isSafeProjectName(name)) {
    ChalkUtils.error(handlebarsUtils.formatString(MsgConstants.NOT_SAFE_PROJECT_NAME, { name }));
    return;
  }
  const distPath = path.resolve(process.cwd(), name);
  if (FsUtils.folderExists(distPath) && !FsUtils.isEmptyFolder(distPath)) {
    const answer: Answers = await inquirer.prompt(InquiredQuestions.whetherOverwriteDistFolder(distPath));
    if (!answer[InquiredQuestions.WHETHER_OVERWRITE_DIST_FOLDER_QUESTION_NAME]) {
      process.exit(-1);
    }
  }
  const srcPath = path.resolve(__dirname, '../../template/mono-js');

  // 如果目录非空删除目录内容，如果目录不存在，就创建一个。目录本身并不是删除
  fsExtra.emptyDirSync(distPath);
  fsExtra.copySync(srcPath, distPath);
  ChalkUtils.success(`
创建完成
To start
==================
cd ${name}
npm install
npm start
=================
  `);
};
