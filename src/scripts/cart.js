import { updateDOMWithCartData, renderCart } from "../utils/cartFunctions.js";
import { toggleAdminLink } from "../utils/api.js";

document.addEventListener("DOMContentLoaded", function () {
  updateDOMWithCartData();
  renderCart();
  toggleAdminLink();
    //  Show logged-in info or login prompt
    const userName = localStorage.getItem("firstName");
    const userEmail = localStorage.getItem("userEmail");
  
    const loginPrompt = document.getElementById("loginPrompt");
    const loginStatus = document.getElementById("loginStatus");
  
    if (userName && userEmail) {
      if (loginPrompt) loginPrompt.style.display = "none";
      if (loginStatus) {
        loginStatus.textContent = `Inloggad som: ${userName} (${userEmail})`;
        loginStatus.style.display = "block";
      }
    } else {
      if (loginPrompt) loginPrompt.style.display = "block";
      if (loginStatus) loginStatus.style.display = "none";
    }
});