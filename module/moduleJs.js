//
//Tab组件
let tabsNode = document.querySelector('.tabs')
let tabs = tabsNode.children
let tabsContent = document.querySelectorAll('.tabs-content>li')
tabsNode.addEventListener('mouseover', function (e) { //mouseover可以换成click点击事件
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
})

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

let current = 0
setInterval(function () {
  let nextIndex = current + 1
  if (nextIndex === 3) {
    nextIndex = 0
  }
  roll(nextIndex)
  current = nextIndex
}, 3000)