$(window).resize(function(){document.location.reload();})

if (matchMedia("screen and (max-width: 767px)").matches) {
  $(document).ready(function(){
    $('.plus').on("click",function(){
      $(this).css('display','none');
      $(this).next('.minus').css('display','flex');
      $(this).parents('li').children('.sub_group').stop().slideToggle();
    });
    $('.minus').on("click",function(){
      $(this).css('display','none');
      $(this).prev('.plus').css('display','flex');
      $(this).parents('li').children('.sub_group').stop().slideToggle();
    });
  });
}