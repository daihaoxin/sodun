module.exports = {
  // preset: 'ts-jest',
  testEnvironment: 'node',

  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 100,
      lines: 80,
      statements: 80,
    },
  },
  // moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths /* , { prefix: '<rootDir>/' } */),
  /* moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  }, */
  modulePathIgnorePatterns: ['resources'],
};
