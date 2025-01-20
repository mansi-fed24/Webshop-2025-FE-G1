export function ProductCard(product) {
  const element = document.createElement("div");

  element.innerHTML = `
    <div class="product-card">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button class="add-to-cart-btn">Add to Cart</button>
    </div>
  `;

  // Add event listener
  element.querySelector(".add-to-cart-btn").addEventListener("click", () => {
    handleAddToCart(product);
  });

  return element;
}

function handleAddToCart(product) {
  console.log(`Adding ${product.name} to cart`);
  // Add cart logic here
}
