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