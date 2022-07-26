const p = require('@pnpm-test/babel-plugin-demo');
const babel = require('@babel/core');
const fs = require('fs');
/*
 * 文件的方式使用
 * 对应的同步 api babel.transformFileSync
 * */
babel.transformFile(
  './index.ts'.toString(),
  {
    presets: ['@babel/preset-env'],
    plugins: [p],
  },
  (err, result) => {
    const { code, map, ast } = result;
    console.log(code);
  },
);
/*
 * 字符串的方式使用
 * */
babel.transform(
  fs.readFileSync('./index.ts').toString(),
  {
    presets: ['@babel/preset-env'],
    plugins: [p],
  },
  (err, result) => {
    console.log(result.code);
    result.map;
    result.ast;
  },
);
