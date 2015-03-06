# google-libphonenumber

A lightweight wrapper for Google's [libphonenumber](https://code.google.com/p/libphonenumber/) - a library to parse, format, store and validate international phone numbers.

## Status

[![npm version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

## Installation

Install the package via `npm`:

```sh
npm install --save google-libphonenumber
```

## Usage

Here's a simple example on how to format a US-based number in the international phone number format:

```js
var PNF = require('google-libphonenumber').PhoneNumberFormat;

// Grab the `phoneUtil` instance.
var phoneUtil = require('google-libphonenumber').phoneUtil;

// Or call it yourself, just like in the original examples.
// var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

var phoneNumber = phoneUtil.parse('202-456-1414', 'US');

phoneUtil.format(phoneNumber, PNF.INTERNATIONAL);
// => +1 202-456-1414
```

## Notes

### Differencies from other forks

* Uses a super modern version of `google-closure` repackaged for npm which does not pollute the global namespace (it runs in a sandbox instead).
* Relies on a simplified update process to keep the underlying `libphonenumber` library always up-to-date.
* All classes available from `libphonenumber` are exported (and that's it).
* Leverages own Google's Closure Library dependency management system to load dependencies.
* Dependencies are generated automatically through Google's Closure Library binary tools (no guessing!).

### Updating package dependencies

Learn more about [updating package dependencies](https://github.com/seegno/google-libphonenumber/wiki/Updating-Package-Dependencies).

### Errors

The javascript port of `libphonenumber` throws errors as string, e.g. `throw "Invalid country code"`. As Guillermo Rauch puts it, [a string is not an error](http://www.devthought.com/2011/12/22/a-string-is-not-an-error/) so, in an attempt to avoid future issues when developing an application, this module converts all string-based errors that occur on the `PhoneNumberUtil` class to instances of `Error`.

## Tests

A small subset of tests guarantees that the main library functions are working as expected and are correctly exported. The actual heavy lifting is done by `libphonenumber`'s extensive test suite.

```sh
npm test
```

## Acknowledgements

The original library wrapper was created by [Socialcam](https://github.com/Socialcam/node-libphonenumber) who first got it working on node.js and then improved by [mattbornski](https://github.com/mattbornski/libphonenumber). This package would not exist without the work of these previous contributions.

The exceptional work on `libphonenumber` was made possible by these [committers and contributors](https://github.com/googlei18n/libphonenumber/graphs/contributors).

## Licenses

This package is licensed under MIT. The bundled [libphonenumber](https://github.com/googlei18n/libphonenumber/blob/master/LICENSE) library is licensed under Apache 2.0.

[npm-image]: https://img.shields.io/npm/v/google-libphonenumber.svg?style=flat-square
[npm-url]: https://npmjs.org/package/google-libphonenumber
[travis-image]: https://img.shields.io/travis/seegno/google-libphonenumber.svg?style=flat-square
[travis-url]: https://travis-ci.org/seegno/google-libphonenumber
