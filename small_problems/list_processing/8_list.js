function buyFruit(list) {
  return list.flatMap(pair => Array(pair[1]).fill(pair[0]));
}

let result = buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

console.log(result);