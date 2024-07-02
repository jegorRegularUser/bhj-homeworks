const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
getHole = (index) => document.getElementById(`hole${index}`);
const resetGame = () => {
  dead.textContent = "0";
  lost.textContent = "0";
};

const checkGameOver = () => {
  if (dead.textContent === "10") {
    alert("Победа!");
    resetGame();
  }
  if (lost.textContent === "5") {
    alert("Поражение!");
    resetGame();
  }
};

for (let index = 1; index <= 9; index++) {
  const hole = getHole(index);
  hole.onclick = () => {
    if (hole.className.includes("hole_has-mole")) {
      dead.textContent = parseInt(dead.textContent) + 1;
    } else {
      lost.textContent = parseInt(lost.textContent) + 1;
    }
    checkGameOver();
  };
}
