/** Computed Property Name : 객체의 속성명을 동적으로 생성하는 기능
 * 
 */

const handleChanege = (e) => {
    setState({
        // 자바스크립트 속성은 property 를 동적으로 생성할 수 있다.
        // [] 안에 변수를 넣으면 변수에 담긴 값이 속성명으로 사용된다.
        [e.target.name] : e.target.value,
    })
}


// const funcName = 'func';
const funcName0 = 'func0';
const funcName1 = 'func1';
const funcName2 = 'func2';

const obj = {
    [funcName0](){
        return 'hello0';
    },
    [funcName1](){
        return 'hello1';
    },
    [funcName2](){
        return 'hello2';
    },
}

for (let i=0; i<3; i++){
    console.log(obj[`func${i}`]()); 
}

// obj[funcName](); // hello

