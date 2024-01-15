/** 삼항연산자를 사용할 때는 숏코딩 지향보다 일관성을 지향하자.
 * - 삼항연산자는 3개의 피 연산자를 취한다.
 * - A ? B : C (A는 조건, B는 참일 때 값, C는 거짓일 때 값)
 */


function example1(){ 
    return condition1 ? value1
        : condition2 ? value2
        : condition3 ? value3
        : value4;
}

function example2() {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}

 // 위 경우는 switch 문을 사용하는 것이 좋다.
 const tmp = condition1; condition2; condition3;
switch (tmp) {
    case value : 
    break;
    
    default:
        value4; }

// 아래 삼항연산자는 중첩되므로 괄호로 감싸서 가독성을 높인다.
const example = condition1 
? (a == 0 ? 'a is zero' : 'positive') // 참일 때
: negative; // 거짓일 때


const welcomeMsg = (isLogin) => {
    const name = isLogin ? getName() : '이름없음'; // Nullable 가능한 상황을 고려한다.
    return `Welcome ${name}`;
}


// bad case. 하기의 경우는 삼항연산자가 어울리지 않는다.
function alertMsg(isAdult) {
    isAdult 
    ? alert('성인입니다.')     // alert 는 void 이므로 반환값이 없다. 
    : alert('미성년자입니다.'); // 따라서 삼항연산자를 사용하는 것이 적절하지 않다.
}

// 바로 리턴을 하거나 값을 담아내는 경우에는 삼항연산자를 사용하는 것이 좋다.
function alertMsg(isAdult) {
    return isAdult ? '성인입니다.' : '미성년자입니다.';
}

function alertMsg(isAdult) {
    // 아래와 같이 한 번 만들어놓은 변수를 재사용할 수 있다.
     const msg = isAdult ? '성인입니다.' : '미성년자입니다.';
     if(isAdult) { } 
     if(isAdult && gender == 'FEMALE') { }
}

// 삼항연산자는 3개의 피 연산자를 사용한다. 모든 값이 필요없는 경우는 삼항연산자를 사용하지 않는다.
// 참,거짓이 필요없는 경우는 삼항연산자를 사용하지 않는다. truth - falsy 를 사용한다.