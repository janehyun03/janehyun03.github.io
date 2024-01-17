let ask = (question, yes, no) => {
  if (console.log(question)) yes();
  else no();
};

ask(
  "Do you agree?",
  () => {
    console.log("You agreed.");
  },
  () => {
    console.log("You canceled the execution.");
  }
);
