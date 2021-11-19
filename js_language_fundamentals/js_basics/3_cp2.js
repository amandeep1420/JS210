if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}

/*
Path 1: condition1 --> condition2
Path 2: condition1 --> not condition2
Path 3: not condition1
Path 4: not condition1 --> condition4
Path 5: not condition1 --> condition4 --> condition5
*/

// good to review