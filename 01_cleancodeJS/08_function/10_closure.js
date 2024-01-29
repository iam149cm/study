/** Closure
 * - 함수가 실행될 때 마다 개별 context 를 기억하는 것.
 * - 함수가 실행되는 시점에 함수 내부에 있는 변수들의 상태를 기억하고 있다. bind() 와 비슷한 개념.
 */

function add(num1) { // 외부 함수가 실행되면 내부 함수의 환경을 기억하고 반환.
    return function(num2) {
        return num1 + num2;
    }
}

const addOne = add(1);
const addTwo = add(2);

addOne(3); // 4 가 반환된다.

// 🔥🔥🔥🔥🔥🔥🔥🔥


function add(num1) {
    return function(num2) {
        return function (calculateFn) {
            return calculateFn(num1, num2);
        };
    };
}

function sum(num1, num2) {
    return num1 + num2;
}

function multiple(num1, num2) {
    return num1 + num2;
}

const addOne2 = add(5)(2); // 여기서 5와 2가 들어간 context 를 기억하고 있다.
const sumAdd = addOne2(sum); // 7 
const multipleAdd = addOne2(multiple); // 10


// 🔥🔥🔥🔥🔥🔥🔥🔥
// 아래 코드는 if문을 생략할 수 있다.

function log(value) {
    return function (fn) {
        fn(value);
    }
}

const logFoo = log('Foooo');
logFoo((v) => console.log(v)); // Foooo
logFoo((v) => console.info(v)); // Foooo
logFoo((v) => console.warn(v)); // Foooo
logFoo((v) => console.error(v)); // Foooo


// 🔥🔥🔥🔥🔥🔥🔥🔥
// 아래 코드는 중복되는 소스가 있다.

const arr = [1, 2, 3, 'A', 'B', 'C'];
const isNumber = (value) => typeof value === 'number';
const isString = (value) => typeof value === 'string';

arr.filter(isNumber); // [1, 2, 3]

// 클로저로 중복을 제거할 수 있다.
function isTypeOf(type) {
    return function (value) {
         return typeof value === type;
    }
}

const isNumber2 = isTypeOf('number');
const isString2 = isTypeOf('string');
arr.filter(isNumber2); // [1, 2, 3]
arr.filter(isString2); // ['A', 'B', 'C']

// 🔥🔥🔥🔥🔥🔥🔥🔥

someElement.addEventListener(
    'click', 
    debounce(handleClick, 300),
);

someElement.addEventListener(
    'click', 
    throttle(handleClick, 300),
);