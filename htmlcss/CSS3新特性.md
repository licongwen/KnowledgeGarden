

## 1.CSS3新的选择器

* E:lsat-child 匹配父元素的最后一个子元素E；
* E：nth-child(n) 匹配父元素的第n个子元素E；
* E:nth-last-child(n)匹配父元素的倒数第n个子元素E

## 2.@Font-face特性

Font-face可以用来加载字体样式，而且它还能加载服务器端的字体，让客户端显示没有安装的字体
```css
@font-face{
    font-family:BorderWeb;
    src:url(BORDERW0.eot);
}
@font-face{
    font-family:Runic;
    src:url(RUNICMTo.eot)
}
.border{
    font-size:35px;
    color:red;
    font-family:'BorderWeb'
}
.event{
    font-size:35px;
    color:red;
    font-family:'Runic'
}
```

## 3.圆角

```css
border-radius:10px;
```

## 4.阴影(Shadow)

```css
.class1{
    text-shadow:5px 2px 6px rgba(64,64,64,.5)
}
```

## 5.渐变效果

```css
.class1{
    background-image:-webkit-gradient(linear,0%,0%,100%,0%,from(#2A8BBE),to(#FE280E))
}
```
这里iner表示线性渐变，从左到右，由蓝色(#2A8BBE)到红色(#FE280E)的渐变

## 6.CSS3盒子模型

盒子模型为开发者提供了一种非常灵活的布局方式，但是支持这一特性的浏览器并不多，目前只有webkit内核的新版本safari和chrome以及gecko内核的新版本firefox。

## 7.css3的transitions，transforms和animation

1. transitions有以下的属性
    * transition-property：用于指定过度的性质，
    * transition-duration：用于指定过度的持续时间
    * transition-delay：用于制定延迟过度的时间
    * transition-timing-function：用于指定过度类型，有ease|linear|ease-in|ease-out|ease-in-out|cubic-bezier
 
2. Transform

再来看看transform，其实就是指拉伸，压缩，旋转，偏移等等一些图形学里面的基本变换。详情见具体代码

```css
.skew{
    -webkit-transform:skew(50deg);
}
.rotate{
    -webkit-transform:rotate(90deg)
}
.scale{
    -webkit-transform:scale(2,0.5)
}
.translate{
    -webkit-transform:translate(50px,50px)
}
.all_in_one_transform { 
    -webkit-transform: skew(20deg) scale(1.1, 1.1) rotate(40deg) translate(10px, 15px); 
}
```
skew是倾斜，scale是缩放，rotate是旋转，translate是移动。

3. animation

animation可以自定义我们自己的动画，实例代码如下：

```css
@webkit-keyframes anim1{
    0%{
        opactity:0;
        font-size:12px;
    }
    100%{
        opactity:1;
        font-size:24px;
    }
}
.anim1Div{
    -webkit-animation-name: anim1 ; 
    -webkit-animation-duration: 1.5s; 
    -webkit-animation-iteration-count: 4; 
    -webkit-animation-direction: alternate; 
    -webkit-animation-timing-function: ease-in-out;
}
```

定义动画“anim1”，变化方式为由“透明”（opacity: 0）变到“不透明”（opacity: 1），同时，内部字体大小由“12px”变到“24px”。然后，再来定义 animation 的变化参数，其中，“duration”表示动画持续时间，“iteration-count”表示动画重复次数，direction 表示动画执行完一次后方向的变化方式（如第一次从右向左，第二次则从左向右），最后，“timing-function”表示变化的模式。
