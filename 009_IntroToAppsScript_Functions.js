// Why use functions?
// you can encapsulate a chunk of code to reuse, with different arguments

// traditional function declaration syntax
function functionName(argument1, argument2, argument3) {
  
  //code to be executed when function is called (or invoked)
  // argument1, arguemnt2, argument3 are available to do stuff with inside the function
  // return clause tells function what "answer" to return
  return argument1 + argument2 + argument3;

}

// arrow function declaration syntax
const functionNameArrow = (argument1, argument2, argument3) => (argument1 + argument2 + argument3);


// basic function
function firstFunction() {
  console.log('Hello world!');
}
// arrow version
const firstFunctionArrow = () => console.log('Hello world!');



// can pass multiple variables into function
// this function adds together two numbers
function addFunction(firstNum, secondNum) {
  
  // Functions often compute a return value. 
  // The return value is "returned" back to the "caller"
  // When JavaScript reaches a return statement, the function will stop executing
  return firstNum + secondNum; 
  
}

// arrow version
const addFunctionArrow = (firstNum,secondNum) => firstNum + secondNum;


// this is globally declared so runs whenever we run any function from our menu
// console.log(addFunction(3,4));


// call a function from within another function
function runOtherFunction() {
  
  // If the function was invoked from a statement, 
  // JavaScript will "return" to execute the code after the invoking statement
  let answer = addFunction(100,93);
  
  console.log(answer);
  
}


// can assign a function to a variable
var mult = function(a,b) {
  return a * b;
}

// arrow version
const multArrow = (a,b) => a * b;


// log the variable with the function in
// console.log(mult);
// console.log(mult(5,10));


// another example - power function
var power = function(a,b) {
  return Math.pow(a,b);
}

// arrow version
const powerArrow = (a,b) => Math.pow(a,b);


// free to pass functions as arguments to other functions!
function superFunc(functionArgument, a, b) {
  return functionArgument(a,b); 
}

// arrow version
const superFuncArrow = (func,a,b) => func(a,b);

// console.log(superFunc(power,2,3)); // 8.0
// console.log(superFunc(mult,2,3)); // 6.0
// console.log(superFunc(addFunction,2,3));  // 5.0


// Local variables

// code here can NOT use price
// console.log(price);

function myPrice() {
  
  // code here CAN use price
  let price = 9.99;
  console.log(price);
  
  // Local variables are created when a function starts
  // Local variables are deleted when the function is completed
  
  
}

// code here can NOT use price
// console.log(price);



