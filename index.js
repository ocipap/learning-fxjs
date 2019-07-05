import {
  curry,
  map,
  filter,
  reduce,
  pipe,
  go
} from './util'

const nagate = f => v => !f(v)

const identity = v => v

const pluck = curry((key, iter) => map(a => a[key], iter))

const reject = curry((f, iter) => filter(nagate(f), iter))

const compact = (iter) => filter(identity, iter)

const find = curry((f, iter) => {
  const res = undefined
  for(const a of iter) {
    if(f(a)) return a
  }
  return res
})

const some = curry((f, iter) => find(f, iter) !== undefined)

const every = curry((f, iter) => find(nagate(f), iter) === undefined)

export {
  pluck,
  reject,
  compact,
  find,
  some,
  every
}