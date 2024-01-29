/** HTML 에 접근하는 JS 코드 추상화
 * - 코드를 추상화 하는 단계를 거치면서 코드의 재사용성이 높아진다.
 * - 내부의 소스가 html 인지 css 인지 숨겨놓는 방법.
 */ 

// DOM 을 생성하는 코드만 분리
const createLoader = () => {
    const el1 = document.createElement('div');
    const el2 = document.createElement('div');
    const el3 = document.createElement('div');

    return {
        el1, el2, el3,    
    }
}

const createLoaderStyle = ({ el1, el2, el3 }) => {
    el1.setAttribute('class', 'loading d-flex justify-center mt-3');
    el2.setAttribute('class', 'relative spinner-container');
    el3.setAttribute('class', 'material spinner');

    return { newEl1 : el1, newEl2 : el2, newEl3 : el3 };
}


export const loader = () => {
    const {el1, el2, el3} = createLoader();
    const { newEl1, newEl2, newEl3 } = createLoaderStyle({ el1, el2, el3 });


    // 아래 반복적인 소스를 위의 함수로 추상화 할 수 있다.
    // const el1 = document.createElement('div');
    // el.setAttribute('class', 'loading d-flex justify-center mt-3');

    // const el2 = document.createElement('div');
    // el2.setAttribute('class', 'relative spinner-container');

    // const el3 = document.createElement('div');
    // el3.setAttribute('class', 'material spinner');

    newEl1.append(newEl2);
    newEl2.append(newEl3);
    return newEl1;

}


// 🔥🔥🔥🔥🔥🔥🔥🔥

const element = document.querySelector('#model')
element.computedStyleMap.backgroundColor = 'black';
element.classList.add('--open')
element.classList.remove('--open')

// 위 코드를 아래와 같이 변경할 수 있다.

const changeColor = (element) => {
    element.computedStyleMap.backgroundColor = 'black';
}

const openModal = (element) => {
    element.classList.add('--open')
}

const closeModal = (element) => {
    element.classList.remove('--open')
}

const myModal = () => {
    return document.querySelector('#model')
}

openModal(myModal);
changeColor(myModal);
closeModal(myModal);