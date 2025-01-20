import { AdminProductList } from "../components/Product/AdminProductList.js";

export async function AdminPage() {
  const products = [
    {
      _id: 1,
      name: "Under development: Feature missing or incomplete",
      price: 19.99,
    },
  ];

  const element = document.createElement("div");
  element.className = "admin-container";

  element.innerHTML = `
    <div class="security-warning">
      ⚠️ WARNING: This is an unsecured demo page. Do not use in production!
    </div>
    <h2>Product Management</h2>
  `;

  element.appendChild(AdminProductList(products));

  return element;
}
