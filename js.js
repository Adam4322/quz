function startGame () {
    let playeranswer = document.getElementById("input").value;
    if (playeranswer == 70) {
        alert("Correct answer!");
    } else {
        alert("Incorrect answer. Please try again.");
    }
}
