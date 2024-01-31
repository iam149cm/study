/** 사용자에게 알려주기
 * - 사용자 : 동료 개발자 / 앱 (혹은 라이브러리) 을 이용하는 사용자 
 * 
 * - Syntax error : 문법적으로 잘못된 코드를 작성했을 때 발생하는 에러
 * - Reference error : 선언하지 않은 변수를 사용하거나, 존재하지 않는 객체의 속성을 참조하려고 할 때 발생하는 에러
 * 
 */

console.log(React) // ReferenceError: React is not defined


function React(){
    // 이 함수를 생성자로 사용하길 바랄 때

    if (!new.target) { // new 가 없으면 에러를 발생시킨다.
        throw new ReferenceError('생성자입니다!');
    }
}

const react1 = React(); // Error: 생성자입니다!
const react2 = new React(); // OK

// 프론트엔드의 경우 input 에 required 를 넣어주는 것 만으로도 에러를 막을 수 있다.
