// null 병합 연산자 ??
// 좌측의 피연산자가 null 또는 undefined 일 때 우측의 피연산자를 반환한다.
// null 과 undefined 를 평가할 때만 사용해야 한다.

function createElement(type, height, width) {
    const element = document.createElement(type ?? 'div'); 
    element.style.height = String(height ?? 10 ) +'px';
    element.style.width = String(height ?? 10 ) +'px';
    return element;
}

const el = createElement('div', 0, 0); // 0 은 falsy
console.log(el); // <div style="height: 10px; width: 10px;"></div>

console.log(!!0) // false

const el2 = createElement('div', 0, 0);
el2.style.height; // '0px'


function helloWorld(message){
    if(!message){
        return 'hello world';
    }
    return 'Hello!' + (message || 'world');
}

console.log(helloWorld(0)) // hello world

function helloWorld(messgae) {
    return 'Hello!' + (messgae ?? 'world');
}

