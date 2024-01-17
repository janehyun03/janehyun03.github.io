// let obj = { a: "alpha", b: "beta" };
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

let wikiArticle = { country: "Poland", county: "Gniezno" };
console.log(wikiArticle?.country);
// console.table(wikiArticle);
// console.log(Object.entries(wikiArticle));
// console.table(Object.entries(wikiArticle));

let jsonString = JSON.stringify(wikiArticle);
console.log(jsonString);
console.log(jsonString.length);
let jsonParse = JSON.parse(jsonString);
console.log(jsonParse);
console.log(jsonParse.country);
