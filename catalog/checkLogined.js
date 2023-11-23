function checkLoginned() {
    let user = localStorage.getItem('user1');
  
    if (user) {
        window.location.href = "../../user_page/user_page.html";
    } else {
        // const profile = document.getElementById('profile');
        // profile.setAttribute('data-bs-toggle', 'modal');
        // profile.setAttribute('data-bs-target', '#staticBackdropNotLoggined');
        const form = document.getElementById('form');
        var notLoginnedModal = new bootstrap.Modal(document.getElementById('staticBackdropNotLoginned'));
        notLoginnedModal.show();
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
        window.location.replace('../../credit_card/credit_card.html')
    }
 }