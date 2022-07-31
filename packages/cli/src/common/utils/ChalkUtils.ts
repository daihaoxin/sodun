import chalk from 'chalk';

export default class ChalkUtils {
  public static success(content: string) {
    console.log(chalk.green(content));
  }
  public static info(content: string) {
    console.log(chalk.blue(content));
  }
  public static error(content: string) {
    console.log(chalk.red(content));
  }
  public static warning(content: string) {
    console.log(chalk.yellowBright(content));
  }
}
