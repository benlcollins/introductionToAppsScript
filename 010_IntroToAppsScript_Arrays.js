function arrayFunction() {
  
  // create new array like this
  var newArray = [];
  
  // ordering of items is important
  var fruitsArray = ['Apple','Banana','Pear','Strawberry'];
  
  //Logger.log(fruitsArray); // [Apple, Banana, Pear, Strawberry]
  
  // array index starts at 0
  // access items in array with this notation:
  //Logger.log(fruitsArray[0]); // Apple 
  //Logger.log(fruitsArray[1]); // Banana
  //Logger.log(fruitsArray[2]); // Pear
  //Logger.log(fruitsArray[3]); // Strawberry
  //Logger.log(fruitsArray[4]); // undefined, nothing at position 4
  
  // can also write arrays like this:
  var anotherArray = ["first",
                      "second",
                      "third",
                      "fourth"];
  
  //Logger.log(anotherArray);
  
  /*
  Array Methods
  */
  
  var newArray = ['two','three','four'];
  Logger.log("Starting array:");
  Logger.log(newArray);
  
  // add item to array
  
  // add to end
  newArray.push('a hundred');
  Logger.log(newArray);
  
  // add to start
  newArray.unshift('one');
  Logger.log(newArray);
  
  // add to middle
  newArray.splice(2,0,'miss a few');
  Logger.log(newArray);
  
  newArray.splice(3,0,'ninety nine');
  Logger.log(newArray);
  
  // removing items from array
  
  // remove from end
  //newArray.pop();
  //Logger.log(newArray);
  
  // remove from beginning
  //newArray.shift();
  //Logger.log(newArray);
  
  // remove from middle
  newArray.splice(4,2);
  Logger.log(newArray);
 
}







