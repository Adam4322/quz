function createAccount() {
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    
    localStorage.setItem("phone", phone);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmPassword", confirmPassword);

    window.location.href = "lern.html";
}