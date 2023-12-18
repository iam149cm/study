## function scope & block scope

```
var global = '전역';

if (global == ('전역')) {
    var global = '지역';

}

console.log(global); 👉 지역. (전역공간까지 영향을 미침)
👉 이유 : var 는 함수단위. 그래서 블럭단위 스코프로 바꾸어야 한다.
```

```
let global = '전역';

if (global == ('전역')) {
    let global = '지역'; 👉 지역.
}

console.log(global); 👉 전역

```