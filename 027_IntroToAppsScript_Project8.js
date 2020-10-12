su/**
 * 
 * Introduction To Apps Script
 * Project: Coding Questionnaire
 * 
 */ 

// Project Lesson 1: Intro
// There is no code for this lesson

// Project Lesson 2: Setup Google Form & global variables
// switch for your own Google Form ID
// get from URL (X's in following example)
// https://docs.google.com/forms/d/XXXXXXXXXXXXXXXXXXXXXXXXX/edit
const FORM_ID = '10tXs2rEodzEDWiaVIGJwHWFqECSriL-7WdxVBTwBlN8';

// Project Lesson 3
// function to find the Form IDs
function findFormIDs() {

  const form = FormApp.openById(FORM_ID);
  const formItems = form.getItems();

  formItems.forEach(item => console.log(item.getTitle() + ' ' + item.getId()));

}

/*
1:32:41 PM  Notice  Execution started
1:32:42 PM  Info  Name: 2120132702
1:32:42 PM  Info  Do you have prior coding experience? 267233812
1:32:42 PM  Info  What programming languages do you use? 1860180947
1:32:42 PM  Notice  Execution completed
*/

// Project Lesson 4: update the Google Form
function updateForm_v1() {

  // get the language data from the Sheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const setupSheet = ss.getSheetByName('setup');
  const langVals = setupSheet.getRange(2,1,setupSheet.getLastRow()-1,1).getValues();
  console.log(langVals); // [ [ 'None' ], [ 'Apps Script' ], [ 'Python' ] ]

  // add these languages to the form now
  // get the form
  const form = FormApp.openById(FORM_ID);
  
  // get the checkbox question
  const langsCheckboxQuestion = form.getItemById('1860180947').asCheckboxItem();

  // populate the Form checkbox question with new language data
  langsCheckboxQuestion.setChoiceValues(langVals);

}

// Project Lesson 5: Sending emails automatically with Apps Script
function sendEmail_v1() {

  // get spreadsheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const responsesSheet = ss.getSheetByName('Form Responses 1');

  // get data
  const data = responsesSheet.getRange(2,1,responsesSheet.getLastRow()-1,6).getValues();
  console.log(data);


  // loop over data
  data.forEach(function(row,i) {
    
    // get email address
    const email = row[2];
    console.log(email);

    // check the replied column is blank
    if (row[5] === '') {
      
      // logic for people who reply Yes they do have coding experience
      if(row[3] === 'Yes') {
        var body = 'TBC - Yes'; // need to use VAR here because this variable body will be used outside the block scope If {}
      }
      // logic for people who replied No to prior experience
      else {
        var body = 'TBC - No'; // need to use VAR here because this variable body will be used outside the block scope If {}
      }

      // declare email subject line
      const subject = 'Thank you for responding to the Apps Script questionnaire!';

      // send email
      GmailApp.sendEmail(email,subject,body);

    }
  });
}


// Project Lesson 6: Sending richer emails automatically with Apps Script
function sendEmail_v2() {

  // get spreadsheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const responsesSheet = ss.getSheetByName('Form Responses 1');

  // get data
  const data = responsesSheet.getRange(2,1,responsesSheet.getLastRow()-1,6).getValues();
  console.log(data);


  // loop over data
  data.forEach(function(row,i) {
    
    // get variables
    const name = row[1];
    const email = row[2];
    const answer = row[3];
    const langs = row[4];
    const replied = row[5];
    console.log(email);

    // check the replied column is blank
    if (replied === '') {
      
      // logic for people who reply Yes they do have coding experience
      if(answer === 'Yes') {
        // need to use VAR here because this variable body will be used outside the block scope If {}
        var body = 'Hi ' + name + `,<br><br>
          Thank you for responding to our 2019 Developer Survey!<br><br>
          Your feedback is greatly appreciated.<br><br>
          You reported experience with the following coding languages:<br><br>
          <em>` + langs + `</em><br><br>
          Thanks,<br>
          Ben`;
      }
      // logic for people who replied No to prior experience
      else {
        // need to use VAR here because this variable body will be used outside the block scope If {}
        var body = 'Hi ' + name + `,<br><br>
          Thank you for responding to our 2019 Developer Survey!<br><br>
          Your feedback is greatly appreciated.<br><br>
          You reported not having any experience with coding, so here's a resource to get you started:<br><br> 
          <a href="https://www.benlcollins.com/spreadsheets/starting-gas/">Getting started with Apps Script</a><br><br>
          Thanks,<br>
          Ben`;
      }

      // declare email subject line
      const subject = 'Thank you for responding to the Apps Script questionnaire!';

      // send email
      GmailApp.sendEmail(email,subject,'',{htmlBody: body});

      // add date to the replied column
      const d = new Date();
      responsesSheet.getRange(i+2,6).setValue(d);

    }
  });
}

