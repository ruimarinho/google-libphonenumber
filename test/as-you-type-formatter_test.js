'use strict';

/**
 * Module dependencies.
 */

import { AsYouTypeFormatter } from '..';

/**
 * Test `AsYouTypeFormatter`.
 */

describe('AsYouTypeFormatter', () => {
  it('should format numbers as typed', () => {
    const formatter = new AsYouTypeFormatter('PT');
    const phoneNumber = '912345678';
    const sequence = [
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

    for (let i = 0; i < phoneNumber.length; ++i) {
      formatter.inputDigit(phoneNumber.charAt(i)).should.equal(sequence[i]);
    }
  });
});
