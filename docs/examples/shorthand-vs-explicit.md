## shorthand vs explicit

There are some synonymic ways to define the pipeline of a schema.
This is to save time when validating `self`.

These are all equivalent:

```javascript
abides(1, required) // shorthand single element
abides(1, [required]) // shorthand array
abides(1, { // explicit single element
  self: required
})
abides(1, { // explicit array
  self: [required]
})
```

These are equivalent too for validating children:

```javascript
const car = {
  color: 'white'
}
abides(car, {
  $color: [required]
})
abides(car, {
  $color: {
    self: [required]
  }
})
```
