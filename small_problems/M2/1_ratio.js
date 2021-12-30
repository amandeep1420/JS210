/*
Problem
  - write a function that takes a string and returns an object containing the 
    percentages of characters that are lowercase, uppercase, and neither. 
    assume the string will always contain at least one character
    
  - input: a string
    - with at least one character
    - with no limitations on the type of character (case, non-alpha, etc.)
    - questions
      - do I need to handle invalid input?
        - what is invalid input?
  
  - output: an object with the percentage of each character "type" stored
    - format: { lowercase: "x.xx", uppercase: "x.xx", neither: "x.xx" }
      - notes:
        - percentages must be strings
        - percentages must have two numbers after the decimal and at least one
          before
        - percentages must use double quotes

Examples
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

Data Structure
  - an array storing the characters from the input string
  - the object to be returned
  
Algorithm
  > get an array of characters from the input string
  
  > evaluate each character in the string, getting a count of each character 
    type, and storing the count in an object
    - evaluate each character ----> move to helper function, "counter", below
    
      - function counter(characters)
        - declare/initialize "count" to object with lowercase, uppercase, and neither
          properties with 0 as their values
        - for each character in the input array
          - if the character is an uppercase letter ----> possible method: match with regex
            - increment uppercase count by 1
          - else if the charcter is a lowercase letter
            - increment lowercase count by 1
          - else
            - increment neither count by 1
        - return "count"
        
    - store return value from counter in "count" local variable
    
  > calculate percentages for each character type
    - intialize/declare "total" to length of input string
    - iterate through the properties in count, changing the count into
      the correct percentage, and reassign each count property to return value of
      each iteration
      - possible implementation: Object.keys.forEach
      - (value / total) * 100
      
  > format the values in the count object ----> move to a helper function, "formatCount", below
    
    - function formatCount(countObj)
      - for each value
        - transform it into a string
        - if it is missing a decimal
          - add a decimal + two zeroes
        - if it is two missing numbers after the decimal
          - add a "0"
          - possible implementation: match with regex /\.\d{2}/
      - reassign value of property to newly created string
    
    > return the count object
*/


function letterPercentages(string) {
  const chars = [...string];
  
  let count   = counter(chars);
  
  const total = string.length;
  
  Object.keys(count).forEach(key => count[key] = (count[key] / total) * 100);
  
  formatCount(count);
  
  return count;
}

function counter(characters) {
  const count = {lowercase: 0, uppercase: 0, neither: 0};
  
  characters.forEach(char => {
    if (char.match(/[A-Z]/)) {
      count.uppercase += 1;
    } else if (char.match(/[a-z]/)) {
      count.lowercase += 1;
    } else {
      count.neither += 1;
    }
  });
  
  return count;
}

function formatCount(countObj) {
  return Object.keys(countObj).forEach(key => {
    let value = String(countObj[key]);
    
    if (!value.includes(".")) value += ".00";
    
    if (!value.match(/\.\d{2}/)) value += "0";
    
    countObj[key] = value;
  });
}


    // - function formatCount(countObj)
    //   - for each value
    //     - transform it into a string
    //     - if it is missing a decimal
    //       - add a decimal
    //     - if it is two missing numbers after the decimal
    //       - add the requisite number of "0" characters to reach two

let result = letterPercentages('123');

console.log(result);

