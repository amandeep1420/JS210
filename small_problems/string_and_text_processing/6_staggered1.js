function staggeredCase(string) {
  return [...string].map((char, idx) => idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
                    .join('');
}