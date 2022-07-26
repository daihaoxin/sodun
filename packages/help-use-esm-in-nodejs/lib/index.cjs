"use strict";

var _nodeUrl = _interopRequireDefault(require("node:url"));

var _nodePath = _interopRequireDefault(require("node:path"));

var _nodeModule = require("node:module");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(global, 'loadJSON', {
  get() {
    return (filepath, importMetaUrl) => {
      const reg = /\S+.json$/g;

      if (reg.test(filepath)) {
        const require = (0, _nodeModule.createRequire)(importMetaUrl);

        return require(filepath);
      } else {
        throw new Error('loadJSON 的参数必须是一个json文件');
      }
    };
  },

  enumerable: true,
  configurable: false // writable: false,

});
Object.defineProperty(global, 'getFileName', {
  get() {
    return importMetaUrl => {
      return _nodeUrl.default.fileURLToPath(importMetaUrl);
    };
  },

  enumerable: true,
  configurable: false // writable: false,

});
Object.defineProperty(global, 'getDirName', {
  get() {
    return importMetaUrl => {
      return _nodePath.default.dirname(_nodeUrl.default.fileURLToPath(importMetaUrl));
    };
  },

  enumerable: true,
  configurable: false // writable: false,

});