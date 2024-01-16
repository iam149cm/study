// JavaScript 의 배열은 객체다

const arr = [1, 2, 3];

arr[3] = 'test';

// ===================
arr['property'] = 'string value';
arr['obj'] = {}
arr[{}] = [1,2,3]
arr['func'] = function() {
  return('hello');
};
// ===================

// let 이 숫자라서 안찍히는 것 뿐이다
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1,2,3,test
} 


console.log('🔥 arr : ', arr);


const obj = {
    arr : [1,2,3],
    3 : 'test',
    property : 'string value',
    obj : {},
    '{}' : [1,2,3],
    func : function() {
  return('hello');
} }


console.log('🔥 obj : ', obj);
console.log(obj.func());

/** 📝 NOTE
 * array 는 0:1, 1:2, 2:3, 3:test 의 형태로 저장된다
 * array 의 길이를 확인하기 위해 length 를 사용하지만 string 도 length 가 있기 때문에 주의해야 한다.
 * array 의 길이를 확인하기 위해서는 Array.isArray를 사용하여 진짜 배열인지 확인 해야 함
 */