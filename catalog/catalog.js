function validateForm() {
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    let valid = true;

    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    if (!isValidEmail(email.value)) {
        valid = false;
        displayError(emailError, "Неверный адрес электронной почты");
    }
    else
        emailError.textContent = "";

    if (valid) {
        const modal = new bootstrap.Modal(document.getElementById("staticBackdrop0"));
        modal.toggle();

    }

}
function displayError(element, message) {
    element.textContent = message;
}