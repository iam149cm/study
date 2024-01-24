/** Rest Parameters
 * - 가변 인자를 함수에 전달할 때 arguments 객체를 사용한다. 그러나 추가적으로 인자를 받고 싶다면? 
 * - Rest parameter 를 사용하면 된다. (...args)
 */

function sumTotal() {
    // reduce 를 사용하려면 배열이어야 하기 때문에 Array.from 을 사용한다.
    return Array.from(arguments).reduce(
        (acc, curr) => acc + curr,
    )
}

sumTotal(1, 2, 3, 4, 5, 6, 6); // 27
sumTotal(1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10); // 51

function sumTotal2(initValue , ...args ) { // 추가적인 인자를 받을 수 있다는 장점이 있다. args 는 맨 마지막에 들어가야 한다.
    console.log('initValue 👉 ', initValue);

    // args 는 배열이다. 그래서 배열로 변환 없이 reduce 를 사용할 수 있다.
    // 자바스크립트의 reduce함수는 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환한다.
    return args.reduce(
        (acc, curr) => acc + curr,
    )
}

sumTotal2(100, 1, 2, 3, 4, 5, 6, 6);