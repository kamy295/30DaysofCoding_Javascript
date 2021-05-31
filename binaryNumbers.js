console.log('Day 10 - Binary Numbers')

function main(n) {
    //var n = parseInt(readLine());
    var count = 0;
    // to give an array of 1s
    var BinArr = n.toString(2).split('0');
    console.log(BinArr)
   // if you are not using ES6 the you can also do this
   	var max = Math.max.apply(null, BinArr)
       //else do the following
    //var max = Math.max(...BinArr);
    console.log(max.toString().length);
}

let n = 13;
console.log(main(n));
