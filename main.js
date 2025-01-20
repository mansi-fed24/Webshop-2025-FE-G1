import { Header } from "./src/components/Header.js";
import { Footer } from "./src/components/Footer.js";
import { LoginPage } from "./src/pages/login.js";
import { AdminPage } from "./src/pages/admin.js";
import { HomePage } from "./src/pages/home.js";
import { NotFound } from "./src/components/NotFound.js";

async function renderPage() {
  const app = document.querySelector("#app");
  const path = window.location.pathname;
  let mainContent;

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

    // Clear existing content
    app.innerHTML = "";

    // Add header
    app.appendChild(Header());

    // Add main content
    const mainElement = document.createElement("main");
    mainElement.className = "main-content";
    mainElement.appendChild(mainContent);
    app.appendChild(mainElement);

    // Add footer
    app.appendChild(Footer());
  } catch (error) {
    console.error("Error rendering page:", error);
    app.innerHTML = "";

    // Even in error state, maintain layout
    app.appendChild(Header());

    const errorMain = document.createElement("main");
    errorMain.className = "main-content";
    errorMain.innerHTML = `
      <div class="error-message">
        <h2>Something went wrong</h2>
        <p>Please try again later</p>
      </div>
    `;
    app.appendChild(errorMain);

    app.appendChild(Footer());
  }
}

renderPage();
window.addEventListener("popstate", renderPage);
