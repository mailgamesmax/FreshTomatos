document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const inputUsername = document.getElementById("inputUsername").value;
        const inputPassword = document.getElementById("inputPassword").value;
        
        const registeredUsers = JSON.parse(localStorage.getItem("allRegisteredTomatosUsers")) || [];

        const actualUser = registeredUsers.find(u => u.name === inputUsername);

        if (actualUser) {
            if (actualUser.password === inputPassword) {
                alert(`Labas ${actualUser.name}!`);
            } else {
                alert("Blogas vartotojas arba slaptažodis");
            }
        } else {
            window.location.href = '/HTML/homepage.html';
        }
    });
});

// logout button nukreipia i homepage
const logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener("click", function() {    
    window.location.href = '/HTML/homepage.html';
});