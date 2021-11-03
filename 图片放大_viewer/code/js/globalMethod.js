var globalData = {
    screenWidth:window.screen.width,
    screenHeight:window.screen.height,
};

$(function () {
    //获取屏幕宽高
    init.getDistinguishability();
});

var init = {
    getDistinguishability:function () {
        // $(".main").height(globalData.screenHeight);
        $(".main").width(globalData.screenWidth);
        $(".loadWapper").height(globalData.screenHeight);
        $(".loadWapper").width(globalData.screenWidth);
    },
};

var formatter = {
    formatDate:function(type,date){
        var back;
        switch (type) {
            case 1:
                date = new Date(date);
                var y = date.getFullYear();
                var m = date.getMonth() + 1;
                var d = date.getDate();
                back =  y + '年' + m + '月' + d + '日';
                break;
            case 2:
                date = new Date(date);
                var y = date.getFullYear();
                var m = date.getMonth() + 1;
                m = m<10?"0"+m:m;
                var d = date.getDate();
                d = d<10?"0"+d:d;
                back =  y + '-' + m + '-' + d;
                break;
        }
        return back;
    },
    getQueryVariable:function(variable){
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    },
};