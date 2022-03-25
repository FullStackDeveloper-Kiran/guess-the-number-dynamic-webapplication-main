let inputNumber = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
let outputResult = document.getElementById("numberResult");

function checkresult() {
    let guessNumber = parseInt(inputNumber.value);
    if (guessNumber > randomNumber) {
        outputResult.textContent = "Number is High";
        outputResult.style.backgroundColor = "#1e217c";
    } else if (guessNumber < randomNumber) {
        outputResult.textContent = "Number is low";
        outputResult.style.backgroundColor = "#1e217c";
    } else if (guessNumber === randomNumber) {
        outputResult.textContent = "Congratulations! You got it right.";
        outputResult.style.backgroundColor = "green";
    } else {
        outputResult.textContent = "Enter a valid input";
        outputResult.style.backgroundColor = "red";
    }
}
