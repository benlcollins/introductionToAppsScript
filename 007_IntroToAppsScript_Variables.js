// Global Variables
const SHEET_NAME = 'dataset_2020';

// const
function constExample() {

  // const
  const x = 30;
  //console.log(x);
  //Logger.log(x);

  // const cannot be reassigned, but the value can change
  // TypeError: Assignment to constant variable.
  // cannot do this:
  // x = 50;
  // console.log(x);

  // const has block scope
  {
    console.log(x);
    const y = 1;
    console.log(y);
  }

  // ReferenceError: y is not defined
  // defined in a child block one level up, not available here
  console.log(y);

}

// let example
function letExample() {

  let y = 100;
  console.log(y);

  // can be reassigned
  y = 200;
  console.log(y);

  // cannot redeclare it though
  // let y = 300;
  // console.log(y);

  // block scoped
  {
    let w = 99;
    console.log(w);
  }

  // variable w not available outside block
  //console.log(w);
}

// var example
function varExample() {

  var x = 1;
  console.log(x);

  // can be reassigned
  x = 2;
  console.log(x);

  // var has function scope 
  {
    var newVariable = 1000;
  }

  console.log(newVariable);

}

// other things to note about variables
function otherNotes() {

  // Cannot access 'alpha' before initialization
  //console.log(alpha);
  //const alpha = 10;

  // bad practice to not declare
  //alpha = 10;
  //alpha = 20;
  //console.log(alpha);

  // access global variables
  console.log(SHEET_NAME);
}
