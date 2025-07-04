// 경계 다루기 min-max
// 1. 최소와 최대값을 명확하게 다룬다
// 2. 최소값과 최대값 포함 여부를 결정해야 한다.
// 3. 혹은 네이밍에 최소값과 최대값 포함 여부를 표현한다.

function genRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 상수로 만들어 놓는다
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

console.log(genRandom(MIN_NUMBER, MAX_NUMBER)); // 1 ~ 45 사이의 랜덤한 숫자를 반환한다.

/** 구현부를 보지 않아도 어떤 값을 반환하는지 알 수 있다.
 * 그러나 MIN/MAX 가 포함되는지 알 수 없다.
 */

const MAX_AGE = 20;
function isAdult(age) {
// 최소, 최대값이 포함되는지 안되는지 여부가 필요하다. 
// 이상, 이하, 초과, 미만에 대한 컨벤션을 정해놓는 것이 좋다. 🔥 모호하지 않게 🔥
  return age >= MAX_AGE;
}

const MAX_NUMBER_LIMIT = 45;
const MIN_NUMBER_LIMIT = 1;