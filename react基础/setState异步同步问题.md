`setState`的异步问题，其实并不是代码是异步实现的，代码本身是同步的，只是在合成事件以及生命周期钩子函数中，setState在更新之前调用，导致没办法立即拿到更新后的值，形成所谓的异步。

- 同步执行：原生事件&setTimeout
- 异步执行：合成事件(比如react中的onClick以及onChange等)&生命周期的钩子函数

参考资料： https://zhuanlan.zhihu.com/p/39512941