const admin = {
    name: 'admin',
    email: 'admin@mail.ru',
    password: 'adminadmin'
}
localStorage.setItem('admin', JSON.stringify(admin))

document.addEventListener("DOMContentLoaded", function () {
    const userTableBody = document.getElementById("userTableBody");
    const addUserForm = document.getElementById("addUserForm");
    const editUserForm = document.getElementById("editUserForm");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    function outputLocalStorage() {
        userTableBody.innerHTML = ""; // Clear the table before adding items

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i); // Get the key at index i
            if (key !== "admin") {
                const value = JSON.parse(localStorage.getItem(key)); // Get the value for the key

                // Create a new row for each item
                const tableRow = userTableBody.insertRow();
                tableRow.innerHTML = `
                    <td>${key}</td>
                    <td>${value.email}</td>
                    <td>${value.password}</td>
                    <td>
                    <button class="edit-button" data-key="${key}">Edit</button>                      
                    <button class="delete-button" data-key="${key}">Delete</button>
                    </td>
                `;

                const editButton = tableRow.querySelector(".edit-button");
                const deleteButton = tableRow.querySelector(".delete-button");

                // Add event listeners for edit and delete buttons
                editButton.addEventListener("click", function () {
                    const key = this.getAttribute("data-key");

                });

                deleteButton.addEventListener("click", function () {
                    const key = this.getAttribute("data-key");
                    // Implement the delete functionality
                    localStorage.removeItem(key);
                    outputLocalStorage(); // Update the table after deleting
                });
            }
        }
    }



    addUserForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = usernameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;

        if (username && email && password) {
            const user = {
                name: username,
                email: email,
                password: password
            };

            localStorage.setItem(username, JSON.stringify(user));
            outputLocalStorage(); // Update the table after adding
            usernameInput.value = "";
            emailInput.value = "";
            passwordInput.value = "";
        } else {
            alert("Please fill in all fields.");
        }
    });

    outputLocalStorage(); // Initial output of local storage items
});
