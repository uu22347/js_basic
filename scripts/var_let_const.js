// var_let_const.js
// 객체(제어 목적 데이터), 속성(객체 속성), 메서드(객체 실행)
console.log(bowl); // 변수 정의되지 않음 undefinesd(error)
var bowl; //빈 그릇
console.log(bowl); // 변수 값 정의되지 않음 undefined
bowl = '밥'; //'' 문자데이터를 변수에 대입
console.log(bowl);
bowl = '콩'; // '밥' 기존데이터 제거하고 '콩' 새로운 데이터 대입
console.log(bowl); //console 객체에 메서드log로 bowl변수를 실행

console.log('----------------------');
// 변수 a, b, c 대입연습
// 1. 변수생성
var a;
var b;
var c;
console.log(a,b,c); // 값 정의 안됨*3 undefinesd 
a = 1; // var 안쓴 이유? 위에서 이미 선언 되었으니까.
console.log(a) // 실행 위치에 따라 다른 값 출력
b = 2;
c = 3;
console.log(a,b,c); // 1 2 3
a = b; // b변수값을 a변수에 대입한다(a변수의 기존값 제거)
b = c; // c변수값을 b변수에 대입한다(b변수의 기존값 제거)
console.log(a,b,c); // 2 3 3
console.log('----------------------');
//let 과 var 차이점
// box1, box2 변수 연습
var box1; 
let box2;
console.log(box1,box2); 
var box1 = 10; // 중복 변수 생성 시 에러못잡음
console.log(box1);
// let box2 = 20; //중복 선언 불가, 에러발생
box2 = 20; //이미 생성됐으므로 생성키워드 제외하고 대입
console.log(box2);

// let, const 비교
// x,y 변수
let x = -10; //생성(let)과 대입(=) 동시 수행
const y = 5; //상수 5 생성, 대입 동시 수행
console.log(x,y);
x = 0; //x 값 변경(기존값 제거)
//y = 7; //상수를 변경하려고 하면 에러 

//웹사이트 가입 회원정보 변수
//이름, 나이, 사는 곳
let user_name = '홍길동';
let user_age = 20;
let user_address = '인천시 부평구';
console.log('홍길동'); //x 변수에 담긴 데이터 사용 시 데이터 그대로 출력 안됨
console.log(user_name); //o 변수명을 활용해서 데이터 출력해야함
//홍길동은 20살이고 인천시 부평구에 삽니다.
//user_name은 user_ag살이고 user_address에 삽니다.
console.log(user_name+'은 '+user_age+'살이고 '+user_address+'에 삽니다.');
console.log(`${user_name}은 ${user_age}살이고 ${user_address}에 삽니다.`);
//+ 연결연산자, 더하기연산자
//홍길동은 내년에 21살이 됩니다.
console.log(user_name+'은 내년에 '+(user_age+1)+'살이 됩니다.');
//홍길동은 오늘 21살이 됐습니다.
user_age = 21;
console.log(user_name+'은 오늘 '+user_age+'살이 됐습니다.');

// 쇼핑몰 상품 변수
// 상품명 : 후드 윈드브레이커
// 가격 : 53910
// 상품명, 가격, 수량 변수 생성하기
const product_item = '후드 윈드브레이커';
const price = 53910;
let num = 1;
//후드윈드브레이커 1개 가격은 53910원입니다.
//템플릿 문자열 활용 출력
console.log(`${product_item} ${num}개 가격은 ${price}원입니다.`);
//주문수량 3개, 총 결제금액은 161730원입니다.
num = 3;
console.log(`주문수량 ${num}개, 총 결제금액은 ${price*num}원입니다.`);
