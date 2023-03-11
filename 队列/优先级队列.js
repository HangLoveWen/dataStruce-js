function PriorityQueue(element, priority) {
  //重新创建了一个类，内部类
  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }
  //封装属性
  this.items = []
  PriorityQueue.prototype.enqueue = (element, priority) => {
    var queueElement = new QueueElement(element, priority)
    //判断队列是否为空
    if (this.items.length == 0) {
      this.items.push(queueElement)
    } else {
      let added = false
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].priority > queueElement.priority) {
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if (!added) {
        this.items.push(queueElement)
      }
    }
  }
  PriorityQueue.prototype.dequeue = (element) => {
    return this.items.shift(element)
  }
  PriorityQueue.prototype.front = () => {
    return this.items[0]
  }
  PriorityQueue.prototype.isEmpty = () => {
    return this.items.length == 0
  }
  PriorityQueue.prototype.size = () => {
    return this.items.length
  }
  PriorityQueue.prototype.toString = () => {
    var resultstring = ''
    for (var i = 0; i < this.items.length; i++) {
      resultstring += this.items[i]
    }
    return resultstring
  }

}
var pq = new PriorityQueue()
pq.enqueue('abc', 111)
pq.enqueue('abc', 222)
pq.enqueue('abc', 334)
pq.enqueue('abc', 333)
pq.enqueue('abc', 442)
console.log(pq);