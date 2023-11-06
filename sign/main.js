const admin = {
    name: 'admin',
    email: 'admin@mail.ru',
    password: 'adminadmin'
}
localStorage.setItem('admin',JSON.stringify(admin))

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

function registerUser() {
    resetForm();

    var username = document.getElementById("full_name").value;
    var email = document.getElementById("your_email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
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
        const emailPattern = /^[a-zA-Z0-9._%+-]+@(mail\.ru)$/;
        return emailPattern.test(email);
    }

    function isValidPassword(password) {
        const passwordPattern = /^[А-Яа-яA-Za-z0-9]{3,}$/;
        return passwordPattern.test(password);
    }
    

    if (!isNotEmpty(username) || username.length < 3 || !isValidName(username)) {
        valid = false;
        displayError("full_nameError", "Имя должно быть не менее 3 букв и содержать только буквы");
    }

    if (!isValidEmail(email) || !isNotEmpty(email)) {
        valid = false;
        displayError("your_emailError", "Введите правильный адрес электронной почты (mail.ru).");
    }

    if (!isNotEmpty(password) || password.length < 3 || !isValidPassword(password)) {
        valid = false;
        displayError("passwordError", "Пароль должен быть не менее 3 символов и не содержать специальные символы");
    }

    if (password !== confirmPassword || !isNotEmpty(confirmPassword)) {
        valid = false;
        displayError("confirm_passwordError", "Пароль не совпадают или пустая строка");
    }

    var user = {
        username: username,
        email: email,
        password: password
    };

    if (valid) {
        let storedUser = localStorage.getItem(username);
        if (!storedUser) {
            localStorage.setItem(username, JSON.stringify(user));
            console.log(localStorage.getItem(username))
            alert("Пользователь успешно зарегистрирован!")
            // alert("User registered successfully:\n" + JSON.stringify(user, null, 2));
            document.getElementById("myForm").reset();
        }
        else {
            alert("Пользователь уже с таким именем уже существует")
        }
    }

}

function loginUser() {
    resetForm();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password_1").value;
    valid = true;

    function isNotEmpty(value) {
        return value.trim() !== '';
    }

    function isValidName(name) {
        //Russian, English or Kazakh letters 
        const namePattern = /^[А-Яа-яA-Za-zҚқҢңҒғІіІі]*$/;
        return namePattern.test(name);
    }

    function isValidPassword(password) {
        const passwordPattern = /^[А-Яа-яA-Za-z0-9]{3,}$/;
        return passwordPattern.test(password);
    }

    if (!isNotEmpty(username) || username.length < 3 || !isValidName(username)) {
        valid = false;
        displayError("usernameError", "Имя должно быть не менее 3 букв и содержать только буквы");
    }

    if (!isNotEmpty(password) || password.length < 3 || !isValidPassword(password)) {
        valid = false;
        displayError("password_1Error", "Пароль должен быть не менее 3 символов и не содержать специальные символы");
    }

    var storedUser = localStorage.getItem(username);
    if (valid) {
        if (storedUser) {
            var user = JSON.parse(storedUser);
            if (user.name == 'admin') {
                if (user.password === password) {
                    alert("Вход в аккаунт админа выполнен!");
                    // Display the saved user data in an alert
                    window.location.href = "admin.html";
                } else {
                    alert("Неправильный пароль");
                }
            }
            else if (user.password === password) {
                alert("Вход выполнен!");
                // Display the saved user data in an alert
                window.location.href = "../index.html";
            } else {
                alert("Неправильный пароль");
            }
        } else {
            alert("Пользователь не найден");
        }
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
    const inputFields = document.querySelectorAll(".input-text");

    errorElements.forEach((element) => {
        element.style.display = "none";
    });

    inputFields.forEach((field) => {
        field.classList.remove("error-border");
    });
}




