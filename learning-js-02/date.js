let now = new Date();
console.log(now);

let wikiArticle = { datePublished: "11/24/2023" };
let datePublished = new Date(wikiArticle.datePublished);

const diffTime = Math.abs(datePublished - now);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// moment.js : use library!!!
console.log(diffTime);
console.log(diffDays);
