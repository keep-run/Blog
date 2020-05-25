# 概念
`instanceof`运算符用于检测构造函数的`prototype`属性是否出现在某个实例对象的原型链中。

```javascript
function Person(){}
let p=new Person()
p instanceof Person  //true
```
# `getPrototypeOf` vs `isPrototypeOf` 
关于一个实例或者对象，怎么判断其原型。涉及到本节的两个函数
- `getPrototypeOf`：获取某个实例的原型。继续上边的例子
  ```javascript
  Object.getPrototypeOf(p)===p.__proto__  //true
  ```
- `isPrototypeOf`：检测某个对象是否存在于另一个对象的原型链上。继续以上的例子
  ```javascript
  Person.prototype.isPrototypeOf(p) //true
  ```


猜测`instanceOf`内部实现机制是
```javascript
p instanceof Person

//等价于
Object.getPrototypeOf(p)===Person.prototype

//或者
Person.prototype.isPrototypeOf(p)

```
手动实现一个通过用的instanceof
```javascript
function A() {
}

function B() { }
function C() { }
B.prototype = new A()

let instance = new B()

console.log('---instance instanceof B-----', instance instanceof B)  //true
console.log('---instance instanceof A-----', instance instanceof A)  //true

function isInstanceOf(target1, target2) {
  let proto = Object.getPrototypeOf(target1)
  if(!proto){return false}
  if (proto === target2.prototype) { return true }
  return isInstanceOf(proto, target2)
}

console.log('---instance isInstanceOf B-----', isInstanceOf(instance, B)) //true
console.log('---instance isInstanceOf A-----', isInstanceOf(instance, A)) //true
console.log('---instance isInstanceOf C-----', isInstanceOf(instance, C)) //false
```