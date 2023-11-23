window.onload = function() {
    let user = localStorage.getItem('user1');
    let userMap = JSON.parse(user);
    let name = document.getElementById('inputName');
    let email = document.getElementById('inputEmail');
    name.value = userMap.name;
    email.value = userMap.email;
    
    let picture = localStorage.getItem(userMap.name + "5photo");
    if (picture) {
        var imageContainer = document.getElementById('imageContainer');
        var previewImageElement = document.getElementById('previewImageElement');
        var defaultImage = document.getElementById('defaultImage');

        previewImageElement.src = localStorage.getItem(userMap.name + "5photo");
    
        imageContainer.classList.add('has-image');
        previewImageElement.style.width = '250px'; 
        previewImageElement.style.height = '250px';
        previewImageElement.hidden = false;
        defaultImage.hidden = true; 
    }
};




function validateName() {
    let nameInput = document.getElementById("inputName");
    let nameError = document.getElementById("inputNameError");
    let name = nameInput.value;
    let nameExists = localStorage.getItem(name)
    let nameExistsMap = JSON.parse(nameExists)
    
    let user = localStorage.getItem('user1');
    let userMap = JSON.parse(user);
    function isValidName(name) {
        //Russian, English or Kazakh letters 
        const namePattern = /^[А-Яа-яA-Za-zҚқҢңҒғІіІі]*$/;
        return namePattern.test(name);
    }

    if (name.length === 0 || name.length < 3 || !isValidName(name)) {
        nameError.innerHTML ='Имя должно быть не менее 3 букв и содержать только буквы';
        setInvalid(nameInput);
    } else if (nameExists && nameExistsMap.name != userMap.name) {
        nameError.innerHTML = 'Пользователь с таким именем уже существует'
        setInvalid(nameInput);
    }
    else {
        nameError.innerHTML ='';
        setValid(nameInput);
    }
}

