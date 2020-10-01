function firstmacro() {

  var spreadsheet = SpreadsheetApp.getActive();
  
  spreadsheet.getActiveRangeList().setFontWeight('bold')
  .setFontStyle('italic')
  .setFontColor('#ff0000');

};

function secondmacro() {

  var spreadsheet = SpreadsheetApp.getActive();

  spreadsheet.getRange('D1').activate();

  spreadsheet.getActiveRangeList().setFontWeight('bold')
  .setFontStyle('italic')
  .setFontColor('#0000ff');
};

function greencolors() {
  var spreadsheet = SpreadsheetApp.getActive();

  spreadsheet.getCurrentCell().offset(0, 0, 11, 5).activate();

  spreadsheet.getActiveRange().applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY);
  var banding = spreadsheet.getActiveRange().getBandings()[0];
  banding.setHeaderRowColor('#63d297')
  .setFirstRowColor('#ffffff')
  .setSecondRowColor('#e7f9ef')
  .setFooterRowColor(null);
};

function orangecolors() {
  var spreadsheet = SpreadsheetApp.getActive();

  spreadsheet.getDataRange().applyRowBanding(SpreadsheetApp.BandingTheme.ORANGE);
  
};


function chart() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('D1:E11').activate();
  var sheet = spreadsheet.getActiveSheet();
  var chart = sheet.newChart()
  .asColumnChart()
  .addRange(spreadsheet.getRange('D1:E11'))
  .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_COLUMNS)
  .setTransposeRowsAndColumns(false)
  .setNumHeaders(-1)
  .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_BOTH)
  .setPosition(1, 2, 26, 13)
  .build();
  sheet.insertChart(chart);
  var charts = sheet.getCharts();
  chart = charts[charts.length - 1];
  sheet.removeChart(chart);
  chart = sheet.newChart()
  .asPieChart()
  .addRange(spreadsheet.getRange('D1:E11'))
  .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_COLUMNS)
  .setTransposeRowsAndColumns(false)
  .setNumHeaders(-1)
  .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_BOTH)
  .setPosition(1, 2, 26, 13)
  .build();
  sheet.insertChart(chart);
  charts = sheet.getCharts();
  chart = charts[charts.length - 1];
  sheet.removeChart(chart);
  chart = sheet.newChart()
  .asPieChart()
  .addRange(spreadsheet.getRange('D1:E11'))
  .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_COLUMNS)
  .setTransposeRowsAndColumns(false)
  .setNumHeaders(1)
  .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_BOTH)
  .setPosition(1, 2, 26, 13)
  .build();
  sheet.insertChart(chart);
  charts = sheet.getCharts();
  chart = charts[charts.length - 1];
  sheet.removeChart(chart);
  chart = sheet.newChart()
  .asPieChart()
  .addRange(spreadsheet.getRange('D1:E11'))
  .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_COLUMNS)
  .setTransposeRowsAndColumns(false)
  .setNumHeaders(1)
  .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_BOTH)
  .setOption('applyAggregateData', 0)
  .setPosition(1, 2, 26, 13)
  .build();
  sheet.insertChart(chart);
  charts = sheet.getCharts();
  chart = charts[charts.length - 1];
  sheet.removeChart(chart);
  chart = sheet.newChart()
  .asPieChart()
  .addRange(spreadsheet.getRange('D1:E11'))
  .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_COLUMNS)
  .setTransposeRowsAndColumns(false)
  .setNumHeaders(1)
  .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_BOTH)
  .setOption('applyAggregateData', 0)
  .setPosition(1, 6, 13, 9)
  .build();
  sheet.insertChart(chart);
};



