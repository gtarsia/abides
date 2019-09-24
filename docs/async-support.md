
## Async support

*TODO: This is the proposed API but it's not implemented yet*

### abidesAsync(value, schema)

This method returns a promise, and does a `await Promise.resolve` on every return of every pipeline function.

```javascript
import { abidesAsync, interp } from 'abides'
const user = {
  id: 5
}

// interp pretty prints any value as a string
async function isRegistered(value) {
  const isRegistered = await someAsyncOperation()
  if (isRegistered) {
    return { result: value }
  }
  const error = `user is ${interp(value)} but should be registered`
  return { result: value, error }
}

await abidesAsync(user, [isRegistered])
// => { ok: false: self: { error: 'user is ... but should be registered' } }
```
