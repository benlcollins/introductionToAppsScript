// Why use functions?
// you can encapsulate a chunk of code to reuse, with different arguments

// traditional function declaration syntax
function functionName(argument1, argument2, argument3) {
  
  //code to be executed when function is called (or invoked)

  // argument1, arguemnt2, argument3 are available 
  // to do stuff with inside the function

  // return clause tells function what "answer" to return
  return someAnswer;

}


// basic function
function firstFunction() {
  console.log('Hello World!');
}

// arrow function syntax
const firstFunctionArrow = () => console.log('Hello World!');

// pass parameters into functions
function addFunction(num1,num2) {
  return num1 + num2;
}

// arrow
const addFunctionArrow = (num1,num2) => num1 + num2;

// in global space
//console.log(addFunction(2,3));
//console.log(addFunctionArrow(2,3));

// call another function
function runOtherFunction() {
  const answer = addFunction(100,93);
  console.log(answer);
}

// assigning functions to variables
const multFunction =  (a,b) => a * b;

//console.log(multFunction);
//Logger.log(multFunction);
//console.log(multFunction(5,10));

// pass functions as arguments to other functions
const superFunction = (fn, a, b) => fn(a,b);

//console.log(superFunction(multFunction,2,5));

// default parameters
function defaultParamFunction(a = 100, b = 10) {
  return a / b;
}

const defaultParamFunctionArrow = (a = 100, b = 10) => a / b;

console.log(defaultParamFunctionArrow()); 


