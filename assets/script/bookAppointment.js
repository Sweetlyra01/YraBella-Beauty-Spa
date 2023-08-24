document.addEventListener('DOMContentLoaded', function () {
    let idCounter = parseInt(localStorage.getItem('idCounter')) || 1;

    const form = document.querySelector('form');
    const firstNameInput = document.querySelector('#firstName');
    const lastNameInput = document.querySelector('#lastName');
    const phoneNumberInput = document.querySelector('#phoneNumber');
    const emailAddressInput = document.querySelector('#emailAddress');
    const numberOfPersonsInput = document.querySelector('#numberOfPersons');
    const scheduleDateTimeInput = document.querySelector('#scheduleDateTime');
    const serviceSelect1 = document.querySelector('#selectService1');
    const serviceSelect2 = document.querySelector('#selectService2');
    const branchSelect = document.querySelector('#branchSelect');

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
            serviceSelect1.value === '' ||
            serviceSelect2.value === '' ||
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
            selectedService: serviceSelect1.value,
            selectedService: serviceSelect2.value,
            selectedBranch: branchSelect.value
        };

        // Retrieve existing data from localStorage
        const existingData = JSON.parse(localStorage.getItem('appointments')) || 
        existingData.push(appointmentData);
        localStorage.setItem('appointments', JSON.stringify(existingData));
        idCounter++;
        localStorage.setItem('idCounter', idCounter);
        alert('Successfully booked Appointment. Thank you!');
        form.reset();

        updateAppointmentList(existingData);

        window.location.href = 'userDashboard.html';
    });


    function updateAppointmentList(appointments) {
    }

    const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    updateAppointmentList(existingAppointments);
});



