const {defaults} = require('jest-config');
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'css'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
};
