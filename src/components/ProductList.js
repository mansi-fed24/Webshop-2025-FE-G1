export function ProductList() {
  const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
  ];

  const template = `
    <div class="products">
      ${products.map(product => `
        <div class="product-card">
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
          <button onclick="alert('Added to cart')">Add to Cart</button>
        </div>
      `).join('')}
    </div>
  `;

  return template;
}