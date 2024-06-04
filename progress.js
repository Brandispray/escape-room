document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progress-bar");
    const activities = ["Vocabulary", "Riddles", "Drag and Drop", "Multiple Choice", "Fill-in-the-Blank"];
    activities.forEach((activity, index) => {
        const activityDiv = document.createElement("div");
        activityDiv.classList.add("activity");
        
        const activityLabel = document.createElement("label");
        activityLabel.textContent = activity;
        activityDiv.appendChild(activityLabel);

        const progress = document.createElement("progress");
        progress.value = index === 0 ? 1 : 0; // Assuming the first activity is completed for demonstration
        progress.max = 1;
        activityDiv.appendChild(progress);

        progressBar.appendChild(activityDiv);
    });
});
