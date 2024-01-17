// FizzBuzz

let output = [];
for (let i = 0; i <= 100; i++) {
  output.push(i);
  if (i == 0) {
    continue;
  }
  if (i % 3 == 0) {
    output[i] = "fizz";
  }
  if (i % 5 == 0) {
    output[i] = "buzz";
  }
  if (i % 3 == 0 && i % 5 == 0) {
    output[i] = "fizzbuzz";
  }
  console.log(output[i]);
}
