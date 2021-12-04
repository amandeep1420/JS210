function invoiceTotal(amount1, amount2, amount3, amount4) {
  return amount1 + amount2 + amount3 + amount4;
}

invoiceTotal(20, 30, 40, 50);          // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?


// refactored

function invoiceTotal(...amounts) {
  return amounts.reduce((amt1, amt2) => amt1 + amt2);
}

// book solution - uses for loop

function invoiceTotal(...args) {
  let total = 0;

  for (let i = 0; i < args.length; i += 1) {
    total += args[i];
  }

  return total;
}