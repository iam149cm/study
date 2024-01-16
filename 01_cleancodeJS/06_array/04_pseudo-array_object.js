// 유사 배열 객체

const arrayLikeObject = {
    0 : 'Hello',
    1 : 'World',
    length : 2
}

// Array.from() 을 사용하면 유사 배열 객체를 배열로 변환할 수 있다.
const arr = Array.from(arrayLikeObject);

console.log(Array.isArray(arr) , arr, arr.length ); // [ 'Hello', 'World' ]


function generatePriceList(){

    for(let i=0; i<arguments.length; i++){
        // const element = arguments[i]; // 배열이 아니라 유사 배열 객체이다.
        // console.log(element); // 매개변수를 선언하지 않았음에도 arguments 를 사용할 수 있다.
    }

    return Array.from(arguments).map((arg) => arg + '원') 
}

let arg = generatePriceList(1000, 2000, 3000); // arguments.map is not a function
console.log(arg)