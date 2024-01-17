// assignment: declare an array of numbers as words
//one two three four
//try using spilce to remove two and three

let numbers = ["one", "two", "three", "four"];

// numbers.splice(1, 2);
//numbers.splice(start index, delete count, items);
//it means deleting 2 elements at index 1
console.log(numbers);

//slice()
//delete elements
//arr.slice(0,arr.length -1) 마지막 요소만
//to mutate : means to modify

numbers.slice(2);
numbers.slice(); //reference가 아니라 copy임
console.log(numbers);
let b = numbers;
b[0] = "jane"; //reference라서 b에 있는 값을 변경해도 numbers의 값이 변함
console.log(b);
console.log(numbers);

//concat(), slice() is immutable
console.log(b.concat(numbers));
console.log(numbers.concat(numbers));
