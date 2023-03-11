function Doubly() {
  this.head = null
  this.tail = null
  this.length = 0
  function Node(data) {
    this.pre = null
    this.data = data
    this.next = null
  }
  //常见的方法
  Doubly.prototype.append = (data) => {
    //创建新的节点
    let node = new Node(data)
    if (this.length == 0) {
      this.head = node
      this.tail = node
    } else {
      //找到最后节点
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    this.length += 1
  }
  Doubly.prototype.insert = (position, element) => {
    let node = new Node(element)
    let current = this.head
    if (position < 0 || position > this.length) {
      return false
    }
    //链表长度为0
    if (this.length == 0) {
      this.tail = node
      this.head = node
    } else {
      //判断position是否为0
      if (position == 0) {
        this.head = node
        node.next = this.head
        this.head.pre = node
      } else if (position == this.length) {
        node.pre = this.tail
        this.tail.next = node
        this.tail = node
      } else {
        let index = 0
        while (index++ < position) {
          current = current.next
        }
        //修改指针
        node.next = current
        node.pre = current.pre
        current.pre.next = node
        current.pre = node
      }
      this.length += 1
      return true
    }
  }
  Doubly.prototype.toString = () => {
    return this.backforwardString
  }
  Doubly.prototype.forwardString = () => {
    let node = new Node()
    let current = this.tail
    let string = ''
    while (current) {
      string += current.data
      current = current.prev
    }
  }
  Doubly.prototype.backforwardString = () => {
    let node = new Node()
    let current = this.head
    let string = ''
    while (current) {
      string += current.data
      current = current.next
    }
  }
  Doubly.prototype.get = (position) => {
    if (position < 0 || position > this.length) return null
    // this.length/2>position:从钱往后
    // this.length/2<position:从后往钱
    var current = this.head
    var index = 0
    while (index++ < position) {
      current = current.next
    }
    return current.data
  }
  Doubly.prototype.indexof = (element) => {
    var current = this.head
    var index = 0
    while (current) {
      if (current.data == element) {
        return index
      }
      current = current.next
      index += 1
    }
    return -1
  }
  Doubly.prototype.update = (position, element) => {
    if (position < 0 || position >= this.length) return false
    let current = this.head
    let index = 0
    while (index++ < position) {
      current = current.next
    }
    current.data = element
    return true
  }
  //从特定的位置移除一项
  Doubly.prototype.removeAt = (position) => {
    if (position < 0 || position >= this.length) return false
    //判断是否只有一个节点
    let current = this.head
    if (this.length == 0) {
      this.head = nul
      this.tail = null
    } else {
      //判断是否删除的是第一个节点
      if (position == 0) {
        this.head = this.head.next
        this.head.next.pre = null
      } else if (position == this.length - 1) {
        current = this.tail
        this.tail.pre.next = null
        this.tail = this.tail.pre
      } else {
        let index = 0
        while (index++ < position) {
          current = current.next
        }
        current.pre.next = current.next
        current.next.pre = current.pre
      }
    }
    this.length -= 1
    return current.data
  }
  Doubly.prototype.remove = (element) => {
    let index = this.indexof(data)
    return this.removeAt(index, element)
  }
  Doubly.prototype.isEmpty = () => {
    return this.length == 0
  }
  Doubly.prototype.size = () => {
    return this.length
  }
  Doubly.prototype.getHead = () => {
    return this.head.data
  }
  Doubly.prototype.getTail = () => {
    return this.tail.data
  }
}
let list = new Doubly()
list.append('abc')
list.append('acb')
list.append('acd')
list.insert(0, 'aaa')
list.insert(4, 'bbb')
list.insert(2, 'ccc')
// console.log(list.get(0));
// console.log(list.get(2));
// console.log(list.get(5));
// console.log(list.indexof('aaa'));
// console.log(list.update(1, 'aaa'));
console.log(list.removeAt(0));
console.log(list);
console.log(list.removeAt(0));
console.log(list);
list.size()
list.getHead()
list.getTail()
