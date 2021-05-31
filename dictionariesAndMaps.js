console.log("Day 8 - Dictionaries and Maps");

function processData(input) {
  //Enter your code here
  var tempArray = input.split("\n");
  var entriesLength = tempArray.splice(0, 1); //get the number of entries out of the array
  var queries = tempArray.splice(entriesLength); //dump the queries into their own array

  for (var i = 0; i < entriesLength; i++) {
    tempArray[i] = tempArray[i].split(" "); //split the names from the phones to prepare for mapping
  }

  var phoneBookMap = new Map(tempArray); //turn the array into a map

  for (var i = 0; i < queries.length; i++) {
    if (phoneBookMap.has(queries[i])) {
      //check if the qeury (name) exists in the phone book
      console.log(queries[i] + "=" + phoneBookMap.get(queries[i]));
    } else {
      console.log("Not found");
    }
  }
}

