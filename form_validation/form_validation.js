function validateForm(event) {
    event.preventDefault();
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

    function isValidName(name) {
        //Russian, English or Kazakh letters 
        const namePattern = /^[А-Яа-яA-Za-zҚқҢңҒғІіІі]*$/;
        return namePattern.test(name);
    }

    function isValidEmail(email) {
        //email requirements 
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    //First Name 
    if (!isNotEmpty(firstName.value) || firstName.value.length < 3 || !isValidName(firstName.value)) {
        valid = false;
        displayError("firstNameError", "Имя должно быть не менее 3 букв и содержать только буквы");
    }

    //Last Name 
    if (!isNotEmpty(lastName.value) || lastName.value.length < 3 || !isValidName(lastName.value)) {
        valid = false;
        displayError("lastNameError", "Фамилия должна быть не менее 3 букв и содержать только буквы");
    }

    //Gender 
    if (gender.value === "") {
        valid = false;
        displayError("genderError", "Пожалуйста, выберите пол");
    }

    //Email 
    if (!isValidEmail(email.value) || !isNotEmpty(email.value)) {
        valid = false;
        displayError("emailError", "Введите правильный адрес электронной почты.");
    }

    //Message 
    if (!isNotEmpty(message.value)) {
        valid = false;
        displayError("messageError", "Сообщение обязательно");
    }

    if (valid) {
        alert("Спасибо! Мы уведомим вас о предстоящих акциях.");
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

