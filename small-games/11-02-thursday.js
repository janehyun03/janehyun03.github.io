"use strict";

let userPickNum = prompt("please pick a number (from 1-100)");
let answer = 100;

// userPickNum = userPickNum / 1;
// console.log(typeof userPickNum);

if (userPickNum > answer) {
  alert("too big");
} else if (userPickNum < answer) {
  alert("too small");
} else if (userPickNum == answer) {
  alert("just right");
} else {
}
