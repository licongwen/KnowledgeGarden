## vue3 比 vue2 性能更好在哪里
vue3 相比于 vue2 有以下改变
- Proxy 代替 Object.defineProperty: vue3 中的响应式用Proxy代替了 vue2 中的Object.defineProperty。Proxy允许更细粒度的拦截操纵，使得 Vue3 能更高效的追踪属性的变化，提高了响应式系统的性能。
- 编译器优化：Vue3的编译器经过优化，生成的代码更加精简和高效，有助于减小应用程序的体积并提高运行时的性能。
- 静态树提升（Static tree hosting）：Vue3提供了静态树提升的概念，可以将一些静态节点在渲染时提升为静态常量，减少不必要的重复渲染，从而提高性能。
- 优化的事件处理：Vue3 对事件处理进行了优化，使其更加高效。特别对于频繁触发的事件，vue3的性能相对更好
- Teleport特性引入：vue3的teleport特性允许在DOM中任何位置渲染组件的内容，这在新能方面提供了更多的灵活性，能够高效的处理组件的渲染和移动
- tree-shaking支持：vue3更好的支持tree-shaking，使得在构建的时候更好的剔除未使用的代码，减少应用的体积，从而提高加载和运行的性能
