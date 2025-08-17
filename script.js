function validateForm(event) {
    event.preventDefault();
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');
    document.getElementById('successMessage').style.display = 'none';
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();
    const phone = document.getElementById('phone').value.trim();
    let isValid = true;
    if (name === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    if (age === '' || isNaN(age) || age < 1 || age > 100) {
        document.getElementById('ageError').style.display = 'block';
        isValid = false;
    }
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('registrationForm').reset();
    }
    return isValid;
}
