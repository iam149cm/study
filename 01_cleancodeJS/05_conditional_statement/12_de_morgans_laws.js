// 드모르간의 법칙

const isValidUser = true; // 서버에서 받아오는 값
const isValidToken = true;

if (isValidUser && isValidToken) {
    console.log('로그인 성공');
}

// 로그인 실패 구현 시 아래와 같이 바꾼다면 너무 복잡해진다. 
if (!(isValidUser && isValidToken)) {
    console.log('로그인 실패');
}

// 이런 경우에는 드모르간의 법칙을 사용한다. (한 꺼풀 벗겨냈다)
// true is not true, false is not false
if (!isValidUser || !isValidToken) {
    console.log('로그인 실패');
}