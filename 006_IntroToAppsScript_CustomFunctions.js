function addOne(x) {
  const answer = x + 1;
  return answer;
}

const addOneArrow = x => x + 1;

function double(x) {
  return x * 2;
}

function multByX(x,c) {
  return x * c;
}



/**
 * Function to calculate percentage change
 * 
 * @param {number} oldVal Original value
 * @param {number} newVal New value
 * @return The percent change from old value to the new value
 * @customfunction
 */
function percentChange(oldVal,newVal) {

  return (newVal - oldVal) / oldVal;

}