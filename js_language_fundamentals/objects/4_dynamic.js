const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456'; // the 'prop2' property of myObject now has the value '456'
myObject[prop2] = '678'; // a '456' property is added to myObject with a value of '678'

console.log(myObject[prop2]); // logs '678'
console.log(myObject.prop2); // logs '456'

const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);
myObj[myFunc] = 'world!';
console.log(myObj);