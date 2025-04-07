export function addProductToCart(product) {
	updateLocalStorageCart(function(cart) {
		cart.push(product)
	})
}

// Safely retreives cart from localStorage, guaranteed to return an array
export function getCartFromLocalStorage() {
	try {
		const cart = JSON.parse(localStorage.getItem('hakim-livs-cart'))
		if (!Array.isArray(cart)) return [];
		return cart;
	} catch (error) {
		console.warn(`localStorage cart contained invalid JSON`)
		return []
	}
}

// Saves cart to local storage
export function saveCartToLocalStorage(cart) {
	localStorage.setItem('hakim-livs-cart', JSON.stringify(cart))
	updateDOMWithCartData()
}

/*
	Calls the provided callback, passing in the retreived cart, then saves
	Example usage: 
	updateLocalStorageCart(function(cart) {
		cart.push(newProduct)
	})
*/
export function updateLocalStorageCart(callbackFunction) {
	const cart = getCartFromLocalStorage()
	callbackFunction(cart)
	saveCartToLocalStorage(cart)
}

/*
	This function updates the DOM whenever the cart is saved
	For example, the cart count in the header
*/
export function updateDOMWithCartData() {
	const cart = getCartFromLocalStorage()
	document.querySelector('.cart-count').innerText = cart.length;
}