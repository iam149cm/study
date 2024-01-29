/** Pure Function : 부작용을 일으키지 않는 함수.
 * - 호출할 때 마다 일관적인 결과를 반환한다.
 * 
 * - 사용자가 어떤 값을 넣을지 제어하기 어렵다.
 * - ex. 리덕스는 자바스크립트 앱을 예측하기 쉽게 만들어주는 상태 컨테이너이다.
 * - 리덕서의 리듀서는 순수함수를 사용한다. 이유 : 사이드 에픽트가 있어서는 안된다.
 * 
 */

let num1 = 10;
let num2 = 20;

// 순수하지 않은 함수.
function impureSum1(){
    return num1 + num2;
}

impureSum1(); // 무조건 30 을 반환한다. 그런데 누군가가 num1, num2 를 변경한다면?

num1 = 30;
impureSum1(); // 50 을 반환한다. --> 순수하지 않은 함수.

function impureSum2(newNum){
    return num1 + newNum;
}

impureSum2(10); // 40 을 반환한다. 그런데 누군가가 num1 을 변경한다면?

num1 = 100;
impureSum2(10); // 같은 값을 받았는데도 110 을 반환한다. --> 순수하지 않은 함수. 반환값이 보장되지 않는다.

// 🔥🔥🔥🔥🔥🔥🔥🔥
// 모든 값을 인자로 받으면 순수하게 만들 수 있다. (순수 함수)
function pureSum(num1, num2){
    return num1 + num2;
}

pureSum(10, 20); // 30 을 반환한다. 
pureSum(10, 20); // 30 을 반환한다. --- input이 같으면 output이 같다.


// 🔥🔥🔥🔥🔥🔥🔥🔥

function changeValue(num) {
    num++;
    return num;
}
changeValue(10);  // 숫자를 하나 받고 1이 증가한 값을 반환한다. --> 순수함수
changeValue(10); 

// 🔥🔥🔥🔥🔥🔥🔥🔥

const obj = { one : 10 };

function changeObj1(targetObj) {
    targetObj.one = 100;
    return targetObj;
}

changeObj1(obj); 
console.log(obj); // { one : 100 } --> 순수하지 않은 함수. 반환값이 보장되지 않는다.
// 자바스크립트에서 객체는 premitive type이 아니다. --> 참조형이다. (reference type)
// 객체, 배열 등 reference type 을 조작할 때는 🔥새롭게🔥 만들어서 반환하자.

function changeObj2(targetObj) {
    return {...targetObj, one : 100};
}

changeObj2(obj); // { one : 100 } --> 순수한 함수. 반환값이 보장된다.
console.log(obj); // { one : 10 }  