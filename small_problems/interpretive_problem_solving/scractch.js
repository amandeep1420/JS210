/*
In the world of birding, there are four-letter codes for the common names of birds. 
These codes are created by some simple rules:

> If the bird's name has only one word, the code takes the first four letters of that word.
> If the name is made up of two words, the code takes the first two letters of each word.
> If the name is made up of three or more words, the code is created by taking the first letter 
  from each word.

Complete the function that takes an array of strings of common bird names from North America, 
and create the codes for those names based on the rules above. 
The function should return an array of the codes in the same order in which the input names were presented.

getCodes(["Black Capped Chickadee", "Common Tern"]) // returns ["BCC", "COTE"]
getCodes(["black capped chickadee", "common tern"]) // returns ["BCC", "COTE"]
getCodes(["Blue Jay", "Red Hawk", "Green Duck"])    // returns ["BLJA", "REHA", "GRDU"]
getCodes(["Jayhawk", "Redcap", "Bluetail"])         // returns ["JAYH", "REDC", "BLUE"]
getCodes(["", "Blue Jay"])                          // returns ["", "BLJA"]
getCodes(["Giant Blue-Beaked Dodger", "Incredible White-Tailed Duck"]) // returns ["GBBD", "IWTD"]
getCodes([])   // logs "Where are the birds?"
getCodes({})   // logs "Where are the birds?"
getCodes(123)  // logs "Where are the birds?"
*/





















// Nearest Chapter
// Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.

// Examples
// nearestChapter({
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }, 10) ➞ "Chapter 2"


// nearestChapter({
//   "New Beginnings" : 1,
//   "Strange Developments" : 62,
//   "The End?" : 194,
//   "The True Ending" : 460
// }, 200) ➞ "The End?"


// nearestChapter({
//   "Chapter 1a" : 1,
//   "Chapter 1b" : 5
// }, 3) ➞ "Chapter 1b"

// Notes
// All page numbers in the dictionary will be valid integers.
// Return the higher page number if ever two pages are equidistant (see last test case).


/*
Problem
  > write a function that returns the chapter closest to the page number you're on. if 
    you're equally distant from two chapters, return the later chapter.
    
  > input: an object representing a book(something with chapters) and the page you're on
    - there will always be at least one chapter in the input object
    - the page number will always be a valid integer
      - a valid integer is greater than or equal to zero
    - questions
      - will two chapters ever start on the same page number/have the same "value"?
        - no
  
  > output: the chapter name closest to the page number passed in as an argument
    - if the page number is equidistant from two chapters, return the later chapter

Examples
nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10) ➞ "Chapter 2"


nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200) ➞ "The End?"


nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3) ➞ "Chapter 1b"
  
Data Structure
  > the chapters are already stored within an object; not delving further into
    data structure for time being...
    
Algorithm
  > move through the object, "chapter by chapter". start with the first chapter and find
    the absolute difference between the chapter's starting page and the page you're on.
    store that chapter's "name". for all successive iterations, find the absolute difference
    between the page number you're on and the starting page of the chapter; if the difference
    is equal to or greater than the difference from the last iteration, save that chapter name instead.
    after all iterations, return the chapter name that was found.
    - possible implementation, below:
      - declare a variable to store the "found" chapter name
      - declare a variable to store the difference found during each iteration;
        - name this "lastDifference"
      - iterate through the keys in the input object
        - for each property
          - find the absolute difference between the property's value and the "currentPage"
            - name this "CurrentDifference"
          - if the value of lastDifference is falsey, initialize it to the value of currentDifference
          - if CurrentDifference <= lastDifference
            - foundChapter = current chapter name
            - lastDifference = CurrentDifference
          - else
            - continue
            
      - return foundChapter



*/


function nearestChapter(obj, currentPage) {
  let foundChapter;
  let lastDifference;
  
  Object.keys(obj).forEach(chapter => {
    let currentDifference = Math.abs((obj[chapter] - currentPage));
    
    if (!lastDifference) lastDifference = currentDifference;
    
    if (currentDifference <= lastDifference) {
      foundChapter   = chapter;
      lastDifference = currentDifference;
    }
  })
  
  return foundChapter;
}

let result = nearestChapter({
  "Chapter 1" : 1, // chapter 1, lastDifference is 9
  "Chapter 2" : 15, // chapter 2, lastDifference is 5
  "Chapter 3" : 37 // 
}, 10) 
// ➞ "Chapter 2"
console.log(result);


result = nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200)
// ➞ "The End?"
console.log(result)


result = nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3) 
// ➞ "Chapter 1b"
console.log(result)













