![the dude](media/the_dude.jpeg)

[![Build Status](https://travis-ci.org/zzyyxxww/abides.svg?branch=master)](https://travis-ci.org/zzyyxxww/abides)
[![codecov](https://codecov.io/gh/zzyyxxww/abides/branch/master/graph/badge.svg)](https://codecov.io/gh/zzyyxxww/abides)
[![Maintainability](https://api.codeclimate.com/v1/badges/9b3fc076bcfd79e4d780/maintainability)](https://codeclimate.com/github/zzyyxxww/abides/maintainability)

## abides

Modern javascript object validation.  
Validate, default and transform data.

## Why using it

  * Powerful, intuitive and flexible API
  * Increased control of defaults and validations
  * The error messages are nice as hell.
  * Custom validators 
  * I like it

## There are other validators, why this?

I like this API more.

## When to use it

  * Validating usage of your library by other developers
  * Validating data before it enters a database (or any data store)

## Planned changes

  * Adding async support
  * Adding `errors` return prop that contains all errors.
  * Improvement of the 'write your custom validators' section
  * Making the errors more human-readable for things like web forms
  * Ability to validate arrays with the `each` property.
  * Typescript implementation.

## Install

`yarn add abides`  
or npm  
`npm i --save abides`  

## Requirements

* ES2017 (as in, node 8, a modern browser or a babel like library)

## Examples

```javascript
import { abides, ofType, numberCoerce } from 'abides'

abides(5, ofType(Number))
// => { ok: true, $: { error: '' }, result: 5 }
abides('5', ofType(Number))
// => { ok: false, $: { error: 'is \'5\' but should be of type Number' }, result: '5' }
abides('5', [numberCoerce, ofType(Number)])
// => { ok: true, $: { error: null }, result: 5 }
```

### Nested values
```javascript
import { abides, defaultize, required, ofType } from 'abides'

const car = {
  model: 'SuperCharger',
  km: null,
}
const schema = {
  $model: [required, ofType(String)],
  $km: [defaultize(500), ofType(Number)],
  $price: required,
}
const { errors, result } = abides(car, schema)
/* => {
  ok: false,
  result: { model: 'SuperCharger', km: 500, price: undefined },
  $: { error: null },
  $model: { error: null },
  $km: { error: null },
  $price: { error: 'is undefined but should not be null or undefined' }
}
*/
```

## How to run the examples

All the examples in this repo use ES modules.  
node 12 has ES modules support out of the box.  
If you want to try these examples *as is* with a previous version of node, pick one of these:

The `--experimental-modules` flag way
```
node --experimental-modules
```

The `esm` package way (the recommended way for having ES modules in your own package)
```
npm install esm
node -r esm
```
(Needless to say, remember to install abides too)


## Docs

  * [Understanding the pipeline](./docs/pipeline.md)  
  * [Validating nested values](./docs/validating-nested-values.md)  
  * [Shorthand vs Explicit](./docs/shorthand-vs-explicit.md)  
  * [Async support](./docs/async-support.md)  

## API
  * [Built-in functions](./docs/built-in-functions.md)  
  * [Return values](./docs/return-values.md)  

## Contributing

Feel free to, it would put a smile on my face.
In general, if a proposed change is relatively big, it'd be best to discuss it first in an issue.
