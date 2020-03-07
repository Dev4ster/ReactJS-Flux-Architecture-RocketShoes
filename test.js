const cart = [
  { id: 1, amount: 3 },
  { id: 2, amount: 2 },
  { id: 3, amount: 1 }
];

const result = cart.reduce((amount, product) => {
  amount[product.id] = product.amount;
  return amount;
}, {});

console.log(result);
