
/**
 * Module dependencies.
 */

var libphonenumber = require('..');

/**
 * Test `exports`.
 */

describe('Exports', function () {
  it('should export all provided classes', function() {
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
      'metadata',
      'phoneUtil'
      ]);
  });

  it('should export an instance of `PhoneNumberUtil`', function() {
    (libphonenumber.phoneUtil instanceof libphonenumber.PhoneNumberUtil).should.be.true;
  });
});
