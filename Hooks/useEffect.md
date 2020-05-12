# effect的好处
 - 实现代码分离。class组件中有关联的代码可能分布于`componentDidMount`、`componentWillUnmount`以及`componentDidUpdate`等生命周期中，每个生命周期内部会包含诸多无关联的代码。利用useEffect可以将相关的代码放在一个effect中。更有利于把相关代码放在一起处理。

# 为什么每次更新的时候都要运行effect
每次重新渲染的时候，都会先执行上一次渲染effect的返回函数，用于清除effect.然后执行新的effect。这可以减少bug。在class组件中，在`componentWillUnmount`中才清除。就需要特别关心`componentDidUpdate`中相关数据变化。