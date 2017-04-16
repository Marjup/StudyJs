// Program for displaying current day and time
// in console in format:
// Today is: <current day>.
// Current time is: <HH AM/PM : MM : SS>

var currentDate = new Date();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var currentHour = currentDate.getHours();
var currentMinutes = currentDate.getMinutes();
var currentSeconds = currentDate.getSeconds();

var amOrPm = currentHour >= 12 ? ' PM ' : ' AM ';
var trueHour = currentHour > 12 ? currentHour - 12 : currentHour;
if (currentHour === 0) {
    trueHour = 12;
}

console.log("Today is: " + days[currentDate.getDay()] +'.');
console.log("Current time is: " + trueHour + amOrPm + ': ' + currentMinutes + ' : ' + currentSeconds);
