// calculate the row totals
function calculateRowTotals() {

  // get the spreadsheet object and the sheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet1 = ss.getSheetByName('Sheet1');

  // get the data
  const data = sheet1.getRange(2,1,6,3).getValues();
  //console.log(data);

  /*
  [ 
    [ 'Apple', 0.86, 4 ],
    [ 'Banana', 0.82, 2 ],
    [ 'Pear', 0.52, 7 ],
    [ 'Watermelon', 1.74, 2 ],
    [ 'Kiwi', 0.99, 3 ],
    [ 'Strawberry', 0.4, 25 ] 
  ]
  */

  // loop over the data and do the calculation
  // log it
  data.forEach(row => {
    console.log(row); // [ 'Strawberry', 0.4, 25 ]
    //console.log(row[0]);
    //console.log(row[1]);
    //console.log(row[2]);
    const name = row[0];
    const cost = row[1];
    const quantity = row[2];

    const total = cost * quantity;

    console.log(name + ': $' + total);

  })
}