/*
P
  - implement a function that determines whether a string begins with another string;
    if so, return true - return false otherwise.
  - input: a string and a another string to check with
  - output: boolean
  ~
  - note: may only use brackets to access characters + length property; everything
    else is off limits
E
  - see book
D
  - n/a
A
  > general idea: loop through indexes, comparing characters
  
  > for loop
    - for (let index = 0; index < searchString.length; index +=1)
      - if characters aren't the same
        - return false
  > return true
    
*/

const startsWith= function(string, searchString) {
  for (let index = 0; index < searchString.length; index +=1) {
    if (string[index] !== searchString[index]) return false;
  }
  
  return true;
};

// basically the same as the book solution, wheee