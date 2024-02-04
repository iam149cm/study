/** indent depth
 * - 들여쓰기를 어느 정도로 할 것인가?
 * 
 * - HTML : 2depth
 * - JS : 4depth
 * - CSS : 2depth 
 * 
 * 🔥 depth 가 깊어지는 것을 방지하기 위해 아래와 같이 사용한다
 * - 의식적으로 코드를 작성
 * 1. 조기반환 Early Return
 * 2. call back => Promise => async/await
 * 3. 고차함수 (map, filter, reduce)
 * 4. 함수를 나누고 추상화하기
 * 5. 메서드 체이닝 (.then().then().then())
 * 
 * - 도구를 사용해서 통일
 * 1. editor config 에서 tabSize, indent 설정을 통해 들여쓰기를 설정할 수 있다.
 * 2. prettier 를 사용하여 들여쓰기를 설정할 수 있다.
 * 3. eslint 의 indent 룰을 사용하여 들여쓰기를 설정할 수 있다.
 * 
 */

function test() {
    if (true) {
        if(true) {
            if (true) {
                // ...
            }
        }
    }
}

function test1(){
    somePromist()
    .then()
    .then()
    .then()
}