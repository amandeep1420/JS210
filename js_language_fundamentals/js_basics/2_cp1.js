const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello'); // logs hello
}

if (!myString) {
  console.log('World'); // logs nothing
}

if (!!myArray) {
  console.log('World'); // logs world
}

if (myOtherString || myArray) {
  console.log('!'); // logs !
}

// correct
// falsey values: false, null, undefined, 0, '', NaN