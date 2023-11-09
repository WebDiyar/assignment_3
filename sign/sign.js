const admin = {
    name: 'admin',
    email: 'admin@mail.ru',
    password: 'adminadmin'
}
localStorage.setItem('admin', JSON.stringify(admin))

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



// real time inputs
function validateName() {
    const nameInput = document.getElementById("full_name");
    const nameError = document.getElementById("full_nameError");

    const name = nameInput.value;

    function isValidName(name) {
        //Russian, English or Kazakh letters 
        const namePattern = /^[А-Яа-яA-Za-zҚқҢңҒғІіІі]*$/;
        return namePattern.test(name);
    }

    if (name.length === 0 || name.length < 3 || !isValidName(name)) {
        displayError("full_nameError", "Имя должно быть не менее 3 букв и содержать только буквы");
        setInvalid(nameInput)
    } else {
        displayError("full_nameError", "");
        setValid(nameInput)
    }
}


function validateEmail() {
    const emailInput = document.getElementById("your_email");
    const emailError = document.getElementById("your_emailError");

    const email = emailInput.value;

    function isValidEmail(email) {
        //email requirements 
        const emailPattern = /^[a-zA-Z0-9._%+-]+@(mail\.ru)$/;
        return emailPattern.test(email);
    }

    if (!isValidEmail(email) || email.length === 0) {
        displayError("your_emailError", "Введите правильный адрес электронной почты (mail.ru).");
        setInvalid(emailInput)
    } else {
        displayError("your_emailError", "");
        setValid(emailInput)
    }
}


function validatePassword() {
    const pw = document.getElementById("password");
    const passwordError = document.getElementById("passwordError")
    const password = pw.value;
    // const confirmPassword = document.getElementById("confirm_password").value;

    function isValidPassword(password) {
        const passwordPattern = /^[А-Яа-яA-Za-z0-9]{3,}$/;
        return passwordPattern.test(password);
    }

    if (password.length === 0 || password.length < 3 || !isValidPassword(password)) {
        displayError("passwordError", "Пароль должен быть не менее 3 символов и не содержать специальные символы");
        setInvalid(pw)
    } else {
        displayError("passwordError", "");
        setValid(pw)
    }
}

function validateConfirmPassword() {
    const confirmPassword = document.getElementById("confirm_password");
    const confirmPasswordError = document.getElementById("confirm_passwordError")
    const confirmValue = confirmPassword.value;
    const pw = document.getElementById("password");
    // const confirmPassword = document.getElementById("confirm_password").value;

    function isValidPassword(confirm_password) {
        const passwordPattern = /^[А-Яа-яA-Za-z0-9]{3,}$/;
        return passwordPattern.test(confirm_password);
    }

    if (confirmValue.length === 0 || confirmValue.length < 3 || !isValidPassword(confirmValue)) {
        displayError("confirm_passwordError", "Пароль должен быть не менее 3 символов и не содержать специальные символы");
        setInvalid(confirmPassword)
    }
    else if (confirmValue != pw.value) {
        displayError("confirm_passwordError", "Пароли не совпадают")
        setInvalid(confirmPassword)
    }
    else {
        displayError("confirm_passwordError", "")
        setValid(confirmPassword)
    }
}
// Rest of your code, including the registerUser function


function registerUser() {

    var username = document.getElementById("full_name").value;
    var email = document.getElementById("your_email").value;
    var password = document.getElementById("password").value;

    var user = {
        name: username,
        email: email,
        password: password
    };

    const form = document.getElementById('myForm');

    if (form.getElementsByClassName("is-valid").length == 4) {
        // alert(form.getElementsByClassName("is-valid").length)
        let storedUser = localStorage.getItem(username);
        if (!storedUser) {
            localStorage.setItem(username, JSON.stringify(user));
            console.log(localStorage.getItem(username))
            alert("Пользователь успешно зарегистрирован!")
            document.getElementById("myForm").reset();
        }
        else {
            alert("Пользователь уже с таким именем уже существует")
        }
    }

}



function validateLoginName() {
    const nameInput = document.getElementById("username");
    const nameError = document.getElementById("usernameError");

    const name = nameInput.value;

    function isValidName(name) {
        //Russian, English or Kazakh letters 
        const namePattern = /^[А-Яа-яA-Za-zҚқҢңҒғІіІі]*$/;
        return namePattern.test(name);
    }

    if (name.length === 0 || name.length < 3 || !isValidName(name)) {
        displayError("usernameError", "Имя должно быть не менее 3 букв и содержать только буквы");
        setInvalid(nameInput)
    } else {
        displayError("usernameError", "");
        setValid(nameInput)
    }
}

function validateLoginPassword() {
    const pw = document.getElementById("password_1");
    const passwordError = document.getElementById("password_1Error")
    const password = pw.value;

    function isValidPassword(password) {
        const passwordPattern = /^[А-Яа-яA-Za-z0-9]{3,}$/;
        return passwordPattern.test(password);
    }

    if (password.length === 0 || password.length < 3 || !isValidPassword(password)) {
        displayError("password_1Error", "Пароль должен быть не менее 3 символов и не содержать специальные символы");
        setInvalid(pw)
    } else {
        displayError("password_1Error", "");
        setValid(pw)
    }
}

function loginUser() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password_1").value;
    

    
    var storedUser = localStorage.getItem(username);
    const form = document.getElementById('yourForm');

    if (form.getElementsByClassName("is-valid").length == 2) {
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

function setInvalid(element) {
    element.classList.add('is-invalid');
    element.classList.remove('is-valid')
  }
  
  function setValid(element) {
    element.classList.add('is-valid');
    element.classList.remove('is-invalid')
  };



