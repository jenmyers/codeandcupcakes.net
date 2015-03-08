$(window).scroll(function() {
// var height = $(window).height();
if ($(this).scrollTop() > 80){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});
