## 原型链继承

```js
function SuperType() {
  this.name = "spuer";
  this.friends = ["li", "wu"];
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
};
function SubType() {}
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
let sub1 = new SubType();
console.log(sub1.friends); //['li','wu'];
//缺点：1.需要将子类原型的constructor属性重新指向回子构造函数
//     2.子类会共享父类的引用类型
let sub2 = new SubType();
sub2.friends.push("tong");
console.log(sub1.friends); //['li','wu','tong']
console.log(sub2.friends); //['li','wu','tong']
//共享了父类的引用类型，基本类型不受影响
```

## 借用构造函数

```js
function SuperType(name) {
  this.name = name;
  this.friends = ["li", "wu"];
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
};
function SubType(name) {
  SuperType.call(this, name);
}

var sub1 = new SubType("li");
var sub2 = new SubType("simon");

sub1.friends.push("tong");
console.log(sub1.friends); //['li','simon','tong']
console.log(sub2.friends); //['li','simon'];
sub1.sayName(); //Uncaught TypeError: sub1.sayName is not a function
//优点：1.避免了父类中的引用类型被共享的缺点；
//     2.字类可以向父类传参
//缺点：1.只能继承父类的实例属性和方法，不能继承原型属性和方法；
//     2.每次创建子类实例都会调用一次父类构造函数；
```

## 组合继承

```js
function SuperType(name) {
  this.name = name;
  this.friends = ["li", "wu"];
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
};

function SubType(age, name) {
  //第二次调用SuperType
  SuperType.call(this, name);
  this.age = age;
}

SubType.prototype = new SuperType(); // 第一次调用SuperType
SubType.prototype.constructor = subType;

SubType.prototype.sayAge = function () {
  console.log(this.age);
};

var sub1 = new SubType("Nicholas", 27);
var sub2 = new SubType("Grey", 28);
sub1.friends.push("tong");
console.log(sub1.friends); //['li','wu','tong']
sub1.sayName(); //Nicholas
sub1.sayAge(); //27
console.log(sub2.friends); //['li','wu']
sub2.sayName(); //Grey
sub2.sayAge(); //28
//缺点：1.调用两次父类构造函数
//     2.使用子类创建实例对象时，其原型中会存在两份相同的属性/方法。
```

## 原型式继承

```js
let obj = { name: "xiao", friends: ["li", "wu"] };
function CreateObject(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}
var obj1 = CreateObject(obj);
var obj2 = CreateObject(obj);
obj1.name = "cong";
obj1.friends.push("tong");
console.log(obj1.name); //cong
console.log(obj1.friends); //['li','wu','tong']
console.log(obj2.name); //xiao
console.log(obj2.friends); //['li','wu','tong']

// 缺点：1.共享了父类的引用类型
```

## 寄生式继承

```js
let obj = {
  name: "macus",
  friends: ["li", "wu"],
};
function CreateObject(obj) {
  let newObj = Object.create(obj);
  newObj.sayName = function () {
    console.log(this.name);
  };
  return newObj;
}
let obj1 = CreateObject(obj);
obj1.sayName(); //macus
//缺点：同原型式继承
```

## 寄生组合式继承

```js
function inhertPrototype(Parent, Child) {
  // Child.prototype = Object.create(Parent.prototype);
  // Child.prototype.constructor = Child;
  let prototye = Object.create(Parent);
  prototye.constructor = Child;
  Child.prototype = prototype;
}
function Parent(name) {
  this.name = name;
  this.friends = ["xiaobao", "xiaojie"];
}
Parent.prototype.sayName = function () {
  console.log(`parent's name is ${this.name}`);
};
function Child(name, parentName) {
  Parent.call(this, parentName);
  this.name = name;
}
Child.prototype.sayName = function () {
  console.log(`child's name is ${this.name}`);
};
inhertPrototype(Parent, Child);
var parent = new Parent("father");
parent.sayName(); //parent's name is father
var child1 = new Parent("son1", "father");
child1.friends.push("abei");
console.log(child1.friends); //['xioabao','xiaojie','abei']
child1.sayName(); //child's name is son1
var child2 = new Child("son2", "father");
console.log(child2.friends); //['xioabao','xiaojie']
child2.sayName(); //child's name is son2;

// 优点：只调用了一次父类构造函数，避免子类上创建不必要的/多余的属性
```

## ES6 的继承

1、ES6 提供了更接近传统语言“类”的写法，引入了 Class（类）这个概念，中作为对象的模板；
2、通过 Class 关键字，可以定义类。Class 可以看做只是一个语法糖，它的绝大部分功能，ES5 都可以做到。

```js
class Parent {
  constructor(name) {
    this.name = name;
  }
  doSomthing() {
    console.log("parent do something");
  }
  sayName() {
    console.log(`parent's name is ${this.name}`);
  }
}
class Child extends Parent {
  constructor(name, parentName) {
    super(parentName); //子类中必须调用super
    this.name = name;
  }

  sayName() {
    console.log(`chlid'name is ${this.name}`);
  }
}
const child = new Child("son", "father");
child.sayName(); //child's name is son
child.doSomthing(); //parent do somthing
const parent = new Parent("father");
parent.sayName(); //parent's name is father
// 能用ES6的继承优先使用ES6的继承
```
