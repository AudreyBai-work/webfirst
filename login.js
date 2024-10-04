// Hardcoded user credentials (for demo purposes)
const validUsername = "admin";
const validPassword = "admin123";

// Function to handle login
function login(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("login-message");

    // Check if the credentials are correct
    if (username === validUsername && password === validPassword) {
        // Save login status in localStorage
        localStorage.setItem("isLoggedIn", "true");
        // Redirect to the main page
        window.location.href = "index.html";
    } else {
        loginMessage.textContent = "Invalid username or password. Please try again.";
        loginMessage.style.color = "red";
    }
}

// Function to check login status and handle redirection
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn || isLoggedIn !== "true") {
        window.location.href = "login.html"; // Redirect to login page if not logged in
    }
}

// Function to handle logout
function logout() {
    // Clear the login status
    localStorage.removeItem("isLoggedIn");
    // Redirect to the login page
    window.location.href = "login.html";
}

// Check login status on page load (for index.html)
if (window.location.pathname.includes("index.html")) {
    checkLoginStatus();
}
