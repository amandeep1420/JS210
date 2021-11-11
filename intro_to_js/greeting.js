/*let greetingMessage = "Good Morning!";

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

greetPeople();
changeGreetingMessage("Good Evening");
greetPeople();*/

function changeFirstElement(array) {
  array[0] = 'meow';
}

let testArray = [1, 2, 3];

changeFirstElement(testArray);

console.log(testArray);