

## input

### input元素用于为基于Web的表单创建交互式控件，一边接受来自用户的数据。

## textarea

### textarea元素代表一个多行的纯文本编辑器控件

### 两者的区别

1. textarea标签是成对的，有结束标签闭合，标签的内容写在标签对中间；input标签是单个标签，标签的内容通过value属性来设置；
2. input的值根据类型的不同而不同，而textarea的值为纯文本；
3. textarea没有type属性，input可以通过type来满足表单与用户的数据交互
4. textarea的值可以是多行的，并通过rows和cols来控制多行结构；input的值是单行的；

### 用div模拟textarea标签

1. 给div增加一个HTML全局属性：```contenteditable='true'``` ,是的div元素编程用户可编辑的；
2. 给div添加样式```resize:vertical```,使得div可以被用户调整尺寸，主要：别忘了设置````overflow:auto```;因为resize样式不适用于```overflow:bisible```
3. 增加一个属性```placeholder='i am a placeholder'```;
