'use strict';

/**
 * Module dependencies.
 */

const libphonenumber = require('..');

/**
 * Test `exports`.
 */

describe('Exports', () => {
  it('should export all known objects', () => {
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

  it('should export an instance of `PhoneNumberUtil`', () => {
    (libphonenumber.PhoneNumberUtil.getInstance() instanceof libphonenumber.PhoneNumberUtil).should.be.true();
  });
});
