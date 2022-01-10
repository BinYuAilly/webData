function Star(){}
//生成随机数的方法
function random(min, max) {
    return Math.random() * (max - min) + min; //min - max之间的随机数
}
Star.prototype = {
    init: function(){
        this.a = 0.9;
        this.va = 0.96;

        this.x = 500;
        this.y = 100;
        this.r = 2;
        this.R = 5;
        this.rot = 45;

        this.direction = 1;
    },
    draw: function(cxt){
        cxt.beginPath();
        for (var i = 0; i < 5; i++) {
            cxt.lineTo(this.x + Math.cos((18 + 72 * i - this.rot) / 180 * Math.PI) * this.R,
            this.y - Math.sin((18 + 72 * i - this.rot) / 180 * Math.PI) * this.R);
                cxt.lineTo(this.x + Math.cos((54 + 72 * i - this.rot) / 180 * Math.PI) * this.r,
                this.y - Math.sin((54 + 72 * i - this.rot) / 180 * Math.PI) * this.r);
        }
        cxt.closePath();
        // context.fillStyle = '#fb3';
        cxt.fillStyle = `rgba(255,255,255,${this.a})`;
        // context.strokeStyle = '#fd5';
        cxt.strokeStyle = `rgba(255,255,255,${this.a})`;
        
        cxt.lineWidth = 3;
        cxt.lineJoin = 'round';
        cxt.fill();
        cxt.stroke();
        this.update();
    },
    update: function(){
        // console.log(this.a)
        
        var flag1 = this.a >= 1 ? 1 : 0;
        // var flag2 = this.a < 1 && this.a >0.01 ? 1 : 0;
        var flag3 = this.a < 0.02 ? 1 : 0;

        if( flag1 == 1 ){
            this.direction = 1;
        }
        if( flag3 == 1 ){
            this.direction = 0;
        }
        if( this.direction == 1){
            this.a *= this.va;
        } else {
            
            this.a = (this.a * 100)/this.va * 0.01;
        }
    }
}
