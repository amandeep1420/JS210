function evenOrOdd(number) {
  if (Number.isInteger(number) === false) {
    console.log("Argument must be an integer!");
    return;
  }
  let result = (number % 2 === 0 ? "even" : "odd");
  console.log(result);
}

evenOrOdd(44);
evenOrOdd(5);
evenOrOdd(55.5);

function foo() {
  true;
}

function qux() {
  false;
}

// if (foo()) {
//   return 'bar';
// } else {
//   return qux()
// }

function upString(string) {
  return ((string.length > 10) ? string.toUpperCase() : string);
}

console.log(upString('cat'));