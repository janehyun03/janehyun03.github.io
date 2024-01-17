//assignment
//write a try catch clause
//inside the try, prompt the user to enter a number between 1 and 100
//throw an exception or error if the user inputs a number outside of 1 and 100
//finally
//display a paragraph that their number has benn recorded

try {
  let myPrompt = prompt("please enter the number.", "1-100");
  if (myPrompt > 100 || myPrompt < 1){
    throw
  }
} catch (e) {
  alert(e.name); 
} finally {
  alert("try agian");
}
