const array1 = ["Davisville", "St.Clair", "SummerHill", "Rosedale"];

//assignment\:
//use the forEach
//console.log all of them

array1.forEach((element, index, array) => {
  console.log(element, index, array);
});

// forEach(callbackFn)
// forEach(callbackFn, thisArg)

let num = [50, 51, 52, 53];

//use the forEach function
//to mutate the array
//and increment each number by 1

let mu = num;
num.forEach((e, i) => {
  mu[i] = e + 1;
});

console.log(num);
console.log(mu);

let array2 = [
  { name: "chocolate" },
  { name: "vanilla" },
  { name: "strawberry" },
];

let myFavoriteIceCream = array2.find((e) => {
  return e.name == "vanilla";
});

console.log(myFavoriteIceCream);

console.log(
  array1.filter((e) => {
    return e.length < 10;
  })
);
console.log(array1);
