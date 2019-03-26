'use strict';

/**
 * Module dependencies.
 */

var AsYouTypeFormatter = require('..').AsYouTypeFormatter;

/**
 * Test `AsYouTypeFormatter`.
 */

describe('AsYouTypeFormatter', function() {
  it('should format numbers as typed', function() {
    var formatter = new AsYouTypeFormatter('PT');
    var phoneNumber = '912345678';
    var sequence = [
      '9',
      '91',
      '912',
      '912 3',
      '912 34',
      '912 345',
      '912 345 6',
      '912 345 67',
      '912 345 678'
    ];

    for (var i = 0; i < phoneNumber.length; ++i) {
      formatter.inputDigit(phoneNumber.charAt(i)).should.equal(sequence[i]);
    }
  });
});
