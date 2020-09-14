# 相同点
- 都可以描述一个函数和对象；
- 都可以拓展，但是语法不同，interface拓展用extends, type利用交叉类型进行拓展。且两者不是相互独立的，而是可以相互相会拓展。比如：
  - interface extends interface
  ```typescript
  interface Name{
    name:string
  }
  interface User extends Name{
    age:string
  }
  // User 具备 name 和 age 两个属性
  ```
  - interface extends type
  ```typescript
  type Name={
    name:string
  }
  interface User extends Name{
    age:number
  }
  // User 具备 name 和 age 两个属性
  ```
  - type 与 type 交叉
  ```typescript
  type Name={
    name:string
  }
  type User = Name & {age : number}
  // User 具备 name 和 age 两个属性
  ```

  - type 与 interface 交叉
  ```typescript
  interface Name = {
    name:string
  }
  type User = Name & { age : number }

  // User 具备 name 和 age 两个属性
  ```
# 不同点
## type可以而interface不可以的
- type可以声明基本类型别名，联合类型，元组等类型
```typescript
//类型别名
type Name = string 

//联合类型
interface Dog{
  wang():void
}
interface Cat{
  miao():void
}
type Pet = Dog|Cat

// 具体定义数组每个位置的类型
type PetList = [Dog,Cat,Pet]
```
- type语句中还可以用typeof获取实例类型进行赋值
```typescript
let div = document.createElement('div')
type B = typeof div
```

## interface可以而type不行的
interface可以声明合并
```typescript
interface User {
  name : string
}
interface User {
  sex : number
}

// User同时有两个属性 name sex
```
参考文档：https://github.com/SunshowerC/blog/issues/7
