@@include('webpCheck.js');
@@include('wow.min.js');

$(document).ready(function() {
  // wow.js
  new WOW().init();

  // active .nav-item
  $('.nav-item').eq(1).addClass('nav-item-active')

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
  
  // Tabs
  $('#insurance-content').css('display', 'block');
  $('.tab').on("click", function() {
    var $index = $(this).index();
    for (let i = 0; i < $('.content-block').length; i++) {
      $('.content-block').eq(i).css({
        'display': 'none', 
        'opacity': 0
      });
      $('.content-block').eq($index).css({
        'display': 'block', 
        'opacity': 1
      });
    }
  })

  // Questions
  $('.question-button').on("click", function() {
    if ( $(this).next().css('display') == 'none' ) {
      $(this).addClass('openedQuestion');
      $(this).removeClass('closedQuestion');
      $(this).next().slideDown(300);
    } else {
      $(this).addClass('closedQuestion');
      $(this).removeClass('openedQuestion');
      $(this).next().slideUp(300);
    }
  })
})