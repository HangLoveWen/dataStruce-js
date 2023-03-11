function linkedlist() {
  this.head = null
  //内部的类：节点类
  function Node(data, next) {
    this.data = data
    this.next = next
  }
  this.length = 0
  linkedlist.prototype.append = (data) => {
    //判断是否添加的是第一个节点
    let node = new Node(data)
    if (this.length == 0) {//是第一个节点
      this.head = node
    } else {//不是是第一个节点
      //找到最后一个节点
      var current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    //3.length+1
    this.length += 1
  }
  //tostring
  linkedlist.prototype.toString = () => {
    var current = this.head
    var string = ''
    //循环获取一个个的节点
    while (current) {
      string += current.data + ' '
      current = current.next
    }
    return string
  }
  //insert方法
  linkedlist.prototype.insert = (position, data) => {
    // 1.对position进行越界判断
    //2.对链表长度进行判断
    var current = this.head
    if (position < 0 || position > this.length) {
      return false
    }
    //根据data创建节点
    var node = new Node(data)
    //1.position=0
    if (position == 0) {
      node.next = this.head
      this.head = node
    } else {
      var index = 0
      let previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      node.next = current
      previous.next = node
    }
    this.lenght + 1
    return true
  }
  linkedlist.prototype.get = (position) => {
    var node = new Node()
    //越界判断,下标从0开始，最多获取到length-1的元素
    if (position < 0 || position >= this.length) {
      return false
    }
    //获取对应的data
    var current = this.head
    var index = 0
    while (index++ < position) {
      current = current.next
    }
    return current.data
  }
  linkedlist.prototype.indexof = (data) => {
    let current = this.head
    let index = 0
    while (!current) {
      if (current.data == data) {
        return index
      } else {
        current = current.next
        index++
      }
    }
    return -1
    //走到最后没有找到
  }
  linkedlist.prototype.update = (position, element) => {
    let current = this.head
    if (position < 0 || position >= this.length) {
      return false
    }
    let index = 0
    while (index++ < position) {
      current = current.next
    }
    //找到position所在的位置
    current.data = element
    return true
  }
  linkedlist.prototype.remmoveAt = (position) => {
    let current = this.head
    let index = 0
    if (position < 0 || position >= this.length) {
      return false
    }
    if (position == 0) {
      this.head = current.next
    } else {
      let previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      //前一个节点的next指向后一个节点的next
      previous.next = current.next
    }
    this.length -= 1
    return current.data
  }
  linkedlist.prototype.remove = (data) => {
    //获取元素的位置
    position = this.indexof(data)
    return this.remmoveAt(position)
  }
  linkedlist.prototype.isEmpty = () => {
    return this.length == 0
  }
  linkedlist.prototype.size = () => {
    return this.length
  }
}
var list = new linkedlist()
list.append('abc')
list.append('bca')
list.append('acb')
console.log(list);
list.insert(0, 'aaa')
list.insert(3, 'bba')
list.insert(5, 'cca')
console.log(list);
console.log(list.get(0));
console.log(list.get(3));
console.log(list.get(5));
list.update(0, '1')
console.log(list.indexof('1'));
console.log(list.remmoveAt(1));
console.log(list.remove('bca'));
console.log(list.isEmpty());
console.log(list.size());