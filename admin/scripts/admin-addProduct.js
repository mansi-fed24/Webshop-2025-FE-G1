
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

// Fetch categories from backend and populate the dropdown
async function loadCategories() {
    try {
        const response = await axios.get("https://webshop-2025-be-g1-blush.vercel.app/api/categories");
        const categories = response.data;

        const categorySelect = document.getElementById("productCategory");
        categorySelect.innerHTML = ""; // Clear existing options

        categories.forEach(category => {
            let option = document.createElement("option");
            option.value = category._id; // Save ID for backend
            option.textContent = category.name; // Show name in dropdown
            categorySelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
}

// Call function when page loads
document.addEventListener("DOMContentLoaded", () => {
    loadCategories(); // Load categories on page load

    //  Handle product form submission and send data to backend
document.getElementById("productForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const productData = {
        image: document.getElementById("productImage").value,
        name: document.getElementById("productName").value,
        price: parseFloat(document.getElementById("productPrice").value),
        unit: document.getElementById("productUnit").value,
        brand: document.getElementById("productBrand").value,
        discount: parseFloat(document.getElementById("productDiscount").value),
        description: document.getElementById("productDescription").value,
        category: document.getElementById("productCategory").value, // Use category ID
        stock: parseInt(document.getElementById("productStock").value, 10),
        amount: 1 // Default amount (can be changed later)
    };
    console.log("Product Data:", productData);
    
    try {
        const response = await axios.post("https://webshop-2025-be-g1-blush.vercel.app/api/products", productData);

        console.log("Response:", response); // Log API response
        if (response.status === 201) {
            alert("Product added successfully!");
            document.getElementById("productForm").reset(); // Clear form
            loadProductList(); // Refresh product list
        } else {
            alert("Failed to add product.");
        }
    } catch (error) {
        console.error("Error adding product:", error);
        alert("Error adding product. Please try again.");
    }
});
});

