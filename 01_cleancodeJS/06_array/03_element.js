// 배열 요소에 접근하기
/** 요소 : 배열 내부에 있는 값 하나하나
 * ex) split() : 문자열을 배열로 만들어줌
 */

function operateTime(input, operator, is) {
    inputs[0].split('').forEach((num) => {
        cy.get('.digit').contains(num).click();
    });

    inputs[1].split('').forEach((num) => {
        cy.get('.operator').contains(num).click();
    });
}

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// index 를 사용하지 않고, 배열의 요소에 접근하는 방법
function operateTime(input, operator, is) {
    const[firstInput, secondInput] = inputs;

    firstInput.split('').forEach((num) => {
        cy.get('.digit').contains(num).click();
    });

    secondInput.split('').forEach((num) => {
        cy.get('.operator').contains(num).click();
    });
}
 

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
function clickGroupButton(){
    const confirmButton = document.getElementsByTagName('button')[0];
    const cancelButton = document.getElementsByTagName('button')[1];
    const resetButton = document.getElementsByTagName('button')[2];
}

// 위 코드를 아래와 같이 변경할 수 있다.
function clickGroupButton(){
    const [confirmButton, cancelButton, resetButton] = document.getElementsByTagName('button');
}

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
function formatDate(targetDate) {
    const date = targetDate.toISOString().split('T')[0];
    const [year, month, day] = date.split('-');
    return `${year}년 ${month}월 ${day}일`;
}

// 위 코드를 아래와 같이 변경할 수 있다.
function head(arr) {
    // return arr[0] || undefined;
    return arr[0] ?? '';
}

function formatDate(targetDate) {

    const date = head(targetDate.toISOString().split('T')); // 구조 분해 할당
    const [year, month, day] = date.split('-');
    return `${year}년 ${month}월 ${day}일`;
}

