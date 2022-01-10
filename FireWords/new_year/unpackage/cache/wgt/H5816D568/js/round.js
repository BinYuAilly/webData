
var drops = [];
function Drop () {};
var can = document.getElementById("canvas");
var cxt = can.getContext("2d");

var w = can.width = window.innerWidth;
var h = can.height = window.innerHeight;
window.onresize = function(){
    w = can.width = window.innerWidth;
    h = can.height = window.innerHeight;
    // drops = [];
}

Drop.prototype = {
    init: function(){
        // this.r = random(5,30);
        this.r = 8;
        // this.x = w/2;
        // this.y = h/2;
        this.color = randomColor(this.a);
        this.cnt = 4;
        this.flag = false;
        this.a = 0.3;
        this.va = 0.96;
    },
    draw: function(){
        cxt.beginPath();
        cxt.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
        cxt.fillStyle = this.color;
        cxt.fill();
        // cxt.strokeStyle = this.color;
        // cxt.stroke();
        // cxt.clearRect(0,0,w,h)
        this.update();
    },
    update() {
        if(this.a > 0.1){
            this.a *= this.va;
        }else{
            this.init();
        }
    },
}
var arcObj =[];
function arcStart(r){

    for(var i = 0;i < 360; i += 10){
        var degY = r * Math.cos( (Math.PI*2)/360 * i);
        var degX = r * Math.sin( (Math.PI*2)/360 * i);
        arcObj.push({degX:parseInt(degX),degY:parseInt(degY)})
        // console.log( degY, degX );
    }
    console.log("obj", arcObj)
}
arcStart(w/3);
var aniFlag = false;

var cntFlag = 0;
function animation(start,end){
    if(!aniFlag){
        aniFlag = true;
        var num = 10;//间距
        for(var i = start*num; i < end*num; i+=num){//360
            (function(i){
                if(cntFlag >= 1){
                    cntFlag = 0;
                    // drops = [];
                }
                if(i>=end-1){
                    cntFlag++;
                    // console.log(drops, cntFlag)
                    drops.splice(0,drops.length - 1);
                    
                    // drops = [];
                    // drops[0] = null;
                    
                    // drops[drops.length%4 - 1] = null
                }
                setTimeout(function(){
                    var drop = new Drop();
                    drop.init();
                    // console.log(i)
                    // console.log(w)
                    drop.x = w/2 + arcObj[i].degX;
                    drop.y = h/2 + arcObj[i].degY;
                    drop.color = randomColor(0.5);  
                    drops.push(drop);
                    if(i >= end-1){
                        aniFlag = false;
                    }
                }, i * 20)
            }(i/num))
        }
    }
    // console.log(drops)
}
// r*cos(n);
var aniFra = null;
function move(){
    animation(0,36);
    cxt.fillStyle = "rgba(0,0,0,0.1)";
    cxt.fillRect(0,0,w,h);
    
    // cxt.font="30px Verdana";
    // // Create gradient
    // var gradient=cxt.createLinearGradient(0,0,w,0);
    // gradient.addColorStop("0","#fff");
    // // Fill with gradient
    // cxt.fillStyle=gradient;
    // var text = "新年快乐！"
    // cxt.fillText(text,(w-text.length*26) /2 ,h/2);
    for(var k = 0; k < drops.length; k++){
        // drops[k].color = randomColor(0.5);
        drops[k].draw();
        
    }
    aniFra = requestAnimationFrame(move)
}
move();
function randomColor(a){
    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;
    return `rgba(${r},${g},${b},${a})`
}
//生成随机数的方法
function random(min, max) {
    return Math.random() * (max - min) + min; //min - max之间的随机数
}
firewords();