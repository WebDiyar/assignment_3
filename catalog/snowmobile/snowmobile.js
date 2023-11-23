const jsonData = [
    {
        "id": 1,
        "title": "Снегоход Expedition LE 20 900 ACE TURBO Black",
        "price": "835 000 ₽",
        "img": "../img/section/shop.svg",
        "imgmain": "../img/section/snowmobile/img-1.png",
        "brand": "Expedition",
    },
    {
        "id": 2,
        "title": "Снегоход Commander LTD 900 ACE TURBO Black/Blue",
        "price": "867 000 ₽",
        "img": "../img/section/shop.svg",
        "imgmain": "../img/section/snowmobile/img-2.png",
        "brand": "Commander",
    },
    {
        "id": 3,
        "title": "Снегоход XTerrain BRUTAL 850 E-TEC Red/Black",
        "price": "900 000 ₽",
        "img": "../img/section/shop.svg",
        "imgmain": "../img/section/snowmobile/img-3.png",
        "brand": "XTerrain",
    },
];

displayItems(jsonData);


function showCartCount() {
    let cart = localStorage.getItem('cart1Snowmobile');
    let cartCount = document.getElementById('cartCount')
    if (cart) {
        let cartLength = JSON.parse(cart).length 
        localStorage.setItem('cartCount1Snowmobile',JSON.stringify(cartLength));
        cartCount.innerText = `${cartLength}`;
    } else {
        localStorage.setItem('cartCount1Snowmobile',JSON.stringify(0))
        cartCount.innetText = `${0}`;
    }
    
}





function addToCart(item) {
    
    let cart = JSON.parse(localStorage.getItem('cart1Snowmobile')) || [];

    
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
        
        existingItem.quantity += 1;
    } else {
        
        cart.push({ ...item, quantity: 1 });
        showCartCount();
        
    }

    // Update the cart in local storage
    localStorage.setItem('cart1Snowmobile', JSON.stringify(cart));
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
    let cart = JSON.parse(localStorage.getItem('cart1Snowmobile')) || [];
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
    let cart = JSON.parse(localStorage.getItem('cart1Snowmobile')) || [];
    let updatedCart = cart.filter(item => item.id !== itemId);

    localStorage.setItem('cart1Snowmobile', JSON.stringify(updatedCart));

    ;

    updateCartModal();
    showCartCount()
}





function increaseQuantity(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart1Snowmobile')) || [];
    let item = cart.find(item => item.id === itemId);

    if (item) {
        item.quantity += 1;
        localStorage.setItem('cart1Snowmobile', JSON.stringify(cart));
        updateCartModal();
    }
}


function decreaseQuantity(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart1Snowmobile')) || [];
    let item = cart.find(item => item.id === itemId);

    if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem('cart1Snowmobile', JSON.stringify(cart));
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
    const container = document.getElementById('snowmobile-items-container');
    container.innerHTML = '';

    items.forEach(item => {
        container.innerHTML += createItemCard(item);
    });
}

document.querySelector('.choose').addEventListener('click', filterItems);