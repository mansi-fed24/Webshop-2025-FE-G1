document.addEventListener("DOMContentLoaded", () => {
	const productsContainer = document.getElementById("products");

	fetch("https://webshop-2025-be-g1-blush.vercel.app/api/products")
		.then((response) => response.json())
		.then((products) => {
			products.forEach((product) => {
				const productCard = document.createElement("div");
				productCard.classList.add("product");

				productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <span>Price: $${product.price}</span>
                `;

				productsContainer.appendChild(productCard);
			});
		})
		.catch((error) => console.error("Error fetching products:", error));
});
