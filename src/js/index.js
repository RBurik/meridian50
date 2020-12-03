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

  // Fix Header
  let $header = $('.header');
  
  $(window).scroll(function() {
    if( $(this).scrollTop() > 256 ) {
      $header.addClass('header-float');
    } else {
      $header.removeClass('header-float');
    }
  });

  // Masked Input
  $('.maskedInput').mask('9 (999) 999-99-99');

  // Smooth scrolling to anchor
  $('.toContact').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#section-contact').offset().top }, 1000);
    e.preventDefault();
  });
})
