function wordCap(string) {
  let words = string.match(/\S+/g);
  return words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
              .join(' ');
}