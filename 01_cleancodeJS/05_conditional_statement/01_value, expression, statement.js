/** 값식문
 * - 컴퓨터를 이해하지 못하면 syntax errer 즉 문법에러가 발생한다.
 * - 값식문 : if, else, while, do, for, switch, try/catch/finally
 * - 문법이 틀리면 작동하지 않는다.. 객체의 값에는 식이 들어갈 수 있다. 
 * - IIFE 즉시 실행 함수는 값을 리턴하기 때문에 {} 내부에서 사용 가능. -- switch 문에서 사용 가능
 * 
 * Q. 함수 매개변수로 for/if/switch 문을 사용할 수 있을까?
 * 
 */

// This is JSX :
ReactDOM.render({
    <div id="main"> Hello World! </div>,
    mountNode
})

// Is Transformed to this js : (babel) ... mountNode 를 기준으로 변경됨
ReactDOM.render(
    React.createElement(
        "div",
        { id: "main" }, // id가 객체로 바뀜
        "Hello World!"
    ),
    mountNode
)

this.StaticRange.color || 'white' // 분기문이 없이 || 를 사용하여 값이 없을 경우 white 를 사용한다.

/**
 * map, filter, reduce, every, some, find, findIndex, forEach, includes, indexOf, lastIndexOf,
 * - {} 중괄호 안에는 값과 식만 들어가야 한다 (고차함수)
 */

objectRows.map((obj, i) => { //... 
});


if (conditionOne) {
    return 'one';
} else if (conditionTwo) {
    return 'two';
}

// 위의 코드는 아래와 같이 변경할 수 있다.
conditionOne && 'one' || conditionTwo && 'two';