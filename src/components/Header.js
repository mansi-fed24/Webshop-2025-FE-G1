export function Header() {
  const template = `
    <header class="site-header">
      <nav>
        <div class="logo">Hakim Livs</div>
        <ul class="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/cart">Cart (0)</a></li>
          <li><a href="/admin">Admin</a></li>
        </ul>
      </nav>
    </header>
  `;
  
  return template;
}