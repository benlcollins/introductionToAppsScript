// for loop
function forLoop() {
  
  var fruitsArray = ['Apple','Banana','Pear','Strawberry'];
  console.log(fruitsArray);
  console.log(fruitsArray.length); // 4
  
  for (var i = 0; i < fruitsArray.length; i++) {
    
    console.log(i);
    console.log(fruitsArray[i]);
    
  }
}


// forEach loop
function forEachLoop() {
  
  let numberArray = ['one', 'two', 'three', 'four'];
  
  numberArray.forEach(function(item,i) {
    
    console.log(item);
    console.log(i);
    
  });

}


// second forEach loop example
// call a function inside loop
function forEachLoopTemp() {
  
  let celciusArray = [0,13,19,11,24,29,34,17,4];
  
  let farenheitArray = [];
  
  celciusArray.forEach(function(celciusTemp) {
    
    // call function here
    let farenheitTemp = convertCtoF(celciusTemp);
    //console.log(farenheitTemp);
    
    farenheitArray.push(farenheitTemp);
    
  });
  console.log('Celcius Array:');
  console.log(celciusArray);
  
  console.log('Farenheit Array');
  console.log(farenheitArray);
  
  
}


// function to convert celcius to farenheit
/*
function convertCtoF(t) {
  return (t * 9/5) + 32;
}
*/
// arrow version
const convertCtoF = (t) => (t * 9/5) + 32;


// forEach does not work for objects
// gives error
function forEachObjectTest() {
  
  let employee = {
    name: "Joe Bloggs",
    age: 25,
    title: "Data Analyst"
  }
  
  employee.forEach(function(item) {
    console.log(item);
  });
  
}


// instead, use a for...in loop with objects
function forInObjectLoop() {
  
  var employee = {
    name: "Joe Bloggs",
    age: 25,
    title: "Data Analyst"
  }
  
  for (var property in employee) {
    
    // log the key
    console.log(property); // e.g. name
    
    // log the corresponding value
    console.log(employee[property]); // e.g. Joe Bloggs
        
  }  
}




