// menu
$(window).on('scroll', function () {
  if ($(window).scrollTop() >= 440) {
    $('.menu').addClass('fix-menu')
  } else {
    $('.menu').removeClass('fix-menu')
  }
})

//slide