console.log("Day 3 - Conditionals");

function conditionalsMain(N) {
  if (N % 2 == 0 && N > 20) {
    console.log("Not Weird");
  } else if (N % 2 == 0 && N < 5) {
    console.log("Not Weird");
  } else {
    console.log("Weird");
  }
}

let n = 3;
console.log(conditionalsMain(n));
