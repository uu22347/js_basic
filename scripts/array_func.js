// array_func.js
// 여러개의 값을 변수에 저장할 수 있는 배열
// 특정 동일 주제에 묶여있는 2개 이상의 값 배열로 묶음.

// 배열 사용안한 경우
const month = '월';
const tue = '화';
console.log(month, tue);

// 배열 사용한 경우
const yoil = ['월', '화', '수','목','금','토','일'];
console.log(yoil); //모든 배열 출력
console.log(yoil[0]); //배열 값 중 원하는 인덱스 출력
console.log(yoil.length); //요일 객체의 길이속성

//-----------------------------배열 기초 1.
//원하는 색상을 자유롭게 6개 배열로 저장하고
//그 중 좋아하는 색상만 인덱스로 골라 콘솔로그로 출력하기
const color = ['white','black','gray','red','blue','purple'];
console.log(color);
console.log(`내가 좋아하는 색상은 ${color[1]}`);

//배열 생성법 2.
// new Array() 내장함수 선언법

let wh = new Array(2); //숫자 2 대입(x), 빈 배열 위치 2자리 삽입(o)
console.log(wh);

wh[0] = 100;
wh[1] = 50;
console.log(wh);

//---------------------------신발 쇼핑몰 색상/사이즈 배열
let colorSize = new Array(2); //빈배열 2개 준비
//colorSize[0] = prompt('pink, white 중 하나를 선택하세요');
//colorSize[1] = prompt('220, 230, 240 중 하나를 선택하세요');
colorSize[0] = 'white';
colorSize[1] = 240;
let order = `주문옵션 : 색상:${colorSize[0]}, 사이즈:${colorSize[1]}`;
console.log(order);

//-----------------의류쇼핑몰 선택옵션 배열로 만들기
//사이즈 : S M
//색상 : 화이트, 블랙, 그레이
//추가상품 : 양말, 손수건
let optionArr = new Array(3);
//optionArr[0] = prompt('S M 중 하나를 선택하세요');
//optionArr[1] = prompt('화이트, 블랙, 그레이 중 하나를 선택하세요');
//optionArr[2] = prompt('양말, 손수건 하나를 선택하세요');
optionArr[0] = 'M';
optionArr[1] = '그레이';
optionArr[2] = '손수건';
order = `선택옵션 : 사이즈:${optionArr[0]}, 색상:${optionArr[1]}, 추가상품:${optionArr[2]}`;
console.log(order);

//-----------------배열과 사용자정의함수
//날씨 소식 앱
//출력예시 1) 오늘은 맑음, 내일은 비 소식이 있습니다.
//출력예시 2) 오늘은 흐림, 내일은 눈 소식이 있습니다.
//출력예시 3) 오늘은 눈, 내일은 맑음 소식이 있습니다.
//날씨 상태를 저장한 배열
const weather = ['맑음','흐림', '눈', '비']
//함수 실행 시마다 다른 데이터를 전달하는 매개변수
weatherFunc(0, 3);
weatherFunc(1, 2);
weatherFunc(2, 0);
function weatherFunc(today, tomorrow){
    let msg =`오늘은 ${weather[today]}, 내일은 ${weather[tomorrow]} 소식이 있습니다.`;
    console.log(msg);
}

//-----------------영화 좌석 예매 배열 + 함수
//일반 2명 좌석 선택 기준
//일반 1명당 표 가격은 10,000원 -> 2명 20,000원
let cgvSeat = new Array(2); // 빈 좌석 2개 준비
const price = 10000; //일반 1명 만원 준비
cgvSeat[0] = 'e12';
cgvSeat[1] = 'e13';
//함수호출
cgvFunc(cgvSeat[0], cgvSeat[1],price*cgvSeat.length);

function cgvFunc(seat1,seat2,won){
    let movie = `일반 2명 예약한 좌석은 ${seat1}, ${seat2}이고,`;
    movie += `결제 가격은 ${won.toLocaleString('ko-kr')}원입니다.`
    console.log(movie);
}

// ---------------------------------구구단 함수
//아래 함수 활용 매개변수 추가와 함께 2단~9단까지 모두 출력할 수 있는 함수 만들기
//+아래 함 수의 틀린 부분 찾아서 고치기
dan99(2); //(안에 생성된 매개변수 자리에 대입해야하는 값 입력 위치)
dan99(3);
dan99(4);
dan99(5);
dan99(6);
dan99(7);
dan99(8);
dan99(9);
function dan99(num){//num 매개변수를 생성(호출 시 대입받는 값을 받는 위치)
    let dan = '';
    dan += `${num}x1=${num*1}`;//num 호출 시 대입받은 값을 최종 전달 받는 위치
    dan += `${num}x2=${num*2}`;
    dan += `${num}x3=${num*3}`;
    dan += `${num}x4=${num*4}`;
    dan += `${num}x5=${num*5}`;
    dan += `${num}x6=${num*6}`;
    dan += `${num}x7=${num*7}`;
    dan += `${num}x8=${num*8}`;
    dan += `${num}x9=${num*9}`;
    console.log(dan);
}