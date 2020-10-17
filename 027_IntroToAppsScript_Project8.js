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
// version 1
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


// Project Lesson 6: Sending enhanced HTML emails automatically with Apps Script
// version 2
function sendEmail_v2() {

  // get the spreadsheet information
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const responseSheet = ss.getSheetByName('Form Responses 1');
  const data = responseSheet.getDataRange().getValues();
  //console.log(data);

  // remove the header
  data.shift();
  //console.log(data);

  // loop over the rows
  data.forEach((row,i) => {

    // identify ones I haven't replied to
    if (row[5] === '') {

      // get the email address
      const name = row[1];
      const email = row[2];
      const answer = row[3]; // yes/no
      const langs = row[4]; // list of languages

      // write the email
      const subject = 'Thank you for responding to the Apps Script questionnaire!';
      let body = '';

      // change the body for yes and no
      // yes answer
      if (answer === 'Yes') {
        body = 'Hi ' + name +`,<br><br>
          Thank you for responding to our 2019 Developer Survey!<br><br>
          Your feedback is greatly appreciated.<br><br>
          You reported experience with the following coding languages:<br><br>
          <em>` + langs + `</em><br><br>
          Thanks,<br>
          Ben`;
      }
      // no answer
      else {
        body = 'Hi ' + name +`,<br><br>
          Thank you for responding to our 2019 Developer Survey!<br><br>
          Your feedback is greatly appreciated.<br><br>
          You reported not having any experience with coding, so here's a resource to get started:<br><br>
          <a href="https://www.benlcollins.com/spreadsheets/starting-gas/">Getting started with Apps Script</a><br><br>
          Thanks,<br>
          Ben`;
      }
      //console.log(email);
      //console.log(subject);
      //console.log(body);

      // send the email
      GmailApp.sendEmail(email,subject,'',{htmlBody: body});

      // mark as sent
      const d = new Date();
      responseSheet.getRange(i + 2,6).setValue(d);

    }
    else {
      console.log('No email sent for this row');
    }
  });
}

// add a cutsom menu to our Sheet
function onOpen() {
  
  const ui = SpreadsheetApp.getUi();
  
  ui.createMenu("Questionnaire Menu")
    .addItem("Update Form","updateForm_v1")
    .addItem("Send Emails","sendEmail_v2")
    .addToUi();
  
}

// Project Lesson 7: automatically update the form
// version 2
function updateForm_v2() {

  // get Sheet and Form variables
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const form = FormApp.openById(FORM_ID);

  // get list of languages in setup sheet
  const setupSheet = ss.getSheetByName('setup');
  const setupSheetValues = setupSheet.getRange(2,1,setupSheet.getLastRow()-1,1).getValues().flat();
  //console.log(setupSheetValues); 
  // [ 'None', 'Apps Script', 'Python', 'VBA' ]

  // get list of languages submitted via the form
  const responsesSheet = ss.getSheetByName('Form Responses 1');
  const data = responsesSheet.getRange(2,5,responsesSheet.getLastRow()-1,1).getValues().flat();
  const submittedFormValues = data.join().split(',');
  //console.log(submittedFormValues); 
  // [ 'None', 'Apps Script, Python, VBA, R', 'Java' ]

  // get list of languages in form question
  const formCheckboxChoices = form.getItemById('1860180947').asCheckboxItem().getChoices();
  const formCheckboxValues = formCheckboxChoices.map(x => x.getValue());
  //console.log(formCheckboxValues); 
  // [ 'None', 'Apps Script', 'Python', 'VBA', 'R' ]

  // consolidate list of languages
  const allLangs = [...formCheckboxValues,...setupSheetValues,...submittedFormValues];
  //console.log(allLangs);
  // [None, Apps Script, Python, VBA, R, None, Apps Script, Python, VBA, None, Apps Script, Python, VBA, R, Java]

  // remove leading and trailing spaces from languages
  const trimAllLangs = allLangs.map(item => item.trim());
  //console.log(trimAllLangs);

  // sort list of languages
  trimAllLangs.sort();
  //console.log(trimAllLangs);

  // dedup list of languages
  // use let because I'm going to reassign it
  let finalLangList = trimAllLangs.filter((lang,i) => trimAllLangs.indexOf(lang) === i);
  //console.log(finalLangList);
  //console.log(finalLangList.length);

  // remove any blanks
  finalLangList = finalLangList.filter(item => item.length !== 0);
  //console.log(finalLangList);
  //console.log(finalLangList.length);
  
  // move 'None' to front of array
  finalLangList = finalLangList.filter(item => item !== 'None');
  finalLangList.unshift('None');
  //console.log(finalLangList);

  // turn into double array notation for Sheets
  const finalDoubleArray = finalLangList.map(lang => [lang]);
  //console.log(finalDoubleArray);
  
  // paste into sheet in setup tab
  setupSheet.getRange("A2:A").clear();
  setupSheet.getRange(2,1,finalLangList.length,1).setValues(finalDoubleArray);

  // copy into the Form
  form.getItemById('1860180947').asCheckboxItem().setChoiceValues(finalLangList); 

}

// Project lesson 8: add new triggers to run the update form 2 
// No additional code
// set trigger to run updateForm_v2() every time form is submitted