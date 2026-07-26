function startGame () {
    let playeranswer = document.getElementById("input").value;
    if (playeranswer === "70") {
        alert("Correct answer!");
        window.location.href = "level2.html";
    } else {
        alert("Incorrect answer. Please try again.");
    }
}
