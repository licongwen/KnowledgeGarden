## 常见的Vue面试题

1. v-show和v-if的区别

2. 绑定class的数组用法

3. 计算属性和watch的区别

4. 事件修饰符

5. 组件中的data为什么是函数

6. keep-alive

7. 怎样理解单向数据流

> 这个概念出现在组件通信。父组件是通过props把数据传递到子组件，但是这个props只能由父组件修改，子组件不能修改，否则会报错。子组件想要修改时，只能通过$emit派发一个自定义事件，覅组件接收到后，由父组件修改。如果想要修改，可以在子组件data中另外保存一份props的拷贝。

8. 生命周期

* **beforecreated**: $el和data并未初始化；
* **created**: data完成初始化，但是$el;
* **beforeMount**: 完成data和el初始化，还是virtual dom;
* **mounted** :完成挂载，把值渲染进去
* **beforeupdate**：
* **updated**
* **beforedestroy**
* **destroyed**

9. 组件间的通信

* 父子：props，$emit
* vuex，event bus

10. 路由跳转的两种方式

* 声明式 <router-link to='home'></router-link>
* 编程式，导航式，也就是通过js跳转 router.push({path:'/home'})

11. vue 双向绑定原理

12. 什么是MVVM，与mvc有何区别

13. nextTick(callback)

> 再下次DOM更新循环结束之后执行延时回调。再修改数据之后立即使用这个方法，获取更新后的DOM。

> 2.1.0起新增:如果没有提供回调且在支持Promise的环境中，则返回一个Promise。vue不自带promise的polyfill。

14. 就地复用原则

> 当vue用v-for正在更新已渲染的元素列表时，它默认采用‘就地复用’原则。如果数据项的顺序被改变，Vue将不会移动DOM元素来匹配数据项的顺序，而是简单的复用此出的每个元素，并确保它在特定索引下显示已被渲染过的每个元素。








参考[vue面试题](https://juejin.im/post/5c97002b6fb9a070aa5cf60b?utm_source=gold_browser_extension#comment)