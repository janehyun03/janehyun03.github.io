let arr = ["Oct", "Nov", "Dec", "dec"];

function arrFilter(arr, target) {
  return arr.filter((element) => (element == target ? false : true));
  // return arr.filter(function (element) {
  //   if (element == target) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // });
}

// The filter() method is an iterative method
// filter는 truthy value를 return
// otherwise not return falsy value
// this는 callback function을 가리킴
// If no elements pass the test, an empty array is returned.

// console.log(arr.filter((x) => x.toLowerCase() !== x));

let arr2 = ["Coca Cola", "Pepsi", "Sprite", "Water"];

function removeWater(arr, target) {
  return arr.filter((e) => e !== target);
}

// console.log(removeWater(arr2, "Water"));

let arr3 = [
  { name: "Jim", order: "Iced Coffee" },
  { name: "Joe", order: "Americano" },
  { name: "Jan", order: "Chai tea" },
];
function whoWantIcedCoffee(arr, tar) {
  // return arr.filter((e, i, arr) => console.log(e.order, i, arr));
  return arr.filter((e) => e.order !== tar);
}

// console.log(whoWantIcedCoffee(arr3, "Iced Coffee"));
// take out, filter out
function personName(arr, tar) {
  return arr.filter((e) => e.name !== tar);
}

console.log(personName(arr3, "Joe"));
