$(window).resize(function(){document.location.reload();})

$(document).ready(function(){
  $('.bxslider').bxSlider();
});

if (matchMedia("screen and (min-width: 1024px)").matches) {
  $(document).ready(function(){
    $('.return_plan').click(function(){
      $(this).children('.plan').stop().show();
      $('.take_plan').children('.plan').stop().hide();
      $('.take_plan').children('.take').addClass("grey_text");
      $('.take_plan').children('.take').removeClass("black_text");
      $(this).children('.return').addClass("black_text");
    });
    $('.take_plan').click(function(){
      $(this).children('.plan').stop().show();
      $('.return_plan').children('.plan').stop().hide();
      $('.return_plan').children('.return').addClass("grey_text");
      $('.return_plan').children('.return').removeClass("black_text");
      $(this).children('.take').addClass("black_text");
    });
  });

  $(document).ready(function(){
    var qnaList = $('.robot_qna > ul > li');

    qnaList.click(function(){
      $(this).addClass('blue_blod').removeClass('white_thin');
      $(this).find('.choice').removeClass('hide');
      qnaList.not($(this)).find('.choice').addClass('hide');
      qnaList.not($(this)).addClass('white_thin').removeClass('blue_blod');
    });
  });

}

