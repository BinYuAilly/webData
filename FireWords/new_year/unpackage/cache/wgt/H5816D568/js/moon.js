
var can = document.getElementById("canvas");
var cxt = can.getContext("2d");
var w = can.width = window.innerWidth;
var h = can.height = window.innerHeight;
window.onresize = function(){
    w = can.width = window.innerWidth;
    h = can.height = window.innerHeight;
}
function canfun(){
        var moon = new Moon();
        console.log(moon);
        moon.init();
        moons.push(moon);
}
// console.log("rains",rains)
function Moon(){}
Moon.prototype = {
    init: function(){
        this.d = 3;//弧度
        this.x = w-80;//x定位
        this.y = h/4;//y定位
        this.R = 50;//半径
        this.rot = 45;//旋转度
        this.cnt = 0;
        this.timeCnt = 0;
        this.a = 0.9;
        this.va = 0.99;
    },
    deg: function(num,tatol){//计算角度
        // console.log(num, tatol)
        return Math.PI*2* (num/tatol);
    },
    draw: function(){
        cxt.save();
        cxt.translate(this.x, this.y);
        cxt.rotate(this.rot*Math.PI/180);
        cxt.scale(this.R, this.R);
        // console.log(this.d)
        this.pathMoon(cxt, this.d);
        cxt.fillStyle = `rgba(255, 0, 0, ${this.a})`;
        cxt.fill();
        cxt.restore();
        this.undate();
    },
    pathMoon(cxt, d){
        cxt.beginPath();
        cxt.arc(0, 0, 1, 0.5*Math.PI, 1.5*Math.PI, true);
        cxt.moveTo(0, -1);
        cxt.arcTo(d, 0, 0, 1, this.dis(0, -1, d, 0)/d);
        cxt.closePath();
    },
    dis(x1, y1, x2, y2){//计算弧长
        return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
    },
    undate: function(){
        // console.log(this.a)
        if(this.a > 0.1){
            this.a *= this.va;
        } else {
            // this.init();
            // cancelAnimationFrame(aniFra)
            moons.shift(0);
            console.log(moons);
        }
        // if(this.timeCnt < 100){
            
        //     this.timeCnt += 1;
        // }else{
        //     this.timeCnt = 0;
            // this.d *= 5;
            // if(this.d > 300000){
            //     this.init();
            //     // moons.shift(0);
                
            // }
        // }

        // if(this.d < 30){
        //     this.d += 1 ;
        // } else {
        //     this.d = 0;
        // }
        // console.log(this.d,this.timeCnt)
    }
}
var moons = [];
for(var i = 0; i < 1; i++){
    
        var moon = new Moon();
        // console.log(moon)
        moon.init();
        moons.push(moon);
    
        
}
var aniFra = null;
function main(){
    cxt.fillStyle = "rgba(0,0,0,0.1)";
    cxt.fillRect(0, 0, w, h);
    // moon.d = parseInt(Math.random() * 2);
    for(var k = 0; k < moons.length; k++){

        moons[k].draw();
    }
    // for(var k = 0; k < rains.length; k++){
    //     rains[k].draw();
    // }
    
    // aniFra = requestAnimationFrame(main);
    requestAnimationFrame(main);
}
main();

//生成随机数的方法
function random(min, max) {
    return Math.random() * (max - min) + min; //min - max之间的随机数
}