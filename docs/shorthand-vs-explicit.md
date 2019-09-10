## shorthand vs explicit

There are some synonymic ways to define the pipeline of a schema

These are all equivalent:

```javascript
abides(1, required) // shorthand single element
abides(1, [required]) // shorthand array
abides(1, { // explicit single element
  $: required
})
abides(1, { // explicit array
  $: [required]
})
```

These are equivalent too for validating children:

```javascript
const car = {
  color: 'white'
}
abides(car, { $color: [required] })
abides(car, {
  $color: {
    $: [required]
  }
})
```
