'use strict';

/**
 * Module dependencies.
 */

var libphonenumber = require('..');

/**
 * Test `exports`.
 */

describe('Exports', function() {
  it('should export all known objects', function() {
    Object.keys(libphonenumber).sort().should.eql([
      'AsYouTypeFormatter',
      'Error',
      'NumberFormat',
      'PhoneMetadata',
      'PhoneMetadataCollection',
      'PhoneNumber',
      'PhoneNumberDesc',
      'PhoneNumberFormat',
      'PhoneNumberType',
      'PhoneNumberUtil',
      'default',
      'libphonenumber',
      'metadata'
      ]);
  });

  it('should export an instance of `PhoneNumberUtil`', function() {
    (libphonenumber.PhoneNumberUtil.getInstance() instanceof libphonenumber.PhoneNumberUtil).should.be.true();
  });
});
