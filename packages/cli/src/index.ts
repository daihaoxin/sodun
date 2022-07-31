#!/usr/bin/env node

import { program } from 'commander';
import create from './subCommand/create';
import packageConfig from '../package.json';

program.version(packageConfig.version).name(packageConfig.binName);

// 当 .command() 带有描述参数时，不能采用 .action(callback) 来处理子命令
program
  .command('create <name>')
  .description('init project')
  .action((name: string) => {
    create(name);
  });

program
  /**
   * 默认情况下，程序的选项在子命令前后均可被识别。如要只允许选项出现在子命令之前，
   * 可以使用.enablePositionalOptions()。这样可以在命令和子命令中使用意义不同的同名选项。
   */
  .enablePositionalOptions()
  /**
   * `-vl` 被视为 `-v -l` , 而不是 `-v45` 被视为 `--vegan=45` 的默认的行为
   */
  .combineFlagAndOptionalValue(false)
  .parse();
