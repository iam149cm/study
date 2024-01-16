// 배열 메서드 체이닝
const price = [100, 200, 300, 400, 500];

function getWonPrice(priceList, orderType) {
    let temp = [];

    for (let i = 0; i < priceList.length; i++) {
        if(priceList[i] > 1000) {
            temp.push(priceList[i] + '원');
        }
    }
    if (orderType === 'desc') {
        temp.reverse();
    }
    if (orderType === 'asc') {
        temp.sort();
    }
    return temp;
}

/** 1. 원화 표기
 *  2. 1000원 초과 금액만
 *  3. 가격 순 
 * 
 * ... 로직들이 늘어난다면 ? 👉 메소드 체이닝을 활용한다.
 */

const price2 = [100, 200, 300, 400, 500];

const suffixWon = (price) => price + '원';
const isOverThousands = (price) => Number(price) > 1000;
const ascendingList = (a, b) => a - b;

function getWonPrice(priceList) {
    const isOverList = priceList.filter(isOverThousands);
    const sortList = isOverList.sort(ascendingList);

    return sortList.map(suffixWon);
}

// 메소드 체이닝
function getWonPrice(priceList) {
    return priceList
        .filter(isOverThousands) // 1000원 초과 금액만
        .sort(ascendingList) // 가격 순
        .map(suffixWon); // 원화 표기
}

const result = getWonPrice(price2);
console.log(result); // [ '2000원', '3000원', '4000원', '5000원' ]