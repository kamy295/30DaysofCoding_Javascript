console.log("Day 20 - Sorting");

function Sorting(a) {
  let n = a.length;
  let temp;
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                count++;
            }
        }
        // if(count == 0){
        // } else {
        //     console.log(`The Array is sorted!! with ${count} swaps`);
        // }
    }
    console.log(`Array is sorted in ${count} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[n - 1]}`);
}

let s = [4,3,1,2];
console.log(Sorting(s));
