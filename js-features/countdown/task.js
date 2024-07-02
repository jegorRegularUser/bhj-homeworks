const timerElement = document.getElementById("timer");

let timeRemaining = 10;

const updateTimer = () => {
  timeRemaining--;

  if (timeRemaining === 0) {
    clearInterval(timerInterval);
    alert("Вы победили в конкурсе!");
  } else {
    updateTimerDisplay();
  }
};

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const updateTimerDisplay = () => {
  timerElement.textContent = formatTime(timeRemaining);
}

const timerInterval = setInterval(updateTimer, 1000);

updateTimerDisplay();
