const curry = f => (a, ..._) => (_.length < 1) ?  (..._) => f(a, ..._) : f(a, ..._)

const map = curry((f, iter) => {
  const res = []
  for(const a of iter) {
    res.push(f(a))
  }
  return res
})

const filter = curry((f, iter) => {
  const res = []
  for(const a of iter) {
    if(f(a)) res.push(a)
  }
  return res
})

const reduce = (f, acc, iter) => {
  if(!iter) {
    iter = acc[Symbol.iterator]()
    acc = iter.next().value
    return reduce(f, acc, iter)
  }
  for(const a of iter) {
    acc = f(acc, a)
  }
  return acc
}

const pipe = (...fs) => val => reduce((a, f) => f(a), val, fs)

const go = (val, ...fs) => pipe(...fs)(val)

export {
  curry,
  map,
  filter,
  reduce,
  pipe,
  go
}