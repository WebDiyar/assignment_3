const jsonData = [
    {
        "id": 1,
        "title": "Двигатель Mercury 40 ELPT 4CYL 4-тактный",
        "price": "440 000 ₽",
        "img": "../img/section/shop.svg",
        "imgmain": "../img/section/engine/img-1.png",
        "brand": "Mercury",
    },
    {
        "id": 2,
        "title": "Двигатель Avator 3,5 7,5 ELH Electric Kit",
        "price": "381 909 ₽",
        "img": "../img/section/shop.svg",
        "imgmain": "../img/section/engine/img-2.png",
        "brand": "Avator",
    },
    {
        "id": 3,
        "title": "Двигатель Suzuki DF9.9BRS ELPT",
        "price": "278 450 ₽",
        "img": "../img/section/shop.svg",
        "imgmain": "../img/section/engine/img-3.png",
        "brand": "Suzuki",
    },
];

displayItems(jsonData);


function showCartCount() {
    let cart = localStorage.getItem('cart1Engine');
    let cartCount = document.getElementById('cartCount')
    if (cart) {
        let cartLength = JSON.parse(cart).length 
        localStorage.setItem('cartCount1Engine',JSON.stringify(cartLength));
        cartCount.innerText = `${cartLength}`;
    } else {
        localStorage.setItem('cartCount1Engine',JSON.stringify(0))
        cartCount.innetText = `${0}`;
    }
    
}





function addToCart(item) {
    
    let cart = JSON.parse(localStorage.getItem('cart1Engine')) || [];

    
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
        
        existingItem.quantity += 1;
    } else {
        
        cart.push({ ...item, quantity: 1 });
        showCartCount();
        
    }

    // Update the cart in local storage
    localStorage.setItem('cart1Engine', JSON.stringify(cart));
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
    let cart = JSON.parse(localStorage.getItem('cart1Engine')) || [];
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
    let cart = JSON.parse(localStorage.getItem('cart1Engine')) || [];
    let updatedCart = cart.filter(item => item.id !== itemId);

    localStorage.setItem('cart1Engine', JSON.stringify(updatedCart));

    ;

    updateCartModal();
    showCartCount()
}





function increaseQuantity(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart1Engine')) || [];
    let item = cart.find(item => item.id === itemId);

    if (item) {
        item.quantity += 1;
        localStorage.setItem('cart1Engine', JSON.stringify(cart));
        updateCartModal();
    }
}


function decreaseQuantity(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart1Engine')) || [];
    let item = cart.find(item => item.id === itemId);

    if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem('cart1Engine', JSON.stringify(cart));
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
    const container = document.getElementById('engine-items-container');
    container.innerHTML = '';

    items.forEach(item => {
        container.innerHTML += createItemCard(item);
    });
}

document.querySelector('.choose').addEventListener('click', filterItems);