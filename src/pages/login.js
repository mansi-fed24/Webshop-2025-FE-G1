export function LoginPage() {
  const template = `
    <div class="login-container">
      <form id="loginForm" class="login-form">
        <h2>Login to Admin Panel</h2>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  `;

  setTimeout(() => {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // Basic demo login - DO NOT USE IN PRODUCTION
      if (username === 'admin' && password === 'admin') {
        window.location.href = '/admin';
      } else {
        alert('Invalid credentials');
      }
    });
  }, 0);

  return template;
}