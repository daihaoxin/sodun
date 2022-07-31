declare global {
  // eslint-disable-next-line no-inner-declarations,no-var
  var loadJSON: (jsonFilePath: string, importMetaUrl: string) => Record<string, any>;
  // type loadJSON = (path: string) => any;
}
export {};
