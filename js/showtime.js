< script >
    var t = null;
t = setTimeout(time, 1000); //开始运行
function time() {
    clearTimeout(t); //清除定时器
    dt = new Data();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getData();
    var h = dt.getHours(); //获取时
    var m = dt.getMinutes(); //获取分
    var s = dt.getSeconds(); //获取秒
    document.querySelector(".showTime").innerHTML = '当前时间' + y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒"；
    t = setTimeout(time, 1000); //设定时间器，循环运行
} <
/script>