![the dude](media/the_dude.jpeg)

0.1.0 release
85% codecov

I'll add some badges here shortly.

## abides

Modern javascript object validator for NodeJs.  
Validate, default and transform data.

## Why using it

  * Powerful, intuitive and flexible API
  * Increased control of defaults and validations
  * The error messages are nice as hell.
  * Only lodash as current real dep.
  * Custom validators 
  * I like it

## There are other validators, why this?

I like this API more.

## When to use it

  * Validating usage of your library by other developers
  * Validating data before it enters a database (or any data store)

## Planned changes

  * Adding async support
  * Improvement of the 'write your custom validators' section
  * Making the errors more human-readable for things like web forms
  * Easier way of installing (since I'm only targetting `node` and using `esm`)
  * Ability to validate arrays with the `each` property.

## Install

`yarn add abides`  
or npm  
`npm i --save abides`  

## Requirements

* Node 8 at least

I promise I'll target web at some point.

## Examples

```javascript
import { abides, ofType, numberCoerce } from 'abides'

abides(5, ofType(Number))
// => { ok: true, error: '', result: 5 }
abides('5', ofType(Number))
// => { ok: false, error: 'is \'5\' but should be of type Number', result: '5' }
abides('5', [numberCoerce, ofType(Number)])
// => { ok: true, error: null, result: 5 }
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
  ok: true,
  result: { model: 'SuperCharger', km: 500, price: null }
  $: { error: null },
  $model: { error: null },
  $km: { error: null },
  $price: { error: 'is undefined but should not be null or undefined' },
}
*/
```

## Docs

  * [Understanding the pipeline](./docs/pipeline.md)  
  * [Validating nested values](./docs/validating-nested-values.md)  
  * [Shorthand vs Explicit](./docs/shorthand-vs-explicit.md)  
  * [Async support](./docs/async-support.md)  

## API
  * [Built-in functions](./docs/built-in-functions.md)  
  * [Return values](./docs/return-values.md)  

## Contributing

Feel free to, I would put a smile on my face.
It'd be best to discuss changes on issues first, but it's not a hard rule.
