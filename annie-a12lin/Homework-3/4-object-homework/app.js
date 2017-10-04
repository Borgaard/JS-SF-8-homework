/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.


// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. In comments, list at least three reasonable abstractions that you might use to build this program; for each abstraction, list out at least two properties and behaviors that it would make sense for that abstraction to have. Below is an example - please write your answer in the same format.
  // 'Car'
  // Description: Our app manages car sales.
  // Every 'car' has
  // - a make
  // - a model
  // - a year
  // Every 'car' can
  // - drive
  // - brake
  // - park

// Answer Starts Here

  // 'Tasks'
  // Description: Our app helps you manage tasks.
  // Every 'task' has
  // - a name
  // - a due date
  // - an owner
  // Every 'task' can
  // - Get resolved
  // - Get postponed

  // 'Meetings'
  // Description Our app helps you manage meetings.
  // Every 'meeting' has
  // - a name
  // - a date
  // - a time
  // - participants
  // - an agenda
  // Every 'meeting' can
  // - Get postponed
  // - Get started
  // - Get completed

// Answer Ends Here


// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address



// Answer Starts Here

var pet_owner = {
  name: "Annie",
  address: "Berkeley, CA"
};

// Answer Ends Here


// 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.

  // Pet
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'pet' has:
  // - a name
  // - a species
  // - a breed
  // - a noise that it can make (e.g. 'bark', 'meow', etc.)
  // Every pet can:
  // - make noise (each pet makes its own unique noise, as specified by `noise`.

var some_pet;

// Answer Starts Here

some_pet = {
  name: "Dogster",
  species: "canine",
  breed: "corgi",
  noise: "woof",
  makeNoise: function(noise) {
    console.log(noise);
  }
};

// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done! 

/////////////////////////////////////////////////////////////
