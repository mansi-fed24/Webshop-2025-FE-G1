import { ProductCard } from "./ProductCard.js";

export function ProductList(products = []) {
  const element = document.createElement("div");
  element.className = "products";

  products.forEach((product) => {
    element.appendChild(ProductCard(product));
  });

  return element;
}
