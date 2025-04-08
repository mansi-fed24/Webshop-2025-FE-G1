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

    // validate form



    const { products } = getAggregatedCart()

    const body = JSON.stringify({
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        phoneNumber: form.phoneNumber.value,
        address: `${form.streetAddress.value}, ${form.city.value} ${form.postcode.value}`,
        products: products.map(p => ({productId: p._id, quantity: p.quantity}))
    }, null, 2)

    console.log(body)

    // handle http



    
}