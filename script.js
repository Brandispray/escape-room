document.addEventListener("DOMContentLoaded", () => {
    const puzzleElement = document.getElementById("puzzle");
    puzzleElement.innerHTML = `
        <p>You are locked in a room. Solve the riddle to find the key:</p>
        <p>"I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?"</p>
    `;
});

function checkAnswer() {
    const answer = document.getElementById("answer").value.toLowerCase();
    const resultElement = document.getElementById("result");
    if (answer === "echo") {
        resultElement.textContent = "Correct! You found the key and escaped!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Wrong answer. Try again!";
        resultElement.style.color = "red";
    }
}
