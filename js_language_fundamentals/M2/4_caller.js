function makeDoubler(caller) {
  return function(number) {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  };
}

const doubler = makeDoubler('Victor');
doubler(5);    

// the returned anonymous function assigned to the doubler variable still retains
// access to the caller variable -in its closure-, even after the makeDouble function
// returns