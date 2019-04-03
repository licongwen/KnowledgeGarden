# Webpack知识点

学习笔记，[参考](https://segmentfault.com/a/1190000015088834)

## 基本概念

1. Entry：入口文件，webpack执行构建的第一步将从Entry开始；

2. Module: 模块，在webpack里一切皆为模块，一个模块对应着一个文件，webpack会从配置的Entry开始递归找出所有依赖的模块。

3. Chunk: 代码块，一个chunck由多个模块组合而成，用于代码合并与分割；

4. Loader： 模块转换器，用于将模块内容按照需求转换成新的内容，比如将TypeScript转化为Js；

5. Plugin ：扩展插件，在Webpack构建流程中的特定时机会广播出对应的事件，插件可以监听这些事件的发生，在特定时机做对应的事情。

## 流程概括

webpack的流程是一个串行的过程，从启动到结束会依次执行以下的流程：

1. 初始化参数：从配置文件和shell语句中读取与合并参数，得出最终的参数；

2. 开始编译：利用得到的参数初始化Compiler对象，加载所有进行翻译，执行对象的run方法开始执行编译；

3. 确定入口： 根据配置中的entry找到入口文件；

4. 编译模块：从入口文件出发，调用所有配置的Loder对模块进行翻译，在找出改模块依赖的模块，在递归本步骤直到所有入口依赖的文件都经过了Loader处理；

5. 完成模块的编译：在经历第4步之后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；

6. 输出资源： 根据入口和模块之间的依赖关系，组装成一个个包含多个模块的Chunk,再把每个Chunk转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；

7. 输出完成，再确定好输出内容后，再根据配置输出的路径和文件名，把文件内容写到文件系统；

再以上过程中，Webpack会在特定的时间点广播初特定的事件，插件（Plugin）再监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用Webpack提供的api来改变Webpack的运行结果。


## chunck、bundle、module

先看Webpack，glossary的定义

* Bundle：Produced from a number of distinct modules，bundles contain the final version of source files that already undergone loading and compilation process.

> Bundle: 由一些不同的modules产生，bundles包含已经经过加载和编译过程的源文件的最终版本。

* Chunk：This webpack-specific term is used internally to manage the bundling process.Bundles are composed out of chunks,of which there are several types(e.g entery and child).Typically,chunks directly correspond with the output bundles however,there are some configurations that don't yield a one-to-one relationship.

> Chunk：此webpack特定术语在内部用于管理bundling的过程。Bundles由一些不同类型的chunks组成。通常，chunks直接与输出的bundles相对应，但是，有些配置不会产生一对一的关系。（多个chunk合在一起就是一个bundle）

* Module:Discreate Chunks of functionality that provide a smaller surface area than a full program.Well-written modules solid abstractions and encapsulation boundaries which make up a coherent design and clear purpose.

> Module:分离的Chunks功能模块，能够提供比完整程序更小的体积。精心编写的模块实体抽象和封装边界构成了一致的设计和明确的目的。


**差异：一个chunk是由一些原始的webpack编译过程中的modules组成；一个bundle是由一个处理好的chunk或者一些处理好的chunk组成**

```js
{
    entry:{
        foo:["webpack/hot/only-dev-server.js","./src/foo.js"],
        bar:["./src/bar.js"]
    },
    output:{
        path:"./dist",
        filenma:"[name].js"
    }
}
// 在这个例子中：
// Modules:"webpack/hot/only-dev-server.js", "./src/foo.js", "./src/bar.js" 和任何这些模块依赖的模块
// Chuncks：foo,bar
// Bundles:foo,bar
// 在这个例子中，chunck和bundle一一对应，比如，添加了source map意味着chunk和bundle的关注就是1：2.或者使用code spliting，将一个bundle拆分成不同的chunk
```