
// vanilla JavaScript

// var bottles;
// var head = document.querySelector('ul');


// for (bottles = 99; bottles > 1;) {

//   let list = document.createElement('li');
//   head.appendChild(list);
//   let text1 = document.createTextNode(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. ")
//   list.appendChild(text1);

// bottles = bottles - 1;

//   if (bottles != 1) {
  
//     let text2 = document.createTextNode("Take one down and pass it around, "+ bottles + " bottles of beer on the wall.\n");
//     list.appendChild(text2);

//   } else {

//     let text2 = document.createTextNode("Take one down and pass it around, "+ bottles + " bottle of beer on the wall.\n");
//     list.appendChild(text2);

//   }
// }


//jQuery

var bottles;


for (bottles = 99; bottles > 1;) {
  let head = $('.h1');
  $('<li>');
  $('h1').append('<li>');
  let text1 = document.createTextNode(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. ")
  $('<li>').append(text1);

bottles = bottles - 1;


  if (bottles != 1) {
  
    let text2 = document.createTextNode("Take one down and pass it around, "+ bottles + " bottles of beer on the wall.\n");
    $('<li>').append(text2);

  } else {

    let text2 = document.createTextNode("Take one down and pass it around, "+ bottles + " bottle of beer on the wall.\n");
    $('<li>').append(text2);

  }

}
