// $(function () {
//     loadExchangePicture();
//     loadListenClickPoint();
// });
var globalData = {
    intervaler:null,
};

window.onload = function () {

};

var nowPic = 0;
var firstFlag = 1;

//挂载自动切换图片的监听
function loadExchangePicture() {
    clearInterval(globalData.intervaler);
    globalData.intervaler = setInterval(function () {
        var height = $(".carousel").width();
        if(firstFlag===1){
            //是第一次加载
            nowPic=1;
            firstFlag=0;
        }
        if(nowPic>3){
            nowPic=0;
        }else{
            //元素移动
            $(".imgList .imgListContent").css({
                transform: 'translateX('+(-height*nowPic)+'px)'
            });
            //切换小点
            $(".pointActive").removeClass("pointActive");
            $(".pointClick").eq(nowPic).addClass("pointActive");
            //切换文本
            $(".textListActive").removeClass("textListActive");
            $(".textListItem").eq(nowPic).addClass("textListActive");
            nowPic++;
        }
    },3000);
}

//监听点击小点切换图片
function loadListenClickPoint() {
    $(".pointClick").on('click',function () {
        var height = $(".carousel").width();
        nowPic = parseInt($(this).attr("data-id"));
        //元素移动
        $(".imgList .imgListContent").css({
            transform: 'translateX('+(-height*nowPic)+'px)'
        });
        //切换小点
        $(".pointActive").removeClass("pointActive");
        $(".pointClick").eq(nowPic).addClass("pointActive");
        //切换文本
        $(".textListActive").removeClass("textListActive");
        $(".textListItem").eq(nowPic).addClass("textListActive");
    });
}
