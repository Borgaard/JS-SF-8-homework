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

//this is how far i got, need more time because i was having a lot of trouble

var $thingList = $('#surveyList');
var $newThingInput = $('#question');
var $addBtn = $('#addQuestion');

$("#surveyList li").each(function() {
    var $removeButton = $('<button>').html("Remove question");
    $(this).append($removeButton);
});

function addToList($list, thing) {
    var $thingLi = $('<li>').html(thing).addClass('form-group padout');
    addLinks($thingLi);
    $list.append($thingLi);
  }

  $addBtn.on('click', function(event) {
    event.preventDefault();
    var newThing = $newThingInput.val();
    if (newThing === '') {
      alert('You must type in a value!');
    } else {
      addToList($thingList, newThing);
      $newThingInput.val('');
    }
  });

  /*
starter code sample

function addToList($list, thing) {
  var $thingLi = $('<li>').html(thing).addClass('fav-thing');
  addCrossOffLink($thingLi);
  $list.append($thingLi);
}

function addCrossOffLink($li) {
  var $crossOffLink = $('<span>').html(' cross off').addClass('cross-off');
  $li.append($crossOffLink);
}

$(document).ready(function() {
  var $thingList = $('#fav-list');
  var $things = $('.fav-thing');
  var $button = $('#new-thing-button');
  var $newThingInput = $('#new-thing');

  $things.toArray().forEach(function(li) {
    addCrossOffLink($(li));
  });

  $button.on('click', function(event) {
    event.preventDefault();
    var newThing = $newThingInput.val();
    if (newThing === '') {
      alert('You must type in a value!');
    } else {
      addToList($thingList, newThing);
      $newThingInput.val('');
    }
  });

  $thingList.on('click', '.fav-thing .cross-off', function() {
    var $thingItem = $(this).parent();
    $thingItem.addClass('crossed-off');
    $(this).html('');
  });

// Refactor the following two event listeners into a single event listener for multiple events.
  $thingList.on('mouseenter', 'li', function(event) {
    $(this).removeClass('inactive');
    $(this).siblings().addClass('inactive');
  });

  $thingList.on('mouseleave', 'li', function(event) {
    $(this).siblings().removeClass('inactive');
  });
});
  */