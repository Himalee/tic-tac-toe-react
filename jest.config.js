const {defaults} = require('jest-config');
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'css'],
  setupFiles: ['<rootDir>/test/setupTests.js'],
};
