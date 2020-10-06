function mathOperators() {
  
  const a = 10;
  const b = 2;
  
  // standard operators + - * /
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
  
  // Raise to power of 
  const c = Math.pow(a,b);
  console.log(c);
  
  // need to use let in this next example because of reassignment by the i++ and i--
  let i = 0; 
  console.log(i);
  
  // increment by 1
  i++;
  console.log(i); 
  
  // reduce by 1
  i--;
  console.log(i);
  
}


function stringOperators() {
  
  // can use single or double quotes around strings
  // BUT MUST BE CONSISTENT WITHIN LINE
  
  const string1 = "Sarah";  // ok
  const string2 = 'Smith';  // ok
  const string3 = 'John'; // not ok
  
  // concatenate strings with the plus sign +
  const fullName = string3 + " & " + string1 + " " + string2;
  console.log(fullName);
  
  // multi-line strings with backtick marker
  const multiLineString = `This is a multi-line string
in Apps Script, which is handy for those long paragraphs.`;

  console.log(multiLineString);

}


function comparisonOperators() {
  
  const a = 10;
  const b = '10';
  
  console.log(a);
  console.log(typeof a);
  console.log(b);
  console.log(typeof b);
  
  // double ==
  console.log(a == b);
  
  // triple === now checks to see if the type is matching too
  console.log(a === b);
  
  // Not equal !=
  console.log(a != b);
  // false becuase javascript does type conversion and so values are equal
  
  // Not equal when considering value AND type !==
  console.log(a !== b);
  // true becuase the type is not equal
  
  // Greater than, less than operators
  const c = 50;
  const d = 100;
  
  console.log(c > d);
  console.log(c >= d);
  console.log(c < d);
  console.log(c <= d);
  
  
}


