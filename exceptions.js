console.log("Day 16 - Exceptions - String to Integer");

function main(S) {
  // Its a Hack - As we are not able to use conditionals, we cant use the isNaN() but the below code works ;)
  try {
    S != Number(S) && err();
    console.log(Number(S));
  } catch (err) {
    console.log("Bad String");
  }

  //The below code wont work in HackerRank as it contains conditional
//   try {
//     //if (isNaN(S)) throw "Bad String";
//     var a = parseInt(S);
//     console.log(a);
//   } catch (Exception) {
//     console.log("Bad String" + e);
//   }
}

let S = "za";
main(S);
