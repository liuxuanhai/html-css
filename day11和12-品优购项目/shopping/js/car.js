$(function () {
    // console.log($('.checkall').prop('checked'));
    //1.实现全选和取消全选
    $('.checkall').change(function () {
        //全选的状态赋值给小复选框状态,以及下方的全选框
        $('.j-checkbox,.checkall').prop('checked', $(this).prop('checked'))
        //全选，给所有的商品添加背景颜色，添加check-cart-item类，否则移除类
        if ($('.checkall').prop('checked')) {
            $('.cart-item').addClass('check-cart-item')
        } else {
            $('.cart-item').removeClass('check-cart-item')
        }
        getSum()
    })
    //小复选框改变时
    $('.j-checkbox').change(function () {
        //小复选框勾选个数等于复选框个数，则勾选全选框，否则不勾选
        if ($('.j-checkbox:checked').length == $('.j-checkbox').length) {
            $('.checkall').prop('checked', true)
        } else {
            $('.checkall').prop('checked', false)
        }
        if ($(this).prop('checked')) {
            //给当前选中的商品添加背景颜色，添加check-cart-item类，否则移除类
            $(this).parents('.cart-item').addClass('check-cart-item')
        } else {
            $(this).parents('.cart-item').removeClass('check-cart-item')
        }
        getSum()
    })
    //2.增减商品数量
    //1)增加商品数量，只让当前商品数量增加
    $('.increment').click(function () {
        //先获取表单内值再修改
        //得到当前兄弟文本框的值
        var n = $(this).siblings('.itxt').val()
        // console.log(n);
        n++
        $(this).siblings('.itxt').val(n)
        //3.小计模块
        //文本框的值乘以当前商品的价格就是商品的小计
        //获取当前商品的单价，使用爸爸的爸爸的兄弟方式获取到
        // var price = $(this).parent().parent().siblings('.p-price').html()
        //使用祖先选择器完善上一行代码
        var price = $(this).parents('.p-num').siblings('.p-price').html()
        price = price.substr(1)//通过字符截取￥后面的数字
        // console.log(price);
        //小计计算后赋值给当前商品的小计，爸爸的爸爸的兄弟
        // $(this).parent().parent().siblings('.p-sum').text('￥' + n * price)
        //toFixed(x) 方法，保留x位小数
        $(this).parents('.p-num').siblings('.p-sum').text('￥' + (n * price).toFixed(2))
        getSum()
    })
    //2)减少商品数量
    $('.decrement').click(function () {
        //先获取表单内值再修改
        var n = $(this).siblings('.itxt').val()
        if (n == 1) {
            return false //数量到1就不能再减了，使用return结束代码
        }
        n--
        $(this).siblings('.itxt').val(n)
        //3.小计模块
        //文本框的值乘以当前商品的价格就是商品的小计
        //获取当前商品的单价，使用爸爸的爸爸的兄弟方式获取到
        var price = $(this).parents('.p-num').siblings('.p-price').html()
        price = price.substr(1)//通过字符截取￥后面的数字
        // console.log(price);
        //小计计算后赋值给当前商品的小计，爸爸的爸爸的兄弟
        $(this).parents('.p-num').siblings('.p-sum').text('￥' + (n * price).toFixed(2))
        getSum()
    })
    //4.用户修改文本框的值计算小计
    $('.itxt').change(function () {
        //小计=文本框的值x当前商品单价
        //文本框的值
        var n = $(this).val()
        //当前商品单价
        var price = $(this).parents('.p-num').siblings('.p-price').html()
        price = price.substr(1)
        //小计
        $(this).parents('.p-num').siblings('.p-sum').text('￥' + (n * price).toFixed(2))
        getSum()
    })
    getSum() //默认调用函数一次，那么刷新就能保留原有选中的商品
    //5.计算总额
    function getSum() {
        var count = 0//总件数
        var money = 0 //总金额
        //将表单内的数字相加
        $('.itxt').each(function (i, ele) {
            // 只计算复选框被勾选的商品件数
            if ($(ele).parents('.cart-item').find('.j-checkbox').prop('checked')) {
                count += parseInt($(ele).val())
            }
        })
        $('.amount-sum em').text(count)
        //将金额相加
        $('.p-sum').each(function (i, ele) {
            //只计算复选框被勾选的商品总金额
            if ($(ele).parents('.cart-item').find('.j-checkbox').prop('checked')) {
                money += parseFloat($(ele).text().substr(1))//去掉￥符号，转化为浮点型
            }

        })
        $('.price-sum em').text(money.toFixed(2))//，保留2位小数
    }
    //6.删除商品
    //1） 商品后面的删除按钮
    $('.p-action a').click(function () {
        //删除当前的商品,所以从$(this)出发
        $(this).parents('.cart-item').remove()
        //删除后需要重新计算商品总件数和金额
        getSum()
    })
    //2)删除选中的商品
    $('.remove-batch').click(function () {
        //需要删除的是被勾选的小复选框
        $('.j-checkbox:checked').parents('.cart-item').remove()
        getSum()
    })
    //3)清理购物车，删除所有商品
    $('.clear-all').click(function () {
        $('.cart-item').remove()
        getSum()
    })
})