
### Array validation

We can validate every element of arrays using a schema property `each`.
In this case, we also 
We also can

```javascript
import { abides, ofType, numberCoerce } from 'abides'

const people = [{
  name: null,
  age: 35,
  cars: [{ brand: 'Ferrari', price: 'asd' }],
}, {
  name: 'James',
  age: '20',
  cars: [{ brand: 'Mitsubishi', price: '15' }, { brand: null }] },
]
function atLeastOneLambo(value) {
  const found = value.find(({ cars }) => cars.find(({ brand }) => brand === 'Lamborghini'))
  if (found) {
    return { result: value }
  }
  const error = 'there was none but there should be at least one Lamborghini owner' 
  return { result: value, error }
}
const schema = {
  self: atLeastOneLambo,
  each: {
    $name: ofType(String),
    $age: [nullable, numberCoerce],
    $cars: {
      each: {
        $brand: [notEmpty, ofType(String)],
        $price: [nullable, numberCoerce],
      },
    },
  }
}
abides(people, schema)

/* => {
  ok: false,
  result: [
    { name: null, age: 35, cars: [{ brand: 'Ferrari', price: 'asd' }], },
    { name: 'James', age: 20, cars: [ { brand: 'Mitsubishi', price: 15 }, { brand: null, price: undefined } ]
 },
 }
  ],
  errors: [
    'there was none but there should be at least one Lamborghini owner',
    '[0].name is null but should be of type String',
    "[0].cars[0].price is 'asd' but should be able to coerce to Number",
    '[1].cars[1].brand is null but should not be empty'
  ]
  validation: {
    "error": "there was none but there should be at least one Lamborghini owner",
    "errorEach": [
        {
            "error": null,
            "$name": {
                "error": "is null but should be of type String"
            },
            "$age": {
                "error": null
            },
            "$cars": {
                "error": null,
                "errorEach": [
                    {
                        "error": null,
                        "$brand": {
                            "error": null
                        },
                        "$price": {
                            "error": "is 'asd' but should be able to coerce to Number"
                        }
                    }
                ]
            }
        },
        {
            "error": null,
            "$name": {
                "error": null
            },
            "$age": {
                "error": null
            },
            "$cars": {
                "error": null,
                "errorEach": [
                    {
                        "error": null,
                        "$brand": {
                            "error": null
                        },
                        "$price": {
                            "error": null
                        }
                    },
                    {
                        "error": null,
                        "$brand": {
                            "error": "is null but should not be empty"
                        },
                        "$price": {
                            "error": null
                        }
                    }
                ]
            }
        }
    ]
}
}
*/
```
