function clock() {
  let hours = document.querySelector(".hours");
  let minutes = document.querySelector(".minutes");
  let seconds = document.querySelector(".seconds");
  let period = document.querySelector(".period");
  let dayElement = document.querySelector(".day");
  let monthElement = document.querySelector(".month");
  let yearElement = document.querySelector(".year");

  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ampm = h >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  h = h % 12 || 12;

  // Add leading zeros if needed
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // Update clock elements
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  period.innerHTML = ampm;

  // Update date elements
  let day = now.getDate();
  let month = now.toLocaleString('default', { month: 'short' });
  let year = now.getFullYear();

  dayElement.innerHTML = day;
  monthElement.innerHTML = month;
  yearElement.innerHTML = year;
}

setInterval(clock, 1000);

