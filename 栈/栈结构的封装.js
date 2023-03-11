function Stack() {
  //栈中的属性
  this.items = []
  //栈的相关操作
  Stack.prototype.push = (element) => {
    this.items.push(element)
  }
  Stack.prototype.pop = () => {
    this.items.pop()
  }
  Stack.prototype.peek = () => {
    return this.itmes[this.items.length - 1]
  }
  Stack.prototype.isEmpty = () => {
    return this.items.length == 0
  }
  Stack.prototype.size = () => {
    return this.items.length
  }
  Stack.prototype.toString = () => {
    let resultstring = ''
    for (var i = 0; i < this.items.length; i++) {
      resultstring += this.items[i]
    }
    return resultstring
  }
}
var s = new Stack()
