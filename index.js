function updateCountdown() {
    const targetDate = new Date('2023-11-26T00:00:00'); //(10/31/2023)
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

// function about() {
//     let str = 'Компания "DRIVE MOTO" - это организация, специализирующаяся на предоставлении услуг в сфере разных транспортов' +
//         ' и мотоциклетного оборудования в различных городах России. Основанная с целью удовлетворения потребностей клиентов,' +
//         ' "DRIVE MOTO" предлагает широкий ассортимент услуг и продуктов для множества видов техник.'
//     const aboutElements = document.getElementsByClassName('about');
//     for (let i = 0; i < aboutElements.length; i++) {
//         aboutElements[i].addEventListener('click', function () {
//             if (i < 3) {
//                 window.location.href = "catalog/addToBasket/addToBasket.html";
//             } else {
//                 alert(str);
//             }
//         });
//     }
// }

// function contact() {
//     document.getElementById('contact').addEventListener('click', function () {
//         alert('Наши контакты: +77753471859');
//     });
// }

// function store() {
//     document.getElementById('store').addEventListener('click', function () {
//         alert('Наши адреса: \n' +
//             'Москва, ул. Пушкина 21   пн-сб: 8.00-19.00, вс: 9.00-17.00 \n' +
//             'Москва, ул. Южная 134   пн-сб: 8.00-19.00, вс: 9.00-17.00 \n' +
//             'Санкт-Петербург, ул. Красная 19   пн-сб: 8.00-19.00, вс: 9.00-17.00 \n' +
//             'Киев, ул Шевченко 167   пн-сб: 8.00-19.00, вс: 9.00-17.00');
//     });
// }

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
            link.href = 'catalog/Popular/catalog.html';
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
        const modal = new bootstrap.Modal(document.getElementById("staticBackdrop0"));
        modal.toggle();

    }

}
function displayError(element, message) {
    element.textContent = message;
}

function checkLoginned() {
    let user = localStorage.getItem('user1');
  
    if (user) {
        window.location.href = "user_page/user_page.html";
    } else {
        // const profile = document.getElementById('profile');
        // profile.setAttribute('data-bs-toggle', 'modal');
        // profile.setAttribute('data-bs-target', '#staticBackdropNotLoggined');
        const form = document.getElementById('form');
        var notLoginnedModal = new bootstrap.Modal(document.getElementById('staticBackdropNotLoginned'));
        notLoginnedModal.show();
    }
 }



 const jsonData = [
    {
        "id": 1,
        "title": "Водонепроницаемый Рюкзак",
        "price": "9 800 ₽",
        "img": "main/img/section2/shop.svg",
        "imgmain": "main/img/section2/item-1.png",
    },
    {
        "id": 2,
        "title": "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
        "price": "1 100 475 ₽",
        "img": "main/img/section2/shop.svg",
        "imgmain": "main/img/section2/item-2.png",
    },
    {
        "id": 3,
        "title": "Гидроцикл BRP SeaDoo GTI 130hp SE White\\Krypton Green",
        "price": "1 067 500 ₽",
        "img": "main/img/section2/shop.svg",
        "imgmain": "main/img/section2/item-3.png",
    }
];

function getData(id) {
    return jsonData[id];
}


function showCartCount() {
    let cart = localStorage.getItem('cart1Popular');
    let cartCount = document.getElementById('cartCount')
    if (cart) {
        let cartLength = JSON.parse(cart).length 
        localStorage.setItem('cartCount1Popular',JSON.stringify(cartLength));
        cartCount.innerText = `${cartLength}`;
    } else {
        localStorage.setItem('cartCount1Popular',JSON.stringify(0))
        cartCount.innetText = `${0}`;
    }
    
}





