let shoppingList = [];
let wishList = [];

let cookingPan = { name: "Cooking Pan", cost: 20 };

addToList(shoppingList, { name: "ticket", cost: 5 });
addToList(shoppingList, { name: "ticket", cost: 5 });
addToList(shoppingList, { name: "ticket", cost: 5 });

addToList(wishList, { name: "Cooking Pan", cost: 20 });
addToList(wishList, { name: "Cooking Pan", cost: 20 });
// addToList(wishList, cookingPan);
// addToList(wishList, cookingPan);

function addToList(list, item) {
  // let itemCloned = { ...item };
  // if (itemCloned.name == "Cooking Pan") {
  //   itemCloned.cost = itemCloned.cost * 0.5;
  // }
  // list.push(itemCloned);
  if (item.name == "Cooking Pan") {
    item.cost = item.cost * 0.5;
  }
  list.push(item);
}

function sumCost(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i].cost;
  }
  return sum;
}

console.log(wishList);
console.log("wish list:" + sumCost(wishList));
console.log(shoppingList);
console.log("shopping list:" + sumCost(shoppingList));
