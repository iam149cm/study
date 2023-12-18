## Var 를 지양하자
- let, const 가 ES2015 에서 추가되었다.

|var|let & const|
|:---:|:---:|
|함수스코프|블록 스코프|
|-|TDZ (Temporal Dead Zone)|
|-|👉 안전한 코드 작성이 가능하다|

```
var name = '이름1';
var name = '이름2';
var name = '이름3';
console.log(name);

👉 가장 마지막에 할당한 변수가 나온다.
👉 소스코드가 10000 line 이 넘어갈 경우 ?? 위험함!
```

```
let name = '이름1';
let name = '이름2';
let name = '이름3';

👉 에러가 발생한다. 이미 선언했기 때문에 또 한번 사용할 수 없다. 
👉 안전하다.

```

## let 과 const 의 차이?
- let 은 선언 후 언제든지 재할당 가능하다.
- const 는 재할당이 불가능하다.
```
let name;
name = '이름1';
name = '이름2';

const name1;
name1 = '이름1';
name1 = '이름2'; // 에러 발생함
```