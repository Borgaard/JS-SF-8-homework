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


$("#surveyList li").each(function() {
    var $removeButton = $('<button>').html("Remove question");
    $(this).append($removeButton);
});

let $submitButton = $('#addQuestion');
$submitButton.on('click', function(e){
  e.preventDefault();
  let $question = $('#question');
  let $questionVal = $question.val();



  let $bigCont = $('#surveyList');
  let $li = $('<li>');

  let $label = ('<label>');
  let $input = $('<input>');
    $input.attr('text');

  // var $thingLi = $('<li>').html(thing).addClass('fav-thing');
  //   input.className = "form-control";


$bigCont.append($li);

  //   label.appendChild($questionVal);
  //   li.appendChild(label);
  //   li.appendChild(input);
  //   bigCont.appendChild(li);

});




// let submitButton = document.querySelector('#addQuestion');
// submitButton.addEventListener('click', function(e){
//   e.preventDefault();
//   let question = document.querySelector('#question');
//   let questionVal = question.value;
//
//   let text = document.createTextNode(questionVal);
//   let bigCont = document.querySelector('#surveyList');
//   let li = document.createElement('li');
//     li.className = 'form-group padout';
//   let label = document.createElement('label');
//   let input = document.createElement('input');
//     input.addType = "text";
//     input.className = "form-control";
//
//     label.appendChild(text);
//     li.appendChild(label);
//     li.appendChild(input);
//     bigCont.appendChild(li);
// });
