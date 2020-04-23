# exec 
在一个指定字符串中执行一次搜索匹配。返回一个数组或者`null`
- 没有匹配到时，返回`null`
- 匹配到时，返回一个数组。且该数组有两个属性
  - 数组的第一项是匹配到的全部字符串。
  - 数组第二项开始为正则中括号内的捕获分组。
  - input:原始的字符串。
  - index:匹配到的字符位于原始字符串的基于0开始的索引值。
  
  如果，正则表达式带有`global`或者`sticky`标志。执行`exec`后，该正则表达式是有状态的。会将上次匹配成功后的位置，记录与`lastIndex`属性中。

  测试用例
  ```javascript
  let regex=/foo([a-z]+)/g
  let str="table football food"
  // 匹配到football。整个字符串返回作为第一项。f的索引为6，存放于index. 捕获的分组为foo后边的a-z的字符。得到tball 放在第二项。
  console.log(regex.exec(str)) //[ 'football','tball',index: 6,input: 'table football food',groups: undefined ]
  console.log(regex.lastIndex)   //14  匹配到的football的结束位置

  //由于regex 带了global参数。继续向后匹配，匹配到food
  console.log(regex.exec(str)) //[ 'food','d',index: 15,input: 'table football food',groups: undefined ]
  console.log(regex.lastIndex)   //19  匹配到的food的结束位置

   //继续向后匹配
  console.log(regex.exec(str)) //null 匹配不到了
  console.log(regex.lastIndex)   //0  如果继续执行 下一次将从头开始匹配。和第一次匹配是一样的
  ```

# match
  返回正则表达式匹配字符串的结果。返回值的特性：
  - 如果表达式带有`g`。则返回匹配的所有结果。但是不会返回捕获组。
  - 如果没有`g`。则和`exec`返回值相同
  
  测试用例
  ```javascript
  let regex=/foo([a-z]+)/g
  let str="table football food"

  console.log(str.match(regex)) //[ 'football', 'food' ]

  console.log('12309125698'.match(/\d{1,3}(?=(\d{3})+$)/g))// ["12", "309", "125"]
  ```

# replace
`replace`有多种用法，都会返回一个新的字符串。正则表达式是一个重要用法。
- 语法 `str.replace(regexp|substr, newSubStr|function)`
- 参数详解：
  - regexp：被这个正则表达式匹配到的内容将被第二个参数的返回值替换。
  - substr：作为一个字符串被newSubstr替换。注意只有第一个匹配项会被替换。比如：
  ```javascript
  'dog dog'.replace("dog","cat")  // => "cat dog"
  ```
  - newSubStr：替换掉第一个参数在原字符串中匹配的内容。除此之外，使用字符串作为参数，还可以插入一些特殊的字符。具体，稍后分析。
  - function：函数的返回值，用于替换掉第一个参数匹配到的结果。
## 使用字符串作为参数
  替换字符串可以加入以下特殊的变量名
  - $n：如果第一个参数是正则表达式，$n表示第n(从1开始记)个括号匹配的内容。
  ```javascript
  'a13290170912b'.replace(/(\d{3})(\d{4})(\d{4})/g, '$1******$3')  //"a132******0912b"
  ```
  - $$：插入一个$符号
  ```javascript
  'ab13290170912b'.replace(/(\d{3})(\d{4})(\d{4})/g, '$$ $1******$3') //"ab$ 132******0912b"
  ```
  - $&：插入匹配的子串
  ```javascript
  'ab13290170912b'.replace(/(\d{3})(\d{4})(\d{4})/g, '$& $1******$3') //"ab13290170912 132******0912b"
  ```
  - $`:插入当前匹配的子串左边的内容。
  - $':插入当前匹配的子串右边的内容。

# 使用函数作为参数
如果第一个参数是一个正则表达式，且是全局模式。这个函数每次匹配都会调用，函数的参数：
- `match`：匹配的子串
- `p1,p2, ...`：如果第一个参数是正则表达式，这里对应各个括号中匹配的字符。

测试用例
```javascript
let str='13290123';
 str.replace(/\d{1,3}(?=(\d{3})+$)/g,function(match){
    return match+','
})
// => 13,290,123
```