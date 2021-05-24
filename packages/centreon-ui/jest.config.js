const merge = require('lodash/merge');

module.exports = merge(require('@centreon/frontend-config/jest/centreon-ui'), {
  roots: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
});
