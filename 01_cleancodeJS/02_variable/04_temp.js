// 임시변수
function getElements1() {
    // 임시변수이지만 함수가 커지면 전역이나 다름없어짐
    const result = {}; // 임시객체

    // 이렇게 할 필요가 없다. 
    result.title = document.querySelector('.title');
    result.text = document.querySelector('.text');
    result.value = document.querySelector('.value');
    
    return result;
}

// BETTER WAY 🙌
// 임시 객체가 생기는 순간 이 객체를 접근, CRUD할 수 있기 때문에 하기와 같이 하는 것이 더 깔끔
function getElements2() {
    return {
        title:  document.querySelector('.title'),
        text : document.querySelector('.text'),
        value : document.querySelector('.value'),
    }; 
}
    

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// 추가적인 스펙, 요구사항이 생겼을 때 
// 함수를 추가로 만든다 vs 함수를 유지보수하며 수정
// 함수를 수정한다면 ? 다른 곳에서 사용하는 곳이 있을 수 있음
function getDateTime1(targetDate) {
    let month = targetDate.getMonth();
    let date = targetDate.getDate();
    let hours = targetDate.getHours();
    
    month = month > 10 ? month : '0' + month;
    date = date > 10 ? date : '0' + date;
    hours = hours > 10 ? hours : '0' + hours;

    return;
}


// BETTER WAY 🙌
// 추가 수정사항이 있을 경우? 함수를 추가로 만든다.
function getDateTime2(targetDate) {
    const month = targetDate.getMonth();
    const date = targetDate.getDate();
    const hours = targetDate.getHours();

    return {
        month : month > 10 ? month : '0' + month,
        date : date > 10 ? date : '0' + date,
        hours : hours > 10 ? hours : '0' + hours,
    };
}

function getDateTime3() {
    const currentDateTime = getDateTime(new Date());
    
    // CRUD 를 최소화 한다. 추상화 할 수 있다.
    return {
        month : currentDateTime.month + ' 전',
        date : currentDateTime.date + ' 전',
        hours : currentDateTime.hours + ' 전',
    }
}

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// 하나의 역할만 하는 함수를 만드는 것이 좋다. 최종적으로 값이 예측되는 함수를 만들어야 한다.
// 임시변수를 제거해야 하는 이유 : 명령형으로 가득한 로직. 어디서 잘못되었는지 디버깅이 힘들다. 
// 함수를 하나의 역할만 하도록 만들어야 한다. 

// 해결책 : 하나의 역할만 하는 함수를 만들어야 한다. 바로 리턴. 고차함수를 사용한다.
// 고차함수 : 함수를 인자로 받거나 함수를 리턴하는 함수. map, filter, reduce...
// 함수형 프로그래밍 : 함수를 조합해서 로직을 만드는 것.
function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max + 1) + min);
}
