// Objects
function objectFunction() {
  
  // create with curly brackets
  const obj = {};
  
  // objects consist of key/value pairs
  // ordering is not important
  // often have line breaks to make easier to read
  const employee = {
    name: 'Joe Bloggs',
    age: 25,
    title: 'Data Analyst'
  }
  
  console.log(employee);
  console.log(typeof employee);
  
  // accessing values inside objects
  console.log(employee.name); // dot notation
  console.log(employee['age']); // square bracket notation
  console.log(employee.title);
  console.log(employee.height); // undefined because there is no height property in object
  
  // add item to object
  employee.favoriteFood = 'Fish & Chips';
  employee['department'] = 'Marketing';

  // or update values
  employee.age = 26;
  
  console.log(employee);
  
  // delete an item from object
  delete employee.favoriteFood;
  
  console.log(employee);
  
}
