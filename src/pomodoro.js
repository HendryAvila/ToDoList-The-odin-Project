let timer;
let isRunning = false;
let minutes = 25;
let seconds = 0;
let isPaused = false;
let isBreak = false;

const timerElement = document.getElementById("timer");
const pauseButton = document.getElementById("pause");
const breakButton = document.getElementById("break");

export function updateTimer() {
  timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export function startTimer() {
  if (!isRunning) {
    isRunning = true;
    isBreak = false;
    updateButton();
    timer = setInterval(() => {
      if (!isPaused) {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer);
            isRunning = false;
          } else {
            minutes--;
            seconds = 59;
          }
        } else {
          seconds--;
        }
        updateTimer();
      }
    }, 1000);
  }
}

export function pauseTimer() {
  if (isRunning) {
    isPaused = !isPaused;
    pauseButton.textContent = isPaused ? "Resume" : "Pause";
  }
}

export function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  isPaused = false;
  if (isBreak) {
    minutes = 5;
  } else {
    minutes = 25;
  }
  seconds = 0;
  updateTimer();
  pauseButton.textContent = "Pause";
}

export function startBreak() {
  clearInterval(timer);
  isRunning = true;
  isPaused = false;
  isBreak = !isBreak;
  minutes = isBreak ? 5 : 25;
  seconds = 0;
  updateTimer();
  timer = setInterval(() => {
    if (!isPaused) {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          isRunning = false;
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }
      updateTimer();
    }
  }, 1000);
  pauseButton.textContent = "Pause";
  updateButton();
}

export function updateButton() {
  breakButton.textContent = isBreak ? "Pomodoro" : "Break";
  breakButton.classList.toggle("break", !isBreak);
  breakButton.classList.toggle("pomodoro", isBreak);
}


