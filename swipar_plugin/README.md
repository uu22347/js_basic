# Swiper Javascript Plugin
* 플러그인을 통해 쉽게 만드는 슬라이드 자바스크립트 동작
    * swiper-wrapper, swiper-slide는 개별 크기 입력하지 않기 
    * swiper plugin 대표 css 내장속성:값 
    * 1. swiper : position, overflow 
    * 2. swiper-wrapper : flex 
    * 3. swiper-slide : position, transform 
## Swiper 작성 준비
0. `head` 태그 안 `title` 아래 Swiper 사용을 위한 CDN 연결
    `</title> **CDN연결파일들** reset, css, 개별js 등 연결마무리`
    <!--swiper 필수 css cdn 연결-->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <!--swiper 필수 JS cdn 연결-->
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
1. `html` 파일내에서 슬라이드 삽입 위치에 다음과 같이 태그작성
    `div.swiper>div.swiper-wrapper>div.swiper-slide`
    `div.swiper` : swiper 플러그인 시작 위치(js 연결지점)
    `swiper-wrapper` : 슬라이드들 부모 역할(flex 내장)
    `swiper-slide` : 개별 슬라이드들 `*숫자` 개수 생성
2. 1번에서 생성한 태그에 대상구분용의 별도 클래스 따로 생성
    `div.swiper.개별클래스명`
        ->`<div class="swiper 개별클래스명">`
    `div.swiper-slide.slide 번호`
        ->`<div class="swiper-slide slide1">`
3. 프로젝트 디자인에 따라 필요한 추가 태그들을 작성
    `div.swiper-slide` 안에 `a, h, p, table, form, div 등..`
4. CSS 선택자 준비(개별, 공통용 모두)
    **주의사항**
    * `swiper-wrapper, swiper-slide`
        `display, width, height, position` 적용하지 않기
    * `swiper` 제일 바깥쪽 swiper 시작태그한테만 크기 적용
    * `swiper-slide` 안 3번 목적으로 만든 태그들은 속성 자유
5. 3S JS DOM 변수 준비 -> swiper 연결
    * `const 변수명 = document.querySelector(대상);`
    * `const 변수명 = new Swiper(스와이프 적용 변수명, {옵션:값, 옵션:값,});`
## Swiper {option:value,} 종류와 뜻
direction:'vertical' -> 슬라이드 방향 horizontal수평(기본값) vertical수직
    제자리 나타나기/사라지기 시 direction 적용해제하기
`true, false (실행 시 true,)`
* `loop:true,` 슬라이드 시작 -> 끝 반복
* `effect:` 'fade', 'cube', 'flip' 슬라이드 넘겨지는 효과 종류
* `mousewheel:true,`, 마우스휠로 슬라이드 넘기기 가능
* autoplay:{  //자동재생
    `delay:,` elay:1000,->1초
    `pauseOnMouseEnter:true,` 마우스가 올라오면 일시정지
    `disableOnInteraction:true,`마우스 상호작용 후에 멈출건지, 움질인건지(false)
    }
### Swiper 선택요소(페이지번호, 이전다음버튼, 스크롤바) 주의사항
* 기본 작성위치는 `swiper-wrpper`의 다음 형제 위치
    * `swiper`의 첫번째 자식(swiper-wrppe) 두번째자식(선택요소들)
    * **절대 `swiper-slide`와 형제, 자식, 자손 위치에 배치하지 않기**
* 기본 순서 : html -> js swiper options세팅 -> (선택)css
* **아래 선택요소들 태그는 자식, 자손으로 다른 태그 삽입 금지**
    * `div.swiper-pagination`
    * `div.swiper-button-prev`
    * `div.swiper-button-next`
    * `div.swiper-scrollbar`
    * `<div class="swiper-pagination">내용금지</div>`
## Swiper 선택요소(pagination,prev, next, scrollbar) 디자인 규칙& 주의사항
### 기존 Swiper-slide 겹치는 디자인을 하고 싶을 때
* 태그 위치`div.swiper` 두번째 자식 위치로 생성
### 기존 Swiper-slide 외부 바깥쪽으로 안겹치는 디자인을 하고 싶을 때
* 태그 위치`div.swiper` 다음 형제 위치로 생성
* `div.swiper`와 생성된 선택태그를 묶어주는 추가 태그 생성(디자인에 따라 다름)
### 교차 여부에 따라 태그 위치를 다르게 해야하는 이유
* `div.swiper`에 기본CSS로 `overflow:hidden` 있으므로 그 값을
`visible`로 바꾸면 선택요소 뿐 아닌 `swiper-slide`들도 모두 보이기 때문에 원하는 레이아웃을 만들 수 없음.
## Swiper 안에 추가 Swiper 생성 시 안쪽 Swiper 마우스 드래그 안될 때 해결방법
* 안쪽 Swiper js 옵션:값으로 아래와 같이 작성
    * `nested:true,`
    * 부모 swiper와 겹쳐 있을 때 드래그 충돌방지 옵션:값