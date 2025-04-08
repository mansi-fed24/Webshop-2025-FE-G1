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
    const type =
      passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
});

// registeration form
document.addEventListener("DOMContentLoaded", () => {
  const closeBtns = document.querySelectorAll(".close");
  const loginPopup = document.getElementById("loginPopup");
  

  const createAccountBtn = document.getElementById("createAccountBtn");
  const backToLoginLink = document.getElementById("backToLogin");

  const toggleRegisterPassword = document.getElementById("toggleRegisterPassword");
  const registerPasswordField = document.getElementById("registerPassword");

  const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
  const confirmPasswordField = document.getElementById("confirmPassword");


  const loginFormWrapper = document.getElementById("loginFormWrapper");
  const registerFormWrapper = document.getElementById("registerFormWrapper");

  // Close all popups
  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  });

  // Show registration form
  createAccountBtn.addEventListener("click", () => {
    loginFormWrapper.style.display = "none";
    registerFormWrapper.style.display = "block";
  });

  // Go back to login form
  backToLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    registerFormWrapper.style.display = "none";
    loginFormWrapper.style.display = "block";
  });

  // Toggle password visibility on register form
  toggleRegisterPassword.addEventListener("click", function () {
    const type = registerPasswordField.getAttribute("type") === "password" ? "text" : "password";
    registerPasswordField.setAttribute("type", type);
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
  toggleConfirmPassword.addEventListener("click", function () {
    const type = confirmPasswordField.getAttribute("type") === "password" ? "text" : "password";
    confirmPasswordField.setAttribute("type", type);
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
});

// Handle registration form submission
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  //  1. Validate passwords match
  if (password !== confirmPassword) {
    alert("Lösenorden matchar inte. Försök igen.");
    return;
  }

  //  2. Send registration request to backend
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    if (!response.ok) {
      const data = await response.json();
      alert(`Fel vid registrering: ${data.message}`);
      return;
    }

    //  3. On success, switch to login view
    alert("Konto skapat! Du kan nu logga in.");
    registerForm.reset();
    document.getElementById("registerFormWrapper").style.display = "none";
    document.getElementById("loginFormWrapper").style.display = "block";
  } catch (error) {
    console.error("Nätverksfel:", error);
    alert("Ett nätverksfel uppstod. Försök igen senare.");
  }
});