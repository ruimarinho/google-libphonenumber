'use strict';

/**
 * Module dependencies.
 */

var PhoneNumberUtil = require('..').PhoneNumberUtil;
var PNF = require('..').PhoneNumberFormat;
var PNT = require('..').PhoneNumberType;
var should = require('should');

/**
 * Instances.
 */

var phoneUtil = PhoneNumberUtil.getInstance();

/**
 * Test `PhoneUtil`.
 */

describe('PhoneUtil', function() {
  var validNumbers = [
    '202-456-1414',
    '(202) 456-1414',
    '+1 (202) 456-1414',
    '202.456.1414',
    '202/4561414',
    '1 202 456 1414',
    '+12024561414',
    '1 202-456-1414'
  ];

  describe('International Format', function() {
    it('should format a number in the international format', function() {
      validNumbers.forEach(function(value) {
        var phoneNumber = phoneUtil.parseAndKeepRawInput(value, 'US');

        phoneUtil.format(phoneNumber, PNF.INTERNATIONAL).should.equal('+1 202-456-1414');
      });
    });
  });

  describe('E164 Format', function() {
    it('should format a number in the E164 format', function() {
      validNumbers.forEach(function(value) {
        var phoneNumber = phoneUtil.parseAndKeepRawInput(value, 'US');

        phoneUtil.format(phoneNumber, PNF.E164).should.equal('+12024561414');
      });
    });
  });

  describe('National Format', function() {
    it('should format a number in the national format', function() {
      validNumbers.forEach(function(value) {
        var phoneNumber = phoneUtil.parseAndKeepRawInput(value, 'US');

        phoneUtil.format(phoneNumber, PNF.NATIONAL).should.equal('(202) 456-1414');
      });
    });
  });

  describe('RFC3966 Format', function() {
    it('should format a number in the RFC3966 format', function() {
      validNumbers.forEach(function(value) {
        var phoneNumber = phoneUtil.parseAndKeepRawInput(value, 'US');

        phoneUtil.format(phoneNumber, PNF.RFC3966).should.equal('tel:+1-202-456-1414');
      });
    });
  });

  describe('Phone Number Type', function() {
    it('should return a valid phone number type', function() {
      var phoneNumber = phoneUtil.parseAndKeepRawInput(validNumbers[0], 'US');

      phoneUtil.getNumberType(phoneNumber).should.equal(PNT.FIXED_LINE_OR_MOBILE);
    });
  });

  describe('Malformatted Number', function() {
    it('should throw an error when attempting to format a malformatted number', function() {
      try {
        phoneUtil.parseAndKeepRawInput('111111111111111111111', 'US');

        should.fail();
      } catch (e) {
        e.should.be.an.instanceOf(Error);
        e.message.should.equal('The string supplied is too long to be a phone number');
      }
    });

    it('should return a reason for an invalid number', function() {
      var phoneNumber = phoneUtil.parseAndKeepRawInput('123456', 'US');

      phoneUtil.isPossibleNumber(phoneNumber).should.be.false();
      phoneUtil.isPossibleNumberWithReason(phoneNumber).should.equal(PhoneNumberUtil.ValidationResult.TOO_SHORT);
    });
  });
});
