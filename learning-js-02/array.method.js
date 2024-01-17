let classmates = [];
classmates = ["Jane", "Yesong", "Felipe", "Gabriel"];
let output = "";

for (let i = 0; i < classmates.length; i++) {
  output += classmates[i] + " ";
}

// pop(),shift(),unshift(),push() //modified
// console.log(output.trim());
// console.log(classmates.join());
// console.log(classmates.join(" "));

// console.log(classmates.pop()); //꺼낸 자료를 return 시킨다 (delete last element of array)
// console.log(classmates.shift()); //꺼낸 자료를 return 시킨다 (delete first element of array)
// console.log(classmates);
// console.log(classmates.unshift("jane")); //배열 길이를 반환 return the length of array
// classmates.pop(); // 마지막 자료를 꺼내서 없앰
// console.log(classmates);

// .pop()
// .push()
// .indexOf("Jane") // 인덱스넘버 0
// .length()
// .shift()  // 첫번째 요소를 꺼내서 없앰
// .unshift("Jane") // 배열의 앞에 요소를 추가함 (배열길이를 반환)
// .split()
// .splice(추가시작인덱스번호, 삭제요소인덱스번호, 추가할 아이템1, 추가할 아이템2, ...) // 삭제된 배열값을 리턴
// 요소가 없는 빈 배열 불러오면 undefined

classmates.push("Karen");
classmates.push("Kevin");
classmates.push("Raymund");

console.log(classmates[5]);
console.log(classmates);

let arrayLength = classmates.length;
for (let i = 0; i < arrayLength; i++) {
  classmates.pop();
}

console.log(classmates);
console.log(classmates[0]);

classmates.push("Sarah", "Diana");
// classmates.push("Diana");
console.log(classmates);

// .isArray(arr); //안에 있는 인수가 배열인지 아닌지 판단해줌
// .replaceAll("바꿀내용", "바꾼결과");
// .join() //arr의 내용을 합쳐주는 역할
// let a =["a","b","c"]  :  a.join("_") -->  a_b_c
// .some(returns true if any one of them meets the condition)
// .every(returns true if ALL of them meets the condition)
// .flat() : flatten the array
// let arr = [1,2,[3,4]]; --> arr = arr.flat() <---[1,2,3,4]
// .filterRange(arr,a,b) : a < arr.element < b
