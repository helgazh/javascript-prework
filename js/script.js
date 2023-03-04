let compResults = 0;
let userResults = 0;

const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");

rock.addEventListener("click", function () {
  playGame(1);
});
scissors.addEventListener("click", function () {
  playGame(2);
});
paper.addEventListener("click", function () {
  playGame(3);
});
