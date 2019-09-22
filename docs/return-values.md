
# Getting started

## arguments

`abides(value, schema)`

### value

* Type: `any`
* Details:

The value to validate.

## return properties

Every `abides(value, schema)` call returns `{ ok: Boolean, result: any, self: { error: String } }`.
It also includes other child properties if the schema has children.

### ok

* Type: `Boolean`
* Details:

`true` if there's no error in the root and nested validations.

### results

* Type: `any`
* Details:

Returns the `value` with whatever transforms were applied to it.

### self

* Type: `{ error: String, ... }`
* Details:

The validation for the **self** value.
I can also contain other likewise validations if there were nested validations.
