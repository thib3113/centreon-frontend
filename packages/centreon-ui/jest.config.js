const { mergeDeepRight } = require('ramda');

module.exports = mergeDeepRight(
  require('@centreon/frontend-config/jest/centreon-ui'),
  {
    roots: ['<rootDir>/src/'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    testEnvironment: 'jsdom',
  },
);
