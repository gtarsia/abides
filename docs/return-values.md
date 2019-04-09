
# Getting started

## arguments

`abides(value, schema)`

### value

* Type: `any`
* Details:

It can be any value possible that you want to validate.


## return properties

Every `abides(value, schema)` call returns `{ ok: Boolean, result: any, $: { error: String } }`.
It also includes other child properties if the schema has children.

### ok

* Type: `Boolean`
* Details:

`true` if the root

### errors

* Type: `Array`
* Details:

List of errors where `value` didn't comply with `schema`.

### results

* Type: `any`
* Details:

Returns the `value` with whatever transforms were applied to it.
