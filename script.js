let counterVal = 0;
let timer;
let timeLeft = 0;
let box = document.querySelector(".box");
let container = document.querySelector("#container");
let noOfCells = 0;

function resetCounter() {
  counterVal = 0;
  updateDisplay(counterVal);
  location.reload();
}

function updateDisplay(val) {
  document.getElementById("counter-label").innerHTML = val;
}

function updateDisplay2(val) {
  document.getElementById("timer").innerHTML = val;
}

function startClick() {
  updateTimer();
  start();
  incrementClick();
}

function incrementClick() {
  updateDisplay(++counterVal);

  let row = document.createElement("div");
  let cell = document.createElement("td");
  row.className = "rowDiv";
  container.append(row);
  row.append(cell);

  let cbBox = document.querySelectorAll(".rowDiv");

  cbBox.forEach((cb) => {
    cb.id = "false";
    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);
    cb.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
  });

  const randomBox = cbBox[Math.floor(Math.random() * cbBox.length)];
  randomBox.id = "true";
  randomBox.style.backgroundColor = `rgb(${255}, ${0}, ${0})`;
  noOfCells++;
}

document.querySelector("#container").addEventListener("click", (e) => {
  console.log(e.target);
  if (noOfCells == 100) {
    alert("victory bro");
    location.reload();
  } else if (e.target.id === "true") {
    incrementClick();
    console.log(e.target);
  } else {
    //e.currentTarget.addEventListener("click", gameOver);
    gameOver();
    console.log(e.target);
  }
});

function gameOver() {
  alert(`Haha you lose lol. Your score is ${noOfCells}`);
  window.clearInterval(timer);
}

function updateTimer() {
  timeLeft = timeLeft - 1;
  var t = document.querySelector("#timer");
  if (timeLeft >= 0) t.innerHTML = timeLeft;
  else {
    gameOver();
    console.log(timeLeft);
  }
}

// The button has an on-click event handler that calls this
function start() {
  // setInterval is a built-in function that will call the given function
  // every N milliseconds (1 second = 1000 ms)
  timer = setInterval(updateTimer, 1000);

  // It will be a whole second before the time changes, so we'll call the update
  // once ourselves
  updateTimer();

  // We don't want the to be able to restart the timer while it is running,
  // so hide the button.
  // playAgainButton.hide();
}

function set50() {
  timeLeft = 52;
  updateDisplay2(timeLeft - 2);
}

function set40() {
  timeLeft = 42;
  updateDisplay2(timeLeft - 2);
}

function set30() {
  timeLeft = 32;
  updateDisplay2(timeLeft - 2);
}
