document.addEventListener("DOMContentLoaded", () => {
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
});
