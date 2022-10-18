[TOC]



## 1.文字 一行居右 多行居左：

```
.my-value-class{            
	width: 150px;
 	text-align: right;
}
.my-value-class .value-text{
	display: inline-block;
	text-align: left;
}

<div class="my-value-class">
    <div class="value-text">
    	房间
    </div>
    <div class="value-text">
    	大家疯狂的疯狂角度看风景的房间
    </div>
</div>

```



## 2.文字超过 一行or多行 省略号

```
.show-line{//一行
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.show-line1{//多行
	width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: box;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
<div class="show-line">
	大家疯狂的疯狂角度看风景的房间大家疯狂的疯狂角度看风景的房间
</div>
```



## 3.动态展开

<style>
    /*  */
    .showDown{
        width: 200px;
        border: 1px solid sandybrown;
        height: 0px;
        transition: all .2s;
    }
</style>
<div onclick="switchFun()" style="cursor: pointer;">展开</div>
<div class="showDown"></div>
<script>
    let open = false;
    function switchFun(){
        open = !open;
        if(open){
            $(".showDown").css("height", "300px")
        }else{
            $(".showDown").css("height", "0px")
        }
    }
</script>


## 4.隐藏 scroll 滚动条

```
::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
}

/* ::-webkit-scrollbar ,兼容chrome和safari浏览器 */
.right-two-echart .table-body-box::-webkit-scrollbar,
.right-one-echart::-webkit-scrollbar {
	display: none;
}

/* 兼容火狐 */
.right-two-echart .table-body-box,
.right-one-echart {
	scrollbar-width: none;
}

/* 兼容IE10+ */
.right-two-echart .table-body-box,
.right-one-echart {
	-ms-overflow-style: none;
}
```



## 5.自动换行

```
  white-space: normal !important;
  word-wrap: normal !important;
```

## 6. selection---光标选中颜色

```css
.markdown-body p::selection {
	 color: #f0f;
}
```

## 7.是否可点击样式

```css
div{
	pointer-events:auto;
	pointer-events:none;
}
```



## 8.文字两端对齐

```css
方案1：
	.text-justify{
      width: 200px;
      text-align: justify;
    }
    .text-justify::after{
      content: "";
      display: inline-block;
      padding-left: 100%;
    }
<div class="text-justify">你的积分</div>

方案2：
    .text-justify1{
      width: 200px;
      text-align: justify;
    }
    .text-justify1 i{
      display: inline-block;
      width: 100%;
    }
<div class="text-justify1">你的积分<i></i></div>

方案3：
        .text-justify2{
            width: 200px;
            display: inline-block;
            text-align: justify;
            text-align-last: justify;
        }
<div class="text-justify2">你的积分</div>
```



## 9.文字纵向排列

```css
.lr{
    height: 200px;
    /* 默认：水平方向，从上到下 */
    writing-mode:horizontal-tb; 
    /* //垂直方向，从右向左 */
    writing-mode:vertical-rl;  
    /* //垂直方向，从左向右 */
    /* writing-mode:vertical-lr;  */
}
```

## 10.打印页面设置

```css
/* 纵向: portrait; 横向: landscape */
/* A4: 210mm×297mm */
@page { 
size: portrait; 

/* margin: 2cm 2.5cm 2cm 2.5cm; */
}

/* @page { size: landscape; } */
```



## 11.选择器 模糊匹配

```css
/*所有class包含"icon"字符串的元素都会被选中*/

[class*="icon"]{
 	color:red;
 }

/*所有class以"icon"字符串开头的元素都会被选中*/
[class^="icon"]{
  	color:red;
}

/*所有class以"icon"结尾的元素都会被选中*/
[class$="icon"]{
  	color:red;
}
```

## 12.字体大小 与 px的 转换 

```
1px ==> 0.75pt
```



## 13.a标签样式定义

```
text-decoration: none; //去掉下划线

```



## 14.直角缺角

```css
background:linear-gradient(225deg,transparent 10px,#2baaca 0);
```



## 15.Vue 中 v-html 里的样式更改  

```css
.eaa-xy>>>.tk{
  text-decoration:underline;// 下划线
}
```

## 16.下划线

```css
text-decoration:underline;// 下划线
```



## 17.自定义 radio 样式

```css

input[type="radio"] {
    clip: rect(0, 0, 0, 0);
    width: 0px;
    height: 20px;
}

input[type="radio"]::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    margin-top: -5px;
    border-radius: 50%;
    border: 1px solid #4EBC3B;
    box-sizing: border-box;
}

input[type="radio"]:checked::before {
    background-color: #4EBC3B;
    background-clip: content-box;
    padding: 3px;
    box-sizing: border-box;
}
```

## 18.深度作用选择器

```
>>> (可能存在问题)
/deep/   (less)
::v-deep (sass)
```



## 19.css打印分页

```html
// 加空格 &nbsp;
.page-end {
    page-break-after: always;
    border: none !important;
}

<div class="page-end" style="visibility: hidden;">&nbsp;</div>
<div class="page-end" style="visibility: hidden;">&nbsp;</div>
```



