console.log("Day 7 - Arrays");

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    //code
    arr.reverse()
    console.log(arr.join(" "))
    
}
