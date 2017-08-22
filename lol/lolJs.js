// menu
$(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 440) {
      $('.menu').addClass('fix-menu')
    } else {
      $('.menu').removeClass('fix-menu')
    }
  })
})

//slide
$(function () {
  $('.slide').on('mouseover', '.slide-controls li', function (e) {
    let $li = $(e.currentTarget)
    let index = $li.index()
    goIndex(index)
    currentIndex = index // 使当前鼠标移入的索引成为定时器索引
    // 鼠标移入时清除定时器,再重新开启定时器，保证定时器与鼠标移入事件不发生冲突
    clearInterval(si)
    si = setInterval(ni, 5000)
  })

  let currentIndex = 0
  let si = setInterval(ni, 5000) // 设置定时器

  function ni() { // 定时触发循环函数
    let nextIndex = currentIndex + 1
    if (nextIndex === 5) {
      nextIndex = 0
    }
    goIndex(nextIndex)
    currentIndex = nextIndex
  }

  function goIndex(index) { // 根据索引滚动图片
    $('.slide .slide-controls li').eq(index).addClass('active')
      .siblings().removeClass('active')
    $('.slide .slide-img ul').css({
      transform: `translateX(-${820*index}px)`
    })
  }
})