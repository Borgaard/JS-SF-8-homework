/*
Create a customizable survey form.

The index.html file includes a form, which contains 2 sample questions as illustrations.
A user should be able to type a survey question into the text box with the id "question", click the Submit button, and the question
should be added to the survey.
When the user adds the question to the survey, it should be automatically numbered and a text box should be added below it.
Each survey question should also include a "Remove question" button that a user can click to remove the question from the survey.

In addition to creating the functionality described above, your final code should also do the following:
- Convert the existing code to use implicit iteration
- Implement at least one example of event delegation
- Chain at least 2 methods

Note: This project uses Bootstrap, which is a CSS framework that provides prebuilt styles using class names.
Make sure the new questions you add to the survey use the same class names as in the sample form questions to take advantage of Bootstrap styles.
*/

// Create global variables
var $surveyList = $('#surveyList');
var $newQuestion = $('#question');
var $addQuestionBtn = $('#addQuestion');

function addToSurvey($list, newItem) {
  // Create new input item
  var $inputLi = $('<input>').attr('type', 'text').addClass("form-control");

  // Create new list item
  var $surveyLi = $('<li>').addClass("form-group padout").html('<label>' + newItem + '</label>');

  // Append new input element to new list element
  $surveyLi.append($inputLi);

  // Append new list element to survey list
  $list.append($surveyLi);
  addRmvQuestionBtn($surveyLi);
  // console.log($newItem);
}

function addRmvQuestionBtn($survey) {
  // Create new button element
  $rmQuestionBtn = $('<button>').html('Remove this question');

  // Append new remove button to reference parameter
  $survey.append($rmQuestionBtn);

  // Add click functionality to button that remove questions from the survey
  $rmQuestionBtn.on('click', function(evt) {
    $(this).parent().remove();
  });
}

// Assign Remove buttons to each question
let $surveyQuestions = $('li.form-group');
addRmvQuestionBtn($surveyQuestions);

$addQuestionBtn.on('click', function(evt) {
  evt.preventDefault();

  // Get the value of the user input
  var newQuestion = $newQuestion.val();
  // console.log("The new question is: " + newQuestion);
  if (newQuestion === "") {
    alert("You MUST enter a question in order to add it to the survey!");
  } else {
    // Call function to add new question to the survey
    addToSurvey($surveyList, newQuestion);

    // Reset the value of the input
    $newQuestion.val('');
  }
});
