![the dude](media/the_dude.jpeg)

[![Build Status](https://travis-ci.org/zzyyxxww/abides.svg?branch=master)](https://travis-ci.org/zzyyxxww/abides)
[![codecov](https://codecov.io/gh/zzyyxxww/abides/branch/master/graph/badge.svg)](https://codecov.io/gh/zzyyxxww/abides)
[![Maintainability](https://api.codeclimate.com/v1/badges/9b3fc076bcfd79e4d780/maintainability)](https://codeclimate.com/github/zzyyxxww/abides/maintainability)

## abides

Modern javascript object validation.  
Validate, default and transform data.

Not production ready yet, use at own risk.

## Why using it

  * Powerful, intuitive and flexible API
  * Increased control of defaults and validations
  * The error messages are nice as hell.
  * Custom validators 
  * I like it

## Example

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

## More examples

  * [Nested values](./docs/examples/nested-values.md)  
  * [Shorthand vs explicit](./docs/examples/shorthand-vs-explicit.md)  
  * [Array validation](./docs/examples/array-validation.md)  

## Install

`yarn add abides`  
or npm  
`npm i --save abides`  

## Planned changes

  * Validator caching
  * Adding async support
  * Making the errors more human-readable for things like web forms
  * Typescript implementation

## Requirements

* ES2017 (as in, node 8, a modern browser or a babel like library)

## Other docs

  * [API](./docs/api.md)  
  * [Understanding the pipeline](./docs/pipeline.md)  
  * [Throw on errors](./docs/throw-on-errors.md)  
  * [Async support](./docs/async-support.md)  

## open to contributions

help is needed in:
* typescript definition and type check tests.
