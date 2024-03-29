module.exports = {
  moduleNameMapper: {
    '@centreon/ui':
      '<rootDir>/node_modules/centreon-frontend/packages/centreon-ui',
    '@centreon/ui-context':
      '<rootDir>/node_modules/centreon-frontend/packages/ui-context',
    '\\.(s?css|png|svg|jpg)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!centreon-frontend/packages/(centreon-ui|ui-context)).+\\.jsx?$',
  ],
};
