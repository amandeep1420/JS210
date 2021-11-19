// // function randomNumberBetween(min, max) {
// //   return Math.floor(Math.random() * (max - min + 1) + min);
// // }

// // let tries = 0;
// // let result;

// // do {
// //   result = randomNumberBetween(1, 6);
// //   tries += 1;
// // } while (result <= 2);

// // console.log('It took ' + String(tries) + ' tries to get a number greater 2');

// function has_a_or_b(string) {
//   let results = string.match(/[ab]/g);
//   if (results) {
//     console.log('We have a match!');
//     console.log(`${results}`);
//   } else {
//     console.log('No match here, sorry.');
//   }
// }

// has_a_or_b('aman bal');

// function foo(number) {
//   if (typeof number !== "number") {
//     throw new TypeError("This ain't a number");
//   }
  
//   console.log("This is a number!");
// }

// foo(44);

// foo("cat");

// function isTrue(object) {
//   if ((typeof object) === 'boolean') {
//     if (String(object) === 'true') {
//       console.log("yeah!");
//     } else {
//       console.log('wrong boolean, bub!');
//     }
//   } else if (object === 'true') {
//     console.log("kinda!");
//   } else {
//     console.log("nah!");
//   }
// }

let meow = 'toby'

switch (meow) {
  case 'kira':
    console.log('kira is here');
    break;
  default:
    console.log('toby is here');
}

let apples = 3;
let bananas = '3';

if (apples === bananas) {
  console.log('it is!');
} else if (apples == bananas) {
 console.log('same num, diff type!');
} else {
  console.log('another one!');
}
