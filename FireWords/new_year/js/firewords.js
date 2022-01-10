function firewords(){
    // 烟花
    var can = document.getElementById("canvas");
    var cxt = can.getContext("2d");
    var w = can.width = window.innerWidth;
    var h = can.height = window.innerHeight;
    window.onresize = function(){     
            w = can.width = window.innerWidth;
            h = can.height = window.innerHeight;           
    }

    var drops = [];
    function Drop(){}
    Drop.prototype = {
        init: function(){
            this.x = random(w/2-150,w/2+150);
            // this.x = w/2;
            this.y = h;//动画初始点
            this.my = h/6;//动画终点
            this.vy = random(4,6);//动画速度
            this.r = 1;
            this.vr = 1;
            this.a = 0.5;
            this.va = 0.9;
            this.mr = random(70,80);
            this.arColor = randomColor(1);
            this.rectColor = this.arColor;
        },
        draw:function(x=null,y=null){
            // this.x = x;
            // this.y = y;
            if(this.y <= this.my ){
                cxt.beginPath(); //先开始路径
                cxt.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
                // cxt.strokeStyle = "rgba(0,255,255," + 1 + ")";
                cxt.strokeStyle = this.arColor;
                // console.log(this.y)
                cxt.stroke();
            } else {
                // cxt.clearRect(0,0,w,h);
                
                cxt.fillStyle = this.rectColor;
                cxt.fillRect(this.x, this.y, 2, 10);
                
            }
            this.update();
        },
        update() {
            if(this.y > this.my){
                this.y -= this.vy;
            } else {
                if(this.r < this.mr ){
                    this.r += this.vr;
                    this.a *= this.va;
                } else {
                    this.init();
                }
            }
        },
    }
    for(var i = 0; i < 10; i++){
        setTimeout(function(){
            var drop = new Drop();
            drop.init();
            drops.push(drop);
        },i * 10)
    }
    var moveFlag=0;
    //console.log(drops)
    function move() {
        
        moveFlag++;
        // console.log(moveFlag)

        //cxt.clearRect(0,0,w,h);
        //先复制透明层再绘制雨滴 雨滴就把先绘制的透明层覆盖 下一次绘制透明层
        //就会把之前绘制的雨滴覆盖 若干的透明层叠加就会越来越不透明
        // cxt.fillStyle = "rgba(0,0,0,0.1)";
        // cxt.fillRect(0, 0, w, h);
        cxt.font="30px Verdana";
        var gradient=cxt.createLinearGradient(0,0,w,0);
        gradient.addColorStop("0","#f00");
        gradient.addColorStop("0.5","#999");
        gradient.addColorStop("1","#0ff"); 
        cxt.fillStyle=gradient;
        var text = "新年快乐！"
        cxt.fillText(text,(w-text.length*26) /2 ,h/2 + 20);
       
        for (var k = 0; k < drops.length; k++) {
            drops[k].draw();
        }
        requestAnimationFrame(move);
        // returnrandomColor
    }
    move();



    //生成随机数的方法
    function random(min, max) {
        return Math.random() * (max - min) + min; //min - max之间的随机数
    }
    function randomColor(a){
        var r = Math.random() * 255;
        var g = Math.random() * 255;
        var b = Math.random() * 255;
        return `rgba(${r},${g},${b},${a})`
    }
}
