function myVariables() {
  
  // var
  // function-scoped
  var x = 1;
  console.log(x); // 1

  {
    var x = 2;
    console.log(x) // 2
  }
  console.log(x); // 2

  // let
  // { } block scoped
  let y = 10;
  console.log(y); // 10
  
  {
    let y = 20;
    console.log(y); // 20
  } 
  console.log(y); // 10
  
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

  // number
  let myAge = 25;
  console.log(myAge);
  console.log(typeof myAge);
  
  // boolean - true or false
  let result = true;
  console.log(result);
  console.log(typeof result);
  
  // bad practice to not declare variables
  alpha = 10;
  console.log(alpha);
  console.log(typeof alpha);

  // functions (traditional function declaration)
  const newFunc = function(a,b) {
    return a + b;
  };
  console.log(newFunc);
  console.log(typeof newFunc);
  console.log(newFunc(5,10)); // call the function
  
  // functions (traditional function declaration)
  const newFuncArrow = (a,b) => a + b;
  console.log(newFuncArrow);
  console.log(typeof newFuncArrow);
  console.log(newFuncArrow(5,10)); // call the function

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
