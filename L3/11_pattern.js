/*

P
  - write a function that takes a number of rows as the argument, "nStars", and logs
    a square of numbers and asterisks.
  - input: a number between 1 and 10 (exclusive)
  - output: the specified pattern
  ~
  - note: nStars will be greater than 1 and less than 10
E
  - see book
D
  - N/A
A
  > create a starting array to use as a "template"
    - let templateArray = [1]
    - for (let num = 1; num < nStars; num += 1)
        - templateArray.push('*')
    
  > create a loop that logs the specified output
    - for (let index = 1; index <= nStars; index += 1)
      - console.log(template.join(''))
      - template[index] = index + 1
    
  > done; wonder if I should use less technical language while creating PEDAC
    > needs to be more "portable", less "language specific"
      
*/

const generatePattern = function(nStars) {
  let template = [1];
  
  for (let num = 1; num < nStars; num +=1) {
    template.push('*')
  }
  
  for (let index = 1; index <= nStars; index +=1) {
    console.log(template.join(''));
    template[index] = index + 1;
  }
}

generatePattern(7);