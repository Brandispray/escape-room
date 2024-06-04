document.addEventListener("DOMContentLoaded", () => {
    const terms = ["Simile", "Metaphor", "Personification", "Hyperbole", "Idiom", "Onomatopoeia"];
    const definitions = [
        "1. A comparison using 'like' or 'as'. (Example: 'As brave as a lion.')",
        "2. A direct comparison between two things. (Example: 'The classroom was a zoo.')",
        "3. Giving human qualities to non-human things. (Example: 'The wind whispered through the trees.')",
        "4. Exaggeration for effect. (Example: 'I'm so hungry I could eat a horse.')",
        "5. A phrase with a meaning different from the literal meaning. (Example: 'Break the ice.')",
        "6. A word that imitates a sound. (Example: 'Buzz,' 'Splash.')"
    ];

    const activityContainer = document.getElementById("vocabulary-activity");

    terms.forEach((term, index) => {
        const termDiv = document.createElement("div");
        termDiv.classList.add("term");

        const termLabel = document.createElement("label");
        termLabel.textContent = `${index + 1}. ${term}`;
        termDiv.appendChild(termLabel);

        const select = document.createElement("select");
        select.id = `term-${index}`;
        definitions.forEach((definition, defIndex) => {
            const option = document.createElement("option");
            option.value = defIndex;
            option.textContent = definition;
            select.appendChild(option);
        });
        termDiv.appendChild(select);

        activityContainer.appendChild(termDiv);
    });
});

function checkAnswers() {
    const answers = [0, 1, 2, 3, 4, 5];
    let correct = true;
    let incorrectQuestions = [];

    answers.forEach((answer, index) => {
        const select = document.getElementById(`term-${index}`);
        if (parseInt(select.value) !== answer) {
            correct = false;
            incorrectQuestions.push(index + 1);
        }
    });

    const resultDiv = document.getElementById("result");
    if (correct) {
        resultDiv.textContent = "Correct! You've matched all the terms correctly.";
        resultDiv.style.color = "green";
        setTimeout(() => {
            window.location.href = "riddle.html"; // Next activity
        }, 2000);
    } else {
        resultDiv.textContent = `Incorrect answers for question(s): ${incorrectQuestions.join(", ")}. Try again!`;
        resultDiv.style.color = "red";
    }
}
