function validateForm() {
    resetForm();

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const gender = document.getElementById("gender");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    let valid = true;

    function isNotEmpty(value) {
        return value.trim() !== '';
    }

    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    // Validate First Name
    if (!isNotEmpty(firstName.value)) {
        valid = false;
        displayError("firstNameError", "First Name is required");
    }


    // Validate Last Name
    if (!isNotEmpty(lastName.value)) {
        valid = false;
        displayError("lastNameError", "Last Name is required");
    }

    // Validate Gender
    if (gender.value === "") {
        valid = false;
        displayError("genderError", "Please select a gender");
    }

    // Validate Email
    if (!isValidEmail(email.value)) {
        valid = false;
        displayError("emailError", "Invalid Email");
    }

    // Validate Message
    if (!isNotEmpty(message.value)) {
        valid = false;
        displayError("messageError", "Message is required");
    }

    // Display success message and clear the form if valid
    if (valid) {
        alert("Ссылка отправлена на вашу почту!");
        document.getElementById("myForm").reset();
    }
}

function displayError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.style.display = "block";
    errorElement.textContent = message;
    document.getElementById(id.replace("Error", "")).classList.add("error-border");
}

function resetForm() {
    const errorElements = document.querySelectorAll(".error");
    const inputFields = document.querySelectorAll(".input-field");

    errorElements.forEach((element) => {
        element.style.display = "none";
    });

    inputFields.forEach((field) => {
        field.classList.remove("error-border");
    });
}
