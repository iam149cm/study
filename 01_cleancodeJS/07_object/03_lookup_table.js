/** Object Lookup table : key와 value로 이루어진 나열된 형태의 테이블.
 * 
 */

// 프로덕션에서 아래와 같이 요구사항이 추가될 때 마다 불필요한 코드를 추가하게 된다.
// if 문이 늘어지는 경우 switch 문을 사용할 수 있지만, 여전히 코드가 길어진다.
function getUserType(type) {
    if (type === 'ADMIN') return '관리자'
    if (type === 'USER') return '일반 사용자'
    if (type === 'GUEST') return '손님'
    return '알 수 없음'
}

// Object Lookup table을 사용하면 코드가 간결해진다.
function getUserType(type) {
    const USER_TYPE = { // snake case 로 상수를 표현.
        ADMIN: '관리자',
        USER: '일반 사용자',
        GUEST: '손님',
        UNDEFINED : '알 수 없음'
    }

    // ?? : nullish coalescing operator. null 또는 undefined 일 때만 '알 수 없음'을 반환한다.
    return USER_TYPE[type] ?? USER_TYPE.UNDEFINED
}


getUserType('wadsfasdf') // 알 수 없음


