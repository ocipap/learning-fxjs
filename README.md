# level2

level1 에서 작성한 함수들을 응용한 함수들 구현

### pluck (curry)
key를 통해 객체배열의 value 배열을 리턴
```js
const arr = [
  {name: 'a', age: 10, gender: 'male'},
  {name: 'b', age: 20, gender: 'female'},
  {name: 'c', age: 30, gender: 'male'},
  {name: 'd', age: 40, gender: 'female'},
  {name: 'e', age: 50, gender: 'male'},
]

pluck('age', arr)
// [10, 20, 30, 40, 50]
```

### reject (curry)
filter 함수와 반대로 거짓으로 평가되는 값을 리턴
```js
const arr = [1, 2, 3, 4, 5]

reject(v => v < 3, arr)
// [3, 4, 5]
```

### compact
null, undefined 값을 제외한 값을 리턴
```js
const arr = [1, 2, 3, undefined, null]

compact(arr)
// [1, 2, 3]
```

### find (curry)
요소중 조건이 참이되는 첫번째 값을 리턴
```js
const arr = [11, 3, 4, 18, 19]
find(v => v < 4, arr)
// [3]
```

### some (curry)
요소들중 하나라도 조건에 참이 있으면 true, 그렇지 않다면 false
```js
some(v => v, [false, false, false, true])
// true
```

### every (curry)
요소들 전체가 조건에 참이라면 true, 그렇지 않다면 false
```js
every(v => v, [true, true, true])
// true

every(v => v, [true, true, false])
// false  
```