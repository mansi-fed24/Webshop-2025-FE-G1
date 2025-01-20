export function ProductCard(product) {
  const template = `
    <div class="product-card">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="alert('Added to cart')">Add to Cart</button>
    </div>
  `;

  return template;
}
