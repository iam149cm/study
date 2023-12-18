console.log('---------var----------');

var global1 = '전역';

if (global1 == ('전역')) {
    var global1 = '지역';
}
console.log(global1);


console.log('---------let----------');

let global2 = '전역';

if (global2 == ('전역')) {
    let global2 = '지역';
}

console.log(global2);

console.log('---------const----------');

const global3 = '전역';
{
    const global3 = '지역';
    console.log(global3);
}

console.log(global3);


console.log('----------person---------');


// 선언 + 할당
const person = [{ 
    name : 'jang',
    age : 30,
}]


// 재할당. 어떻게 하면 값을 바꿀 수 있는가?
// const person = {
//     name : 'jang2', // 에러
//     age : 30,
// }

person.push({
    name : 'jang2',
    age : 32,
})

console.log(person);


// const 는 재할당이 금지된다.
