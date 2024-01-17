// function computer(computerName = "my computer") {
//   computerName = "<h1>" + computerName + "</h1>";
//   console.log(computerName);
// }
// computer();
// computer("Thomas's computer");

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   return console.log("Did parents allow you?");
//   return console.log("Did parents allow you?aaa");
// }
// checkAge(17);

// function min(num1, num2) {
//   // if (num1 > num2) {
//   //   return console.log(num2);
//   // } else {
//   //   return console.log(num1);
//   // }
//   return num1 > num2 ? console.log(num2) : console.log(num1);
// }
// min(2, 5);
// min(3, -1);
// min(1, 1);

// function pow(x, n) {
//   // return n !== 0 ? console.log(x ** n) : console.log(1);
//   // return console.log(Math.pow(num1, num2));
//   return console.log(x ** n);
// }

// pow(3, 2);
// pow(3, 3);
// pow(1, 100);
// pow(2, 0);

// jimmy = 4;

// console.log(jimmy);

function ask(question, yes, no) {
  if (console.log(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function () {
    console.log("You agreed.");
  },
  function () {
    console.log("You canceled the execution.");
  }
);
