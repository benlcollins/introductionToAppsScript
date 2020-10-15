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