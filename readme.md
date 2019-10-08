![the dude](media/the_dude.jpeg)

[![Build Status](https://travis-ci.org/zzyyxxww/abides.svg?branch=master)](https://travis-ci.org/zzyyxxww/abides)
[![codecov](https://codecov.io/gh/zzyyxxww/abides/branch/master/graph/badge.svg)](https://codecov.io/gh/zzyyxxww/abides)
[![Maintainability](https://api.codeclimate.com/v1/badges/9b3fc076bcfd79e4d780/maintainability)](https://codeclimate.com/github/zzyyxxww/abides/maintainability)

## abides

modern javascript object validation.  
validate, default and transform data.

not production ready yet, use at own risk.

  * lightweight (~1kb min+gzipped bundled)
  * only 3 deps (lodash, esm and fromentries polyfill)
  * non-obscure control of validation

## example

```javascript
import { abides, ofType, numberCoerce } from 'abides'

abides(5, ofType(Number))
// => { ok: true, errors: [], self: { error: '' }, result: 5 }
abides('5', ofType(Number))
/* => {
  ok: false,
  self: { error: 'is '5' but should be of type Number' },
  errors: ['is '5' but should be of type Number'],
  result: '5'
} */
abides('5', [numberCoerce, ofType(Number)])
// => { ok: true, errors: [], self: { error: null }, result: 5 }
```

## more examples

  * [Nested values](./docs/examples/nested-values.md)  
  * [Shorthand vs explicit](./docs/examples/shorthand-vs-explicit.md)  
  * [Array validation](./docs/examples/array-validation.md)  

## install

`yarn add abides`  
or npm  
`npm i --save abides`  

## planned changes

  * validator caching
  * async support
  * web forms ready errors
  * typescript implementation

## requirements

* ES2017 (as in, node 8, a modern browser or a babel like library)

## other docs

  * [API](./docs/api.md)  
  * [Understanding the pipeline](./docs/pipeline.md)  
  * [Throw on errors](./docs/throw-on-errors.md)  
  * [Async support](./docs/async-support.md)  

## open to contributions

help is needed in:
* typescript definition and type check tests.
