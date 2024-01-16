/**  map VS forEach
 * 1. map 은 새로운 배열을 반환한다.
 * 2. forEach 는 반환하지 않는다.
 *  
 * */

const prices    = [100, 200, 300, 400, 500];
const newPriceForEach = prices.forEach((price) => price + '원');
const newPriceMap = prices.map((price) => price + '원');

console.log(newPriceForEach); // undefined
console.log(newPriceMap); // [ '100원', '200원', '300원', '400원', '500원' ]


prices.forEach((price) => console.log(price + '원', 'forEach')); // forEach 는 요소가 루프될 때 마다 함수를 실행한다.
prices.map((price) => console.log(price + '원', 'map')); // map 은 새로운 배열을 반환한다.