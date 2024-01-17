// assignment:
// filterRange(arr,a,b)
// a < arr.element < b

function filterRange(arr, min, max) {
  return arr.filter((e) => {
    if (min <= e && max >= e) return e;
  });
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered); //matching values
console.log(arr); //not modified

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

function filterRangeInPlace(array, min, max) {
  return (arr = array.filter((e, i, array) => {
    if (min <= e && max >= e) {
      array[i] = e;
      return array;
    }
  }));
}
let arr = [5, 3, 8, 1];
console.log(filterRangeInPlace(arr, 1, 4)); // removed the numbers except from 1 to 4

console.log(arr); // [3, 1]

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    console.log("arr의 i:" + i, arr, val);
    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      // splice(start, deleteCount)
      console.log(
        `만일 조건식이 true면 splice(스타트인덱스는${i},두번째 인덱스 삭제)" ${i}`,
        arr
      );
      i--;
      console.log("줄인후의" + i);
    }
  }
}

let arr1 = [5, 3, 8, 1];
filterRangeInPlace(arr1, 1, 4); // removed the numbers except from 1 to 4
console.log(arr1); // [3, 1]
