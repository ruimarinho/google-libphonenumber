
/**
 * Module dependencies.
 */

var closure = require('seegno-closure-library');
var path = require('path');

/**
 * Load `libphonenumber` dependencies.
 */

closure.loadScript(path.join(__dirname, 'lib/closure/goog/deps.js'), path.relative(closure.basePath, __dirname));

/**
 * Require `PhoneNumberUtil` dependency.
 */

closure.require('i18n.phonenumbers.PhoneNumberUtil');

/**
 * Retrieve `i18n.phonenumbers` namespace object.
 */

var phoneNumbers = closure.getObjectByName('i18n.phonenumbers');

/**
 * Patch string-based errors to throw proper a `Error` instead.
 */

Object.keys(phoneNumbers.PhoneNumberUtil.prototype).forEach(function(key) {
  var originalFn = phoneNumbers.PhoneNumberUtil.prototype[key];

  phoneNumbers.PhoneNumberUtil.prototype[key] = function() {
    try {
      return originalFn.apply(this, arguments);
    } catch (e) {
      if ('string' !== typeof e) {
        throw e;
      }

      throw new Error(e);
    }
  };
});

/**
 * Export `i18n.phonenumbers` namespace.
 */

module.exports = phoneNumbers;

/**
 * Export an instance of `PhoneNumberUtil`.
 */

module.exports.phoneUtil = phoneNumbers.PhoneNumberUtil.getInstance();
