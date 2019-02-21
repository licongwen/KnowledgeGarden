

```js
function Parent(name){
    this.name = name;
}
let p1 = new Parent('li');
console.log(p1);//{name:li}
```
### 先来说一说执行 new 发生了什么

* 创建了一个空的对象
* 将空对象的__proto__指向构造函数的prototype
* 将this绑定到对象上，并执行构造函数里面的代码
* 如果构造函数有返回对象则返回这个对象，返回基本类型或者无返回值，则返回新创建的对象

### 代码实现

```js
function create(){
    let obj = new Object();//创建一个新的空对象
    let Con = [].shift.call(arguments);//获得构造函数
    obj.__proto__ = Con.prototype;//将空对象的__proto__指向构造函数的prototype
    let ret = Con.apply(obj,arguments);//绑定this，执行构造函数的代码
    return ret instanceof Object?ret:obj;//根据情况返回
}
function Person(name,age){
    this.name = name;
    this.age = age;
}
create(Person,'li',28)
```