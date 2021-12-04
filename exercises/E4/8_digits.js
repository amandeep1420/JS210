function digitList(num) {
  return String(num).split('').map(str => parseInt(str, 10));
}

// the hyper-dense solutiohn

function dense(num) {
  return [...String(num)].map(Number);
}

// geeze