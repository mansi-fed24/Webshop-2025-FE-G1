export function getBaseUrl() {
  // if (!window.location.href.includes('localhost')) {
  return "https://webshop-2025-be-g1-blush.vercel.app/";
  // }
  // return "http://localhost:3000/";
}

export async function fetchProducts(categoryName = null) {
  let endpoint = "api/products";
  if (categoryName) {
    endpoint += `?category=${encodeURIComponent(categoryName)}`;
  }

  const url = `${getBaseUrl()}${endpoint}`;
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  return [];
}
// Added function for fetching pre-existing categories from the database to use for functions in page-specific javascript-files
export async function fetchCategories(endpoint = "api/categories") {
  const url = `${getBaseUrl()}${endpoint}`;
  const response = await fetch(url);

  if (response.ok) {
    return await response.json();
  }

  return [];
}