// add menu to update form and send emails
function onOpen() {
  
  const ui = SpreadsheetApp.getUi();
  
  ui.createMenu("Form Reply Tool")
    .addItem("Send emails...","sendEmail_v2")
    .addItem("Update form...","updateForm_v2")
    .addToUi();
  
}


// Project Lesson 7: Add trigger to run updateForm() whenever spreadsheet is edited


// Project Lesson 8: automatically update the form
function updateForm_v2() {

  // get list of langs in form question
  const form = FormApp.openById(FORM_ID);
  const formCheckboxChoices = form.getItemById('1860180947').asCheckboxItem().getChoices();
  const formCheckboxValues = formCheckboxChoices.map(x => x.getValue());
  //console.log(formCheckboxValues); // [ 'None', 'Apps Script', 'Python', 'VBA', 'R' ]
  //console.log(formCheckboxValues[1]);
  //console.log(formCheckboxValues[1].length);
  
  // get list of langs in setup sheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const setupSheet = ss.getSheetByName('setup');
  const setupSheetValues = setupSheet.getRange(2,1,setupSheet.getLastRow()-1,1).getValues().flat();
  //console.log(setupSheetValues); // [ 'None', 'Apps Script', 'Python', 'VBA' ]
  //console.log(setupSheetValues[1]);
  //console.log(setupSheetValues[1].length);

  // get list of langs submitted via the form
  const responsesSheet = ss.getSheetByName('Form Responses 1');
  const data = responsesSheet.getRange(2,1,responsesSheet.getLastRow()-1,6).getValues();
  const submittedFormValues = data.map(row => row[4]).join().split(',');
  //console.log(submittedFormValues); // [ 'None', 'Apps Script, Python, VBA, R', 'Java' ]
  //console.log(submittedFormValues[1]);
  //console.log(submittedFormValues[1].length);

  // consolidate list of langs
  const allLangs = [...formCheckboxValues,...setupSheetValues,...submittedFormValues]; // spread operator syntax
  // const allLangs = (formCheckboxValues.concat(setupSheetValues)).concat(submittedFormValues); 
  // console.log(allLangs);
  // [None, Apps Script, Python, VBA, R, None, Apps Script, Python, VBA, None, Apps Script, Python, VBA, R, Java]

  // remove leading and trailing spaces from langs
  const trimAllLangs = allLangs.map(item => item.trim());
  //console.log(trimAllLangs);

  // sort list of langs
  trimAllLangs.sort();
  console.log(trimAllLangs);

  // dedup list of langs
  // use let because I'm going to reassign it
  let finalLangList = trimAllLangs.filter((lang,i) => trimAllLangs.indexOf(lang) === i);
  //console.log(finalLangList);
  //console.log(finalLangList[0]);
  //console.log(finalLangList[0].length);
  //console.log(finalLangList.length);
  //console.log(finalLangList[1].length);

  // remove any blanks
  finalLangList = finalLangList.filter(item => item.length !== 0);
  //console.log(finalLangList);
  //console.log(finalLangList.length);
  
  // move 'None' to front of array
  finalLangList = finalLangList.filter(item => item !== 'None');
  finalLangList.unshift('None');
  //console.log(finalLangList);
  //console.log(finalLangList.length);

  // turn into double array notation for Sheets
  const finalDoubleArray = finalLangList.map(lang => [lang]);
  //console.log(finalDoubleArray);
  //console.log(finalDoubleArray.length);
  
  // paste into sheet in setup tab
  setupSheet.getRange("A2:A").clear();
  setupSheet.getRange(2,1,finalLangList.length,1).setValues(finalDoubleArray);

  // copy into the Form
  form.getItemById('1860180947').asCheckboxItem().setChoiceValues(finalLangList); // use the array of strings for the Form, NOT the double array like Sheets

}