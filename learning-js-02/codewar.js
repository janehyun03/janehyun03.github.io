// function expandedForm(num) {
//   // Your code here
//   num = num.toString();
//   num = num.split("");
//   let arr = [];
//   maxIndex = num.length - 1;

//   for (let i = 0; i < num.length; i++) {
//     arr.push(num[i] * 10 ** maxIndex);
//     maxIndex--;
//   }
//   arr = arr.filter((e) => {
//     console.log(e);
//     if (e == 0) {
//       return false;
//     } else {
//       return true;
//     }
//   });
//   // console.log(arr);
//   return console.log(arr.join(" + "));
// }
// expandedForm(42);
// expandedForm(12);
// expandedForm(70304);

// function comp(array1, array2) {
//   if (array1 == null || array2 == null) return false;
//   array1.sort((a, b) => a - b);
//   array2.sort((a, b) => a - b);
//   return array1.map((v) => v * v).every((v, i) => v == array2[i]);
// }

// let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// let a2 = [231, 14641, 20736, 361, 25921, 361, 20736, 361];

// console.log(comp(a1, a2));

function pigIt(str) {
  let punsctuation = [".", ",", ":", "!", "?"];
  str = str.split(" ");
  let word;
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    word = str[i].split("");
    let firstWord = word.shift();
    word.push(firstWord);

    let isPunctuation = punsctuation.some((e) => {
      return word.includes(e);
    });

    if (!isPunctuation) {
      word.push("ay");
    }

    word = word.join("");
    arr.push(word);
  }
  console.log(arr.join(" "));
  return arr.join(" ");
}

pigIt("Pig latin is cool");
pigIt("Hello world !");
