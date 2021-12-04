const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 5

// keys in array objects that are not non-negative integers do not count toward
// the value returned by the length property; they are not treated as elements of the array

// review the verbiage here, too