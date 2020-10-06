// Objects
function objectFunction() {
  
  // create with curly brackets
  const newObj = {};
  
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
  
  console.log(employee.name);
  console.log(employee['name']);
  console.log(employee.title);
  
  // add item to object
  employee['department'] = 'Web Analytics';
  
  console.log(employee);
  
  // delete an item from object
  delete employee.age;
  
  console.log(employee);
  
  
}
