
## Understanding the pipeline

We define the pipeline an array of **functions** that are called **sequentially** (as in, first one, then the second, and so on).

Some of these functions **validate**, others **transform**.

By that we mean that validators can generate error messages while transformers transform the value.

The pipeline in this example is just made of one element, the built-in `required` validator.  
It ensures that the value isn't `null` or `undefined`.
```javascript
import { abides, required } from 'abides'

abides(null, [required])
// => { ok: false, $: { error: 'is null but should be defined' }, result: null }
```

In this example, we use two built-in functions: `defaultize` (transformer) and `ofType` (validator).

```javascript
import { abides, defaultize, ofType } from 'abides'

abides(null, [defaultize('500'), ofType(String)])
// => { ok: true, $: { error: null }, result: '500' }

```
Technically speaking, every function **transforms**. There is no code specification for when
a function either **validates** or **transforms**.

The way the pipeline works is that each function validates (either returns an error or no error).  
But also passes the result to the next function if any.

Validators and transformers are not mutually exclusive.  
For example, the built-in function `numberCoerce` tries to transform
to number, but also errors if the value can't be transformed to number (validates).

