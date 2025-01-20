export function AdminProductRow(product) {
  const template = `
    <tr>
      <td>${product._id}</td>
      <td>
        <input type="text" value="${product.name}" class="edit-input">
      </td>
      <td>
        <input type="number" value="${product.price}" class="edit-input">
      </td>
      <td>
        <button onclick="alert('Save clicked')">Save</button>
        <button onclick="alert('Delete clicked')">Delete</button>
      </td>
    </tr>
  `;

  return template;
}
