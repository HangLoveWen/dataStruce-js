// 基于数组实现
function Queue(element) {
  //属性
  this.items = []
  //方法
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

}
function jigu(num, name) {
  let que = new Queue()
  for (let i = 0; i < name.length; i++) {
    que.enqueue(name[i])
  }
  while (que.size() > 1) {
    for (var i = 0; i < num - 1; i++) {
      que.enqueue(que.dequeue())
    }
    que.dequeue()
  }
  // name.indexOf(que.front()) 返回值为1
  return que.front()
}


console.log(jigu(3, ['zw', 'ls', 'ww']));