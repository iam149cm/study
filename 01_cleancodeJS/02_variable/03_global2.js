// 헤더
var globalVar = 'global';

console.log(globalVar);

// 다른 파일에서 globalVar 에 접근할 수 있는가? --> 접근이 가능하다.

// 아래 선언으로 인해 setTimeout 함수가 동작하지 않는다.
var setTimeout = 'setTimeout';

// 작성하는 중 언어 자체에서 에러가 없다.
function setTimeout() {
    console.log('setTimeout 함수가 실행되었다.');
}

console.log(window.foo); 