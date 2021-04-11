module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.ts',
    '!**/types.ts',
    '!**/contain.ts',
    '!**/node_modules/**',
    '!**/src/index.ts',
    '!**/lib/**',
  ],
};
