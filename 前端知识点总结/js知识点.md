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

