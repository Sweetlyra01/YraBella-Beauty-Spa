document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.querySelector('#signupForm');

    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // const selectedRole = signupForm.querySelector('select').value;
            const firstName = signupForm.querySelector('#firstname').value;
            const lastName = signupForm.querySelector('#lastname').value;
            const birthday = signupForm.querySelector('#birthday').value;
            const age = signupForm.querySelector('#age').value;
            const gender = signupForm.querySelector('input[name="gender"]:checked').value;
            const country = signupForm.querySelector('.country input').value;
            const province = signupForm.querySelector('.province input').value;
            const city = signupForm.querySelector('.city input').value;
            const postalCode = signupForm.querySelector('.posta input').value;
            const barangay = signupForm.querySelector('.country input').value;
            const email = signupForm.querySelector('.email input').value;
            const username = signupForm.querySelector('.user input').value;
            const password = signupForm.querySelector('.account_password:first-child input').value;
            const confirmPassword = signupForm.querySelector('.account_password:last-child input').value;

            // Validate and process the form data
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            // Retrieve existing user data from localStorage or your backend
            const usersData = JSON.parse(localStorage.getItem('users')) || [];

            // Generate a unique ID that starts from 1
            const userId = (usersData.length + 1).toString();

            // Create a new user object
            const newUser = {
                id: userId,
                // role: selectedRole,
                firstName: firstName,
                lastName: lastName,
                birthday: birthday,
                age: age,
                gender: gender,
                country: country,
                province: province,
                city: city,
                postalCode: postalCode,
                barangay: barangay,
                email: email,
                username: username,
                password: password
            };

            usersData.push(newUser);

            // Save the updated user data back to localStorage
            localStorage.setItem('users', JSON.stringify(usersData));

            alert('Account created successfully!');
            // Redirect to the login page
            window.location.href = 'loginForm.html';
        });
    }
});
