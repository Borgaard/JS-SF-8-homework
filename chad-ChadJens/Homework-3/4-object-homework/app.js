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
  
  // 'Event'
  // Description: Our calendar has events
  // Every 'event' has
  // - a start time
  // - an end time
  // - a location
  // - invited guests
  // Every 'event' can
  // - be created
  // - be edited
  // - be deleted

  // 'User'
  // Description: Our calendar has users
  // Every 'user' has
  // - an account name
  // - a password
  // - a contact email address
  // Every 'user' can
  // - login
  // - logout
  // - view their calendar

  // 'View'
  // Description: Our calendar has a way to view events
  // Every 'view' has
  // - some number of hours or days visible
  // - some visual indicator of past, present, and future
  // Every 'view' can
  // - Advance forward and backward
  // - Be set as the default

// Answer Ends Here


// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

var pet_owner;

// Answer Starts Here
pet_owner = {
  name: 'Chad',
  address: '3118 West St'
}

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
  name: 'Larry',
  species: 'cat',
  breed: 'tabby',
  noise: 'meow',
  make_noise: function() {
    console.log(some_pet.noise);
  }
}
// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done! 

/////////////////////////////////////////////////////////////
