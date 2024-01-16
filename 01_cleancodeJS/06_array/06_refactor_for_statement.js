/** for 문을 배열 고차함수로 리팩터링하기
 * 1. 원화 표기
 * 
 */

const price = [100, 200, 300, 400, 500];

// 원본
function getWonPrice(priceList) {
    let temp = [];

    for (let i = 0; i < priceList.length; i++) {
        temp.push(priceList[i] + '원');
    } 

    return temp;
}
 
// 1. map 활용
function getWonPrice(priceList) {
    return priceList.map((price) => price + '원');
}

// 2. 1000원 초과 금액만
const suffixWon = (price) => price + '원';
const isOverThousands = (price) => Number(price) > 1000;

function getWonprice(priceList) {
    const isOverList = priceList.filter(isOverThousands);
    return isOverList.map(suffixWon);
}
