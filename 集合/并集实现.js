//封装集合类
function Set() {
  //属性
  this.items = {}
  //方法
  Set.prototype.add = (value) => {
    //判断是否已经包含该元素
    if (this.has(value)) return false
    //将元素添加到集合中
    this.items[value] = value
    return true
  }
  //has方法
  Set.prototype.has = (value) => {
    return this.items.hasOwnProperty(value)
  }
  Set.prototype.remove = (value) => {
    //1.判断该集合中是否包含该元素
    if (!this.items.has(value)) return false
    delete this.items[value]
    return true
  }
  Set.prototype.clear = () => {
    this.items = {}
  }
  //size方法
  Set.prototype.size = () => {
    return Object.keys(this.items).length
  }
  //获取对象中所有的值
  Set.prototype.values = () => {
    return Object.keys(this.items)
  }
  //集合间的操作
  Set.prototype.union = (otherSet) => {
    //1.创建新的结合
    let unionSet = new Set()
    let values = this.values()
    //将A集合中的所有元素加到新集合中
    for (let i = 0; i < values.lenght; i++) {
      unionSet.add(values[i])
    }
    values = otherSet.values()
    for (let i = 0; i < values.lenght; i++) {
      unionSet.add(values[i])
    }
    return unionSet
  }

}

let set = new Set()
let a = new Set()
set.add('abc')
set.add('ab')
set.add('bca')
a.add('abcd')
a.add('aba')
a.add('bc')
let b = set.union(a)
console.log();
// set.add('bcb')
// set.add('bcb')
// set.unionSet(a)