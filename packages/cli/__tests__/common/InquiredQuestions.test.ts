import InquiredQuestions from '../../src/common/InquiredQuestions';

describe('+ InquiredQuestions 互动问题测试', () => {
  it('> 目标文件夹已存在切不为空测试', () => {
    const path = 'a/b/c';
    const obj = InquiredQuestions.whetherOverwriteDistFolder(path);
    expect(obj[0].name).toBe(InquiredQuestions.WHETHER_OVERWRITE_DIST_FOLDER_QUESTION_NAME);
  });
});
