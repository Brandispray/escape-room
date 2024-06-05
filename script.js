// Function to start the first activity
function startActivity() {
    window.location.href = "level1_flashcards.html";
}

// Function to start the next level
function startNextLevel() {
    const currentLevel = getCurrentLevel();
    if (currentLevel === 1) {
        window.location.href = "level2_multiplechoice.html";
    } else if (currentLevel === 2) {
        window.location.href = "level3_imagemap.html";
    }
}

// Function to get current level from URL
function getCurrentLevel() {
    const url = window.location.href;
    if (url.includes("level1")) {
        return 1;
    } else if (url.includes("level2")) {
        return 2;
    } else if (url.includes("level3")) {
        return 3;
    }
    return 0;
}

// Flashcards Activity
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith("level1_flashcards.html")) {
        const terms = [
            { term: "Simile", definition: "A comparison using 'like' or 'as'. (Example: 'As brave as a lion.')" },
            { term: "Metaphor", definition: "A direct comparison between two things. (Example: 'The classroom was a zoo.')" },
            { term: "Personification", definition: "Giving human qualities to non-human things. (Example: 'The wind whispered through the trees.')" },
            { term: "Hyperbole", definition: "Exaggeration for effect. (Example: 'I'm so hungry I could eat a horse.')" },
            { term: "Idiom", definition: "A phrase with a meaning different from the literal meaning. (Example: 'Break the ice.')" },
            { term: "Onomatopoeia", definition: "A word that imitates a sound. (Example: 'Buzz,' 'Splash.')" }
        ];

        let currentCard = 0;

        const flashcardContainer = document.getElementById("flashcard-container");
        const prevBtn = document.getElementById("prev-btn");
        const nextBtn = document.getElementById("next-btn");
        const progress = document.getElementById("progress");

        function displayCard(index) {
            flashcardContainer.innerHTML = `
                <div class="flashcard">
                    <h2>${terms[index].term}</h2>
                    <p>${terms[index].definition}</p>
                </div>
            `;
            progress.textContent = `Question ${index + 1} of ${terms.length}`;
        }

        displayCard(currentCard);

        prevBtn.addEventListener("click", () => {
            if (currentCard > 0) {
                currentCard--;
                displayCard(currentCard);
            }
        });

        nextBtn.addEventListener("click", () => {
            if (currentCard < terms.length - 1) {
                currentCard++;
                displayCard(currentCard);
            } else {
                window.location.href = "level1_complete.html";
            }
        });
    }
});

// Multiple Choice Activity
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith("level2_multiplechoice.html")) {
        const questions = [
            { question: "The classroom was a zoo.", correct: "metaphor" },
            { question: "He is as brave as a lion.", correct: "simile" },
            { question: "The wind whispered through the trees.", correct: "personification" }
        ];

        let currentQuestion = 0;

        const questionContainer = document.getElementById("question-container");
        const result = document.getElementById("result");
        const progress = document.getElementById("progress");

        function displayQuestion(index) {
            questionContainer.innerHTML = `
                <p>${questions[index].question}</p>
                <button onclick="checkAnswer('simile', ${index})">Simile</button>
                <button onclick="checkAnswer('metaphor', ${index})">Metaphor</button>
                <button onclick="checkAnswer('personification', ${index})">Personification</button>
                <button onclick="checkAnswer('hyperbole', ${index})">Hyperbole</button>
            `;
            progress.textContent = `Question ${index + 1} of ${questions.length}`;
        }

        displayQuestion(currentQuestion);

        window.checkAnswer = (answer, index) => {
            if (answer === questions[index].correct) {
                result.textContent = `Correct! '${questions[index].question}' is a ${questions[index].correct}.`;
                result.style.color = "green";
                setTimeout(() => {
                    if (currentQuestion < questions.length - 1) {
                        currentQuestion++;
                        displayQuestion(currentQuestion);
                        result.textContent = "";
                    } else {
                        window.location.href = "level2_complete.html";
                    }
                }, 2000);
            } else {
                result.textContent = "Incorrect. Try again!";
                result.style.color = "red";
            }
        };
    }
});

// Interactive Image Map Activity
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith("level3_imagemap.html")) {
        let correctAnswers = ["simile", "metaphor", "personification", "hyperbole"];
        let answers = [];

        window.checkAnswer = (answer) => {
            answers.push(answer);
            const result = document.getElementById("result");
            const progress = document.getElementById("progress");
            progress.textContent = `Question ${answers.length} of ${correctAnswers.length}`;

            if (answers.length === correctAnswers.length) {
                let correct = true;
                for (let i = 0; i < correctAnswers.length; i++) {
                    if (answers[i] !== correctAnswers[i]) {
                        correct = false;
                        result.textContent = `Incorrect answers for question(s): ${i + 1}. Try again!`;
                        result.style.color = "red";
                        break;
                    }
                }
                if (correct) {
                    result.textContent = "Correct! You've identified all the figurative language correctly.";
                    result.style.color = "green";
                    setTimeout(() => {
                        window.location.href = "level3_complete.html";
                    }, 2000);
                } else {
                    answers = [];
                }
            }
        };
    }
});

// Completion Page
function startOver() {
    window.location.href = "index.html";
}
