// 基于数组实现
function Queue(element) {
  //属性
  this.items = []
  Queue.prototype.enqueue = (element) => {
    this.items.push(element)
  }
  Queue.prototype.dequeue = (element) => {
    return this.items.shift(element)
  }
  Queue.prototype.front = () => {
    return this.items[0]
  }
  Queue.prototype.isEmpty = () => {
    return this.items.length == 0
  }
  Queue.prototype.size = () => {
    return this.items.length
  }
  Queue.prototype.toString = () => {
    var resultstring = ''
    for (var i = 0; i < this.items.length; i++) {
      resultstring += this.items[i]
    }
    return resultstring
  }
  //方法
}
var dui = new Queue()
dui.enqueue('a')
dui.enqueue('b')
dui.enqueue('c')
dui.enqueue('c')
console.log(dui);