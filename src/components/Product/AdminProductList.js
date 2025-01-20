import { AdminProductRow } from "./AdminProductRow.js";

export function AdminProductList(products = []) {
  console.log(products);
  const template = `
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
          ${products.map((product) => AdminProductRow(product)).join("")}
        </tbody>
      </table>
    </div>
  `;

  return template;
}
