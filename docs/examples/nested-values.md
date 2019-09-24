
### Nested values

To target nested values, we prepend the `$` to the properties in schema.
The reason for this is to avoid collision with other properties that we can use in schema.

```javascript
import { abides, defaultize, required, ofType } from 'abides'

const car = {
  model: 'SuperCharger',
  km: null,
}
const schema = {
  $model: [required, ofType(String)],
  $km: [defaultize(500), ofType(Number)],
  $price: required,
}
const { errors, result } = abides(car, schema)
/* => {
  "ok": false,
  "result": {
      "model": "SuperCharger",
      "km": 500
  },
  "validation": {
      "error": null,
      "$model": {
          "error": null
      },
      "$km": {
          "error": null
      },
      "$price": {
          "error": "is undefined but should not be null or undefined"
      }
  },
  "errors": [
      ".price is undefined but should not be null or undefined"
  ]
}

*/
```
