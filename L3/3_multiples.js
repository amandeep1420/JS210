/*
P
  - write a function logMultiples that takes one argument, "number". It should log all
    the multuples of the argument between 0 and 100 (inclusive) that are also odd
    numbers. Log the values in DESCENDING order
  - input: a number
  - output: multiples in descending order, starting at 100
  ~
  - note: must be in descending order
  - note: odd numbers only
E
  - see book
D
  - N/A
A
  > getting a little funky with this one
  
  > determine the highest factor by which we may multiply to obtain a number less than 
    100
      - possible code: Math.floor(100 / input);
  > create loop from aforementioned number to zero, multiplying input by each 
    number in loop and logging if the product is odd
      - ez pz
C


*/


function logMultiples(number) {
  let highestFactor = Math.floor(100 / number);
  
  for (let currentFactor = highestFactor; currentFactor > 0; currentFactor -=1) {
    let product = number * currentFactor;
    if (product % 2 !== 0) console.log(product);
  }
}

logMultiples(17);
logMultiples(21);

// further exploration: I already did it, lol