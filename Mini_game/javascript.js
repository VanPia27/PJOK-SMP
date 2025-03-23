let ballDirection = 0;
let score = 0;

function setDirection(direction, button) {
  ballDirection = direction;

  let buttons = document.querySelectorAll(".direction-buttons button");
  buttons.forEach((btn) => btn.classList.remove("selected"));

  button.classList.add("selected");
}

function moveGoalkeeper() {
  let goalkeeper = document.getElementById("goalkeeper");
  let randomPos = Math.random() * 100;
  goalkeeper.style.left = 85 + randomPos + "px";
}

function shootBall() {
  let ball = document.getElementById("ball");
  let goalkeeper = document.getElementById("goalkeeper");
  let result = document.getElementById("result");

  moveGoalkeeper();

  document.getElementById("kickSound").play();

  ball.style.transition = "bottom 0.4s ease-in-out, left 0.4s ease-in-out";
  ball.style.left = 135 + ballDirection + "px";
  ball.style.bottom = "180px";

  setTimeout(() => {
    let ballPos = parseInt(ball.style.left);
    let keeperPos = parseInt(goalkeeper.style.left);

    if (ballPos >= keeperPos && ballPos <= keeperPos + 30) {
      result.innerText = "Kiper Menyelamatkan! Gol Tidak Sah!";
      document.getElementById("missSound").play();
      resetGame();
    } else {
      result.innerText = "GOOOLLLL!!!";
      document.getElementById("cheerSound").play();
      score++;
      document.getElementById("score").innerText = score;
      resetGame();
    }
  }, 400);
}

function resetGame() {
  setTimeout(() => {
    let ball = document.getElementById("ball");
    let goalkeeper = document.getElementById("goalkeeper");
    let result = document.getElementById("result");

    result.innerText = "";
    ball.style.transition = "none";
    ball.style.bottom = "5px";
    ball.style.left = "50%";
    goalkeeper.style.left = "135px";

    let buttons = document.querySelectorAll(".direction-buttons button");
    buttons.forEach((btn) => btn.classList.remove("selected"));
  }, 800);
}
