'use strict';

/**
 * Module dependencies.
 */

var fs = require('fs');
var should = require('should');
var vm = require('vm');

/**
 * Bundle source.
 */

var source = fs.readFileSync(require.resolve('..'), 'utf8');

/**
 * Format a number with a given `libphonenumber` export.
 */

function format(libphonenumber) {
  var phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

  return phoneUtil.format(phoneUtil.parse('912345678', 'PT'), libphonenumber.PhoneNumberFormat.INTERNATIONAL);
}

/**
 * Test `UMD`.
 */

describe('UMD', function() {
  it('should register an anonymous AMD module', function() {
    var libphonenumber;
    var define = function(dependencies, factory) {
      should(dependencies).have.length(0);

      libphonenumber = factory();
    };

    define.amd = {};

    vm.runInNewContext(source, { define: define });

    format(libphonenumber).should.equal('+351 912 345 678');
  });

  it('should expose a `libphonenumber` global on `window`', function() {
    var context = vm.createContext({});

    context.window = context;

    vm.runInContext(source, context);

    format(context.libphonenumber).should.equal('+351 912 345 678');
  });

  it('should expose a `libphonenumber` global on `self`', function() {
    var context = vm.createContext({});

    context.self = context;

    vm.runInContext(source, context);

    format(context.libphonenumber).should.equal('+351 912 345 678');
  });
});
