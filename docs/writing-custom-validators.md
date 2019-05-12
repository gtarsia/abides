
## Writing custom validators

*TODO: This section needs to better explain the standardized way of creating your custom validator*

You can define and use your own custom functions.
The return value should have two properties:

* error (String|null).
  * If the validation was ok, should be null
  * If it was not, it should be the error message. Generally this message should be in the form `is ${originalValue} but should <some condition>`
* result (any)
  * This value 

### Example (validator)

```javascript
function email(value) {
  const re = //gigantic email regex here
  const error = re.test(value) ? null : 'is interp(value) valid email'
  return {
    shouldBe,
    value,
  }
}

abides('bad-email', [email])
// => { ok: false, $: { error: 'should be a valid email' }, result: 'bad-email' }
```

### Example (transformer)
```javascript
function stringCoerce(value) {
  const error = null
  const result = value.toString()
  return { error, result }
}

abides(15, [stringCoerce])
// => { ok: true, $: { error: null }, result: '15' }
```
