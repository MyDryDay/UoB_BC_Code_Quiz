const showScores = () => {
    let scores = JSON.parse(window.localStorage.getItem('scores')) || [];
    // Sort scores by score, from highest to lowest
    scores.sort((a, b) => {
        return b.score - a.score;
    });

    // Loop through each score object in the scores array
    scores.forEach((scores) => {
        // First, create <li> elements to go inside the <ol> element
        const listEl = document.createElement('li');
        // Set the content of the <li> tags to the values of the initials and the score
        listEl.textContent = `${scores.initials} finished with ${scores.score} points!`;
        // Second, append each of the created <li> elements to the <ol> element
        const orderedListEl = document.getElementById('scores');
        orderedListEl.appendChild(listEl);
    });
}

const resetScore = () => {
    // Remove the scores array from local storage
    window.localStorage.removeItem('scores');
    // Reload the current page
    window.location.reload();
}

document.getElementById('empty').onclick = resetScore;

showScores();
