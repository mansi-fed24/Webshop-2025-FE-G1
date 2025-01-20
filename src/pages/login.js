export function LoginPage() {
  const container = document.createElement("div");
  container.className = "login-container";

  container.innerHTML = `
    <form id="loginForm" class="login-form">
      <button type="submit">
        FEATURE NOT IMPLEMENTED
      </button>
    </form>
  `;

  const form = container.querySelector("#loginForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username")?.value;
    const password = document.getElementById("password")?.value;

    // Basic demo login - DO NOT USE IN PRODUCTION
    if (username === "admin" && password === "admin") {
      window.location.href = "/admin.html";
    } else {
      alert("Invalid credentials: LOGGING IN ANYWAY");
      window.location.href = "/admin.html";
    }
  });

  return container;
}
