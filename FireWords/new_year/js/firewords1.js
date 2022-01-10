function Firewords(){}
Firewords.prototype = {
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
    draw:function(cxt){
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

function randomColor(a){
    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;
    return `rgba(${r},${g},${b},${a})`
}