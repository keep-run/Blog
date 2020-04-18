# 描述对象
- 定义具有不确定key的对象
```typescript
interface objType{
  name:string,    // 必须有name属性，值类型为string
  age?:number,    // 可能有age属性，值类型为number
  [unsureKey:string]:any  //除了上边两个属性外，可能还有其他的属性，值类型为any
}
```
# 描述函数
 `interface`除了描述普通对象外，也可以描述函数
- 函数类型：
```typescript
interface func{
  (p1:string,p2:number):boolean //定义一个函数，有两个参数，第一个参数类型为string,第二个类型为number,返回类型为boolean
}
let demo:func=function(p1,p2){ //形参和类型中名称可以不一样，按位置比较
  return p1===p2
}
let res=demo("a",1)  // res:boolean
let res=demo("a","1")  // error
```
# 可索引的类型
可索引类型很重要，比如读取数组或者对象的某一个值，就需要定义可索引的类型。ts支持两种索引类型：字符串和数字。比如
```typescript
interface test{
 [index:number]:string, //索引签名是数字
 [index:string]:any   //索引签名为字符串
}
let demo:test={"1":"a","2":"b"}
let demo2:test=['a','b']
let res1=demo["2"]; //any
let res2=demo2[0]  //string
```
以上两种索引同时使用的时候，数字索引的类型一定要是字符串索引的子类。因为数字索引最后也会转成字符串索引，比如demo[2]会转成demo["2"]。所以如果把上边`any`变成`number`就会报错
# 类类型
可以在接口中定义方法以及变量，并在类里实现它。比如：
```typescript
 interface clockInterface {
  currentTime: Date,
  setTime: (d: Date) => boolean
  //  setTime(d:Date):boolean 这两种方法定义是等价的
}
class Clock implements clockInterface {
  currentTime: Date;
  others: any;
  setTime(d: Date) {
    this.currentTime = d
    return true
  }
  setOther(params: any) {
    this.others = params
  }
}
```
从以上代码可以看到，接口描述的是类的公共部分，实现的时候也只会检测接口定义的部分。
# 继承接口
接口可以继承得到合成接口
```typescript
interface shape{
  color:string
}
interface PenStroke {
    penWidth: number;
}
// 可以继承多个接口
interface square extends PenStroke,shape{
  sideLength:number
}
```
# 混合类型
一个接口可以同时作为函数和对象使用，比如：
```typescript
interface Counter{
  (start:number):string;
  interval:number;
  reset():void
}
function getCounter():Counter{
  let counter=<Counter>function(start:number){} 
  counter.interval=1;
  counter.reset=function(){}
  return counter
}
let c=getCounter()
c(10);
c.interval=23;
c.reset();
```
