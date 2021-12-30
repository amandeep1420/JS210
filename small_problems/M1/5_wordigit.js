/*
P
  - write a function that takes a sentence string as an argument and returns
    that string with every occurrence of a "number word" (ex. 'zero, 'one, etc)
    converted to its corresponding digit character
    
  - input: a sentence string
    - that may have any type of character
    - questions:
      - do I need to handle empty strings?
      - do I need to handle invalid input?
        - what is invalid?
      - do I need to handle case?
        
  - output: the 'fixed' sentence string
  
E
wordToDigit('Please call me at five five five one two three four. Thanks.');

D
  - use an array to hold the words in the string
  
A
  > split up the word into an array along word boundaries
    - possible implementation: sentence.split(/\b/)
    - store result in local variable
  
  > evaluate each word, transforming as necessary
    - create a key of 'number words' -> array, use index to transform
    - possible implementation: map
    - for each word
      - if the word a number word?
        - if so, transform into digit using index
      - else
        - return the word
  
  > join the array back together

*/


function wordToDigit(sentence) {
  const key = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
               'eight', 'nine'];
               
  let parts = sentence.split(/\b/);
  
  return parts.map(part => key.includes(part) ? key.indexOf(part) : part).join('');
}

let result = wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(result);


const key = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
               'eight', 'nine'];
               
console.log(key.includes('four.'));

console.log(result === "Please call me at 5 5 5 1 2 3 4. Thanks.");