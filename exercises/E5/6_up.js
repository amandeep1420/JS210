function sequence(input) {
  let numsArr = [];
  let num = 1;
  
  while (true) {
    numsArr.push(num);
    if (num === input) return numsArr;
    num += 1;
  }
}

// amazing

function sequence(number) {
  return Array.from({length: number}, (_, i) => i + 1);
}

// also amazing

function sequence(num) {
  return Array(num).fill().map((_, index) => index + 1);
}

// fill, mapping with index, using from along with the object that denotes length? 
// unreal

// !!!!!!!!!!!!!!!!!!
// generate an array from 0 to a given number!!!!!!!!!!!!!!!
[...Array(num).keys()]
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!