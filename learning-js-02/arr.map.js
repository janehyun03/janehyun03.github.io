//.map()은 for loop!!!
//복사해서 새로운 배열을 리턴해 줌 (본래 array에는 영향을 미치지 않음)

let lotr = ["Bilbo", "Gandalf", "Nazgul"];

// lotr.map((element, index, array) => {
//   //insert code here
//   // console.log(element, index, array);
//   return console.log(element[0]);
// });
//use .map function on this array and return the first letter of element

let myNewArray = lotr.map((element, index, array) => {
  //insert code here
  // console.log(element, index, array);
  return element[0];
});

console.log(myNewArray);
console.log(lotr.map((element) => element[0]));

arr0 = lotr.map((a) => {
  if (a === "Bilbo") {
    return "ice";
  }
  return a;
});

console.log(arr0);

arr1 = lotr.map((a, b) => {
  if (b === 2) {
    return "water";
  }
  return a;
});

console.log(arr1);

arr2 = lotr.map((a, b, c) => {
  if (c[b] === "Gandalf") {
    return "blue";
  }
  return a;
});

console.log(arr2);
console.log(lotr);

let arrNum = [1, 2, 3];
//using the .map() deliver this output
//["customer1","customer2","customer3"]

let output = arrNum.map((e, i, arr) => {
  console.log(e, i, arr);
  return "customer" + e;
  // "customer" + e;
});

console.log(output);

let arrName = [{ name: "Aaron" }, { name: "Ben" }, { name: "Connor" }];

let addDate = arrName.map((e) => {
  //object에 새로운 key.value할당하는 방법
  //reference가 같으니까 함께 변함 (mutable)
  e.date = "1/1/1990";
  return e;
  // 얘는 새로운 array를 만들어서 return해 줌.
  // return { ...e, date: "1/1/1990" };
});

console.log(addDate);
console.log(arrName);

function compareNumeric(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}

let arr = [1, 2, 15];

arr.sort(compareNumeric);

console.log(arr); // 1, 2, 15

let num = [1, 100, 10, 2, 15];

//sort this array
//1,2,10,15,100

// The items are sorted as strings by default.
console.log(
  num.sort((a, b) => {
    //오름차순으로 정렬
    return a - b;
    //내림차순으로 정렬
    // return b - a;
  })
);
console.log(num.sort());
console.log(num.sort().reverse());
