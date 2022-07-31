module.exports = {
  // preset: 'ts-jest',
  testEnvironment: 'node',
  // moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths /* , { prefix: '<rootDir>/' } */),
  /* moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  }, */
  modulePathIgnorePatterns: ['resources'],
};
