//bom_dom.js
//함수기초연습
function calc(num2){
    let num1 = 2;
    let total = num1 + num2;
    console.log(`total=>${total}`)
}
calc(1000);
calc(5);
calc('1');

//1400px / 4 - 20px
//1024px / 3 - 20px
//420px / 2 - 20px
// 결과 예시) width:?px

function widthClac(width, num){
    let calc = (width - 20) / num;
    let total = `width:${calc.toFixed(1)}px`
    //반올림해서 소수점 한자리까지 표시하라는 함수 toFixed() *문자열로 처리됨
    console.log(total)
}
widthClac(1400, 4);
widthClac(1024, 3);
widthClac(420, 2);

// BOM 내장함수 종류
// window.함수(); //window 최상위 객체라 생략가능
// let bom1 = window.alert('경고메세지')

document.write('메세지')
document.write('메세지<br>2')
document.write('<h2>메세지3</h2>')

// DOM(document object model)
// 변수생성 -> 변수활용 연산자 또는 함수 진행
// DOM변수생성 -> 나머지 순서 동일
const h1Tag = document.getElementsByTagName('h1');
console.log(h1Tag);
// js에 의해 동적으로 변경되는 결과에 따라 스타일 변동을 위해 자바스크립트 안ㄴ에서도 css를 작성할 수 있다.
// DOM객체.style.속성 = '값';
// DOM객체.style = '속성:값';
h1Tag[0].style.backgroundColor  = '#ff0';
h1Tag[0].style.border  = '#000 1px solid';
// h1Tag[0].style = 'border: #000 1px solid';

//쿨래스 DOM 선택
const titleCls = document.getElementsByClassName('title');
console.log(titleCls);

titleCls[0].style.border = '2px solid #d5d5d5';
titleCls[0].style.fontSize = '1.2rem';
titleCls[0].style.padding = '20px 30px';
titleCls[1].style.borderBottom = '2px dashed #f00';

//아이디DOM
const txtId = document.getElementById('txt');
console.log(txtId);
txtId.style.borderBottom = 'lime 2px solid'; 
txtId.style.textAlign = 'right'; 

//ES6ver DOM
//title 클래스 잡기
const titleClsQ = document.querySelector('.title');
console.log(titleClsQ);

//h1 태그 잡기
const h1TagQ = document.querySelector('.box h1');
console.log(h1TagQ);

//아이디 잡기
//변수 생성 -> 스타일 적용
const txtIdQ = document.querySelector('#txt');
console.log(txtIdQ); //null, undefined 오류
txtIdQ.style.fontWeight = '900';

// All 키워드 활용 클래스 여러개 잡기
const titleAll = document.querySelectorAll('.box .title');
console.log(titleAll);
titleAll[1].style.backgroundColor = 'red';

//스타벅스 카테고리/테마 메뉴 JS 만들기
//특정 목표 달성을 위한 절차적 순서 흐름 계획
//초기모습 -> 사용자의 동적 움직임에 따라 변화되는 모습
//html, css 준비된걸 기준으로 작성
//1. 테마 내용 숨기기
//2. 테마 제목 클릭
//3. 카테고리 내용 숨기기, 테마 내용 보이기
//4. 카테고리 제목 클릭
//5. 카테고리 내용 보이기, 테마 내용 숨기기

//1. 테마 내용 숨기기
//숨기기(동작) 실행하려면 테마내용(요소) 필요
//변수
const theme = document.querySelector('.theme');
const themeTitle = document.querySelector('.tab_title a:nth-child(2)');
const category = document.querySelector('.category');
const categoryTitle = document.querySelector('.tab_title a:nth-child(1)');
//변수 테스르 (에러 조기 확인)
console.log(theme, themeTitle, category, categoryTitle);
//실행
theme.style.display = 'none';
//2. 테마 제목 클릭
themeTitle.addEventListener('click',themeShow);
//3. 카테고리 내용 숨기기, 테마 내용 보이기
function themeShow(){
    category.style.display = 'none';
    theme.style.display = 'block';
}
//4. 카테고리 제목 클릭
categoryTitle.addEventListener('click',categoryShow);
//5. 카테고리 내용 보이기, 테마 내용 숨기기
function categoryShow(){
    category.style.display = 'block';
    theme.style.display = 'none';
}