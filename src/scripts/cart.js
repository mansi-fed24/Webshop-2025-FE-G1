import { updateDOMWithCartData, renderCart } from "../utils/cartFunctions.js";
import { toggleAdminLink } from "../utils/api.js";

document.addEventListener("DOMContentLoaded", function () {
  updateDOMWithCartData();
  renderCart();
  toggleAdminLink();
});