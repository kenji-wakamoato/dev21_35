// jsを記述する際はここに記載していく
let mySwiper = new Swiper('.swiper-container', {
        // 繰り返し 
        loop: true,
        // 自動再生
        autoplay: {
            // ４秒待って再生
             delay: 4000,
        },
        // それ以降は２秒間隔で再生
        speed: 2000,
    
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
    
});
// リンク先にヌルッと飛ぶ

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
 
        var target = this.hash;
        var $target = $(target);
 
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 2000, 'swing', function () {
        window.location.hash = target;
        });
    });
});

// ハンバーガーメニュー

(function($) {
    var $nav   = $('#navArea');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
      if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
      } else {
        $nav.removeClass( open );
      }
    });
    // mask close
    $mask.on('click', function() {
      $nav.removeClass( open );
    });
  } )(jQuery);

//   teacherフェードイン

$(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.scrollanime').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fadeInDown");
            }
        });
    });
});

var body = document.querySelector('body');
var cntLoading = document.querySelector('#animation');

var animationTivel = lottie.loadAnimation({
	container: cntLoading,
	renderer: 'svg',
	loop: false,
	autoplay: true,
	path: "js/way.json"
});

animationTivel.play();
var start = performance.now();

function loadContent(){
    animationTivel.stop();
    cntLoading.classList.add('loaded');
}

window.onload = function(){
    var end = performance.now();
    var loadingTime = (end - start).toFixed(0);
    console.log(loadingTime);
    if( loadingTime < 5000){
        // ローディングが早く終わったときは時間調整
        setTimeout('loadContent()', 5000 - loadingTime);
        return;
    }else{
        loadContent();
    }
}