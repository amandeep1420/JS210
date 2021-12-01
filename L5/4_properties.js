// #1

function objectHasProperty(object, string) {
  return Object.keys(object).includes(string);
}

// their solution

function objectHasProperty2(object, string) {
  let keys = Object.keys(object);
  return keys.indexOf(string) !== -1;
}

// -----

// #2

let incrementProperty = (object, string) => {
  let keys = Object.keys(object);
  keys.indexOf(string) !== -1 ? object.string += 1 : object[string] = 1;
  return object.string;
};

// their solution is different

// -----

// #3

function copyProperties(obj1, obj2) {
  let copyCount = 0;
  
  for (let property in obj1) {
    obj2[property] = obj1[property];
    copyCount += 1;
  }
  
  return copyCount;
}

// theirs is basically the same, just better param names

// -----

// #4

function wordCount(string) {
  let countObj = {};
  
  let wordArray = string.split(' ');
  
  for (let index = 0; index < wordArray.length; index += 1) {
    let word = wordArray[index];
    countObj[word] ? countObj[word] += 1 : countObj[word] = 1;
  }
  
  return countObj;
}

// challenge: build a wordCount function that uses the objectHasProperty and 
// incrementProperty functions from earlier