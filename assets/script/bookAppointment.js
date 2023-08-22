document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const firstNameInput = document.querySelector('#firstName');
    const lastNameInput = document.querySelector('#lastName');
    const phoneNumberInput = document.querySelector('#phoneNumber');
    const emailAddressInput = document.querySelector('#emailAddress');
    const numberOfPersonsInput = document.querySelector('#numberOfPersons');
    const scheduleDateTimeInput = document.querySelector('#scheduleDateTime');
    const serviceSelect = document.querySelector('#selectService');
    const branchSelect = document.querySelector('#branchSelect');

    // Initialize the ID counter from localStorage or start from 1
    let idCounter = parseInt(localStorage.getItem('idCounter')) || 1;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Check if all required fields are filled
        if (
            firstNameInput.value === '' ||
            lastNameInput.value === '' ||
            phoneNumberInput.value === '' ||
            emailAddressInput.value === '' ||
            numberOfPersonsInput.value === '' ||
            scheduleDateTimeInput.value === '' ||
            serviceSelect.value === ''||
            branchSelect.value === ''
        ) {
            alert('Please complete the form.');
            return; // Stop further processing
        }

        const appointmentData = {
            id: idCounter,
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            phoneNumber: phoneNumberInput.value,
            emailAddress: emailAddressInput.value,
            numberOfPersons: numberOfPersonsInput.value,
            scheduleDateTime: scheduleDateTimeInput.value,
            selectedService: serviceSelect.value,
            selectedBranch: branchSelect.value
        };

        // Retrieve existing data from localStorage
        const existingData = JSON.parse(localStorage.getItem('appointments')) || [];

        // Add the new appointment data
        existingData.push(appointmentData);

        // Save the updated data to localStorage
        localStorage.setItem('appointments', JSON.stringify(existingData));

        // Increment the ID counter
        idCounter++;

        // Update the ID counter in localStorage
        localStorage.setItem('idCounter', idCounter);

        // Display a success message
        alert('Successfully booked Appointment. Thank you!');

        // Clear the form
        form.reset();

        // Update the DOM to show the appointment data
        updateAppointmentList(existingData);
    });

    const goBackButton = document.querySelector('#goBackButton');
    if (goBackButton) {
        goBackButton.addEventListener('click', function () {
            // Navigate back to the previous page
            window.history.back();
        });
    }

    // Function to update the appointment list in the DOM
    function updateAppointmentList(appointments) {
        const appointmentListContainer = document.querySelector('#appointmentList');
        appointmentListContainer.innerHTML = ''; // Clear previous data

        appointments.forEach(appointment => {
            const appointmentItem = document.createElement('div');
            appointmentItem.className = 'appointment-item';
            appointmentItem.innerHTML = `
                <strong>Appointment ID:</strong> ${appointment.id}<br>
                <strong>Name:</strong> ${appointment.firstName} ${appointment.lastName}<br>
                <strong>Phone Number:</strong> ${appointment.phoneNumber}<br>
                <strong>Email Address:</strong> ${appointment.emailAddress}<br>
                <strong>Number of Persons:</strong> ${appointment.numberOfPersons}<br>
                <strong>Schedule Date and Time:</strong> ${appointment.scheduleDateTime}<br>
                <strong>Selected Service:</strong> ${appointment.selectedService}<br>
                <strong>Selected Location:</strong> ${appointment.selectedBranch}<br>
                <hr>
            `;

            appointmentListContainer.appendChild(appointmentItem);
        });
    }

    // Load existing appointments on page load
    const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    updateAppointmentList(existingAppointments);
});