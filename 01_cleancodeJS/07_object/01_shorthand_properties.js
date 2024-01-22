/** Shorthand Properties
 * - Concise Methods : 메소드 축약. 함수를 정의할 때 function 키워드를 생략할 수 있다. 
 * - 객체의 프로퍼티를 정의할 때 프로퍼티 이름과 값이 동일하다면 프로퍼티 이름을 생략할 수 있다.
 * */ 

const firstName = 'John';
const lastName = 'Smith';

const person = {
    firstName : firstName,  // key와 value가 동일하다면 생략 가능
    lastName : lastName,  
    getFullName (){  
        return `${this.firstName} ${this.lastName}`;
    }};

// 아래와 같이 축약해서 사용하는 것이 가능하다
const counterApp = combineReducers({
    counter,
    ui,
    routing: routerReducer
});