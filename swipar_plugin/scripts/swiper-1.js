const wrap = document.querySelector('#wrap');
const web = document.querySelector('.web');
const graphic = document.querySelector('.graphic');

const webSwiper = new Swiper(web,{
    //effect:'fade',
    autoplay:{delay:20000,},
    loop:true,
    pagination:{
        // 페이지대상 HTML 연결, 모양, 동적옵션
    el:'.web + .web_page', //부모선택자1~2개는 작성해서 구분해주기
    type:'fraction', //bullets(기본값), fraction
    //dynamicBullets:true, //type이 bullets(기본값)일때만 가능
    },
});

const graphicSwiper = new Swiper(graphic,{
    autoplay:{delay:2000,},
    loop:true,
    pagination:{
    el:'.project2 .group2 .graphic_page',
    type:'bullets',
    },
});

const wrapSwiper = new Swiper(wrap,{
    //옵션:값, 옵션:{옵션:값,},
    mousewheel:true,
    speed:1000,
    direction:'vertical',
});
console.log(wrap);

