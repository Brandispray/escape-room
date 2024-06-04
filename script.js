document.addEventListener("DOMContentLoaded", () => {
    updateTimer();
});

function checkAnswer1() {
    const answer = document.getElementById("answer1").value.toLowerCase();
    const resultElement = document.getElementById("result1");
    if (answer === "piano") {
        resultElement.textContent = "Correct! Proceed to the next puzzle.";
        resultElement.style.color = "green";
        document.getElementById("puzzle2").style.display = "block";
    } else {
        resultElement.textContent = "Wrong answer. Try again!";
        resultElement.style.color = "red";
    }
}

function checkAnswer2() {
    const answer = document.getElementById("answer2").value.toLowerCase();
    const resultElement = document.getElementById("result2");
    if (answer === "22") {
        resultElement.textContent = "Correct! You've completed the escape room!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Wrong answer. Try again!";
        resultElement.style.color = "red";
    }
}

function showHint1() {
    document.getElementById("hint1").style.display = "block";
}

let timeLeft = 600; // 10 minutes in seconds
const timerElement = document.getElementById("time");

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;
    if (timeLeft < 0) {
        alert("Time's up! Try again.");
        // Optionally reset the game or stop further actions
    } else {
        setTimeout(updateTimer, 1000);
    }
}
