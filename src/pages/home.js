import { ProductList } from "../components/ProductList.js";
import { fetchProducts } from "../utils/api.js";

export async function HomePage() {
  const products = await fetchProducts();

  const template = `
    <div class="home-container">
      <h1>Welcome to Hakim Livs</h1>
      ${ProductList(products)}
    </div>
  `;

  return template;
}
