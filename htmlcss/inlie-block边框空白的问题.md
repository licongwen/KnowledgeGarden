
## 如何解决使用inline-block引起的空白间隙的问题

使用inline-block来进行布局会引起元素和元素之间的几个像素的间隙（具体间隙大小取决于字体大小）。造成空白的原因是在标签之间使用了空格或换行符。因为空白字符也是字符，也会引用CSS样式。

## 解决方法

1. 设置父元素的font-size为0；在子元素重新设置字体的大小

2. 利用负的margin值(不推荐)

[具体代码参考](https://github.com/licongwen/JsFoundation/blob/master/demo/inlineblock.html)