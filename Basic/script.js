const dateCurrent = new Date();
console.log(String(dateCurrent).split(" ")[0], "hello");

function returnDay(day) {
  if (day === "Mon") {
    return "Monday";
  } else if ("Tue") {
    return "Tuesday";
  } else {
    return day;
  }
}
console.log(
  "Today Is -",
  returnDay(String(dateCurrent).split(" ")[0]),
  "Current Day"
);

// What I learn
const daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(dateCurrent.getHours());
console.log(dateCurrent.getFullYear());
console.log(daylist[dateCurrent.getDay()]);

// Question --> Need to print 2024 to 2050 1jan is sunday
let year;
for (year = 2022; year <= 2050; year++) {
  const d = new Date(year, 0, 1);
  console.log(d);
  if (d.getDay() === 0) {
    console.log("1 jan is sunday in year", year);
  }
}
function print_current_page() {
  // Call the window.print() method to initiate the printing of the current page
  window.print();
  console.log(document.URL, "URL");
}

// window.print()
// document.url();
