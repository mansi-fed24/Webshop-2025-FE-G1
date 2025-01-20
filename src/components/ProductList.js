export function ProductList(products = []) {
  const template = `
    <div class="products">
      ${products
        .map(
          (product) => `
        <div class="product-card">
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
          <button onclick="alert('Added to cart')">Add to Cart</button>
        </div>
      `
        )
        .join("")}
    </div>
  `;

  return template;
}
