/** 공백도 코드 작성의 일부이다. 
 * - 함수 내부의 코드 라인 수를 줄이고자 숏코딩을 할 수도 있지만 가독성을 위해 공백을 사용하는 것이 좋다.
 * - eslint 의 padding-line-between-statements 룰을 사용하면 가독성을 높일 수 있다.
 */

const loadingElements1 = () => {
    // 아래 코드를 선언, 로직, 반환으로 나누자
    const el = document.createElement('div');
    el.setAttribute('class', 'loading-1');
    const el2 = document.createElement('div');
    el2.setAttribute('class', 'loading-2');
    const el3 = document.createElement('div');
    el3.setAttribute('class', 'loading-3');
    el.appendChild(el2);
    el2.appendChild(el3);
    return el;
}

const loadingElements2 = () => {
    // 1. 선언
    const el = document.createElement('div');
    const el2 = document.createElement('div');
    const el3 = document.createElement('div');
    
    // 2. 로직, 문
    el.setAttribute('class', 'loading-1');
    el2.setAttribute('class', 'loading-2');
    el3.setAttribute('class', 'loading-3');
    
    el.appendChild(el2);
    el2.appendChild(el3);

    if (el2) {
        return el2;
    }

    // 3. 반환 - 한 칸만 띄워도 가독성이 좋아진다.
    return el;
}