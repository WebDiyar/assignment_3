let cartCount = 0;

// Function to create a clone of the item card and add it to the cart
// Function to create a clone of the item card and add it to the cart
function addToCart(itemNumber) {
    // Clone the item card
    const itemCard = document.querySelector(`.section-item${itemNumber}`);
    const clonedItem = itemCard.cloneNode(true);

    // Modify the cloned item to remove the shop button
    const shopButton = clonedItem.querySelector('.section-item1-shop');
    if (shopButton) {
        shopButton.remove();
    }

    clonedItem.style.margin = '20px auto'; // Center the card and add margin

    // Add the cloned item to the cart
    const cart = document.querySelector('.listCart');
    cart.appendChild(clonedItem);

    // Update the cart count and display
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;

    // Show the cartTab
    const cartTab = document.querySelector('.cartTab');
    cartTab.style.display = 'block';

    // Save cart state to local storage
    saveCartState();
}


// Function to remove all items from the cart
function removeAllItems() {
    const cart = document.querySelector('.listCart');
    cart.innerHTML = ''; // Remove all items from the cart

    cartCount = 0;
    document.getElementById('cartCount').textContent = cartCount;

    // Hide the cartTab when all items are removed
    const cartTab = document.querySelector('.cartTab');
    cartTab.style.display = 'none';

    // Save cart state to local storage
    saveCartState();
}

// Function to delete an item from the cart
function deleteItem(element) {
    const cart = document.querySelector('.listCart');
    cart.removeChild(element);

    cartCount--;
    document.getElementById('cartCount').textContent = cartCount;

    // Save cart state to local storage
    saveCartState();
}

// Open the modal window on button click
const closeButton = document.querySelector('.close');
const modal = document.querySelector('.cartTab');

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Show the modal when the "Check Out" button is clicked
const checkOutButton = document.querySelector('.checkOut');

checkOutButton.addEventListener('click', () => {
    modal.style.display = 'block';
    removeAllItems();
});

// Load saved cart items and count on webpage load
document.addEventListener('DOMContentLoaded', () => {
    const savedCount = localStorage.getItem('cartCount');
    if (savedCount) {
        cartCount = parseInt(savedCount);
        document.getElementById('cartCount').textContent = cartCount;
    }

    const cart = document.querySelector('.listCart');
    const savedItems = localStorage.getItem('cartItems');
    if (savedItems) {
        cart.innerHTML = savedItems;
    }
});

// Save cart items and count when an item is added to the cart
function saveCartState() {
    const cart = document.querySelector('.listCart');
    localStorage.setItem('cartItems', cart.innerHTML);
    localStorage.setItem('cartCount', cartCount.toString());
}

const buyButton = document.getElementById('buyButton');

// Add a click event listener to the button
buyButton.addEventListener('click', () => {
    // Navigate to the desired URL in JavaScript
    window.location.href = "/credit_card/credit_card.html";
});
