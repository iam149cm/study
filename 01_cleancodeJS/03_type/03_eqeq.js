/** 🔥 eqeq ?
 * 자바스크립트에서 동등 연산자 ==
 * === (엄격한 동등 연산자) 을 사용하면 타입까지 비교하기 때문에 더욱 정확하다.
 * == 은 타입이 다른 두 값을 비교할 때 타입을 강제 변환한다.
 * 
 * eqeq 는 줄일수록 좋다. === 을 사용하자.
 */

'1' == 1 // true
1 == true // true ---> 이유 : 형변환이 일어난다 (type casting) ---> 위험!

let ticketNum = 0

ticketNum.value == 0 // true
Number(ticketNum.value) === 0 // true --> 좀 더 Strict 하게 비교하는 것이 좋다.