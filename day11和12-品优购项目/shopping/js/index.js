window.addEventListener('load', function () {
    var arrowl = document.querySelector('.arrow-l')
    var arrowr = document.querySelector('.arrow-r')
    var focus = document.querySelector('.focus')
    var imgWidth = focus.offsetWidth
    //1.鼠标经过显示箭头，鼠标离开隐藏箭头
    focus.addEventListener('mouseenter', function () {
        arrowl.style.display = 'block'
        arrowr.style.display = 'block'
        //暂停定时器
        clearInterval(timer)
        timer = null //最好再清空定时器变量
    })
    focus.addEventListener('mouseleave', function () {
        arrowl.style.display = 'none'
        arrowr.style.display = 'none'
        //开启定时器
        timer = setInterval(function () {
            //手动调用右侧按钮
            arrowr.click()
        }, 2000)
    })
    //2.动态生成小圆圈，有多少张图片就有多少个小圆圈
    //小圆圈个数取决于图片张数，即多少个li，可以通过ul的子元素节点个数获得
    var ul = document.querySelector('.pic');
    var circle = document.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        //创建元素
        var li = document.createElement('li')
        //添加自定义属性来记录当前小圆圈的索引号
        li.setAttribute('index', i)
        //添加元素
        circle.appendChild(li);
        //3.小圆圈的排他思想，在生成小圆圈的同时就可以添加点击事件了
        li.addEventListener('click', function () {
            //干掉其他人
            for (var i = 0; i < circle.children.length; i++) {
                circle.children[i].className = ''
            }
            this.className = 'current'
            //4.点击小圆圈，图片移动，注意移动的是ul
            //ul的移动距离为li的索引号*图片的宽度，注意图片往左走，应添加负号
            //li的索引号可以在生成li的时候添加自定义属性，通过自定义属性获得索引号
            //点击了某个li，就拿到当前li的索引号
            var index = this.getAttribute('index')
            animate(ul, -index * imgWidth)
            //点击了某个li，将li的索引号赋值给num、count，实现信息同步
            num = index;
            count = index;
        })

    }
    //给第一个孩子添加current类，默认选中第一个
    circle.children[0].className = 'current'
    //5.克隆第一张图片，并放入最后  注意在动态生成li之后克隆，否则影响小圆圈数量
    var first = ul.children[0].cloneNode(true);//深拷贝
    ul.appendChild(first)
    //6.点击右侧按钮，滚动图片
    var num = 0 //可看作是图片对应的索引号
    var count = 0
    var flag = true //节流阀
    arrowr.addEventListener('click', function () {
        if (flag) {
            flag = false //关闭水龙头
            //图片滚动到最后一张即拷贝的图片时，立马跳到第一张图
            if (num == ul.children.length - 1) {
                ul.style.left = 0
                num = 0
            }
            //跳到第一张图后立马滚动到第二张图，注意下面两句不能放入else里面
            //移动距离 num*图片宽度，注意右键图片左走，负值
            num++
            animate(ul, -num * imgWidth, function () {
                flag = true //回调完成后再开启水龙头
            })
            //7.点击右侧按钮，小圆圈随着变化，通过再声明一个变量来控制小圆圈现在的样式
            count++
            //干掉其他人
            for (var i = 0; i < circle.children.length; i++) {
                circle.children[i].className = ''
            }
            //只设置自己
            //这个自己取决于 count 取模 不包括克隆的图片数量，点击第一次显示第一张，第二次显示第二张，每图片数量一个循环
            circle.children[count % (ul.children.length - 1)].className = 'current'
        }
    })
    //8.点击左侧按钮，滚动图片
    arrowl.addEventListener('click', function () {
        if (flag) {
            flag = false
            //图片滚动到第一张时，立马跳到拷贝的那张，即最后一张;
            if (num == 0) {
                num = ul.children.length - 1
                ul.style.left = -num * imgWidth + 'px'//注意左走取负值，单位
            }
            //再跳到倒数第二张num--
            num--
            animate(ul, -num * imgWidth, function () {
                flag = true
            })
            count--
            //干掉其他人
            for (var i = 0; i < circle.children.length; i++) {
                circle.children[i].className = ''
            }
            //只设置自己
            //第一张就到倒数第二张,小圆圈就到最后一个
            if (count < 0) {
                count = circle.children.length - 1
            }
            circle.children[count].className = 'current'
        }
    })
    //9.自动播放
    var timer = setInterval(function () {
        //手动调用右侧按钮
        arrowr.click()
    }, 2000)

})