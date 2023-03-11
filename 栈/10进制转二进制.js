let number = 10
function otoTwo(element) {
  let s = []
  while (element > 0) {
    s.push(element % 2)
    element = Math.floor(element /= 2)
  }
  let result = ''
  while (s.length != 0) {
    result += s.pop()
  }
  return result
}
console.log(otoTwo(number));