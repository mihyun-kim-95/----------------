//welcome 
$('.fixed-welcome .btn-close').click(function(){
    $('.fixed-welcome').addClass('close')
})


//마이페이지 hover 효과
$('.mypage').mouseenter(function(){
    $('.util-area .sub-list').css('display', 'block')
})

$('.mypage').mouseleave(function(){
    $('.util-area .sub-list').css('display', 'none')
})

//nav 슬라이드 효과
$('.nav-item').mouseenter(function(){
    h = $(this).find('.child').outerHeight();

    if(h){
        $(this).children('.sub-area').addClass('on');
        $('.menu-bg').css('height',h);
    }
})

$('.nav-item').mouseleave(function(){
    $('.sub-area').removeClass('on');
    $('.menu-bg').css('height',0);
})

//nav scroll 효과
lastScroll = 0;

$(window).scroll(function(){
    current = $(this).scrollTop();

    if(current > 0){
        $('.header').addClass('fixed');
    }else{
        $('.header').removeClass('fixed');
    }


    if (current > lastScroll) {
        $('.header').addClass('hide');
        $('.logo-slide').addClass('show');
    } else {
        $('.header').removeClass('hide');
        $('.logo-slide').removeClass('show')
    }

    lastScroll = current;
})


//main-slide
const mainSlide = new Swiper(".main-slide", {
    autoplay: true,
    loop: true,
    navigation: {
        nextEl: ".next.main",
        prevEl: ".prev.main",
      },
    pagination: {
        el: ".swiper-pagination",
    }
});

//main-slide 자동재생 정지 
$('.sc-visual .autoplay').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('on')) {
        $('.autoplay').removeClass('on').attr('aria-label','자동재생 정지')
        mainSlide.autoplay.start();
    } else {
        $('.autoplay').addClass('on').attr('aria-label','자동재생 적용')
        mainSlide.autoplay.stop();
    }
})


//banner 슬라이드
const bannerSlide = new Swiper(".banner-slide", {
    loop: true,
    navigation: {
        nextEl: ".next.banner",
        prevEl: ".prev.banner",
      },
});



//img zoom in & flip 효과
$('.list1 .img-wrap').hover(function(){
    cnt = $(this).find('img').length;

    if(cnt === 1){
      $(this).children('img').addClass('zoom');
    }else{
        $(this).children('img').addClass('flip');
    }
})

$('.list1 .img-wrap').mouseleave(function(){
    cnt = $(this).find('img').length;

    if(cnt === 1){
      $(this).children('img').removeClass('zoom');
    }else{
        $(this).children('img').removeClass('flip');
    }
})

//사이즈 확인 효과
$('.size-box').click(function(e){
    e.preventDefault();
    $(this).siblings('.size-table').toggleClass('on');
    $(this).toggleClass('rotate')
})


//고객님을 위한 추천 슬라이드
const recomSlide = new Swiper(".recom-slide", {
    slidesPerView:5,
    spaceBetween:15,
    breakpoints: {
        769: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
      },
    navigation: {
        nextEl: ".next.recom",
        prevEl: ".prev.recom",
      },
});


//이벤트 슬라이드
const eventSlide = new Swiper(".event-slide",{
    slidesPerView:4,
    spaceBetween:15,
    navigation: {
        nextEl: ".next.event",
        prevEl: ".prev.event",
      },
});


//라이브 방송 슬라이드
const liveSlide = new Swiper(".live-slide", {
    slidesPerView:2,
    breakpoints: {
        769: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      },
    navigation: {
        nextEl: ".next.live",
        prevEl: ".prev.live",
      },
});



// trending now 슬라이드
const relatedSlide = new Swiper(".related-slide",{
    simulateTouch:false,
    navigation: {
        nextEl: ".related.btn.next",
        prevEl: ".related.btn.prev",
      },
});


//스타일링팁 슬라이드
//1. tab 효과
$('.sc-styling_tip .hashtagtab-list a').click(function(e){
    e.preventDefault();

    target = $(this).data('target');

    $(this).addClass('active').siblings().removeClass('active');
    $(target).addClass('active').siblings().removeClass('active');
})

//2. 스와이퍼
const stylingtipSlide1 = new Swiper(".tip-slide.hashtag1",{
    slidesPerView:5,
    breakpoints: {
        769: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
      },
    navigation: {
        nextEl: ".next.tip1",
        prevEl: ".prev.tip1",
      },
});

const stylingtipSlide2 = new Swiper(".tip-slide.hashtag2",{
    slidesPerView:5,
    breakpoints: {
        769: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
      },
    navigation: {
        nextEl: ".next.tip2",
        prevEl: ".prev.tip2",
      },
});

const stylingtipSlide3 = new Swiper(".tip-slide.hashtag3",{
    slidesPerView:5,
    breakpoints: {
        769: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
      },
    navigation: {
        nextEl: ".next.tip3",
        prevEl: ".prev.tip3",
      },
});



