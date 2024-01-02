/** 🔥 undefined vs null 🔥 
 * undefined : 값이 할당되지 않은 상태
 * null : 값이 없는 상태. 없는 것을 명시적으로 표현
 */

// 🔥🔥🔥 null 🔥🔥🔥
!null // true
!!null // false

null === false // false
!null === false // true

// null 은 수학 연산에서 0으로 간주된다.
null + 123 // 123


// 🔥🔥🔥 undefined 🔥🔥🔥
let varb;
typeof varb // undefined. 변수를 선언했지만 값을 할당하지 않은 상태

undefined + 10 // NaN --- Not a Number
!undefined // true
undefined == null // true
undefined === null // false
undefined === !null // true

/** 🔥 요약
 * undefined, null 은 값이 없거나 정의되지 않은 것. 없다는 것을 명시적으로 표현 (null)
 * null 은 숫자로 표현하면 0, undefined 는 숫자로 표현하면 NaN
 * undefined 는 type undefined, null 은 type object
 * ---> 쓰임을 조심해야 한다.
 */