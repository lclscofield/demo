//
//
$('.globalNavigation').on('mouseenter', function () {
  $('.topbar .globalNavigation .subMenu').addClass('action')
}).on('mouseleave', function () {
  $('.topbar .globalNavigation .subMenu').removeClass('action')
}).on('mouseenter', function () {
  $('.topbarWrapper .topbarShadow').addClass('action')
}).on('mouseleave', function () {
  $('.topbarWrapper .topbarShadow').removeClass('action')
})

$('.topbarWrapper .topbarShadow').on('mouseenter', function () {
  $('.topbar .globalNavigation .subMenu').addClass('action')
}).on('mouseleave', function () {
  $('.topbar .globalNavigation .subMenu').removeClass('action')
}).on('mouseenter', function () {
  $('.topbarWrapper .topbarShadow').addClass('action')
}).on('mouseleave', function () {
  $('.topbarWrapper .topbarShadow').removeClass('action')
})