// function triangle(num) {
//   for (let spaces = num - 1; spaces >= 0; spaces -= 1) {
//     let string = '';
    
//     for (let spacesAdded = spaces; spacesAdded > 0; spacesAdded -= 1) {
//       string += ' ';
//     }
    
//     for (let starsAdded = num - spaces; starsAdded > 0; starsAdded -= 1) {
//       string += '*';
//     }
    
//     console.log(string);
//   }
// }

// my original solution; revised after discovering repeat()

triangle(9);


function triangle(num) {
  for (let index = 1; index <= num; index += 1) {
    console.log(' '.repeat(num - index) + '*'.repeat(index));
  }
}