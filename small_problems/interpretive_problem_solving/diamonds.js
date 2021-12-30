/*

P
  - Write a function that displays a four-pointed diamond in an nxn grid, where 
    n is an odd integer supplied as an argument to the function. 
    You may assume that the argument will always be an odd integer.
    
  - input: an odd integer
    - may assume this will always be the input
  
  - output: a four-pointed diamond in an n x n grid
    - diamond consists of asterisks (*)
    - each 'line' of output should have the diamond/asterisks centered
    - the centermost line of the output should have a number of asterisks
      equivalent to the input

E
  - refer to prompt
  
D
  - n/a for the time being
  
A
  > build the diamond
    - subdivide into two parts - building the top and building the bottom
    
    - function topOfDiamond(n)
      ~ each line is composed of three parts: preceding spaces, asterisks, and 
        successive spaces
      ~ the space count is evenly divided into two parts
      - set up a loop (for asteriskCount = 1; asteriskCount <= n; asteriskCount += 2)
        - let spacecount = n - asteriskcount / 2 ----> floor it
        - let asterisks = '*' repeated by asteriskCount
        - let spaces = ' ' repeated by spacecount
        - log the spaceCount + the asteriskCount
        
    - function bottomOfDiamond(n)
      ~ the bottom of the diamond starts after the middle line; the asterisk count
        will start at two less than n
      ~ calculate everything backwards from the first function
      - set up a loop (for asteriskCount = n - 2; asteriskCount >= 1; asteriskCount -= 2)
        - let spaceCount = n - asteriskcount / 2 ------> floor it
        - let asterisks = '*' repeated by asteriskCount
        - let spaces = ' ' repeated by spacecount
        - log the spaceCount + the asteriskCount
    


*/


// function diamond(n) {
//   createHalfADiamond(n, false);
//   createHalfADiamond(n);
// }

// function createHalfADiamond(n, bottom=true) {
//   for (let asteriskCount = bottom ? n - 2 : 1; asteriskCount >= 1; ) {
//     let spaceCount = Math.floor((n - asteriskCount) / 2);
//     let spaces = ' '.repeat(spaceCount);
    
//     let asterisks = '*'.repeat(asteriskCount);
//     let hollowString;
//     if (asterisks.length - 2 < 1) {
//       hollowString = '*';
//       } else {
//       hollowString = asterisks[0] + ' '.repeat(asterisks.length - 2) + '*'
//       }
      
//     console.log(spaces + hollowString);
//     bottom ? asteriskCount -= 2 : asteriskCount += 2;
//   }
// }

// diamond(7);

// function topOfDiamond(n) {
//   for (let asteriskCount = 1; asteriskCount <=n; asteriskCount += 2) {
//     let spaceCount = Math.floor((n - asteriskCount) / 2);
//     let spaces = ' '.repeat(spaceCount);
    
//     let asterisks = '*'.repeat(asteriskCount);
//     let hollowString;
//     if (asterisks.length - 2 < 1) {
//       hollowString = '*';
//     } else {
//     hollowString = asterisks[0] + ' '.repeat(asterisks.length - 2) + '*';
//     }
      
//     console.log(spaces + hollowString);
//   }
// }

// function bottomOfDiamond(n) {
//   for (let asteriskCount = n - 2; asteriskCount >= 1; asteriskCount -= 2) {
//     let spaceCount = Math.floor((n - asteriskCount) / 2);
//     let spaces = ' '.repeat(spaceCount);
    
//     let asterisks = '*'.repeat(asteriskCount);
//     let hollowString;
//     if (asterisks.length - 2 < 1) {
//       hollowString = '*';
//       } else {
//       hollowString = asterisks[0] + ' '.repeat(asterisks.length - 2) + '*'
//       }
      
//     console.log(spaces + hollowString);
//   }
// }

function diamond(quantity) {
  let idx = -1

  let topHalf = Array.from({length: quantity / 2 + 1}, (_, k) => {
    idx += 2
    return idx
  });

  let bottomHalf = [...topHalf].reverse().slice(1);

  let fullDiamond = [...topHalf, ...bottomHalf]


  fullDiamond.map(ele => {
    let spaces = (quantity - ele) / 2;
    console.log(`${' '.repeat(spaces)}${'*'.repeat(ele)}${'        '.repeat(spaces)}`)
  })

}

diamond(3)