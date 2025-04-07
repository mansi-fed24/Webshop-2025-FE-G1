import { fetchProducts, fetchCategories } from "../utils/api.js";
import {
	addProductToCart,
	updateDOMWithCartData
} from '../utils/cartFunctions.js'

document.addEventListener('DOMContentLoaded', function() {
	updateDOMWithCartData()
})

// additional eventListener line for loading in the categoryButtons also
document.addEventListener("DOMContentLoaded", () => {
  renderCategoryButtons();
  loadProducts();
});

function createCategoryButton(category) {
  const btn = document.createElement("button");
  btn.classList.add(`category-button`);
  btn.innerText = category.name;
  btn.addEventListener("click", function () {
    // define a function which is called when the button is clicked (see below)
    handleCategoryButtonClick(category.name);
  });
  return btn;
}

async function renderCategoryButtons() {
  const categories = await fetchCategories();
  const container = document.querySelector("#category-buttons");

  const allProductsBtn = document.createElement("button");
  allProductsBtn.innerText = "Alla produkter";
  allProductsBtn.classList.add("category-button");
  allProductsBtn.addEventListener("click", loadProducts);
  container.appendChild(allProductsBtn);

  categories.forEach((category) => {
    const btn = createCategoryButton(category);
    container.appendChild(btn);
  });
}

// fetch to the backend to get all the products of the given category, and filter them locally
// consider adding a function to api.js for this
async function handleCategoryButtonClick(categoryName) {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "<p>Laddar produkter...</p>";

  try {
    const allProducts = await fetchProducts(); // Get all
    const filteredProducts = allProducts.filter(
      (product) => product.category.name === categoryName
    );
    productsContainer.innerHTML = ""; // Clear prev products

    if (filteredProducts.length > 0) {
      filteredProducts.forEach((product) => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
      });
    } else {
      productsContainer.innerHTML =
        "<p>Inga produkter finns under denna kategori.</p>";
    }
  } catch (error) {
    console.error("Error fetching filtered products:", error);
    productsContainer.innerHTML =
      "<p><i>Hoppsan! 🤷 Något gick visst snett när vi försökte ladda de filtrerade produkterna. </i> ¯_(ツ)_/¯</p>";
  }
}

// Function to fetch and render products
async function loadProducts() {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "<p>Laddar produkter...</p>";

  //#region Sort-btn code draft
  // //  Functionality for sorting alphabetically, unfinished (for sprint2): //
  // let sortBtn = document.getElementById("#sortBtn");
  // productsContainer.innerHTML = `
  //   <button id="sortBtn">Sort alphabetically</button>`;
  // products.sort((a, b) => a.name.localeCompare(b.name));
  //#endregion

  try {
    const products = await fetchProducts();
    productsContainer.innerHTML = ""; // Clear loading text;

    if (products.length > 0) {
      products.forEach((product) => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
      });
    } else {
      productsContainer.innerHTML = "<p>Inga produkter fanns att hämta. 🤷</p>";
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    productsContainer.innerHTML = "<p>Något gick fel vid inladdning av produkterna.</p>";
  }
}

// Function to create an individual product card
function createProductCard(product) {
  const element = document.createElement("div");
  element.className = "product-card";

  element.innerHTML = `
		<p>(${product.category.name})</p>
		
		<img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
		<h4><i> ${product.brand}</i>, ${product.amount} ${product.unit}</h4>
    <p>${product.price.toFixed(2)} kr</p>
    <button class="add-to-cart-btn">Add to Cart</button>
  `;

	element.querySelector(".add-to-cart-btn").addEventListener("click", () => {
		addProductToCart(product)
	});

  return element;
}

// async function loadCategories(product) {
// 	const categoryButtons = document.getElementById("category-buttons");

// 	categoryButtons = await fetchProducts();
// 	const element = document.createElement("div");
// 	element.className = "category";

// 	categories.innerHTML = `
//     <p>${product.category}</p>
//   `;
// 	return categories;
// }

// function createCategory() {}
