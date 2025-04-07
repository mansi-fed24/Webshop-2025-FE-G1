

document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.querySelector(".close");
  const togglePassword = document.getElementById("togglePassword");
  const passwordField = document.getElementById("password");
  const loginPopup = document.querySelector(".login-popup"); // Select the entire popup

  // Close login form and navigate to index.html when cross is clicked
  closeBtn.addEventListener("click", () => {
    // Redirect to index.html
    window.location.href = "index.html"; 
    // Hide the login popup
    loginPopup.style.display = "none";
  });

  togglePassword.addEventListener("click", function () {
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
 });
  

  

});
