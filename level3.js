function startGame () {
    let playeranswer = document.getElementById("input").value.toLowerCase();
    if (playeranswer === "lion") {
        alert("Correct answer!");
        window.location.href = "level4.html";
    } else {
        alert("Incorrect answer. Please try again.");
    }
}