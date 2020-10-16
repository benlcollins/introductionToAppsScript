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
const FORM_ID = 'XXXXXXXXXXXXXXXXXXXXXXXXX'; // <-- put your Form ID in here 

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
  console.log(langVals); 
  // [ [ 'None' ], [ 'Apps Script' ] ]

  const langValsFlat = langVals.map(item => item[0]); // ['None'] => 'None'
  console.log(langValsFlat);
  // [ 'None', 'Apps Script' ] // flattened array

  // add these languages to the form now
  // get the form
  const form = FormApp.openById(FORM_ID);
  const langsCheckboxQuestion = form.getItemById('1860180947').asCheckboxItem();

  // populate the Form checkbox question with new language data
  langsCheckboxQuestion.setChoiceValues(langValsFlat);

}

// Project Lesson 5: Sending emails automatically with Apps Script
function sendEmail_v1() {

  // get spreadsheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const responseSheet = ss.getSheetByName('Form Responses 1');
  const data = responseSheet.getDataRange().getValues();
  console.log(data);

  // remove the header row
  data.shift();
  console.log(data);

  // loop over data
  data.forEach((row,i) => {

    // identify rows I haven't replied to yet
    if (row[5] === '') {
      
      // get email address
      const email = row[2];

      // write the email
      const subject = 'Thank you for responding to the Apps Script questionnaire!';
      let body = '';

      // change the body for yes and no
      // yes answer
      if(row[3] === 'Yes') {
        body = 'TBC - Yes answer'; 
      }
      // no answer
      else {
        body = 'TBC - No answer';
      } 

      // send email
      GmailApp.sendEmail(email,subject,body);

      // mark as sent
      const d = new Date();
      responseSheet.getRange(i + 2,6).setValue(d);

    }
    else {
      console.log('No email sent for this row');
    }
  });
}

