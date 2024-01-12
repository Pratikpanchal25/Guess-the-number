const randomNumber = parseInt(Math.random() * 100 + 1);
const button = document.querySelector(".btn");
let userInput = document.querySelector("#userInput");
const preGuesses = document.querySelector(".pre-guesses");
const remaining = document.querySelector(".remaining");
const result = document.querySelector(".result");
const restart = document.querySelector(".restart");
console.log(randomNumber);
const prevguess = [];
let remainingNum = 1;
const playgame = true;

if (playgame) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    guessedNumber = userInput.value;
    validate(guessedNumber);
    console.log(guessedNumber);
  });
}

function validate(number) {
  if (number < 1 || number > 100) {
    alert("Enter Number Between 1 and 100 Only");
  } else {
    check(number);
    preGuesses.innerHTML += `${number}, `;

    if (remainingNum === 10) {
      displayMessage(`You Lost The Number was ${randomNumber}`);
      endgame()
    } else {
      guesses(`${10 - remainingNum++}`);
    }
  }
  userInput.value = "";
}

function check(number) {
  if (number < randomNumber) {
    displayMessage("The Guess Is Smaller");
  } else if (number > randomNumber) {
    displayMessage("The Guess Is Bigger");
  } else {
    displayMessage(` Congratulations.....You Won The Number was ${randomNumber}`);
    endgame();
  }
}

function guesses(number) {
  remaining.innerHTML = number;
}

function displayMessage(message) {
  result.innerHTML = message;
}

function newgame() {
  document.reload();
}

function endgame() {
    
  userInput.setAttribute("disabled", "");
  const newRestart = document.querySelector('.restart')
  console.log(newRestart)
  newRestart.style.display = "block";
  
}
