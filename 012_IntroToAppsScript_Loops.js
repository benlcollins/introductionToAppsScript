// for loop
function forLoop() {
  
  const fruitsArray = ['Apple','Banana','Pear','Strawberry'];
  console.log(fruitsArray);
  console.log(fruitsArray.length); // 4
  
  for (let i = 0; i < fruitsArray.length; i++) {
    
    console.log(i);
    console.log(fruitsArray[i]);
    
  }
}


// forEach loop
function forEachLoopExample1() {
  
  const numberArray = ['one', 'two', 'three', 'four'];
  
  numberArray.forEach(function(item,i) {
    
    console.log(item);
    console.log(i);
    
  });

}


// second forEach loop example
// call a function inside loop
function forEachLoopExample2() {
  
  const celciusArray = [0,13,19,11,24,29,34,17,4];
  
  const farenheitArray = [];
  
  celciusArray.forEach(function(celciusTemp) {
    
    // call function here
    const farenheitTemp = convertCtoF(celciusTemp);
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
function forEachLoopExample3() {
  
  const employee = {
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
  
  const employee = {
    name: "Joe Bloggs",
    age: 25,
    title: "Data Analyst"
  }
  
  for (const property in employee) {
    
    // log the key
    console.log(property); // e.g. name
    
    // log the corresponding value
    console.log(employee[property]); // e.g. Joe Bloggs
        
  }  
}


