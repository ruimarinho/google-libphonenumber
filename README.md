# google-libphonenumber

A lightweight wrapper for Google's [libphonenumber](https://code.google.com/p/libphonenumber/), a library to parse, format, store and validate international phone numbers.

## Status

[![npm version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

## Installation

Install the package via `npm`:

```
$ npm install --save google-libphonenumber
```

## Usage

Here's a simple example on how to format a US-based number in the international phone number format:

```js
var PNF = require('google-libphonenumber').PhoneNumberFormat;
var phoneUtil = require('google-libphonenumber').phoneUtil;
var phoneNumber = phoneUtil.parse('202-456-1414', 'US');

// Result is +1 202-456-1414
console.log('Result is', phoneUtil.format(phoneNumber, PNF.INTERNATIONAL));
```

## Dependencies

### Updating libphonenumber

Fetch the newest revision from `libphonenumber`'s repository without any svn metadata:

```
$ svn export http://libphonenumber.googlecode.com/svn/trunk/javascript/i18n/phonenumbers lib/closure/goog/i18n/phonenumbers --force
```

(Optional) Update the library dependencies (unlikely to change in the foreseable future):

```
$ chmod +x node_modules/seegno-closure-library/closure/bin/build/depswriter.py
$ node_modules/seegno-closure-library/closure/bin/build/depswriter.py --root_with_prefix="./lib/closure/goog ../../../../lib/closure/goog" | sed -E '/metadatalite|metadatafortesting/d' > ./lib/closure/goog/deps.js
```

### Updating closure-library

This project uses a fork of `closure-library` that has been published to npm. The package is maintained by [Seegno](https://github.com/seegno/closure-library) and receives regular updates.

If you absolutely need to update to the latest `closure-library` version you may have to fork the `seegno-closure-library` and follow the README's instructions on how to rebase with the upstream repository. This is unlikely to happen because `libphonenumber` uses a very small and stable set of closure dependences (only `string`, `array`, `proto2`).

Push the changes to your fork and add the following lines to your project's `package.json` :

```json
"dependencies": {
  "seegno-closure-library": "git://github.com/<username>/closure-library#<commit-sha1,branch,tag>"
}
```

Run `npm install` and after a successfull install, the library should pick that version instead.

Alternatively, you may publish your own version of `closure-library` to npm and use that one instead.

## Notes

### Differencies from other forks

* Added built-in integration with `google-closure`'s own node.js wrapper.
* Added a simplified update process to keep `libphonenumber` more up-to-date.
* Added all exported classes from `libphonenumber` to the module's exports.
* Moved `google-closure` to the vendor space to facilitate version tracking and control.
* Updated the dependency management system to require `libphonenumber` dependencies directly from  `google-closure`.

### Errors

The javascript port of `libphonenumber` throws errors as string, e.g. `throw "Invalid country code"`. As Guillermo Rauch puts it, [a string is not an error](http://www.devthought.com/2011/12/22/a-string-is-not-an-error/) so, in an attempt to avoid future issues when developing an application, this module converts all string-based errors that occur on the `PhoneNumberUtil` class to instances of `Error`.

## Tests

A small subset of tests guarantees that the main library functions are working as expected and are correctly exported. The actual heavy lifting is done by `libphonenumber`'s extensive test suite.

```
$ npm test
```

## Acknowledgements

The original library wrapper was created by [Socialcam](https://github.com/Socialcam/node-libphonenumber) who first got it working on node.js and then improved by [mattbornski](https://github.com/mattbornski/libphonenumber). This package would not exist without the work of these previous contributions.

The exceptional work on `libphonenumber` was made possible by these [committers and contributors](https://code.google.com/p/libphonenumber/people/list).

## Licenses

MIT (package) and Apache License 2.0 ([libphonenumber](https://code.google.com/p/libphonenumber/source/browse/trunk/LICENSE)).

[npm-image]: https://img.shields.io/npm/v/google-libphonenumber.svg?style=flat-square
[npm-url]: https://npmjs.org/package/google-libphonenumber
[travis-image]: https://img.shields.io/travis/seegno/google-libphonenumber.svg?style=flat-square
[travis-url]: https://travis-ci.org/seegno/google-libphonenumber
