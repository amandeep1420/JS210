function union(arr1, arr2) {
  let newArr = [];
  
  arr1.forEach(el => !newArr.includes(el) ? newArr.push(el) : null)
  
  arr2.forEach(el => !newArr.includes(el) ? newArr.push(el) : null)
  
  return newArr;
}

let newSet = new Set([1, 1, 1, 2, 3]);

newSet; // Set(3) { 1, 2, 3 }

Array.isArray(newSet); // false

let meow = cat => if (cat) console.log(cat);