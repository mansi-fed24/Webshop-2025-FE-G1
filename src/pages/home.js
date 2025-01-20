import { ProductList } from "../components/Product/ProductList.js";
import { fetchProducts } from "../utils/api.js";

export async function HomePage() {
  const products = await fetchProducts();

  const element = document.createElement("div");
  element.className = "home-container";

  element.innerHTML = `
    <h1>Welcome to Hakim Livs</h1>
  `;

  const productList = ProductList(products);
  console.log(productList);
  element.appendChild(productList);

  return element;
}
