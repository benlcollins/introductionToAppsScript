// add total for each row into our Sheet
function addRowTotals() {
  
  const ss = SpreadsheetApp.getActive();
  const sheet1 = ss.getSheetByName("Sheet1");
  const lastRow = sheet1.getLastRow();
  
  const data = sheet1.getRange(1,1,lastRow,3).getValues();
  console.log(data); 

  // remove header row
  data.shift();
  console.log(data);
  
  const totalsArray = [];
  
  data.forEach(row => {
    
    const cost = row[1];
    const quantity = row[2];
    const total = cost * quantity;
    
    //row.push(total);
    //console.log(row);
    
    totalsArray.push([total]);
    
  });
  
  console.log(totalsArray);
  
  // paste data back into Sheet
  sheet1.getRange(2,4,lastRow - 1,1).setValues(totalsArray);

}


// add menu
// onOpen is a special function
// runs when your Sheet opens
function onOpen() {
  
  const ui = SpreadsheetApp.getUi();
  
  ui.createMenu("Custom Menu")
      .addItem("Add Row Totals","addRowTotals")
      .addToUi();
  
}