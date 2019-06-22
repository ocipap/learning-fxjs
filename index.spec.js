import {curry, map, filter, reduce, pipe, go} from './index.js';
import { describe } from "mocha";
import chai from 'chai'

chai.should();

const iter = [1, 2, 3, 4, 5];
const str = "ABC";

const add = (a,b) => a + b;

describe('커링을 적용시켜주는 curry 함수를 만들자.', () => {
  it("# add 함수 커링 test 1", () => {
    const add_c = curry(add);
    const res = add_c(5)(10);
    res.should.be.equal(15);
  });

  it("# add 함수 커링 test 2", () => {
    const add_c = curry(add);
    const res = add_c(5, 10);
    res.should.be.equal(15);
  });
});

describe('이터러블 프로토콜을 이용한 map을 만들자. (커링 적용)', () => {
  it('# 배열 test', () => {
    const res = map(v => v + 10, iter);
    res.should.be.deep.equal([11, 12, 13, 14, 15]);
  });

  it('# 문자열 test', () => {
    const res = map(v => `${v}${0}`, str);
    res.should.be.deep.equal(['A0', 'B0', 'C0' ]);
  });

  it('# 커링 test', () => {
    const res = map(v => v + 10)(iter);
    res.should.be.deep.equal([11, 12, 13, 14, 15]);
  });
});

describe('이터러블 프로토콜을 이용한 filter를 만들자. (커링 적용)', () => {
  it('# 배열 test', () => {
    const res = filter(v => v % 2 ,iter);
    res.should.be.deep.equal([1, 3, 5]);
  });
  it('# 문자열 test', () => {
    const res = filter(v => v.charCodeAt(0) % 2, str);
    res.should.be.deep.equal(['A', 'C']);
  });
  it('# 커링 test', () => {
    const res = filter(v => v % 2)(iter);
    res.should.be.deep.equal([1, 3, 5]);
  });
});

describe('이터러블 프로토콜을 이용한 reduce를 만들자.', () => {
  it('# 인자가 2개인 경우', () => {
    const res = reduce(add, iter);
    res.should.be.equal(15)
  });
  it('# 인자가 3개인 경우', () => {
    const res = reduce(add, 10, iter);
    res.should.be.equal(25)
  });
});

describe('함수 합성을 도와주는 pipe 함수를 만들자.', () => {
  it("# 단순 값 테스트", () => {
    const res = pipe(
      a => a + 10,
      a => a + 100,
      a => a + 1000
    );
    res(1).should.be.equal(1111);
  });

  it("이터러블 값 테스트", () => {
    const res = pipe(
      map(a => a + 10),
      filter(a => a % 2)
    );
    res(iter).should.be.deep.equal([11, 13, 15])
  })
});

describe("초기값과 합성 함수를 받아 합성 함수에 초기값을 적용사키는 go 함수를 만들자.", () => {
  it("# 단순 값 테스트", () => {
    const res = go(
      1,
      a => a + 10,
      a => a + 100,
      a => a + 1000
    );
    res.should.be.equal(1111);
  });

  it("이터러블 값 테스트", () => {
    const res = go(
      iter,
      map(a => a + 10),
      filter(a => a % 2)
    );
    res.should.be.deep.equal([11, 13, 15])
  })
})
