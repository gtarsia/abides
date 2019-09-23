
# Getting started

## arguments

`abides(value, schema)`

### value

* Type: `any`
* Details:

The value to validate.

## *returns*

* Type: `Validation`

Every `abides(value, schema)` call returns a `Validation` object.
```javascript
{
  ok: Boolean,
  errors: Array,
  result: any,
  selfError: String
}
```
It also includes other child properties if the schema has children.

### ok

* Type: `Boolean`
* Details:

`true` if there's no error in the root and nested validations.

### results

* Type: `any`
* Details:

Returns the `value` with whatever transforms were applied to it.

### errors

* Type: `Array`
* Details:

Contains all the errors of the validation.

### selfError

* Type: `String`
* Details:

The validation for the *self* value.

### $<child-property>

* Type: `Validation`
* Details:

These are the validations for the children in schema.
