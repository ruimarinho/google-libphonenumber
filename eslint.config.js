'use strict';

/**
 * Module dependencies.
 */

const globals = require('globals');
const js = require('@eslint/js');

/**
 * Export ESLint config.
 */

module.exports = [
  {
    ignores: ['dist/', 'src/*', '!src/index.js']
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.mocha,
        ...globals.node,
        goog: 'readonly',
        i18n: 'readonly'
      },
      sourceType: 'commonjs'
    }
  }
];
