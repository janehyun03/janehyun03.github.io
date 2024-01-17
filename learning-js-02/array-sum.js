let styles = new Array();
styles = ["Jazz", "Blues"];
styles.push("Rock-and-Roll");

let arrLength = styles.length;
// odd number
if (arrLength % 2 == 1) {
  styles.splice(arrLength / 2 - 0.5, arrLength / 2 - 0.5, "Classics");
}

console.log(arrLength / 2 - 0.5);
console.log(styles);

styles.shift(styles.indexOf[0]);
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles);

function sumInput() {
  let inputNum = prompt("please type numbers");
  let arrNum = [];
  let sum = 0;

  // a non-numeric value, an empty string, or presses “Cancel”.
  while (inputNum !== null || inputNum !== "" || inputNum !== NaN) {
    console.log(typeof inputNum);
    arrNum.push(inputNum);

    sum += inputNum;
  }
}
