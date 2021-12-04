// const countOccurrences = function(vehicles) {
//   let counts = {};
  
//   for (let i = 0; i < vehicles.length; i += 1) {
//     let el = vehicles[i];
//     counts[el] ? counts[el] += 1 : counts[el] = 1;
//   }
  
//   Object.entries(counts).forEach(subArr => console.log(`${subArr[0]} => ${subArr[1]}`));
// };

// examine the below solution to learn


function countOccurrences(array) {
  let count = array.reduce((obj, ele) => {
    obj[ele] ? obj[ele] += 1 : obj[ele] = 1;
    return obj;
  }, {});

  Object.entries(count).forEach(arr =>
    console.log(`${arr[0]} => ${arr[1]}`));
}