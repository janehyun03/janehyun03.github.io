console.log("02.js");

// let doorA = "open";
// switch (doorA) {
//   case "open":
//     console.log("you can come in");
//     break;
//   default:
//     console.log("closed");
// }

// function goThroughDay(currentTime) {
//   switch (currentTime) {
//     case 900:
//       console.log("eat breakfast");
//       break;
//     case 1200:
//     case "lunch":
//       console.log("eat lunch");
//       break;
//     case 400:
//       console.log("go to class");
//       break;
//     case 1000:
//       console.log("go to sleep");
//       break;
//     case 1100:
//       console.log("watch a movie because");
//       break;
//   }
// }
// goThroughDay(900);

// function makeupYourDay(currentTime) {
//   switch (currentTime) {
//     case 600:
//       console.log("work work work");
//       break;
//     case 1200:
//       console.log("eat lunch with kiki");
//       break;
//     case 1600:
//       console.log("take coding class");
//       break;
//     case 2400:
//       console.log("go to sleep");
//       break;
//     default:
//       console.log("life in Canada");
//   }
// }

// makeupYourDay(600);
// makeupYourDay(1200);
// makeupYourDay(1600);
// makeupYourDay(2400);
// makeupYourDay(100);
function temperature(currentTemperature) {
  if (currentTemperature <= 10) {
    for (let i = currentTemperature; i <= 10; i += 2) {
      console.log(i);
    }
  } else if (currentTemperature > 50) {
    while (currentTemperature > 50) {
      console.log(currentTemperature);
      currentTemperature -= 2;
    }
  } else {
    console.log("current temperature is just good!");
  }
}
temperature(-23);
temperature(71);
temperature(45);

console.log("end");
