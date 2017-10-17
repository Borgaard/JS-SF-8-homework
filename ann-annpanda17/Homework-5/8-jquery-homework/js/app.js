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

var $button = $('#addQuestion');
var $thingList = $('#surveyList');
var $newThingInput = $('#question');
var $removeButton = $('<button>').html("Remove question").addClass('remove');
$('li').append($removeButton);


$($button).on('click', function(event) {
  event.preventDefault();
  var newThing = $newThingInput.val();
  var $newThingLi = $('<li>');
  var $newInput = $('<input>').addClass('form-control').attr('type','text');
  var $newLabel = $('<label>');
  $newThingLi.addClass('form-group padout');
  $newLabel.append(newThing);
  $newThingLi.append($newLabel);
  $newThingLi.append($newInput);
  $thingList.append($newThingLi);
  var $removeButton = $('<button>').html("Remove question").addClass('remove');
  $newThingLi.append($removeButton);

  $newThingInput.val('');
});

$thingList.on("click", '.remove',function() {
    event.preventDefault();
      var $thingItem = $(this).parent();
      $thingItem.remove();
    //$thingItem.removeClass('form-group padout');
    //$thingItem.addClass('invisible');
});
