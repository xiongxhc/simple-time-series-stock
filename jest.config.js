/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
module.exports = {
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.ts',
    '^axios$': require.resolve('axios'),
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['^.+\\.module\\.(css|sass|scss)$'],
  verbose: true,
  coverageDirectory: './coverage',
  testTimeout: 10000,
  // fail fast - running the rest after 1 failed unit test is a waste of resources
  bail: true,
};
