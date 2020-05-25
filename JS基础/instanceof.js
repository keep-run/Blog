function A() {
}

function B() { }
function C() { }
B.prototype = new A()

let instance = new B()

console.log('---instance instanceof B-----', instance instanceof B)
console.log('---instance instanceof A-----', instance instanceof A)

function isInstanceOf(target1, target2) {
  let proto = Object.getPrototypeOf(target1)
  if(!proto){return false}
  if (proto === target2.prototype) { return true }
  return isInstanceOf(proto, target2)
}

console.log('---instance isInstanceOf B-----', isInstanceOf(instance, B))
console.log('---instance isInstanceOf A-----', isInstanceOf(instance, A))
console.log('---instance isInstanceOf C-----', isInstanceOf(instance, C))