
## Validating nested values

This is the juiciest part of the library: objects and their properties can be validated. Deep properties can so too.

Properties in a schema whose name start with `$` are interpreted as objects to validate.
So if there's a `color` property in the value, the `$color` property in the schema is a schema in itself of that property.

```javascript
import {
  abides, notEmpty, numberCoerce, ofType, defaultize,
} from 'abides'

const dog = {
  color: '',
  owner: '',
  age: {
    inYears: '5'
  },
}
const schema = {
  pipeline: ofType(Object),
  $color: [defaultize('white'), ofType(String)],
  $owner: [notEmpty, ofType(String)],
  $age: {
    $inYears: numberCoerce,
  }
}
abides(dog, schema)
/* => {
  ok: true,
  result: {
    color: 'white'
    owner: '',
    age: {
      inYears: 5
    },
  },
  $: { error: null },
  $color: { error: null },
  $owner: { error: 'is undefined but should not be empty' },
  $age: { 
    error: null,
    $inYears: null,
  },
}
*/
```

As you can see the `$` is also included in the return value.
The value this is validating is the **root** value, as in, the entire `dog` object.
This way we can have validations for everything in a meaningful way.
