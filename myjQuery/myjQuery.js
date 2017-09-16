window.$ = function (selectorOrElement) {
    var elements;
    if (typeof selectorOrElement === 'string') {
        elements = document.querySelectorAll(selectorOrElement);
    } else if (selectorOrElement instanceof Element) {
        elements = { 0: selectorOrElement, length: 1 };
    } else if (selectorOrElement instanceof Array) {
        for (var i = 0; i < selectorOrElement.length; i++) {
            elements = {};
            elements[i] = selectorOrElement[i];
        }
        elements.length = selectorOrElement.length;
    }
    elements.on = function (eventType, fn) { //绑定点击事件
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (element.addEventListener) {
                element.addEventListener(eventType, fn);
            } else if (element.attachEvent) {
                element.attachEvent('on' + eventType, fn); //兼容IE
            }
        }
        return elements;
    };
    elements.addClass = function (className) { //添加class类
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].classList) {
                elements[i].classList.add(className);
            } else {
                elements.className = elements[i].className + ' ' + className; //兼容IE
            }
        }
        return elements;
    };
    elements.removeClass = function (className) { //删除class类
        for (var i = 0; i < elements.length; i++) {
            if (elements.classList) {
                elements[i].classList.remove(className);
            } else {
                //
            }
        }
        return elements;
    };
    elements.text = function (string) { //替换文本内容
        if (string === undefined) {
            var arr = [];
            for (var i = 0; i < elements.length; i++) {
                arr.push(elements[i].innerText);
            }
            return arr;
        } else {
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].innerText !== undefined) {
                    elements[i].innerText = string;
                } else if (elements.textContent !== undefined) {
                    elements[i].textContent = string;
                }
            }
            return elements;
        }
    };
    elements.siblings = function () { //寻找兄弟节点
        var arr = [];
        var children = elements[0].parentNode.children;
        for (var i = 0; i < children.length; i++) {
            if (children[i] !== elements[0]) {
                arr.push(children[0]);
            }
        }
        return $(arr);
    };
    elements.html = function (htmlString) { //替换标签
        if (htmlString === undefined) {
            var arr = [];
            for (var i = 0; i < elements.length; i++) {
                arr.push(elements[i].innerHTML);
            }
            return arr;
        } else {
            for (var i = 0; i < elements.length; i++) {
                elements[i].innerHTML = htmlString;
            }
            return elements;
        }
    };
    elements.css = function (styleName, attribute) { //设置css属性
        for (var i = 0; i < elements.length; i++) {
            elements[i].setAttribute(styleName, attribute);
        }
        return elements;
    };
    elements.get = function (num) {
        return elements[num];
    };
    return elements;
};

var items = $('li')
items.on('click', function () { })

items.addClass('hi').on('dblclick', function () {
}).removeClass('hi').addClass('hello').addClass('frank').addClass('jack')

items.text('<p>你好</p>')
console.log(items.text())

items.css('border', '1px solid red')
items.attr('name', 'frank')
items.html('<p>你好</p>') // console.log(items.html())  

items[0].style.border = '1px solid red'
items.get(1).style.border = '1px solid blue'

var item = $(items[1])
item.siblings().addClass('s')