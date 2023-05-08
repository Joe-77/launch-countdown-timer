let countDate = new Date("Dec 31, 2023 23:59:59");

var counter = setInterval(() => {
  let dateNow = new Date().getTime();

  const dateDiff = countDate - dateNow;

  var days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  var hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

  var second = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("second").innerHTML = second;
}, 1000);
