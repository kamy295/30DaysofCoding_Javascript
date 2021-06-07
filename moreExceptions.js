console.log("Day 17 - More Expections");

class Calculator {
  power(n , p) {
    try {
      if (n < 0 || p < 0) throw new Error("n and p should be non-negative");
      else {
        let x = Math.pow(n, p);
        return x;
      }
    } catch (e){ return e.message}
  }
}

var myCalculator = new Calculator();
console.log(myCalculator.power(-3, 5 ));
