// AND =====> false가 하나라도 있으면 false
true && true && '도달 O' // 도달 O
true && false && '도달 X' // false ---> '도달 X'는 실행되지 않는다. 뒤를 볼 필요가 없음

// OR =====> true가 하나라도 있으면 true
false || false || '도달 O' // 도달 O
true || true || '도달 O' // true ---> '도달 O'는 실행되지 않는다. 뒤를 볼 필요가 없음

/**  || 는 default 값을 설정할 때 유용하다.
 * ex) variable ||  'default value'
 * 
 */

function favoriteDog(someDog) {
    // if문을 사용하지 않고도 아래와 같이 조건을 설정할 수 있다.
    return (someDog || '냐옹') + '입니다';
}

if (isLogin && user) {
    return user.name || '이름없음';
}