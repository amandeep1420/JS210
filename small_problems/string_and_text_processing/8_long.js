function wordLengths(string) {
  if (!string) {
    return [];
  } else {
    let words = string.split(' ');
    return words.map(word => `${word} ${word.length}`);
  }
}

// why did I think that an inline return after an if was invalid?
// it's illegal in node...why do so many solutions have it? what am I forgetting?