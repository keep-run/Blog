# mixin
当完全不同的组件，具有一些相同的功能时，可以将这些相同的功能抽出去，基于mixin实现复用。

`react`的es6写法中已经废弃了，只能通过`createClass`使用. 用法如下：
```javascript
let LogMixin={
  log:function(){console.log('log')},
  componentDidMount:function(){ console.log('login') }
}

let User=React.createClass({
  mixins:[LogMixin],  //mixin复用
  render:funciton(){
    return (<div>xxx</div>)
  }
})

let Goods=React.createClass({
  mixins:[LogMixin], //mixin复用
  render:funciton(){
    return (<div>xxx</div>)
  }
})
```
## mixin的危害
- `Mixin`可能相互依赖，相互耦合，代码不易维护；
- 不同的`Mixin`中的方法可能冲突；
- `Mixin`非常多的时候，组件要为其做专门的处理，导致复杂性越来越高；

由于`mixin`带来的问题比带来的价值更多，`react`已经废弃使用，推荐用HOC来替代他；

# 高阶组件(HOC)
相比于`mixin`,高阶组件具有以下优势：
- 高阶组件是一个没有副作用的纯函数，各个高阶组件不会相互依赖和耦合；
- 高阶组件也可能冲突，但是可以在遵循约定的情况下避免这些冲突；
- 高阶组件不关心数据使用的方式和原因，而被包裹的组件不关心数据的来源，总之。高阶组件不会为原组件增加负担。

HOC的缺陷：
- 需要在原组件上进行包裹和嵌套，如果大量使用HOC，会产生非常多的嵌套，使得调试变的很困难；
- HOC可以劫持`props`. 如果使用不规范或者不遵守约定，容易产生冲突；

# Hooks
通过自定义的hooks。可以解决mixin以及HOC的问题。

比如通过自定义Hooks修改页面的title
```javascript
function useTitle(title) {
  useEffect(
    () => {
      document.title = title;
      return () => (document.title = "主页");
    },
    [title]
  );
}
function Page1(props){
  useTitle('Page1');
  return (<div>...</div>)
}
```

Hooks的好处
- 减少逻辑状态复用的风险
  - hooks的用法和mixin相似，但是mixin引入的逻辑和状态可以相互覆盖，而多个hooks，相互独立；
  - 使用HOC的时候，如果不遵循约定，会带来一些冲突，比如props覆盖等问题。使用hooks则可以避免；
- 避免地狱式嵌套，大量的HOC使得代码的嵌套层级很深，而hooks可以实现扁平式的代码复用；


参考文章：
- https://juejin.im/post/5cad39b3f265da03502b1c0a#heading-0