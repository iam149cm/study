/** Magic Number : 마법같은 숫자.
 * - 추상화에 대해 숨긴다고 생각할 수 있지만 Magic Number 를 개선하여 추상화를 더 잘 할 수 있다.
 */

// 로딩시간에 대한 정책이 있다면 상수로 정의해두면 좋다.
// 아래와 같은 상수들은 추후 export 해서 사용할 수 있다.
const COMMON_DELAY_MS = 3 * 60 * 1000;

setTimeout(() => {
    scrollToTop(); 

}, COMMON_DELAY_MS)


// Numeric Operator
const PRICE = {
    MIN : 1_000_000, // 100만원
    MAX : 100_000_000 // 1억
}

console.log(PRICE); // { MIN: 1000000, MAX: 100000000 } 



// Min, Max 를 명시적으로 사용하여 아래와 같이 사용할 수 있다.
// getRandomPrice(0, 10);
getRandomPrice(PRICE.MIN, PRICE.MAX);


// 🔥🔥🔥🔥🔥🔥🔥🔥
// 아래와 같이 숫자가 하드코딩되어 있으면 1과 20이 어떤 의미인지 알기 어렵다. 
// 또한 1과 20이 어떤 의미인지 알기 위해서는 함수를 찾아가야 한다.

const CAR_NAME_LEN = Object.freexe({
    MIN : 1,
    MAX : 20
});

function isValidName(name) {
    // return carName.length > 1 && carName.length < 20;
    return name.length > CAR_NAME_LEN.MIN && name.length < CAR_NAME_LEN.MAX;
}

function notiValidName (name) {
    if(!isValidName(name)){
        alert(`자동차 이름은 ${CAR_NAME_LEN.MIN}자 이상 ${CAR_NAME_LEN.MAX}자 이하만 가능합니다.`);
    }
}