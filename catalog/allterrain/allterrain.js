const jsonDataTerrain = [
    {
        "id": 1,
        "title": "Вездеход Polariz RZR PRO 2000 STEALTH Black",
        "price": "6 565 345 ₽",
        "img": "../img/section/shop.svg",
        "imgmain": "../img/section/allterrain/img-1.png",
        "brand": "Polariz",
    },
    {
        "id": 2,
        "title": "Вездеход CAN-AM Maverick RS 999 T Black/Yellow",
        "price": "6 979 785 ₽",
        "img": "../img/section/shop.svg",
        "imgmain": "../img/section/allterrain/img-2.png",
        "brand": "CAN-AM",
    },
    {
        "id": 3,
        "title": "Вездеход Polariz General XP4 1000 AVALANCHE Gray",
        "price": "7 235 900 ₽",
        "img": "../img/section/shop.svg",
        "imgmain": "../img/section/allterrain/img-3.png",
        "brand": "Polariz",
    },
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
            <img src="${item.img}" alt="shop">
        </div>
    </div>
  `;
}


function filterItems() {
    const selectedBrands = document.querySelectorAll('input[name="brand"]:checked');
    const selectedBrandsValues = [...selectedBrands].map(input => input.value);

    const filteredItems = jsonDataTerrain.filter(item =>
        selectedBrandsValues.length === 0 || selectedBrandsValues.includes(item.brand)
    );

    displayItems(filteredItems);
}

function displayItems(items) {
    const container = document.getElementById('allterrain-items-container');
    container.innerHTML = '';

    items.forEach(item => {
        container.innerHTML += createItemCard(item);
    });
}

document.querySelector('.choose').addEventListener('click', filterItems);

displayItems(jsonDataTerrain);