let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return 0;
}

let sum = 0;

function sumObj(obj) {
  if (isEmpty !== 0) {
    for (let key in obj) {
      sum = sum + obj[key];
    }
    return console.log(sum);
  } else {
    return console.log(isEmpty);
  }
}
isEmpty(salaries);
sumObj(salaries);

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
  console.log(obj);
}
multiplyNumeric(menu);

// To access a property
// obj.property;
// obj["property"];
// obj[varWithKey];
// for (let key in obj)

let wikiArticle = {
  "Best Film": "Lacombe,Lucien",
  "Best Actor": "Jack Nicholson",
  "Best Actress": "Joanne Woodward",
};

let cloneWikiArticle = {};
// cloneWikiArticle = wikiArticle; //pointing a reference

for (let key in wikiArticle) {
  cloneWikiArticle[key] = wikiArticle[key];
}
cloneWikiArticle["Best Film"] = "Chinatown";

console.log(wikiArticle);
console.log(cloneWikiArticle);
