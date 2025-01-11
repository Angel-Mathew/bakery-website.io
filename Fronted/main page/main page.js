// main page/main page.js
const API_URL = 'http://localhost:5000/api';

// Get form elements
const loginForm = document.getElementById('account_form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="psw"]');

// Function to open login form
function openForm() {
    document.getElementById("account_form").style.display = "block";
}

// Function to close login form
function closeForm() {
    document.getElementById("account_form").style.display = "none";
}

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to handle form submission
async function handleSubmit(event) {
    event.preventDefault();
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Basic form validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Login failed');
        }

        // Store the token in localStorage
        localStorage.setItem('token', data.token);
        
        // Clear form and close it
        emailInput.value = '';
        passwordInput.value = '';
        closeForm();
        
        alert('Login successful!');
        
        // Optionally redirect or update UI
        updateUIForLoggedInUser();
    } catch (error) {
        alert(error.message);
    }
}

// Function to update UI for logged-in user
function updateUIForLoggedInUser() {
    // Add your UI updates here
    // For example, show user profile, hide login button, etc.
}

// Function to check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('token') !== null;
}

// Add event listeners
document.querySelector('.open-button').addEventListener('click', openForm);
document.querySelector('.cancel').addEventListener('click', closeForm);
loginForm.addEventListener('submit', handleSubmit);

// Close form when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === loginForm) {
        closeForm();
    }
});

// Check login status on page load
document.addEventListener('DOMContentLoaded', () => {
    if (isLoggedIn()) {
        updateUIForLoggedInUser();
    }
});
  