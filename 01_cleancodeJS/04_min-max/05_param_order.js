/**
 * 매개변수의 순서가 경계다
 * 호출하는 함수의 네이밍과 인자 순서의 연관성을 고려한다
 */

function someFunc(someArg, someArg) {
    // ...
}
/** 
 * 
 * 함수 네이밍과 인자를 가지고 추론 가능. 매개변수는 2개가 넘지 않도록 하자.
 * 🔥 인자가 많다면 함수를 만들고 호출할 때 :
 * 1. 객체로 만들어서 넘긴다.
 * 2. [... rest] 파라미터를 사용한다. (es2015)
 * 3. arguments 객체를 사용한다. (es5)
 * 4. 랩핑하는 함수를 만든다
 * 
 */


genRandomNumber(1, 50); // 1 ~ 50 사이의 랜덤한 숫자를 반환한다.
getDates('2020-10-11', '2020-10-31'); // 2020-10-11 ~ 2020-10-31 사이의 날짜를 반환한다는 추론 가능
shuffleArray(1,5); // [1, 2, 3, 4, 5] 배열을 랜덤하게 섞어서 반환한다는 추론 가능 


function someFunc2(someArg1, someArg2, someArg3, someArg4, someArg5, someArg6, someArg7, someArg8, someArg9, someArg10) {
    // ...
}

function getFunc(someArg1, someArg2) {
    somefunc (someArg1, someArg2);
}


