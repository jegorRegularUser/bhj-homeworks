const cookie = document.getElementById("cookie");
const counterElement = document.getElementById("clicker__counter");

let clickCount = 0;
let lastClickTime = null;

const handleCookieClick = () => {
  clickCount++;
  counterElement.textContent = clickCount;

  if (clickCount % 2 === 0) {
    cookie.style.width = "250px";
  } else {
    cookie.style.width = "200px";
  }

  const currentTime = new Date().getTime();
  if (lastClickTime !== null) {
    const timeDiff = currentTime - lastClickTime;
    const clicksPerSecond = 1000 / timeDiff;
    counterElement.textContent = `${clickCount} (${clicksPerSecond.toFixed(
      2
    )} кликов/с)`;
  }
  lastClickTime = currentTime;
};

cookie.addEventListener("click", handleCookieClick);
