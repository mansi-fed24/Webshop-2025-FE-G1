import {
    updateDOMWithCartData,
    getAggregatedCart
} from '../utils/cartFunctions.js'

// DOM
const form = document.querySelector('form')
const miniCartContainer = document.querySelector('.mini-cart-container')

// startup
updateDOMWithCartData()
renderCheckoutForm()
document.addEventListener('keyup', e => {
    if (e.ctrlKey && e.key.toLowerCase() === 'm') {
        autofillFormWithTestData()
    }
})

// 1: Handle form submission when user clicks "Beställ"
form.addEventListener('submit', handleCheckout)

function renderCheckoutForm() {
    const { cart, products, subtotal, total, moms } = getAggregatedCart()
    console.log({cart, products, subtotal, total, moms})

    for (const product of products) {
        miniCartContainer.innerHTML += `
            <div class="product">
                <h4>${product.name}</h4>
                <p>${product.price.toFixed()}:-</p>
                <p>x${product.quantity}</p>
                <p>= ${product.total.toFixed()}</p>
            </div>
        `
    }

    miniCartContainer.innerHTML += `
        <br>
        <p>
            <strong>Delsumma</strong>:
            ${subtotal.toFixed()}:-
        </p>
        <p>
            <strong>+ moms</strong>:
            ${moms.toFixed()}:-
        </p>
        <p>
            <strong>= total</strong>:
            ${total.toFixed()}:-
        </p>
        <br>
    `
}

function autofillFormWithTestData() {
    form.firstName.value = "Doug"
    form.lastName.value = "Alcedo"
    form.email.value = "dougalcedo@gmail.com"
    form.streetAddress.value = "Älgvägen 18"
    form.city.value = "Upplands Väsby"
    form.postcode.value = "11112"
    form.phoneNumber.value = "077 321 06 04"
}

async function handleCheckout(e) {
    e.preventDefault()
    console.log(" Form submitted — ready to process order");
    
    // 2: Validate the required fields before sending the request
const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'streetAddress',
    'city',
    'postcode',
    'phoneNumber'
  ];
  
    for (const name of requiredFields) {
        const value = form[name].value.trim();
        if (!value) {
        alert(`Vänligen fyll i: ${name}`); 
        return;
        }
    }
  // 3: Ensure the cart is not empty
  // as the restrictions are already there empty cart will not open but we double-check here for safety in case localStorage was cleared or corrupted
    const { products } = getAggregatedCart();

    if (!products || products.length === 0) {
    alert("Din varukorg är tom. Lägg till produkter innan du beställer."); // "Your cart is empty"
    return;
    }

    // 4A: Extract the User id (if logged in)
    localStorage.getItem('hakim-livs-token')

    function getUserIdFromToken() {
        const token = localStorage.getItem('hakim-livs-token');
        if (!token) return null;
        try {
          const payload = JSON.parse(atob(token.split('.')[1]));
          return payload._id;
        } catch (err) {
          console.error("Invalid token:", err);
          return null;
        }
      }
      
      // 4B: Build the request payload and include the user id if available
        const userId = getUserIdFromToken(); // extract user ID from token

        const body = {
        firstName: form.firstName.value.trim(),
        lastName: form.lastName.value.trim(),
        email: form.email.value.trim(),
        phoneNumber: form.phoneNumber.value.trim(),
        address: `${form.streetAddress.value.trim()}, ${form.city.value.trim()} ${form.postcode.value.trim()}`,
        products: products.map(p => ({
            productId: p._id,
            quantity: p.quantity
        }))
        };

        // Optionally add the user field if logged in
        if (userId) {
        body.user = userId;
        }

        console.log("Final payload to send:", body);

        // 5: Send the POST request and handle success or failure

        try {
            const res = await fetch('https://webshop-2025-be-g1-blush.vercel.app/api/orders', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
            });
          
            if (!res.ok) {
              const errorText = await res.text();
              throw new Error(errorText || 'Något gick fel vid beställningen.'); // “Something went wrong”
            }
          
            const result = await res.json();
            console.log("Order created successfully:", result);

            // Show the order confirmation modal
            document.getElementById("orderNumber").textContent = result.orderNumber; 
            document.getElementById("userEmail").textContent = form.email.value.trim();
            document.getElementById("orderConfirmationModal").style.display = "block";

          
            // Optional: Clear cart & alert order confirmation
            localStorage.removeItem("cart");
            alert("Tack för din beställning!");
           
          
          } catch (err) {
            console.error(" Error placing order:", err.message);
            alert("Kunde inte skicka beställningen. Försök igen.");
          }





    

    





    
}




