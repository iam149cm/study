/** Callback function
 * 
 */

function register() {
    const isConfirm = confirm('회원가입에 성공했습니다');
};

if (isConfirm) {
    redirectUserInfoPage();
}

function login() {
    const isConfirm = alert('로그인에 성공했습니다');
}
if (isConfirm) {
    redirectIndexPage();
}