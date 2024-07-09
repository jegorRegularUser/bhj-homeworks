class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector(".word");
    this.winsElement = container.querySelector(".status__wins");
    this.lossElement = container.querySelector(".status__loss");
    this.timerValueElement = container.querySelector(".timer__value");
    this.timerDuration = 0;
    this.timerInterval = null;
    this.currentWord = '',
    this.reset();

    this.registerEvents();
  }
  startTimer() {
    this.stopTimer();
    this.timerDuration = this.currentWord.length;
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.timerDuration--;
      this.updateTimerDisplay();

      if (this.timerDuration === 0) {
        this.fail();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
  

  updateTimerDisplay() {
    this.timerValueElement.textContent = this.timerDuration;
  }

  resetTimer() {
    this.stopTimer();
   
    this.timerDuration = this.currentWord.length;
    this.updateTimerDisplay();
    this.startTimer();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.addEventListener("keyup", (event) => {
      if (this.currentSymbol) {
        const currentChar = this.currentSymbol.textContent.toLowerCase();
        const inputChar = event.key.toLowerCase();

        if (inputChar === currentChar) {
          this.success();
        } else {
          this.fail();
        }
      }
    });
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current"))
      this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add("symbol_correct");
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add("symbol_current");
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert("Победа!");
      this.reset();
    }
    this.setNewWord();
    this.resetTimer();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert("Вы проиграли!");
      this.reset();
    }
    this.stopTimer();
    this.setNewWord();
  }

  setNewWord() {
    this.currentWord = this.getWord();

    this.renderWord(this.currentWord);
    this.startTimer();
  }

  getWord() {
    const words = [
        "bob",
        "awesome",
        "netology",
        "hello",
        "kitty",
        "rock",
        "youtube",
        "popcorn",
        "cinema",
        "love",
        "javascript",
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? "symbol_current" : ""}">${s}</span>`
      )
      .join("");
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector(".symbol_current");
  }
}

new Game(document.getElementById("game"));
