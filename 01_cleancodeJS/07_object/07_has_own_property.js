/** hasOwnProperty() method : check if the property is in the object or not
 *  - 객체가 특정 속성을 가지고 있는지 확인한다.
 */

const person = {
    name : "Lee",
}

person.hasOwnProperty('name'); // true
person.hasOwnProperty('age'); // false

for (const key in person) {

    // Object.prototype.hasOwnProperty를 사용하면 다른 객체의 hasOwnProperty와 충돌하는 것을 방지할 수 있다.
    // 이후 call 메서드를 사용하여 person 객체에 바인딩하여 호출한다.
    if(Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
    }
}

const foo = {
    hasOwnProperty : function() {
        return false;
    },
    bar : 'Here be dragons'
};


foo.hasOwnProperty('bar');  // false
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true

function hasOwnProp(targetObj, prop) {
    return Object.prototype.hasOwnProperty.call(targetObj, prop);
}

hasOwnProp(person, 'name'); // true
hasOwnProp(person, 'age'); // false