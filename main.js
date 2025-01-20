import { Header } from "./src/components/Header.js";
import { Footer } from "./src/components/Footer.js";
import { LoginPage } from "./src/pages/login.js";
import { AdminPage } from "./src/pages/admin.js";
import { HomePage } from "./src/pages/home.js";
import { NotFound } from "./src/components/NotFound.js";

async function renderPage() {
  console.log("renderPage");
  const path = window.location.pathname;
  let mainContent = "";

  try {
    if (path.includes("/login")) {
      mainContent = LoginPage();
    } else if (path.includes("/admin")) {
      mainContent = await AdminPage();
    } else if (path === "/" || path.includes("/index")) {
      mainContent = await HomePage();
    } else {
      mainContent = NotFound();
    }

    document.querySelector("#app").innerHTML = `
      ${Header()}
      <main class="main-content">
        ${mainContent}
      </main>
      ${Footer()}
    `;
  } catch (error) {
    console.error("Error rendering page:", error);
    document.querySelector("#app").innerHTML = `
      ${Header()}
      <main class="main-content">
        <div class="error-message">
          <h2>Something went wrong</h2>
          <p>Please try again later</p>
        </div>
      </main>
      ${Footer()}
    `;
  }
}

renderPage();
window.addEventListener("popstate", renderPage);
