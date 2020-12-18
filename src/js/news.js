@@include('webpCheck.js');
@@include('slick.js');
@@include('wow.min.js');

$(document).ready(function() {
  // wow.js
  new WOW().init();

  // active .nav-item
  $('.nav-item').eq(2).addClass('nav-item-active')

  // Slider
  $('.slider').slick({
    arrows: false, 
    dots: true, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    speed: 750, 
    infinite: false, 
    initialSlide: 1, 
    autoplay: false, 
    autoplaySpeed: 10000, 
    pauseOnFocus: true, 
    pauseOnHover: true, 
    centerPadding: '0', 
    lazyLoad: 'progressive', 
    touchTreshold: 1, 
  });

  // Popup
  $('.toContact').on("click", function() {
    var $pp = $('.popup');
    $pp.addClass('popup-active');
    $('html').addClass('fixed-page');
    $(document).mouseup(function (e){ // событие клика по веб-документу
      if (!$pp.is(e.target) // если клик был не по нашему блоку
          && $pp.has(e.target).length === 0) { // и не по его дочерним элементам
        $pp.removeClass('popup-active');
        $('html').removeClass('fixed-page');
      }
    })
  })
  $('.popup-escape').on("click", function() {
    var $pp = $('.popup');
    $pp.removeClass('popup-active');
    $('html').removeClass('fixed-page');
  })
})