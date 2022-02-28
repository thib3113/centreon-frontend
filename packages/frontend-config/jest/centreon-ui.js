const fs = require('fs');

const config = JSON.parse(
  fs.readFileSync(`${__dirname}/../swc/jest.json`, 'utf-8'),
);

module.exports = {
  moduleNameMapper: {
    '\\.(s?css|png|svg)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.[jt]sx?$': ['@swc/jest', { ...config }],
  },
};
