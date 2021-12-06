// let title = "The Three-Body Problem";

// let title = 'The Three-Body Problem'; ---> using single quotes with strings unless 
//                                           the string itself contains single quotes

// let title = 'The Three-Body Problem',
//     author = 'Cixin Liu',
//     page_count = 400; -----> should be camelCase, each variable declaration should use let or
//                             const ? correct

// let completed = lastPageRead == 400; ---> should use strict equality operator to avoid 
//                                           type coercion 

// if (finishedBook()) { //----> need BRACES (accidentally said brackets, those are []) around code executed by multiline if statement
//   console.log('You have finished reading this book');
// }

// function read(pages) {
//       console.log('You started reading.');
//       for (let page=0; page<pages; page += 1) { ---> need spaces around assignment operator and arithmetic operators
//               let message = 'You read page '+page; ----> same problem as above, also page is being coerced from number to string - should explicitly convert using String() or .toString
//               console.log(message);
//       }
// } ----> oops, missed the wonky/fat indentations! dang
// the guide recommends using named function expressions instead of declarations?
// need to read the guide...


// so....

// instead of this:

function meow() {
  return 'meow';
}

// they want...

const meow2 = function returnMeowString() {
  return 'meow';
}

// I can deal with that