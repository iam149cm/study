// 자바스크립트는 형변환이 자유롭다. 하기는 truthy 로 변환. 참인 값이기 떄문이다.
// truthy : true로 변환되는 값.

// if('string'.length > 0) {
if('string'.length) { 
}

// if (!isNaN(10)) {
if (10) {
}

// if (boolean == true) {
if (boolean) { 
}

// falsy  : false로 변환되는 값.
// false, null, undefined, 0, NaN, ''(빈 문자열) 은 falsy 이다.
if (false) {} // ....


function printName(name) {
    // if (name == undefined || name == null) { // falsy 를 사용해서 null, undefined 를 체크한다.
    // if (name) { // truthy
    if (!name) { // falsy. 간단한 조건문은 falsy 를 사용한다.
        return 'anonymous';
    }   
    return name + '님 안녕하세요';; 
} 