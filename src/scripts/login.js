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

  // Handle login form submission
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

  const email = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("https://webshop-2025-be-g1-blush.vercel.app/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-dev-api-key": "jonatan"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      alert(`Inloggning misslyckades: ${data.message || response.statusText}`);
      return;
    }

    // Store token and user info in localStorage
    localStorage.setItem("token", data.token);  // if it returns token directly
    localStorage.setItem("userEmail", data.email);
    localStorage.setItem("isAdmin", data.isAdmin);

    // Redirect to index.html
    window.location.href = "index.html";
  } catch (err) {
    console.error("Nätverksfel:", err);
    alert("Nätverksfel. Försök igen senare.");
  }
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

  const firstName = document.getElementById("registerFirstName").value.trim();
  const lastName = document.getElementById("registerLastName").value.trim();
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
    const response = await fetch("https://webshop-2025-be-g1-blush.vercel.app/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-dev-api-key": "jonatan"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password
      })
    });

    const data = await response.json();
    console.log(data);
    

    if (!response.ok) {
      alert(`Fel vid registrering: ${data.message || response.statusText}`);
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