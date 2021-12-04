const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person['name'] === otherPerson['name']);    // false -- expected: true

// or

const OtherPerson = person;

// they need to either reference the same object -or- we could
// compare the value of the single property of each object