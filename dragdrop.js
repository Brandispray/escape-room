document.addEventListener("DOMContentLoaded", () => {
    const idioms = ["Break the ice", "Hit the hay", "Piece of cake"];
    const meanings = [
        "To start a conversation",
        "To go to bed",
        "Something very easy"
    ];

    const activityContainer = document.getElementById("dragdrop-activity");

    idioms.forEach((idiom, index) => {
        const idiomDiv = document.createElement("div");
        idiomDiv.classList.add("idiom");
        idiomDiv.draggable = true;
        idiomDiv.id = `idiom-${index}`;
        idiomDiv.textContent = idiom;
        idiomDiv.ondragstart = (event) => {
            event.dataTransfer.setData("text", event.target.id);
        };
        activityContainer.appendChild(idiomDiv);
    });

    meanings.forEach((meaning, index) => {
        const meaningDiv = document.createElement("div");
        meaningDiv.classList.add("meaning");
        meaningDiv.id = `meaning-${index}`;
        meaningDiv.textContent = meaning;
        meaningDiv.ondragover = (event) => event.preventDefault();
        meaningDiv.ondrop = (event) => {
            event.preventDefault();
            const data = event.dataTransfer.getData("text");
            event.target.appendChild(document.getElementById(data));
        };
        activityContainer.appendChild(meaningDiv);
    });
});

function checkDragDrop() {
    const answers = {
        "idiom-0": "meaning-0",
        "idiom-1": "meaning-1",
        "idiom-2": "meaning-2"
    };
    let correct = true;
    for (let idiomId in answers) {
        const idiomElement = document.getElementById(idiomId);
        const parentElement = idiomElement.parentElement;
        if (parentElement.id !== answers[idiomId]) {
            correct = false;
        }
    }

    const resultDiv = document.getElementById("result");
    if (correct) {
        resultDiv.textContent = "Correct! You've matched all the idioms correctly.";
        resultDiv.style.color = "green";
        setTimeout(() => {
            window.location.href = "multiplechoice.html"; // Next activity
        }, 2000);
    } else {
        resultDiv.textContent = "Some matches are incorrect. Try again!";
        resultDiv.style.color = "red";
    }
}
