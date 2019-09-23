
# Built-in functions

## Base

#### defaultize

Transforms the value to a specified one, if the original value is `null` or `undefined`.
```javascript
import { abides, defaultize } from 'abides'

abides(null, [defaultize(500)])
// => { ok: true, errors: [], result: 500, ... }
```
#### notEmpty

Errors if value is not an empty object, collection, map, or set.
Based on lodash `isEmpty`
```javascript
import { abides, notEmpty } from 'abides'

abides([], notEmpty) // => { ok: false, errors: ['is [] but should not be empty'], result: [], ... }
abides([1], notEmpty) // => { ok: true, errors: [], result: [], ... }
```

#### isPlainObject

Errors if value is not a plain object.
```javascript
import { abides, isPlainObject } from 'abides'

abides([], [isPlainObject]) // => { ok: false, errors: ['is [] but should be a plain object'], result: [], ... }
abides({}, [isPlainObject]) // => { ok: true, errors: [], result: [], ... }
```

#### ofType

Errors if value is not of the specified type
```javascript
import { abides, ofType } from 'abides'

abides([], ofType(String)) // => { ok: false, errors: ['is [] but should be of type String'], result: [], ... }
abides('', ofType(String)) // => { ok: true, errors: [], result: [], ... }
abides([], ofType(Object)) // => { ok: true, errors: [], result: [], ... }
// Yes! Arrays are objects in js, use isPlainObject for this case.
```

#### required

Errors if value is `null` or `undefined`.
```javascript
import { abides, required } from 'abides'

abides(null, [required])
// => { ok: true, self: { 'is null but should not be null or undefined' }, result: null }
```


## String

#### stringCoerce

Coerces value to string (calls `toString` if method exists, interpolates otherwise)
```javascript
import { abides, stringCoerce } from 'abides'

abides(5, [stringCoerce])
// => { ok: true, errors: [], result: '5', ... }
```

## Number

#### numberCoerce

If value is string, transforms it to `Number`.  
Initially runs `parseFloat` on value.
Errors if result is `NaN`, otherwise returns `Number(value)`.

```javascript
import { abides, numberCoerce } from 'abides'

abides('15', [numberCoerce])
// => { ok: true, errors: [], result: 15, ... }
```
