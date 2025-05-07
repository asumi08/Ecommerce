const products = [
    {
        id: 1,
        name: "AMD Ryzen 7 7800X3D",
        price: 17024,
        image: "/api/placeholder/400/320",
        category: "cpu",
        specs: "8-Core, 16-Thread, Up to 5.0GHz"
    },
    {
        id: 2,
        name: "Intel Core i9-14900K",
        price: 33039.44,
        image: "/api/placeholder/400/320",
        category: "cpu",
        specs: "24-Core (8P+16E), 32-Thread, Up to 6.0GHz"
    },
    {
        id: 11,
        name: "AMD Ryzen 5 7600X",
        price: 11799,
        image: "/api/placeholder/400/320",
        category: "cpu",
        specs: "6-Core, 12-Thread, Up to 5.3GHz"
    },
    {
        id: 12,
        name: "Intel Core i5-14600K",
        price: 15999,
        image: "/api/placeholder/400/320",
        category: "cpu",
        specs: "14-Core (6P+8E), 20-Thread, Up to 5.3GHz"
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalItems;
}

function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-specs">${product.specs}</p>
                <p class="product-price">₱${product.price.toLocaleString('en-PH')}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', handleAddToCart);
    });
}

function handleAddToCart(e) {
    const productId = parseInt(e.target.dataset.id);
    const product = products.find(p => p.id === productId);
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function initCartModal() {
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeCartBtn = document.querySelector('.close-cart-modal');
    const continueShoppingBtn = document.getElementById('continue-shopping');
    const proceedCheckoutBtn = document.getElementById('proceed-checkout');
    
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        openCartModal();
    });
    
    closeCartBtn.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });
    
    continueShoppingBtn.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });
    
    proceedCheckoutBtn.addEventListener('click', function() {
        alert('Proceeding to checkout...');
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
}

function openCartModal() {
    const cartModal = document.getElementById('cart-modal');
    loadCartItems();
    cartModal.style.display = 'block';
}

function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
        document.getElementById('cart-total-price').textContent = '₱0.00';
        return;
    }
    
    let cartHTML = '';
    let totalPrice = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        
        cartHTML += `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-image">
                    <img src="/api/placeholder/80/80" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-specs">${item.specs || ''}</div>
                </div>
                <div class="cart-item-price">₱${item.price.toLocaleString('en-PH')}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="99" data-id="${item.id}">
                    <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
                </div>
                <div class="cart-item-remove" data-id="${item.id}">×</div>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = cartHTML;
    document.getElementById('cart-total-price').textContent = `₱${totalPrice.toLocaleString('en-PH')}`;
    
    addCartItemEventListeners();
}

function addCartItemEventListeners() {
    const decreaseButtons = document.querySelectorAll('.decrease-quantity');
    decreaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            updateCartItemQuantity(id, 'decrease');
        });
    });
    
    const increaseButtons = document.querySelectorAll('.increase-quantity');
    increaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            updateCartItemQuantity(id, 'increase');
        });
    });
    
    const quantityInputs = document.querySelectorAll('.quantity-input');
    quantityInputs.forEach(input => {
        input.addEventListener('change', function() {
            const id = parseInt(this.dataset.id);
            const newQuantity = parseInt(this.value);
            if (newQuantity > 0) {
                updateCartItemQuantity(id, 'set', newQuantity);
            } else {
                this.value = 1;
                updateCartItemQuantity(id, 'set', 1);
            }
        });
    });
    
    const removeButtons = document.querySelectorAll('.cart-item-remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            removeCartItem(id);
        });
    });
}

function updateCartItemQuantity(id, action, value = null) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id === id);
    
    if (itemIndex !== -1) {
        if (action === 'increase') {
            cart[itemIndex].quantity += 1;
        } else if (action === 'decrease') {
            if (cart[itemIndex].quantity > 1) {
                cart[itemIndex].quantity -= 1;
            }
        } else if (action === 'set' && value !== null) {
            cart[itemIndex].quantity = value;
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        loadCartItems();
    }
}

function removeCartItem(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    loadCartItems();
}

window.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    updateCartCount();
    initCartModal();
});