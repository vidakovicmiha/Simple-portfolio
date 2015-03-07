$(window).scroll(function(e) {
  var scrollTop = window.scrollY;
  if (scrollTop > 300) {
    $('.about img:not(.visible)').addClass('visible');
  } else {
    $('.about img.visible').removeClass('visible');
  }
});
