// meow();

// function meow() {
//   console.log(sound);
// }

// var sound = 'meow';

// let kittySound = () => {
//   meow;
// };

// // function prepareMeow(firstSound) {
// //   return function executeMeow(secondSound) {
// //     console.log(firstSound, secondSound);
// //   };
// // }

// // function varTest() {
// //   {
// //     var aVar = 4;
// //     // let aVar2 = 5;
// //   }
  
// //   console.log(aVar);
// // }


// draw();

// function draw() {
//   console.log('draw');
// };

var qux = 2;
function foo() {
  var qux = 1;
  bar();
}

function bar() {
  console.log(qux);
}

foo();  // logs 1