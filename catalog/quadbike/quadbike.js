const jsonData = [
    {
        "id": 1,
        "title": "Квадроцикл Excite 50cc Blue Kids 2023 Premium Mini",
        "price": "531 500 ₽",
        "img": "../img/section/shop.svg",
        "imgmain": "../img/section/quadbike/img-1.png",
        "brand": "Excite",
    },
    {
        "id": 2,
        "title": "Квадроцикл TGB Blade 600SL Grey Agricultural",
        "price": "719 000 ₽",
        "img": "../img/section/shop.svg",
        "imgmain": "../img/section/quadbike/img-2.png",
        "brand": "TGB",
    },
    {
        "id": 3,
        "title": "Квадроцикл Segway Snarler ATV6 B 4x4 Prairie/Camo",
        "price": "534 000 ₽",
        "img": "../img/section/shop.svg",
        "imgmain": "../img/section/quadbike/img-3.png",
        "brand": "Segway",
    },
    {
        "id": 4,
        "title": "Квадроцикл FunBikes Xtrax E-Sport Electric Blue Junior",
        "price": "нет в наличии",
        "img": "../img/section/shop.svg",
        "imgmain": "../img/section/quadbike/img-4.png",
        "brand": "FunBikes",
    },
    {
        "id": 5,
        "title": "Квадроцикл FunBikes X-Max Roughrider 1600w Green",
        "price": "691 000 ₽",
        "img": "../img/section/shop.svg",
        "imgmain": "../img/section/quadbike/img-5.png",
        "brand": "FunBikes",
    },
    {
        "id": 6,
        "title": "Квадроцикл TGB Landmaster 600 Green Agricultural",
        "price": "745 235 ₽",
        "img": "../img/section/shop.svg",
        "imgmain": "../img/section/quadbike/img-6.png",
        "brand": "TGB",
    }
];
displayItems(jsonData);


function showCartCount() {
    let cart = localStorage.getItem('cart1Quadbike');
    let cartCount = document.getElementById('cartCount')
    if (cart) {
        let cartLength = JSON.parse(cart).length 
        localStorage.setItem('cartCount1Quadbike',JSON.stringify(cartLength));
        cartCount.innerText = `${cartLength}`;
    } else {
        localStorage.setItem('cartCount1Quadbike',JSON.stringify(0))
        cartCount.innetText = `${0}`;
    }
    
}





function addToCart(item) {
    
    let cart = JSON.parse(localStorage.getItem('cart1Quadbike')) || [];

    
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
        
        existingItem.quantity += 1;
    } else {
        
        cart.push({ ...item, quantity: 1 });
        showCartCount();
        
    }

    // Update the cart in local storage
    localStorage.setItem('cart1Quadbike', JSON.stringify(cart));
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
    let cart = JSON.parse(localStorage.getItem('cart1Quadbike')) || [];
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
                <div class="cart-item">
                    <img src="${item.imgmain}" alt="item-${item.id}" style="max-width: 50px;">
                    <span>${item.title} - ${item.price}</span>
                    <div class="quantity-controls">
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
    let cart = JSON.parse(localStorage.getItem('cart1Quadbike')) || [];
    let updatedCart = cart.filter(item => item.id !== itemId);

    localStorage.setItem('cart1Quadbike', JSON.stringify(updatedCart));

    ;

    updateCartModal();
    showCartCount()
}





function increaseQuantity(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart1Quadbike')) || [];
    let item = cart.find(item => item.id === itemId);

    if (item) {
        item.quantity += 1;
        localStorage.setItem('cart1Quadbike', JSON.stringify(cart));
        updateCartModal();
    }
}


function decreaseQuantity(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart1Quadbike')) || [];
    let item = cart.find(item => item.id === itemId);

    if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem('cart1Quadbike', JSON.stringify(cart));
        updateCartModal();
    }
}






function filterItems() {
    const selectedBrands = document.querySelectorAll('input[name="brand"]:checked');
    const selectedBrandsValues = [...selectedBrands].map(input => input.value);

    const filteredItems = jsonData.filter(item =>
        selectedBrandsValues.length === 0 || selectedBrandsValues.includes(item.brand)
    );

    displayItems(filteredItems);
}

function displayItems(items) {
    const container = document.getElementById('items-container');
    container.innerHTML = '';

    items.forEach(item => {
        container.innerHTML += createItemCard(item);
    });
}

document.querySelector('.choose').addEventListener('click', filterItems);






/**?
 * 
 * 
 *                     <div class="section-item">
                        <img src="../img/section/quadbike/img-1.png" alt="item-1" class="item1-img">
                        <span class="section-item1-tittle">
                            Квадроцикл Excite 50cc Blue Kids 2023 Premium Mini
                        </span>
                        <span class="section-item1-cost" id="rubl">
                            531 500 ₽
                        </span>
                        <div class="section-item1-shop">
                            <img src="../img/section/shop.svg" alt="shop">
                        </div>
                    </div>

                    <!--2-->
                    <div class="section-item">
                        <div class="item2-sale"><span class="sale">SALE</span></div>

                        <img src="../img/section/quadbike/img-2.png" alt="item-2" class="item2-img">
                        <span class="section-item2-tittle">
                            Квадроцикл TGB Blade 600SL Grey Agricultural
                        </span>
                        <span class="section-item2-cost" id="rubl">
                            719 000 ₽
                        </span>

                        <div class="section-item2-shop"><img src="../img/section/shop.svg" alt="shop"></div>
                    </div>

                    <!--3-->
                    <div class="section-item">
                        <img src="../img/section/quadbike/img-3.png" alt="item-3" class="item3-img">
                        <span class="section-item3-tittle">
                            Квадроцикл Segway Snarler ATV6 B 4x4 Prairie/Camo
                        </span>
                        <span class="section-item3-cost" id="rubl">
                            534 000 ₽
                        </span>
                        <div class="section-item3-shop"><img src="../img/section/shop.svg" alt="shop"></div>
                    </div>

                    <!--4-->
                    <div class="section-item">
                        <div class="item4-sale"><span class="sale">SALE</span></div>
                        <img src="../img/section/quadbike/img-4.png" alt="item-4" class="item4-img">
                        <span class="section-item4-tittle">
                            Квадроцикл FunBikes Xtrax E-Sport Electric Blue Junior
                        </span>
                        <span class="section-item4-cost" id="rubl">
                            нет в наличии
                        </span>
                        <span class="section-item4-error"><a href="../../form_validation/form_validation.html">Сообщить
                                о поступлении</a></span>
                    </div>

                    <!--5-->
                    <div class="section-item">
                        <img src="../img/section/quadbike/img-5.png" alt="item-5" class="item5-img"></a>
                        <span class="section-item5-tittle">
                            Квадроцикл FunBikes X-Max Roughrider 1600w Green
                        </span>
                        <span class="section-item5-cost" id="rubl">
                            691 000 ₽
                        </span>
                        <div class="section-item5-shop"><img src="../img/section/shop.svg" alt="shop"></div>
                    </div>

                    <!--6-->
                    <div class="section-item">
                        <img src="../img/section/quadbike/img-6.png" alt="item-6" class="item6-img"></a>
                        <span class="section-item6-tittle">
                            Квадроцикл TGB Landmaster 600 Green Agricultural
                        </span>
                        <span class="section-item6-cost" id="rubl">
                            745 235 ₽
                        </span>
                        <div class="section-item6-shop"><img src="../img/section/shop.svg" alt="shop"></div>
                    </div>
 */