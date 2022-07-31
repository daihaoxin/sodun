import Handlebars from 'handlebars';

export default class HandlebarsUtils {
  public static formatString(template: string, data: Record<string, any>) {
    return Handlebars.compile(template)(data);
  }
}
