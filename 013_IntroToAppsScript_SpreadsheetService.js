// get name of our sheet
function getName() {
  const ss = SpreadsheetApp.getActive();
  const name = ss.getName();
  console.log(name);
}

// get data out of Sheet
function getData1() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getActiveSheet();
  const data = sheet.getDataRange();
  const values = data.getValues();
  console.log(values);
}

/*

  [ 
    [ 'Fruit', 'Cost', 'Quantity' ],
    [ 'Apple', 0.86, 4 ],
    [ 'Banana', 0.82, 2 ],
    [ 'Pear', 0.52, 7 ],
    [ 'Watermelon', 1.74, 2 ],
    [ 'Kiwi', 0.99, 3 ],
    [ 'Strawberry', 0.4, 25 ] 
  ]

*/

// more direct method
function getData2() {
  const sheet = SpreadsheetApp.getActiveSheet();
  console.log(sheet.getDataRange().getValues());
}

// get Sheet by name
function getData3() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet1 = ss.getSheetByName('Sheet1');
  console.log(sheet1.getDataRange().getValues());
}

// active range
function getData4() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet1 = ss.getSheetByName('Sheet1');
  console.log(sheet1.getActiveRange().getValues());
}

// get data by A1 notation
function getData5() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet1 = ss.getSheetByName('Sheet1');

  let data = sheet1.getRange('A1:C4').getValues();
  console.log(data);
  
}

// get data by range coordinates
function getData6() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet1 = ss.getSheetByName('Sheet1');

  let data1 = sheet1.getRange(1,1).getValue();
  console.log(data1);

  let data2 = sheet1.getRange(1,1,4,3).getValues();
  console.log(data2);

  let data3 = sheet1.getRange(1,1,7,2).getValues();
  console.log(data3);

}