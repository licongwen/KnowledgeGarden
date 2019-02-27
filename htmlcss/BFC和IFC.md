# BFC与IFC

> 在普通流中的盒子会参与一种格式上下文，这个盒子可能是块盒也可能是行内盒，但不可能同时是块盒又是行内盒。
>
> 块级盒参与块级格式上下文（BFC），行内盒参与行级格式上下文（IFC）。


## BFC的形成条件

* 根元素
* float的值不为none
* position的值部位static或者relative
* display的值为table-cell，table-caption，inline-block，flex或者inline-flex
* overflow的值不为visibile

## BFC的布局规则

* 内部的盒子会在垂直方向上一个接一个的放置；
* 盒子垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠；
* 每个元素的margin box的左边，与包含快border box的左边相接触。即使浮动也是如此；
* BFC的区域不会与float 元素重叠；
* BFC就是页面上一个独立的容器，内部的布局不会影响外面的布局，反之，外面的布局也不会影响容器内的布局；
* 计算BFC高度的时候，浮动元素也参与计算

## BFC使用案例 

1. 两栏布局，左边固定，右边自适应。[案例请看这里](https://github.com/licongwen/JsFoundation/blob/master/demo/twobarlayout.html)

2. 清除内部浮动，子元素浮动时，父元素设置BFC，可清除浮动，撑起父元素的高度。

3. 防止垂直margin重叠，box中的两个元素垂直方向margin重叠时，设置其中一个为BFC，可防止垂直方向的margin重叠


## IFC 

> IFC也是一种布局规则，inline元素和inlin-block符合IFC的布局规则。
>
> 在IFC中，内联元素在水平方向上一个接一个的排布，其中，容器之间水平方向上的margin，padding，border方向上时好使的。他们垂直方向上有很多种对齐方式，比如居底部或顶部对齐，或者基线对齐。他们对齐完了之后形成的这个四方块区域，叫一个line box（行框）。
>
> 一个line box的宽度由包含它的元素的宽度和包含它的元素里面有咩有float元素来决定，而高度由内部元中实际高度最高的元素计算出来。

## IFC布局规则

* 在IFC中，内敛元素在水平方向一个接一个的排布
* line box的宽度由该盒子包含的填充同时会受浮动块的影响，行盒的高度由行盒内最高的line boxes决定；
* 在IFC中，内联元素排列方式可以时基于顶部，底部，baseline
* 在内部的容器盒子太多了一个line box装不下来，他们折行之后会变成两个或者多个line box，line box们垂直方向无间隔地堆叠，但不能重叠
* 被分裂的inline box的分裂处的margin，border，和padding不会有任何视觉效果
