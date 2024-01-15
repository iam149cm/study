/** 부정조건문을 지양해야 하는 이유
 * 1. 생각을 여러 번 해야 할 수 있다. 조건이 복잡해짐
 * 2. 프로그래밍 언어 자체가 일반적으로 else 문만 먼저 쓰지는 않는다. (if-else) 조건문의 조건은 true 를 전제한다.
 * 
 * 예외적으로 부정조건문을 사용하는 경우 :
 * Early return, Form Validation, 보안, 계속 검사해야 하는 로직
 */

const isCondition = true;
const isNotCondition = false;

if (!isNaN(3)) {
    console.log('숫자입니다.');
}

function isNumber(num) {
    return !Number.isNaN(num) && typeof num === 'number';
}

if(!isCondition) {
    console.log('거짓인 경우 실행');
}

if(isNotCondition) {
    console.log('거짓인 경우 실행');
}