/** 직접 접근 지양하기
 * - flux 아키텍처 : action --> reducer 를 거쳐 store 에 접근하여 값을 변경한다.
 * - 이유 : 어플리케이션의 상태를 변경하는 로직을 모두 한 곳에 모아두면, 어플리케이션의 상태를 파악하기가 쉬워진다.
 * - 자바스크립트의 클린 코드는 '예측 가능한' 코드를 작성하는 것이다.
 */


// model 에 직접 접근 지양
const model = { 
    isLogin: false,
    isValidToken: false,
}

// model 에 대신 접근
function setLogin(bool) { 
    model.isLogin = bool;
    serverAPI.log(model.isLogin);
}

function setValidToken(bool) { 
    model.isValidToken = bool;
    serverAPI.log(model.isValidToken);
}

// model 에 직접 접근 X
function login() {
    // model.isLogin = true; // model 객체의 isLogin 프로퍼티에 직접 접근하여 값을 변경한다. --> 이런 코드는 지양해야 한다.
    // model.isValidToken = true;

    setLogin(true); // model 객체에 접근하는 코드를 모두 제거하고, model 객체에 접근하는 로직을 캡슐화하여 함수로 만들어 사용한다.
    setValidToken(true); // 이렇게 하면 model 객체에 접근하는 코드가 단 한 곳에만 존재하게 된다. 
}

function logout() {
    // model.isLogin = false;
    // model.isValidToken = false;
    setLogin(false);
    setValidToken(false);
}

someElement.addEventListener('click', login);