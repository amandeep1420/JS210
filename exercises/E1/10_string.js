let utf16Value = function(string) {
  let sum = 0;
  
  for (let index = 0; index < string.length; index += 1) {
    sum += string.charCodeAt(index);
  }
  
  return sum;
}

let result = utf16Value('Four score');         // 984
console.log(result);