//index.js
//변수
const heroBnr = document.querySelector('.hero_bnr');
const marketBnr = document.querySelector('.market_bnr');


const heroSlide = new Swiper(heroBnr,{
    //옵션:값,
    //옵션:{옵션:값, 옵션:값,}.
    loop:true,/* 슬라이드 끝 -> 시작 반복 true,false */
    //direction:'vertical',/* 슬라이드 방향 : horizontal수평(기본값) vertical수직 */
    //제자리 나타나기/사라지기 할때는 direction 적용해제
    effect:'fade',//fade, cube, flip
    // mousewheel:true, 마우스휠 가능 옵션
    //자동재생
    autoplay:{
        delay:1000,///1000== 1초
        pauseOnMouseEnter:true,//마우스가 올라오면 일시정지
        disableOnInteraction:true,//마우스 상호작용 후에 멈출건지, 움직일건지(false) 옵션
    },
});

const marketSlide = new Swiper(marketBnr,{
    loop:true,
    autoplay:{delay:2000,},
})