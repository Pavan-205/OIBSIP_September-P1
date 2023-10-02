const RegisterBtnLink = document.querySelector('.register-link');
const LoginBtnLink = document.querySelector('.login-link');
const wrapper = document.querySelector('.wrapper');

RegisterBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

LoginBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

// Function to handle user registration and store data in localStorage
function registerUser(username, email, password) {
    const userData = localStorage.getItem('userData');

    // Parse existing user data or initialize an empty array
    const users = userData ? JSON.parse(userData) : [];

    // Check if the username or email already exists
    if (users.some(user => user.username === username) || users.some(user => user.email === email)) {
        alert('You already have an account. You can login.');
        // Toggle the active class to switch to the login form
        wrapper.classList.toggle('active');
        return;
    }

    // Add the new user to the array
    users.push({ username, email, password });

    // Store the updated user data in localStorage
    localStorage.setItem('userData', JSON.stringify(users));

    alert('Registration Successful. You can now login.');

    // Toggle the active class to switch to the login form
    wrapper.classList.toggle('active');
}

// Function to handle user login and check data in localStorage
function loginUser(username, password) {
    const userData = localStorage.getItem('userData');

    // Parse existing user data or initialize an empty array
    const users = userData ? JSON.parse(userData) : [];

    const user = users.find(user => user.username === username);

    if (user && user.password === password) {
        alert('Login Successful');
        // Redirect to the secured page (for demonstration)
        // window.location.href = 'https://www.cricbuzz.com/profiles/1413/virat-kohli';
    } else {
        alert('Login failed. Check your username and password.');
    }
}

// Event listener for registration form submission
document.querySelector('.form-wrapper.register form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value; // Added email
    const password = this.querySelector('input[type="password"]').value;
    registerUser(username, email, password);
});

// Event listener for login form submission
document.querySelector('.form-wrapper.login form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;
    loginUser(username, password);
});
