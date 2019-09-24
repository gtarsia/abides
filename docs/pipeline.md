
## Understanding the pipeline

### What is it?
We define the pipeline an array of **functions** that are called **sequentially** (as in, first the first, then the second, and so on).

Some of these functions **validate**, others **transform**.

By that we mean that validators can generate error messages while transformers transform the value.

The pipeline in this example is just made of one element, the built-in `required` validator.  
It ensures that the value isn't `null` or `undefined`.
```javascript
import { abides, required } from 'abides'

abides(null, [required])
// => { ok: false, errors: ['is null but should be defined'], result: null, ... }
```

In this example, we use two built-in functions: `defaultize` (transformer) and `ofType` (validator).

```javascript
import { abides, defaultize, ofType } from 'abides'

abides(null, [defaultize('500'), ofType(String)])
// => { ok: true, errors: [], result: '500', ... }

```
Technically speaking, every function **transforms**. There is no code specification for when
a function either **validates** or **transforms**.

The way the pipeline works is that each function validates (either returns an error or no error).  
But also passes the result to the next function if no errors happened.


### Pipelines that `break`

Analog to what `break` does in a javascript loops, any validation in a pipeline is capable of stopping execution of further validators.

For example, the `nullable` validator does exactly that:
```javascript
import { abides, nullable, typeOf } from 'abides'

abides(null, [nullable, typeOf(String)])
// => { ok: true, errors: [], result: null }
abides(3, [nullable, typeOf(String)])
// => { ok: false, errors: ['is 3 but should be of type String'], result: 3 }
```

### Validators or transformers

Validators and transformers are not **mutually exclusive**.  
For example, the built-in function `numberCoerce` tries to transform
to number, but also errors if the value can't be transformed to number (validates).

