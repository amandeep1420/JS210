const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // 3

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python', <1 empty item> ]
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // ['Javascript']
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['Javascipt', <2 empty items>]
console.log(languages.length); // 3

languages.length = 1;
languages[2] = 'Python';
console.log(languages); // ['Javascript', <1 empty item>, 'Python']
console.log(languages[1]); // undefined
console.log(languages.length); // 3

// arrays with empty slots are sometimes referred to as 'sparse arrays'
// the length property can be explicitly set
// setting it to a value less than the current length truncates an array;
// resetting it to a higher value does not restore the values that were truncated.
// setting it to a value greater than the current array creates 'empty slots' in an 
// array; these are not elements. they return undefined when referenced.