/** 함수, 메서드, 생성자 의 구분을 할 필요가 있다.
 */


/** 🚀 함수
 * - 1급 객체. 
 * - 변수나 데이터에 담길 수 있다.
 * - 매개변수로 전달 가능 (콜백 함수)
 * - 함수가 함수를 반환 (고차 함수)
 */
function func() {
    return this; // 함수의 this 는 전역객체를 바라본다.
}

func();


/**  🚀 메서드
 * - 객체에 의존성이 있는 함수. OOP 행동을 의미한다.
 * - 객체.메서드() 형태로 . 연산자를 사용하여 호출한다.
 */
const obj = {
    method() { 
        return this; // 메서드의 this 는 소속된 객체, 호출된 객체를 바라본다.
    },
    conciseMethid : () => this, // 컨사이즈 메소드. 간결한 메서드.
}

obj.method();
[].map(); // 배열 안에 있는 메서드.
'str'.toUpperCase(); // 문자열 안에 있는 메서드.


/** 🚀 생성자 함수 (Class)
 * - 인스턴스를 생성하는 역할 -> class
 */
function Func() {
    return this; // 생성자 함수의 this 는 생성될 인스턴스를 가리킨다.
}

const instance = new Func(); 
class Func {
    constructor() {
        return this;  
    }
}