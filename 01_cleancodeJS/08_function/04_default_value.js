/** Default value
 * - 자바스크립트에서 함수를 안전하게 사용하는 방법 중 하나는 매개변수에 기본값을 설정하는 것이다.
 * 
 */

function createCarousel(options) {
    options = options || {} // options가 없으면 빈 객체를 할당한다. 방어객체라고 볼 수 있다.
    var margin = options.margin || 0
    var center = options.center || false
    var navElement = options.navElement || '.nav'

    // ...

    return { margin, center, navElement,};
}

let a = createCarousel();
console.log(a);

// 위 함수는 아래와 같이 작성할 수 있다. 함수 선언부에서 기본값을 설정하는 것이다.
function createCarousel({margin = 0, center = false, navElement = '.nav'} = {}) {
    // ...
    return { margin, center, navElement,};
}

let b = createCarousel();
console.log(b); 


const required = (argName) => {
    throw new Error('required is ' + argName);
};

function createCarousel3({
    items = required('items'), // 함수를 사용하여 필수값을 설정한다.

    margin = 0, 
    center = false, 
    navElement = 'div'
    } = {}) {

    // ...

    return { margin, center, navElement,};
}

// Error: required is items
console.log(
    createCarousel3({
        margin : 10,
        center : true,
        navElement : '.span',
        })
) 
