function wordSizes(words) {
  words = words.replace(/[^a-z ]/gi, ''); // I checked for valid characters from the get-go
  const wordsArray = words.split(' ');    // adding a separate step within the for loop
  const count = {};                       // would've been simpler, as I wouldn't have to 
                                          // check for spaces
  for (let i = 0; i < wordsArray.length; i += 1) {
    let wordSize = wordsArray[i].length;
    if (wordSize === 0) {
      continue;
    }

    count[wordSize] = count[wordSize] || 0;
    count[wordSize] += 1;
  }

  return count;
}