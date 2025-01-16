export function AdminPage() {
  const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
  ];

  const template = `
    <div class="admin-container">
      <div class="security-warning">
        ⚠️ WARNING: This is an unsecured demo page. Do not use in production!
      </div>
      
      <h2>Product Management</h2>
      
      <div class="admin-products">
        <table class="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${products.map(product => `
              <tr>
                <td>${product.id}</td>
                <td>
                  <input type="text" value="${product.name}" class="edit-input">
                </td>
                <td>
                  <input type="number" value="${product.price}" class="edit-input">
                </td>
                <td>
                  <button onclick="alert('Save clicked')">Save</button>
                  <button onclick="alert('Delete clicked')">Delete</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  return template;
}