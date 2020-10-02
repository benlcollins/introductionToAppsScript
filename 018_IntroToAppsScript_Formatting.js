// get Name of spreadsheet
function getName() {
  
  const ss = SpreadsheetApp.getActive();
  const name = ss.getName();
  
  console.log(name);
  
}


// get data out of spreadsheet
function getData1() {
  
  // The const declaration creates a read-only reference to a value. 
  // It does not mean the value it holds is immutable
  // just that the variable identifier cannot be reassigned.
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getActiveSheet();
  const data = sheet.getDataRange();
  const values = data.getValues();
  
  console.log(values);
  
  /** 
  
  [
  [Fruit, Cost, Quantity], 
  [Apple, 0.86, 4.0], 
  [Banana, 0.82, 2.0], 
  [Pear, 0.52, 7.0], 
  [Watermelon, 1.74, 2.0], 
  [Kiwi, 0.99, 3.0], 
  [Strawberry, 0.4, 25.0]
  ]
  
  */
  
}


// get data out more directly
function getData2() {
  
  const sheet = SpreadsheetApp.getActiveSheet();
  console.log(sheet.getDataRange().getValues());
  
}


// get sheet by name
function getData3() {
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const mySheet1 = ss.getSheetByName("Sheet1");
  
  console.log(mySheet1.getDataRange().getValues());
  
}


// get active data
function getData4() {
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet1 = ss.getSheetByName("Sheet1");
  
  const activeRange = sheet1.getActiveRange().getValues();
  
  console.log(activeRange);
  
  // [[Fruit, Cost], [Apple, 0.86]]
  
}



// get A1 data
function getData5() {
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet1 = ss.getSheetByName("Sheet1");

  const data = sheet1.getRange("A1:C4").getValues();
  
  console.log(data);
  
  //[[Fruit, Cost, Quantity], [Apple, 0.86, 4.0], [Banana, 0.82, 2.0], [Pear, 0.52, 7.0]]
  
}


// get range of data by coordinates
function getData6() {
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet1 = ss.getSheetByName("Sheet1");
  
  const data = sheet1.getRange(1,1,4,1).getValues();
  
  console.log(data); // [[Fruit], [Apple], [Banana], [Pear]]
  
  const data2 = sheet1.getRange(3,1,4,3).getValues();
  
  console.log(data2); //[[Banana, 0.82, 2.0], [Pear, 0.52, 7.0], [Watermelon, 1.74, 2.0], [Kiwi, 0.99, 3.0]]

}





/************************************************************************************************************/


// calculate total for each row
function calculateRowTotal() {
  
  const ss = SpreadsheetApp.getActive();
  const sheet1 = ss.getSheetByName("Sheet1");
  
  const data = sheet1.getRange(2,1,6,3).getValues();
  
  //console.log(data);
  
  data.forEach(function(row) {
    
    //console.log(row); // [Apple, 0.86, 4.0]
    
    //console.log(row[0]);
    //console.log(row[1]);
    //console.log(row[2]);
    
    const name = row[0];
    const cost = row[1];
    const quantity = row[2];
    
    const total = cost * quantity;
    
    //console.log(total);
    console.log(name + ": $" + total);
    
  });
  
}


/************************************************************************************************************/

// add total for each row into our Sheet
function addRowTotals() {
  
  const ss = SpreadsheetApp.getActive();
  const sheet1 = ss.getSheetByName("Sheet1");
  const lastRow = sheet1.getLastRow();
  
  const data = sheet1.getRange(2,1,lastRow - 1,3).getValues();

  console.log(data); 
  
  const totalsArray = [];
  
  data.forEach(function(row) {
    
    const name = row[0];
    const cost = row[1];
    const quantity = row[2];
    
    const total = cost * quantity;
    
    row.push(total);
    
    totalsArray.push([total]);
    
    console.log(row);
    
  });
  
  console.log(totalsArray);
  
  // paste data back into Sheet
  sheet1.getRange(2,4,lastRow - 1,1).setValues(totalsArray);

}


/************************************************************************************************************/


// add menu
function onOpen() {
  
  const ui = SpreadsheetApp.getUi();
  
  ui.createMenu("Custom Menu")
      .addItem("Add Row Totals","addRowTotals")
      .addItem("Add Grand Total","grandTotal")
      .addItem("Format Table","formatTable")
      .addToUi();
  
}


/************************************************************************************************************/


// add grand total row
function grandTotal() {
  
  const ss = SpreadsheetApp.getActive();
  const sheet1 = ss.getSheetByName("Sheet1");
  const lastRow = sheet1.getLastRow();
  const lastColumn = sheet1.getLastColumn();
  
  sheet1.getRange(lastRow + 1,1).setValue("Total");

  sheet1.getRange(lastRow + 1, lastColumn).setFormula("=sum(D2:D" + lastRow + ")");
}


/************************************************************************************************************/


// format table
function formatTable() {
  
  const ss = SpreadsheetApp.getActive();
  const sheet1 = ss.getSheetByName("Sheet1");
  const lastRow = sheet1.getLastRow();
  const lastColumn = sheet1.getLastColumn();
  const dataRange = sheet1.getDataRange();
  
  // apply orange banding, add header and footer
  dataRange.applyRowBanding(SpreadsheetApp.BandingTheme.ORANGE, true, true);
  
  // format the last column as $
  sheet1.getRange(2,lastColumn,lastRow - 1,1).setNumberFormat("$0.00");
  
  // make the row total bold
  sheet1.getRange(lastRow,1,1,lastColumn).setFontWeight("bold");
}



