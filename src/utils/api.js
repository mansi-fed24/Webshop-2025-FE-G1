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

// global function for toggling admin-link's visibility on/off based on admin's login status from localStorage. moved out of index.js to here for global use
export function isAdmin() {
  return localStorage.getItem("isAdmin") === "true";
}

export async function toggleAdminLink() {
  const res = await fetch(getBaseUrl() + "api/auth/me", {
    headers: {
      "hakim-livs-token": localStorage.getItem('hakim-livs-token')
    }
  })
  
  const data = await res.json()

  const loginLi = document.getElementById('login-li')
  const adminLi = document.getElementById('admin-li')

  if (!data.isAdmin && adminLi) {
    adminLi.style.display = 'none'
  }

  if (data._id) {
    // logged in
    const logOutButton = document.createElement('button')
    logOutButton.innerText = "Logga ut"
    logOutButton.addEventListener('click', logOut)
    loginLi.innerHTML = ""
    loginLi.append(logOutButton)
  }
}

function logOut() {
  localStorage.removeItem('hakim-livs-token')
  localStorage.removeItem('isAdmin')
  localStorage.removeItem('firstName')
  localStorage.removeItem('lastName')
  localStorage.removeItem('userEmail')
  window.location.reload()
}