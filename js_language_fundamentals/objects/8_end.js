function penultimate(string) {
  return string.split(' ')[-2]; // trying to use a negative index to reference
}                               // the second-to-last element of the array returned by 
                                // split, which doesn't work in JS ----> returns the value assigned to the property with key of '-2' instead
penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"


// working solution

function penultimateReal(string) {
  let wordsArray = string.split(' ');
  
  return wordsArray[wordsArray.length - 2];
}

penultimateReal('last word');
penultimateReal('Launch School is great!');