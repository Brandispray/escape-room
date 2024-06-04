function checkRiddle() {
    const answer = document.getElementById("answer").value.toLowerCase();
    const resultElement = document.getElementById("result");
    if (answer === "bee") {
        resultElement.textContent = "Correct! You solved the riddle.";
        resultElement.style.color = "green";
        setTimeout(() => {
            window.location.href = "dragdrop.html"; // Next activity
        }, 2000);

        // Backup navigation button
        const nextButton = document.createElement("button");
        nextButton.textContent = "Next";
        nextButton.onclick = () => {
            window.location.href = "dragdrop.html";
        };
        resultElement.appendChild(nextButton);
    } else {
        resultElement.textContent = "Incorrect. Try again!";
        resultElement.style.color = "red";
    }
}
