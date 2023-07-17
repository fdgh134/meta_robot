$(document).ready(function(){
  $("#header").load("/common/header.html");

});

$('').bxSlider({
  auto: false,
  pager: true,
  infiniteLoop: false,
  controls: false,
  shrinkItems: true,
  minSlides: 1,
  maxSlides: 4,
  slideWidth: 800,
  slideMargin: 25
});

