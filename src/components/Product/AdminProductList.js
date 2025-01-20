import { AdminProductRow } from "./AdminProductRow.js";

export function AdminProductList(products = []) {
  const container = document.createElement("div");
  container.className = "admin-products";

  container.innerHTML = `
    <table class="product-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
    </table>
  `;

  const tbody = document.createElement("tbody");
  products.forEach((product) => {
    tbody.appendChild(AdminProductRow(product));
  });

  container.querySelector("table").appendChild(tbody);

  return container;
}
