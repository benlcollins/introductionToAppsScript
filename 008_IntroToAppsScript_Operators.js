function mathOperators() {
  
  let a = 10;
  let b = 2;
  
  // standard operators + - * /
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
  
  // Raise to power of 
  let c = Math.pow(a,b);
  console.log(c);
  
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
  
  let string1 = "Sarah";  // ok
  let string2 = 'Smith';  // ok
  let string3 = 'John'; // not ok
  
  // concatenate strings with the plus sign +
  let fullName = string3 + " & " + string1 + " " + string2;
  console.log(fullName);
  
  // multi-line strings with backtick marker
  let multiLineString = `This is a multi-line string
in Apps Script, which is handy for those long paragraphs.`;

  console.log(multiLineString);
  
}


function comparisonOperators() {
  
  let a = 10;
  let b = '10';
  
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
  let c = 50;
  let d = 100;
  
  console.log(c > d);
  console.log(c >= d);
  console.log(c < d);
  console.log(c <= d);
  
  
}


