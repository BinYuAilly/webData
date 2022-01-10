
function StarRain() { }

//生成随机数的方法
function random(min, max) {
    return Math.random() * (max - min) + min; //min - max之间的随机数
}
let w = window.innerWidth;
let h = window.innerHeight;
StarRain.prototype = {
    init: function () { //初始化方法 设置每个雨滴的初始化属性
        //设置坐标
        this.x = random(w / 2, w);
        this.vx = 2;
        this.y = -h;
        //y方向的速度值
        // this.vy = random(0.5, 1);
        this.vy = 2;
        //雨滴下落的最大高度
        this.l = random(0.3 * h, 0.35 * h);
        //波纹的初始半径
        this.r = 1;
        this.vr = 1; //半径增大的速度
        //判断雨滴消失的透明度
        this.a = 0.1; // =>0
        this.va = 0.96; //透明度的变化系数
        this.rot = 65;//旋转角度
    },
    draw: function (cxt) { //绘制图形

        cxt.save();
        // cxt.translate(this.x, this.y);
        if (this.y > this.l) { //雨滴下落到了指定位置 开始绘制圆形

            // cxt.beginPath(); //先开始路径
            // cxt.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            // cxt.strokeStyle = "rgba(0,255,255," + this.a + ")";
            // cxt.stroke();
        } else { //绘制下落的雨滴

            cxt.rotate(this.rot * Math.PI / 180);
            cxt.fillStyle = "rgb(200,255,255)";
            cxt.fillRect(this.x, this.y, 2, 10);

            // cxt.rotate(this.rot*Math.PI/180);
        }
        cxt.restore();
        this.update();
    },
    update: function () { //更新坐标位置
        if (this.y < this.l) {
            this.y += this.vy
            // this.x -= this.vx;
        } else { //雨滴下落到了指定位置 开始绘制波纹
            if (this.a > 0.03) {
                this.r += this.vr;
                if (this.r > 5) {
                    this.a *= this.va;
                }
            } else {
                //重新初始化
                this.init()
            }

        }
    }

}