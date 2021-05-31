console.log("Day 9 - Recursion...")

function factorial(n) {
    // Write your code here
    if(n <= 1){
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

console.log(factorial(3))