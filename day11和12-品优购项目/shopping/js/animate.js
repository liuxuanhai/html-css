function animate(obj, target, callback) {
    //相当于callbac=function(){} 调用的时候callback()
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            /* if (callback) {
                //回调函数写到定时器结束里面
                //让盒子到目标位置时再触发函数内容
                callback();
            } */
            //等价于
            callback && callback();
            //利用与逻辑的中断，如果有callback参数则再看callback()即调用函数；如果没有就直接结束
        } else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 15)
}