export async function fetchProducts(endpoint = "/api/products") {
  // Simulating network delay
  //! DONT USE THIS IN PRODUCTION
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000${endpoint}`)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}