function validateEmail() {
    const emailInput = document.getElementById("inputEmail");
    const emailError = document.getElementById("inputEmailError");

    const email = emailInput.value;

    function isValidEmail(email) {
        //email requirements 
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    if (!isValidEmail(email) || email.length === 0) {
        emailError.innerHTML = 'Введите правильный адрес электронной почты.';
        setInvalid(emailInput);
        
    } else {
        emailError.innerHTML = '';
        setValid(emailInput)
    }
}

function validateOldPassword() {
    const oldPasswordInput = document.getElementById("oldPassword");
    const oldPasswordError = document.getElementById("oldPasswordError");
    const oldPassword = oldPasswordInput.value;
    let user = localStorage.getItem('user1');
    let userMap = JSON.parse(user);
    const passwd = userMap.password;
    if (passwd != oldPassword) {
        setInvalid(oldPasswordInput);
        oldPasswordError.innerHTML = 'Неправильный пароль';
    }
    else {
        setValid(oldPasswordInput);
        oldPasswordError.innerHTML = '';
    }
}

function validatePassword() {
    const pw = document.getElementById("password");
    const passwordError = document.getElementById("passwordError")
    const password = pw.value;
    
    const oldPasswordInput = document.getElementById("oldPassword");
    const oldPassword = oldPasswordInput.value;
    // const confirmPassword = document.getElementById("confirm_password").value;

    function isValidPassword(password) {
        const passwordPattern = /^[А-Яа-яA-Za-z0-9]{3,}$/;
        return passwordPattern.test(password);
    }

    if (password.length === 0 || password.length < 3 || !isValidPassword(password)) {
        passwordError.innerHTML = 'Пароль должен быть не менее 3 символов и не содержать специальные символы';
        setInvalid(pw);
    } else if (oldPassword == password){
        passwordError.innerHTML = 'Пароль совпадает со старым паролем';
        setInvalid(pw);
    }
    else {
        passwordError.innerHTML = '';
        setValid(pw);
    }
}

function validateConfirmPassword() {
    const confirmPassword = document.getElementById("confirmPassword");
    const confirmPasswordError = document.getElementById("confirmPasswordError")
    const confirmValue = confirmPassword.value;
    const pw = document.getElementById("password");
    // const confirmPassword = document.getElementById("confirm_password").value;

    function isValidPassword(confirm_password) {
        const passwordPattern = /^[А-Яа-яA-Za-z0-9]{3,}$/;
        return passwordPattern.test(confirm_password);
    }

    if (confirmValue.length === 0 || confirmValue.length < 3 || !isValidPassword(confirmValue)) {
        confirmPasswordError.innerHTML = 'Пароль должен быть не менее 3 символов и не содержать специальные символы';
        setInvalid(confirmPassword)
    }
    else if (confirmValue != pw.value) {
        confirmPasswordError.innerHTML = 'Пароли не совпадают';
        setInvalid(confirmPassword)
    }
    else {
        confirmPasswordError.innerHTML = '';
        setValid(confirmPassword)
    }
}

function changeUserInformation() {
    validateName();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
    validateOldPassword();
    
    const nameInput = document.getElementById("inputName");
    const name = nameInput.value;
    const emailInput = document.getElementById("inputEmail");
    const email = emailInput.value;

    const oldPasswordInput = document.getElementById("oldPassword");
    const oldPasswordError = document.getElementById("oldPasswordError");
    const oldPassword = oldPasswordInput.value;

    const pw = document.getElementById("password");
    const passwordError = document.getElementById("passwordError")
    const password = pw.value;

    const confirmPassword = document.getElementById("confirmPassword");
    const confirmPasswordError = document.getElementById("confirmPasswordError")
    const confirmValue = confirmPassword.value;

    let user2 = localStorage.getItem('user1');
    let user2Map = JSON.parse(user2);


    const form = document.getElementById('form');

    if (oldPassword == "" && password == "" && confirmValue == "") {
        oldPasswordError.innerHTML = '';
        setValid(oldPasswordInput)
        passwordError.innerHTML = '';
        setValid(pw);
        confirmPasswordError.innerHTML = '';
        setValid(confirmPassword);
        var user1 = {
            name: name,
            email: email,
            password: user2Map.password
        };
        if (form.getElementsByClassName("is-valid").length == 5) {
            if ((user2Map.name == name) &&(user2Map.email == email)) {
                alert("Вы ничего не поменяли!")
            } else {
                    tempLS = localStorage.getItem(user2Map.name + "5photo"); 
                    localStorage.removeItem(user2Map.name);
                    localStorage.setItem(name,JSON.stringify(user1));
                    localStorage.removeItem('user1');
                    localStorage.setItem('user1',JSON.stringify(user1));
                    localStorage.removeItem(user2Map.name + "5photo");
                    localStorage.setItem(name + "5photo",tempLS);
                    
                    alert("Пользователь успешно изменён!");
                    // document.getElementById("form").reset();
            }
        }
        
    } else {
        if (form.getElementsByClassName("is-valid").length == 5) {
            var user1 = {
                name: name,
                email: email,
                password: password
            };
            tempLS = localStorage.getItem(user2Map.name + "5photo"); 
            localStorage.removeItem(user2Map.name);
            localStorage.setItem(name,JSON.stringify(user1));
            localStorage.removeItem('user1');
            localStorage.setItem('user1',JSON.stringify(user1));
            localStorage.removeItem(user2Map.name + "5photo");
            localStorage.setItem(name + "5photo",tempLS);
            alert("Пользователь успешно изменён!");
            // document.getElementById("form").reset();
            
        }
    }
    
    

}

function leave() {
    localStorage.removeItem('user1');
    window.location.href = "../index.html"
}



function setInvalid(element) {
    element.classList.add('is-invalid');
    element.classList.remove('is-valid')
}

function setValid(element) {
    element.classList.add('is-valid');
    element.classList.remove('is-invalid')
};


function handleImagePreview() {
    var fileInput = document.getElementById('customFile');
    var imageContainer = document.getElementById('imageContainer');
    var previewImageElement = document.getElementById('previewImageElement');
    var defaultImage = document.getElementById('defaultImage');
    var file = fileInput.files[0];
    var reader = new FileReader();

    var user = localStorage.getItem('user1');
    var userMap = JSON.parse(user);
    
    reader.onloadend = function () {
        previewImageElement.src = reader.result;
        if (file.type.startsWith('image/')) {
            localStorage.setItem(userMap.name + "5photo", reader.result);
        }
        
        imageContainer.classList.add('has-image');

        previewImageElement.style.width = '250px'; 
        previewImageElement.style.height = '250px';
        previewImageElement.hidden = false;
        defaultImage.hidden = true; 
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      previewImageElement.src = '';
      imageContainer.classList.remove('has-image');
    }
}

function removeImage() {
    var imageContainer = document.getElementById('imageContainer');
    var previewImageElement = document.getElementById('previewImageElement');
    var fileInput = document.getElementById('customFile');
    var defaultImage = document.getElementById('defaultImage');

    var user = localStorage.getItem('user1');
    var userMap = JSON.parse(user);


    previewImageElement.src = '';
    fileInput.value = ''; // Reset the file input
    imageContainer.classList.remove('has-image');
    defaultImage.hidden = false; 
    previewImageElement.hidden = true; 
    localStorage.removeItem(userMap.name + "5photo")
}

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