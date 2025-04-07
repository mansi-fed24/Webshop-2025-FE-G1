import { fetchProducts, fetchCategories } from "../utils/api.js";
import {
	addProductToCart,
	updateDOMWithCartData
} from '../utils/cartFunctions.js'

document.addEventListener('DOMContentLoaded', function() {
	updateDOMWithCartData()
})

function createCategoryButton(category) {
	const btn = document.createElement("button");
	btn.classList.add(`category-button`);
	btn.innerText = category.name;

	btn.addEventListener("click", function () {
		// define a function which is called when the button is clicked (see below)
		handleCategoryButtonClick(category); // placeholder temp  ?
	});
	return btn;
}

async function renderCategoryButtons() {
	const categories = await fetchCategories();

	categories.forEach(function (category) {
		const btn = createCategoryButton(category);
		document.querySelector("#category-buttons").appendChild(btn);
	});
}

async function handleCategoryButtonClick(category) {
	// fetch to the backend to get all the products of the given category
	// consider adding a function to api.js for this
}

// additional eventListener line for loading in the categoryButtons also
document.addEventListener("DOMContentLoaded", renderCategoryButtons);
document.addEventListener("DOMContentLoaded", loadProducts);

// Function to fetch and render products
async function loadProducts() {
	const productsContainer = document.getElementById("products");

	productsContainer.innerHTML = "<p>Loading products..</p>"; // Temporary message while loading

	//#region
	//  Functionality for sorting alphabetically, unfinished (for sprint2): //
	// let sortBtn = document.getElementById("#sortBtn");
	// productsContainer.innerHTML = `
	//   <button class="sortBtn">Sort alphabetically</button>`;
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
			productsContainer.innerHTML = "<p>No products available.</p>";
		}
	} catch (error) {
		console.error("Error fetching products:", error);
		productsContainer.innerHTML = "<p>Failed to load products.</p>";
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
