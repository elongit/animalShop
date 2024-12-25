const items = [
  {
    id: 1,
    name: "apple",
    quanity: 10,
    price: 20,
  },
  {
    id: 2,
    name: "orange",
    quanity: 30,
    price: 20,
  },
  {
    id: 3,
    name: "strawberry",
    quanity: 20,
    price: 20,
  },
];
function cart(item) {
  const isItemInCart = items.find((cartItem) => cartItem.id === item);
  if (isItemInCart) {
    return isItemInCart.name
  } 
}

console.log(cart(2));

