# API
* [abides](#abidesfunctionvalue-schema)
   * [arguments](#arguments)
   * [<em>returns</em>](#returnsvalidation)
* [Built-in validators](#built-in-validators)
   * [Base](#base)
      * [nullable](#nullable)
      * [defaultize](#defaultize)
      * [notEmpty](#notempty)
      * [isPlainObject](#isplainobject)
      * [ofType](#oftype)
      * [required](#required)
   * [String](#string)
      * [stringCoerce](#stringcoerce)
   * [Number](#number)
      * [numberCoerce](#numbercoerce)

## abides:function(value, schema, opts)

The main function used to validate synchronously.

### arguments

#### value:any

The value to validate.

#### schema:Function|Array|Object

The schema to validate the value with.

#### opts:Object|null

If property `throw` is set to true, errors throw.

### *returns*:Validation

Every `abides(value, schema)` call returns a `Validation` object.
```javascript
{
  ok: Boolean,
  errors: Array,
  result: any,
  selfError: String,
  [$<child1>: Validation],
  [$<child2>: Validation],
}
```
It can also include child validations if the schema has children. The keys of these children start with the `$` char.

#### ok:Boolean
`true` if there's no error in the root and nested validations.

#### results:any
Returns the `value` with whatever transforms were applied to it.

#### errors:Array
Contains all the errors of the validation.

#### selfError:String|null
The error (if any) for the *self* value.

#### $\<child-property>:Validation
These are the validations for the children in schema.

## Built-in validators

### Base

#### nullable

Breaks pipeline if value is null or undefined.
```javascript
import { abides, nullable, ofType } from 'abides'

abides(null, [nullable, ofType(String)])
// => { ok: true, errors: [], result: null, ... }
abides(3, [nullable, ofType(String)])
// => { ok: false, errors: ['is 3 but should be of type String'], result: 3, ... }
```

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

### String

#### stringCoerce

Coerces value to string (calls `toString` if method exists, interpolates otherwise)
```javascript
import { abides, stringCoerce } from 'abides'

abides(5, [stringCoerce])
// => { ok: true, errors: [], result: '5', ... }
```

### Number

#### numberCoerce

If value is string, transforms it to `Number`.  
Initially runs `parseFloat` on value.
Errors if result is `NaN`, otherwise returns `Number(value)`.

```javascript
import { abides, numberCoerce } from 'abides'

abides('15', [numberCoerce])
// => { ok: true, errors: [], result: 15, ... }
```
