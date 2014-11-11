
/**
 * Module dependencies.
 */

require('seegno-closure-library/closure/goog/bootstrap/nodejs');
require('./lib/closure/goog/deps');

/**
 * Require `PhoneNumberUtil` from `goog`.
 */

goog.require('i18n.phonenumbers.PhoneNumberUtil');

/**
 * Export `goog.global.i18n.phonenumbers`.
 */

module.exports = goog.global.i18n.phonenumbers;

/**
 * Patch string-based errors.
 */

Object.keys(goog.global.i18n.phonenumbers.PhoneNumberUtil.prototype).forEach(function(key) {
  var originalFn = goog.global.i18n.phonenumbers.PhoneNumberUtil.prototype[key];

  goog.global.i18n.phonenumbers.PhoneNumberUtil.prototype[key] = function() {
    var result;

    try {
      result = originalFn.apply(this, arguments);
    } catch (e) {
      if ('string' !== typeof e) {
        throw e;
      }

      throw new Error(e);
    }

    return result;
  };
});

/**
 * Export `PhoneNumberUtil` instance.
 */

module.exports.phoneUtil = goog.global.i18n.phonenumbers.PhoneNumberUtil.getInstance();
