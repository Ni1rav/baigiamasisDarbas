
const addToCartButton = document.getElementById('add-to-cart-button');
const cartCount = document.getElementById('cart-count');

// Update the cart count
const cart = JSON.parse(localStorage.getItem('cart')) || [];
cartCount.textContent = `Cart (${cart.length})`;

addToCartButton.addEventListener('click', () => {
  // Get the product details
  const productName = 'Product 1';
  const productPrice = 10.99;

  // Add the product to the cart
  cart.push({ name: productName, price: productPrice });
  localStorage.setItem('cart', JSON.stringify(cart));

  // Update the cart count
  cartCount.textContent = `Cart (${cart.length})`;
});

// Remove a product from the cart
function removeProductFromCart(productName) {
  // Find the product in the cart
  const productIndex = cart.findIndex((product) => product.name === productName);

  // Remove the product from the cart
  if (productIndex!== -1) {
    cart.splice(productIndex, 1);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart count
    cartCount.textContent = `Cart (${cart.length})`;
  }
}

// Add event listeners to remove products from the cart
const cartList = document.getElementById('cart-list');
cartList.addEventListener('click', (event) => {
  if (event.target.matches('.remove-button')) {
    const productName = event.target.getAttribute('data-product-name');
    removeProductFromCart(productName);
  }
});