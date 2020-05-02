# 关于redux的理解
## 基本概念
`redux`是`javascript`程序的可预测状态容器，用于整个容器的状态管理；
## 遵循的三个基本原则
- 单一的事实来源：状态存储于单一的状态树(store)中. 单一状态树可以更容易的观测状态变化，方便调试和检查程序(结合浏览器插件，观测更方便)。
- 状态是只读的：改变状态的唯一方法就是触发一个action. 更容易追踪状态变化的起因。
- 使用纯函数来执行修改：为了描述action如何更改state。需要编写reducer. reducer是一个纯函数。相同的输入就会有相同的输出。返回一个新的state.不改变原来的state.

# 一些解读
## redux是一个状态容器，那么状态容器解决了什么问题呢?
- 解决了组件之间的通信问题。多层级的通信，组件间的通信等；
- 方便进行数据管理。抽离组件间公共的逻辑部分；
- 通过store推进组件更新（对于react来说，只能通过改变组件的state和props变化来进行更新渲染。使用redux可以通过store中数据的改变，驱动组件更新）。

## 怎么理解可预测
基于redux遵守的三个原则。我们可以很清楚的知道，触发一个动作(action)之后，会发生什么。改变之后的数据(store/state)是什么样子的。结合redux-devtool可以更方便的观测。


参考资料：
1. https://www.redux.org.cn/docs/introduction/ThreePrinciples.html
2. https://segmentfault.com/a/1190000018604138
3. https://juejin.im/post/5cefb163f265da1ba56b0300