$(window).resize(function(){document.location.reload();})

$(document).ready( function() {

  $("#header").load("commom/header.php"); 
  $("#footer").load("common/footer.php"); 
  
  });

$(document).ready(function(){
  $('.bxslider').bxSlider();
});

  $(document).ready(function(){
    var qnaList2 = $('.buy_or_rent > ul > li');
    var qnaList = $('.robot_qna > ul > li');
    var choicePlan = $('.choice > ul > li');

    qnaList.click(function(){
      $(this).addClass("blue_blod").removeClass("white_thin");
      $(this).find('.choice').removeClass("hide");
      qnaList.not($(this)).find('.choice').addClass("hide");
      qnaList.not($(this)).addClass("white_thin").removeClass("blue_blod");
    });

    qnaList2.click(function(){
      $(this).addClass("blue_blod").removeClass("white_thin");
      $(this).find('.w_zone').removeClass("hide");
      qnaList2.not($(this)).find('.w_zone').addClass("hide");
      qnaList2.not($(this)).addClass("white_thin").removeClass("blue_blod");
    });

    choicePlan.click(function(){
      $(this).children('.plan').removeClass("hide");
      choicePlan.not($(this)).children('.plan').addClass("hide");
      $(this).find('a').addClass("black_text").removeClass("grey_text");
      choicePlan.not($(this)).find('a').addClass("grey_text").removeClass("black_text");
    });
    
  });


