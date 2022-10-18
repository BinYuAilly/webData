## 1、js弹框页面不可滑动

```js
    let disTouchEvent=function(e){e.preventDefault();};
	//禁止页面滑动
    document.body.style.overflow='hidden';
    document.addEventListener("touchmove",disTouchEvent,false);
    //允许页面滑动
    document.body.style.overflow='auto';
    document.removeEventListener("touchmove",disTouchEvent,false);
```

## 2、url的编码、解码

```js
    encodeURI("你好")  //------------------------ "%E4%BD%A0%E5%A5%BD"

    decodeURI("%E4%BD%A0%E5%A5%BD"); //---------------------"你好"
```

## 3.ES6用来比较两个值是否严格相等 Object.is ,与严格比较运算符（===）的行为基本一致。

```js
console.log(NaN === NaN); // false
console.log(0 === -0);     // true
Object.is(NaN, NaN) // true 
Object.is(+0, -0) // false
```



## 4.阻止冒泡事件 和 默认事件

```
// 阻止默认事件
e.preventDefault();
// 阻止事件冒泡
e.stopPropagation();
// jQuery 中使用 ，原生 js 可能会无效
return false; -- 相当于同时调用了 e.preventDefault(); 和 e.stopPropagation();
```



## 5.点击空白处关闭弹框

```js
$(document).mouseup(function(e) { 
    var morePop = $('more-show-box');  
    if(!morePop.is(e.target) && morePop.has(e.target).length === 0) { 
        // 可以在这里关闭弹窗
        $(".more-show-box").hide();
        $(".combo-arrow").attr("data-flag", false);
    }  
});
```

## 6.禁止浏览器回退

```js
// 禁止浏览器回退
history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
});
```



## 7.iframe 获取子页面元素

```js

let childFrame = window.document.querySelector(`.import-page>iframe`).contentWindow;
childFrame.document
```



## 8.获取url传参

```js

function ParseParams(){
    this.params = null
}
ParseParams.prototype = {
    init(){
        console.log(location)
        let params = {};
        let paramsStr = location.search.slice(1);
        if(!paramsStr){
            return;
        }
        paramsStr = paramsStr.split(`&`);
        if(paramsStr.length){
            paramsStr.forEach( (str,index) => {
                str = str.split(`=`);
                params[ str[0] ] = str[1];
            });
        }
        this.params = params;
    },
    /**
    *@field 要查找的参数
    */ 
    getParams(field){
        if(this.params && this.params[field]){
            return this.params[field];
        } else {
            return null;
        }
    }
}

//使用
let parseparams = new ParseParams();
parseparams.init();
globalData.shiftType = parseparams.getParams('type');
```

## 9.iframe 获取父页面 的元素

```js
/**
    window.parent.document ---上一级页面,
    window.parent.parent.document ---上两级页面,  
    parent---有几个 就是上几级页面
*/ 
$(`.operation-boxs .btn-bg-color[data-type=print]`, window.parent.document )
```

