// function anagrams(string, words) { // assuming words is an array, cannot do class-based version yet
//   let stringCharacters = string.split('');
//   let checkCharacters  = [...new Set(string.split(''))];
  
//   return words.filter(anagram => {
//     let anagramChars = anagram.split('');
    
//     return checkCharacters.every(char => { // don't forget to return at each step of the way
//       let stringCheck  = stringCharacters.filter(el => el === char);
//       let anagramCheck = anagramChars.filter(el => el === char);
//       return stringCheck.length === anagramCheck.length;
//     });
//   });
// }

// let result = anagrams('cat', ['tac', 'tca', 'tacc', 'act']);
// console.log(result);

function spoonerise(phrase) {
	let [word1, word2] = phrase.split(' ');
	
	let word1Chars = [...word1];
	let word2Chars = [...word2];
	
	let word1Removed = grabFirst(word1Chars);
	let word2Removed = grabFirst(word2Chars);
	
	let firstWord  = word2Removed.concat(word1Chars).join('');
	let secondWord = word1Removed.concat(word2Chars).join('');
	
	return firstWord + ' ' + secondWord;
}

function grabFirst(chars) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let removed  = [];
	
	while (!vowels.includes(chars[0])) {
		removed.push(chars.shift());
	}
	
	return removed;
}

let result = spoonerise("chow mein");
console.log(result);