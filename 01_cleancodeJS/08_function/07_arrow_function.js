/** Arrow Function
 * - 자바스크립트의 화살표함수 scope 는 렉시컬 스코프이다. (this 바인딩 방식이 다르다.)
 * - 화살표 함수 내에서는 call, apply, bind, arguments 객체 사용 불가
 * - 화살표 함수는 생성자로 사용할 수 없다.
 */

const user = {
    name : 'Poco',
    getName : () => {
        return this.name;
    },
    newFriends : (...rest) => {
        // 화살표 함수 내에서는 call, apply, bind, arguments 객체 사용 불가
        // arguments 는  ..rest parameter 로 대체 가능
        // const newFriendList = Array.from(arguments);
        return this.name + rest;
    }
};

user.getName(); // undefined. this에 user가 바인딩 되지 않는다.

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥


// 화살표 함수는 생성자로 사용할 수 없다. --> class 로 대체 가능 (syntax sugar)
const Person = (name, city) => {
    this.name = name;
    this.city = city;
}

const person = new Person('Poco', 'Seoul'); // TypeError: Person is not a constructor


// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// class 를 다룰 때 주의해야 하는 부분 (화살표 함수를 사용하면 안되는 경우가 있다)
// arrow function 을 클래스 내에서 사용하면 생성된 클래스 내에서 초기화된다.
// override 하기 위해서는 화살표 함수를 사용하면 안된다.

class Parent {
    parentMethod() { // 일반적인 메서드
        console.log('parentMethod');
    }
    parentMethodArrow = () => { // 화살표 함수로 정의한 메서드
        console.log('parentMethodArrow');
    }
    overrideMethod = () => {
        console.log('overrideMethod');
    }

}

class Child extends Parent {
    childMethod() {
        super.parentMethod();
        // super.parentMethodArrow();  // --> 에러가 발생한다.
    }
    overrideMethod() {
        console.log('overrideMethod in Child');
    }
}

new Child().childMethod();  
new Child().overrideMethod();  // 부모의 메서드가 호출된다. override 하기 위해서는 화살표 함수를 사용하면 안된다. 
