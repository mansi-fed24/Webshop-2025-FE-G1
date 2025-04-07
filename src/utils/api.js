
// export function getBaseUrl() {
//   // Get the group number from the hostname to determine the base URL for BE
//   const regex = /webshop\-2025\-(g[0-9]{1,2})\-fe/g;
//   const href = window.location.href;
//   const match = regex.exec(href);
//   console.log(match);
//   if (match) {
//     const group = match[1];
//     return `https://webshop-2025-be-g1-blush.vercel.app/`;
  
//     }
//   return "http://localhost:3000/";
// }

export function getBaseUrl() {
  // if (!window.location.href.includes('localhost')) {
    return "https://webshop-2025-be-g1-blush.vercel.app/";
  // }
  // return "http://localhost:3000/";
}

export async function fetchProducts(endpoint = "api/products") {
  //! DONT USE THIS IN PRODUCTION
  const url = `${getBaseUrl()}${endpoint}`;
  const response = await fetch(url);
  if(response.ok){
    const data = await response.json();
    return data;
  }
  return [];    
}




// Added function for fetching pre-existing categories from the database to use for functions in page-specific javascript-files
export async function fetchCategories(endpoint = "api/categories") {
	  const url = `${getBaseUrl()}${endpoint}`;
    const response = await fetch(url)
    if(response.ok) {
      const categories = await response.json();
      return data;
    }

  return [categories];
 }
