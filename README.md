# Hakim Livs - Frontend Handover (Webshop-2025-FE-G1)

## ✨ Project Overview

This is the frontend of the Hakim Livs Webshop, built by Group 1 during the frontend sprint of 2025. The webshop allows customers to browse products, add them to the cart, and place orders. It also features an admin panel for managing products. The project supports both guest users and logged-in users, with enhanced functionality available for admins.

## 📚 Repository

Frontend GitHub repo: [Webshop-2025-FE-G1](https://github.com/mansi-fed24/Webshop-2025-FE-G1.git)

## 📚 Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mansi-fed24/Webshop-2025-FE-G1.git
   ```
2. Open `index.html` with Live Server or any local server environment.
3. No external packages are needed, the project uses vanilla HTML/CSS/JavaScript.

## 🌐 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Fetch API**
- **JWT (via localStorage)**

Useful Links:

- [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Vanilla JS JWT Handling](https://jwt.io/introduction)

## 🗃️ Code Structure & Key Files

```
├── index.html               # Homepage
├── products.html            # Product overview page
├── cart.html                # Cart page
├── checkout.html            # Checkout page
├── login.html               # User login
├── admin-product.html       # Admin dashboard for product management
├── js/
│   ├── index.js             # Loads products on homepage
│   ├── products.js          # Loads all products on product page
│   ├── cart.js              # Handles cart rendering
│   ├── checkout.js          # Handles form and order submission
│   ├── login.js             # Handles user login
│   ├── admin-product.js     # Admin product overview and delete/edit
│   ├── admin-addproduct.js  # Handles product addition
│   └── utils/
│       ├── cartFunctions.js # Shared cart functions
│       └── api.js           # Reusable helper functions like toggleAdminLink
├── css/                     # Contains CSS files for each page
```

## ⚖️ Admin Functionality

- Admin users can:
  - Access the `admin-product.html` page.
  - Add, edit, and delete products.
  - Only visible if user is admin (via localStorage flag `isAdmin`).

## ⚡ Reusable Helper Functions

**Located in**: `utils/cartFunctions.js`, `utils/api.js`

### `updateDOMWithCartData()`

- Syncs cart content between localStorage and the UI.

### `getAggregatedCart()`

- Returns full cart details with quantities, subtotals, and total.

### `toggleAdminLink()`

- Shows/hides the admin panel link based on login status and user role.

## ⚠ Points of Improvement

- Centralize form validation for reuse across multiple pages.
- Refactor admin page to use modular components.
- Enhance user feedback messages and error handling.
- Improve responsive styling across all viewports.
- Extract common header/footer components.

## 📊 Deployment Instructions (Frontend)

1. Host HTML/CSS/JS files on any static hosting platform (e.g., GitHub Pages, Netlify, Vercel).
2. Ensure CORS is properly enabled on the backend.
3. Update base URL if backend endpoint changes.

## 🌐 Env Variables (if needed)

None used for frontend in local setup.

## 🚀 How to Start Locally

1. Clone the repo.
2. Use VS Code + Live Server or any other server to open `index.html`.
3. Log in using:
   - Admin credentials to access admin panel.
   - user register and login 
   - Or continue as guest.

## 📅 Final Note

This frontend is designed to be fully functional and scalable. The code is documented and structured in a way that makes it easy to hand over to the next group or developer. For any questions, refer to this README or reach out through the GitHub issues section.

