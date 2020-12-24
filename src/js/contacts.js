@@include('webpCheck.js');
@@include('select.min.js');
@@include('wow.min.js');

// Dropdown select

var language = [
  {
      text: "",
      value: 1,
      selected: true,
      description: "",
      imageSrc: '../img/sprite.svg#russia'
  },
  {
      text: "",
      value: 2,
      selected: false,
      description: "",
      imageSrc: '../img/sprite.svg#united-kingdom'
  },
];

$('.select-language').ddslick({
  data: language,
  width: '5rem',
  selectText: "Select your preferred social network",
  imagePosition:"right",
  onSelected: function(selectedData){
      //callback function: do something with selectedData;
  }   
});

$(document).ready(function() {
  // wow.js
  new WOW().init();


  // active .nav-item
  $('.nav-item').eq(3).addClass('nav-item-active')

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