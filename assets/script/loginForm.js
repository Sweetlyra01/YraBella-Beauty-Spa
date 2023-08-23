document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('#loginForm');
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const selectedRole = loginForm.querySelector('select').value;
        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        // Retrieve user data from localStorage
        const usersData = JSON.parse(localStorage.getItem('users')) || [];

        const user = usersData.find(userData => userData.username === enteredUsername && userData.password === enteredPassword && userData.role === selectedRole);

        if (user) {
            alert('Login successful');
            // Redirect to the appropriate page --> Conditional Statement of Seleting Roles
            if (selectedRole === 'admin') {
                window.location.href = 'adminDashboard.html';
            } else if (selectedRole === 'user') {
                window.location.href = 'userDashboard.html';
            }
        } else {
            alert('Login failed. Please check your credentials.');
        }
    });

    const forgotPasswordLink = document.querySelector('#forgotPassword');
    forgotPasswordLink.addEventListener('click', function () {
        // Handle forgot password logic here ------> 
        alert('Have you try to signup? Sign up now!');
    });
});
    // *****************************************************************************************************************************************************************************
    // SIGN UP FORM HERE        // SIGN UP FORM HERE    // SIGN UP FORM HERE    // SIGN UP FORM HERE        // SIGN UP FORM HERE        // SIGN UP FORM HERE        // SIGN UP FORM HERE              // SIGN UP FORM HERE      // SIGN UP FORM HERE    // SIGN UP FORM HERE
    // *****************************************************************************************************************************************************************************

    
    // const signupForm = document.querySelector('#signupForm');

    // signupForm.addEventListener('submit', function (event) {
    //     event.preventDefault();

    //     const selectedRole = signupForm.querySelector('select').value;
    //     const country = signupForm.querySelector('.country input').value;
    //     const province = signupForm.querySelector('.province input').value;
    //     const city = signupForm.querySelector('.city input').value;
    //     const postalCode = signupForm.querySelector('.posta input').value;
    //     const barangay = signupForm.querySelector('.country input').value;
    //     const email = signupForm.querySelector('.email input').value;
    //     const username = signupForm.querySelector('.user input').value;
    //     const password = signupForm.querySelector('.account_password:first-child input').value;
    //     const confirmPassword = signupForm.querySelector('.account_password:last-child input').value;

    //     // Validate and process the form data
    //     if (password !== confirmPassword) {
    //         alert('Passwords do not match.');
    //         return;
    //     }

    //     // Retrieve existing user data from localStorage
    //     const usersData = JSON.parse(localStorage.getItem('users')) || [];

    //     // Generate a unique ID
    //     const userId = (usersData.length + 1).toString();

    //     // Create a new user object
    //     const newUser = {
    //         id: userId,
    //         role: selectedRole,
    //         country: country,
    //         province: province,
    //         city: city,
    //         postalCode: postalCode,
    //         barangay: barangay,
    //         email: email,
    //         username: username,
    //         password: password
    //     };

    //     // in this part 
    //     usersData.push(newUser);

    //     // Save the updated user data back to localStorage
    //     localStorage.setItem('users', JSON.stringify(usersData));

    //     alert('Account created successfully!');
    //     // Redirect to the login page
    //     window.location.href = 'loginForm.html';
    // });
// });
