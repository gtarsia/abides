
## Validating nested values

This is the juiciest part of the library: abides can validate objects and child properties too.

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
  $: ofType(Object),
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

### The $ property

As you can see the `$` is also included in the return value.  
The value this is validating is the **root** value, as in, the entire `dog` object.  
This way we can have validations for everything in a meaningful way.

### Transformed nested values

As a side note, when a nested property value happens to get **transformed** on validation,  
said transformed value will conveniently show up in the `result` property (as shown with `inYears` in the example).

### The ok value with nested objects

When any of the nested validations has an error, as in a non-empty string as error, the `ok` property is false.  
True otherwise.
