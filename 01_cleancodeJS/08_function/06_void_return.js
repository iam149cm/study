/** void VS return
 * - 함수에 반환이 존재하지 않으면 (void) return 을 사용하지 않아도 된다
 * - API 에 return 이 있는지 없는지 확인 할 필요가 있다. API 명세를 항상 확인하자.
 * - ex) Array.push() 는 return 이 있다. --> length 를 return 한다. 
 */

function handleClick() {
    // return setState(false); // return 을 사용하지 않아도 된다. 그렇다면 어떻게 수정해야 할까?

    setState(false); 
    return // early return
}

function showAlert(message) {
    return alert(message);
}

function test(sum1, sum2) {
    const result = sum1 + sum2;
}
function testVoidfunc() {
    return test (1,2);
}

test(1, 2) // undefined 를 return 한다.
testVoidfunc() // undefined 를 return 한다.