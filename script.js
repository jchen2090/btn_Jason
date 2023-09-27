const button = document.querySelector("button");
let score = 0;

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const scoreButton = document.getElementById("score");

scoreButton.addEventListener("click", () => {
  score++;
  scoreButton.textContent = `Increase score: ${score}`;
});
