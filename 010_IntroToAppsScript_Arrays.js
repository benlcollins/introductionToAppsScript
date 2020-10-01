function arrayFunction() {
  
  // create new array like this
  let newArray = [];
  
  // ordering of items is important
  let fruitsArray = ['Apple','Banana','Pear','Strawberry'];
  
  //console.log(fruitsArray); // [Apple, Banana, Pear, Strawberry]
  
  // array index starts at 0
  // access items in array with this notation:
  //console.log(fruitsArray[0]); // Apple 
  //console.log(fruitsArray[1]); // Banana
  //console.log(fruitsArray[2]); // Pear
  //console.log(fruitsArray[3]); // Strawberry
  //console.log(fruitsArray[4]); // undefined, nothing at position 4
  
  // can also write arrays like this:
  let anotherArray = ["first",
                      "second",
                      "third",
                      "fourth"];
  
  //console.log(anotherArray);
  
  /*
  Array Methods
  */
  
  let countingArray = ['two','three','four'];
  console.log("Starting array:");
  console.log(countingArray);
  
  // add item to array
  
  // add to end
  countingArray.push('a hundred');
  console.log(countingArray);
  
  // add to start
  countingArray.unshift('one');
  console.log(countingArray);
  
  // add to middle
  countingArray.splice(2,0,'miss a few');
  console.log(countingArray);
  
  countingArray.splice(3,0,'ninety nine');
  console.log(countingArray);
  
  // removing items from array
  
  // remove from end
  //countingArray.pop();
  //console.log(countingArray);
  
  // remove from beginning
  //countingArray.shift();
  //console.log(countingArray);
  
  // remove from middle
  countingArray.splice(4,2);
  console.log(countingArray);
 
}







