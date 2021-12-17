function transactionsFor(key, list) {
  return list.filter(obj => obj.id === key);
}

function isItemAvailable(item, list) {
  let entries = transactionsFor(item, list);
  let count = entries.reduce((total, entry) => {
    return entry.movement === 'in' ? total + entry.quantity : total - entry.quantity;
    }, 0);
  console.log(count);
  return count > 0;
}

// weird syntax issues here with the ternary; an if/else conditional seems to be preferable
// no, I just forgot to use an explicit return

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];



console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true