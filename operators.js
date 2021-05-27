console.log("Day 2 - Operators");

function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    var total = (meal_cost + (meal_cost * tip_percent/100) + (meal_cost * tax_percent/100));
    return total
}

console.log(solve(12.00, 20, 8));
