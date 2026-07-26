function startGame () {
    let playeranswer = document.getElementById("input").value.toLowerCase();
    if (playeranswer === "berlin") {
        alert("Correct answer!");
        window.location.href = "beatthegame.html";
    } else {
        alert("Incorrect answer. Please try again.");
    }
}