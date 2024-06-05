function checkAnswer(answer) {
    const resultElement = document.getElementById("result");
    if (answer === 'metaphor') {
        resultElement.textContent = "Correct! 'The classroom was a zoo' is a metaphor.";
        resultElement.style.color = "green";
        setTimeout(() => {
            window.location.href = "dragdrop.html"; // Next activity
        }, 2000);
    } else {
        resultElement.textContent = "Incorrect. Try again!";
        resultElement.style.color = "red";
    }
}
