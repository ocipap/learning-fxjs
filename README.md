# learning-fxjs

여러가지 fx.js의 유틸 함수를 만들면서 원리를 이해합니다.

### 사용방법

패키지 설치를 진행합니다.
```
npm install
```

각각의 level마다 구현할 함수들이 `index.spec.js` test 파일에 작성되어있고, level 에 따라 `util.js` 파일에 사용할 수 있는 util 함수들을 작성해놓았습니다.

```
npm test
```
위 명령을 통해 해당 level 을 테스트할 수 있습니다.

fx.js library : https://github.com/marpple/FxJS

### [level1](https://github.com/ocipap/learning-fxjs/tree/level1)
- 기본 유틸 함수인  map, filter, reduce 를 만들어 봅니다.
- 커링을 지원하는 curry 함수를 만들어 봅니다.
- 함수 합성을 도와주는 pipe 함수와 go 함수를 만들어 봅나다.
