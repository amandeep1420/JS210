function missing(arr) {
  let newArr = [];
   
   for (let currentNum = arr[0] + 1; currentNum < arr[arr.length -1]; currentNum +=1) {
     if (arr.indexOf(currentNum) === -1) newArr.push(currentNum);
   }
   
   return newArr;
}