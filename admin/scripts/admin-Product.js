// Function to fetch product data and fill in the table using axios
async function loadProductList() {
    try {
      // Make an axios GET request to fetch product data from the backend
      const response = await axios.get('https://webshop-2025-be-g1-blush.vercel.app/api/products');  
      
      // The product data is available in the response.data property
      const products = response.data;
  
      // Get the tbody element where rows will be inserted
      const tableBody = document.getElementById('productBody');
  
      // Loop through the products and add each one as a row in the table
      products.forEach(product => {
        const row = document.createElement('tr');
  
        row.innerHTML = `
          <td><img src="${product.image}" alt="${product.name}" width="50" height="50"></td>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>${product.unit}</td>
          <td>${product.amount}</td>
          <td>${product.brand}</td>
          <td>${product.discount}</td>
          <td>${product.description}</td>
          <td>${product.category}</td>
          <td>${product.stock}</td>
        `;
  
        // Append the row to the table body
        tableBody.appendChild(row);
      });
    } catch (error) {
      // Handle error in case of failure
      console.error('Error loading product data:', error);
      alert('Error loading product data. Please try again later.');
    }
  }
  
  // Call the function to load the product list when the page is loaded
  window.onload = loadProductList;
  