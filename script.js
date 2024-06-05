// Function to start the first activity
function startActivity() {
    window.location.href = "flashcards.html";
}

// Flashcards Activity
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith("flashcards.html")) {
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

        function displayCard(index) {
            flashcardContainer.innerHTML = `
                <div class="flashcard">
                    <h2>${terms[index].term}</h2>
                    <p>${terms[index].definition}</p>
                </div>
            `;
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
                window.location.href = "multiplechoice.html";
            }
        });
    }
});

// Multiple Choice Activity
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

// Drag and Drop Activity
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith("dragdrop.html")) {
        const phrases = document.querySelectorAll('.phrase');
        const categories = document.querySelectorAll('.category');

        phrases.forEach(phrase => {
            phrase.addEventListener('dragstart', dragStart);
        });

        categories.forEach(category => {
            category.addEventListener('dragover', dragOver);
            category.addEventListener('drop', drop);
        });

        function dragStart(e) {
            e.dataTransfer.setData('text', e.target.id);
        }

        function dragOver(e) {
            e.preventDefault();
        }

        function drop(e) {
            e.preventDefault();
            const data = e.dataTransfer.getData('text');
            const phrase = document.getElementById(data);
            e.target.appendChild(phrase);
        }
    }
});

function checkDragDrop() {
    const answers = {
        "phrase-1": "simile-category",
        "phrase-2": "metaphor-category",
        "phrase-3": "personification-category",
        "phrase-4": "hyperbole-category"
    };
    let correct = true;
    for (let phraseId in answers) {
        const phraseElement = document.getElementById(phraseId);
        const parentElement = phraseElement.parentElement;
        if (parentElement.id !== answers[phraseId]) {
            correct = false;
        }
    }

    const resultDiv = document.getElementById("result");
    if (correct) {
        resultDiv.textContent = "Correct! You've categorized all the phrases correctly.";
        resultDiv.style.color = "green";
        setTimeout(() => {
            window.location.href = "completion.html"; // Next activity
        }, 2000);
    } else {
        resultDiv.textContent = "Some categories are incorrect. Try again!";
        resultDiv.style.color = "red";
    }
}

// Completion Page
function startOver() {
    window.location.href = "index.html";
}
