
// javascript type table 으로 검색하면 자세한 내용을 볼 수 있다.
// == 를 사용한 느슨한 검사는 형변환이 됨으로써 예상치 못한 결과를 초래할 수 있다. 

// 암묵적인 변환
11 + '문자와 결합' // '11문자와 결합'
!!'문자열' // true
!!'' // false

// 명시적인 변환 --> 안전하게 형변환을 하기 위해 명시적으로 변환하는 것이 좋다.
parseInt('9.999', 10); // 9. ---> 2번째 인자는 진수를 나타낸다. 10진수로 변환
String(11 + '문자와 결합') // '11문자와 결합'
Boolean('문자열') // true
Number('11')    // 11


/** 사용자는 타입을 명시적으로 변환할 수 있다. --> 예측하기 쉬운 타입 변환 사용을 추천.
 * JS 는 암묵적으로 타입을 변환하기 때문에 예상치 못한 결과를 초래할 수 있다.
 */