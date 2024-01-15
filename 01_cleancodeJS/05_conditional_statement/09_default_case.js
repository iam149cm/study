// 누군가가 아무 값도 넣지 않아도 동작하도록 하고 싶다면? --> 기본 값을 넣자.

function sum(x, y) {
    x = x || 1;
    y = y || 2;

    return x + y;
}

sum(1, 2); // 3

function registerDay(userInputDay) {
    switch(userInpiutDay) { // 변하지 않는 당연한 값이라도 입력값의 실수를 고려하자
        case '월요일' : // some code
        case '화요일' : // some code
        case '수요일' : // some code
        case '목요일' : // some code
        case '금요일' : // some code
        case '토요일' : // some code
        case '일요일' : // some code
        default :
            throw Error('입력값이 유효하지 않습니다.')
    }
}

e.target.value = '월ㄹ요일' // Error: 입력값이 유효하지 않습니다.