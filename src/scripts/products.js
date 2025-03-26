import { fetchProducts } from "../utils/api.js";

document.addEventListener("DOMContentLoaded", loadProducts);

// Function to fetch and render products
async function loadProducts() {
	const productsContainer = document.getElementById("products");
	productsContainer.innerHTML = "<p>Loading products..</p>"; // Temporary message while loading

	try {
		const products = await fetchProducts();
		productsContainer.innerHTML = ""; // Clear loading text

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
		<img src="https://tinypic.host/images/2025/03/26/placeholder-img-160x160.png">
    <h3>${product.name}</h3>
    <p>$${product.price.toFixed(2)}</p>
    <button class="add-to-cart-btn">Add to Cart</button>
  `;

	//   element.innerHTML = `
	// <img src="${product.image}" alt="${product.name}">
	//   <h3>${product.name}</h3>
	//   <p>$${product.price.toFixed(2)}</p>
	//   <button class="add-to-cart-btn">Add to Cart</button>
	// `;

	element.querySelector(".add-to-cart-btn").addEventListener("click", () => {
		alert(`Adding ${product.name} to cart\nFunctionality not implemented yet`);
	});

	return element;
}

// document.addEventListener("DOMContentLoaded", () => {
// 	const productsContainer = document.getElementById("products");

// 	fetch("https://webshop-2025-be-g1-blush.vercel.app/api/products")
// 		.then((response) => response.json())
// 		.then((products) => {
// 			products.forEach((product) => {
// 				const productCard = document.createElement("div");
// 				productCard.classList.add("product");

// 				productCard.innerHTML = `
//                     <img src="${product.image}" alt="${product.name}">
//                     <h2>${product.name}</h2>
//                     <p>${product.description}</p>
//                     <span>Price: $${product.price}</span>
//                 `;

// 				productsContainer.appendChild(productCard);
// 			});
// 		})
// 		.catch((error) => console.error("Error fetching products:", error));
// });
