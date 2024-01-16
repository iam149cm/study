
// 무심코 사용하면 위험한 Array.length

const arr  = [1,2,3];

arr.length = 10; // 배열의 길이라기 보다는 배열의 마지막 인덱스라고 보는 것이 맞다.
// arr.length 는 배열의 길이를 보장하지 않는다.

console.log(10);
console.log(arr);

arr[9] = 10;
console.log(arr);

arr.length = 0;
console.log(arr); // 길이를 바꾼 것 뿐인데 배열이 비어있다.