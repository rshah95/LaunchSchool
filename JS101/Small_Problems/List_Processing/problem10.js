let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function isItemAvailable(id, array) {
  let netObj = {};
  array.forEach(obj => {
    if (netObj[obj['id']]) {
      if (obj['movement'] === 'in') {
        netObj[obj['id']] += obj['quantity'];
      } else netObj[obj['id']] -= obj['quantity'];
    } else {
      let net = obj['quantity'];
      if (obj['movement'] === 'out') net *= -1;
      netObj[obj['id']] = net;
    }
  })

  return netObj[id] > 0;
}

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(105, transactions));
console.log(isItemAvailable(103, transactions));