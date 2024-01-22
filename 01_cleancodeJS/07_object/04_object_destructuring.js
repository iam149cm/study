// 객체 구조 분해 할당

// 아래 코드는 매개변수의 순서가 강제되어있다.
function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
}
// new 연산자를 사용하여 객체를 생성할 때는 반드시 new Person('홍길동', 30, '서울')과 같이 순서를 지켜야 한다.
const person = new Person('홍길동', 30, '서울');

// 아래 코드는 매개변수의 순서가 자유롭다.
function Person({name, age, location}) {
    this.name = name;
    this.age = age;
    this.location = location ?? '서울'; // nullish coalescing operator
}

// new 연산자를 사용하여 객체를 생성할 때는 순서를 지키지 않아도 된다.
const person2 = new Person({
    name: '홍길동',
    age: 30,
    location: '서울'
});

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

function Person3(name, {age, location}) { // options 객체를 사용하여 매개변수를 전달한다.
    this.name = name;
    this.age = age;
    this.location = location ?? '서울';
}

const pocoOptions = {
    age: 30,
    location: '서울'
}

// 인자를 넘길 때 선언해서 넘길 수도 있고, 인라인으로 넘길 수도 있다.
const poco = new Person3('홍길동', pocoOptions); 


// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

const orders = [ 'first', 'second', 'third' ];
const st = orders[0];
const rd = orders[2];
const [first, , third] = orders; // first, third 변수에 orders 배열의 첫 번째, 세 번째 요소를 할당한다.

// 그러나 위와 같이 사용하다 [] 안에 변수들이 늘어나면 가독성이 떨어진다. 👉 아래와 같이 object 형태로 사용 가능

const { 0: st2, 2: rd2 } = orders; // 0, 2 프로퍼티를 st2, rd2 변수에 할당한다.
console.log(st2, rd2); // first third
