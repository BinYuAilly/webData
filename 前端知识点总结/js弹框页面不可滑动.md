```js
    let disTouchEvent=function(e){e.preventDefault();};
	//禁止页面滑动
    document.body.style.overflow='hidden';
    document.addEventListener("touchmove",disTouchEvent,false);
    //允许页面滑动
    document.body.style.overflow='auto';
    document.removeEventListener("touchmove",disTouchEvent,false);
```

