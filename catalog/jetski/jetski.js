const jsonDataJetski = [
    {
        "id": 1,
        "title": "Гидроцикл BRP SeaDoo GTI 130hp SE Black\\Mango",
        "price": "1 049 500 ₽",
        "imgshop": "../img/section/shop.svg",
        "imgmain": "../img/section/jetski/img-1.png",
        "brand": "SeaDoo",
    },
    {
        "id": 2,
        "title": "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
        "price": "1 100 475 ₽",
        "imgshop": "../img/section/shop.svg",
        "imgmain": "../img/section/jetski/img-2.png",
        "brand": "SeaDoo",
    },
    {
        "id": 3,
        "title": "Гидроцикл BRP SeaDoo GTI 130hp SE White\\Krypton Green",
        "price": "1 067 500 ₽",
        "imgshop": "../img/section/shop.svg",
        "imgmain": "../img/section/jetski/img-3.png",
        "brand": "SeaDoo",
    },
    {
        "id": 4,
        "title": "Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream",
        "price": "нет в наличии",
        "imgshop": "../img/section/shop.svg",
        "imgmain": "../img/section/jetski/img-4.png",
        "brand": "SeaDoo",
    },
    {
        "id": 5,
        "title": "Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal",
        "price": "1 543 000 ₽",
        "imgshop": "../img/section/shop.svg",
        "imgmain": "../img/section/jetski/img-5.png",
        "brand": "SeaDoo",
    },
    {
        "id": 6,
        "title": "Гидроцикл Spark BRP 60hp 2 up",
        "price": "732 345 ₽",
        "imgshop": "../img/section/shop.svg",
        "imgmain": "../img/section/jetski/img-6.png",
        "brand": "Spark",
    },
    {
        "id": 7,
        "title": "Гидроцикл Spark BRP GTS 90hp Rental",
        "price": "857 666 ₽",
        "imgshop": "../img/section/shop.svg",
        "imgmain": "../img/section/jetski/img-7.png",
        "brand": "Spark",
    },
    {
        "id": 8,
        "title": "Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue",
        "price": "1 229 711 ₽",
        "imgshop": "../img/section/shop.svg",
        "imgmain": "../img/section/jetski/img-8.png",
        "brand": "SeaDoo",
    },
    {
        "id": 9,
        "title": "Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper",
        "price": "587 440 ₽",
        "imgshop": "../img/section/shop.svg",
        "imgmain": "../img/section/jetski/img-9.png",
        "brand": "Spark",
    }
];

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
            <img src="${item.imgshop}" alt="shop">
        </div>
    </div>
  `;
}


function filterItems() {
    const selectedBrands = document.querySelectorAll('input[name="brand"]:checked');
    const selectedBrandsValues = [...selectedBrands].map(input => input.value);

    const filteredItems = jsonDataJetski.filter(item =>
        selectedBrandsValues.length === 0 || selectedBrandsValues.includes(item.brand)
    );

    displayItems(filteredItems);
}

function displayItems(items) {
    const container = document.getElementById('jetski-items-container');
    container.innerHTML = '';
    items.forEach(item => {
        container.innerHTML += createItemCard(item);
    });
}

document.querySelector('.choose').addEventListener('click', filterItems);

displayItems(jsonDataJetski);