function addToCart(item) {
    
    let cart = JSON.parse(localStorage.getItem('cart1Popular')) || [];

    
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
        
        existingItem.quantity += 1;
    } else {
        
        cart.push({ ...item, quantity: 1 });
        showCartCount();
        
    }

    // Update the cart in local storage
    localStorage.setItem('cart1Popular', JSON.stringify(cart));
    updateCartModal()
    
}
updateCartModal()
// Example usage in the createItemCard function
function createItemCard(item) {
    return `
    <div class="section-item">
        <img src="${item.imgmain}" alt="item-${item.id}" class="item${item.id}-img">
        <span class="section-item${item.id}-tittle">
            ${item.title}
        </span>
        <span class="section-item${item.id}-cost" id="rubl">
            ${item.price}
        </span>
        <div class="section-item${item.id}-shop">
        <a href="javascript:void(0);" onclick="addToCart(${JSON.stringify(item).replace(/"/g, '&quot;')})" class="cartButton"><img src="${item.img}" alt="shop"></a>
        </div>
    </div>
    
  `;
}

function updateCartModal() {
    let cart = JSON.parse(localStorage.getItem('cart1Popular')) || [];
    let cartModalBody = document.getElementById('cartModalBody');
    let totalProductsElement = document.getElementById('totalProducts');
    let totalPriceElement = document.getElementById('totalPrice');

    cartModalBody.innerHTML = '';

    let totalProducts = 0;
    let totalPrice = 0;

    if (cart.length === 0) {
        cartModalBody.innerHTML = '<p>Ваша корзина пуста.</p>';
    } else {
        cart.forEach(item => {
            totalProducts += item.quantity;
            totalPrice += item.quantity * parseInt(item.price.replace(/\D+/g, ''));

            cartModalBody.innerHTML += `
                <div class="cart-item d-flex flex-row justify-content-around">
                    <img src="${item.imgmain}" alt="item-${item.id}" style="max-width: 50px;">
                    <span>${item.title} - ${item.price}</span>
                    <div class="quantity-controls float-end">
                        <button class="btn btn-sm btn-secondary" onclick="decreaseQuantity(${item.id})">-</button>
                        <span>${item.quantity}</span>
                        <button class="btn btn-sm btn-secondary" onclick="increaseQuantity(${item.id})">+</button>
                        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">Удалить</button>
                    </div>
                </div>
            `;
        });
    }
    showCartCount()
    totalProductsElement.innerText = `${totalProducts} товаров`;
    totalPriceElement.innerText = `Общая стоимость: ${totalPrice} ₽`;
}

function removeFromCart(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart1Popular')) || [];
    let updatedCart = cart.filter(item => item.id !== itemId);

    localStorage.setItem('cart1Popular', JSON.stringify(updatedCart));

    ;

    updateCartModal();
    showCartCount()
}





function increaseQuantity(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart1Popular')) || [];
    let item = cart.find(item => item.id === itemId);

    if (item) {
        item.quantity += 1;
        localStorage.setItem('cart1Popular', JSON.stringify(cart));
        updateCartModal();
    }
}


function decreaseQuantity(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart1Popular')) || [];
    let item = cart.find(item => item.id === itemId);

    if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem('cart1Popular', JSON.stringify(cart));
        updateCartModal();
    }
}







 function checkLoginnedCart() {
    let user = localStorage.getItem('user1');
  
    if (user) {
        const form = document.getElementById('form');
        var cartModal = new bootstrap.Modal(document.getElementById('staticBackdropCart'));
        cartModal.show();
        
    } else {
        // const profile = document.getElementById('profile');
        // profile.setAttribute('data-bs-toggle', 'modal');
        // profile.setAttribute('data-bs-target', '#staticBackdropNotLoggined');
        const form = document.getElementById('form');
        var notLoginnedModal = new bootstrap.Modal(document.getElementById('staticBackdropNotLoginned'));
        notLoginnedModal.show();
    }
 }

 function checkCartIsEmpty(id) {
    let count = parseInt(JSON.parse((localStorage.getItem(id))))
    if (count == 0) {
        alert("У вас пустая корзина!")
    } else {
        window.location.replace('credit_card/credit_card.html')
    }
 }

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