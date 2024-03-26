let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const display = document.querySelector('.display');
const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const resetBtn = document.querySelector('.reset-btn');

function startTimer() {
  timer = setInterval(updateDisplay, 1000);
  isRunning = true;
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

function updateDisplay() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  return num < 10 ? `0${num}` : num;
}

startBtn.addEventListener('click', () => {
  if (!isRunning) {
    startTimer();
  }
});

pauseBtn.addEventListener('click', () => {
  if (isRunning) {
    pauseTimer();
  }
});

resetBtn.addEventListener('click', resetTimer);
