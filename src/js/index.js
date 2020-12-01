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

  // Change button's background-color on Contact's section
  $('.section-contact input[type="radio"]').on("click", function() {
    var $index = $(this).parent().index();
    if ($index == 1) {
      $('.section-contact .button-form').removeClass('button-purple');
      $('.section-contact .button-form').removeClass('button-violet');
      $('.section-contact .button-form').removeClass('button-pink');
      $('.section-contact .button-form').addClass('button-blue');
    } else if ($index == 2) {
      $('.section-contact .button-form').removeClass('button-blue');
      $('.section-contact .button-form').removeClass('button-violet');
      $('.section-contact .button-form').removeClass('button-pink');
      $('.section-contact .button-form').addClass('button-purple');
    } else if ($index == 3) {
      $('.section-contact .button-form').removeClass('button-purple');
      $('.section-contact .button-form').removeClass('button-blue');
      $('.section-contact .button-form').removeClass('button-pink');
      $('.section-contact .button-form').addClass('button-violet');
    } else {
      $('.section-contact .button-form').removeClass('button-purple');
      $('.section-contact .button-form').removeClass('button-violet');
      $('.section-contact .button-form').removeClass('button-blue');
      $('.section-contact .button-form').addClass('button-pink');
    }
  })

  // Fix Header
  let $header = $('.header');
  
  $(window).scroll(function() {
    if( $(this).scrollTop() > 256 ) {
      $header.addClass('header-float');
    } else {
      $header.removeClass('header-float');
    }
  });
  $('.maskedInput').mask('9 (999) 999-99-99');
})