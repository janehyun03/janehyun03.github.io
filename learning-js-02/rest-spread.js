//assignment
//crate a function that takes any number of parameters and joins together

function joinsStrings(...args) {
  // console.log(args);
  return args.join("");
}
console.log(joinsStrings("a", "b", "c", "d", "e"));

let colors1 = ["red", "blue", "yellow", "green"];
let colors2 = ["gray", "black", "brown", "pink"];
let colorMerge = [...colors1, ...colors2];
console.log(colorMerge);

let myBlogPost01 = {
  id: 1,
  name: "my first post",
  body: "I'm teaching today",
};
let myBlogPost02 = { ...myBlogPost01, id: 2, name: "my second post" };
console.log(myBlogPost01, myBlogPost02);

// a를 복제하는 방법, 얘네들은 각기 다른 오브젝트이다!!
let a = { color: "red" };
let aClone = { ...a };

let myName = { "first name": "Jihyun", "last name": "Yi" };
let englishName = {
  ...myName,
  "first name": "Jane",
};

console.log(myName, englishName);
