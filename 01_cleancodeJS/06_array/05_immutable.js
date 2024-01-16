/** 불변성 immutable
 * 
 * 1. 배열을 복사한다
 * 2. 새로운 배열을 반환하는 메서드들을 활용한다. 
 * 
 * 새로운 배열로 반환 : concat, map, filter, reduce, slice, ...
 * 
 */


const originArray = [1, 2, 3, 4, 5];
const newArray = originArray;

originArray.push(10);
originArray.push(11);
originArray.push(12);
originArray.unshift(0);

console.log(newArray); // [ 0, 1, 2, 3, 4, 5, 10, 11, 12 ]
// console.log(originArray); // [ 0, 1, 2, 3, 4, 5, 10, 11, 12 ]
