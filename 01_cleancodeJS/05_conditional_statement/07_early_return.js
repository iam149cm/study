// Early Return : 조건문을 사용할 때, 조건이 맞지 않을 때는 빨리 return을 해서 함수를 종료하고, 조건이 맞을 때만 필요한 로직을 실행하는 것

function loginService(isLogin, user) {
    if (!isLogin) {
        if(checkToken()) {
            if(!user.nickName) {
                return registerUser(user);
            } else {
                refreshToken();
                return '로그인 성공'
            }
        } else {
            throw new Error('No Token');
        }
    } 
}

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥 

function login() {
    refreshToken();
    return '로그인 성공'
}
 
// 얼리 리턴을 사용하면 코드가 더 깔끔해진다. 함수를 미리 종료시키고, 조건이 맞을 때만 필요한 로직을 실행한다.
// 사고하기 편해진다.
function loginService(isLogin, user) {
    if (!isLogin) {
        return 
    } 

    if (checkToken()) {
        throw new Error('No Token');
    }

    if(!user.nickName) {
        return registerUser(user);
    } 

    login();
}  


// 🔥🔥🔥🔥🔥🔥🔥🔥🔥 

