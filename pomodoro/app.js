let breakButton = document.getElementById("break-visibility");
let timerButton = document.getElementById("timer-visibility");
let reset = document.getElementById("reset");
let breakTime = 0;
let stopwatch = document.getElementById("stopwatch");

let startButton = document.getElementById("start-button");
let resetTime = "25";
let resetSecond = "00";
let timeAt = parseInt(parseInt(stopwatch.innerText.substr(0, 2)));
let secondAt = parseInt(parseInt(stopwatch.innerText.substr(3, 5)));
let val = timeAt * 60 + secondAt;
console.log(val);
breakButton.style.backgroundColor = "410B13 ";
timerButton.style.backgroundColor = "BA1F33";
let id;
let resetMillisecond = 1500;
breakButton.addEventListener("click", () => {
  breakButton.style.backgroundColor = "BA1F33";
  timerButton.style.backgroundColor = "410B13";
  resetTime = "05";
  resetSecond = "00";
  resetMillisecond = 300;
  clearInterval(id);
  startButton.innerText = "START";
  stopwatch.classList.add("hide");
  stopwatch = document.getElementById("stopwatch2");
  timeAt = parseInt(parseInt(stopwatch.innerText.substr(0, 2)));
  secondAt = parseInt(parseInt(stopwatch.innerText.substr(3, 5)));
  val = timeAt * 60 + secondAt;
  console.log(stopwatch.innerText);
  //here break timer is shown
  stopwatch.classList.remove("hide");
});

timerButton.addEventListener("click", () => {
  breakButton.style.backgroundColor = "410B13 ";
  timerButton.style.backgroundColor = "BA1F33";
  resetTime = "25";
  resetSecond = "00";
  resetMillisecond = 1500;
  clearInterval(id);
  startButton.innerText = "START";
  stopwatch.classList.add("hide");
  stopwatch = document.getElementById("stopwatch");
  timeAt = parseInt(parseInt(stopwatch.innerText.substr(0, 2)));
  secondAt = parseInt(parseInt(stopwatch.innerText.substr(3, 5)));
  val = timeAt * 60 + secondAt;
  stopwatch.classList.remove("hide");
});

startButton.addEventListener("click", () => {
  if (startButton.innerHTML == "START") {
    id = setInterval(() => {
      console.log("val=" + val);
      val--;
      let time = parseInt(val / 60);
      let second = val % 60;

      if (time < 10) time = "0" + time;

      if (second < 10) second = "0" + second;

      stopwatch.innerText = time + ":" + second;
      // console.log(v);
      if (val === 0) {
        // console.log(v);
        clearInterval(id);
      }
      // console.log(val);
    }, 1000);
  } else {
    clearInterval(id);
  }

  startButton.innerText = startButton.innerText === "START" ? "PAUSE" : "START";
});

reset.addEventListener("click", () => {
  stopwatch.innerText = resetTime + ":" + resetSecond;
  clearInterval(id);
  val = resetMillisecond;
  startButton.innerText = "START";
});
