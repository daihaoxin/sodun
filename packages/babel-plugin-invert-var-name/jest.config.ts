// const path = require("path");
import { pathsToModuleNameMapper } from 'ts-jest'
import ts from "./tsconfig.json"
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // moduleNameMapper:pathsToModuleNameMapper(ts.compilerOptions.paths /*, { prefix: '<rootDir>/' } */)
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
