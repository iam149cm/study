/** Callback function
 * - 함수의 제어권을 넘겨받은 함수가 호출하는 함수. 함수를 개발자가 제어하지 않는다. (제어권의 위임)
 */

// 콜백함수의 예시
someElement.addEventListener('click', function(e) { // 익명함수를 콜백함수로 사용
    // Do something
});

DOM.prototype.addEventListener = function(eventType, callback) {
    if (eventType == 'click') {
        const clickEventObject = {
            target : {},
        }

        callback(clickEventObject);
    }
}


// 🔥🔥🔥🔥🔥🔥🔥🔥
// 두 함수는 isConfirm이라는 변수를 공유하지만 서로 다른 동작을 한다. 어떻게 리팩토링 할 수 있을까?
function register() {
    const isConfirm = confirm('회원가입에 성공했습니다');
};

if (isConfirm) {
    redirectUserInfoPage();
}

function login() {
    const isConfirm = confirm('로그인에 성공했습니다');
}
if (isConfirm) {
    redirectIndexPage();
}

// 리팩토링 🔥🔥🔥🔥🔥🔥🔥🔥
function confirmModal(msg, cbFunc){
    const isConfirm = confirm(msg);
    if (isConfirm && cbFunc) {
        cbFunc();
    }
}

function register() { // 콜백함수는 함수를 실행시키지 않고 함수 그 자체를 전달해야 한다.
    confirmModal('회원가입에 성공했습니다', redirectUserInfoPage);
}

function login() {
    confirmModal('로그인에 성공했습니다', redirectIndexPage);
}