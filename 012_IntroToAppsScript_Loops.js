// for loop example
function forLoopExample() {

  const fruitsArray = ['Apple','Banana','Pear','Strawberry'];
  console.log(fruitsArray);
  console.log(fruitsArray.length); // 4

  console.log(fruitsArray[0]);

  // loop 0, 1, 2, 3 then stop
  // keep looping whilst less than 4
  for (let i = 0; i < fruitsArray.length; i++) {
    console.log(i);
    console.log(fruitsArray[i]);
  }
}

// forEach loop example
function forEachLoopExample() {

  const numberArray = ['one', 'two', 'three', 'four'];

  numberArray.forEach(function(item,i) {
    console.log(i);
    console.log(numberArray[i]);
  });

  numberArray.forEach((item,i) => { 
    console.log(i);
    console.log(numberArray[i]);
  })
}

// function to convert celcius to farenheit
const convertCtoF = (t) => (t * 9/5) + 32;

// forEach loop example 2
function forEachLoopExample2() {

  const celciusArray = [0,13,19,11,24,29,34,17,4];
  const farenheitArray = [];

  celciusArray.forEach( (t) => {
    const f = convertCtoF(t);
    farenheitArray.push(f);
  });

  console.log(farenheitArray);
}

// map loop example
// map array method
// creates a new array from existing applying a function
function mapLoopExample() {

  const celciusArray = [0,13,19,11,24,29,34,17,4];

  const farenheitArray = celciusArray.map(t => convertCtoF(t));

  console.log(farenheitArray);
}

// looping over objects
function objectLoop() {

  const employee = {
    name: "Joe Bloggs",
    age: 25,
    title: "Data Analyst"
  }
  
  // loop over objects with for in loop
  for (const property in employee) {
    console.log(property);
    console.log(employee[property]); // need to use square bracket notation
  }

  // cannot do forEach method on objects
  /*
  employee.forEach(function(item){
    console.log(item);
  });
  */

}