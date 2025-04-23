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
        id: 3,
        name: "NVIDIA RTX 4080 SUPER",
        price: 55999.44,
        image: "/api/placeholder/400/320",
        category: "gpu",
        specs: "16GB GDDR6X, 10240 CUDA Cores"
    },
    {
        id: 4,
        name: "AMD Radeon RX 7900 XTX",
        price: 53199.44,
        image: "/api/placeholder/400/320",
        category: "gpu",
        specs: "24GB GDDR6, 12288 Stream Processors"
    },
    {
        id: 5,
        name: "ASUS ROG Strix X670E-E Gaming",
        price: 24079.44,
        image: "/api/placeholder/400/320",
        category: "motherboard",
        specs: "AMD AM5, DDR5, PCIe 5.0, ATX"
    },
    {
        id: 6,
        name: "MSI MPG Z790 EDGE WIFI",
        price: 21279.44,
        image: "/api/placeholder/400/320",
        category: "motherboard",
        specs: "Intel LGA 1700, DDR5, PCIe 5.0, ATX"
    },
    {
        id: 7,
        name: "G.SKILL Trident Z5 RGB 32GB",
        price: 8959.44,
        image: "/api/placeholder/400/320",
        category: "ram",
        specs: "DDR5-6000MHz, CL36, 2x16GB Kit"
    },
    {
        id: 8,
        name: "Corsair Vengeance RGB 64GB",
        price: 12319.44,
        image: "/api/placeholder/400/320",
        category: "ram",
        specs: "DDR5-5600MHz, CL40, 2x32GB Kit"
    },
    {
        id: 9,
        name: "Samsung 990 PRO 2TB",
        price: 11199.44,
        image: "/api/placeholder/400/320",
        category: "storage",
        specs: "M.2 NVMe SSD, PCIe 4.0, 7450MB/s Read"
    },
    {
        id: 10,
        name: "WD Black SN850X 1TB",
        price: 7279.44,
        image: "/api/placeholder/400/320",
        category: "storage",
        specs: "M.2 NVMe SSD, PCIe 4.0, 7300MB/s Read"
    }
];

let cart = [];

const productGrid = document.getElementById('product-grid');
const categoryBtns = document.querySelectorAll('.category-btn');
const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeModal = document.querySelector('.close-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.querySelector('.cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const countdownElement = document.getElementById('countdown');

function displayProducts(category = 'all') {
    productGrid.innerHTML = '';
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    filteredProducts.forEach(product => {
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
    
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-specs">${item.specs}</p>
                    <p class="cart-item-price">₱${item.price.toLocaleString('en-PH')}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        <span class="remove-item" data-id="${item.id}">Remove</span>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        
        const minusBtns = document.querySelectorAll('.quantity-btn.minus');
        const plusBtns = document.querySelectorAll('.quantity-btn.plus');
        const removeBtns = document.querySelectorAll('.remove-item');
        
        minusBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                updateQuantity(parseInt(btn.dataset.id), -1);
            });
        });
        
        plusBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                updateQuantity(parseInt(btn.dataset.id), 1);
            });
        });
        
        removeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                removeFromCart(parseInt(btn.dataset.id));
            });
        });
    }
    
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    cartTotalPrice.textContent = `₱${totalPrice.toLocaleString('en-PH')}`;
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity < 1) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

cartIcon.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

function startCountdown() {
    let hours = 23;
    let minutes = 59;
    let seconds = 59;
    
    const countdownInterval = setInterval(() => {
        seconds--;
        
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            
            if (minutes < 0) {
                minutes = 59;
                hours--;
                
                if (hours < 0) {
                    clearInterval(countdownInterval);
                    countdownElement.textContent = "Deal Ended";
                    return;
                }
            }
        }
        
        countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

displayProducts();
startCountdown();