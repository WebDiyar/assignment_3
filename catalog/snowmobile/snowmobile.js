const jsonDataSnowmobile = [
    {
        "id": 1,
        "title": "Снегоход Expedition LE 20 900 ACE TURBO Black",
        "price": "835 000 ₽",
        "imgshop": "../img/section/shop.svg",
        "imgmain": "../img/section/snowmobile/img-1.png",
        "brand": "Expedition",
    },
    {
        "id": 2,
        "title": "Снегоход Commander LTD 900 ACE TURBO Black/Blue",
        "price": "867 000 ₽",
        "imgshop": "../img/section/shop.svg",
        "imgmain": "../img/section/snowmobile/img-2.png",
        "brand": "Commander",
    },
    {
        "id": 3,
        "title": "Снегоход XTerrain BRUTAL 850 E-TEC Red/Black",
        "price": "900 000 ₽",
        "imgshop": "../img/section/shop.svg",
        "imgmain": "../img/section/snowmobile/img-3.png",
        "brand": "XTerrain",
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
            <img src="${item.imgshop}" alt="shop">
        </div>
    </div>
  `;
}


function filterItems() {
    const selectedBrands = document.querySelectorAll('input[name="brand"]:checked');
    const selectedBrandsValues = [...selectedBrands].map(input => input.value);

    const filteredItems = jsonDataSnowmobile.filter(item =>
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

displayItems(jsonDataSnowmobile);