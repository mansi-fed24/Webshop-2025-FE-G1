
// javascript for the add product form 
  // Get references to elements
  const addProductBtn = document.querySelector(".add-product-btn"); // Add product button
  const productFormContainer = document.getElementById("productFormContainer"); // Form container
  const cancelFormBtns = document.querySelectorAll("#cancelFormBtn, #cancelFormBtnBottom"); // Both cancel buttons
  
  // Show form when "Add Product" is clicked
  addProductBtn.addEventListener("click", function () {
      productFormContainer.style.display = "block"; // Show form
  });
  
  // Hide form when "Cancel" is clicked
  cancelFormBtns.forEach(button => {
      button.addEventListener("click", function () {
          productFormContainer.style.display = "none"; // Hide form
      });
  });
  


//javascript for save product form to database

// Get references to the form and its inputs
const productForm = document.getElementById('productForm');

// Add event listener to the form submission
productForm.addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the form data
    const productData = {
        image: document.getElementById('productImage').value,
        name: document.getElementById('productName').value,
        price: parseFloat(document.getElementById('productPrice').value),
        unit: document.getElementById('productUnit').value,
        brand: document.getElementById('productBrand').value,
        discount: parseFloat(document.getElementById('productDiscount').value),
        description: document.getElementById('productDescription').value,
        category: document.getElementById('productCategory').value,
        stock: parseInt(document.getElementById('productStock').value),
    };
    console.log('Product Data:', productData);


    try {
        // Make a POST request to the backend to add the new product
        const response = await axios.post('https://webshop-2025-be-g1-blush.vercel.app/api/products', productData);

        // Check if the product was successfully added
        if (response.status === 201) {
            alert('Product added successfully!');
            loadProductList(); // Reload the product list to display the new product
            productForm.reset(); // Reset the form fields
            productFormContainer.style.display = "none"; // Hide the form after submission
        } else {
            alert('Failed to add product. Please try again.');
        }
    } catch (error) {
        // Handle any errors that occurred during the API request
        console.error('Error adding product:', error);
        alert('Error adding product. Please try again later.');
    }
});
