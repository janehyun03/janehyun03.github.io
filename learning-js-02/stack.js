// Stack
// FILO : First in Last out
// push(), pop()

let arr = [];

// for (let i = 0; i < 5; i++) {
//   arr.push("plate" + i);
// }
// console.log(arr);

// Queue
// FIFO : First in First out
// push(),shift()

for (let i = 0; i < 5; i++) {
  arr.push("person" + i);
  console.log(arr);
}
for (let i = 0; i < arr.length; i++) {
  arr.shift();
  console.log(arr);
}
