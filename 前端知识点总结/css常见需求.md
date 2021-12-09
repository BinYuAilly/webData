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



