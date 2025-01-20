export function LoginPage() {
  const template = `
    <div class="login-container">
      <form id="loginForm" class="login-form">
        <button type="submit">
          FEATURE NOT IMPLEMENTED
        </button>
      </form>
    </div>
  `;

  setTimeout(() => {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username')?.value;
      const password = document.getElementById('password')?.value;
      
      // Basic demo login - DO NOT USE IN PRODUCTION
      if (username === "admin" && password === "admin") {
        window.location.href = "/admin.html";
      } else {
        alert("Invalid credentials: LOGGING IN ANYWAY");
        window.location.href = "/admin.html";
      }
    });
  }, 0);

  return template;
}