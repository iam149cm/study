/** Prototype 조작 지양하기 
 * - 이전에는 자바스크립트의 몽키패칭성향으로 인해 prototype 을 조작했다.
 * 
 * - 그러나 자바스크립트는 이미 많이 발전함. 빌트인 객체를 건들지 말자.  
 * - 대신 직접 만들어서 모듈화 할 수 있다.
 * - Array.prototype.forEach 가 이미 있음. 새로운 forEach 를 만들지 말자.
 * - 라이브러리를 사용하자. (lodash, underscore)
 * 
 * - 클래스로 만들어도 자바스크립트는 prototype 을 사용한다. 코드속에서 공존함
 * - Babel 로 변환하면 확인할 수 있다.
 */

function Car  (name, brand) {
    this.name = name;
    this.brand = brand;
}

Car.prototype.sayName = function () {
    return this.brand + '-' + this.name;
}

class Car {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }

    sayName() {
        return this.brand + '-' + this.name;
    }
}

const casper = new Car('casper', '현대');