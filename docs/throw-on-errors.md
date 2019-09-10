
# Throw on errors

Setting the property `opts.throw` as `true`, makes `abides` throw if there is at least
one error in `errors`.


```javascript
  const value = 'John'
  const schema = ofType(Number)
  const opts = { throw: true }
  abides(value, schema, opts)
  // Throws error 'is \'John\' but should be of type Number'
```
