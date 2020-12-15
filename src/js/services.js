@@include('webpCheck.js');
$(document).ready(function() {
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
      $('.content-block').eq(i).css('display', 'none');
      $('.content-block').eq($index).css('display', 'block');
    }
  })
})