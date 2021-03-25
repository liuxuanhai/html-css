$(function () {
    //电梯导航
    // 当我们点击了小li此时不需要执行页面滚动事件里面的li的背景选择添加current
    var flag = true;
    //1.滚动到今日推荐模块才显示电梯导航，否则隐藏
    var toolTop = $('.recom').offset().top
    toggleTool() //先调用一次，防止页面刷新后导航消失
    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $('.fixedtool').fadeIn()
        } else {
            $('.fixedtool').fadeOut()
        }
    }
    $(window).scroll(function () {
        toggleTool()
        //3.页面滚动到某个内容区域，左侧电梯导航li相应添加和删除current类
        if (flag) {
            $('.floor .w').each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    // console.log(i); //i记录索引号
                    $('.fixedtool li').eq(i).addClass('selected').siblings('li').removeClass('selected')
                }
            })
        }

    })
    //2.点击电梯导航页面可以滚动到相应内容区域
    $('.fixedtool li').click(function () {
        flag = false
        //获得当前li的索引号，来选出对应内容区模块，并得到移动的距离offset().top 思路类似tab栏切换
        var top = $('.floor .w').eq($(this).index()).offset().top
        //页面滚动效果
        $('body,html').stop().animate({
            scrollTop: top
        }, function () {
            flag = true
        })
    })
})