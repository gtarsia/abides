
# Built-in functions

## Base

#### defaultize

Transforms the value to a specified one, if the original value is `null` or `undefined`.
```javascript
import { abides, defaultize } from 'abides'

abides(null, [defaultize(500)])
// => { ok: true, error: null, result: 500 }
```
#### notEmpty

Errors if value is not an empty object, collection, map, or set.
Based on lodash `isEmpty`
```javascript
import { abides, notEmpty } from 'abides'

abides([], notEmpty) // => { ok: false, $: { error: 'is [] but should not be empty' }, result: [] }
abides([1], notEmpty) // => { ok: true, $: { error: null }, result: [] }
```

#### isPlainObject

Errors if value is not a plain object.
```javascript
import { abides, isPlainObject } from 'abides'

abides([], [isPlainObject]) // => { ok: false, $: { error: 'is [] but should be a plain object' }, result: [] }
abides({}, [isPlainObject]) // => { ok: true, $: { error: null }, result: [] }
```

#### required

Errors if value is `null` or `undefined`.
```javascript
import { abides, required } from 'abides'

abides(null, [required])
// => { ok: true, $: { 'is null but should not be null or undefined' }, result: null }
```


## String

#### stringNotEmpty

Errors if and only if the value is an empty string (allows every other value).
```javascript
import { abides, stringNotEmpty } from 'abides'

abides('', [stringNotEmpty])
// => { ok: false, $: { error: 'is should be non-empty string' }, result: '' }
abides(null, [stringNotEmpty])
// => { ok: true, $: { error: null }, result: null }
```

#### stringCoerce

Coerces value to string (calls `toString` if method exists, interpolates otherwise)
```javascript
import { abides, stringCoerce } from 'abides'

abides(5, [stringCoerce])
// => { ok: true, $: { error: null }, result: '5' }
```

## Number

#### numberCoerce

If value is string, transforms it to `Number`.  
Initially runs `parseFloat` on value.
Errors if result is `NaN`, otherwise returns `Number(value)`.

```javascript
import { abides, numberCoerce } from 'abides'

abides('15', [numberCoerce])
// => { ok: true, $: { error: null }, result: 15 }
```
