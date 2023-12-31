const admin = {
    name: 'admin',
    email: 'admin@mail.ru',
    password: 'adminadmin'
}
localStorage.setItem('admin',JSON.stringify(admin))

document.addEventListener("DOMContentLoaded", function() {
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
            val = localStorage.getItem(key);
            if (key !== "admin" && val.includes("email") && key != "user1") {
                const value = JSON.parse(localStorage.getItem(key)); // Get the value for the key

                // Create a new row for each item
                const tableRow = userTableBody.insertRow();
                tableRow.innerHTML = `
                    <td>${value.name}</td>
                    <td>${value.email}</td>
                    <td>${value.password}</td>
                    <td>
                        <button class="edit-button" data-key="${key}" data-toggle="modal" data-target="#editUserModal">Изменить</button>
                        <button class="delete-button" data-key="${key}">Удалить</button>
                    </td>
                `;

                const editButton = tableRow.querySelector(".edit-button");
                const deleteButton = tableRow.querySelector(".delete-button");

                editButton.addEventListener("click", function() {
                    const key = this.getAttribute("data-key");
                
                    // Retrieve the user data associated with the key
                    const value = JSON.parse(localStorage.getItem(key));
                
                    // Pre-fill the edit form fields with the user's data
                    const editUsernameInput = document.getElementById("editUsername");
                    const editEmailInput = document.getElementById("editEmail");
                    const editPasswordInput = document.getElementById("editPassword");
                
                    editUsernameInput.value = key;
                    editEmailInput.value = value.email;
                    editPasswordInput.value = value.password;
                
                    // Add a data-key attribute to the "Save" button in the edit form
                    const saveEditButton = document.querySelector("#editUserModal [type='submit']");
                    saveEditButton.setAttribute("data-key", key);
                
                    saveEditButton.addEventListener("click", function(event) {
                        event.preventDefault();
                
                        const editUsernameInput = document.getElementById("editUsername");
                        const editEmailInput = document.getElementById("editEmail");
                        const editPasswordInput = document.getElementById("editPassword");
                
                        const username = editUsernameInput.value;
                        const email = editEmailInput.value;
                        const password = editPasswordInput.value;
                
                        if (username && email && password) {
                            // Create an updated user object
                            const updatedUser = {
                                name: username,
                                email: email,
                                password: password
                            };


                            // Update the existing user in local storage
                            localStorage.setItem(username, JSON.stringify(updatedUser));
                            if (username !== key){
                                localStorage.removeItem(key);
                            }
                
                            outputLocalStorage(); // Update the table after editing
                            // Hide the edit modal
                            $('#editUserModal').modal('hide');
                        } else {
                            alert("Please fill in all fields.");
                        }
                    });
                });
                
                

                deleteButton.addEventListener("click", function() {
                    const key = this.getAttribute("data-key");
                    // Implement the delete functionality
                    localStorage.removeItem(key);
                    outputLocalStorage(); // Update the table after deleting
                });
            }
        }
    }
    

    

    addUserForm.addEventListener("submit", function(event) {
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
            $('#addUserModal').modal('hide');
        } else {
            alert("Please fill in all fields.");
        }
    });

    outputLocalStorage(); // Initial output of local storage items
});
