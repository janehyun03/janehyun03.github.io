// let ourBoldedText = "Most Famous Skateboarder";
// let Founded = 2013;
// let wikiArticle = {
//   Sport: "Competitive skateboarding",
//   Founder: "Tim McFerran",
//   Country: "United States",
//   "Official website": "worldskateboardinginternational.com",
//   [ourBoldedText]: "2 million USD",
//   Founded,
// };

// // wikiArticle.Sport = "1223";
// // wikiArticle["Official website"] = 12131;

// let myVariable = "Discovered by";

// wikiArticle = {
//   [myVariable]: "Fischer et al.",
//   "Discovered date": "April1,2003",
//   "Discovered method": "Radial velocity",
// };

// console.log(wikiArticle);

// let codes = {
//   49: "Germany",
//   41: "Switzerland",
//   44: "Great Britain",
//   // ..,
//   1: "USA",
// };

// for (let code in codes) {
//   console.log(code);
// }

// let user = {};
// user.name = "John";
// // user["name"] = "John";
// user["surname"] = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user);

let schedule = {};

function isEmpty(schedule) {
  for (let key in schedule) {
    return false;
  }
  return true;
}

console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));
