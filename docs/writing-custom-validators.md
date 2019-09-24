
## Writing custom validators

You can define and use your own custom functions.
A validator is `Function(value)`, where value is the value to validate.

The return value should have two properties:

* error (String|null|undefined).
  * If the validation was ok, should be null
  * If it was not, it should be the error message. Generally this message should be in the form `is ${originalValue} but should <some condition>`
* result (any)
  * The original or transformer value
* break (Boolean|null|undefined)
  * It decides whether to stop validating or not

## Examples

### Validator: email validator

```javascript
import { abides, interp } from 'abides'

function email(value) {
  const re = //gigantic email regex here
  const error = re.test(value) ? null : 'is interp(value) valid email'
  return {
    error,
    result: value,
  }
}

abides('bad-email', [email])
// => { ok: false, self: { error: 'is ''should be a valid email' }, result: 'bad-email' }
```

### Transformer: string coercer (taken from the code)
```javascript
import { abides } from 'abides'

function stringCoerce(value) {
  const error = null
  const result = value.toString()
  return { error, result }
}

abides(15, [stringCoerce])
// => { ok: true, self: { error: null }, result: '15' }
```

### Validator that breaks: nullable (taken from the code)

(Although it doesn't really validate (it just breaks if null) so I should name it something else)
```javascript
import { abides } from 'abides'

function nullable(value) {
  const result = value
  if (value === null || value === undefined) {
    return { result, break: true }
  }
  return { result }
}

abides(null, [nullable, typeOf(String)])
// => { ok: true, errors: [], result: null }
abides(3, [nullable, typeOf(String)])
// => { ok: false, errors: ['is 3 but should be of type String'], result: 3 }
```
