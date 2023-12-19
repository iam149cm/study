// 호이스팅 : 선언과 할당이 분리된 것. (런타임 시기에 선언부가 먼저 실행되는 것)
// 바로 선언한 변수가 초기화가 되어있지 않아도 선언부가 먼저 실행되어 undefined가 할당된다.

var global = 0;
function outer() {
    // 선언과 할당 부분이 메모리 공간을 선언하기 전에 먼저 실행된다.
    console.log (global); // undefined 👈👈
    var global = 5;

    function inner() {
        var global = 10;
        console.log(global); // 10
    }

    inner();
    global = 1;
    console.log(global); // 1
}

outer();

// 호이스팅이 일어나는 이유 : var 는 함수 스코프를 가지고 있기 때문에 함수가 실행되기 전에 선언부가 먼저 실행된다.

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥


function duplicatedVar(){
    var a;
    console.log(a); // undefined ... 런타임에서는 잡아낼 수 없다.

    var a = 100;
    console.log(a); // 100
}

console.log(duplicatedVar()); // undefined



// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

var sum; 
console.log('👉 sum 의 타입은 : ', typeof sum); // function
console.log(sum()); // --> 10. 가장 마지막에 선언된 함수가 호이스팅된다.

// 함수도 호이스팅 된다. 함수 선언문으로 변수를 뒤집어씌운다.
function sum(){
    return 1+2;
};
function sum(){
    return 1+2+3;
};
function sum(){
    return 1+2+3+4;
};

// 어떻게 해결할까? --- 변수 선언 -> 할당 -> 초기화 완료 -> 정확한 분리!
var sum = 100;
console.log(sum); // 100
console.log(typeof sum); // number ---> 정확한 분리!

function sum(){
    return 1+2;
};
function sum(){
    return 1+2+3;
};
function sum(){
    return 1+2+3+4;
};

// 함수를 만들 때 const 를 사용해서 변수를 만든 후 함수를 할당하는 방식. 실수할 여지를 줄인다
// 함수 표현식. 익명함수를 만들어 변수에 할당하는 방식.
const ssum = function(){
    return 1+2;
};
console.log('const 를 사용한 sum 의 type 👉 ', ssum()); 

/*
- 호이스팅 : 런타임 시 선언이 최상단으로 끌어올려짐.
- 코드를 작성할 때 예측하지 못한 실행 결과가 노출될 수 있다. --> 개발 유지보수가 어려워진다.
- var는 호이스팅이 일어난다. (var 는 함수 스코프) 👉 let 과 const 를 사용한다.
- 함수도 호이스팅이 일어난다. 👉 함수표현식을 사용한다.
*/

