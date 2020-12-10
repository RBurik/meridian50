@@include('webpCheck.js');
@@include('slick.js');
@@include('jquery.maskedinput.js');
$(document).ready(function() {
  $('.slider').slick({
    arrows: false, 
    dots: false, 
    slidesToShow: 2, 
    slidesToScroll: 1, 
    speed: 150, 
    infinite: false, 
    initialSlide: 1, 
    autoplay: false, 
    autoplaySpeed: 10000, 
    pauseOnFocus: true, 
    pauseOnHover: true, 
    centerPadding: '0', 
    lazyLoad: 'progressive', 
    touchTreshold: 20, 
  });

  // Masked Input
  $('.maskedInput').mask('9 (999) 999-99-99');

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
})
$('.popup-escape').on("click", function() {
  var $pp = $('.popup');
  $pp.removeClass('popup-active');
  $('html').removeClass('fixed-page');
})
