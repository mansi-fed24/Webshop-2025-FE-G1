import { AdminProductList } from "../components/Product/AdminProductList.js";

export async function AdminPage() {
  const products = [
    {
      _id: 1,
      name: "Under development: Feature missing or incomplete",
      price: 19.99,
    },
  ];

  const template = `
    <div class="admin-container">
      <div class="security-warning">
        ⚠️ WARNING: This is an unsecured demo page. Do not use in production!
      </div>
      
      <h2>Product Management</h2>
      ${AdminProductList(products)}
    </div>
  `;

  return template;
}
