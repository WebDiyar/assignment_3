function about() {
    let str = 'Компания "DRIVE MOTO" - это организация, специализирующаяся на предоставлении услуг в сфере разных транспортов' +
    ' и мотоциклетного оборудования в различных городах России. Основанная с целью удовлетворения потребностей клиентов,' +
    ' "DRIVE MOTO" предлагает широкий ассортимент услуг и продуктов для множества видов техник.'
    let nothing = '11';

    document.getElementsByClassName('about')[0].addEventListener('click', function() {
        alert(nothing);
    });
    document.getElementsByClassName('about')[1].addEventListener('click', function() {
        alert(nothing);
    });
    document.getElementsByClassName('about')[2].addEventListener('click', function() {
        alert(nothing);
    });
    document.getElementsByClassName('about')[3].addEventListener('click', function() {
        alert(str);
    });
    document.getElementsByClassName('about')[4].addEventListener('click', function() {
        alert(str);
    });
}

function contact() {
    document.getElementById('contact').addEventListener('click', function() {
        alert('Наши контакты: +77753471859');
    });    
}

function store() {
    document.getElementById('store').addEventListener('click', function() {
        alert( 'Наши адреса: \n'+
        'Москва, ул. Пушкина 21   пн-сб: 8.00-19.00, вс: 9.00-17.00 \n' + 
        'Москва, ул. Южная 134   пн-сб: 8.00-19.00, вс: 9.00-17.00 \n' + 
        'Санкт-Петербург, ул. Красная 19   пн-сб: 8.00-19.00, вс: 9.00-17.00 \n' +
        'Киев, ул Шевченко 167   пн-сб: 8.00-19.00, вс: 9.00-17.00');
    });    
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
        alert("Спасибо! Мы уведомим вас о предстоящих акциях.");
    }
    
}
function displayError(element, message) {
    element.textContent = message;
}

store()
about();
contact();
