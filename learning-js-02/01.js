console.log("01.js");

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// let x = 1;

// while (x < 4) {
//   console.log(`I am on ${x}day`);
//   x++;
// }

let j = 0;

while (j <= 10) {
  // 짝수일 때 : even number
  if (j % 2 == 0) {
    console.log(`${j}`);
  }
  j++;
}

for (let f = 0; f < 10; f++) {
  if (f == 2) continue;
  if (f == 4) continue;
  if (f == 8) break;
  console.log("f:" + f);
}

console.log("end");

let a = 0;
let b = 25;
for (; b <= 100; ) {
  console.log(`b:${b}`);
  b += 25;
  a++;
}
console.log(`a:${a}`);
