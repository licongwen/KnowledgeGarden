## 用 js 实现 bind 方法

- bind 是 Function 原型上的方法

```js
Function.prototype.bindFn = function () {
  let self = this; //保存自身的this
  let firstArg = [].shift.call(arguments); //取到参数的第一个，修改了原arguments，删除了第一项；
  let restArg = [].slice.call(arguments); //将修改后的arguments转化为数组
  function bound() {
    let copyArg = [].slice.call(arguments); //注意这个arguments和上一个arguments不一样
    return self.apply(firstArg, restArg.concat(copyArg)); //
  }
  return bound;
};
//测试用例

let obj = {
  name: "li",
};
function sayName(a, b) {
  console.log(this.name);
  console.log([a, b]);
}
let b = sayName.bindFn(obj, 1);
b(2); //li [1,2]
```
