# 关于redux的理解
## 基本概念
`redux`是`javascript`程序的可预测状态容器，用于整个容器的状态管理；
## 遵循的三个基本原则
- 单一的事实来源：状态存储于单一的状态树(store)中. 单一状态树可以更容易的观测状态变化，方便调试和检查程序(结合浏览器插件，观测更方便)。
- 状态是只读的：改变状态的唯一方法就是触发一个action. 更容易追踪状态变化的起因。
- 使用纯函数来执行修改：为了描述action如何更改state。需要编写reducer. reducer是一个纯函数。相同的输入就会有相同的输出。

参考资料：
1. https://www.redux.org.cn/docs/introduction/ThreePrinciples.html
2. https://segmentfault.com/a/1190000018604138