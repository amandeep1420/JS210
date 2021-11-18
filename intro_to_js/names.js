// while (index < names.length) {
//   let upperCaseName = names[index].toUpperCase();
//   upperNames.push(upperCaseName);
//   index += 1;
// }
 
// console.log(upperNames); // => ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']



// let namesArr = ['Aman', 'Angelo', 'Andrew'];
// let newNames = [];
// let indexArr = 0;

// while (indexArr < namesArr.length) {
//   let newName = namesArr[indexArr].toUpperCase();
//   newNames.push(newName);
//   indexArr += 1;
// }

// console.log(newNames);

// let people = ['Jeff', 'Steve', 'Bob'];
// let newPeople = [];
// let currentIndex = 0;

// while (currentIndex != people.length) {
//   let currentPerson = people[currentIndex].toUpperCase();
//   newPeople.push(currentPerson);
//   currentIndex += 1;
// }

// console.log(newPeople);

// let falsey = false

// do {
//   console.log("This will only run once!");
// } while (falsey);


let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  let name = names[index];
  
  if (name === 'Naveed') continue;
  
  upperNames.push(name.toUpperCase());
}

console.log(upperNames);