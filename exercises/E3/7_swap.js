function swap(string) {
  let words = string.split(' ');
  
  let wordSubArrays = words.map(word => word.split(''));
  
  return wordSubArrays.map(function(subArr){
    let end = subArr.length - 1;
    [subArr[0], subArr[end]] = [subArr[end], subArr[0]];
    return subArr.join('');
  }).join(' ');
}