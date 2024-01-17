// assigment:
// You are writing a program for full day reservation at a a school
// Function 1 will have a parameter of a weekday. (Monday,Tuesday)
// returns true if that day is available. false if not.

// Function 2 will have a parameter of a weekday. (Monday,Tuesday)
// returns true and modify the array if that day is available. false if not available.

let weekday = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
// element, items....
function scheduleOfSchool(day) {
  for (let i = 0; i < weekday.length; i++) {
    if (weekday.includes(day)) {
      return console.log(true);
    } else {
      return console.log(false);
    }
  }
}

function modifyScheduleOfSchool(day) {
  for (let i = 0; i < weekday.length; i++) {
    if (weekday.includes(day)) {
      return console.log(true, weekday.splice(weekday.indexOf(day), 1));
    } else {
      return console.log(false);
    }
  }
}

scheduleOfSchool("Monday");
scheduleOfSchool("Tuesday");
modifyScheduleOfSchool("Monday");
scheduleOfSchool("Monday");
