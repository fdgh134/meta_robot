$(window).resize(function(){document.location.reload();})
/*pc*/
if (matchMedia("screen and (min-width: 1024px)").matches) {
  $(document).ready(function(){
    $('.navbar_menu > li').mouseenter(function(){
      $(this).children('.scroll_menu').stop().slideDown(400);
    });

    $('.navbar_menu > li').mouseleave(function(){
      $(this).children('.scroll_menu').stop().slideUp(200);
    });

    $('.navbar_icons > li').mouseenter(function(){
      $(this).children('.scroll_menu').stop().slideDown(400);
    });

    $('.navbar_icons > li').mouseleave(function(){
      $(this).children('.scroll_menu').stop().slideUp(200);
    });

    $('.X-box').click(function(){
      $('.scroll_menu').stop().slideUp(200);
    });
  });
}


/*tablet*/
if (matchMedia("screen and ( min-width: 744px ) and ( max-width: 1023px)").matches) {
 $(document).ready(function(){
  $('.navbar_menu > li').click(function(){
    $(this).children('.scroll_menu').stop().slideToggle();
  }); 
  $('.navbar_icons > li').click(function(){
    $(this).children('.scroll_menu').stop().slideToggle();
  });
 });
}

/*mobile*/
if (matchMedia("screen and (max-width: 767px)").matches) {
  $(document).ready(function(){
    $('.navbar_toggleBtn').click(function(){
      $('.navbar_menu').stop().slideToggle();
      $('.m_xbox').addClass('show');
    });

    $('.navbar_menu > li').click(function(){
      $(this).children('.scroll_menu').stop().slideToggle();
      $('.m_xbox').addClass('show');
    });
    $('.navbar_icons > li').click(function(){
      $(this).children('.scroll_menu').stop().slideToggle();
      $('.m_xbox').addClass('show');
    });

    $('.m_xbox').click(function(){
      $('.navbar_menu').slideUp(200);
      $('.scorll_menu').slideUp(200);
      $('.m_xbox').removeClass('show');
    });
  });
}
