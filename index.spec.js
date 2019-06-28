import {pluck, reject, compact, find, some, every} from  "./index.js"
import { describe } from 'mocha'
import chai from 'chai'

chai.should();

const odd = a => a % 2
const add = (a, b) => a + b

const people = [
  {name: 'a', age: 10, gender: 'male'},
  {name: 'b', age: 20, gender: 'female'},
  {name: 'c', age: 30, gender: 'male'},
  {name: 'd', age: 40, gender: 'female'},
  {name: 'e', age: 50, gender: 'male'},
]

const iter = [1, 2, 3, 4, 5]
const str = "ABCDE"

const identity = v => v

describe("::: pluck function", () => {
  it("기능 Test", () => {
    const res = pluck('age', people)
    res.should.be.deep.equal([10, 20, 30, 40, 50])
  })

  it("커링 Test", () => {
    const res = pluck('name')(people)
    res.should.be.deep.equal(['a', 'b', 'c', 'd', 'e'])
  })
})

describe("::: reject function", () => {
  it("배열 Test", () => {
    const res = reject(odd, iter)
    res.should.be.deep.equal([2, 4])
  })

  it("문자열 Test", () => {
    const res = reject(v => v.charCodeAt(0) % 2, str);
    res.should.be.deep.equal(['B', 'D'])
  })

  it("커링 Test", () => {
    const res = reject(odd)(iter)
    res.should.be.deep.equal([2, 4])
  })
})

describe("::: compact function", () => {
  it("기능 Test", () => {
    const res = compact([1, 2, 3, undefined, null])
    res.should.be.deep.equal([1, 2, 3])
  })
})


describe("::: find function", () => {
  it("배열 Test", () => {
    const res = find(v => v > 3, iter)
    res.should.be.equal(4)
  })

  it("문자열 Test", () => {
    const res = find(v => v == "C", str)
    res.should.be.equal("C")
  })

  it("커링 Test", () => {
    const res = find(v => v > 3)(iter)
    res.should.be.equal(4)
  })
})

describe("::: some & every function", () => {
  it("some 기능 Test", () => {
    const res1 = some(identity, [false, false, false, true])
    const res2 = some(identity, [false, false, false])
    res1.should.be.equal(true)
    res2.should.be.equal(false)
  })

  it("every 기능 Test", () => {
    const res1 = every(identity, [true, true, true])
    const res2 = every(identity, [true, false, false])
    res1.should.be.equal(true)
    res2.should.be.equal(false)
  })

  it("some 커링 Test", () => {
    const res = some(identity)([false, false, false, true])
    res.should.be.equal(true)
  })

  it("every 기능 Test", () => {
    const res = every(identity)([true, true, true])
    res.should.be.equal(true)
  })
})