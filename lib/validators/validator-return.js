export function ok({ result }) {
  return { ok: true, error: null, result }
}

export function notOk({ error, result }) {
  return { ok: false, error, result }
}
