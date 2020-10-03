/**
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
1:32:41 PM	Notice	Execution started
1:32:42 PM	Info	Name: 2120132702
1:32:42 PM	Info	Do you have prior coding experience? 267233812
1:32:42 PM	Info	What programming languages do you use? 1860180947
1:32:42 PM	Notice	Execution completed
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
    .addItem("Update form...","updateForm_v1")
    .addToUi();
  
}