const jsonDataEngine = [
    {
        "id": 1,
        "title": "Двигатель Mercury 40 ELPT 4CYL 4-тактный",
        "price": "440 000 ₽",
        "imgshop": "../img/section/shop.svg",
        "imgmain": "../img/section/engine/img-1.png",
        "brand": "Mercury",
    },
    {
        "id": 2,
        "title": "Двигатель Avator 3,5 7,5 ELH Electric Kit",
        "price": "381 909 ₽",
        "imgshop": "../img/section/shop.svg",
        "imgmain": "../img/section/engine/img-2.png",
        "brand": "Avator",
    },
    {
        "id": 3,
        "title": "Двигатель Suzuki DF9.9BRS ELPT",
        "price": "278 450 ₽",
        "imgshop": "../img/section/shop.svg",
        "imgmain": "../img/section/engine/img-3.png",
        "brand": "Suzuki",
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

    const filteredItems = jsonDataEngine.filter(item =>
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

displayItems(jsonDataSnojsonDataEnginewmobile);