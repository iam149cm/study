/* 복잡한 인자 관리하기
 *  - 인자가 많은 것이 무조건 나쁜 것은 아니고, 맥락과 흐름을 파악할 수 있다면 괜찮다.
**/

function toggleDisplay(isToggle) {
    // ... some code
}

function sum (num1, num2) {
    // ... some code
}

function getRandomNumber(min, max) {
    // ... some code
}

function timer (start, stop, end) {
    // ... some code
}

function genSquare(top, right, bottom, left) {
    // ... some code
}

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥

// 구조분해 : 인자가 많아지면 객체로 관리하는 것이 좋다. 순서를 지키지 않아도 된다.
function createCar1(num, {name, number, color, type}) {  // 인자를 따로 빼면 필수값, 옵션값 구분을 할 수 있다.
    return {
        num,name, number,color,type
    }
}

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥 
// 인자가 넘어오지 않았을 때 명시적으로 에러를 발생시키는 것이 좋다. --> 안전한 코드를 만드는 방법.
function createCar2(num, {name, brand, color, type}) { 
    if (!name) { throw new Error('name is required')}
    if (!brand) { throw new Error('brand is required')}
    return {
        num,name, brand,color,type
    }
}

let a = createCar1(123, { name: 'sonata', number: '12가 3456', color: 'white', type: 'sedan' })
let b = createCar2(123, { name: 'sonata', brand: 'hyundai', color: 'white', type: 'sedan' })

console.log('a 👉 ', a);
console.log('b 👉 ', b); 