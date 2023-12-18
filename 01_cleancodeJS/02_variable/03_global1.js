// 헤더
var globalVar = 'global';

console.log(globalVar);

// 다른 파일에서 globalVar 에 접근할 수 있는가? --> 접근이 가능하다.

setTimeout(() => {
    console.log('1 초 후에 찍힌다');
}, 1000);


const array = [1, 2, 3];
for (var index=0; index < array.length; index++) {
    const element = array[index];
}


// var 는 전역 공간에서도 볼 수 있다.

// 여기서는 console.log 를 찍지 않았는데 다른 파일에서는 console.log 를 찍었을 때
// console 에 찍힌다. --> 전역으로 선언하였기 때문.

window.foo = 'bar';