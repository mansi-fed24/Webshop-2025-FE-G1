export function NotFound() {
  const element = document.createElement("div");
  element.className = "not-found";

  element.innerHTML = `
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a href="index.html" class="back-home">Back to Home</a>
  `;

  return element;
}