//베스트 상품 슬라이드
//1. Tab 효과
$('.sc-best .tab-list a').click(function(e){
    e.preventDefault();

    target = $(this).data('target')

    $(this).addClass('active').siblings().removeClass('active');
    $(target).addClass('active').siblings().removeClass('active');
})

//2. 스와이퍼
const bestSlide1 = new Swiper(".best-slide.girl",{
    slidesPerView:5,
    navigation: {
        nextEl: ".next.best1",
        prevEl: ".prev.best1",
      },
    breakpoints: {
        769: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
      },
});

const bestSlide2 = new Swiper(".best-slide.boy",{
    slidesPerView:5,
    navigation: {
        nextEl: ".next.best2",
        prevEl: ".prev.best2",
      },
    breakpoints: {
        769: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
      },
});

const bestSlide3 = new Swiper(".best-slide.toddler",{
    slidesPerView:5,
    navigation: {
        nextEl: ".next.best3",
        prevEl: ".prev.best3",
      },
    breakpoints: {
        769: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
      },
});

const bestSlide4 = new Swiper(".best-slide.male",{
    slidesPerView:5,
    navigation: {
        nextEl: ".next.best4",
        prevEl: ".prev.best4",
      },
    breakpoints: {
        769: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
      },
});

const bestSlide5 = new Swiper(".best-slide.female",{
    slidesPerView:5,
    navigation: {
        nextEl: ".next.best5",
        prevEl: ".prev.best5",
      },
    breakpoints: {
        769: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
      },
});


//뉴아이템 슬라이드
//1. tab 효과
$('.sc-newitem .tab-list a').click(function(e){
    e.preventDefault();

    target = $(this).data('target')

    $(this).addClass('active').siblings().removeClass('active');
    $(target).addClass('active').siblings().removeClass('active');
})

//2. 스와이퍼
const newSlide1 = new Swiper(".newitem-slide.girl",{
    slidesPerView:5,
    navigation: {
        nextEl: ".next.newitem1",
        prevEl: ".prev.newitem1",
      },
    breakpoints: {
        769: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
      },
});

const newSlide2 = new Swiper(".newitem-slide.boy",{
    slidesPerView:5,
    navigation: {
        nextEl: ".next.newitem2",
        prevEl: ".prev.newitem2",
      },
    breakpoints: {
        769: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
      },
});


const newSlide3 = new Swiper(".newitem-slide.toddler",{
    slidesPerView:5,
    navigation: {
        nextEl: ".next.newitem3",
        prevEl: ".prev.newitem3",
      },
    breakpoints: {
        769: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
      },
});

const newSlide4 = new Swiper(".newitem-slide.male",{
    slidesPerView:5,
    navigation: {
        nextEl: ".next.newitem4",
        prevEl: ".prev.newitem4",
      },
    breakpoints: {
        769: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
      },
});

const newSlide5 = new Swiper(".newitem-slide.female",{
    slidesPerView:5,
    navigation: {
        nextEl: ".next.newitem5",
        prevEl: ".prev.newitem5",
      },
    breakpoints: {
        769: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
      },
});


//review 슬라이드
const reviewSlide = new Swiper(".review-slide",{
    slidesPerView:5,
    spaceBetween:15,
    navigation: {
        nextEl: ".next.review",
        prevEl: ".prev.review",
      },
    breakpoints: {
        769: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
      },
});


//pastel green 슬라이드
const exchangeSlide = new Swiper(".exchange-slide",{
    slidesPerView:5,
});

//반복문 사이즈 확인
$('.sc-exchange .size-box').click(function(e){
  e.preventDefault();
  $(this).siblings('.size-table').toggleClass('on');
  $(this).toggleClass('rotate')
})




//footer 배너
const footerBanner = new Swiper(".footer-banner",{
  autoplay:true,
  direction: "vertical",
  loop:true,
})

//반복문

fetch('/asset/data/exchangeData.json')
.then((response) => response.json())
.then((json) => {
    data = json.items;

    let html = "";

    data.forEach(element => {

    html +=`
        <div class="swiper-slide">
                <a href="" class="">
                    <div class="img-wrap">
                        <img src="${element.thumbnail}" alt="">
                    </div>

                    <div class="text-wrap">
                        <em class="brand">${element.brand}</em>
                        <p class="title">${element.title}</p>
                    </div>

                    <div class="price-wrap">
                        <strong class="curr">${element.curr}</strong>
                    </div>

                    <div class="size-wrap">
                        <span class="size-box">사이즈 확인</span>
                        <div class="size-table">
                        <ul class="size-list">
                            <li class="size-item">${element.size}</li>
                        </ul>
                    </div>
                        <span class="cart"><span class="blind">장바구니 담기</span></span>
                    </div>
                </a>
        </div>`
    });

    $('#exchange').html(html)
})

//btn-top
$('.btn-top').click(function(){
  $('html,body').animate({scrollTop:0})
})

$(window).scroll(function(){

  current = $(this).scrollTop();
  if (current <= 10) {
      $('.btn-top').addClass('hide')
  } else {
      $('.btn-top').removeClass('hide')
  }
})
