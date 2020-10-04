// const example
// declared locally inside a block
// const has block scope
// available througout the block
// const cannot be reassigned, but the value can change
function variablesExample1() {
  
  // const
  // read-only named constant
  // block-scoped
  const z = 30;
  // gives error if you try to do this statement
  // TypeError: Assignment to constant variable.
  // z = 50; 
  console.log(z);

  // string (text values)
  const myName = 'Ben Collins';
  console.log(myName);
  console.log(typeof myName);

}

// let example
// declared locally inside a block
// let has block scope
// available througout the block
// let can be reassigned (but not redeclared)
function variablesExample2() {
  // let
  // { } block scoped
  let y = 10;
  console.log(y); // 10
  
  y = 5;
  {
    let y = 20;
    console.log(y); // 20
  } 
  console.log(y); // 5

  // number
  let myAge = 25;
  console.log(myAge);
  console.log(typeof myAge);
  
  // boolean - true or false
  let result = true;
  console.log(result);
  console.log(typeof result);

}

// var example
// declared locally inside a function
// var has function scope
// available througout the function
// var can be reassigned
function variablesExample3() {
  // var
  // function-scoped
  var x = 1;
  console.log(x); // 1

  {
    var x = 2;
    console.log(x) // 2
  }
  console.log(x); // 2

}

// other variable notes
function variablesExample4() {
  
  // bad practice to not declare variables
  // bad practice to declare variables after you go use them
  alpha = 10;
  console.log(alpha);
  console.log(typeof alpha);
  // alpha = 10; // gives a reference error if declared here instead of before we do something with it
  
  // functions (arrow function declaration)
  const newFunction = (a,b) => a + b;
  console.log(newFunction);
  Logger.log(newFunction);
  console.log(typeof newFunction);
  console.log(newFunction(5,10)); // call the function

  // object
  let myDetails = {
    name: 'Ben Collins',
    age: 25
  };
  console.log(myDetails);
  console.log(typeof myDetails);
  
  // array
  let myArray = [1,2,3,4,5];
  console.log(myArray);
  console.log(typeof myArray);
  
}

// Variables declared globally (i.e. outside any function) have global scope
// Can be accessed from anywhere inside the script
const SHEET_NAME = 'dataset_2020';


function variablesExample5() {

  // access global variable from inside this function
  console.log(SHEET_NAME);

}

