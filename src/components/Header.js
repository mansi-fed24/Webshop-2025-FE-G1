export function Header() {
  const element = document.createElement("header");
  element.className = "site-header";

  element.innerHTML = `
    <nav>
      <div class="logo">Hakim Livs</div>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="cart.html">Cart (0)</a></li>
        <li><a href="login.html">Login</a></li>
        <li><a href="admin.html" class="admin-link">Admin</a></li>
      </ul>
    </nav>
  `;

  return element;
}
