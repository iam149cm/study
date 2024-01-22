/** Object freeze : 객체를 동결한다. 
 * - 객체를 동결하면 객체의 속성을 추가하거나 제거할 수 없다.
 * - 깊은 객체에는 적용되지 않는다. 즉, 중첩된 객체는 동결되지 않는다.
 * 1. 대중적인 유틸 라이브러리 lodash 사용
 * 2. 직접 유틸 함수 생성
 * 3. TypeScript 사용 (readonly)
 *
 */

const STATUS = Object.freeze({
    PENDING : 'PENDING',
    SUCCESS : 'SUCCESS',
    ERROR : 'ERROR',

    OPTIONS : {
        GREEN : 'GREEN',
        RED : 'RED'
    }
});

STATUS.PENDING = 'P2'
STATUS.NEW_DROP = 'NEW_DROP'

console.log(STATUS.PENDING) // PENDING
console.log(STATUS) // { PENDING: 'PENDING', SUCCESS: 'SUCCESS', ERROR: 'ERROR' }
Object.isFrozen(STATUS) // true
Object.isFrozen(STATUS.OPTIONS)  // false

STATUS.OPTIONS.GREEN = 'GREEN222'
STATUS.OPTIONS.BLUE = 'BLUE'
STATUS.OPTIONS; // { GREEN: 'GREEN222', RED: 'RED', BLUE: 'BLUE' }

// 👉 freeze 는 깊은 객체에는 적용되지 않는다. 즉, 중첩된 객체는 동결되지 않는다.

function deepFreeze(targetObj) {
    // 1. 객체를 순회하여 값이 객체인지 확인.
    // 2. 객체라면 재귀 호출을 통해 다시 순회한다.
    // 3. 객체가 아니라면 그대로 freeze 한다.

    Object.keys(targetObj).forEach(key => {
        const value = targetObj[key];
        if (typeof value === 'object') {
            deepFreeze(value);
        }
    });

    return Object.freeze(targetObj);
}