function findDup(arr) {
  let dupe;
  
  arr.forEach(function(el, index) {
    if (index !== arr.indexOf(el)) dupe = el;
  });
  
  return dupe;
}

// a submitted solution 

function findDup(arr) {
  return arr.find(el => arr.indexOf(el) !== arr.lastIndexOf(el));
}