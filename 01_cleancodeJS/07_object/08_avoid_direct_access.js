/** 직접 접근 지양하기
 * 
 */

const model = {
    isLogin: false,
    isValidToken: false,
}

function login() {
    model.isLogin = true;
    model.isValidToken = true;
}

someElement.addEventListener('click', login);