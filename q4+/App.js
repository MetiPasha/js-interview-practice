let time_ele = document.getElementsByClassName("time")[0];
let start_btn = document.getElementById("start");
let lap_btn = document.getElementById("lap");
let reset_btn = document.getElementById("reset");
let l1 = document.getElementById("lap1");
let l2 = document.getElementById("lap2");
let l3 = document.getElementById("lap3");
let l4 = document.getElementById("lap4");
let l5 = document.getElementById("lap5");

let seconds = 0;
let interval = null;
let ctr = 0;

start_btn.addEventListener("click", start);
lap_btn.addEventListener("click", lap);
reset_btn.addEventListener("click", reset);

function timer() {
  seconds++;

  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let sec = seconds % 60;

  if (sec < 10) sec = "0" + sec;

  if (mins < 10) mins = "0" + mins;

  if (hrs < 10) hrs = "0" + hrs;

  time_ele.innerHTML = `${hrs}:${mins}:${sec}`;
}

function start() {
  if (interval) {
    return;
  }
  interval = setInterval(timer, 1000);
}

function lap() {
  if (ctr % 5 == 1) l1.innerHTML = "Lap " + ctr + ":  " + time_ele.innerHTML;
  if (ctr % 5 == 2) l2.innerHTML = "Lap " + ctr + ":  " + time_ele.innerHTML;
  if (ctr % 5 == 3) l3.innerHTML = "Lap " + ctr + ":  " + time_ele.innerHTML;
  if (ctr % 5 == 4) l4.innerHTML = "Lap " + ctr + ":  " + time_ele.innerHTML;
  if (ctr % 5 == 0) l5.innerHTML = "Lap " + ctr + ":  " + time_ele.innerHTML;
  ctr++;
}

function reset() {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  ctr = 0;
  time_ele.innerHTML = "00:00:00";
}
