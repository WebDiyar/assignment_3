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