function myFunction() {}
class MyClass {}
const str = new String('문자열')

typeof '문자열'
typeof true
typeof undefined
typeof 123
typeof Symbol()

typeof myFunction
typeof MyClass
typeof str
typeof null // object --- javascript의 오류

// 🔥🔥🔥 PRIMITIVE vs REFERENCE 🔥🔥🔥
// 자바스크립트는 동적으로 변하는 언어 => 타입이 동적으로 변함

// instanceof : 객체의 타입을 확인하는 연산자
function Person(name, age) {
    this.name = name
    this.age = age
}

const person = new Person('홍길동', 30)
const p = {
    name: '홍길동',
    age: 30
}

poco instanceof Person // true
p instanceof Person // false  ---> new 연산자를 사용하지 않았기 때문에 false

// reference type 에 포함된 것 : array, object, function
const arr = [1, 2, 3]
const func = () => {}
const date = new Date();

arr instanceof Array // true
func instanceof Function // true
date instanceof Date // true

arr instanceof Object // true ---> reference type은 모두 Object를 상속받음 (Prototype chain)
func instanceof Object // true ---> 이로 인해 타입 검사가 어려워짐
date instanceof Object // true


// 🔥🔥🔥 Object.prototype.toString.call() 로 검사하기 🔥🔥🔥
Object.prototype.toString.call(new String('문자열')) // [object String]
Object.prototype.toString.call(arr) // [object Array] 
Object.prototype.toString.call(func) // [object Function]
Object.prototype.toString.call(date) // [object Date]

/** 🔥 요약
 * 자바스크립트는 타입이 동적인 언어이다. --> 타입 검사가 어렵다. --> 주의점 항상 찾고 확인하기
 * Primitive VS Reference ----> typeof 가 무적이 아니다. instanceof 도 있다.
 */