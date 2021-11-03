var init = {
    //判断是否安置了 或 允许运行flash
    flashChecker() {
        var hasFlash = 0;　　　　 //是否安装了flash
        var flashVersion = 0;　　 //flash版本
        console.log(document.all)
        if(document.all) {
            var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
            if(swf) {
                hasFlash = 1;
                VSwf = swf.GetVariable("$version");
                flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
            }
        } else {
            if(navigator.plugins && navigator.plugins.length > 0) {
                var swf = navigator.plugins["Shockwave Flash"];
                if(swf) {
                    hasFlash = 1;
                    var words = swf.description.split(" ");
                    for(var i = 0; i < words.length; ++i) {
                        if(isNaN(parseInt(words[i]))){
                            continue;
                        }
                        flashVersion = parseInt(words[i]);
                    }
                }
            }
        }
        console.log( {
            f: hasFlash,
            v: flashVersion
        })
        return {
            f: hasFlash,
            v: flashVersion
        };
    },
    //运行 flash
    allowFlash(){
        var fls = init.flashChecker();
        if(fls.f){
            return;
            document.write("您安装了flash,当前flash版本为: " + fls.v + ".x");
        }else {
            document.write(`<a href=" https://get.adobe.com/cn/flashplayer/"; class="flashLoadMsg" target="_blank">安装或者启用FLASH播放器</a>`);
        };

    }
    
}