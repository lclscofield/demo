//
//Tab组件
let tabsNode = document.querySelector('.tabs')
let tabs = tabsNode.children
let tabsContent = document.querySelectorAll('.tabs-content>li')
tabsNode.addEventListener('mouseover', function (e) { // mouseover 可以换成 click 点击事件
  // while (tab.tagName !== 'LI') { //点击事件优化
  //   if (tab === tabs) {
  //     tab = null
  //     break
  //   }
  //   tab = tab.parentNode
  // }
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i] === e.target) {
      tabs[i].classList.add('active')
      tabsContent[i].classList.add('active')
    } else {
      tabs[i].classList.remove('active')
      tabsContent[i].classList.remove('active')
    }
  }
})

//轮播组件
let controlsNode = document.querySelector('.controls')
let controls = controlsNode.children
let win = document.querySelector('.window')
let winUl = document.querySelectorAll('.window>ul')[0]
controlsNode.addEventListener('click', function (e) {
  for (let i = 0; i < controls.length; i++) { //给每个li元素一个索引
    controls[i].index = i
  }
  let index = e.target.index
  roll(index)
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
  roll(nextIndex)
  currentIndex = nextIndex
}

function roll(index) {
  let winWidth = win.clientWidth
  for (let i = 0; i < controls.length; i++) {
    if (i === index) {
      controls[i].classList.add('active')
      winUl.style.transform = 'translateX(' + (-winWidth * index) + 'px)'
    } else if (index !== undefined) {
      controls[i].classList.remove('active')
    }
  }
}