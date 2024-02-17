// finding items
let form = document.querySelector("form");
let inputNumber = form.querySelector("#guessing-number");
let checkButton = form.querySelector("button");
let resultMessage = document.querySelector(".resultMessage");
let remainingAttempt = document.querySelector(".remainingAttempt");
let wonLost = document.querySelector(".wonLost");

// initializing
let wonCount = 0;
let lostCount = 0;
let remainingCount = 5;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkResult();

  if (remainingCount < 1) {
    inputNumber.disabled = true;
    checkButton.disabled = true;
  }
  inputNumber.value = "";
});
const checkResult = () => {
  let guessingNumber = Math.ceil(Math.random() * 9);
  //   wonLost.innerHTML = guessingNumber;

  if (inputNumber.value == guessingNumber) {
    wonCount++;
    resultMessage.innerHTML = "You won!";
  } else {
    lostCount++;
    resultMessage.innerHTML = `${inputNumber.value} <br/> You have lost, Random number was ${guessingNumber}`;
  }
  remainingCount--;
  wonLost.innerHTML = `Won : ${wonCount}, Lost : ${lostCount}`;
  remainingAttempt.innerHTML = `Remaining Attempt : ${remainingCount}`;
};
