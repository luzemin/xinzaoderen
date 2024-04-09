document.getElementById('donate').setAttribute("href", isMobile.phone ? "https://ssl.gongyi.qq.com/cate/index.html" : "https://gongyi.qq.com/succor/project_list.htm");
var typed;
var myFullpage = new fullpage('#fullpage', {
    onLeave: function (origin, destination, direction, trigger) {
        if (destination.index == 1) {
            if (typed) {
                typed.destroy();
            }
            typed = new Typed('#typed', {
                strings: ['我感谢天地，我感谢父母<br>^400我是罪人，我危害人间，我辜负苍生<br>^400我愿抛开一切，消除名利权力，舍弃金钱物质，归于真我'],
                typeSpeed: 50,
                loop: false
            });
        }
    }
});