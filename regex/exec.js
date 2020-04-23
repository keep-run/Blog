let regex=/foo([a-z]+)/g
let str="table football food"
console.log(111111111,regex.lastIndex)
console.log(regex.exec(str))
console.log(regex.lastIndex)

console.log(regex.exec(str))
console.log(regex.lastIndex)


console.log(regex.exec(str))
console.log(regex.lastIndex)
console.log('----------------')
console.log(regex.exec(str))
console.log(regex.lastIndex)