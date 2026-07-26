function enter() {
    let input = document.getElementById("input").value;
    let password = document.getElementById("password").value;
    if (input === localStorage.getItem("phone") && password === localStorage.getItem("password")) {
        alert("Sign in successful!");
        window.location.href = "html.html";
    } else {
        alert("Invalid phone number or password. Please try again.");
    }
}
