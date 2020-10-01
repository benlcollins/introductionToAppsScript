/**
 * 
 * Standard function declaration
 * 
 */
function addOne(x) {
  var answer = x + 1;
  return answer;
}

function multByTwo(x) {
  return x * 2;
}

function multByX(a, X) {  
  return a * X; 
}

/**
 * Function to calculate percent change
 *
 * @param {number} oldVal Original Value
 * @param {number} newVal New Value
 * @return The percent change between new and old values.
 * @customfunction
 */
function percentChange(oldVal, newVal) {
  return (newVal - oldVal) / oldVal; 
}

/**
 * 
 * Modern arrow function declaration
 * 
 */
const addOneArrow = x => x + 1;

const multByTwoArrow = x => x * 2;

const multByXArrow = (a,X) => a * X;

/**
 * Function to calculate percent change
 *
 * @param {number} oldVal Original Value
 * @param {number} newVal New Value
 * @return The percent change between new and old values.
 * @customfunction
 */
const percentChangeArrow = (oldVal, newVal) => (newVal - oldVal) / oldVal;




