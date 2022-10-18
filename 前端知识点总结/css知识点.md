## css中顺序很重要

```html
<style>
    .red{
        color: red;
    }
    .blue{
        color: blue;
    }
</style>

<div class="blue red">最终会渲染蓝色</div>
```



## Animate.css库使用

https://animate.style/#documentation

```html
<link rel="stylesheet" href="./css/Animate.css">
<style>
    .title-style{
        display: flex;
        justify-content: center;
    }
</style>
/*** 
*animate__animated 必须加上的
*animate__jello  动画样式
***/
<div class="title-style">
    <span class="animate__animated animate__jello">Animate.css</span>
</div>
```

