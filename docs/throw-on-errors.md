
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

# Log on errors

When setting the property `opts.log` as `stderr|stdout`, makes `abides` call `console.error|console.log` if there is at least
one error in `errors`.
If the `opts.log` is a function, it passes the error as first argument.

```javascript
  const value = 'John'
  const schema = ofType(Number)
  const opts = { log: true }
  abides(value, schema, opts)
  // stderr output: 'is \'John\' but should be of type Number'
```
