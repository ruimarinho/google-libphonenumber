
/**
 * Module dependencies.
 */

var PNF = require('..').PhoneNumberFormat;
var phoneUtil = require('..').phoneUtil;
var should = require('should');

/**
 * Test `formatting`.
 */

describe('Formatting', function () {
  var validNumbers = [
    '202-456-1414',
    '(202) 456-1414',
    '+1 (202) 456-1414',
    '202.456.1414',
    '202/4561414',
    '1 202 456 1414',
    '+12024561414',
    '1 202-456-1414',
  ];

  describe('International Format', function () {
    it('should format a number in the international format', function () {
      validNumbers.forEach(function(value) {
        var phoneNumber = phoneUtil.parse(value, 'US');

        phoneUtil.format(phoneNumber, PNF.INTERNATIONAL).should.equal('+1 202-456-1414');
      });
    });
  });

  describe('E164 Format', function () {
    it('should format a number in the E164 format', function () {
      validNumbers.forEach(function(value) {
        var phoneNumber = phoneUtil.parse(value, 'US');

        phoneUtil.format(phoneNumber, PNF.E164).should.equal('+12024561414');
      });
    });
  });

  describe('National Format', function () {
    it('should format a number in the national format', function () {
      validNumbers.forEach(function(value) {
        var phoneNumber = phoneUtil.parse(value, 'US');

        phoneUtil.format(phoneNumber, PNF.NATIONAL).should.equal('(202) 456-1414');
      });
    });
  });

  describe('RFC3966 Format', function () {
    it('should format a number in the RFC3966 format', function () {
      validNumbers.forEach(function(value) {
        var phoneNumber = phoneUtil.parse(value, 'US');

        phoneUtil.format(phoneNumber, PNF.RFC3966).should.equal('tel:+1-202-456-1414');
      });
    });
  });

  describe('Malformatted Input', function() {
    it('should throw an error when attempting to format a malformatted number', function() {
      try {
        phoneUtil.parse('1', null);

        should.fail();
      } catch (e) {
        e.should.be.instanceOf(Error);
        e.message.should.equal('The string supplied did not seem to be a phone number');
      }
    });
  });
});
