import './style.css'
import { Header } from './src/components/Header.js'
import { Footer } from './src/components/Footer.js'
import { ProductList } from './src/components/ProductList.js'
import { LoginPage } from './src/pages/login.js'
import { AdminPage } from './src/pages/admin.js'

function renderPage() {
  console.log('renderPage');
  const path = window.location.pathname;
  let mainContent = '';

  switch(path) {
    case '/login':
      mainContent = LoginPage();
      break;
    case '/admin':
      mainContent = AdminPage();
      break;
    default:
      mainContent = `
        <h1>Welcome to Hakim Livs</h1>
        ${ProductList()}
      `;
  }

  document.querySelector('#app').innerHTML = `
    ${Header()}
    <main class="main-content">
      ${mainContent}
    </main>
    ${Footer()}
  `;
}

renderPage();
window.addEventListener('popstate', renderPage);