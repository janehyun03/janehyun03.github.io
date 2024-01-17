function isPangram(string) {
  let letter = "abcdefghijklmnopqrstuvwxyz";
  string = string.toLowerCase();
  string = string.split("");
  letter = letter.split("");

  string.forEach((e) => {
    if (letter.includes(e) == true) {
      letter.splice(letter.indexOf(e), 1);
    }
  });

  console.log(letter);
  if (letter.length != 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
