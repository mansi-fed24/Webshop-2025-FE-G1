import { fetchProducts } from "../utils/api.js";
import {
  addProductToCart,
  getCartFromLocalStorage,
  saveCartToLocalStorage,
  updateLocalStorageCart,
  updateDOMWithCartData,
} from "../utils/cartFunctions.js";
import { toggleAdminLink } from "../utils/api.js";

document.addEventListener("DOMContentLoaded", function () {
  loadProducts();
  updateDOMWithCartData();
  toggleAdminLink();
});

// Function to fetch and render products
async function loadProducts() {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "<p>&nbsp; Laddar produkter... </p>"; // Temporary message while loading

  try {
    const products = await fetchProducts();
    productsContainer.innerHTML = ""; // Clear loading text

    if (products.length > 0) {
      products.forEach((product) => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
      });
    } else {
      productsContainer.innerHTML = "<p>Inga produkter tillgängliga.</p>";
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    productsContainer.innerHTML = "<p class=`error-msg`>🤷 Något gick fel vid inladdning av produkterna. </p>";
  }
}

// Function to create an individual product card
function createProductCard(product) {
  const element = document.createElement("div");
  element.className = "product-card";

  element.innerHTML = `
    <h3>${product.name}</h3>
    <p>${product.price.toFixed(2)} kr</p>
    <button class="add-to-cart-btn">Lägg i varukorg</button>
  `;

  element.querySelector(".add-to-cart-btn").addEventListener("click", () => {
    addProductToCart(product);
  });

  return element;
}

// display the user's email and admin status
// in the welcome message
// and show/hide the admin panel link accordingly


document.addEventListener("DOMContentLoaded", () => {
  const firstName = localStorage.getItem("firstName");
  const email = localStorage.getItem("userEmail");
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  
  const welcomeMsg = document.getElementById("welcomeMessage");
  
  if (firstName && email) {
    welcomeMsg.textContent = `Inloggad som: ${firstName} (${email})`;

    const adminLink = document.getElementById("admin-link");
    if (isAdmin) {
      // Show admin panel 
      adminLink.style.display = "block";
    } else {
      // Hide it if user is not admin
      adminLink.style.display = "none";
    }
  }
});
