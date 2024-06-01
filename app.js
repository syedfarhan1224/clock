var daysName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var monthsName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function updateClock() {
  var now = new Date();

  var hour = document.getElementById("hour");
  var minute = document.getElementById("minute");
  var second = document.getElementById("second");
  var ampm = document.getElementById("ampm");

  var day = document.getElementById("day");
  var date = document.getElementById("date");
  var month = document.getElementById("month");
  var year = document.getElementById("year");

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var amPmText = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  hour.innerText = padZero(hours);
  minute.innerText = padZero(minutes);
  second.innerText = padZero(seconds);
  ampm.innerText = amPmText;

  day.innerText = daysName[now.getDay()];
  date.innerText = padZero(now.getDate());
  month.innerText = monthsName[now.getMonth()];
  year.innerText = now.getFullYear();
}

function padZero(number) {
  return number < 10 ? "0" + number : number;
}

setInterval(updateClock, 1000);
updateClock();
