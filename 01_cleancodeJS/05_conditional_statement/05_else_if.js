// else if & else 피하기
// promise-then-catch 와 비슷하다

const x = 1;

if (x >= 0) {
    console.log('x는 0보다 크거나 같습니다.')
}else if(x > 0) {
    console.log('x는 0보다 작습니다.')
} 

// 위와 아래 코드는 물리적으로 동일하다. (else 이후 if 가 실행되는 것)
// else if를 사용하지 않거나 switch 로 바꾸는 게 낫다.
if (x >= 0) {
    console.log('x는 0보다 크거나 같습니다.')
}else {
    if(x > 0) {
    console.log('x는 0보다 작습니다.')
    } 
}

// coverage 가 커지기 때문에 else if 를 사용하지 않는 게 좋다.
if (x >= 0) {
    console.log('x는 0보다 크거나 같습니다.')
} if(x > 0) {
    console.log('x는 0보다 작습니다.')
} 


