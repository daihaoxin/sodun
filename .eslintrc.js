module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  // 这配置用在 monorepo 项目中，monorepoRoot下面有babel的配置即可，不用每个微应用添加babel的配置文件.
  // 只要在子项目下的.eslintrc.js里添加上这个配置即可
  /* parserOptions: {
    babelOptions: {
      rootMode: "upward",
    },
  }, */
  ignorePatterns: ['dist', 'lib'],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
    'max-nested-callbacks': ['error', 5],
  },
};
