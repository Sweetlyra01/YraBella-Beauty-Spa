document.addEventListener("DOMContentLoaded", function () {
    // Set up a default admin account
    const defaultAdmin = {
        id: "admin1",
        username: "admin",
        password: "admin123" // Change this to the actual password
        // Add other admin details if needed
    };

 
    const usersData = JSON.parse(localStorage.getItem('users')) || [];


    const adminExists = usersData.some(user => user.username === defaultAdmin.username);


    if (!adminExists) {
        usersData.push(defaultAdmin);
        localStorage.setItem('users', JSON.stringify(usersData));
    }

    const loginForm = document.getElementById("loginForm");

    loginForm.onsubmit = function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const user = usersData.find(user => user.username === username);

        if (user) {
      
            if (user.password.toLowerCase() === password.toLowerCase()) {
                if (user.username === "admin") {
                    const confirmMessage = "Successfully login as admin! Enjoy Admin privileges.";
                    const userConfirmation = confirm(confirmMessage);

                    if (userConfirmation) {
                        window.location.href = "adminDashboard.html";
                    }
                } else {
                    const confirmMessage = "Successfully login! Enjoy Scrolling";
                    const userConfirmation = confirm(confirmMessage);

                    if (userConfirmation) {
                        window.location.href = "userDashboard.html";
                    }
                }
            } else {
          
                alert("Incorrect password. Please try again.");
            }
        } else {
       
            alert("Username not found. Please check your username.");
        }
    };

    const forgotPasswordLink = document.getElementById("forgotPassword");
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Sorry, please create an accout first.");
        });
    }
});
