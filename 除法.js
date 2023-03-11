// 剑指 Offer II 001. 整数除法
// 给定两个整数 a 和 b ，求它们的除法的商 a/b ，要求不得使用乘号 '*'、除号 '/' 以及求余符号 '%' 。
// 注意：
// 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2
// 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231, 231−1]。本题中，如果除法结果溢出，则返回 231 − 1
// 示例 1：

// 输入：a = 15, b = 2
// 输出：7
// 解释：15/2 = truncate(7.5) = 7
// 示例 2：

// 输入：a = 7, b = -3
// 输出：-2
// 解释：7/-3 = truncate(-2.33333..) = -2
// 示例 3：

// 输入：a = 0, b = 1
// 输出：0
// 示例 4：

// 输入：a = 1, b = 1
// 输出：1


// 提示:

// -231 <= a, b <= 231 - 1
// b != 0
function devide(a, b) {
  // const Int_MIN = -Math.pow(2, 31)
  // const Int_MAx = Math.pow(2, 31) - 1
  // if (a == Int_MIN && b == -1) return Int_MAx
  // let index = 0
  // let res = (a > 0) ^ (b > 0) ? -1 : 1
  // if (a > 0) a = -a
  // if (b > 0) b = -b
  // while (a <= b) {
  //   let value = b
  //   let k = 1
  //   //0xc0000000是最小值2^31的一半，b最小值不可能超过2^31的一半
  //   while (value >= 0xc0000000 && a <= value + value) {
  //     value += value
  //     if (k > Math.floor(Int_MAx / 2)) return Int_MIN
  //     k += k
  //   }
  //   a -= value
  //   index += k
  // }
  // return res == 1 ? index : -index

  //位运算
}
let a = new devide(15, 2)
console.log(a);


