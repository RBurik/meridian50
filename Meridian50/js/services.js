function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
  
testWebP(function (support) {
  
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});;
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