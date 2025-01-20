export function Footer() {
  const element = document.createElement("footer");
  element.className = "site-footer";

  element.innerHTML = `
    <div class="footer-content">
      <p>&copy; 2024 Hakim Livs. All rights reserved.</p>
      <div class="footer-links">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/terms">Terms</a>
      </div>
    </div>
  `;

  return element;
}
