console.log("Day 1 - Data Types")

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    var a, b, c, k;

    // Read and save an integer, double, and String to your variables.
    a = parseInt(readLine());
    b = parseFloat(readLine());
    c = readLine();
    k = (d + b).toFixed(1)
    // Print the sum of both integer variables on a new line.
    console.log(i + a)
    // Print the sum of the double variables on a new line.
    console.log(k)
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + c)

}