import "../../../index.js";

console.log(global.getFileName(import.meta.url));
console.log(global.getDirName(import.meta.url));
// console.log(global.loadJSON("../package.json"));

// console.log(path.dirname(import.meta.url));

/*
 const util=require("util");
 const fs = require("fs");
 console.log(fs.readFile[kCustomPromisifiedSymbol]);
 util.promisify(fs.readFile) */
