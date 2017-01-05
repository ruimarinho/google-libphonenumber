# google-libphonenumber

A browserify-compatible wrapper for Google's [libphonenumber](https://github.com/googlei18n/libphonenumber), a library to parse, format, store and validate international phone numbers.
Zero dependencies, always up-to-date.

## Status

[![npm version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

## Installation

Install the package via `npm`:

```sh
npm install google-libphonenumber --save
```

## Usage

Here's a simple example on how to format a US-based number in the international phone number format:

```js
// Require `PhoneNumberFormat`.
var PNF = require('google-libphonenumber').PhoneNumberFormat;

// Get an instance of `PhoneNumberUtil`.
var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

// Parse number with country code.
var phoneNumber = phoneUtil.parse('202-456-1414', 'US');

// Print number in the international format.
console.log(phoneUtil.format(phoneNumber, PNF.INTERNATIONAL));
// => +1 202-456-1414
```

#### Using the "As You Type" Formatter

```js
// Require `AsYouTypeFormatter`.
var AsYouTypeFormatter = require('google-libphonenumber').AsYouTypeFormatter;
var formatter = new AsYouTypeFormatter('US');

console.log(formatter.inputDigit('6')); // => 6
console.log(formatter.inputDigit('5')); // => 65
console.log(formatter.inputDigit('0')); // => 650
console.log(formatter.inputDigit('2')); // => 650-2
console.log(formatter.inputDigit('5')); // => 650-25
console.log(formatter.inputDigit('3')); // => 650-253
console.log(formatter.inputDigit('2')); // => 650-2532
console.log(formatter.inputDigit('2')); // => (650) 253-22

formatter.clear();
```

## Notes

### Differences from other forks

* All classes available from `libphonenumber` are exported as-is. No magic methods.
* Always based on the latest `google-closure` library version available from Google with performance and bug fixes.
* Relies on a simplified and [well documented update process](https://github.com/seegno/google-libphonenumber/blob/master/bin/update.sh) to keep the underlying `libphonenumber` library always up-to-date.


## Tests

A small subset of tests guarantees that the main library functions are working as expected and are correctly exported. The actual heavy lifting is done by `libphonenumber`'s extensive test suite.

```sh
npm test
```

## Release

```sh
npm version [<newversion> | major | minor | patch] -m "Release %s"
```

## Acknowledgments

The exceptional work on `libphonenumber` was made possible by these [committers and contributors](https://github.com/googlei18n/libphonenumber/graphs/contributors).

## Licenses

This package is licensed under MIT. The bundled [libphonenumber](https://github.com/googlei18n/libphonenumber/blob/master/LICENSE) library is licensed under Apache 2.0.

[npm-image]: https://img.shields.io/npm/v/google-libphonenumber.svg?style=flat-square
[npm-url]: https://npmjs.org/package/google-libphonenumber
[travis-image]: https://img.shields.io/travis/seegno/google-libphonenumber.svg?style=flat-square
[travis-url]: https://travis-ci.org/seegno/google-libphonenumber
