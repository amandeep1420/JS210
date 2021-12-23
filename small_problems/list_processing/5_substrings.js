function leadingSubstrings(string) {
  return string.split('').map((_, index) => string.slice(0, index + 1));
} // can use [...string] instead, which mimics the functionality of split('')

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]