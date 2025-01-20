export function AdminProductRow(product) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${product._id}</td>
    <td>
      <input type="text" value="${product.name}" class="edit-input">
    </td>
    <td>
      <input type="number" value="${product.price}" class="edit-input">
    </td>
    <td>
      <button class="save-btn">Save</button>
      <button class="delete-btn">Delete</button>
    </td>
  `;

  // Add event listeners
  row.querySelector(".save-btn").addEventListener("click", () => {
    handleSave(product, row);
  });

  row.querySelector(".delete-btn").addEventListener("click", () => {
    handleDelete(product);
  });

  return row;
}

function handleSave(product, row) {
  const name = row.querySelector('input[type="text"]').value;
  const price = row.querySelector('input[type="number"]').value;
  console.log("Saving:", { ...product, name, price });
}

function handleDelete(product) {
  console.log("Deleting:", product);
}
