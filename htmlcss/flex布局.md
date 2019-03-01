## Flex布局

flex 意思为弹性布局，用来为盒状模型提供最大的灵活性。任何元素都可以是flex布局，.box{display:flex},行内元素也可以.box{display:inline-flex};

> 注意，设置为flex属性后，子元素的float，clear，vertical-align属性将失效

容器默认存在两根轴：水平的主轴(main axios)和垂直的交叉轴(cross axis).主轴的开始位置(与边框的交叉点)叫做main start，结束位置叫main end；交叉轴的开始位置叫cross start，结束位置叫做cross end。

参考 [阮大神的flex讲解](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
## 容器的属性

1. flex-direction: 属性决定主轴的方向（即项目的排列方向）
    * row(默认值):主轴为水平方向，起点在左端；
    * row-reverse：主轴为水平轴，起点在右端；
    * column：主轴为垂直方向，起点在上沿；
    * column-reverse：主轴为垂直方向，起点在下沿。

2. flex-warp：默认情况下，项目都在一条线（又成轴线上）上，flex-wrap规定，如果一条轴线排不下，如何换行。
    * nowrap(默认):不换行
    * wrap：换行，第一行在上方
    * wrap-reverse：换行，第一行在下方

3. flex-flow:flex-flow是flex-direction属性和flex-wrap属性的简写形式，默认值为 row nowrap。
```css
.box{
    flex-flow:<flex-direction> || <flex-wrap>
}
```

4. justify-content：定义了项目在主轴上的对齐方式
    * flex-start(默认值)：左对齐
    * flex-end：右对齐
    * center:居中
    * space-between：两端对齐，项目之间的间隔相等
    * sapce-around：每个项目两侧的间隔相等，所以，项目之间的间隔比项目与边框的间隔大一倍.

5. align-items：
    * flex-start：交叉轴的起点对齐。
    * flex-end：交叉轴的中带你对齐
    * center：交叉轴的中电对齐
    * baseline：项目的第一行文字的基线对齐
    * stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度

6. align-content：定义了多根轴线的对齐方式。如果只有一根轴线，改属性不起作用。
    * flex-start:与交叉轴的起点对齐
    * flex-end：与交叉轴的终点对齐
    * center:与交叉轴的中点对齐
    * space-between：与交叉轴两端对齐，轴线之间的间隔平均分布
    * space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍
    * stretch：轴线占满整个交叉轴

## 项目的属性

1. order:定义项目得排列顺序。数值越小，排列越靠前，默认为0。

2. flex-grow: 定义项目得放大比例，默认为0，即如果存在剩余空间，也不放大。如果所有项目的flex-grow的属性都为1，则它们将等分剩余的空间。如果一个项目的flex-frow属性为2，其他项目都为1，则前者占据的甚于空间将比其他项多一倍。

3. flex-shrink：定义项目的缩小比例，默认为1，如果空间不足，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

4. flex-basis：属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。默认值为auto，即项目的本来大小。

5. flex：flex是flex-grow，flex-shrink和flex-basis的缩写，默认值0，1，auto。后两个属性可选。改属性有两个快捷值auto(1 1 auto)和none(0 0 auto).

5. align-self: 允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。可取值：
```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```




