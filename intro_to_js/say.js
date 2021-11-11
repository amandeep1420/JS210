/* function say(words) {
  console.log(words);
}

say("hello");
say("hi");
say("how do you do");
say("Quite all right"); */

function add(a=10, b=10) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add()); // 20
console.log(add); // [Function: add]
// note the differences


