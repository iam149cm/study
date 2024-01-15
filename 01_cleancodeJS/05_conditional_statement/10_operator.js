// 명시적인 연산자 사용 지양하기

let number;

// 예측하기 쉬운 코드를 작성해야 한다. 명시적이고 가독성이 높은 코드를 작성해야 디버깅하기 쉽다.
function increment(number) {
    number = number - 1;
    
    // --number;
    // number--;
}

function increnment(number) {
    number = number + 1;
    
    // ++number;
    // number++;
}


몸무게 / (신장 * 신장) // 괄호를 사용해서 명시적으로 연산자의 우선순위를 정해준다.
if ((isLogin && token) || user) {}