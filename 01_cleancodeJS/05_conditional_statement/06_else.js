function getActiveUserName(user) {
    if(user.name) {
        return user.name; } // 👉 참일 때의 반환. 리턴되면 여기까지만 실행되므로 else 는 필요없다.
    // } else {
        return '이름 없음'; // 👉 거짓일 때의 반환
    // }
}

// 하나의 함수가 두 가지 역할을 할 때는 문제가 생긴다. 
// age 가 20 미만 시 특수 함수 실행 시키는 것이 목적임. 
function getHelloCustomer(user) {
    if (user.age < 20) {
        report(user) } // 👉 유저를 반환 후 안녕하세요를 수행 할 수 있다.
    // } else {
        return '안녕하세요' // 성인이 아니여도 실행되어야 하는데 else 가 있으면 여기는 실행이 안된다.
    }


