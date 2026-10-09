let sec = 10;
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const outputSec = document.getElementById("sec");
const outputMessage = document.getElementById("message");
let interval;

function startTimer() {
  sec--;

  if (sec <= 9) {
    outputSec.innerHTML = "0" + sec;
  } else {
    outputSec.innerHTML = sec;
  }

  if (sec <= 0) {
    clearInterval(interval);
    outputMessage.innerHTML = "Time's up!";
  }
}

startBtn.addEventListener("click", function(){
  clearInterval(interval);
  if (sec > 0) {
    interval = setInterval(startTimer, 1000);
  }
});

stopBtn.addEventListener("click", function(){
  clearInterval(interval);
});

resetBtn.addEventListener("click", function(){
  clearInterval(interval);
  sec = 10;
  outputSec.innerHTML = "10";
  outputMessage.innerHTML = "";
});