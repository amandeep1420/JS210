function getTeddysAge() {
  let age = 0;
  
  while (true) {
    age = Math.floor(Math.random() * 201);
    if (age === 20) break;
  }
  
  console.log(`Teddy is ${age} years old!`);
}

getTeddysAge();

// their solution

function randomBetween(min, max) { // <---- review this method of generating a random number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const age = randomBetween(20, 200);
console.log(`Teddy is ${age} years old!`);