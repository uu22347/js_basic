const filterView = document.querySelector('#filter_view');
const filterList = document.querySelector('.filter_list');
let filterListShowHide = false; //초기값(숨김)
console.log(filterView, filterList);

//필터목록 초기 숨기기(false) (객체.속성.속성 = 값;)
filterList.style.display = 'none';

//필터보기를 클릭 시
filterView.addEventListener('click',function(){
    //필터가 숨겨진(false) 상태면 -> 보이기
    //if(filterList == style.dislpay = 'none'){} (xx)
    if(filterListShowHide == false) {
        filterList.style.display = 'flex';
        //filterListShowHide = true;
        //위 코드 해석
        //flex로 보이는 상태가 됐으므로 js의 상태변수도 참(true)로 대입해서 추적가능하게 만들기
        filterListShowHide = !filterListShowHide;
        //위 코드 해석
        //상태변수의 값을 반전(!)시켜서 상태변수에 대입(=) 한다
        console.log(filterListShowHide);
    }
    //필터가 보이는(true) 상태면 -> 숨기기
    else if(filterListShowHide == true) {
        filterListShowHide = !filterListShowHide;
        filterList.style.display = 'none';
    }
})

// 필터기능
// 전체보기 -> 사과, 바나나, 브로콜리, 당근
// 과일 -> 사과, 바나나
// 채소 -> 브로콜리, 당근
const filterA = filterList.querySelectorAll('.list');
const filtetContents = document.querySelectorAll('.contents li');
console.log(filterA, filtetContents);//NodeList 츌룍 사 [index] 개별구분

//data-name, data-category
//필터 data-name 중 원하는 값을 클릭하면 data-category 중 같은 값을 가지고 있는 대상을 화면에 출력함

for(let f of filterA){
    console.log(f); //for문으로 반복개별출력 [index] 필요없음
    f.addEventListener('click', function(e){
        e.preventDefault();
        console.log('클릭된 a:', f);
        for(let list of filtetContents){//필터보기메뉴 클릭 시 인식해야하는 상품목록들
            console.log(list);
            //클릭한 f가 전체보기 -> list 전체 보이기
            //console.log(f.dataset.name); //클릭한 필터의 data name 출력테스트
            list.style.display = 'none';
            if(f.dataset.name == 'all') list.style.display = 'block';
            //클릭한 f가 과일 -> data-name="fruit"와 일치하는 list 찾아서 보이기
            //console.log(list.children[0].dataset.category);
            //클릭한 f가 채소 -> data-name="veggi"와 일치하는 list 찾아서 보이기
            else if(f.dataset.name == list.children[0].dataset.category) list.style.display = 'block';
        }
    })
}