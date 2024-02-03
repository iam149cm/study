/** Black Box Event Listener
 * - 프로그래밍 관점에서 블랙박스는 입력과 출력만을 알 수 있고 내부 동작 방식은 알 수 없는 것을 의미한다.
 * - 즉 블랙박스 이벤트 리스너는 이벤트 리스너가 어떻게 동작하는지 알 수 없는 것을 의미한다.
 * - (내부 구현이 어떻게 동작될지 예측할 수 없는 경우. 추상화가 너무 과하게 되거나 명시적인 코드가 아닌 경우)
 */

const button = document.querySelector('button');

function getLog(e) {
    console.log(e);
}
// 버튼.이벤트_등록('이벤트_타입', 리스너_함수_실행); --> 반응형으로 실행된다.
button.addEventListener('click', getLog);

/**  주로 함수 명을 onClick, handleClick 등으로 사용하는데 어떤 함수인지 알기 어렵다.
 * 명시적으로 함수 이름을 지정하여 사용하는 것이 좋다. 
 * 또한 많은 코드가 등록된 인라인 함수를 사용하지 않는 것이 좋다.
 * 
 * 그러나 버튼을 동적으로 생성하는 경우는 handleClick이나 onClick으로 사용하는 경우도 있다.
 * 
 */

// ex) 써치바를 핸들하는 경우.. 엔터 되어야 하는거 아닌가? 이름이 왜 클릭이지? --> Search로 바꾼다
// const handleClick = (e) => {
const handleSearch = (e) => {
    // 1. input 을 받는 코드
    // 2. 유효성 검사를 하는 코드
    // 3. 검색 결과를 보여주는 코드
}
button.addEventListener('click', handleSearch); // handleClick (블랙박스) --> handleSearch 로 변경
button.addEventListener('keyup', handleSearch);
FormData.addEventListener('onsubmit', handleSearch);


