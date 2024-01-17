//array.reduce()

let arr = [1, 2, 3, 4];

let sum = arr.reduce((accumulate, currentValue, currentIndex, array) => {
  return accumulate + currentValue;
  // 하나의 value만을 반환
}, 0);
// .reduce(콜백함수, initial Value(optional))
console.log(sum);

let arr1 = [25, 50, 25, 50, 25];

//카운트를 하는 방법
let numberOfQuarters = arr1.reduce((a, b) => {
  if (b === 25) {
    //여기서 accumulate(누산기는 sum = 0 의 역할을 하는듯)
    // console.log(a);
    //현재값
    // console.log(b);
    return a + 1;
    // return a + (b === 25 ? 1 : 0);
  }
  return a;
}, 0);
// 이니셜넘버 안 쓰면 초기값은 첫번째값, 그러므로 얘는 무조건 써줘야 함

console.log(numberOfQuarters);

let arr2 = [7, 14, 77];

let sum1 = arr2.reduce((accumulate, cur) => {
  console.log(accumulate, cur);
  return accumulate + cur;
});

console.log(sum1);
