// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// // let capitalKeys = Object.keys(obj).map(key => key.toUpperCase());

// let capitalKeys = [];
// for (let key in obj) {
//   capitalKeys.push(key.toUpperCase());
// }


// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// myObj = Object.create(myProtoObj);

// primitive
// primitive
// object
// primitive
// neither
// // function is an object
// primitive
// object

// let objKeys = Object.keys(myObj);
// objKeys.forEach(function(key) {
//   console.log(key);
// });


function copyObj(object, keys = Object.keys(object)) {
  let newObj = {}
  for (let key in object) {
    if (keys.includes(key)) {
      newObj[key] = object[key];
    }
  }
  return newObj;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }
