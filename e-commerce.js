document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.getElementById('add-to-cart-btn');
    const confirmationMessage = document.getElementById('confirmation-message');

    addToCartButton.addEventListener('click', () => {
        confirmationMessage.textContent = 'Product has been added to your cart!';
        confirmationMessage.style.visibility = 'visible';
        confirmationMessage.style.opacity = '1';
    });
});
// Smooth scroll functionality for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
