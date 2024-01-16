/** continue & break
 * - continue: 현재 반복문을 멈추고 다음 반복문으로 넘어감
 * - break: 반복문을 완전히 멈춤
 */

const orders = ['first', 'second', 'third']

for (let i = 0; i < orders.length; i++) {
    if (orders[i] === 'second') {
        continue;
        break;
    }
    console.log(orders[i]);
}


orders.forEach(function(order) {
    if (order === 'second') {
        // break;  // forEach 에서는 break 를 사용할 수 없다.
    }
    console.log(order);
});



// 이런 경우에는 try catch 문을 사용한다.
try {
    orders.forEach(function(order) {
        if (order === 'second') {
            throw 'break';
        }
        console.log(order);
    });
} catch {}

// 혹은 for of / for in 문을 사용한다.
for (let order of orders) {
    if (order === 'second') {
        break;
    }
    console.log(order);
}

// every , some , find , findIndex 등 다른 배열 메소드를 사용하는 것도 좋은 방법이다.