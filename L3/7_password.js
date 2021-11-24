/*
  P
    - write a password guessing program that tracks how many times the user enters
      the wrong password. If the user enters the password wrong three times, log
      'You have been denied access' and terminate the program. If the password is
      correct, log 'You have successfully logged in' and end the program.
    - input: passwords
    - output: dependent on attempt count, see above
  E
    - see book
  D
    - n/a
  A
    - declare and initialize variable to readline-sync
    - declare and initialize variable to password
    - create a for loop:
      - let attempts = 0; attempts < 3; attempts += 1
        - ask for user to input password
        - if user inputs correct password:
          - log login message
          - return from function
    - log failed login message and return if loop broken
  C



*/


let guessPassword = () => {
  let rlSync   = require('readline-sync');
  let password = 'meow';
  
  for (let attempts = 0; attempts < 3; attempts += 1) {
    let input = rlSync.question('What is the password: ');
    
    if (input === password) {
      console.log('You have successfully logged in.');
      return;
    }
  }
  
  console.log('You have been denied access.');
  return;
};

guessPassword();