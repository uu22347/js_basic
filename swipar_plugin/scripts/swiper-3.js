const heroBnr = document.querySelector('.ssf_hero')
const nikeSlide = document.querySelector('.nike_swiper')
const honeySlide = document.querySelector('.gift_product')
console.log(heroBnr,nikeSlide,honeySlide);

const heroSwiper = new Swiper(heroBnr,{
    slidesPerView:3, //한번에 보이는 슬라이드 개수
    spaceBetween:0, //간격
    loop:true,
    autoplay:{delay:2000,},
    // pagination:{el:'',},
    navigation:{
        nextEl:'.ssf_hero .next',
        prevEl:'.ssf_hero .prev',
    }
})

const nikeSwiper  = new Swiper(nikeSlide,{
    slidesPerView:3,
    spaceBetween:20,
    loop:true,
    autoplay:{delay:3000,},
    navigation:{
        nextEl:'.slide_g .next',   
        prevEl:'.slide_g .prev',
    }
})

const honeySwiper  = new Swiper(honeySlide,{
    slidesPerView:4.8,
    spaceBetween:20,
    loop:true,
    navigation:{
        nextEl:'.gift_product .next',   
        prevEl:'.gift_product .prev',
    }
})