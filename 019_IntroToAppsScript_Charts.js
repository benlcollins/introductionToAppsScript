// add total for each row into our Sheet
function addRowTotals() {
  
  const ss = SpreadsheetApp.getActive();
  const sheet1 = ss.getSheetByName('Sheet1');
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


// add menu
// onOpen is a special function
// runs when your Sheet opens
function onOpen() {
  
  const ui = SpreadsheetApp.getUi();
  
  ui.createMenu('Custom Menu')
    .addItem('Add Row Totals','addRowTotals')
    .addItem('Add Grand Total','grandTotal')
    .addItem('Format Table','formatTable')
    .addItem('Add Chart','addChart')
    .addToUi();
  
}


// add grand total function
function grandTotal() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet1 = ss.getSheetByName('Sheet1');
  const lastRow = sheet1.getLastRow();
  const lastColumn = sheet1.getLastColumn();

  // add total row
  sheet1.getRange(lastRow + 1,1).setValue('TOTAL');
  sheet1.getRange(lastRow + 1, lastColumn).setFormula('=SUM(D2:D' + lastRow + ')');

}


// format the table
function formatTable() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet1 = ss.getSheetByName('Sheet1');
  const lastRow = sheet1.getLastRow();
  const lastColumn = sheet1.getLastColumn();
  const dataRange = sheet1.getDataRange();

  // orange row banding
  dataRange.applyRowBanding(SpreadsheetApp.BandingTheme.ORANGE,true,true);

  // add dollar signs to totals
  sheet1.getRange(2,lastColumn,lastRow - 1,1).setNumberFormat('$#,##0.00');

  // make the grand total row bold
  sheet1.getRange(lastRow,1,1,lastColumn).setFontWeight('bold');

}


// add a chart
function addChart() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet1 = ss.getSheetByName('Sheet1');
  const lastRow = sheet1.getLastRow();
  const lastColumn = sheet1.getLastColumn();

  // get data labels and values
  const totalChartLabels = sheet1.getRange(1,1,lastRow - 1,1);
  const totalChartValues = sheet1.getRange(1,lastColumn,lastRow - 1,1);

  // create the chart
  const totalsChart = sheet1.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(totalChartLabels)
    .addRange(totalChartValues)
    .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_COLUMNS)
    .setPosition(1,5,0,0)
    .setNumHeaders(1)
    .setOption('title','Fruit Chart')
    .build();

  // insert Chart into Sheet
  sheet1.insertChart(totalsChart);


  /*
  const dataRange = sheet1.getRange('A1:B9');
  console.log(dataRange.getValues());

  const myNewChart = sheet1.newChart();

  myNewChart.addRange(dataRange)
    .setChartType(Charts.ChartType.BAR)
    .setPosition(1,5,0,0)
    .setNumHeaders(1)
    .setOption('title','Fruit Chart');

  sheet1.insertChart(myNewChart.build());
  */

}
