function updateCountdown() {
    const targetDate = new Date('2023-11-20T00:00:00'); //(10/31/2023)
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
    if (timeDifference < 0) {
        document.getElementById('promo').style.display = 'none'; // Hide the countdown when the date has passed
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        document.getElementById('countdown-days').textContent = days;
        document.getElementById('countdown-hours').textContent = hours;
        document.getElementById('countdown-minutes').textContent = minutes;
        document.getElementById('countdown-seconds').textContent = seconds;
        setTimeout(updateCountdown, 1000);
    }
}

function about() {
    let str = 'Компания "DRIVE MOTO" - это организация, специализирующаяся на предоставлении услуг в сфере разных транспортов' +
    ' и мотоциклетного оборудования в различных городах России. Основанная с целью удовлетворения потребностей клиентов,' +
    ' "DRIVE MOTO" предлагает широкий ассортимент услуг и продуктов для множества видов техник.'
    let nothing = 'Эта страница еще не доступна :(';

    const aboutElements = document.getElementsByClassName('about');
    for (let i = 0; i < aboutElements.length; i++) {
        aboutElements[i].addEventListener('click', function() {
            if (i < 3) {
                alert(nothing);
            } else {
                alert(str);
            }
        });
    }
}

function contact() {
    document.getElementById('contact').addEventListener('click', function () {
        alert('Наши контакты: +77753471859');
    });
}

function store() {
    document.getElementById('store').addEventListener('click', function () {
        alert('Наши адреса: \n' +
            'Москва, ул. Пушкина 21   пн-сб: 8.00-19.00, вс: 9.00-17.00 \n' +
            'Москва, ул. Южная 134   пн-сб: 8.00-19.00, вс: 9.00-17.00 \n' +
            'Санкт-Петербург, ул. Красная 19   пн-сб: 8.00-19.00, вс: 9.00-17.00 \n' +
            'Киев, ул Шевченко 167   пн-сб: 8.00-19.00, вс: 9.00-17.00');
    });
}

function slider() {
    let i = 1;

    document.getElementsByClassName('carousel-control-next')[0].addEventListener('click', function () {
        if (i === 2) {
            i = 1;
        } else {
            i++;
        }
        updateImage();
    });

    document.getElementsByClassName('carousel-control-prev')[0].addEventListener('click', function () {
        if (i === 1) {
            i = 2;
        } else {
            i--;
        }
        updateImage();
    });

    function updateImage() {
        const image = document.querySelector('.banner');
        image.src = 'main/img/header/header-banner' + i + '.jpg';

        const link = document.querySelector('.link-banner')
        if (i === 1) {
            link.href = 'catalog/jetski/catalog.html';
        }
        else {
            link.href = 'catalog/quadbike/catalog.html'
        }

    }
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
updateCountdown();
slider();




// const heart = document.getElementById('heart');
// const heart1 = document.getElementById('heart1');
// const heart2 = document.getElementById('heart2');
// const heart3 = document.getElementById('heart3');
// heart.addEventListener('click', function () {
//     if (heart.style.background == 'red') {
//         heart.style.background = 'none';
//     }
//     else {
//         heart.style.background = 'red'
//     }
// });

// heart1.addEventListener('click', function () {
//     if (heart1.style.background == 'red') {
//         heart1.style.background = 'none';
//     }
//     else {
//         heart1.style.background = 'red'
//     }
// });
// heart2.addEventListener('click', function () {
//     if (heart2.style.background == 'red') {
//         heart2.style.background = 'none';
//     }
//     else {
//         heart2.style.background = 'red'
//     }
// });
// heart3.addEventListener('click', function () {
//     if (heart3.style.background == 'red') {
//         heart3.style.background = 'none';
//     }
//     else {
//         heart3.style.background = 'red'
//     }
// });