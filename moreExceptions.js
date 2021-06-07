console.log("Day 17 - More Expections");

class Calculator {
  power(n, p) {
    if (n < 0 || p < 0) {
      throw "n and p should be non-negative";
    }
    return n ** p;
  }
}
// power(n, p) {
//     // Another way to solve the problem
//     try {
//     if (n < 0 || p < 0) throw new Error("n and p should be non-negative");
//     else {
//         return n**p;
//         // let x = Math.pow(n, p);
//         // return x;
//     }
//     } catch (e) {
//     return e.message;
//     }
// }
// }

var myCalculator = new Calculator();
console.log(myCalculator.power(-3, 5));
