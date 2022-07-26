#!/usr/bin/env node
// 指定解释器类型
import '@sodun/help-use-esm-in-nodejs';
import { program } from 'commander';

const packageConfig = global.loadJSON('../package.json', import.meta.url);
program.version(packageConfig.version).name(packageConfig.binName);

program
  .command('init <name>')
  .description('init project')
  .action((name: string) => {
    console.log(`init ${name}`);
    // init(name);
  });

program.parse(process.argv);
