import { ProductCard } from "./ProductCard.js";

export function ProductList(products = []) {
  const template = `
    <div class="products">
      ${products.map((product) => ProductCard(product)).join("")}
    </div>
  `;

  return template;
}
