/** Optional Chaining (선택적 연산자) ?. 
 * - ?. 앞의 값이 undefined나 null이면 undefined를 반환하고, 그렇지 않으면 ?. 뒤의 값을 반환한다.
 */

const obj = {
    title: 'value'
}

obj.title // obj. 을 통해 title의 값에 접근 가능
obj?.title // obj가 존재하면 obj.title을 반환하고, 존재하지 않으면 undefined를 반환한다.

const response = {
    data : {
        userList : [
            {
                name : 'name1',

                // 데이터의 depth 가 매우 깊다.
                info : {
                    tel : '010-0000-0000',
                    email : 'test@test.com',
                }
            },
            
        ]
    }
}

response.data.userList[0].info.email // .연산자로 chaining을 통해 접근하고 있다. 이는 런타임에서 터질 수 있다.
function getEmailByUser(userIndex) {
    return response.data.userList[userIndex].info.email
}

getEmailByUser(0) // 'test@test'

// 만약 userList 가 없다면? 
// 아래와 같이 작성할 수 있지만, 만약 data도 없다면? 모든 경우의 수에 대해 if문을 작성할 수 없다.
function getEmailByUser(userIndex) {
    // if(response.data.userList) {
        
    if(response?.data?.userList) { // ?. 로 이루어진 체이닝을 통해 data가 존재하지 않으면 undefined를 반환한다.
        return response.data.userList[userIndex].info.email
    }
    return '알 수 없음'
}