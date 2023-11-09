const jsonDataBoat = [
    {
        "id": 1,
        "title": "Катер Activ 755 WEEKEND - QuickSilver",
        "price": "9 975 104 ₽",
        "imgshop": "../img/section/shop.svg",
        "imgmain": "../img/section/boat/img-1.png",
        "brand": "Activ",
    },
    {
        "id": 2,
        "title": "Катер SunDancer 320 700 Sea Ray Beige",
        "price": "11 790 000 ₽",
        "imgshop": "../img/section/shop.svg",
        "imgmain": "../img/section/boat/img-2.png",
        "brand": "SunDancer",
    },
    {
        "id": 3,
        "title": "Катер Activ 675 CRUISER - QuickSilver",
        "price": "9 534 190 ₽",
        "imgshop": "../img/section/shop.svg",
        "imgmain": "../img/section/boat/img-3.png",
        "brand": "Activ",
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

    const filteredItems = jsonDataBoat.filter(item =>
        selectedBrandsValues.length === 0 || selectedBrandsValues.includes(item.brand)
    );

    displayItems(filteredItems);
}

function displayItems(items) {
    const container = document.getElementById('boat-items-container');
    container.innerHTML = '';

    items.forEach(item => {
        container.innerHTML += createItemCard(item);
    });
}

document.querySelector('.choose').addEventListener('click', filterItems);

displayItems(jsonDataBoat);

